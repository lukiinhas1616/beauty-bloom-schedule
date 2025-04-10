
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-background to-accent/20 p-4">
      <div className="w-full max-w-4xl text-center space-y-8 animate-fade-in">
        <div>
          <div className="flex justify-center">
            <div className="w-20 h-20">
              <img 
                src="/lovable-uploads/0d00ed21-826d-4196-88bb-53502a17e8f2.png" 
                alt="Vizzua Logo" 
                className="h-full w-full object-contain"
              />
            </div>
          </div>
          <h1 className="mt-6 text-4xl md:text-5xl font-bold">Vizzua</h1>
          <p className="mt-4 text-xl text-muted-foreground">
            Sistema de agendamento para salões de beleza e estética
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-white/50 backdrop-blur-sm border-muted hover:border-beauty-300 transition-all duration-300">
            <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
              <div className="w-12 h-12 rounded-full beauty-gradient flex items-center justify-center text-white text-xl">
                1
              </div>
              <h3 className="text-lg font-semibold">Gerencie Agendamentos</h3>
              <p className="text-muted-foreground text-sm">
                Controle completo sobre a agenda do seu salão com visualização por dia, semana ou mês.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-white/50 backdrop-blur-sm border-muted hover:border-beauty-300 transition-all duration-300">
            <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
              <div className="w-12 h-12 rounded-full beauty-gradient flex items-center justify-center text-white text-xl">
                2
              </div>
              <h3 className="text-lg font-semibold">Cadastre Serviços</h3>
              <p className="text-muted-foreground text-sm">
                Organize seus serviços por categoria, com preços e tempo de duração para facilitar o agendamento.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-white/50 backdrop-blur-sm border-muted hover:border-beauty-300 transition-all duration-300">
            <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
              <div className="w-12 h-12 rounded-full beauty-gradient flex items-center justify-center text-white text-xl">
                3
              </div>
              <h3 className="text-lg font-semibold">Gerencie Clientes</h3>
              <p className="text-muted-foreground text-sm">
                Cadastre seus clientes e mantenha um histórico completo de serviços e preferências.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-8">
          <Link to="/login">
            <Button className="beauty-gradient text-lg px-8 py-6">
              Acessar o Sistema
            </Button>
          </Link>
          <Link to="/cadastro">
            <Button variant="outline" className="text-lg px-8 py-6">
              Criar uma Conta
            </Button>
          </Link>
        </div>

        <footer className="text-center text-sm text-muted-foreground mt-12">
          <p>© 2025 Vizzua. Todos os direitos reservados.</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
