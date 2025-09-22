import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Restaurant Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-serif font-bold text-primary">
              La Cantina
            </h3>
            <p className="text-sm font-script text-background/80">Berlin</p>
            <p className="text-background/80 text-sm leading-relaxed">
              Authentic Italian cuisine in the heart of Berlin. 
              Experience tradition, passion, and exceptional flavors.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-background/80">
                  Unter den Linden 42<br />
                  10117 Berlin, Germany
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-background/80">+49 30 1234 5678</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-background/80">info@lacantina-berlin.de</span>
              </div>
            </div>
          </div>

          {/* Opening Hours */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Opening Hours</h4>
            <div className="space-y-2 text-sm text-background/80">
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-primary flex-shrink-0" />
                <div>
                  <div>Monday - Friday</div>
                  <div>12:00 - 15:00, 18:00 - 23:00</div>
                </div>
              </div>
              <div className="ml-7">
                <div>Saturday - Sunday</div>
                <div>12:00 - 23:00</div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <nav className="space-y-2 text-sm">
              <a href="/menu" className="block text-background/80 hover:text-primary transition-colors">
                Menu
              </a>
              <a href="/reservations" className="block text-background/80 hover:text-primary transition-colors">
                Reservations
              </a>
              <a href="/events" className="block text-background/80 hover:text-primary transition-colors">
                Private Events
              </a>
              <a href="/gallery" className="block text-background/80 hover:text-primary transition-colors">
                Gallery
              </a>
              <a href="/contact" className="block text-background/80 hover:text-primary transition-colors">
                Contact
              </a>
            </nav>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/60">
            <p>&copy; 2024 La Cantina Berlin. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="/legal" className="hover:text-primary transition-colors">
                Impressum
              </a>
              <a href="/privacy" className="hover:text-primary transition-colors">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}