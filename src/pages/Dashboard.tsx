
import React from 'react';
import { Calendar, CreditCard, Users, TrendingUp, Scissors } from 'lucide-react';
import { MainLayout } from '@/components/layout/MainLayout';
import { StatsCard } from '@/components/dashboard/StatsCard';
import { AppointmentList } from '@/components/dashboard/AppointmentList';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Dashboard = () => {
  // Dados fictícios para os agendamentos (em uma aplicação real, isso viria de uma API)
  const appointments = [
    {
      id: '1',
      client: { name: 'Maria Silva' },
      service: 'Corte de Cabelo',
      date: '12/04/2025',
      time: '10:00',
      duration: '1h',
      status: 'confirmed' as const,
    },
    {
      id: '2',
      client: { name: 'João Oliveira' },
      service: 'Barba',
      date: '12/04/2025',
      time: '11:30',
      duration: '30min',
      status: 'pending' as const,
    },
    {
      id: '3',
      client: { name: 'Ana Santos' },
      service: 'Coloração',
      date: '12/04/2025',
      time: '14:00',
      duration: '2h',
      status: 'confirmed' as const,
    },
    {
      id: '4',
      client: { name: 'Paulo Costa' },
      service: 'Manicure',
      date: '13/04/2025',
      time: '09:00',
      duration: '1h',
      status: 'confirmed' as const,
    },
    {
      id: '5',
      client: { name: 'Carla Lima' },
      service: 'Tratamento Facial',
      date: '13/04/2025',
      time: '15:30',
      duration: '1h30min',
      status: 'cancelled' as const,
    },
  ];

  return (
    <MainLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">
            Bem-vindo(a) ao seu painel de controle.
          </p>
        </div>

        {/* Cards de estatísticas */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          <StatsCard 
            title="Total de Agendamentos" 
            value="128" 
            description="Este mês"
            trend={{ value: 12, isPositive: true }}
            icon={<Calendar className="h-5 w-5" />}
          />
          <StatsCard 
            title="Novos Clientes" 
            value="24" 
            description="Últimos 30 dias"
            trend={{ value: 8, isPositive: true }}
            icon={<Users className="h-5 w-5" />}
          />
          <StatsCard 
            title="Receita" 
            value="R$ 8.450,00" 
            description="Este mês"
            trend={{ value: 5, isPositive: true }}
            icon={<CreditCard className="h-5 w-5" />}
          />
          <StatsCard 
            title="Serviços Realizados" 
            value="95" 
            description="Este mês"
            trend={{ value: 2, isPositive: false }}
            icon={<Scissors className="h-5 w-5" />}
          />
        </div>

        {/* Seção principal do dashboard com agendamentos e gráfico */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Lista de agendamentos */}
          <AppointmentList appointments={appointments} />

          {/* Gráfico simplificado */}
          <Card>
            <CardHeader>
              <CardTitle>Desempenho Mensal</CardTitle>
              <CardDescription>Receita e agendamentos dos últimos 6 meses</CardDescription>
            </CardHeader>
            <CardContent className="px-2 h-[400px] flex items-center justify-center">
              <div className="text-center text-muted-foreground p-4 border border-dashed rounded-md w-full max-w-md">
                <TrendingUp className="h-10 w-10 mx-auto mb-3 text-beauty-500" />
                <h3 className="text-lg font-medium">Gráfico de Desempenho</h3>
                <p className="text-sm mt-1">
                  Visualize a evolução da sua receita e agendamentos ao longo do tempo.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
};

export default Dashboard;
