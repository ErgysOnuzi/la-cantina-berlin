import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function ReservationCTA() {
  return (
    <section className="py-16 bg-primary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="bg-primary-foreground border-none shadow-lg">
          <CardContent className="p-12 text-center">
            <h2 className="text-4xl font-serif font-bold text-foreground mb-4">
              Ready for an Unforgettable Experience?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join us at La Cantina Berlin and discover why we're Berlin's favorite 
              destination for authentic Italian cuisine. Reserve your table today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 px-8 py-3 text-lg"
                data-testid="button-cta-reserve"
              >
                Reserve Your Table
              </Button>
              <div className="text-sm text-muted-foreground">
                or call us at <strong className="text-foreground">+49 30 1234 5678</strong>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 pt-8 border-t border-border">
              <div className="text-center">
                <div className="text-2xl font-serif font-bold text-primary">Same Day</div>
                <div className="text-sm text-muted-foreground">Reservations Available</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-serif font-bold text-primary">Private</div>
                <div className="text-sm text-muted-foreground">Events & Catering</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-serif font-bold text-primary">Wine</div>
                <div className="text-sm text-muted-foreground">Pairing Available</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}