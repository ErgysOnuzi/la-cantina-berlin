import { NextRequest, NextResponse } from 'next/server';
import db from '@/lib/db';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate required fields
    if (!body.name || !body.phone || !body.email || !body.date || !body.time || !body.guests) {
      return NextResponse.json({ error: 'Alle Felder sind erforderlich.' }, { status: 400 });
    }

    // Validate guests count (1-100)
    const guestCount = parseInt(body.guests);
    if (isNaN(guestCount) || guestCount < 1 || guestCount > 100) {
      return NextResponse.json({ error: 'Anzahl der Gäste muss zwischen 1 und 100 liegen.' }, { status: 400 });
    }

    // Insert reservation into database
    const stmt = db.prepare(`
      INSERT INTO reservations (name, phone, email, date, time, guests, status, created_at)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `);

    const result = stmt.run(
      body.name,
      body.phone,
      body.email,
      body.date,
      body.time,
      guestCount,
      'accepted', // Auto-accept all reservations
      new Date().toISOString()
    );

    const reservationData = {
      id: result.lastInsertRowid,
      name: body.name,
      phone: body.phone,
      email: body.email,
      date: body.date,
      time: body.time,
      guests: guestCount,
      status: 'accepted',
      created_at: new Date().toISOString()
    };

    console.log('Reservation saved to database:', reservationData);

    return NextResponse.json({ 
      message: 'Reservierung erfolgreich gespeichert',
      reservation: reservationData 
    }, { status: 200 });

  } catch (error) {
    console.error('Error processing reservation:', error);
    return NextResponse.json({ error: 'Interner Serverfehler' }, { status: 500 });
  }
}

export async function GET() {
  try {
    const stmt = db.prepare(`
      SELECT id, name, phone, email, date, time, guests, status, created_at
      FROM reservations
      ORDER BY created_at DESC
    `);
    
    const reservations = stmt.all();
    return NextResponse.json(reservations);
  } catch (error) {
    console.error('Error fetching reservations:', error);
    return NextResponse.json({ error: 'Failed to fetch reservations' }, { status: 500 });
  }
}