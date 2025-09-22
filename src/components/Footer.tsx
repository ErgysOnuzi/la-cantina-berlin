"use client";
import React from 'react';
import Link from "next/link";
import { useTranslations, useLocale } from 'next-intl';

export default function Footer() {
  const t = useTranslations('nav');
  const footerT = useTranslations('footer');
  const locale = useLocale();
  
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            <div className="md:text-left">
              <h3 className="text-xl font-serif font-bold text-primary mb-4">La Cantina Berlin</h3>
              <p className="text-muted-foreground leading-relaxed">
                {footerT('description')}
              </p>
            </div>
            
            <div className="md:text-center">
              <h4 className="font-semibold mb-4 text-foreground">{footerT('opening_hours')}</h4>
              <div className="space-y-2 text-muted-foreground">
                <p>{footerT('monday_thursday')}</p>
                <p>{footerT('friday_saturday')}</p>
                <p>{footerT('sunday')}</p>
              </div>
            </div>
            
            <div className="md:text-right">
              <h4 className="font-semibold mb-4 text-foreground">{footerT('contact')}</h4>
              <div className="space-y-2 text-muted-foreground">
                <p>{footerT('address_street')}</p>
                <p>{footerT('address_city')}</p>
                <p>{footerT('phone')}</p>
                <p className="text-primary hover:underline">
                  <a href="mailto:info@lacantina-berlin.de" data-testid="link-email">{footerT('email')}</a>
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-center md:justify-between items-center text-center">
          <p className="text-muted-foreground text-sm">
            {footerT('copyright')}
          </p>
          <div className="flex gap-4 mt-2 md:mt-0">
            <Link 
              href={`/${locale}/feedback`} 
              className="text-muted-foreground hover:text-primary hover:underline text-sm transition-colors font-medium"
              data-testid="link-feedback"
            >
              {footerT('feedback')}
            </Link>
            <Link 
              href={`/${locale}/legal`} 
              className="text-muted-foreground hover:text-primary hover:underline text-sm transition-colors font-medium"
              data-testid="link-legal"
            >
              {t('legal')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}