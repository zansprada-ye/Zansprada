
import React from 'react';
import { NavItem, VillageService, VillageOfficial, VillageAnnouncement } from '../types';

interface AdminPanelProps {
  navItems: NavItem[];
  services: VillageService[];
  officials: VillageOfficial[];
  announcements: VillageAnnouncement[];
  onUpdateNav: (items: NavItem[]) => void;
  onUpdateServices: (services: VillageService[]) => void;
  onUpdateOfficials: (officials: VillageOfficial[]) => void;
  onUpdateAnnouncements: (announcements: VillageAnnouncement[]) => void;
  onClose: () => void;
}

const AdminPanel: React.FC<AdminPanelProps> = ({ 
  navItems, services, officials, announcements,
  onUpdateNav, onUpdateServices, onUpdateOfficials, onUpdateAnnouncements,
  onClose 
}) => {
  
  const updateNavLabel = (id: string, label: string) => {
    onUpdateNav(navItems.map(item => item.id === id ? { ...item, label } : item));
  };

  const deleteOfficial = (id: string) => {
    onUpdateOfficials(officials.filter(o => o.id !== id));
  };

  const addAnnouncement = () => {
    const newA: VillageAnnouncement = {
      id: Date.now().toString(),
      title: 'Pengumuman Baru',
      date: new Date().toLocaleDateString('id-ID'),
      content: 'Isi pengumuman di sini...',
      priority: 'Normal'
    };
    onUpdateAnnouncements([newA, ...announcements]);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-slate-950/90 backdrop-blur-md" onClick={onClose}></div>
      <div className="relative w-full max-w-5xl glass rounded-3xl overflow-hidden flex flex-col h-[85vh] border-sky-500/20 shadow-2xl">
        <div className="p-6 border-b border-white/10 flex justify-between items-center bg-sky-500/5">
          <div>
            <h2 className="text-2xl font-bold font-space text-white">Console Kendali Desa</h2>
            <p className="text-sm text-slate-400">Pusat pembaruan informasi real-time</p>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full transition-colors text-slate-400 hover:text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-12">
          {/* Menu Navigasi */}
          <section>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-6 bg-sky-500 rounded-full"></div>
              <h3 className="text-xl font-bold text-white">Struktur Menu Utama</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {navItems.map(item => (
                <div key={item.id} className="p-4 bg-white/5 border border-white/5 rounded-2xl flex flex-col gap-2">
                  <span className="text-[10px] text-slate-500 font-mono tracking-widest uppercase">ID: {item.id}</span>
                  <input 
                    type="text" 
                    value={item.label} 
                    onChange={(e) => updateNavLabel(item.id, e.target.value)}
                    className="bg-slate-800/50 border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:ring-1 focus:ring-sky-500 focus:outline-none"
                  />
                </div>
              ))}
            </div>
          </section>

          {/* Pengumuman */}
          <section>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-6 bg-amber-500 rounded-full"></div>
                <h3 className="text-xl font-bold text-white">Daftar Pengumuman</h3>
              </div>
              <button 
                onClick={addAnnouncement}
                className="text-xs px-4 py-2 bg-sky-500/20 text-sky-400 rounded-lg hover:bg-sky-500/30 transition-all font-bold"
              >
                + TAMBAH BARU
              </button>
            </div>
            <div className="space-y-3">
              {announcements.map(a => (
                <div key={a.id} className="p-4 bg-white/5 border border-white/5 rounded-2xl flex flex-col md:flex-row justify-between gap-4">
                  <div className="flex-1">
                    <input 
                      type="text" 
                      value={a.title} 
                      onChange={(e) => {
                        const updated = announcements.map(item => item.id === a.id ? { ...item, title: e.target.value } : item);
                        onUpdateAnnouncements(updated);
                      }}
                      className="bg-transparent font-bold text-white mb-1 w-full focus:outline-none focus:border-b border-sky-500"
                    />
                    <textarea 
                      value={a.content}
                      onChange={(e) => {
                        const updated = announcements.map(item => item.id === a.id ? { ...item, content: e.target.value } : item);
                        onUpdateAnnouncements(updated);
                      }}
                      className="bg-transparent text-sm text-slate-400 w-full resize-none h-12 focus:outline-none"
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <button 
                      onClick={() => {
                        onUpdateAnnouncements(announcements.filter(item => item.id !== a.id));
                      }}
                      className="p-2 text-red-400 hover:bg-red-400/10 rounded-lg"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Struktur Pemerintahan */}
          <section>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-6 bg-purple-500 rounded-full"></div>
              <h3 className="text-xl font-bold text-white">Struktur Pemerintahan</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {officials.map(o => (
                <div key={o.id} className="p-4 bg-white/5 border border-white/5 rounded-2xl flex items-center gap-4">
                  <img src={o.photo} className="w-12 h-12 rounded-full object-cover border border-white/10" alt={o.name} />
                  <div className="flex-1">
                    <input 
                      value={o.name}
                      onChange={(e) => onUpdateOfficials(officials.map(item => item.id === o.id ? { ...item, name: e.target.value } : item))}
                      className="bg-transparent font-bold text-white text-sm w-full focus:outline-none"
                    />
                    <input 
                      value={o.role}
                      onChange={(e) => onUpdateOfficials(officials.map(item => item.id === o.id ? { ...item, role: e.target.value } : item))}
                      className="bg-transparent text-xs text-sky-400 w-full focus:outline-none"
                    />
                  </div>
                  <button onClick={() => deleteOfficial(o.id)} className="text-red-400 hover:text-red-300">
                     <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                  </button>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="p-6 bg-white/5 border-t border-white/10 flex justify-between items-center">
          <p className="text-[10px] text-slate-500 font-mono italic">DATA PERSISTENCE: SESSION ONLY</p>
          <button 
            onClick={onClose}
            className="px-6 py-2 bg-sky-500 hover:bg-sky-400 text-white rounded-xl font-bold text-sm shadow-lg neo-glow transition-all"
          >
            Selesai & Simpan Tampilan
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
