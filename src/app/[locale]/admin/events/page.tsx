'use client';

import React, { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { ArrowLeft, Plus, Edit2, Trash2, Calendar, Users, Euro } from 'lucide-react';
import AdminGate from '../AdminGate';

export const dynamic = 'force-dynamic';

interface Event {
  id: number;
  title: string;
  description: string | null;
  date: string;
  capacity: number | null;
  price: number | null;
  created_at: string;
}

export default function AdminEventsPage() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showAddForm, setShowAddForm] = useState(false);

  // Mock data for now since we don't have API yet
  useEffect(() => {
    // Simulate loading events
    setTimeout(() => {
      setEvents([
        {
          id: 1,
          title: 'Italienischer Weinabend',
          description: 'Verkostung ausgewählter italienischer Weine mit passenden Antipasti',
          date: '2024-12-28',
          capacity: 30,
          price: 45.00,
          created_at: '2024-12-20'
        },
        {
          id: 2,
          title: 'Pasta-Kochkurs',
          description: 'Lernen Sie die Geheimnisse der perfekten Pasta-Zubereitung',
          date: '2025-01-05',
          capacity: 15,
          price: 75.00,
          created_at: '2024-12-21'
        }
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  const handleDelete = (id: number) => {
    if (confirm('Sind Sie sicher, dass Sie diese Veranstaltung löschen möchten?')) {
      setEvents(prev => prev.filter(event => event.id !== id));
    }
  };

  const handleAddEvent = () => {
    // Simulate adding a new event
    const newEvent: Event = {
      id: Date.now(),
      title: 'Neue Veranstaltung',
      description: 'Beschreibung der neuen Veranstaltung',
      date: '2025-01-15',
      capacity: 20,
      price: 50.00,
      created_at: new Date().toISOString().split('T')[0]
    };
    setEvents(prev => [newEvent, ...prev]);
    setShowAddForm(false);
  };

  if (loading) {
    return (
      <AdminGate>
        <div className="min-h-screen bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex justify-center items-center py-12">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
            </div>
          </div>
        </div>
      </AdminGate>
    );
  }

  return (
    <AdminGate>
      <div className="min-h-screen bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-4xl font-serif font-bold text-primary mb-2">Veranstaltungen</h1>
              <p className="text-muted-foreground text-lg">Events und Veranstaltungen verwalten</p>
            </div>
            <Link 
              href="/admin" 
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold transition-colors"
              data-testid="link-back-to-dashboard"
            >
              <ArrowLeft className="w-4 h-4" />
              Zurück zum Dashboard
            </Link>
          </div>
          
          {error && (
            <div className="bg-destructive/10 border border-destructive/20 text-destructive px-4 py-3 rounded-lg mb-6">
              {error}
            </div>
          )}

          <div className="mb-6">
            <button
              onClick={() => setShowAddForm(true)}
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-md hover:bg-primary/90 transition-colors font-medium"
              data-testid="button-add-event"
            >
              <Plus className="w-4 h-4" />
              Neue Veranstaltung
            </button>
          </div>

          <div className="space-y-4">
            {events.map((event) => (
              <div 
                key={event.id} 
                className="bg-card rounded-lg shadow-sm border border-border p-6 hover-elevate transition-colors"
                data-testid={`event-${event.id}`}
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex-1 space-y-3">
                    <div className="flex items-center gap-4">
                      <h3 className="text-xl font-semibold text-foreground">
                        {event.title}
                      </h3>
                    </div>
                    
                    {event.description && (
                      <p className="text-muted-foreground">
                        {event.description}
                      </p>
                    )}
                    
                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {new Date(event.date).toLocaleDateString('de-DE', {
                          weekday: 'long',
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </div>
                      {event.capacity && (
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4" />
                          {event.capacity} Plätze
                        </div>
                      )}
                      {event.price && (
                        <div className="flex items-center gap-2">
                          <Euro className="w-4 h-4" />
                          {event.price.toFixed(2)} €
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 mt-4 lg:mt-0">
                    <button
                      onClick={() => {/* TODO: Implement edit */}}
                      className="inline-flex items-center gap-2 border border-border text-foreground px-4 py-2 rounded-md hover:bg-muted transition-colors font-medium"
                      data-testid={`button-edit-${event.id}`}
                    >
                      <Edit2 className="w-4 h-4" />
                      Bearbeiten
                    </button>
                    <button
                      onClick={() => handleDelete(event.id)}
                      className="inline-flex items-center gap-2 bg-destructive text-destructive-foreground px-4 py-2 rounded-md hover:bg-destructive/90 transition-colors font-medium"
                      data-testid={`button-delete-${event.id}`}
                    >
                      <Trash2 className="w-4 h-4" />
                      Löschen
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {events.length === 0 && !loading && (
            <div className="text-center py-12">
              <Calendar className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground text-lg mb-4">
                Keine Veranstaltungen geplant.
              </p>
              <button
                onClick={() => setShowAddForm(true)}
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-md hover:bg-primary/90 transition-colors font-medium"
              >
                <Plus className="w-4 h-4" />
                Erste Veranstaltung erstellen
              </button>
            </div>
          )}

          {/* Simple add form modal */}
          {showAddForm && (
            <div className="fixed inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center z-50">
              <div className="bg-card rounded-lg border border-border p-6 w-full max-w-md shadow-lg">
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  Neue Veranstaltung
                </h3>
                <p className="text-muted-foreground mb-4">
                  Formular für neue Veranstaltung wird hier implementiert...
                </p>
                <div className="flex justify-end space-x-2">
                  <button
                    onClick={() => setShowAddForm(false)}
                    className="px-4 py-2 text-muted-foreground border border-border rounded hover:bg-muted transition-colors"
                  >
                    Abbrechen
                  </button>
                  <button
                    onClick={handleAddEvent}
                    className="px-4 py-2 bg-primary text-primary-foreground rounded hover:bg-primary/90 transition-colors"
                  >
                    Hinzufügen
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </AdminGate>
  );
}