import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram, FaFacebook, FaWhatsapp, FaBrain } from 'react-icons/fa'; 
import { contact } from '../assets/assets.js'; 

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const socialIcons = {
    Email: FaEnvelope,
    LinkedIn: FaLinkedin,
    GitHub: FaGithub,
    Instagram: FaInstagram,
    Facebook: FaFacebook,
    WhatsApp: FaWhatsapp,
  };

  return (
    <footer className="bg-white dark:bg-slate-950 text-slate-500 dark:text-slate-400 py-14 border-t border-slate-200 dark:border-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Identité & Métier (Christian AZIPENZA) */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="p-2 bg-blue-600 rounded-lg text-white">
                <FaBrain className="text-lg" />
              </div>
              <span className="text-xl font-black tracking-wider text-slate-900 dark:text-white uppercase">
                AZIPENZA<span className="text-blue-600">.AI</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed text-center md:text-left max-w-xs text-slate-600 dark:text-slate-400">
              Ingénieur IA & Data Science chez <span className="text-slate-900 dark:text-slate-200 font-medium">Muamokel Agency</span>. Architecture de modèles prédictifs et valorisation de données complexes.
            </p>
          </div>

          {/* Navigation Épurée */}
          <div className="text-center">
            <h4 className="text-slate-900 dark:text-white font-bold uppercase tracking-widest text-xs mb-6">Navigation</h4>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2.5 text-sm font-medium">
              <li><Link to="/" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Accueil</Link></li>
              <li><Link to="/about" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">À propos</Link></li>
              <li><Link to="/skills" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Compétences</Link></li>
              <li><Link to="/projects" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Projets</Link></li>
              <li><Link to="/services" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Services</Link></li>
              <li><Link to="/contact" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Réseaux Sociaux & Liens */}
          <div className="flex flex-col items-center md:items-end">
            <h4 className="text-slate-900 dark:text-white font-bold uppercase tracking-widest text-xs mb-6">Canaux Professionnels</h4>
            <div className="flex gap-3">
              {contact.map((item) => {
                const Icon = socialIcons[item.label];
                if (!Icon) return null;
                
                let href = item.link;
                if (item.label === 'Email' && !/^mailto:/i.test(href)) {
                  href = `mailto:${href}`;
                }

                return (
                  <a
                    key={item.label}
                    href={href}
                    target={href.startsWith('mailto:') ? undefined : '_blank'}
                    rel="noopener noreferrer"
                    className="p-3 bg-slate-100 dark:bg-slate-900 rounded-xl text-slate-600 dark:text-slate-400 hover:text-white hover:bg-blue-600 dark:hover:bg-blue-600 hover:scale-105 transition-all shadow-sm"
                    aria-label={item.label}
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>

        </div>

        {/* Barre inférieure (Bottom Bar) */}
        <div className="pt-8 border-t border-slate-200 dark:border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono text-slate-400 dark:text-slate-500">
          <p>© {currentYear} Christian AZIPENZA — MODELS DEPLOYED & OPTIMIZED</p>
          <div className="flex gap-6">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span> Pipeline Actif
            </span>
            <span>v3.0.0</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
