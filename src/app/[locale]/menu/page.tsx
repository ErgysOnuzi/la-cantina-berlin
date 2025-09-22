import React from 'react';
import MenuWithFilters from '@/components/MenuWithFilters';

export const dynamic = 'force-dynamic';

async function getMenuItems() {
  try {
    const response = await fetch(`${process.env.NEXTAUTH_URL || 'http://localhost:5000'}/api/menu`, {
      cache: 'no-store'
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch menu items');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching menu items:', error);
    // Return empty array if API fails - no mock data
    console.error('Menu API failed, returning empty array. Check database connection.');
    return [];
  }
}

export default async function MenuPage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const menuItems = await getMenuItems();
  
  return <MenuWithFilters menuItems={menuItems} locale={locale} />;
}