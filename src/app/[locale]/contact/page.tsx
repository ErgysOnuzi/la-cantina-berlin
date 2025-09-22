import React from 'react';
import { getTranslations } from 'next-intl/server';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import ContactForm from '@/components/ContactForm';

export default async function ContactPage() {
  const t = await getTranslations('contact');

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-serif text-center mb-12 text-primary font-bold">
            {t('title')}
          </h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Address</h3>
                    <p className="text-muted-foreground">
                      Bleibtreustr. 17<br />
                      10623 Berlin<br />
                      Germany
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                    <p className="text-muted-foreground">
                      <a href="tel:+4930883215600" className="text-primary hover:text-primary/80 transition-colors">030 8832156</a>
                    </p>
                    <p className="text-sm text-muted-foreground">Available during business hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Email</h3>
                    <p className="text-muted-foreground">
                      <a href="mailto:info@ristorante-la-cantina.de" className="text-primary hover:text-primary/80 transition-colors">info@ristorante-la-cantina.de</a>
                    </p>
                    <p className="text-muted-foreground">
                      Reservations: <a href="mailto:reservierung@ristorante-la-cantina.de" className="text-primary hover:text-primary/80 transition-colors">reservierung@ristorante-la-cantina.de</a>
                    </p>
                    <p className="text-sm text-muted-foreground">{t('typically_respond_24h')}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Opening Hours</h3>
                    <div className="text-muted-foreground space-y-1">
                      <div>Monday - Thursday: 5:00 PM - 11:00 PM</div>
                      <div>Friday - Saturday: 5:00 PM - 12:00 AM</div>
                      <div>Sunday: 5:00 PM - 10:00 PM</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Map placeholder */}
              <div className="w-full h-64 bg-muted rounded-xl flex items-center justify-center border border-border">
                <div className="text-center">
                  <MapPin className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                  <p className="text-muted-foreground">Interactive map coming soon</p>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-semibold mb-6 text-foreground">
                Send us a message
              </h2>
              <div className="bg-card rounded-xl shadow-lg border border-border p-6">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}