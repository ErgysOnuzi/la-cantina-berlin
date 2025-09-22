import { NextRequest, NextResponse } from 'next/server';
import db from '@/lib/db';

export async function GET() {
  try {
    const events = db.prepare('SELECT * FROM events ORDER BY date ASC').all();
    return NextResponse.json(events);
  } catch (error) {
    console.error('Database error:', error);
    return NextResponse.json({ error: 'Failed to fetch events' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { title, description, date, capacity } = body;

    if (!title || !date) {
      return NextResponse.json({ error: 'Title and date are required' }, { status: 400 });
    }

    const insertStmt = db.prepare('INSERT INTO events (title, description, date, capacity) VALUES (?, ?, ?, ?)');
    const result = insertStmt.run(title, description || null, date, capacity || null);
    
    const newEvent = db.prepare('SELECT * FROM events WHERE id = ?').get(result.lastInsertRowid);
    return NextResponse.json(newEvent);
  } catch (error) {
    console.error('Database error:', error);
    return NextResponse.json({ error: 'Failed to create event' }, { status: 500 });
  }
}