
import React, { useState, useEffect } from 'react';
import { NavItem } from '../types';

interface NavbarProps {
  navItems: NavItem[];
  onAdminToggle: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ navItems, onAdminToggle }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-4' : 'py-6'}`}>
      <div className="container mx-auto px-6">
        <div className={`glass rounded-full px-6 py-3 flex items-center justify-between transition-all duration-300 ${isScrolled ? 'shadow-lg bg-slate-900/60' : 'bg-transparent'}`}>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-sky-400 to-indigo-600 rounded-lg flex items-center justify-center font-bold text-white text-xl">
              D
            </div>
            <span className="text-xl font-bold font-space tracking-tight hidden sm:block">
              DESA <span className="text-sky-400">DANGAN</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.filter(item => item.isVisible).map((item) => (
              <a
                key={item.id}
                href={item.href}
                className="text-sm font-medium text-slate-300 hover:text-sky-400 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button 
              onClick={onAdminToggle}
              className="text-xs px-4 py-2 border border-slate-700 rounded-full text-slate-400 hover:border-sky-400 hover:text-sky-400 transition-all"
            >
              Portal Admin
            </button>
            <button 
              className="md:hidden text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 glass rounded-2xl p-6 flex flex-col gap-4 animate-in slide-in-from-top duration-300">
            {navItems.filter(item => item.isVisible).map((item) => (
              <a
                key={item.id}
                href={item.href}
                className="text-lg font-medium text-slate-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
