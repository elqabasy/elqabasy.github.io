
import { Platform } from '@/types/education';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronRight } from 'lucide-react';
import { DynamicIcon } from '@/components/ui/DynamicIcon';
import React from 'react';

interface PlatformCardProps {
  platform: Platform;
}

const PlatformCard = ({ platform }: PlatformCardProps) => {
  // Safely render the icon or a fallback
  const renderIcon = () => {
    if (!platform.icon) {
      return <span className="text-2xl">🎓</span>;
    }

    return (
      <DynamicIcon
        name={platform.icon as any}
        className="h-6 w-6"
        size={24}
        fallback={React.createElement("span", { className: "text-2xl" }, "🎓")}
      />
    );
  };

  return (
    <Card className="overflow-hidden hover:shadow-md transition-all">
      <CardContent className="p-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">

            {platform.icon && (
              <div className="rounded-full p-2" style={{ backgroundColor: `${platform.color}20` }}>
                {renderIcon()}
              </div>
            )}
            <div>
              <h3 className="font-semibold text-lg">{platform.name}</h3>
              <div className="text-sm text-gray-600">
                <span className="font-semibold text-portfolio-blue">{platform.itemCount}</span> {platform.itemType}
              </div>
            </div>
          </div>
          <ChevronRight className="h-5 w-5 text-gray-400" />
        </div>
      </CardContent>
    </Card>
  );
};

export default PlatformCard;
