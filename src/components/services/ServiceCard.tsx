
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Clock, Pencil, Trash2 } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  id: string;
  name: string;
  description: string;
  duration: string;
  price: number;
  category?: string;
  image?: string;
  onEdit?: (id: string) => void;
  onDelete?: (id: string) => void;
  className?: string;
}

export function ServiceCard({
  id,
  name,
  description,
  duration,
  price,
  category,
  image,
  onEdit,
  onDelete,
  className,
}: ServiceCardProps) {
  return (
    <Card className={cn("overflow-hidden", className)}>
      {image && (
        <div className="aspect-video w-full overflow-hidden">
          <img 
            src={image} 
            alt={name} 
            className="object-cover w-full h-full transition-transform hover:scale-105 duration-300" 
          />
        </div>
      )}
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-lg">{name}</CardTitle>
            {category && (
              <Badge variant="outline" className="mt-1">
                {category}
              </Badge>
            )}
          </div>
          <div className="text-lg font-semibold beauty-gradient-text">
            R$ {price.toFixed(2)}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="line-clamp-3 mb-2">
          {description}
        </CardDescription>
        <div className="flex items-center text-xs text-muted-foreground">
          <Clock size={14} className="mr-1" />
          {duration}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between pt-2">
        <Button variant="outline" size="sm" onClick={() => onEdit?.(id)}>
          <Pencil size={16} className="mr-1" />
          Editar
        </Button>
        <Button variant="outline" size="sm" className="text-destructive" onClick={() => onDelete?.(id)}>
          <Trash2 size={16} className="mr-1" />
          Excluir
        </Button>
      </CardFooter>
    </Card>
  );
}
