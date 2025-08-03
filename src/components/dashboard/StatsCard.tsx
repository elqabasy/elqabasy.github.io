
import React, { ReactNode } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface StatsCardProps {
  title: string;
  value: string | number;
  icon?: ReactNode;
  className?: string;
  color?: "default" | "blue" | "green" | "yellow" | "purple" | "red";
  subtitle?: string;
  footer?: ReactNode;
  isLoading?: boolean;
}

const StatsCard: React.FC<StatsCardProps> = ({
  title,
  value,
  icon,
  className,
  color = "default",
  subtitle,
  footer,
  isLoading = false,
}) => {
  const colorClasses = {
    default: "bg-white",
    blue: "bg-blue-50 border-blue-200",
    green: "bg-green-50 border-green-200",
    yellow: "bg-yellow-50 border-yellow-200",
    purple: "bg-purple-50 border-purple-200",
    red: "bg-red-50 border-red-200",
  };

  return (
    <Card className={cn("overflow-hidden border p-5", colorClasses[color], className)}>
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-sm font-medium text-gray-500">{title}</h3>
          <p className="mt-1 text-2xl font-semibold">
            {isLoading ? (
              <div className="h-8 w-24 bg-gray-200 animate-pulse rounded"></div>
            ) : (
              value
            )}
          </p>
          {subtitle && <p className="text-xs text-gray-500 mt-1">{subtitle}</p>}
        </div>
        {icon && <div className="text-gray-400">{icon}</div>}
      </div>
      {footer && <div className="mt-4 pt-3 border-t border-gray-100">{footer}</div>}
    </Card>
  );
};

export default StatsCard;
