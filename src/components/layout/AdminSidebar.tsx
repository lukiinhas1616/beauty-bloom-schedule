
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Calendar, 
  Users, 
  Scissors, 
  Image, 
  FileText, 
  MessageSquare, 
  Settings, 
  Home,
  LogOut 
} from 'lucide-react';
import { 
  Sidebar, 
  SidebarContent, 
  SidebarFooter, 
  SidebarGroup, 
  SidebarGroupContent, 
  SidebarGroupLabel, 
  SidebarHeader, 
  SidebarMenu, 
  SidebarMenuButton, 
  SidebarMenuItem, 
  SidebarTrigger 
} from '@/components/ui/sidebar';
import { cn } from '@/lib/utils';

export function AdminSidebar() {
  const location = useLocation();

  const mainMenuItems = [
    { title: 'Dashboard', icon: Home, path: '/dashboard' },
    { title: 'Agendamentos', icon: Calendar, path: '/agendamentos' },
    { title: 'Clientes', icon: Users, path: '/clientes' },
    { title: 'Serviços', icon: Scissors, path: '/servicos' },
    { title: 'Profissionais', icon: Users, path: '/profissionais' },
  ];

  const secondaryMenuItems = [
    { title: 'Portfólio', icon: Image, path: '/portfolio' },
    { title: 'Sobre', icon: FileText, path: '/sobre' },
    { title: 'Contato', icon: MessageSquare, path: '/contato' },
    { title: 'Configurações', icon: Settings, path: '/configuracoes' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <Sidebar>
      <SidebarHeader className="py-6">
        <div className="flex items-center px-4">
          <div className="w-8 h-8 rounded-full beauty-gradient flex items-center justify-center text-white font-bold text-lg">
            B
          </div>
          <h1 className="ml-2 text-xl font-semibold beauty-gradient-text">BeautyBloom</h1>
        </div>
        <SidebarTrigger className="absolute right-2 top-6 lg:hidden" />
      </SidebarHeader>
      
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Principal</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {mainMenuItems.map((item) => (
                <SidebarMenuItem key={item.path}>
                  <SidebarMenuButton asChild>
                    <Link 
                      to={item.path}
                      className={cn(
                        "flex items-center gap-3 px-3 py-2 rounded-md transition-colors",
                        isActive(item.path) 
                          ? "bg-primary text-primary-foreground" 
                          : "hover:bg-accent hover:text-accent-foreground"
                      )}
                    >
                      <item.icon size={18} />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        
        <SidebarGroup>
          <SidebarGroupLabel>Conteúdo</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {secondaryMenuItems.map((item) => (
                <SidebarMenuItem key={item.path}>
                  <SidebarMenuButton asChild>
                    <Link 
                      to={item.path}
                      className={cn(
                        "flex items-center gap-3 px-3 py-2 rounded-md transition-colors",
                        isActive(item.path) 
                          ? "bg-primary text-primary-foreground" 
                          : "hover:bg-accent hover:text-accent-foreground"
                      )}
                    >
                      <item.icon size={18} />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      
      <SidebarFooter>
        <div className="px-3 py-2">
          <Link 
            to="/login" 
            className="flex items-center gap-3 px-3 py-2 rounded-md text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            <LogOut size={18} />
            <span>Sair</span>
          </Link>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
