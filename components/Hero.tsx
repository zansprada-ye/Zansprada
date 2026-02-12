
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Animated Background Orbs */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
        <div className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-sky-600/20 blur-[120px] rounded-full animate-blob"></div>
        <div className="absolute top-[20%] -right-[10%] w-[40%] h-[40%] bg-indigo-600/20 blur-[120px] rounded-full animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-[20%] left-[20%] w-[60%] h-[60%] bg-purple-600/10 blur-[120px] rounded-full animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-6">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-bold uppercase tracking-widest mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
            </span>
            Kecamatan Penebel, Tabanan
          </div>
          <h1 className="text-6xl md:text-8xl font-bold font-space leading-[1.1] mb-8">
            <span className="text-white">Gerbang Masa Depan</span><br />
            <span className="text-gradient">Desa Digital Dangan</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mb-12 leading-relaxed">
            Mewujudkan tata kelola desa yang transparan, efisien, dan inovatif melalui integrasi teknologi kecerdasan buatan untuk kesejahteraan seluruh krama.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#services" className="px-8 py-4 bg-sky-500 hover:bg-sky-400 text-white rounded-full font-bold transition-all transform hover:scale-105 neo-glow">
              Eksplorasi Layanan
            </a>
            <a href="#about" className="px-8 py-4 glass text-white rounded-full font-bold hover:bg-white/10 transition-all">
              Visi & Misi
            </a>
          </div>
        </div>
      </div>
      
      {/* Decorative Floating Element */}
      <div className="hidden lg:block absolute right-10 top-1/2 -translate-y-1/2 w-1/3">
        <div className="glass rounded-3xl p-8 border-white/5 relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-sky-500 to-transparent opacity-50"></div>
          <div className="flex justify-between items-center mb-6">
            <div className="text-sm text-sky-400 font-mono">STATUS: ONLINE</div>
            <div className="text-xs text-slate-500 font-mono">ID: DGN-2024-X</div>
          </div>
          <div className="space-y-4">
            <div className="h-4 w-3/4 bg-white/5 rounded"></div>
            <div className="h-4 w-1/2 bg-white/5 rounded"></div>
            <div className="h-4 w-2/3 bg-white/5 rounded"></div>
          </div>
          <div className="mt-8 pt-8 border-t border-white/5 flex gap-4">
            <div className="w-12 h-12 rounded-full bg-sky-500/20 flex items-center justify-center">
              <div className="w-6 h-6 rounded-full border-2 border-sky-400 border-t-transparent animate-spin"></div>
            </div>
            <div>
              <div className="text-sm font-bold">Sinkronisasi Data...</div>
              <div className="text-xs text-slate-500">Real-time processing active</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
