import { NextRequest, NextResponse } from 'next/server';
import db from '@/lib/db';
import { verifyAdminAuth, unauthorizedResponse } from '@/lib/serverAuth';

export async function GET(request: NextRequest) {
  // Verify admin authentication
  if (!(await verifyAdminAuth(request))) {
    return unauthorizedResponse();
  }
  try {
    // Get all feedbacks for admin (including pending and rejected)
    const feedbacks = db.prepare(`
      SELECT id, name, email, rating, comment, status, created_at 
      FROM feedbacks 
      ORDER BY 
        CASE status 
          WHEN 'pending' THEN 1 
          WHEN 'approved' THEN 2 
          WHEN 'rejected' THEN 3 
        END,
        created_at DESC
    `).all();

    return NextResponse.json(feedbacks);
  } catch (error) {
    console.error('Error fetching admin feedbacks:', error);
    return NextResponse.json({ error: 'Failed to fetch feedbacks' }, { status: 500 });
  }
}