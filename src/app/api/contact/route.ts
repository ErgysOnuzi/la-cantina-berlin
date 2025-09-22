import { NextRequest, NextResponse } from 'next/server';
import db from '@/lib/db';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate required fields
    if (!body.name || !body.email || !body.message) {
      return NextResponse.json({ error: 'Alle Felder sind erforderlich.' }, { status: 400 });
    }

    // Insert contact message into database
    const stmt = db.prepare(`
      INSERT INTO contact_messages (name, email, message, created_at)
      VALUES (?, ?, ?, ?)
    `);

    const result = stmt.run(
      body.name,
      body.email,
      body.message,
      new Date().toISOString()
    );

    const contactData = {
      id: result.lastInsertRowid,
      name: body.name,
      email: body.email,
      message: body.message,
      created_at: new Date().toISOString()
    };

    console.log('Contact message saved to database:', contactData);

    return NextResponse.json({ 
      message: 'Nachricht erfolgreich gesendet!',
      contact: contactData 
    }, { status: 200 });

  } catch (error) {
    console.error('Error processing contact message:', error);
    return NextResponse.json({ error: 'Interner Serverfehler' }, { status: 500 });
  }
}

export async function GET() {
  try {
    const stmt = db.prepare(`
      SELECT id, name, email, message, created_at
      FROM contact_messages
      ORDER BY created_at DESC
    `);
    
    const messages = stmt.all();
    return NextResponse.json(messages);
  } catch (error) {
    console.error('Error fetching contact messages:', error);
    return NextResponse.json({ error: 'Failed to fetch contact messages' }, { status: 500 });
  }
}