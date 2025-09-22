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
    const images = db.prepare('SELECT * FROM gallery ORDER BY created_at DESC').all();
    return NextResponse.json(images);
  } catch (error) {
    console.error('Database error:', error);
    return NextResponse.json({ error: 'Failed to fetch gallery images' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const body = await request.json();
    const { image_url, description } = body;

    if (!image_url) {
      return NextResponse.json({ error: 'Image URL is required' }, { status: 400 });
    }

    const insertStmt = db.prepare('INSERT INTO gallery (image_url, description) VALUES (?, ?)');
    const result = insertStmt.run(image_url, description || null);
    
    const newImage = db.prepare('SELECT * FROM gallery WHERE id = ?').get(result.lastInsertRowid);
    return NextResponse.json(newImage);
  } catch (error) {
    console.error('Database error:', error);
    return NextResponse.json({ error: 'Failed to create gallery image' }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const url = new URL(request.url);
    const id = url.searchParams.get('id');

    if (!id) {
      return NextResponse.json({ error: 'Image ID is required' }, { status: 400 });
    }

    const deleteStmt = db.prepare('DELETE FROM gallery WHERE id = ?');
    const result = deleteStmt.run(parseInt(id));
    
    if (result.changes === 0) {
      return NextResponse.json({ error: 'Image not found' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Image deleted successfully' });
  } catch (error) {
    console.error('Database error:', error);
    return NextResponse.json({ error: 'Failed to delete image' }, { status: 500 });
  }
}