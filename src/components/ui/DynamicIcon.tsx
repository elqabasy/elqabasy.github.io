
// src/components/ui/DynamicIcon.tsx
import * as Icons from "lucide-react";
import { type LucideIcon } from "lucide-react";
import React, { ReactNode } from "react";

type IconName = keyof typeof Icons;

interface DynamicIconProps {
  name: IconName;
  fallback?: ReactNode;
  className?: string;
  size?: number;
}

export const DynamicIcon: React.FC<DynamicIconProps> = ({
  name,
  fallback = <Icons.HelpCircle />,
  className = "",
  size = 24,
}) => {
  const IconComponent = Icons[name];

  if (typeof IconComponent === "function" && "displayName" in IconComponent) {
    return <IconComponent className={className} size={size} iconNode={[]} />;
  }

  return <>{fallback}</>;
};
