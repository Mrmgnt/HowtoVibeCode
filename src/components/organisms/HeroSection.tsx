import React from 'react';
import { Button } from '../atoms/Button';
import { Icon } from '../atoms/Icon';

export const HeroSection: React.FC = () => {
  return (
    <section id="mulai" className="min-h-[819px] flex flex-col items-center justify-center text-center w-full pt-48 pb-stack-lg relative">
      <div className="absolute inset-0 z-[-1] bg-[linear-gradient(45deg,rgba(250,250,250,0.8)_0%,rgba(240,240,240,0.4)_50%,rgba(250,250,250,0.8)_100%)] animate-hero-gradient opacity-70 rounded-3xl"></div>
      <h1 className="font-h1 text-[3.5rem] md:text-h1 text-primary tracking-tighter mb-8 max-w-4xl hover:tracking-normal hover:scale-[1.01] transition-all duration-700 cursor-default">
        How To Vibe Code By Razki
      </h1>
      <p className="font-body-lg text-body-lg text-secondary max-w-2xl mb-12 font-light">
        Website tutorial vibe code. Web ini di-code dengan vibes chill parah, dengan metode yang gampang banget—bahkan <span className="font-semibold text-primary">Prabowo</span> juga bisa lakuin ini!
      </p>
      <Button variant="outline" className="group" onClick={() => {
        const element = document.getElementById('fase-1');
        if (element) {
          const headerOffset = 100;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          window.scrollTo({ top: offsetPosition, behavior: "smooth" });
        }
      }}>
        <Icon name="play_circle" className="font-light animate-[pulse_3s_ease-in-out_infinite] group-hover:animate-none" style={{ fontVariationSettings: "'wght' 200" }} />
        <span className="font-label-sm text-label-sm uppercase tracking-widest ml-3">Mulai Belajar</span>
      </Button>

      {/* Tools & Skills Section */}
      <div className="mt-24 w-full flex flex-col items-center">
        <h2 className="font-label-sm text-label-sm text-neutral-400 uppercase tracking-[0.3em] mb-8">Tools & Skills You Need</h2>
        
        <div className="flex flex-wrap justify-center gap-8 md:gap-12 mb-12">
          <div className="flex flex-col items-center gap-2 group">
            <Icon name="terminal" className="text-3xl text-neutral-300 group-hover:text-black transition-colors" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 group-hover:text-black transition-colors">Codex</span>
          </div>
          <div className="flex flex-col items-center gap-2 group">
            <Icon name="psychology" className="text-3xl text-neutral-300 group-hover:text-black transition-colors" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 group-hover:text-black transition-colors">Antigravity</span>
          </div>
          <div className="flex flex-col items-center gap-2 group">
            <Icon name="design_services" className="text-3xl text-neutral-300 group-hover:text-black transition-colors" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 group-hover:text-black transition-colors">Stitch</span>
          </div>
          <div className="flex flex-col items-center gap-2 group">
            <Icon name="javascript" className="text-3xl text-neutral-300 group-hover:text-black transition-colors" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 group-hover:text-black transition-colors">React</span>
          </div>
          <div className="flex flex-col items-center gap-2 group">
            <Icon name="description" className="text-3xl text-neutral-300 group-hover:text-black transition-colors" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 group-hover:text-black transition-colors">Tailwind</span>
          </div>
          <div className="flex flex-col items-center gap-2 group">
            <Icon name="storage" className="text-3xl text-neutral-300 group-hover:text-black transition-colors" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 group-hover:text-black transition-colors">PostgREST</span>
          </div>
        </div>

        <div className="w-full max-w-3xl aspect-[21/9] rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-surface-variant relative">
          <img 
            alt="Abstract minimalist 3D rendering with soft lighting and smooth gray curves" 
            className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-1000 ease-out" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBnj__SNRh4zQwAQqeijeYQRy1RSb0CiXOQxt5902e19hv_wnL5F42ugnkRsM9AVw7pw-AryFRlN6G8Tcwi5CdCSEZI38lOlav3sZ9A87u4EJMBEBvuh0bsuyxEmli8lg6PwxpgOhV3i4hOImeTwhFMiaOmWtq3kMrezFa2loKtfQ03W-dmgKtUN0DWW_NPx1PznlG9f-1sYk0Ey-BeJD-6Z6nB4WN1nik6MtjFraV1lY1bTMBVI3VwnP6hdxteLlkIbo0O0sQXY84"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
        </div>
      </div>
    </section>
  );
};
