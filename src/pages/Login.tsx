
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from '@/hooks/use-toast';

const Login = () => {
  const navigate = useNavigate();
  const form = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = (data: any) => {
    console.log('Login data:', data);
    // Demo authentication - accept any credentials
    toast({
      title: "Login bem-sucedido!",
      description: "Bem-vindo(a) de volta ao BeautyBloom.",
    });
    navigate('/dashboard');
  };
  
  const handleDevBypass = () => {
    toast({
      title: "Acesso de Desenvolvedor",
      description: "Entrando no modo de desenvolvedor",
    });
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <div className="flex justify-center">
            <div className="w-12 h-12 rounded-full beauty-gradient flex items-center justify-center text-white font-bold text-xl">
              B
            </div>
          </div>
          <h1 className="mt-4 text-3xl font-bold beauty-gradient-text">BeautyBloom</h1>
          <p className="mt-2 text-muted-foreground">
            Acesse sua conta para gerenciar seu salão de beleza
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Bem-vindo(a) de volta</CardTitle>
            <CardDescription>
              Entre com suas credenciais para acessar o painel
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input 
                          type="email" 
                          placeholder="exemplo@email.com" 
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Senha</FormLabel>
                      <FormControl>
                        <Input 
                          type="password" 
                          placeholder="••••••••" 
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full beauty-gradient">
                  Entrar
                </Button>
              </form>
            </Form>
            
            <div className="mt-4 text-center">
              <Button 
                variant="ghost" 
                className="text-xs text-muted-foreground hover:text-beauty-600"
                onClick={handleDevBypass}
              >
                Dev Access
              </Button>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col space-y-2">
            <div className="text-center text-sm">
              <Link to="/esqueci-senha" className="text-beauty-600 hover:underline">
                Esqueci minha senha
              </Link>
            </div>
            <div className="text-center text-sm text-muted-foreground">
              Não tem uma conta?{' '}
              <Link to="/cadastro" className="text-beauty-600 hover:underline">
                Criar conta
              </Link>
            </div>
          </CardFooter>
        </Card>
        
        <div className="text-center text-xs text-muted-foreground">
          <p>© 2025 BeautyBloom. Todos os direitos reservados.</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
