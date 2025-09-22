import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useTranslation } from 'react-i18next';

interface MenuCardProps {
  title: string;
  description: string;
  price: string;
  category: string;
  isAvailable?: boolean;
  image?: string;
}

export default function MenuCard({ 
  title, 
  description, 
  price, 
  category, 
  isAvailable = true,
  image 
}: MenuCardProps) {
  const { t } = useTranslation();
  return (
    <Card className={`hover-elevate transition-all duration-300 ${!isAvailable ? 'opacity-60' : ''}`}>
      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-3">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <h3 className="text-lg font-serif font-semibold text-foreground" data-testid={`text-dish-${(title ?? '').toLowerCase().replace(/\s+/g, '-')}`}>
                {title || 'Untitled Dish'}
              </h3>
              <Badge variant="secondary" className="text-xs" data-testid={`badge-category-${(category ?? '').toLowerCase()}`}>
                {category || 'Unknown'}
              </Badge>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-3" data-testid={`text-description-${(title ?? '').toLowerCase().replace(/\s+/g, '-')}`}>
              {description || 'No description available'}
            </p>
            {!isAvailable && (
              <Badge variant="destructive" className="text-xs">
                {t('menu.unavailable')}
              </Badge>
            )}
          </div>
          
          {image && (
            <div className="ml-4 flex-shrink-0">
              <img 
                src={image} 
                alt={title}
                className="w-20 h-20 object-cover rounded-md"
              />
            </div>
          )}
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-2xl font-serif font-bold text-primary" data-testid={`text-price-${(title ?? '').toLowerCase().replace(/\s+/g, '-')}`}>
            {price}
          </span>
          {isAvailable && (
            <Badge className="bg-accent text-accent-foreground">
              {t('menu.available')}
            </Badge>
          )}
        </div>
      </CardContent>
    </Card>
  );
}