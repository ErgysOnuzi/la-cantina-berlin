import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const { toast } = useToast();

  const contactMutation = useMutation({
    mutationFn: async (data: typeof formData) => {
      return apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. We'll get back to you soon!",
      });
      setFormData({ name: "", email: "", message: "" });
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Failed to send message. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields.",
        variant: "destructive",
      });
      return;
    }

    contactMutation.mutate(formData);
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-8">
        {/* Hero Section */}
        <section className="bg-primary py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl font-serif font-bold text-primary-foreground mb-4">
              Contact Us
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Get in touch with La Cantina Berlin. We'd love to hear from you and answer 
              any questions about our restaurant, menu, or events.
            </p>
          </div>
        </section>

        {/* Contact Information & Form */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-serif font-bold text-foreground mb-6">
                    Visit Us
                  </h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <MapPin className="w-6 h-6 text-primary mt-1" />
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Address</h3>
                        <p className="text-muted-foreground">
                          Unter den Linden 42<br />
                          10117 Berlin, Germany
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <Phone className="w-6 h-6 text-primary mt-1" />
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                        <p className="text-muted-foreground">+49 30 1234 5678</p>
                        <p className="text-sm text-muted-foreground">Available during business hours</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <Mail className="w-6 h-6 text-primary mt-1" />
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Email</h3>
                        <p className="text-muted-foreground">info@lacantina-berlin.de</p>
                        <p className="text-sm text-muted-foreground">We typically respond within 24 hours</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <Clock className="w-6 h-6 text-primary mt-1" />
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Opening Hours</h3>
                        <div className="text-muted-foreground space-y-1">
                          <div>Monday - Friday: 12:00 - 15:00, 18:00 - 23:00</div>
                          <div>Saturday - Sunday: 12:00 - 23:00</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Map Placeholder */}
                <div className="bg-muted rounded-lg p-8 text-center">
                  <MapPin className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="font-semibold text-foreground mb-2">Find Us in Berlin</h3>
                  <p className="text-muted-foreground text-sm">
                    Located in the heart of Berlin, near Brandenburg Gate and Museum Island.
                    Easily accessible by public transport.
                  </p>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl font-serif">Send us a Message</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <Label htmlFor="name">Full Name</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                          placeholder="Your full name"
                          data-testid="input-contact-name"
                        />
                      </div>

                      <div>
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                          placeholder="your.email@example.com"
                          data-testid="input-contact-email"
                        />
                      </div>

                      <div>
                        <Label htmlFor="message">Message</Label>
                        <Textarea
                          id="message"
                          value={formData.message}
                          onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                          placeholder="Tell us how we can help you..."
                          rows={6}
                          data-testid="input-contact-message"
                        />
                      </div>

                      <Button 
                        type="submit" 
                        className="w-full bg-primary hover:bg-primary/90"
                        disabled={contactMutation.isPending}
                        data-testid="button-submit-contact"
                      >
                        {contactMutation.isPending ? "Sending..." : "Send Message"}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Information */}
        <section className="py-16 bg-card">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-serif font-bold text-foreground mb-8">
              Frequently Asked Questions
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Do you accept walk-ins?</h3>
                <p className="text-sm text-muted-foreground">
                  Yes, we accept walk-ins based on availability. However, we recommend making 
                  a reservation to guarantee your table.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-foreground mb-2">Do you offer vegetarian/vegan options?</h3>
                <p className="text-sm text-muted-foreground">
                  Absolutely! We have several vegetarian dishes and can prepare vegan options 
                  upon request. Please let us know about dietary restrictions.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-foreground mb-2">Can I host private events?</h3>
                <p className="text-sm text-muted-foreground">
                  Yes, we offer private dining for groups of 15-50 people. Contact us to 
                  discuss your event requirements and menu options.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-foreground mb-2">Do you offer delivery or takeaway?</h3>
                <p className="text-sm text-muted-foreground">
                  Currently, we focus on providing the best dine-in experience. Takeaway 
                  is available for certain menu items by calling ahead.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}