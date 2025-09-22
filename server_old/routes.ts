import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertMenuItemSchema, insertReservationSchema, insertGalleryItemSchema, insertEventSchema } from "@shared/schema";
import { z } from "zod";
import { categories } from "../scripts/populate_menu";

// Category normalization map from English to German
const categoryMap: Record<string, string> = {
  'Appetizers': 'Vorspeisen',
  'Soups': 'Suppen',
  'Salads': 'Salate', 
  'Pizza': 'Pizza',
  'Pasta': 'Pasta',
  'Fish': 'Fisch',
  'Meat': 'Fleisch',
  'Desserts': 'Desserts',
  'Cheese': 'Käse',
  'Hot Drinks': 'Heißgetränke',
  'Soft Drinks': 'Softdrinks',
  'Fruit Juices': 'Fruchtsäfte',
  'Beer': 'Bier',
  'Red Wine': 'Rotwein',
  'White Wine': 'Weißwein',
  'Spirits': 'Spirituosen',
  'Liqueurs': 'Liköre',
  'Whisky': 'Whisky',
  'Longdrinks': 'Longdrinks'
};

function normalizeCategoryToGerman(category: string): string {
  // Make case-insensitive by checking both original and title case
  const titleCase = category.charAt(0).toUpperCase() + category.slice(1).toLowerCase();
  return categoryMap[category] || categoryMap[titleCase] || category;
}

// Contact form schema for validation
const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Menu Items Routes - Bilingual support
  app.get("/api/menu-items", async (req, res) => {
    try {
      const category = req.query.category as string;
      const language = (req.query.lang as 'de' | 'en') || 'de';
      
      // Handle "All" category or no category - return all items
      if (!category || category === 'All' || category === 'Alle') {
        const items = await storage.getMenuItemsForDisplay(language);
        res.json(items);
        return;
      }
      
      // Normalize category - accept both DE and EN categories
      const normalizedCategory = normalizeCategoryToGerman(category);
      const items = await storage.getMenuItemsForDisplayByCategory(normalizedCategory, language);
      res.json(items);
    } catch (error) {
      console.error("Error fetching menu items:", error);
      res.status(500).json({ error: "Failed to fetch menu items" });
    }
  });

  // Get raw menu items (for admin/backend use)
  app.get("/api/menu-items/raw", async (req, res) => {
    try {
      const category = req.query.category as string;
      const items = category 
        ? await storage.getMenuItemsByCategory(category)
        : await storage.getMenuItems();
      res.json(items);
    } catch (error) {
      console.error("Error fetching raw menu items:", error);
      res.status(500).json({ error: "Failed to fetch raw menu items" });
    }
  });

  // Get categories
  app.get("/api/categories", async (req, res) => {
    try {
      const language = (req.query.lang as 'de' | 'en') || 'de';
      const categoryList = categories.map(cat => ({
        value: cat.de, // Always use German as the key for filtering
        label: language === 'de' ? cat.de : cat.en
      }));
      res.json([{ value: "All", label: language === 'de' ? "Alle" : "All" }, ...categoryList]);
    } catch (error) {
      console.error("Error fetching categories:", error);
      res.status(500).json({ error: "Failed to fetch categories" });
    }
  });

  // Repopulate menu with latest data
  app.post("/api/menu-items/repopulate", async (req, res) => {
    try {
      await storage.clearMenuItems();
      await storage.populateMenuFromData();
      res.json({ success: true, message: "Menu repopulated with latest data" });
    } catch (error) {
      console.error("Error repopulating menu:", error);
      res.status(500).json({ error: "Failed to repopulate menu" });
    }
  });

  app.post("/api/menu-items", async (req, res) => {
    try {
      const validatedData = insertMenuItemSchema.parse(req.body);
      const item = await storage.createMenuItem(validatedData);
      res.status(201).json(item);
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ error: "Invalid data", details: error.errors });
      } else {
        console.error("Error creating menu item:", error);
        res.status(500).json({ error: "Failed to create menu item" });
      }
    }
  });

  app.patch("/api/menu-items/:id/availability", async (req, res) => {
    try {
      const { id } = req.params;
      const { isAvailable } = req.body;
      await storage.updateMenuItemAvailability(id, isAvailable);
      res.json({ success: true });
    } catch (error) {
      console.error("Error updating menu item availability:", error);
      res.status(500).json({ error: "Failed to update menu item" });
    }
  });

  // Reservation Routes
  app.get("/api/reservations", async (req, res) => {
    try {
      const date = req.query.date as string;
      const reservations = date 
        ? await storage.getReservationsByDate(date)
        : await storage.getReservations();
      res.json(reservations);
    } catch (error) {
      console.error("Error fetching reservations:", error);
      res.status(500).json({ error: "Failed to fetch reservations" });
    }
  });

  app.post("/api/reservations", async (req, res) => {
    try {
      const validatedData = insertReservationSchema.parse(req.body);
      
      // Check for existing reservations at the same time slot
      const existingReservations = await storage.getReservationsByDate(validatedData.date);
      const timeSlotCount = existingReservations.filter(r => 
        r.time === validatedData.time && r.status !== 'cancelled'
      ).length;
      
      // Simple availability check - max 10 reservations per time slot
      if (timeSlotCount >= 10) {
        return res.status(409).json({ 
          error: "Time slot fully booked", 
          message: "This time slot is no longer available. Please choose a different time." 
        });
      }

      const reservation = await storage.createReservation(validatedData);
      res.status(201).json(reservation);
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ error: "Invalid data", details: error.errors });
      } else {
        console.error("Error creating reservation:", error);
        res.status(500).json({ error: "Failed to create reservation" });
      }
    }
  });

  app.patch("/api/reservations/:id/status", async (req, res) => {
    try {
      const { id } = req.params;
      const { status } = req.body;
      await storage.updateReservationStatus(id, status);
      res.json({ success: true });
    } catch (error) {
      console.error("Error updating reservation status:", error);
      res.status(500).json({ error: "Failed to update reservation" });
    }
  });

  // Gallery Routes
  app.get("/api/gallery", async (req, res) => {
    try {
      const items = await storage.getGalleryItems();
      res.json(items);
    } catch (error) {
      console.error("Error fetching gallery items:", error);
      res.status(500).json({ error: "Failed to fetch gallery items" });
    }
  });

  app.post("/api/gallery", async (req, res) => {
    try {
      const validatedData = insertGalleryItemSchema.parse(req.body);
      const item = await storage.createGalleryItem(validatedData);
      res.status(201).json(item);
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ error: "Invalid data", details: error.errors });
      } else {
        console.error("Error creating gallery item:", error);
        res.status(500).json({ error: "Failed to create gallery item" });
      }
    }
  });

  app.delete("/api/gallery/:id", async (req, res) => {
    try {
      const { id } = req.params;
      await storage.deleteGalleryItem(id);
      res.json({ success: true });
    } catch (error) {
      console.error("Error deleting gallery item:", error);
      res.status(500).json({ error: "Failed to delete gallery item" });
    }
  });

  // Events Routes
  app.get("/api/events", async (req, res) => {
    try {
      const upcoming = req.query.upcoming === 'true';
      const events = upcoming 
        ? await storage.getUpcomingEvents()
        : await storage.getEvents();
      res.json(events);
    } catch (error) {
      console.error("Error fetching events:", error);
      res.status(500).json({ error: "Failed to fetch events" });
    }
  });

  app.post("/api/events", async (req, res) => {
    try {
      const validatedData = insertEventSchema.parse(req.body);
      const event = await storage.createEvent(validatedData);
      res.status(201).json(event);
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ error: "Invalid data", details: error.errors });
      } else {
        console.error("Error creating event:", error);
        res.status(500).json({ error: "Failed to create event" });
      }
    }
  });

  app.delete("/api/events/:id", async (req, res) => {
    try {
      const { id } = req.params;
      await storage.deleteEvent(id);
      res.json({ success: true });
    } catch (error) {
      console.error("Error deleting event:", error);
      res.status(500).json({ error: "Failed to delete event" });
    }
  });

  // Contact form endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = contactFormSchema.parse(req.body);
      
      // Log the contact form submission (in production, you'd send email or store in database)
      console.log("Contact form submission:", validatedData);
      
      res.json({ success: true, message: "Thank you for your message. We'll get back to you soon!" });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ error: "Invalid data", details: error.errors });
      } else {
        console.error("Error processing contact form:", error);
        res.status(500).json({ error: "Failed to submit contact form" });
      }
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
