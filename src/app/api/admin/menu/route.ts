import { NextResponse } from 'next/server';
import db from '@/lib/db';

export async function GET() {
  try {
    const stmt = db.prepare(`
      SELECT id, title, description, price, category, is_available,
             title_de, title_en, description_de, description_en,
             category_de, category_en, allergens
      FROM menu_items
      ORDER BY category_de, title_de
    `);
    
    const items = stmt.all();
    return NextResponse.json(items);
  } catch (error) {
    console.error('Error fetching menu items:', error);
    return NextResponse.json({ error: 'Failed to fetch menu items' }, { status: 500 });
  }
}