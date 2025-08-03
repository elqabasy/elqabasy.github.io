
import { Link } from 'react-router-dom';
import { Mail, LocateIcon, Locate } from 'lucide-react';
import Copyright from '@/components/Copyright';
import { accounts } from '@/data/accounts';
import AppLogo from '@/components/logo/AppLogo';
import SocialAccounts from '@/components/SocialAccounts';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div>
            <AppLogo className='mb-4' color='dark' />
            <p className="text-gray-300 mb-4">
              Frontend Developer, Blue Team Learner, and Contest Problem Solver.
            </p>
            <SocialAccounts />
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About</Link></li>
              <li><Link to="/projects" className="text-gray-300 hover:text-white transition-colors">Projects</Link></li>
              <li><Link to="/write-ups" className="text-gray-300 hover:text-white transition-colors">Write-ups</Link></li>
              <li><Link to="/achievements" className="text-gray-300 hover:text-white transition-colors">Achievements</Link></li>
              <li><Link to="/dashboard" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2">
                Dashboard
              </Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link to="/blog" className="text-gray-300 hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/tutorials" className="text-gray-300 hover:text-white transition-colors">Tutorials</Link></li>
              <li><Link to="/code-snippets" className="text-gray-300 hover:text-white transition-colors">Code Snippets</Link></li>
              <li><Link to="/downloads" className="text-gray-300 hover:text-white transition-colors">Downloads</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-300">
                <Mail size={16} className="mr-2" />
                <a href="mailto:hello@mahrosalqabasy.com" className="hover:text-white transition-colors">{accounts.find(account => account.platform === "Gmail")?.username}</a>
              </li>
              <li className="flex items-center text-gray-300">
                <LocateIcon size={16} className="mr-2" />
                <a href='https://www.google.com/maps/place/Kafrelsheikh,+Egypt' className="hover:text-white transition-colors">
                  Kafrelsheikh, Egypt
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center justify">
          <Copyright />
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="/privacy-policy" className="text-gray-400 hover:text-white text-sm">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="text-gray-400 hover:text-white text-sm">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
