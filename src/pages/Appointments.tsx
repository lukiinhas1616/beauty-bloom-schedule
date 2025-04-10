
import React, { useState } from 'react';
import { PlusCircle, Filter, CalendarDays, ListFilter, AlertCircle } from 'lucide-react';
import { MainLayout } from '@/components/layout/MainLayout';
import { AppointmentCalendar } from '@/components/schedule/AppointmentCalendar';
import { AppointmentForm } from '@/components/schedule/AppointmentForm';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';

const Appointments = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // Função para lidar com o envio do formulário
  const handleFormSubmit = (data: any) => {
    console.log('Dados do agendamento:', data);
    setIsDialogOpen(false);
    // Aqui você adicionaria a lógica para salvar o agendamento
  };

  // Função para lidar com a seleção do horário no calendário
  const handleTimeSlotSelect = (date: Date, timeSlot: any) => {
    console.log('Data selecionada:', date);
    console.log('Horário selecionado:', timeSlot);
    // Aqui você poderia abrir o diálogo com o horário pré-selecionado
  };

  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Agendamentos</h1>
            <p className="text-muted-foreground">
              Gerencie os agendamentos do seu salão.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <Button variant="outline">
              <Filter className="mr-2 h-4 w-4" />
              Filtrar
            </Button>
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button className="beauty-gradient">
                  <PlusCircle className="mr-2 h-4 w-4" />
                  Novo Agendamento
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[600px]">
                <DialogHeader>
                  <DialogTitle>Agendar Serviço</DialogTitle>
                  <DialogDescription>
                    Preencha os dados para criar um novo agendamento.
                  </DialogDescription>
                </DialogHeader>
                <ScrollArea className="max-h-[80vh]">
                  <AppointmentForm onSubmit={handleFormSubmit} />
                </ScrollArea>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        <Tabs defaultValue="calendar">
          <div className="flex items-center justify-between mb-4">
            <TabsList>
              <TabsTrigger value="calendar" className="flex items-center">
                <CalendarDays className="mr-2 h-4 w-4" />
                Calendário
              </TabsTrigger>
              <TabsTrigger value="list" className="flex items-center">
                <ListFilter className="mr-2 h-4 w-4" />
                Lista
              </TabsTrigger>
            </TabsList>

            <div className="flex gap-2">
              <Badge variant="outline" className="bg-green-100 text-green-800 hover:bg-green-200">
                Confirmado
              </Badge>
              <Badge variant="outline" className="bg-amber-100 text-amber-800 hover:bg-amber-200">
                Pendente
              </Badge>
              <Badge variant="outline" className="bg-red-100 text-red-800 hover:bg-red-200">
                Cancelado
              </Badge>
            </div>
          </div>

          <TabsContent value="calendar" className="mt-0">
            <AppointmentCalendar onSelectTimeSlot={handleTimeSlotSelect} />
          </TabsContent>

          <TabsContent value="list" className="mt-0">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle>Lista de Agendamentos</CardTitle>
                <CardDescription>
                  Todos os agendamentos do seu salão.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-center py-10 border-2 border-dashed rounded-md">
                  <div className="text-center">
                    <AlertCircle className="mx-auto h-12 w-12 text-muted-foreground" />
                    <h3 className="mt-2 text-lg font-semibold">Sem Agendamentos</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Nenhum agendamento encontrado para os filtros atuais.
                    </p>
                    <Button className="mt-4">
                      <PlusCircle className="mr-2 h-4 w-4" />
                      Criar Agendamento
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
};

export default Appointments;
