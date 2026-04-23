import React from 'react';
import { ConceptCard } from '../molecules/ConceptCard';
import { Icon } from '../atoms/Icon';

export const ConceptSection: React.FC = () => {
  return (
    <section id="konsep" className="w-full py-stack-lg flex flex-col items-center scroll-mt-24">
      <div className="text-center mb-stack-md">
        <h2 className="font-h2 text-h2 text-primary mb-4">Konsep</h2>
        <div className="w-12 h-[1px] bg-outline-variant mx-auto"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl w-full mt-12">
        <ConceptCard 
          iconName="alt_route" 
          title="Draft Flow" 
          description="Siklus ringkas Vibe Coding: Planning (PRD) ➔ Design UI/UX ➔ Implementation (Front & Back) ➔ Deployment. Semua dilakukan dalam satu context flow yang teratur." 
        />
        <ConceptCard 
          iconName="tips_and_updates" 
          title="Vibe Skills & Methods" 
          description="Gunakan skill seperti Brad Frost (Atomic Design), RTK (Redux), dan Caveman Methodology. Struktur yang rapi bikin AI lebih pinter dan minim error." 
        />
        <ConceptCard 
          iconName="savings" 
          title="Token & API Tips" 
          description="Hemat token/biaya API dengan memasukkan knowledge di awal prompt. Fokus pada satu tugas per-chat agar context tidak bengkak dan hasil lebih akurat." 
        />
      </div>

      <div className="mt-16 p-8 bg-surface-container-low rounded-2xl max-w-4xl w-full border border-surface-variant">
        <h3 className="font-h3 text-xl mb-4 flex items-center gap-2">
          <Icon name="lightbulb" className="text-yellow-500" />
          Pro Tips untuk Hasil Maksimal
        </h3>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-secondary">
          <li className="flex gap-2">
            <span className="text-primary font-bold">•</span>
            <span>Gunakan **Caveman Method** (Pragmatic HTML/Tailwind) untuk menghindari bloat library yang berat.</span>
          </li>
          <li className="flex gap-2">
            <span className="text-primary font-bold">•</span>
            <span>Selalu nyalakan **Planning Mode** di Codex (Shift+Tab) sebelum eksekusi code besar.</span>
          </li>
          <li className="flex gap-2">
            <span className="text-primary font-bold">•</span>
            <span>Gunakan **RTK (Redux Toolkit)** untuk global state agar logic data terpusat dan tidak berantakan di komponen.</span>
          </li>
          <li className="flex gap-2">
            <span className="text-primary font-bold">•</span>
            <span>Manfaatkan **Knowledge/Skills** di prompt awal untuk mengurangi repetisi penjelasan instruksi ke AI.</span>
          </li>
        </ul>
      </div>
    </section>
  );
};
