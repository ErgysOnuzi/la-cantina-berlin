import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import MenuCard from "./MenuCard";
import { useQuery } from "@tanstack/react-query";
import type { MenuItem } from "@shared/schema";
import carbonaraImage from "@assets/generated_images/Signature_pasta_dish_04ccdf2e.png";
import antipastiImage from "@assets/generated_images/Antipasti_starter_dish_6afa13e1.png";

export default function MenuHighlights() {
  const { data: menuItems = [], isLoading } = useQuery<MenuItem[]>({
    queryKey: ['/api/menu-items'],
  });

  // Get highlights (first 3 items) with fallback images
  const highlights = menuItems.slice(0, 3).map(item => ({
    ...item,
    price: `€${item.price}`,
    image: item.title === "Spaghetti Carbonara" ? carbonaraImage :
           item.title === "Antipasti Della Casa" ? antipastiImage :
           undefined
  }));

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold text-foreground mb-4">
            Signature Dishes
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our most beloved creations, each crafted with passion and 
            the finest Italian ingredients
          </p>
        </div>

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-48 bg-muted animate-pulse rounded-md"></div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {highlights.map((dish) => (
              <MenuCard
                key={dish.id}
                title={dish.title}
                description={dish.description}
                price={dish.price}
                category={dish.category}
                isAvailable={dish.isAvailable}
                image={dish.image}
              />
            ))}
          </div>
        )}

        <div className="text-center">
          <Link href="/menu">
            <Button 
              size="lg" 
              variant="outline" 
              className="px-8 py-3"
              data-testid="button-view-full-menu"
            >
              View Full Menu
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}