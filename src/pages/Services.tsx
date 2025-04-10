
import React, { useState } from 'react';
import { PlusCircle, Search, SlidersHorizontal } from 'lucide-react';
import { MainLayout } from '@/components/layout/MainLayout';
import { ServiceCard } from '@/components/services/ServiceCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

// Dados fictícios de serviços
const servicesData = [
  {
    id: '1',
    name: 'Corte de Cabelo',
    description: 'Corte personalizado incluindo lavagem e finalização.',
    duration: '45min',
    price: 85.00,
    category: 'Cabelo',
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80',
  },
  {
    id: '2',
    name: 'Coloração',
    description: 'Coloração completa com produtos de alta qualidade.',
    duration: '2h',
    price: 150.00,
    category: 'Cabelo',
    image: 'https://images.unsplash.com/photo-1565647952915-be99f35d783e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80',
  },
  {
    id: '3',
    name: 'Manicure',
    description: 'Tratamento completo para unhas incluindo esfoliação e hidratação.',
    duration: '45min',
    price: 60.00,
    category: 'Unhas',
    image: 'https://images.unsplash.com/photo-1604654894608-37d3ec1dfeeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80',
  },
  {
    id: '4',
    name: 'Pedicure',
    description: 'Tratamento completo para os pés incluindo esfoliação e hidratação.',
    duration: '50min',
    price: 75.00,
    category: 'Unhas',
    image: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80',
  },
  {
    id: '5',
    name: 'Limpeza de Pele',
    description: 'Limpeza profunda com produtos específicos para seu tipo de pele.',
    duration: '1h',
    price: 120.00,
    category: 'Estética',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80',
  },
  {
    id: '6',
    name: 'Massagem Relaxante',
    description: 'Massagem com óleos essenciais para aliviar tensões e estresse.',
    duration: '1h',
    price: 150.00,
    category: 'Estética',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80',
  },
];

const Services = () => {
  const [services] = useState(servicesData);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentCategory, setCurrentCategory] = useState('all');

  // Filtra os serviços com base na pesquisa e categoria
  const filteredServices = services.filter((service) => {
    const matchesSearch = service.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          service.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = currentCategory === 'all' || service.category === currentCategory;
    
    return matchesSearch && matchesCategory;
  });

  // Categorias únicas para as abas
  const categories = ['all', ...new Set(services.map(service => service.category))];

  // Manipuladores de eventos
  const handleEdit = (id: string) => {
    console.log(`Editar serviço ${id}`);
    // Implementar lógica de edição
  };

  const handleDelete = (id: string) => {
    console.log(`Excluir serviço ${id}`);
    // Implementar lógica de exclusão
  };

  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Serviços</h1>
            <p className="text-muted-foreground">
              Gerencie os serviços oferecidos pelo seu salão.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Buscar serviços..."
                className="pl-8 w-full md:w-[200px] lg:w-[300px]"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button variant="outline">
              <SlidersHorizontal className="mr-2 h-4 w-4" />
              Filtrar
            </Button>
            <Dialog>
              <DialogTrigger asChild>
                <Button className="beauty-gradient">
                  <PlusCircle className="mr-2 h-4 w-4" />
                  Novo Serviço
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Adicionar Serviço</DialogTitle>
                  <DialogDescription>
                    Crie um novo serviço para seu salão.
                  </DialogDescription>
                </DialogHeader>
                {/* Formulário de serviço seria implementado aqui */}
                <div className="py-4 text-center text-muted-foreground">
                  Formulário para adicionar novo serviço
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        <Tabs defaultValue="all" onValueChange={setCurrentCategory}>
          <TabsList className="mb-4">
            {categories.map((category) => (
              <TabsTrigger key={category} value={category}>
                {category === 'all' ? 'Todos' : category}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value={currentCategory} className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredServices.map((service) => (
                <ServiceCard
                  key={service.id}
                  {...service}
                  onEdit={handleEdit}
                  onDelete={handleDelete}
                />
              ))}

              {filteredServices.length === 0 && (
                <div className="col-span-full flex items-center justify-center py-10 border-2 border-dashed rounded-md">
                  <div className="text-center">
                    <h3 className="text-lg font-semibold">Nenhum serviço encontrado</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Tente ajustar seus filtros ou criar um novo serviço.
                    </p>
                    <Button className="mt-4">
                      <PlusCircle className="mr-2 h-4 w-4" />
                      Adicionar Serviço
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
};

export default Services;
