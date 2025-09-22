import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ReservationForm from "@/components/ReservationForm";

export default function Reservations() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-8">
        {/* Hero Section */}
        <section className="bg-primary py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl font-serif font-bold text-primary-foreground mb-4">
              Make a Reservation
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Book your table at La Cantina Berlin and experience authentic Italian cuisine 
              in the heart of the city.
            </p>
          </div>
        </section>

        {/* Reservation Form Section */}
        <section className="py-16 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Form */}
              <div>
                <ReservationForm />
              </div>

              {/* Info */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-serif font-bold text-foreground mb-6">
                    Reservation Information
                  </h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        Opening Hours
                      </h3>
                      <div className="text-muted-foreground space-y-1">
                        <div>Monday - Friday: 12:00 - 15:00, 18:00 - 23:00</div>
                        <div>Saturday - Sunday: 12:00 - 23:00</div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        Reservation Policy
                      </h3>
                      <div className="text-muted-foreground space-y-2 text-sm">
                        <p>• Tables are held for 15 minutes past reservation time</p>
                        <p>• Same-day reservations available by phone</p>
                        <p>• Group bookings (8+ people) require advance notice</p>
                        <p>• Cancellations accepted up to 2 hours before reservation</p>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        Contact Us
                      </h3>
                      <div className="text-muted-foreground space-y-1">
                        <div>Phone: +49 30 1234 5678</div>
                        <div>Email: reservations@lacantina-berlin.de</div>
                        <div>Address: Unter den Linden 42, 10117 Berlin</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Special Events */}
        <section className="py-16 bg-card">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-serif font-bold text-foreground mb-4">
              Special Events & Private Dining
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Looking to host a special occasion? We offer private dining experiences 
              for birthdays, anniversaries, business dinners, and more.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="p-6">
                <div className="text-2xl font-serif font-bold text-primary mb-2">Private Rooms</div>
                <div className="text-sm text-muted-foreground">Intimate spaces for 10-30 guests</div>
              </div>
              <div className="p-6">
                <div className="text-2xl font-serif font-bold text-primary mb-2">Wine Tastings</div>
                <div className="text-sm text-muted-foreground">Curated Italian wine experiences</div>
              </div>
              <div className="p-6">
                <div className="text-2xl font-serif font-bold text-primary mb-2">Catering</div>
                <div className="text-sm text-muted-foreground">Authentic Italian catering services</div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}