import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Translation resources
const resources = {
  de: {
    translation: {
      // Navigation
      'nav.home': 'Startseite',
      'nav.menu': 'Speisekarte',
      'nav.reservations': 'Reservierungen',
      'nav.gallery': 'Galerie',
      'nav.events': 'Veranstaltungen',
      'nav.about': 'Über uns',
      'nav.contact': 'Kontakt',
      'nav.reserve_table': 'Tisch reservieren',
      
      // Menu page
      'menu.title': 'Unsere Speisekarte',
      'menu.subtitle': 'Entdecken Sie unsere authentische italienische Küche, mit Leidenschaft zubereitet aus den besten Zutaten direkt aus Italien und lokal in Berlin bezogen.',
      'menu.signature_dishes': 'Signature-Gerichte',
      'menu.signature_subtitle': 'Entdecken Sie unsere beliebtesten Kreationen, jede mit Leidenschaft und den besten italienischen Zutaten zubereitet',
      'menu.view_full_menu': 'Vollständige Speisekarte anzeigen',
      'menu.all_categories': 'Alle',
      'menu.available': 'Verfügbar',
      'menu.unavailable': 'Derzeit nicht verfügbar',
      
      // Categories
      'category.appetizers': 'Vorspeisen',
      'category.soups': 'Suppen',
      'category.salads': 'Salate',
      'category.pizza': 'Pizza',
      'category.pasta': 'Pasta',
      'category.fish': 'Fisch',
      'category.meat': 'Fleisch',
      'category.desserts': 'Desserts',
      'category.drinks': 'Getränke',
      'category.hot_drinks': 'Heißgetränke',
      'category.wine': 'Weine',
      'category.beer': 'Bier',
      'category.spirits': 'Spirituosen',
      'category.cheese': 'Käse',
      'category.soft_drinks': 'Softdrinks',
      'category.fruit_juices': 'Fruchtsäfte',
      'category.red_wine': 'Rotwein',
      'category.white_wine': 'Weißwein',
      'category.liqueurs': 'Liköre',
      'category.whisky': 'Whisky',
      'category.longdrinks': 'Longdrinks',
      
      // Common
      'common.loading': 'Lädt...',
      'common.price': 'Preis',
      'common.euro': '€',
    }
  },
  en: {
    translation: {
      // Navigation
      'nav.home': 'Home',
      'nav.menu': 'Menu',
      'nav.reservations': 'Reservations',
      'nav.gallery': 'Gallery',
      'nav.events': 'Events',
      'nav.about': 'About Us',
      'nav.contact': 'Contact',
      'nav.reserve_table': 'Reserve Table',
      
      // Menu page
      'menu.title': 'Our Menu',
      'menu.subtitle': 'Discover our authentic Italian cuisine, crafted with passion using the finest ingredients imported directly from Italy and sourced locally in Berlin.',
      'menu.signature_dishes': 'Signature Dishes',
      'menu.signature_subtitle': 'Discover our most beloved creations, each crafted with passion and the finest Italian ingredients',
      'menu.view_full_menu': 'View Full Menu',
      'menu.all_categories': 'All',
      'menu.available': 'Available',
      'menu.unavailable': 'Currently Unavailable',
      
      // Categories
      'category.appetizers': 'Appetizers',
      'category.soups': 'Soups',
      'category.salads': 'Salads',
      'category.pizza': 'Pizza',
      'category.pasta': 'Pasta',
      'category.fish': 'Fish',
      'category.meat': 'Meat',
      'category.desserts': 'Desserts',
      'category.drinks': 'Drinks',
      'category.hot_drinks': 'Hot Drinks',
      'category.wine': 'Wine',
      'category.beer': 'Beer',
      'category.spirits': 'Spirits',
      'category.cheese': 'Cheese',
      'category.soft_drinks': 'Soft Drinks',
      'category.fruit_juices': 'Fruit Juices',
      'category.red_wine': 'Red Wine',
      'category.white_wine': 'White Wine',
      'category.liqueurs': 'Liqueurs',
      'category.whisky': 'Whisky',
      'category.longdrinks': 'Longdrinks',
      
      // Common
      'common.loading': 'Loading...',
      'common.price': 'Price',
      'common.euro': '€',
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'de', // German as primary language
    supportedLngs: ['de', 'en'],
    nonExplicitSupportedLngs: true,
    
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
    },

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;