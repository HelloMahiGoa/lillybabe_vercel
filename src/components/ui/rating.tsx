import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';

interface RatingProps {
  value: number;
  maxValue?: number;
  size?: 'sm' | 'md' | 'lg';
  showValue?: boolean;
  className?: string;
}

export const Rating = ({ 
  value, 
  maxValue = 5, 
  size = 'md', 
  showValue = false, 
  className 
}: RatingProps) => {
  const sizeClasses = {
    sm: 'h-3 w-3',
    md: 'h-4 w-4',
    lg: 'h-5 w-5'
  };

  return (
    <div className={cn("flex items-center gap-1", className)}>
      {Array.from({ length: maxValue }, (_, i) => (
        <Star
          key={i}
          className={cn(
            sizeClasses[size],
            i < value ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
          )}
        />
      ))}
      {showValue && (
        <span className="text-sm text-gray-600 ml-1">({value})</span>
      )}
    </div>
  );
};
