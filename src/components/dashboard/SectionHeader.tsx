
import React from 'react';
import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  title: string;
  description?: string;
  icon?: React.ReactNode;
  className?: string;
  action?: React.ReactNode;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  description,
  icon,
  className,
  action,
}) => {
  return (
    <div className={cn("mb-8", className)}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          {icon && <div className="text-portfolio-blue">{icon}</div>}
          <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
        </div>
        {action && <div>{action}</div>}
      </div>
      {description && (
        <p className="mt-2 text-gray-600 max-w-3xl">{description}</p>
      )}
    </div>
  );
};

export default SectionHeader;
