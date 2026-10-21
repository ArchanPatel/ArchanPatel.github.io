import React, { useCallback, useMemo } from 'react';
import { createPortal } from 'react-dom';
import { Menu, X } from 'lucide-react';

export const Navigation: React.FC<NavigationProps> = ({ activeSection, onNavigate, isMobile, isMenuOpen, onToggleMenu }) => {
  const navItems = useMemo(() => [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' }
  ], []);

  const handleClick = useCallback((id: string) => {
    onNavigate(id);
    if (isMobile && onToggleMenu) 
      onToggleMenu();
  }, [onNavigate, isMobile, onToggleMenu]);

  if (isMobile) {
    return (
      <>
        <button
          onClick={onToggleMenu}
          className="relative z-[60] p-2 text-[#242724] transition-colors hover:text-[#b45d38]"
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        {isMenuOpen && createPortal(
          <div className="fixed inset-0 bg-[#f7f6f2] text-[#242724] z-[55] pt-20">
            <nav aria-label="Main navigation" className="flex flex-col items-center gap-5 p-8">
              {navItems.map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => handleClick(id)}
                  className={`text-2xl font-serif transition-colors ${
                    activeSection === id ? 'text-[#b45d38]' : 'text-[#656962] hover:text-[#242724]'
                  }`}
                >
                  {label}
                </button>
              ))}
            </nav>
          </div>,
          document.body
        )}
      </>
    );
  }

  return (
    <nav aria-label="Main navigation" className="hidden md:flex items-center gap-7">
      {navItems.map(({ id, label }) => (
        <button
          key={id}
          onClick={() => onNavigate(id)}
          className={`text-sm transition-colors ${
            activeSection === id ? 'text-[#b45d38]' : 'text-[#656962] hover:text-[#242724]'
          }`}
        >
          {label}
        </button>
      ))}
    </nav>
  );
};

interface NavigationProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  isMobile: boolean;
  isMenuOpen?: boolean;
  onToggleMenu?: () => void;
}