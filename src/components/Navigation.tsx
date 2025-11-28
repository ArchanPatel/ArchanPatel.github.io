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
          className="p-2 text-gray-300 hover:text-white transition-colors relative z-[60]"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        {isMenuOpen && createPortal(
          <div className="fixed inset-0 bg-gray-900 z-[55] pt-20">
            <nav className="flex flex-col items-center space-y-6 p-8">
              {navItems.map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => handleClick(id)}
                  className={`text-2xl transition-colors ${
                    activeSection === id ? 'text-blue-400' : 'text-gray-300 hover:text-white'
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
    <nav className="hidden md:flex space-x-8">
      {navItems.map(({ id, label }) => (
        <button
          key={id}
          onClick={() => onNavigate(id)}
          className={`transition-colors ${
            activeSection === id ? 'text-blue-400' : 'text-gray-300 hover:text-white'
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