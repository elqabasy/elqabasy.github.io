import React from 'react';
// import appIcon from '/app-icon-64.png';
import appIcon from '@/assets/images/app-icon.svg'; // Adjust the path as necessary

interface AppIconProps extends React.HTMLProps<HTMLDivElement> {
  size?: number;
  color?: string;
  backgroundColor?: string;
  [key: string]: any;
  borderRadius?: string | number;
}

const AppIcon: React.FC<AppIconProps> = ({
  size = 32,
  color = '#1976d2',
  backgroundColor = 'transparent',
  borderRadius,
  ...props
}) => (
  <div
    {...props}
    style={{
      width: size,
      height: size,
      borderRadius: borderRadius || '5%',
      backgroundColor: backgroundColor,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <img src={appIcon} width={size} height={size} />
  </div>
);

export default AppIcon;