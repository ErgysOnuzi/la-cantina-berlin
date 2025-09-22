import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import db from '@/lib/db';

// Simple admin authentication check
async function isAuthenticated(): Promise<boolean> {
  const cookieStore = await cookies();
  const adminSession = cookieStore.get('admin-session');
  return adminSession?.value === 'authenticated';
}

export async function GET() {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const reservations = db.prepare('SELECT * FROM reservations ORDER BY created_at DESC').all();
    return NextResponse.json(reservations);
  } catch (error) {
    console.error('Database error:', error);
    return NextResponse.json({ error: 'Failed to fetch reservations' }, { status: 500 });
  }
}

export async function PATCH(request: NextRequest) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const body = await request.json();
    const { id, status } = body;

    if (!id || !status || !['accepted', 'rejected', 'pending'].includes(status)) {
      return NextResponse.json({ error: 'Invalid reservation ID or status' }, { status: 400 });
    }

    const updateStmt = db.prepare('UPDATE reservations SET status = ? WHERE id = ?');
    const result = updateStmt.run(status, parseInt(id));
    
    if (result.changes === 0) {
      return NextResponse.json({ error: 'Reservation not found' }, { status: 404 });
    }

    const updatedReservation = db.prepare('SELECT * FROM reservations WHERE id = ?').get(parseInt(id));
    return NextResponse.json(updatedReservation);
  } catch (error) {
    console.error('Database error:', error);
    return NextResponse.json({ error: 'Failed to update reservation' }, { status: 500 });
  }
}