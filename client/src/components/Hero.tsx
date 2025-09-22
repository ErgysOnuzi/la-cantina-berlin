import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import heroImage from "@assets/generated_images/Restaurant_hero_interior_a46aa195.png";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="La Cantina Berlin Interior"
          className="w-full h-full object-cover"
        />
        {/* Dark wash overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">
          Authentic Italian Cuisine
        </h1>
        <p className="text-xl md:text-2xl mb-4 font-script">
          in the heart of Berlin
        </p>
        <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Welcome to La Cantina Berlin – Where tradition meets passion. 
          Experience the finest Italian flavors crafted with love and authentic recipes passed down through generations.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/reservations">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white px-8 py-3 text-lg"
              data-testid="button-hero-reserve"
            >
              Reserve a Table
            </Button>
          </Link>
          <Link href="/menu">
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white/10 bg-white/5 backdrop-blur-sm px-8 py-3 text-lg"
              data-testid="button-hero-menu"
            >
              View Menu
            </Button>
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
}