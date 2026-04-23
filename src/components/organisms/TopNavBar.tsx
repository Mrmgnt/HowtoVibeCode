import React from 'react';
import { NavLinks } from '../molecules/NavLinks';
import { Button } from '../atoms/Button';
import { Icon } from '../atoms/Icon';

export const TopNavBar: React.FC = () => {
  return (
    <>
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[92%] max-w-6xl rounded-full border border-neutral-200/50 dark:border-neutral-800/50 shadow-[0_20px_40px_rgba(0,0,0,0.04)] bg-white/70 dark:bg-neutral-950/70 backdrop-blur-2xl items-center justify-between px-8 py-3 z-[100] hidden md:flex">
        <div className="text-xl font-bold tracking-tighter text-neutral-900 dark:text-neutral-50 hover:tracking-wide hover:scale-105 transition-all duration-500 cursor-default">
          Vibe Code.
        </div>
        <NavLinks />
        <Button variant="primary" onClick={() => {
          const element = document.getElementById('fase-1');
          if (element) {
            const headerOffset = 100;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            window.scrollTo({ top: offsetPosition, behavior: "smooth" });
          }
        }}>Mulai Vibe</Button>
      </nav>

      <nav className="md:hidden flex items-center justify-between px-6 py-4 border-b border-surface-variant bg-white/70 backdrop-blur-md sticky top-0 z-[100]">
        <div className="text-xl font-bold tracking-tighter text-neutral-900 hover:tracking-wide transition-all duration-500">
          Vibe Code.
        </div>
        <button className="text-on-surface p-2">
          <Icon name="menu" />
        </button>
      </nav>
    </>
  );
};
