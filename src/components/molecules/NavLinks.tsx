import React, { useState, useEffect } from 'react';

export const NavLinks: React.FC = () => {
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['mulai', 'konsep', 'fase-1', 'fase-2', 'fase-3', 'fase-4', 'fase-5'];
      let currentId = '';
      
      const scrollPosition = window.scrollY + 100;

      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const offsetTop = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            currentId = id;
          }
        }
      }
      setActiveId(currentId);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // init on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const getLinkClass = (id: string) => {
    const isActive = activeId === id;
    const baseClass = "transition-all duration-300 active:scale-[0.98] pb-1 border-b-2 font-semibold ";
    if (isActive) {
      return baseClass + "text-black dark:text-white border-black dark:border-white";
    }
    return baseClass + "text-neutral-400 dark:text-neutral-500 border-transparent hover:text-black dark:hover:text-white";
  };

  return (
    <div className="flex flex-col md:flex-row items-center gap-6 lg:gap-8 font-['Inter'] tracking-tight text-sm">
      <a className={getLinkClass('mulai')} href="#mulai" onClick={(e) => handleClick(e, 'mulai')}>Mulai</a>
      <a className={getLinkClass('konsep')} href="#konsep" onClick={(e) => handleClick(e, 'konsep')}>Konsep</a>
      <a className={getLinkClass('fase-1')} href="#fase-1" onClick={(e) => handleClick(e, 'fase-1')}>Planning</a>
      <a className={getLinkClass('fase-2')} href="#fase-2" onClick={(e) => handleClick(e, 'fase-2')}>UI/UX</a>
      <a className={getLinkClass('fase-3')} href="#fase-3" onClick={(e) => handleClick(e, 'fase-3')}>Frontend</a>
      <a className={getLinkClass('fase-4')} href="#fase-4" onClick={(e) => handleClick(e, 'fase-4')}>Backend</a>
      <a className={getLinkClass('fase-5')} href="#fase-5" onClick={(e) => handleClick(e, 'fase-5')}>Deployment</a>
    </div>
  );
};
