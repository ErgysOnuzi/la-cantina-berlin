import { NextRequest, NextResponse } from 'next/server';
import { generateAdminToken, createSecureCookie } from '@/lib/serverAuth';

export async function POST(request: NextRequest) {
  try {
    const { password } = await request.json();
    
    // Validate password against environment variable
    const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;
    
    if (!ADMIN_PASSWORD) {
      return NextResponse.json({ error: 'Server configuration error' }, { status: 500 });
    }
    
    if (password !== ADMIN_PASSWORD) {
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
    }
    
    // Generate secure JWT token
    const token = await generateAdminToken();
    const cookie = createSecureCookie(token);
    
    // Create response with secure cookie
    const response = NextResponse.json({ 
      success: true,
      message: 'Login successful' 
    });
    
    response.cookies.set(cookie);
    
    return response;
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json({ error: 'Login failed' }, { status: 500 });
  }
}