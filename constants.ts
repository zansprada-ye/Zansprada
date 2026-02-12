
import { NavItem, VillageService, VillageNews, VillageStats, VillageOfficial, VillageAnnouncement } from './types';

export const INITIAL_NAV_ITEMS: NavItem[] = [
  { id: '1', label: 'Beranda', href: '#hero', isVisible: true },
  { id: '2', label: 'Layanan', href: '#services', isVisible: true },
  { id: '3', label: 'Tentang Kami', href: '#about', isVisible: true },
  { id: '4', label: 'Struktur', href: '#structure', isVisible: true },
  { id: '5', label: 'Pengumuman', href: '#announcements', isVisible: true },
];

export const INITIAL_SERVICES: VillageService[] = [
  {
    id: 's1',
    title: 'Surat Digital',
    description: 'Permohonan surat pengantar RT/RW dan Domisili secara mandiri.',
    icon: '📄',
    category: 'Administrasi'
  },
  {
    id: 's2',
    title: 'Dangan Sehat',
    description: 'Jadwal posyandu dan konsultasi kesehatan warga.',
    icon: '🏥',
    category: 'Kesehatan'
  },
  {
    id: 's3',
    title: 'BUMDes Online',
    description: 'Pemesanan produk lokal unggulan desa Dangan.',
    icon: '🛒',
    category: 'Ekonomi'
  },
  {
    id: 's4',
    title: 'Beasiswa Desa',
    description: 'Informasi bantuan pendidikan untuk putra-putri berprestasi.',
    icon: '🎓',
    category: 'Pendidikan'
  }
];

export const INITIAL_OFFICIALS: VillageOfficial[] = [
  { id: 'o1', name: 'I Wayan Sudarma', role: 'Perbekel (Kepala Desa)', photo: 'https://i.pravatar.cc/150?u=o1' },
  { id: 'o2', name: 'Ni Ketut Sari', role: 'Sekretaris Desa', photo: 'https://i.pravatar.cc/150?u=o2' },
  { id: 'o3', name: 'I Made Putra', role: 'Kaur Keuangan', photo: 'https://i.pravatar.cc/150?u=o3' },
  { id: 'o4', name: 'Ni Luh Putu', role: 'Kaur Perencanaan', photo: 'https://i.pravatar.cc/150?u=o4' },
];

export const INITIAL_ANNOUNCEMENTS: VillageAnnouncement[] = [
  { 
    id: 'a1', 
    title: 'Kerja Bakti Massal', 
    date: '20 Mei 2024', 
    content: 'Diharapkan seluruh warga berkumpul di Balai Desa pukul 07.00 WITA untuk pembersihan saluran air.',
    priority: 'Penting'
  },
  { 
    id: 'a2', 
    title: 'Penyaluran BLT Tahap II', 
    date: '22 Mei 2024', 
    content: 'Pengambilan dana bantuan dapat dilakukan di kantor desa dengan membawa KTP asli.',
    priority: 'Normal'
  }
];

export const INITIAL_STATS: VillageStats[] = [
  { label: 'Penduduk', value: 4250, unit: 'Jiwa' },
  { label: 'Luas Wilayah', value: 124, unit: 'Ha' },
  { label: 'Indeks Desa Membangun', value: 88, unit: '%' },
  { label: 'Internet Gratis', value: 12, unit: 'Titik' }
];
