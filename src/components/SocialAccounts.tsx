import React from 'react';
import { accounts } from '@/data/accounts';

interface SocialAccountsProps {
  className?: string;
  iconColor?: string; // Accepts any valid CSS color value
}

const SocialAccounts: React.FC<SocialAccountsProps> = ({ className = '', iconColor = 'currentColor' }) => {
  return (
    <div className={`social-accounts flex space-x-4 ${className}`}>
      {accounts.map((account) => (
        <a
          key={account.id}
          href={account.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-portfolio-blue transition-colors"

        >
          <account.icon size={20} color={iconColor} />
        </a>
      ))}
    </div>
  );
};

export default SocialAccounts;