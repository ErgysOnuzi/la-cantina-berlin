import fs from 'fs';
import path from 'path';
import Database from 'better-sqlite3';
import { completeMenuData } from './populate_menu.js';

console.log('Migrating menu data to Next.js SQLite database...');
console.log(`Found ${completeMenuData.length} menu items to migrate`);

// Initialize database
const dataDir = path.join(process.cwd(), "data");
if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true });

const dbPath = path.join(dataDir, "la_cantina.db");
const db = new Database(dbPath);

// Create tables if they don't exist
db.exec(`
CREATE TABLE IF NOT EXISTS menu_items (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT NOT NULL,
  description TEXT,
  price REAL NOT NULL,
  category TEXT NOT NULL,
  is_available INTEGER DEFAULT 1,
  title_de TEXT,
  title_en TEXT,
  description_de TEXT,
  description_en TEXT,
  category_de TEXT,
  category_en TEXT,
  allergens TEXT
);

CREATE TABLE IF NOT EXISTS reservations (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT,
  date TEXT NOT NULL,
  time TEXT NOT NULL,
  guests INTEGER NOT NULL,
  status TEXT DEFAULT 'pending',
  created_at TEXT DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS gallery (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  image_url TEXT NOT NULL,
  description TEXT,
  created_at TEXT DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS events (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT NOT NULL,
  description TEXT,
  date TEXT,
  capacity INTEGER,
  created_at TEXT DEFAULT CURRENT_TIMESTAMP
);
`);

console.log("Created database tables...");

// Clear existing menu items
db.prepare('DELETE FROM menu_items').run();

// Insert menu data
const insertStmt = db.prepare(`
  INSERT INTO menu_items (
    title, description, price, category, is_available,
    title_de, title_en, description_de, description_en,
    category_de, category_en, allergens
  ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
`);

let inserted = 0;
for (const item of completeMenuData) {
  const price = typeof item.price === 'string' ? parseFloat(item.price) : item.price;
  const isAvailable = item.isAvailable ? 1 : 0;
  
  insertStmt.run(
    item.titleDe, // Default title (German)
    item.descriptionDe, // Default description (German)
    price,
    item.categoryDe, // Default category (German)
    isAvailable,
    item.titleDe,
    item.titleEn,
    item.descriptionDe,
    item.descriptionEn,
    item.categoryDe,
    item.categoryEn,
    item.allergens || ''
  );
  inserted++;
}

console.log(`Successfully migrated ${inserted} menu items to SQLite database!`);
console.log(`Database created at: ${dbPath}`);

// Verify the data
const countStmt = db.prepare('SELECT COUNT(*) as count FROM menu_items');
const result = countStmt.get() as { count: number };
console.log(`Verification: ${result.count} items in database`);

db.close();