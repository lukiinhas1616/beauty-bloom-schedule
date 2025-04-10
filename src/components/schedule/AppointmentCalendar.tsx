
import React, { useState } from 'react';
import { addDays, format, startOfWeek, addWeeks, isSameDay } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface TimeSlot {
  time: string;
  available: boolean;
  booked?: {
    clientName: string;
    service: string;
    duration: string;
  };
}

interface AppointmentCalendarProps {
  onSelectTimeSlot?: (date: Date, timeSlot: TimeSlot) => void;
}

export function AppointmentCalendar({ onSelectTimeSlot }: AppointmentCalendarProps) {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [currentWeekStart, setCurrentWeekStart] = useState<Date>(startOfWeek(new Date(), { weekStartsOn: 0 }));

  // Generate week days from the current week start
  const weekDays = Array.from({ length: 7 }).map((_, i) => addDays(currentWeekStart, i));

  // Dummy time slots (replace with your actual data)
  const timeSlots: TimeSlot[] = [
    { time: '09:00', available: true },
    { time: '10:00', available: false, booked: { clientName: 'Ana Silva', service: 'Corte de Cabelo', duration: '1h' } },
    { time: '11:00', available: true },
    { time: '12:00', available: true },
    { time: '13:00', available: false, booked: { clientName: 'Carlos Mendes', service: 'Barba', duration: '30min' } },
    { time: '14:00', available: true },
    { time: '15:00', available: true },
    { time: '16:00', available: false, booked: { clientName: 'Juliana Costa', service: 'Manicure', duration: '1h30min' } },
    { time: '17:00', available: true },
    { time: '18:00', available: true },
  ];

  const navigateWeek = (direction: 'prev' | 'next') => {
    setCurrentWeekStart(prevWeekStart => 
      direction === 'prev' 
        ? addWeeks(prevWeekStart, -1) 
        : addWeeks(prevWeekStart, 1)
    );
  };

  const handleDateClick = (date: Date) => {
    setSelectedDate(date);
  };

  const handleTimeSlotClick = (timeSlot: TimeSlot) => {
    if (timeSlot.available && onSelectTimeSlot) {
      onSelectTimeSlot(selectedDate, timeSlot);
    }
  };

  return (
    <Card className="w-full">
      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">
            {format(currentWeekStart, "MMMM yyyy", { locale: ptBR })}
          </h3>
          <div className="flex items-center gap-1">
            <Button onClick={() => navigateWeek('prev')} variant="outline" size="icon" className="h-8 w-8">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button onClick={() => navigateWeek('next')} variant="outline" size="icon" className="h-8 w-8">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-7 gap-2 mb-4">
          {weekDays.map((day, i) => {
            const isToday = isSameDay(day, new Date());
            const isSelected = isSameDay(day, selectedDate);
            
            return (
              <Button
                key={i}
                variant="outline"
                className={cn(
                  "h-auto flex flex-col py-2 hover:bg-accent",
                  isSelected && "bg-primary text-primary-foreground hover:bg-primary/90",
                  isToday && !isSelected && "border-primary text-primary"
                )}
                onClick={() => handleDateClick(day)}
              >
                <span className="text-xs">
                  {format(day, "EEE", { locale: ptBR })}
                </span>
                <span className={cn(
                  "text-lg font-semibold",
                  isToday && !isSelected && "text-primary"
                )}>
                  {format(day, "dd", { locale: ptBR })}
                </span>
              </Button>
            );
          })}
        </div>

        <h4 className="text-sm font-medium mb-2">
          Horários para {format(selectedDate, "dd 'de' MMMM", { locale: ptBR })}
        </h4>

        <ScrollArea className="h-[320px] pr-4">
          <div className="space-y-2">
            {timeSlots.map((slot, i) => (
              <div
                key={i}
                className={cn(
                  "p-3 rounded-md border",
                  slot.available 
                    ? "border-border hover:bg-accent cursor-pointer transition-colors"
                    : "border-muted bg-muted/50"
                )}
                onClick={() => slot.available && handleTimeSlotClick(slot)}
              >
                <div className="flex items-center justify-between">
                  <span className="font-medium">{slot.time}</span>
                  {slot.available ? (
                    <span className="text-xs text-green-600 bg-green-100 px-2 py-1 rounded-full">
                      Disponível
                    </span>
                  ) : (
                    <span className="text-xs text-beauty-600 bg-beauty-100 px-2 py-1 rounded-full">
                      Reservado
                    </span>
                  )}
                </div>
                
                {!slot.available && slot.booked && (
                  <div className="mt-2 text-sm">
                    <p className="font-medium">{slot.booked.clientName}</p>
                    <p className="text-muted-foreground text-xs">
                      {slot.booked.service} • {slot.booked.duration}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
