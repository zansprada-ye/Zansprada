
export interface NavItem {
  id: string;
  label: string;
  href: string;
  isVisible: boolean;
}

export interface VillageService {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: 'Administrasi' | 'Kesehatan' | 'Ekonomi' | 'Pendidikan';
}

export interface VillageNews {
  id: string;
  title: string;
  date: string;
  summary: string;
  image: string;
}

export interface VillageOfficial {
  id: string;
  name: string;
  role: string;
  photo: string;
}

export interface VillageAnnouncement {
  id: string;
  title: string;
  date: string;
  content: string;
  priority: 'Normal' | 'Penting' | 'Darurat';
}

export interface VillageStats {
  label: string;
  value: number;
  unit: string;
}

export type PageSection = 'hero' | 'services' | 'about' | 'structure' | 'announcements' | 'stats' | 'news';
