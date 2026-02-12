
import React, { useState, useMemo } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AIAssistant from './components/AIAssistant';
import AdminPanel from './components/AdminPanel';
// Removed INITIAL_NEWS as it is not exported from constants.ts
import { INITIAL_NAV_ITEMS, INITIAL_SERVICES, INITIAL_STATS, INITIAL_OFFICIALS, INITIAL_ANNOUNCEMENTS } from './constants';
import { NavItem, VillageService, VillageOfficial, VillageAnnouncement } from './types';

const App: React.FC = () => {
  const [navItems, setNavItems] = useState<NavItem[]>(INITIAL_NAV_ITEMS);
  const [services, setServices] = useState<VillageService[]>(INITIAL_SERVICES);
  const [officials, setOfficials] = useState<VillageOfficial[]>(INITIAL_OFFICIALS);
  const [announcements, setAnnouncements] = useState<VillageAnnouncement[]>(INITIAL_ANNOUNCEMENTS);
  const [showAdmin, setShowAdmin] = useState(false);

  const chartData = [
    { name: 'Krama Alit', value: 450 },
    { name: 'Yowana', value: 850 },
    { name: 'Krama Dewasa', value: 2100 },
    { name: 'Lansia', value: 850 },
  ];

  const villageContext = useMemo(() => {
    return `Desa Dangan, Penebel. Layanan: ${services.map(s => s.title).join(', ')}. 
    Pengumuman terbaru: ${announcements.slice(0, 2).map(a => a.title).join(', ')}. 
    Kepala Desa: ${officials.find(o => o.role.includes('Perbekel'))?.name}.`;
  }, [services, announcements, officials]);

  return (
    <div className="min-h-screen selection:bg-sky-500/30">
      <Navbar 
        navItems={navItems} 
        onAdminToggle={() => setShowAdmin(true)} 
      />
      
      <main>
        <Hero />

        {/* Tentang Kami Section */}
        <section id="about" className="py-24 bg-slate-950/40 relative overflow-hidden">
           <div className="container mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-block px-4 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold mb-6">PROFIL DESA</div>
                <h2 className="text-4xl md:text-5xl font-bold font-space mb-8">Harmoni Tradisi & <span className="text-sky-400">Teknologi</span></h2>
                <p className="text-lg text-slate-400 leading-relaxed mb-6">
                  Desa Dangan adalah permata hijau di lereng Gunung Batukaru yang kini bertransformasi menjadi desa percontohan digital di Bali.
                </p>
                <div className="space-y-4">
                   <div className="flex gap-4 p-4 glass rounded-2xl">
                      <div className="text-2xl">🌿</div>
                      <div>
                        <h4 className="font-bold">Keberlanjutan Alam</h4>
                        <p className="text-xs text-slate-500">Menjaga ekosistem subak dengan sistem pemantauan debit air otomatis.</p>
                      </div>
                   </div>
                   <div className="flex gap-4 p-4 glass rounded-2xl">
                      <div className="text-2xl">⚡</div>
                      <div>
                        <h4 className="font-bold">Inovasi Digital</h4>
                        <p className="text-xs text-slate-500">Layanan publik mandiri tanpa perlu berkas fisik demi efisiensi tinggi.</p>
                      </div>
                   </div>
                </div>
              </div>
              <div className="relative">
                 <div className="aspect-square glass rounded-[40px] overflow-hidden rotate-3 hover:rotate-0 transition-transform duration-500">
                    <img src="https://picsum.photos/seed/dangan-village/800/800" className="w-full h-full object-cover opacity-80" alt="Suasana Desa" />
                 </div>
                 <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-sky-500/10 blur-[60px] rounded-full"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Layanan Section */}
        <section id="services" className="py-24 relative">
          <div className="container mx-auto px-6">
            <div className="mb-16 text-center">
              <h2 className="text-4xl md:text-5xl font-bold font-space mb-4">Layanan Warga</h2>
              <p className="text-slate-400 max-w-2xl mx-auto">Satu pintu untuk seluruh kebutuhan administratif dan sosial krama desa.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service) => (
                <div key={service.id} className="group glass p-8 rounded-[32px] hover:bg-white/5 transition-all duration-300 border-white/5 hover:border-sky-500/30">
                  <div className="text-4xl mb-6">{service.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pengumuman Section */}
        <section id="announcements" className="py-24 bg-sky-950/20">
          <div className="container mx-auto px-6">
            <div className="flex justify-between items-center mb-12">
              <h2 className="text-4xl font-bold font-space">Pengumuman <span className="text-amber-400">Penting</span></h2>
              <div className="h-px flex-1 mx-8 bg-white/10 hidden md:block"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {announcements.map((a) => (
                <div key={a.id} className="p-6 glass rounded-2xl border-l-4 border-amber-500/50 hover:bg-white/5 transition-colors">
                  <div className="text-[10px] font-bold text-slate-500 mb-2">{a.date}</div>
                  <h3 className="text-xl font-bold mb-3 text-white">{a.title}</h3>
                  <p className="text-sm text-slate-400 mb-4">{a.content}</p>
                  <span className={`text-[10px] px-2 py-1 rounded uppercase font-bold ${a.priority === 'Penting' ? 'bg-amber-500/20 text-amber-400' : 'bg-slate-500/20 text-slate-400'}`}>
                    {a.priority}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Struktur Pemerintahan Section */}
        <section id="structure" className="py-24">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold font-space">Struktur Organisasi</h2>
              <p className="text-slate-500 mt-4">Krama yang mengabdi untuk kemajuan Desa Dangan.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {officials.map((o) => (
                <div key={o.id} className="text-center group">
                  <div className="relative inline-block mb-4">
                    <div className="absolute inset-0 bg-sky-500 blur-xl opacity-0 group-hover:opacity-20 transition-opacity"></div>
                    <img src={o.photo} className="w-24 h-24 md:w-32 md:h-32 rounded-full mx-auto border-2 border-white/10 p-1 relative z-10 group-hover:scale-105 transition-transform" alt={o.name} />
                  </div>
                  <h4 className="font-bold text-white text-lg">{o.name}</h4>
                  <p className="text-xs text-sky-400 font-mono uppercase tracking-widest">{o.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section id="stats" className="py-24 bg-slate-950/40">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
              <div className="lg:col-span-1">
                <h2 className="text-3xl font-bold mb-6">Kependudukan</h2>
                <div className="space-y-6">
                  {INITIAL_STATS.map((stat, i) => (
                    <div key={i} className="flex justify-between items-center p-4 border-b border-white/5">
                      <span className="text-slate-400">{stat.label}</span>
                      <span className="font-bold text-sky-400">{stat.value.toLocaleString()}{stat.unit === '%' ? '%' : ' '+stat.unit}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="lg:col-span-2 glass p-8 rounded-3xl h-[400px]">
                 <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={chartData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" vertical={false} />
                      <XAxis dataKey="name" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                      <YAxis stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                      <Tooltip contentStyle={{backgroundColor: '#0f172a', border: 'none', borderRadius: '8px'}} cursor={{fill: 'rgba(255,255,255,0.05)'}} />
                      <Bar dataKey="value" fill="#38bdf8" radius={[10, 10, 0, 0]} />
                    </BarChart>
                 </ResponsiveContainer>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 border-t border-white/5 bg-slate-950">
          <div className="container mx-auto px-6 text-center">
            <div className="flex justify-center gap-6 mb-8 text-slate-500">
               <a href="#" className="hover:text-white">YouTube</a>
               <a href="#" className="hover:text-white">Instagram</a>
               <a href="#" className="hover:text-white">Facebook</a>
            </div>
            <p className="text-sm text-slate-600">&copy; 2024 Pemerintah Desa Dangan. Dikelola secara digital untuk kesejahteraan warga.</p>
          </div>
        </footer>
      </main>

      <AIAssistant context={villageContext} />
      
      {showAdmin && (
        <AdminPanel 
          navItems={navItems}
          services={services}
          officials={officials}
          announcements={announcements}
          onUpdateNav={setNavItems}
          onUpdateServices={setServices}
          onUpdateOfficials={setOfficials}
          onUpdateAnnouncements={setAnnouncements}
          onClose={() => setShowAdmin(false)}
        />
      )}
    </div>
  );
};

export default App;
