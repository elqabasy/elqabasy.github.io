
import { CopyrightIcon } from 'lucide-react';
import React from 'react';

const Copyright: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <div className="flex items-center justify-center text-gray-500 text-sm gap-2">
      <CopyrightIcon size={16} /> {currentYear} Mahros AL-Qabasy. All rights reserved.
    </div>
  );
};

export default Copyright;
