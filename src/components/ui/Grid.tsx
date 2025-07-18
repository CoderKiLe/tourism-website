import { cn } from '@/lib/utils';
import { GridProps } from '@/types';

const Grid = ({ 
  children, 
  cols = { default: 1, md: 2, lg: 3 }, 
  gap = 6, 
  className 
}: GridProps) => {
  const getGridCols = () => {
    const classes = [];
    
    if (cols.default) classes.push(`grid-cols-${cols.default}`);
    if (cols.sm) classes.push(`sm:grid-cols-${cols.sm}`);
    if (cols.md) classes.push(`md:grid-cols-${cols.md}`);
    if (cols.lg) classes.push(`lg:grid-cols-${cols.lg}`);
    if (cols.xl) classes.push(`xl:grid-cols-${cols.xl}`);
    
    return classes.join(' ');
  };

  return (
    <div className={cn(
      'grid',
      getGridCols(),
      `gap-${gap}`,
      className
    )}>
      {children}
    </div>
  );
};

export default Grid;