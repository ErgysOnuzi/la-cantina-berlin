import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Plus, Edit2, Trash2, Eye } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import type { GalleryItem, InsertGalleryItem } from "@shared/schema";

export default function Gallery() {
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<GalleryItem | null>(null);
  const [isAdminMode, setIsAdminMode] = useState(false);
  const [newItem, setNewItem] = useState<Partial<InsertGalleryItem>>({
    title: "",
    description: "",
    imageUrl: "",
    category: "Food",
  });

  const { toast } = useToast();
  const queryClient = useQueryClient();

  const { data: galleryItems = [], isLoading } = useQuery<GalleryItem[]>({
    queryKey: ['/api/gallery'],
  });

  const addItemMutation = useMutation({
    mutationFn: async (data: InsertGalleryItem) => {
      return apiRequest("POST", "/api/gallery", data);
    },
    onSuccess: () => {
      toast({
        title: "Image Added",
        description: "Gallery item has been added successfully.",
      });
      setIsAddDialogOpen(false);
      setNewItem({ title: "", description: "", imageUrl: "", category: "Food" });
      queryClient.invalidateQueries({ queryKey: ["/api/gallery"] });
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Failed to add gallery item.",
        variant: "destructive",
      });
    },
  });

  const deleteItemMutation = useMutation({
    mutationFn: async (id: string) => {
      return apiRequest("DELETE", `/api/gallery/${id}`);
    },
    onSuccess: () => {
      toast({
        title: "Image Deleted",
        description: "Gallery item has been removed.",
      });
      queryClient.invalidateQueries({ queryKey: ["/api/gallery"] });
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Failed to delete gallery item.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!newItem.title || !newItem.imageUrl) {
      toast({
        title: "Missing Information",
        description: "Please fill in the title and image URL.",
        variant: "destructive",
      });
      return;
    }

    addItemMutation.mutate(newItem as InsertGalleryItem);
  };

  const categories = ["Food", "Restaurant", "Ambiance", "Events"];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-8">
        {/* Hero Section */}
        <section className="bg-primary py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl font-serif font-bold text-primary-foreground mb-4">
              Gallery
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Take a visual journey through La Cantina Berlin - our dishes, atmosphere, 
              and the moments that make every visit special.
            </p>
          </div>
        </section>

        {/* Admin Toggle */}
        <section className="py-4 bg-card border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
            <div className="text-sm text-muted-foreground">
              {galleryItems.length} {galleryItems.length === 1 ? 'image' : 'images'} in gallery
            </div>
            <Button
              variant={isAdminMode ? "default" : "outline"}
              size="sm"
              onClick={() => setIsAdminMode(!isAdminMode)}
              data-testid="button-admin-toggle"
            >
              {isAdminMode ? "Exit" : "Manage"} Gallery
            </Button>
          </div>
        </section>

        {/* Gallery Content */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {isAdminMode && (
              <div className="mb-8">
                <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
                  <DialogTrigger asChild>
                    <Button className="mb-4" data-testid="button-add-gallery-item">
                      <Plus className="w-4 h-4 mr-2" />
                      Add New Image
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Add Gallery Item</DialogTitle>
                    </DialogHeader>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <Label htmlFor="title">Title</Label>
                        <Input
                          id="title"
                          value={newItem.title || ""}
                          onChange={(e) => setNewItem(prev => ({ ...prev, title: e.target.value }))}
                          data-testid="input-gallery-title"
                        />
                      </div>
                      <div>
                        <Label htmlFor="description">Description</Label>
                        <Textarea
                          id="description"
                          value={newItem.description || ""}
                          onChange={(e) => setNewItem(prev => ({ ...prev, description: e.target.value }))}
                          data-testid="input-gallery-description"
                        />
                      </div>
                      <div>
                        <Label htmlFor="imageUrl">Image URL</Label>
                        <Input
                          id="imageUrl"
                          type="url"
                          value={newItem.imageUrl || ""}
                          onChange={(e) => setNewItem(prev => ({ ...prev, imageUrl: e.target.value }))}
                          data-testid="input-gallery-image-url"
                        />
                      </div>
                      <div>
                        <Label htmlFor="category">Category</Label>
                        <select
                          id="category"
                          value={newItem.category || "Food"}
                          onChange={(e) => setNewItem(prev => ({ ...prev, category: e.target.value as any }))}
                          className="w-full p-2 border border-border rounded-md"
                          data-testid="select-gallery-category"
                        >
                          {categories.map(cat => (
                            <option key={cat} value={cat}>{cat}</option>
                          ))}
                        </select>
                      </div>
                      <Button 
                        type="submit" 
                        disabled={addItemMutation.isPending}
                        data-testid="button-submit-gallery-item"
                      >
                        {addItemMutation.isPending ? "Adding..." : "Add Image"}
                      </Button>
                    </form>
                  </DialogContent>
                </Dialog>
              </div>
            )}

            {isLoading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="aspect-square bg-muted animate-pulse rounded-md"></div>
                ))}
              </div>
            ) : galleryItems.length === 0 ? (
              <div className="text-center py-12">
                <h3 className="text-2xl font-serif font-semibold text-foreground mb-4">
                  No images yet
                </h3>
                <p className="text-muted-foreground">
                  {isAdminMode 
                    ? "Add your first gallery image using the button above!"
                    : "Our gallery is being updated. Please check back soon!"
                  }
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {galleryItems.map((item) => (
                  <Card key={item.id} className="overflow-hidden hover-elevate">
                    <div className="relative aspect-square">
                      <img
                        src={item.imageUrl}
                        alt={item.title}
                        className="w-full h-full object-cover"
                        data-testid={`img-gallery-${item.id}`}
                      />
                      {isAdminMode && (
                        <div className="absolute top-2 right-2 flex gap-1">
                          <Button
                            size="icon"
                            variant="secondary"
                            onClick={() => deleteItemMutation.mutate(item.id)}
                            disabled={deleteItemMutation.isPending}
                            data-testid={`button-delete-gallery-${item.id}`}
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      )}
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                        <Badge variant="secondary" className="mb-2">
                          {item.category}
                        </Badge>
                        <h3 className="text-white font-semibold text-lg" data-testid={`text-gallery-title-${item.id}`}>
                          {item.title}
                        </h3>
                        {item.description && (
                          <p className="text-white/90 text-sm mt-1" data-testid={`text-gallery-description-${item.id}`}>
                            {item.description}
                          </p>
                        )}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}