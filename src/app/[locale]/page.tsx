"use client";

import { useTranslations } from 'next-intl';
import { ChefHat, Flame, Wine } from 'lucide-react';
import Hero from '@/components/Hero';

export default function HomePage() {
  const t = useTranslations('home');

  return (
    <div className="min-h-screen">
      <Hero />
      
      {/* Features Section */}
      <section className="py-16 px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <ChefHat className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-serif font-bold text-foreground mb-2">{t('fresh_pasta_title')}</h3>
              <p className="text-muted-foreground">{t('fresh_pasta_desc')}</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Flame className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-serif font-bold text-foreground mb-2">{t('wood_fired_title')}</h3>
              <p className="text-muted-foreground">{t('wood_fired_desc')}</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wine className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-serif font-bold text-foreground mb-2">{t('fine_wines_title')}</h3>
              <p className="text-muted-foreground">{t('fine_wines_desc')}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}