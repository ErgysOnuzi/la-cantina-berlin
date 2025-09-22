import { NextRequest, NextResponse } from 'next/server';
import db from '@/lib/db';

export async function GET() {
  try {
    const stmt = db.prepare(`
      SELECT id, title, description, date, capacity, created_at
      FROM events
      ORDER BY date DESC
    `);
    
    const events = stmt.all();
    return NextResponse.json(events);
  } catch (error) {
    console.error('Error fetching events:', error);
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

    const stmt = db.prepare(`
      INSERT INTO events (title, description, date, capacity, created_at)
      VALUES (?, ?, ?, ?, ?)
    `);

    const result = stmt.run(
      title,
      description || '',
      date,
      capacity ? parseInt(capacity) : 30,
      new Date().toISOString()
    );

    const newEvent = {
      id: result.lastInsertRowid,
      title,
      description: description || '',
      date,
      capacity: capacity ? parseInt(capacity) : 30,
      created_at: new Date().toISOString()
    };

    return NextResponse.json(newEvent);
  } catch (error) {
    console.error('Error creating event:', error);
    return NextResponse.json({ error: 'Failed to create event' }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const url = new URL(request.url);
    const id = url.searchParams.get('id');

    if (!id) {
      return NextResponse.json({ error: 'Event ID is required' }, { status: 400 });
    }

    const stmt = db.prepare('DELETE FROM events WHERE id = ?');
    const result = stmt.run(parseInt(id));

    if (result.changes === 0) {
      return NextResponse.json({ error: 'Event not found' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Event deleted successfully' });
  } catch (error) {
    console.error('Error deleting event:', error);
    return NextResponse.json({ error: 'Failed to delete event' }, { status: 500 });
  }
}