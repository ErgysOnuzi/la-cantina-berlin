import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarDays, Clock, Users } from "lucide-react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import type { InsertReservation } from "@shared/schema";

export default function ReservationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "",
  });

  const { toast } = useToast();
  const queryClient = useQueryClient();

  const reservationMutation = useMutation({
    mutationFn: async (data: InsertReservation) => {
      return apiRequest("POST", "/api/reservations", data);
    },
    onSuccess: () => {
      toast({
        title: "Reservation Submitted!",
        description: "Thank you! We'll confirm your booking shortly via email.",
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        date: "",
        time: "",
        guests: "",
      });

      // Invalidate reservations cache
      queryClient.invalidateQueries({ queryKey: ["/api/reservations"] });
    },
    onError: (error: any) => {
      const message = error.message || "Failed to submit reservation. Please try again.";
      toast({
        title: "Reservation Failed",
        description: message,
        variant: "destructive",
      });
    },
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.phone || !formData.date || !formData.time || !formData.guests) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    const reservationData: InsertReservation = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      date: formData.date,
      time: formData.time,
      guests: parseInt(formData.guests),
    };

    reservationMutation.mutate(reservationData);
  };

  const timeSlots = [
    "12:00", "12:30", "13:00", "13:30", "14:00", "14:30",
    "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00", "21:30"
  ];

  return (
    <Card className="max-w-md mx-auto">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-serif text-primary">Reserve Your Table</CardTitle>
        <p className="text-muted-foreground">Join us for an unforgettable dining experience</p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input
              id="name"
              type="text"
              value={formData.name}
              onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
              required
              data-testid="input-name"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
              required
              data-testid="input-email"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
              required
              data-testid="input-phone"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="date">
                <CalendarDays className="w-4 h-4 inline mr-1" />
                Date
              </Label>
              <Input
                id="date"
                type="date"
                value={formData.date}
                onChange={(e) => setFormData(prev => ({ ...prev, date: e.target.value }))}
                required
                min={new Date().toISOString().split('T')[0]}
                data-testid="input-date"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="time">
                <Clock className="w-4 h-4 inline mr-1" />
                Time
              </Label>
              <Select value={formData.time} onValueChange={(value) => setFormData(prev => ({ ...prev, time: value }))}>
                <SelectTrigger data-testid="select-time">
                  <SelectValue placeholder="Select time" />
                </SelectTrigger>
                <SelectContent>
                  {timeSlots.map((time) => (
                    <SelectItem key={time} value={time}>{time}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="guests">
              <Users className="w-4 h-4 inline mr-1" />
              Number of Guests
            </Label>
            <Select value={formData.guests} onValueChange={(value) => setFormData(prev => ({ ...prev, guests: value }))}>
              <SelectTrigger data-testid="select-guests">
                <SelectValue placeholder="Select guests" />
              </SelectTrigger>
              <SelectContent>
                {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                  <SelectItem key={num} value={num.toString()}>
                    {num} {num === 1 ? 'Guest' : 'Guests'}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <Button 
            type="submit" 
            className="w-full bg-primary hover:bg-primary/90" 
            disabled={reservationMutation.isPending}
            data-testid="button-submit-reservation"
          >
            {reservationMutation.isPending ? "Submitting..." : "Reserve Table"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}