
import React, { useState } from 'react';
import { useMobileMenu } from '../hooks/useMobileMenu';
import { Navigation } from './Navigation';

export const Header: React.FC<HeaderProps> = ({ activeSection, onNavigate }) => {
  const { isOpen, toggle } = useMobileMenu();
  const [isScrolled, setIsScrolled] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-[#f7f6f2]/95 backdrop-blur-sm border-b border-[#242724]/10' : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <button
          onClick={() => onNavigate('home')}
          className="text-lg font-semibold tracking-tight text-[#242724] transition-colors hover:text-[#b45d38]"
        >
          Archan Patel
        </button>
        <div className="md:hidden">
          <Navigation
            activeSection={activeSection}
            onNavigate={onNavigate}
            isMobile={true}
            isMenuOpen={isOpen}
            onToggleMenu={toggle}
          />
        </div>
        <div className="hidden md:block">
          <Navigation
            activeSection={activeSection}
            onNavigate={onNavigate}
            isMobile={false}
          />
        </div>
      </div>
    </header>
  );
};

interface HeaderProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}
