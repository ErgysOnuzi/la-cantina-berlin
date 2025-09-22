import { NextRequest, NextResponse } from 'next/server';
import db from '@/lib/db';

export async function GET() {
  try {
    // Get all approved feedbacks for public display
    const feedbacks = db.prepare(`
      SELECT id, name, rating, comment, created_at 
      FROM feedbacks 
      WHERE status = 'approved' 
      ORDER BY created_at DESC
    `).all();

    return NextResponse.json(feedbacks);
  } catch (error) {
    console.error('Error fetching feedbacks:', error);
    return NextResponse.json({ error: 'Failed to fetch feedbacks' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const { name, email, rating, comment } = await request.json();

    // Validate required fields
    if (!name || !email || !rating || !comment) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
    }

    // Validate rating
    if (rating < 1 || rating > 5) {
      return NextResponse.json({ error: 'Rating must be between 1 and 5' }, { status: 400 });
    }

    // Insert feedback
    const result = db.prepare(`
      INSERT INTO feedbacks (name, email, rating, comment)
      VALUES (?, ?, ?, ?)
    `).run(name, email, rating, comment);

    return NextResponse.json({ 
      message: 'Feedback submitted successfully', 
      id: result.lastInsertRowid 
    }, { status: 201 });
  } catch (error) {
    console.error('Error creating feedback:', error);
    return NextResponse.json({ error: 'Failed to submit feedback' }, { status: 500 });
  }
}