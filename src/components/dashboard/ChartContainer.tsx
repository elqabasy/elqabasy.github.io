
import React, { ReactNode } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { Skeleton } from '@/components/ui/skeleton';

interface ChartContainerProps {
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
  isLoading?: boolean;
  height?: string | number;
  footer?: ReactNode;
  action?: ReactNode;
}

const ChartContainer: React.FC<ChartContainerProps> = ({
  title,
  description,
  children,
  className,
  isLoading = false,
  height = 'auto',
  footer,
  action,
}) => {
  return (
    <Card className={cn("overflow-hidden", className)}>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <div>
          <CardTitle className="text-lg font-medium">{title}</CardTitle>
          {description && <p className="text-sm text-gray-500 mt-1">{description}</p>}
        </div>
        {action && <div>{action}</div>}
      </CardHeader>
      <CardContent className="p-0">
        <div style={{ height }} className="w-full">
          {isLoading ? <Skeleton className="w-full h-full min-h-[200px]" /> : children}
        </div>
      </CardContent>
      {footer && (
        <div className="px-6 py-3 border-t border-gray-100 bg-gray-50 text-sm text-gray-600">{footer}</div>
      )}
    </Card>
  );
};

export default ChartContainer;
