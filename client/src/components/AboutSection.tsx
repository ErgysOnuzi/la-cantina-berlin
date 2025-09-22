import { Card, CardContent } from "@/components/ui/card";
import chefImage from "@assets/generated_images/Italian_chef_portrait_a1834a03.png";

export default function AboutSection() {
  return (
    <section className="py-16 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <Card className="overflow-hidden">
              <img
                src={chefImage}
                alt="Chef Marco - Head Chef at La Cantina Berlin"
                className="w-full h-96 object-cover"
              />
            </Card>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 space-y-6">
            <div>
              <h2 className="text-4xl font-serif font-bold text-foreground mb-4">
                Our Story
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Since opening our doors in the heart of Berlin, La Cantina has been a celebration of 
                authentic Italian cuisine and warm hospitality. Our journey began with a simple dream: 
                to bring the true flavors of Italy to Berlin.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-serif font-semibold text-primary">
                Chef Marco Ricci
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Born in Naples and trained in the finest kitchens of Italy, Chef Marco brings three 
                decades of culinary expertise to every dish. His passion for traditional recipes 
                combined with locally-sourced German ingredients creates a unique dining experience 
                that honors both cultures.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6">
              <div className="text-center">
                <div className="text-3xl font-serif font-bold text-primary">15+</div>
                <div className="text-sm text-muted-foreground">Years in Berlin</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-serif font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Wine Selections</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-serif font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Traditional Recipes</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}