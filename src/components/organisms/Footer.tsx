import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t border-neutral-100 dark:border-neutral-900 bg-white dark:bg-neutral-950 flex flex-col items-center justify-center gap-12 py-24 px-8 max-w-7xl mx-auto mt-auto">
      <div className="text-lg font-black tracking-tighter text-neutral-900 dark:text-neutral-50 hover:tracking-wide transition-all duration-500 cursor-default">
        Vibe Code.
      </div>
      <div className="flex gap-8 font-['Inter'] text-[10px] tracking-[0.2em] uppercase font-semibold text-neutral-400 dark:text-neutral-600">
        <a className="hover:text-neutral-900 dark:hover:text-neutral-50 transition-all opacity-80 hover:opacity-100 duration-500" href="#">Dokumentasi</a>
        <a className="hover:text-neutral-900 dark:hover:text-neutral-50 transition-all opacity-80 hover:opacity-100 duration-500" href="#">Privasi</a>
        <a className="hover:text-neutral-900 dark:hover:text-neutral-50 transition-all opacity-80 hover:opacity-100 duration-500" href="#">GitHub</a>
        <a className="hover:text-neutral-900 dark:hover:text-neutral-50 transition-all opacity-80 hover:opacity-100 duration-500" href="#">Twitter</a>
      </div>
      <div className="font-['Inter'] text-[10px] tracking-[0.2em] uppercase font-semibold text-neutral-400 dark:text-neutral-600 opacity-50">
        © 2026 Vibe Coding By Razki. Santuy Aja.
      </div>
    </footer>
  );
};
