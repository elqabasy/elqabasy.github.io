import React from 'react';
import appLogoLight from '@/assets/images/app-logo-light.svg'; // Adjust the path as necessary
import appLogoDark from '@/assets/images/app-logo-dark.svg'; // Adjust the path as necessary
import { Link } from 'react-router-dom';

interface AppLogoProps extends React.HTMLAttributes<HTMLDivElement> { }

const AppLogo: React.FC<AppLogoProps> = ({ className = '', color = 'light', ...rest }) => (
  <Link to="/">
    <img
      src={color === 'light' ? appLogoLight : appLogoDark}
      alt="App Logo"
      className={`${className}`}

      width={155}
      {...rest}
    />
  </Link>
);

{/* <div
  className={`flex flex-row items-center justify-center gap-0 w-max pt-0 pb-0 ${className}`}
  {...rest}
>
  <AppIcon size={32} className="" borderRadius="5px" />
  <h2 className={`text-3xl font-bold tracking-tight text-${color}`}></h2>
</div> */}
export default AppLogo;