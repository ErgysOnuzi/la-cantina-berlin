import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { useTranslation } from 'react-i18next';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MenuCard from "@/components/MenuCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { MenuItem } from "@shared/schema";
import carbonaraImage from "@assets/generated_images/Signature_pasta_dish_04ccdf2e.png";
import antipastiImage from "@assets/generated_images/Antipasti_starter_dish_6afa13e1.png";

export default function Menu() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.resolvedLanguage || i18n.language;
  const isGerman = currentLang.startsWith('de');
  const [selectedCategory, setSelectedCategory] = useState(t('menu.all_categories'));
  
  const categories = [
    t('menu.all_categories'),
    t('category.appetizers'), 
    t('category.pasta'),
    t('category.pizza'), 
    t('category.fish'),
    t('category.meat'),
    t('category.desserts'), 
    t('category.drinks')
  ];
  
  const { data: menuItems = [], isLoading } = useQuery<MenuItem[]>({
    queryKey: selectedCategory === t('menu.all_categories') ? ['/api/menu-items'] : ['/api/menu-items', selectedCategory],
    queryFn: async () => {
      const url = selectedCategory === t('menu.all_categories') 
        ? '/api/menu-items' 
        : `/api/menu-items?category=${encodeURIComponent(selectedCategory)}`;
      const response = await fetch(url);
      if (!response.ok) throw new Error('Failed to fetch menu items');
      return response.json();
    },
  });

  const getMenuItemImage = (title: string) => {
    if (title === "Spaghetti Carbonara") return carbonaraImage;
    if (title === "Antipasti Della Casa") return antipastiImage;
    return undefined;
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-8">
        {/* Hero Section */}
        <section className="bg-primary py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl font-serif font-bold text-primary-foreground mb-4">
              {t('menu.title')}
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              {t('menu.subtitle')}
            </p>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 bg-card border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  className="mb-2"
                  data-testid={`button-category-${category.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Menu Items */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {isLoading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="h-48 bg-muted animate-pulse rounded-md"></div>
                ))}
              </div>
            ) : menuItems.length === 0 ? (
              <div className="text-center py-12">
                <h3 className="text-2xl font-serif font-semibold text-foreground mb-4">
                  No items found
                </h3>
                <p className="text-muted-foreground">
                  {selectedCategory === t('menu.all_categories') 
                    ? "We're updating our menu. Please check back soon!"
                    : `No items available in the ${selectedCategory} category at the moment.`
                  }
                </p>
              </div>
            ) : (
              <>
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-serif font-bold text-foreground mb-2">
                    {selectedCategory === t('menu.all_categories') ? "All Dishes" : selectedCategory}
                  </h2>
                  <Badge variant="secondary" className="text-sm">
                    {menuItems.length} {menuItems.length === 1 ? 'item' : 'items'}
                  </Badge>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {menuItems.map((item) => (
                    <MenuCard
                      key={item.id}
                      title={isGerman ? (item.titleDe || item.titleEn || 'Untitled') : (item.titleEn || item.titleDe || 'Untitled')}
                      description={isGerman ? (item.descriptionDe || item.descriptionEn || 'No description') : (item.descriptionEn || item.descriptionDe || 'No description')}
                      price={`€${item.price}`}
                      category={isGerman ? (item.categoryDe || item.categoryEn || 'Unknown') : (item.categoryEn || item.categoryDe || 'Unknown')}
                      isAvailable={item.isAvailable}
                      image={getMenuItemImage(isGerman ? (item.titleDe || item.titleEn) : (item.titleEn || item.titleDe))}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-card">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-serif font-bold text-foreground mb-4">
              Ready to Experience Authentic Italian Cuisine?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Reserve your table today and let our chef take you on a culinary journey through Italy.
            </p>
            <Link href="/reservations">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 px-8 py-3 text-lg"
                data-testid="button-menu-reserve"
              >
                {t('nav.reserve_table')}
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}