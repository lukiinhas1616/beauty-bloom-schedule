
import React from 'react';
import { Calendar, Clock, User } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';

interface Appointment {
  id: string;
  client: {
    name: string;
    avatar?: string;
  };
  service: string;
  date: string;
  time: string;
  duration: string;
  status: 'confirmed' | 'pending' | 'cancelled';
}

interface AppointmentListProps {
  appointments: Appointment[];
  title?: string;
  description?: string;
  showViewAll?: boolean;
}

export function AppointmentList({
  appointments,
  title = "Próximos Agendamentos",
  description = "Agendamentos para hoje e amanhã",
  showViewAll = true,
}: AppointmentListProps) {
  const statusStyles = {
    confirmed: {
      label: 'Confirmado',
      className: 'bg-green-100 text-green-800 hover:bg-green-200',
    },
    pending: {
      label: 'Pendente',
      className: 'bg-amber-100 text-amber-800 hover:bg-amber-200',
    },
    cancelled: {
      label: 'Cancelado',
      className: 'bg-red-100 text-red-800 hover:bg-red-200',
    },
  };

  return (
    <Card className="h-full">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </div>
          {showViewAll && (
            <Button variant="outline" size="sm">Ver todos</Button>
          )}
        </div>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[400px] pr-4">
          <div className="space-y-4">
            {appointments.map((appointment) => (
              <div
                key={appointment.id}
                className="flex items-start p-3 rounded-lg border border-border bg-card hover:bg-accent/50 transition-colors"
              >
                <Avatar className="h-9 w-9">
                  <AvatarImage src={appointment.client.avatar} alt={appointment.client.name} />
                  <AvatarFallback className="bg-beauty-100 text-beauty-700">
                    {appointment.client.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <div className="ml-3 space-y-1 flex-1">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium">{appointment.client.name}</p>
                    <Badge variant="outline" className={statusStyles[appointment.status].className}>
                      {statusStyles[appointment.status].label}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{appointment.service}</p>
                  <div className="flex items-center text-xs text-muted-foreground gap-3 mt-2">
                    <span className="flex items-center gap-1">
                      <Calendar size={12} />
                      {appointment.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={12} />
                      {appointment.time} ({appointment.duration})
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
