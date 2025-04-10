
import React from 'react';
import { useForm } from 'react-hook-form';
import { Calendar, Clock, User, Scissors, MessageSquare } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Calendar as CalendarComponent } from '@/components/ui/calendar';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { cn } from '@/lib/utils';

interface FormValues {
  name: string;
  email: string;
  phone: string;
  date: Date;
  time: string;
  service: string;
  staff: string;
  notes?: string;
}

interface AppointmentFormProps {
  onSubmit: (data: FormValues) => void;
  services?: { id: string; name: string }[];
  staff?: { id: string; name: string }[];
}

export function AppointmentForm({ 
  onSubmit,
  services = [
    { id: '1', name: 'Corte de Cabelo' },
    { id: '2', name: 'Coloração' },
    { id: '3', name: 'Manicure' },
    { id: '4', name: 'Pedicure' },
    { id: '5', name: 'Depilação' },
  ],
  staff = [
    { id: '1', name: 'Ana Silva' },
    { id: '2', name: 'Pedro Santos' },
    { id: '3', name: 'Carla Lima' },
  ]
}: AppointmentFormProps) {
  const form = useForm<FormValues>({
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      date: new Date(),
      time: '',
      service: '',
      staff: '',
      notes: '',
    },
  });

  const times = [
    '09:00', '09:30', '10:00', '10:30', '11:00', 
    '11:30', '12:00', '12:30', '13:00', '13:30', 
    '14:00', '14:30', '15:00', '15:30', '16:00', 
    '16:30', '17:00', '17:30', '18:00'
  ];

  const handleSubmit = (values: FormValues) => {
    onSubmit(values);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Novo Agendamento</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nome</FormLabel>
                    <FormControl>
                      <div className="flex items-center">
                        <User className="w-4 h-4 text-muted-foreground absolute ml-3" />
                        <Input placeholder="Nome do cliente" className="pl-9" {...field} />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="exemplo@email.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Telefone</FormLabel>
                    <FormControl>
                      <Input placeholder="(00) 00000-0000" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="service"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Serviço</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="w-full">
                          <div className="flex items-center">
                            <Scissors className="w-4 h-4 mr-2 text-muted-foreground" />
                            <SelectValue placeholder="Selecione o serviço" />
                          </div>
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {services.map((service) => (
                          <SelectItem key={service.id} value={service.id}>
                            {service.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <FormField
                control={form.control}
                name="date"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Data</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant="outline"
                            className={cn(
                              "w-full pl-3 text-left font-normal",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            <Calendar className="w-4 h-4 mr-2 text-muted-foreground" />
                            {field.value ? (
                              format(field.value, "PPP", { locale: ptBR })
                            ) : (
                              <span>Selecione uma data</span>
                            )}
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <CalendarComponent
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date) => date < new Date()}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="time"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Horário</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="w-full">
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-2 text-muted-foreground" />
                            <SelectValue placeholder="Selecione o horário" />
                          </div>
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {times.map((time) => (
                          <SelectItem key={time} value={time}>{time}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="staff"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Profissional</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="w-full">
                          <div className="flex items-center">
                            <User className="w-4 h-4 mr-2 text-muted-foreground" />
                            <SelectValue placeholder="Selecione o profissional" />
                          </div>
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {staff.map((person) => (
                          <SelectItem key={person.id} value={person.id}>{person.name}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="notes"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Observações</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <MessageSquare className="w-4 h-4 absolute top-3 left-3 text-muted-foreground" />
                      <Textarea 
                        placeholder="Informações adicionais..." 
                        className="pl-9 min-h-[100px]" 
                        {...field} 
                      />
                    </div>
                  </FormControl>
                  <FormDescription>
                    Adicione informações relevantes para este agendamento.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex justify-end">
              <Button type="submit" className="w-full md:w-auto">
                Agendar
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
