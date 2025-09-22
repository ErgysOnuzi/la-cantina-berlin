'use client';
import React, { useState, useEffect } from 'react';

interface MenuItem {
  id: number;
  title: string;
  description: string | null;
  price: number;
  category: string;
  is_available: number;
  title_de: string;
  title_en: string;
  description_de: string | null;
  description_en: string | null;
  category_de: string;
  category_en: string;
  allergens: string | null;
}

export default function MenuCRUD() {
  const [items, setItems] = useState<MenuItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [editingItem, setEditingItem] = useState<MenuItem | null>(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Fetch menu items
  const fetchItems = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/admin/menu');
      if (response.ok) {
        const data = await response.json();
        setItems(data);
      } else {
        setError('Fehler beim Laden der Menü-Artikel');
      }
    } catch (error) {
      setError('Fehler beim Laden der Menü-Artikel');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  // Get unique categories
  const categories = ['all', ...new Set(items.map(item => item.category_de))];

  // Filter items by category
  const filteredItems = selectedCategory === 'all' 
    ? items 
    : items.filter(item => item.category_de === selectedCategory);

  // Delete item
  const handleDelete = async (id: number) => {
    if (!confirm('Sind Sie sicher, dass Sie diesen Artikel löschen möchten?')) return;
    
    try {
      const response = await fetch(`/api/admin/menu/${id}`, {
        method: 'DELETE',
      });
      
      if (response.ok) {
        setItems(items.filter(item => item.id !== id));
      } else {
        setError('Fehler beim Löschen des Artikels');
      }
    } catch (error) {
      setError('Fehler beim Löschen des Artikels');
    }
  };

  // Toggle availability
  const toggleAvailability = async (id: number, currentAvailability: number) => {
    try {
      const response = await fetch(`/api/admin/menu/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          is_available: currentAvailability === 1 ? 0 : 1
        }),
      });
      
      if (response.ok) {
        setItems(items.map(item => 
          item.id === id 
            ? { ...item, is_available: currentAvailability === 1 ? 0 : 1 }
            : item
        ));
      } else {
        setError('Fehler beim Aktualisieren der Verfügbarkeit');
      }
    } catch (error) {
      setError('Fehler beim Aktualisieren der Verfügbarkeit');
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {error && (
        <div className="bg-destructive/10 border border-destructive/20 text-destructive px-4 py-3 rounded-lg">
          {error}
        </div>
      )}

      {/* Controls */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-4">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="border border-border rounded-md px-3 py-2 bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-primary"
            data-testid="select-category-filter"
          >
            <option value="all">Alle Kategorien</option>
            {categories.slice(1).map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
          <span className="text-muted-foreground">
            {filteredItems.length} von {items.length} Artikeln
          </span>
        </div>
        
        <button
          onClick={() => setShowAddForm(true)}
          className="bg-primary text-primary-foreground px-6 py-2 rounded-md hover:bg-primary/90 transition-colors font-medium"
          data-testid="button-add-item"
        >
          + Neuer Artikel
        </button>
      </div>

      {/* Menu Items Table */}
      <div className="bg-card rounded-lg shadow-sm border border-border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-border">
            <thead className="bg-muted/50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  Artikel
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  Kategorie
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  Preis
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  Aktionen
                </th>
              </tr>
            </thead>
            <tbody className="bg-card divide-y divide-border">
              {filteredItems.map((item) => (
                <tr key={item.id} className="hover:bg-muted/30 transition-colors">
                  <td className="px-6 py-4">
                    <div>
                      <div className="text-sm font-medium text-foreground">
                        {item.title_de}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {item.title_en}
                      </div>
                      {item.description_de && (
                        <div className="text-xs text-muted-foreground/80 mt-1 line-clamp-2">
                          {item.description_de}
                        </div>
                      )}
                      {item.allergens && (
                        <div className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded mt-1 inline-block">
                          Allergene: {item.allergens}
                        </div>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-foreground">
                    {item.category_de}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-foreground">
                    €{item.price.toFixed(2)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button
                      onClick={() => toggleAvailability(item.id, item.is_available)}
                      className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold transition-colors ${
                        item.is_available 
                          ? 'bg-accent text-accent-foreground hover:bg-accent/90' 
                          : 'bg-destructive/10 text-destructive hover:bg-destructive/20'
                      }`}
                      data-testid={`button-toggle-availability-${item.id}`}
                    >
                      {item.is_available ? 'Verfügbar' : 'Nicht verfügbar'}
                    </button>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                    <button
                      onClick={() => setEditingItem(item)}
                      className="text-primary hover:text-primary/80 transition-colors"
                      data-testid={`button-edit-${item.id}`}
                    >
                      Bearbeiten
                    </button>
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="text-destructive hover:text-destructive/80 transition-colors"
                      data-testid={`button-delete-${item.id}`}
                    >
                      Löschen
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {filteredItems.length === 0 && !loading && (
        <div className="text-center py-12">
          <p className="text-muted-foreground text-lg">
            Keine Artikel in dieser Kategorie gefunden.
          </p>
        </div>
      )}

      {/* Add/Edit Modal would go here */}
      {(showAddForm || editingItem) && (
        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-card rounded-lg border border-border p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-lg">
            <h3 className="text-lg font-semibold text-foreground mb-4">
              {editingItem ? 'Artikel bearbeiten' : 'Neuer Artikel'}
            </h3>
            <p className="text-muted-foreground mb-4">
              Formular für CRUD-Operationen wird hier implementiert...
            </p>
            <div className="flex justify-end space-x-2">
              <button
                onClick={() => {
                  setEditingItem(null);
                  setShowAddForm(false);
                }}
                className="px-4 py-2 text-muted-foreground border border-border rounded hover:bg-muted/50 transition-colors"
              >
                Abbrechen
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}