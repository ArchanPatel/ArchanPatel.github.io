import React, { useState, useEffect } from 'react';

export const useScrollSpy = (sectionIds: string[]) => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      if (windowHeight + window.scrollY >= documentHeight - 10) {
        setActiveSection(sectionIds[sectionIds.length - 1]);
        return;
      }
      
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i]);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          
          if (scrollPosition >= sectionTop) {
            if (i >= sectionIds.length - 2) {
              if (scrollPosition < sectionTop + sectionHeight) {
                setActiveSection(sectionIds[i]);
                return;
              }
            } else {
              setActiveSection(sectionIds[i]);
              return;
            }
          }
        }
      }
      
      setActiveSection('home');
    };

    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionIds]);

  return activeSection;
};