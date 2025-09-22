import { sql } from "drizzle-orm";
import { pgTable, text, varchar, numeric, boolean, date, time, integer, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Menu Items Table - Bilingual Support
export const menuItems = pgTable("menu_items", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  titleDe: text("title_de").notNull(), // German - primary language
  titleEn: text("title_en").notNull(), // English - secondary language
  descriptionDe: text("description_de").notNull(),
  descriptionEn: text("description_en").notNull(),
  price: numeric("price", { precision: 10, scale: 2 }).notNull(),
  categoryDe: text("category_de").notNull(),
  categoryEn: text("category_en").notNull(),
  isAvailable: boolean("is_available").default(true).notNull(),
  imageUrl: text("image_url"),
  allergens: text("allergens"), // Store allergen codes from PDF
  createdAt: timestamp("created_at").default(sql`now()`).notNull(),
});

export const insertMenuItemSchema = createInsertSchema(menuItems).omit({
  id: true,
  createdAt: true,
});

export type InsertMenuItem = z.infer<typeof insertMenuItemSchema>;
export type MenuItem = typeof menuItems.$inferSelect;

// Helper type for display purposes with language selection
export type MenuItemDisplay = {
  id: string;
  title: string;
  description: string;
  category: string;
  price: string;
  isAvailable: boolean;
  imageUrl?: string | null;
  allergens?: string | null;
  createdAt: Date;
};

// Reservations Table
export const reservations = pgTable("reservations", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  phone: text("phone").notNull(),
  email: text("email").notNull(),
  date: date("date").notNull(),
  time: time("time").notNull(),
  guests: integer("guests").notNull(),
  status: text("status").default("pending").notNull(),
  createdAt: timestamp("created_at").default(sql`now()`).notNull(),
});

export const insertReservationSchema = createInsertSchema(reservations).omit({
  id: true,
  status: true,
  createdAt: true,
});

export type InsertReservation = z.infer<typeof insertReservationSchema>;
export type Reservation = typeof reservations.$inferSelect;

// Gallery Table
export const gallery = pgTable("gallery", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  title: text("title").notNull(),
  imageUrl: text("image_url").notNull(),
  description: text("description"),
  category: text("category").notNull().default("Food"),
  createdAt: timestamp("created_at").default(sql`now()`).notNull(),
});

export const insertGalleryItemSchema = createInsertSchema(gallery).omit({
  id: true,
  createdAt: true,
});

export type InsertGalleryItem = z.infer<typeof insertGalleryItemSchema>;
export type GalleryItem = typeof gallery.$inferSelect;

// Events Table
export const events = pgTable("events", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  title: text("title").notNull(),
  description: text("description").notNull(),
  date: date("date").notNull(),
  time: time("time").notNull(),
  location: text("location").notNull().default("La Cantina Berlin"),
  price: numeric("price", { precision: 10, scale: 2 }),
  maxAttendees: integer("max_attendees"),
  createdAt: timestamp("created_at").default(sql`now()`).notNull(),
});

export const insertEventSchema = createInsertSchema(events).omit({
  id: true,
  createdAt: true,
});

export type InsertEvent = z.infer<typeof insertEventSchema>;
export type Event = typeof events.$inferSelect;
