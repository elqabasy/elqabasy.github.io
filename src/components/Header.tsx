
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, BarChart3 } from 'lucide-react';
import { Button } from "@/components/ui/button";
import AppLogo from '@/components/logo/AppLogo';
import AppIcon from './logo/AppIcon';
import { useIsMobile } from '@/hooks/use-mobile';
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const linkClassName = "text-gray-700 hover:text-portfolio-blue transition-colors font-semibold";
  const linkClassNameMobile = "px-4 py-2 text-gray-700 hover:text-portfolio-blue transition-colors";
  return (
    // <header className="sticky top-0 z-50 p-3">
    <header className="sticky top-0 z-50 backdrop-blur-md pt-3 bg-transparent sm:px-2">
      <div className="container flex items-center justify-between h-16 md:h-15 w-auto border border-1 border-white-200 bg-white/1000 backdrop-blur-sm rounded-3xl shadow-lg backdrop-blur-sm">
        {!isMobile && (<AppLogo />)}
        {isMobile && (<AppIcon />)}

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/about" className={linkClassName}>
            About
          </Link>
          <Link to="/projects" className={linkClassName}>
            Projects
          </Link>
          <Link to="/write-ups" className={linkClassName}>
            Write-ups
          </Link>
          <Link to="/achievements" className={linkClassName}>
            Achievements
          </Link>
          <Link to="/education" className={linkClassName}>
            Education
          </Link>
          <Link to="/dashboard" className={`text-gray-700 hover:text-portfolio-blue font-semibold transition-colors flex items-center gap-2 ${isMobile ? 'px-4 py-2' : ''}`}>
            Dashboard
          </Link>
          <Button asChild className="bg-portfolio-blue hover:bg-blue-700">
            <Link to="/downloads">Download CV</Link>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-gray-700"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/80 backdrop-blur-md border-b border-gray-100 rounded-b-2xl">
          <div className="container py-4 flex flex-col space-y-3">
            <Link
              to="/about"
              className="px-4 py-2 text-gray-700 hover:text-portfolio-blue transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/projects"
              className="px-4 py-2 text-gray-700 hover:text-portfolio-blue transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </Link>
            <Link
              to="/write-ups"
              className="px-4 py-2 text-gray-700 hover:text-portfolio-blue transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Write-ups
            </Link>
            <Link
              to="/achievements"
              className="px-4 py-2 text-gray-700 hover:text-portfolio-blue transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Achievements
            </Link>
            <Link
              to="/education"
              className="px-4 py-2 text-gray-700 hover:text-portfolio-blue transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Education
            </Link>
            <Link
              to="/dashboard"
              className="px-4 py-2 text-gray-700 hover:text-portfolio-blue transition-colors flex items-center gap-2"
              onClick={() => setIsMenuOpen(false)}
            >

              Dashboard
            </Link>
            <Button asChild className="bg-portfolio-blue hover:bg-blue-700 mt-2">
              <Link to="/downloads" onClick={() => setIsMenuOpen(false)}>Download CV</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
