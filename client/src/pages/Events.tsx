import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, Clock, MapPin, Plus, Edit2, Trash2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import type { Event, InsertEvent } from "@shared/schema";

export default function Events() {
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isAdminMode, setIsAdminMode] = useState(false);
  const [newEvent, setNewEvent] = useState({
    title: "",
    description: "",
    date: "",
    time: "",
    location: "La Cantina Berlin",
    price: "",
    maxAttendees: "",
  });

  const { toast } = useToast();
  const queryClient = useQueryClient();

  const { data: events = [], isLoading } = useQuery<Event[]>({
    queryKey: ['/api/events'],
  });

  const addEventMutation = useMutation({
    mutationFn: async (data: InsertEvent) => {
      return apiRequest("POST", "/api/events", data);
    },
    onSuccess: () => {
      toast({
        title: "Event Added",
        description: "Event has been added successfully.",
      });
      setIsAddDialogOpen(false);
      setNewEvent({
        title: "",
        description: "",
        date: "",
        time: "",
        location: "La Cantina Berlin",
        price: "",
        maxAttendees: "",
      });
      queryClient.invalidateQueries({ queryKey: ["/api/events"] });
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Failed to add event.",
        variant: "destructive",
      });
    },
  });

  const deleteEventMutation = useMutation({
    mutationFn: async (id: string) => {
      return apiRequest("DELETE", `/api/events/${id}`);
    },
    onSuccess: () => {
      toast({
        title: "Event Deleted",
        description: "Event has been removed.",
      });
      queryClient.invalidateQueries({ queryKey: ["/api/events"] });
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Failed to delete event.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!newEvent.title || !newEvent.date || !newEvent.time) {
      toast({
        title: "Missing Information",
        description: "Please fill in the title, date, and time.",
        variant: "destructive",
      });
      return;
    }

    const eventData: InsertEvent = {
      title: newEvent.title,
      description: newEvent.description || "",
      date: newEvent.date,
      time: newEvent.time,
      location: newEvent.location || "La Cantina Berlin",
      price: newEvent.price || null,
      maxAttendees: newEvent.maxAttendees ? parseInt(newEvent.maxAttendees) : null,
    };

    addEventMutation.mutate(eventData);
  };

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('en-GB', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const isUpcoming = (dateStr: string) => {
    return new Date(dateStr) >= new Date();
  };

  const upcomingEvents = events.filter(event => isUpcoming(event.date));
  const pastEvents = events.filter(event => !isUpcoming(event.date));

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-8">
        {/* Hero Section */}
        <section className="bg-primary py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl font-serif font-bold text-primary-foreground mb-4">
              Events & Special Occasions
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Join us for wine tastings, cooking classes, live music, and seasonal celebrations 
              that bring the spirit of Italy to Berlin.
            </p>
          </div>
        </section>

        {/* Admin Toggle */}
        <section className="py-4 bg-card border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
            <div className="text-sm text-muted-foreground">
              {upcomingEvents.length} upcoming event{upcomingEvents.length !== 1 ? 's' : ''}
            </div>
            <Button
              variant={isAdminMode ? "default" : "outline"}
              size="sm"
              onClick={() => setIsAdminMode(!isAdminMode)}
              data-testid="button-admin-toggle"
            >
              {isAdminMode ? "Exit" : "Manage"} Events
            </Button>
          </div>
        </section>

        {/* Events Content */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {isAdminMode && (
              <div className="mb-8">
                <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
                  <DialogTrigger asChild>
                    <Button className="mb-4" data-testid="button-add-event">
                      <Plus className="w-4 h-4 mr-2" />
                      Add New Event
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Add Event</DialogTitle>
                    </DialogHeader>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <Label htmlFor="title">Title</Label>
                        <Input
                          id="title"
                          value={newEvent.title || ""}
                          onChange={(e) => setNewEvent(prev => ({ ...prev, title: e.target.value }))}
                          data-testid="input-event-title"
                        />
                      </div>
                      <div>
                        <Label htmlFor="description">Description</Label>
                        <Textarea
                          id="description"
                          value={newEvent.description || ""}
                          onChange={(e) => setNewEvent(prev => ({ ...prev, description: e.target.value }))}
                          data-testid="input-event-description"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="date">Date</Label>
                          <Input
                            id="date"
                            type="date"
                            value={newEvent.date || ""}
                            onChange={(e) => setNewEvent(prev => ({ ...prev, date: e.target.value }))}
                            data-testid="input-event-date"
                          />
                        </div>
                        <div>
                          <Label htmlFor="time">Time</Label>
                          <Input
                            id="time"
                            type="time"
                            value={newEvent.time || ""}
                            onChange={(e) => setNewEvent(prev => ({ ...prev, time: e.target.value }))}
                            data-testid="input-event-time"
                          />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="location">Location</Label>
                        <Input
                          id="location"
                          value={newEvent.location || ""}
                          onChange={(e) => setNewEvent(prev => ({ ...prev, location: e.target.value }))}
                          data-testid="input-event-location"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="price">Price (optional)</Label>
                          <Input
                            id="price"
                            type="number"
                            step="0.01"
                            placeholder="0.00"
                            value={newEvent.price || ""}
                            onChange={(e) => setNewEvent(prev => ({ ...prev, price: e.target.value }))}
                            data-testid="input-event-price"
                          />
                        </div>
                        <div>
                          <Label htmlFor="maxAttendees">Max Attendees (optional)</Label>
                          <Input
                            id="maxAttendees"
                            type="number"
                            placeholder="50"
                            value={newEvent.maxAttendees}
                            onChange={(e) => setNewEvent(prev => ({ ...prev, maxAttendees: e.target.value }))}
                            data-testid="input-event-max-attendees"
                          />
                        </div>
                      </div>
                      <Button 
                        type="submit" 
                        disabled={addEventMutation.isPending}
                        data-testid="button-submit-event"
                      >
                        {addEventMutation.isPending ? "Adding..." : "Add Event"}
                      </Button>
                    </form>
                  </DialogContent>
                </Dialog>
              </div>
            )}

            {isLoading ? (
              <div className="space-y-6">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="h-48 bg-muted animate-pulse rounded-md"></div>
                ))}
              </div>
            ) : (
              <>
                {/* Upcoming Events */}
                {upcomingEvents.length > 0 && (
                  <div className="mb-12">
                    <h2 className="text-3xl font-serif font-bold text-foreground mb-8">
                      Upcoming Events
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {upcomingEvents.map((event) => (
                        <Card key={event.id} className="hover-elevate">
                          <CardHeader>
                            <div className="flex justify-between items-start">
                              <div>
                                <CardTitle className="text-xl mb-2" data-testid={`text-event-title-${event.id}`}>
                                  {event.title}
                                </CardTitle>
                                <Badge variant="secondary">Upcoming</Badge>
                              </div>
                              {isAdminMode && (
                                <Button
                                  size="icon"
                                  variant="outline"
                                  onClick={() => deleteEventMutation.mutate(event.id)}
                                  disabled={deleteEventMutation.isPending}
                                  data-testid={`button-delete-event-${event.id}`}
                                >
                                  <Trash2 className="w-4 h-4" />
                                </Button>
                              )}
                            </div>
                          </CardHeader>
                          <CardContent>
                            <div className="space-y-3">
                              <div className="flex items-center text-sm text-muted-foreground">
                                <Calendar className="w-4 h-4 mr-2" />
                                <span data-testid={`text-event-date-${event.id}`}>
                                  {formatDate(event.date)}
                                </span>
                              </div>
                              <div className="flex items-center text-sm text-muted-foreground">
                                <Clock className="w-4 h-4 mr-2" />
                                <span data-testid={`text-event-time-${event.id}`}>
                                  {event.time}
                                </span>
                              </div>
                              <div className="flex items-center text-sm text-muted-foreground">
                                <MapPin className="w-4 h-4 mr-2" />
                                <span data-testid={`text-event-location-${event.id}`}>
                                  {event.location}
                                </span>
                              </div>
                              {event.description && (
                                <p className="text-sm" data-testid={`text-event-description-${event.id}`}>
                                  {event.description}
                                </p>
                              )}
                              <div className="flex justify-between items-center pt-2">
                                {event.price ? (
                                  <span className="font-semibold text-primary" data-testid={`text-event-price-${event.id}`}>
                                    €{event.price}
                                  </span>
                                ) : (
                                  <span className="text-green-600 font-semibold">Free</span>
                                )}
                                {event.maxAttendees && (
                                  <span className="text-xs text-muted-foreground" data-testid={`text-event-attendees-${event.id}`}>
                                    Max {event.maxAttendees} attendees
                                  </span>
                                )}
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                )}

                {/* Past Events */}
                {pastEvents.length > 0 && (
                  <div>
                    <h2 className="text-3xl font-serif font-bold text-foreground mb-8">
                      Past Events
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {pastEvents.map((event) => (
                        <Card key={event.id} className="opacity-75">
                          <CardHeader>
                            <div className="flex justify-between items-start">
                              <div>
                                <CardTitle className="text-lg mb-2">
                                  {event.title}
                                </CardTitle>
                                <Badge variant="outline">Past Event</Badge>
                              </div>
                              {isAdminMode && (
                                <Button
                                  size="icon"
                                  variant="outline"
                                  onClick={() => deleteEventMutation.mutate(event.id)}
                                  disabled={deleteEventMutation.isPending}
                                >
                                  <Trash2 className="w-4 h-4" />
                                </Button>
                              )}
                            </div>
                          </CardHeader>
                          <CardContent>
                            <div className="space-y-2 text-sm">
                              <div>{formatDate(event.date)} at {event.time}</div>
                              {event.description && (
                                <p className="text-muted-foreground line-clamp-2">
                                  {event.description}
                                </p>
                              )}
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                )}

                {/* Empty State */}
                {events.length === 0 && (
                  <div className="text-center py-12">
                    <h3 className="text-2xl font-serif font-semibold text-foreground mb-4">
                      No events scheduled
                    </h3>
                    <p className="text-muted-foreground">
                      {isAdminMode 
                        ? "Add your first event using the button above!"
                        : "We're planning exciting events. Please check back soon!"
                      }
                    </p>
                  </div>
                )}
              </>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-card">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-serif font-bold text-foreground mb-4">
              Private Events & Catering
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Looking to host your own event? We offer private dining experiences, 
              corporate events, and catering services tailored to your needs.
            </p>
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 px-8 py-3 text-lg"
              data-testid="button-contact-events"
            >
              Contact Us for Private Events
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}