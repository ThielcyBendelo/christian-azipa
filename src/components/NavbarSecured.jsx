import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaBrain, FaHome, FaUser, FaCode, FaBriefcase, FaTools, FaBars, FaTimes } from 'react-icons/fa';
import audioService from '../services/audioService';
import analyticsService from '../services/analyticsService';

export default function NavbarSecured() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    const newState = !isOpen;
    setIsOpen(newState);
    audioService.playClick();
    analyticsService.trackEvent('mobile_menu_toggle', { isOpen: newState, category: 'navigation' });
  };

  const handleNavClick = (section, e) => {
    e.preventDefault();
    if (isOpen) setIsOpen(false);
    audioService.playNavigate();
    analyticsService.trackEvent('navigation_click', { section, category: 'navigation' });
    if (section.startsWith('/')) {
      navigate(section);
    }
  };

  // Navigation items
  const navItems = [
    { href: '/', label: 'Accueil', icon: <FaHome /> },
    { href: '/about', label: 'À propos', icon: <FaUser /> },
    { href: '/skills', label: 'Compétences', icon: <FaCode /> },
    { href: '/experience', label: 'Expérience', icon: <FaBriefcase /> },
    { href: '/services', label: 'Services', icon: <FaTools /> },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-blue-500/20 bg-white/90 dark:bg-slate-950/90 backdrop-blur-lg shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          
          {/* Logo avec identité IA & Data Science (Christian AZIPENZA) */}
          <div className="flex items-center gap-3 cursor-pointer group" onClick={() => navigate('/')}>
            <div className="p-2.5 bg-blue-600 rounded-xl group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(37,99,235,0.4)] text-white">
              <FaBrain className="text-xl" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-black tracking-wider text-blue-600 dark:text-blue-400 uppercase leading-tight">
                C. AZIPENZA
              </span>
              <span className="text-[10px] font-bold tracking-widest text-slate-500 dark:text-slate-400 uppercase">
                AI & Data Engineer
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={(e) => handleNavClick(item.href, e)}
                className="flex items-center gap-2 px-4 py-2 rounded-xl text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950/30 transition-all duration-200 font-medium text-sm"
              >
                <span className="text-base opacity-70">{item.icon}</span>
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-2xl text-slate-700 dark:text-white p-2">
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
          
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-900 p-4 space-y-1 shadow-inner">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={(e) => handleNavClick(item.href, e)}
              className="w-full flex items-center gap-4 p-3 rounded-xl hover:bg-blue-50 dark:hover:bg-blue-950/20 text-slate-700 dark:text-slate-200 font-medium transition-colors"
            >
              <span className="text-blue-600 dark:text-blue-400">{item.icon}</span>
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
