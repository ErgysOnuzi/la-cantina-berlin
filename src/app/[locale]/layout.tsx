import React from 'react';
import '../globals.css';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: "La Cantina Berlin - Authentische italienische Küche", 
  description: "Authentische italienische Küche in Berlin - frische Pasta, Holzofen-Gerichte und eine ausgewählte Weinkarte"
};

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function LocaleLayout({
  children,
  params
}: LocaleLayoutProps) {
  // Await the params and ensure we have a valid locale
  const { locale: rawLocale } = await params;
  const locale = rawLocale && ['de', 'en'].includes(rawLocale) ? rawLocale : 'de';
  const messages = await getMessages({ locale });
  
  if (process.env.NODE_ENV === 'development') {
    console.log(`[layout] Using locale: ${locale} (from rawLocale: ${rawLocale})`);
  }

  return (
    <html lang={locale} data-scroll-behavior="smooth">
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header />
          <main>{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}