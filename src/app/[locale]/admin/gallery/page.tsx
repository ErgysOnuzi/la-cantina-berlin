'use client';

import React, { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { ArrowLeft, Upload, Trash2, Edit2, Image as ImageIcon } from 'lucide-react';
import AdminGate from '../AdminGate';

export const dynamic = 'force-dynamic';

interface GalleryImage {
  id: number;
  image_url: string;
  description: string | null;
  created_at: string;
}

export default function AdminGalleryPage() {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Mock data for now since we don't have API yet
  useEffect(() => {
    // Simulate loading gallery images
    setTimeout(() => {
      setImages([
        {
          id: 1,
          image_url: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=400',
          description: 'Unser gemütliches Restaurant von innen',
          created_at: '2024-12-20'
        },
        {
          id: 2,
          image_url: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=400',
          description: 'Frische Pasta aus eigener Herstellung',
          created_at: '2024-12-21'
        }
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  const handleDelete = (id: number) => {
    if (confirm('Sind Sie sicher, dass Sie dieses Bild löschen möchten?')) {
      setImages(prev => prev.filter(img => img.id !== id));
    }
  };

  const handleUpload = () => {
    // Simulate adding a new image
    const newImage: GalleryImage = {
      id: Date.now(),
      image_url: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400',
      description: 'Neues Bild',
      created_at: new Date().toISOString().split('T')[0]
    };
    setImages(prev => [newImage, ...prev]);
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
              <h1 className="text-4xl font-serif font-bold text-primary mb-2">Galerie Verwaltung</h1>
              <p className="text-muted-foreground text-lg">Bilder hochladen und verwalten</p>
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
              onClick={handleUpload}
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-md hover:bg-primary/90 transition-colors font-medium"
              data-testid="button-upload-image"
            >
              <Upload className="w-4 h-4" />
              Neues Bild hochladen
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {images.map((image) => (
              <div 
                key={image.id} 
                className="bg-card rounded-lg shadow-sm border border-border overflow-hidden hover-elevate transition-colors"
                data-testid={`gallery-image-${image.id}`}
              >
                <div className="aspect-square relative">
                  <img
                    src={image.image_url}
                    alt={image.description || 'Gallery image'}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 right-2 flex gap-1">
                    <button
                      onClick={() => {/* TODO: Implement edit */}}
                      className="p-2 bg-background/80 backdrop-blur-sm border border-border rounded-md hover:bg-background transition-colors"
                      data-testid={`button-edit-${image.id}`}
                    >
                      <Edit2 className="w-4 h-4 text-foreground" />
                    </button>
                    <button
                      onClick={() => handleDelete(image.id)}
                      className="p-2 bg-destructive/80 backdrop-blur-sm border border-destructive/20 rounded-md hover:bg-destructive transition-colors"
                      data-testid={`button-delete-${image.id}`}
                    >
                      <Trash2 className="w-4 h-4 text-destructive-foreground" />
                    </button>
                  </div>
                </div>
                {image.description && (
                  <div className="p-4">
                    <p className="text-sm text-foreground">{image.description}</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Hinzugefügt: {new Date(image.created_at).toLocaleDateString('de-DE')}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {images.length === 0 && !loading && (
            <div className="text-center py-12">
              <ImageIcon className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground text-lg mb-4">
                Keine Bilder in der Galerie vorhanden.
              </p>
              <button
                onClick={handleUpload}
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-md hover:bg-primary/90 transition-colors font-medium"
              >
                <Upload className="w-4 h-4" />
                Erstes Bild hochladen
              </button>
            </div>
          )}
        </div>
      </div>
    </AdminGate>
  );
}