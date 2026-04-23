import React from 'react';

export const WorkflowSection: React.FC = () => {
  return (
    <section className="w-full py-stack-lg mb-24">
      <div className="mb-stack-md flex justify-between items-end border-b border-surface-variant pb-8">
        <div>
          <h2 className="font-h2 text-h2 text-primary">Tutorial Flow</h2>
          <p className="font-body-md text-body-md text-secondary mt-2">Langkah-langkah ngoding santai ala Vibe Code.</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 gap-12 w-full">
        {/* Step 1: Planning */}
        <div id="fase-1" className="scroll-mt-32 bg-surface-container-lowest rounded-xl border border-surface-variant p-8 md:p-12 hover:shadow-[0_20px_40px_rgba(0,0,0,0.04)] transition-shadow duration-300">
          <div className="font-label-sm text-label-sm text-secondary uppercase tracking-widest mb-2">Fase 01</div>
          <h3 className="font-h3 text-h3 text-primary mb-4">Planning (PRD/Analyst System)</h3>
          <p className="font-body-md text-body-md text-secondary mb-4">
            Bisa pakai Codex, Antigravity, atau AI dev tools lainnya (ingat kalau di Codex bisa tekan <kbd className="bg-surface-variant px-2 rounded">Shift+Tab</kbd> buat nyalain planning mode). Poin PRD yang disarankan: Overview, Requirement, Core Features, User Flow, Architecture, Sequence Diagram, Database Schema, Tech Stack. Bisa pakai tools analisis kayak BMAD-method, Openspec, Speckit dll.
          </p>
          <div className="bg-surface-container-low p-6 rounded-lg text-sm font-mono text-on-surface-variant overflow-x-auto whitespace-pre-wrap">
            <span className="text-secondary-fixed-dim">Contoh Prompt:</span><br/>
            buatkan saya prd planning untuk dev web aplikasi pencatatan keuangan, flow nya adalah sebagai berikut: <br/>
            1. saya membuka web dan input pengeluaran atau pendapatan saya, contoh beli ayam 12 ribu, lalu ada form untuk mengisi<br/>
            2. lalu data masuk dan langsung tercatat ke database<br/>
            3. di web nya terdapat menu dashboard, report bulanan pengeluaran, dan menu untuk input dan melihat pengeluaran atau pemasukan<br/><br/>
            buatkan prd dengan point-point ini (Overview, Requirement, dll). Tanyakan saya dulu dan buat planning mendetail sebelum kasih saya final prd nya.
          </div>
        </div>

        {/* Step 2: Design UI/UX */}
        <div id="fase-2" className="scroll-mt-32 bg-surface-container-lowest rounded-xl border border-surface-variant p-8 md:p-12 hover:shadow-[0_20px_40px_rgba(0,0,0,0.04)] transition-shadow duration-300">
          <div className="font-label-sm text-label-sm text-secondary uppercase tracking-widest mb-2">Fase 02</div>
          <h3 className="font-h3 text-h3 text-primary mb-4">Design UI / UX</h3>
          <p className="font-body-md text-body-md text-secondary mb-4">
            Bisa pakai Google Stitch (karna free) atau Figma AI Design, opsional lain seperti Claude Design. Biar lebih akurat, bisa gunain LLM kesayangan (ChatGPT, Gemini, dll) buat bikin promptnya dulu. Hasil JSON atau ZIP jangan lupa ditaro di folder vibes project.
          </p>
          <div className="bg-surface-container-low p-6 rounded-lg text-sm font-mono text-on-surface-variant overflow-x-auto whitespace-pre-wrap">
            <span className="text-secondary-fixed-dim">Contoh Prompt di ChatGPT/Gemini:</span><br/>
            buatkan saya prompt design web app untuk di prompt google stitch dengan prd seperti ini (masukan file prd nya). tanyakan saya mendetail designnya ke saya sebelum kasih output prompt yang akan digunakan di google stitch.
          </div>
        </div>

        {/* Step 3: Front End */}
        <div id="fase-3" className="scroll-mt-32 bg-surface-container-lowest rounded-xl border border-surface-variant p-8 md:p-12 hover:shadow-[0_20px_40px_rgba(0,0,0,0.04)] transition-shadow duration-300">
          <div className="font-label-sm text-label-sm text-secondary uppercase tracking-widest mb-2">Fase 03</div>
          <h3 className="font-h3 text-h3 text-primary mb-4">Design Front End</h3>
          <p className="font-body-md text-body-md text-secondary mb-4">
            Tinggal prompt ke Codex / Dev tool lainnya untuk buatkan front end base on PRD dan folder UI/UX kalian. Bisa tambahin skill/MCP server kaya Brad Frost biar struktur file lebih rapi.
          </p>
          <div className="bg-surface-container-low p-6 rounded-lg text-sm font-mono text-on-surface-variant overflow-x-auto whitespace-pre-wrap">
            <span className="text-secondary-fixed-dim">Contoh Prompt:</span><br/>
            create a frontend with next js, tailwindcss and shadcn , use skill ai brad frost for implement frontend and design ui/ux refer from @(folder ui/ux) and prd refer from @(folder/file prd nya).
          </div>
        </div>

        {/* Step 4: Backend */}
        <div id="fase-4" className="scroll-mt-32 bg-surface-container-lowest rounded-xl border border-surface-variant p-8 md:p-12 hover:shadow-[0_20px_40px_rgba(0,0,0,0.04)] transition-shadow duration-300">
          <div className="font-label-sm text-label-sm text-secondary uppercase tracking-widest mb-2">Fase 04</div>
          <h3 className="font-h3 text-h3 text-primary mb-4">Backend</h3>
          <p className="font-body-md text-body-md text-secondary mb-4">
            Memanfaatkan API route handlers, Drizzle ORM, PostgREST dan integrasi Better Auth. Hapus data dummy dan amankan (protect) jalurnya.
          </p>
          <div className="bg-surface-container-low p-6 rounded-lg text-sm font-mono text-on-surface-variant overflow-x-auto whitespace-pre-wrap space-y-4">
            <p><span className="text-secondary-fixed-dim">Prompt 1:</span><br/>
            now create the file backend. utilize API route handlers, drizzle ORM and better auth and use postgrest , dont forget base on prd @prd</p>
            <p><span className="text-secondary-fixed-dim">Prompt 2:</span><br/>
            run a postgrest docker instance and connect to it, use custom port, then run migration and seed and add drizzle studio script</p>
            <p><span className="text-secondary-fixed-dim">Prompt 3:</span><br/>
            now integrate the api and better auth client to frontend remove the dummy data and use real data from api, also implemen the auth, protect the whole app</p>
          </div>
        </div>

        {/* Step 5: Deployment */}
        <div id="fase-5" className="scroll-mt-32 bg-primary rounded-xl p-8 md:p-12 relative overflow-hidden group hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)] transition-all duration-500">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.05)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%,100%_100%] animate-[gradient_3s_linear_infinite] pointer-events-none"></div>
          <div className="relative z-10 w-full">
            <div className="font-label-sm text-label-sm text-white/50 uppercase tracking-widest mb-2">Fase 05</div>
            <h3 className="font-h3 text-h3 text-white mb-4">Deployment</h3>
            <p className="font-body-md text-body-md text-white/80 mb-6">
              Buat new chat aja di Codex / Antigravity khusus deploy biar context fokus ke deployment. Jangan lupa nyalain planning mode (<kbd className="bg-white/20 px-2 rounded">Shift+Tab</kbd>).
            </p>
            <div className="bg-black/20 backdrop-blur-md p-6 rounded-lg text-sm font-mono text-white/90 overflow-x-auto whitespace-pre-wrap">
              <span className="text-white/60">Contoh Prompt:</span><br/>
              need to prepare deployment<br/>
              1. run a build and fix any error<br/>
              2. create github repo and push
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
