import React from 'react';
import { useTranslations } from 'next-intl';

export default function LegalPage() {
  const t = useTranslations('legal');

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-serif text-center mb-12 text-rosso">
          {t('title')}
        </h1>
        
        {/* Impressum */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">Impressum</h2>
          <div className="bg-white rounded-lg shadow-sm border p-8">
            <h3 className="font-semibold mb-3">Angaben gemäß § 5 TMG</h3>
            <p className="mb-4">
              La Cantina Berlin GmbH<br />
              Musterstraße 123<br />
              10115 Berlin<br />
              Deutschland
            </p>
            
            <h3 className="font-semibold mb-3">Vertreten durch</h3>
            <p className="mb-4">
              Geschäftsführer: Max Mustermann
            </p>
            
            <h3 className="font-semibold mb-3">Kontakt</h3>
            <p className="mb-4">
              Telefon: +49 30 12345678<br />
              E-Mail: info@lacantina-berlin.de
            </p>
            
            <h3 className="font-semibold mb-3">Registereintrag</h3>
            <p className="mb-4">
              Eintragung im Handelsregister<br />
              Registergericht: Amtsgericht Berlin<br />
              Registernummer: HRB 123456
            </p>
            
            <h3 className="font-semibold mb-3">Umsatzsteuer-ID</h3>
            <p>
              Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
              DE123456789
            </p>
          </div>
        </section>
        
        {/* Datenschutz */}
        <section>
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">Datenschutzerklärung</h2>
          <div className="bg-white rounded-lg shadow-sm border p-8">
            <h3 className="font-semibold mb-3">1. Datenschutz auf einen Blick</h3>
            <p className="mb-4">
              Diese Datenschutzerklärung klärt Sie über die Art, den Umfang und Zweck der Verarbeitung 
              von personenbezogenen Daten innerhalb unseres Onlineangebotes und der mit ihm verbundenen 
              Webseiten, Funktionen und Inhalte auf.
            </p>
            
            <h3 className="font-semibold mb-3">2. Verantwortliche Stelle</h3>
            <p className="mb-4">
              Verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:<br />
              La Cantina Berlin GmbH<br />
              Musterstraße 123<br />
              10115 Berlin<br />
              Deutschland<br />
              E-Mail: datenschutz@lacantina-berlin.de
            </p>
            
            <h3 className="font-semibold mb-3">3. Datenerfassung auf unserer Website</h3>
            <p className="mb-4">
              Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. 
              Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
            </p>
            
            <h3 className="font-semibold mb-3">4. Reservierungen und Kontaktformular</h3>
            <p className="mb-4">
              Wenn Sie uns per Kontaktformular oder bei Reservierungen Anfragen zukommen lassen, 
              werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen 
              Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.
            </p>
            
            <h3 className="font-semibold mb-3">5. Ihre Rechte</h3>
            <p>
              Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, 
              Datenübertragbarkeit und Widerspruch. Wenn Sie der Ansicht sind, dass die Verarbeitung 
              Ihrer personenbezogenen Daten gegen das Datenschutzrecht verstößt, haben Sie das Recht, 
              sich bei der zuständigen Aufsichtsbehörde zu beschweren.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}