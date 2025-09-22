import { randomUUID } from "crypto";
import { 
  type MenuItem, 
  type InsertMenuItem,
  type MenuItemDisplay,
  type Reservation,
  type InsertReservation,
  type GalleryItem,
  type InsertGalleryItem,
  type Event,
  type InsertEvent
} from "@shared/schema";
import { completeMenuData } from "../scripts/populate_menu";

export interface IStorage {
  // Menu Items - Updated for bilingual support
  getMenuItems(): Promise<MenuItem[]>;
  getMenuItemsByCategory(categoryDe: string): Promise<MenuItem[]>;
  getMenuItemsForDisplay(language: 'de' | 'en'): Promise<MenuItemDisplay[]>;
  getMenuItemsForDisplayByCategory(categoryDe: string, language: 'de' | 'en'): Promise<MenuItemDisplay[]>;
  createMenuItem(item: InsertMenuItem): Promise<MenuItem>;
  updateMenuItemAvailability(id: string, isAvailable: boolean): Promise<void>;
  clearMenuItems(): Promise<void>;
  populateMenuFromData(): Promise<void>;

  // Reservations
  getReservations(): Promise<Reservation[]>;
  getReservationsByDate(date: string): Promise<Reservation[]>;
  createReservation(reservation: InsertReservation): Promise<Reservation>;
  updateReservationStatus(id: string, status: string): Promise<void>;

  // Gallery
  getGalleryItems(): Promise<GalleryItem[]>;
  createGalleryItem(item: InsertGalleryItem): Promise<GalleryItem>;
  deleteGalleryItem(id: string): Promise<void>;

  // Events
  getEvents(): Promise<Event[]>;
  getUpcomingEvents(): Promise<Event[]>;
  createEvent(event: InsertEvent): Promise<Event>;
  deleteEvent(id: string): Promise<void>;
}

export class MemStorage implements IStorage {
  private menuItems: Map<string, MenuItem> = new Map();
  private reservations: Map<string, Reservation> = new Map();
  private galleryItems: Map<string, GalleryItem> = new Map();
  private events: Map<string, Event> = new Map();

  constructor() {
    // Initialize with bilingual menu data synchronously to avoid race conditions
    this.seedDataSync();
  }

  private seedDataSync() {
    // Populate synchronously to prevent race conditions
    for (const itemData of completeMenuData) {
      const id = randomUUID();
      const menuItem: MenuItem = {
        ...itemData,
        id,
        isAvailable: itemData.isAvailable ?? true,
        imageUrl: itemData.imageUrl ?? null,
        allergens: itemData.allergens ?? null,
        createdAt: new Date()
      };
      this.menuItems.set(id, menuItem);
    }
  }

  // Menu Items - Bilingual support
  async getMenuItems(): Promise<MenuItem[]> {
    return Array.from(this.menuItems.values());
  }

  async getMenuItemsByCategory(categoryDe: string): Promise<MenuItem[]> {
    return Array.from(this.menuItems.values()).filter(item => item.categoryDe === categoryDe);
  }

  // Convert MenuItem to display format based on language
  async getMenuItemsForDisplay(language: 'de' | 'en' = 'de'): Promise<MenuItemDisplay[]> {
    const items = Array.from(this.menuItems.values());
    return items.map(item => this.convertToDisplay(item, language));
  }

  async getMenuItemsForDisplayByCategory(categoryDe: string, language: 'de' | 'en' = 'de'): Promise<MenuItemDisplay[]> {
    const items = Array.from(this.menuItems.values()).filter(item => item.categoryDe === categoryDe);
    return items.map(item => this.convertToDisplay(item, language));
  }

  private convertToDisplay(item: MenuItem, language: 'de' | 'en'): MenuItemDisplay {
    return {
      id: item.id,
      // Implement proper fallback: German is primary, English secondary
      title: language === 'de' ? item.titleDe : (item.titleEn || item.titleDe),
      description: language === 'de' ? item.descriptionDe : (item.descriptionEn || item.descriptionDe),
      category: language === 'de' ? item.categoryDe : (item.categoryEn || item.categoryDe),
      price: item.price.includes('€') ? item.price : `€${item.price}`,
      isAvailable: item.isAvailable,
      imageUrl: item.imageUrl,
      allergens: item.allergens,
      createdAt: item.createdAt
    };
  }

  async createMenuItem(item: InsertMenuItem): Promise<MenuItem> {
    const id = randomUUID();
    const menuItem: MenuItem = {
      ...item,
      id,
      isAvailable: item.isAvailable ?? true,
      imageUrl: item.imageUrl ?? null,
      allergens: item.allergens ?? null,
      createdAt: new Date()
    };
    this.menuItems.set(id, menuItem);
    return menuItem;
  }

  async updateMenuItemAvailability(id: string, isAvailable: boolean): Promise<void> {
    const item = this.menuItems.get(id);
    if (item) {
      item.isAvailable = isAvailable;
      this.menuItems.set(id, item);
    }
  }

  async clearMenuItems(): Promise<void> {
    this.menuItems.clear();
  }

  async populateMenuFromData(): Promise<void> {
    for (const itemData of completeMenuData) {
      await this.createMenuItem(itemData);
    }
  }

  // Reservations
  async getReservations(): Promise<Reservation[]> {
    return Array.from(this.reservations.values());
  }

  async getReservationsByDate(date: string): Promise<Reservation[]> {
    return Array.from(this.reservations.values()).filter(reservation => reservation.date === date);
  }

  async createReservation(reservation: InsertReservation): Promise<Reservation> {
    const id = randomUUID();
    const reservationRecord: Reservation = {
      ...reservation,
      id,
      status: "pending",
      createdAt: new Date()
    };
    this.reservations.set(id, reservationRecord);
    return reservationRecord;
  }

  async updateReservationStatus(id: string, status: string): Promise<void> {
    const reservation = this.reservations.get(id);
    if (reservation) {
      reservation.status = status;
      this.reservations.set(id, reservation);
    }
  }

  // Gallery
  async getGalleryItems(): Promise<GalleryItem[]> {
    return Array.from(this.galleryItems.values());
  }

  async createGalleryItem(item: InsertGalleryItem): Promise<GalleryItem> {
    const id = randomUUID();
    const galleryItem: GalleryItem = {
      ...item,
      id,
      description: item.description ?? null,
      category: item.category ?? "Food",
      createdAt: new Date()
    };
    this.galleryItems.set(id, galleryItem);
    return galleryItem;
  }

  async deleteGalleryItem(id: string): Promise<void> {
    this.galleryItems.delete(id);
  }

  // Events
  async getEvents(): Promise<Event[]> {
    return Array.from(this.events.values());
  }

  async getUpcomingEvents(): Promise<Event[]> {
    const today = new Date().toISOString().split('T')[0];
    return Array.from(this.events.values())
      .filter(event => event.date >= today)
      .sort((a, b) => a.date.localeCompare(b.date));
  }

  async createEvent(event: InsertEvent): Promise<Event> {
    const id = randomUUID();
    const eventRecord: Event = {
      ...event,
      id,
      price: event.price ?? null,
      maxAttendees: event.maxAttendees ?? null,
      location: event.location ?? "La Cantina Berlin",
      createdAt: new Date()
    };
    this.events.set(id, eventRecord);
    return eventRecord;
  }

  async deleteEvent(id: string): Promise<void> {
    this.events.delete(id);
  }
}

export const storage = new MemStorage();