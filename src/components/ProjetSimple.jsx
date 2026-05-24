import React from 'react';
import { FaShieldAlt, FaExternalLinkAlt, FaCode, FaLock } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function ProjetSimple() {
  return (
    <section id="projects" className="py-24 px-6 bg-slate-950 min-h-screen">
      <div className="max-w-7xl mx-auto">
        
        {/* Header style Console */}
        <div className="text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-block p-2 px-4 bg-red-600/10 border border-red-600/20 rounded-full mb-4"
          >
            <span className="text-red-500 font-mono text-xs font-bold uppercase tracking-[0.3em]">
              Log d'Intervention // Projets
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter">
            Réalisations <span className="text-red-600">Critiques</span>
          </h2>
          <div className="h-1 w-24 bg-red-600 mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projets.map((projet, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="group bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-red-600/50 transition-all duration-500 shadow-2xl"
            >
              {/* Image avec Overlay Cyber */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={projet.image}
                  alt={projet.titre}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
                
                {/* Badge de Sécurité */}
                <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1 bg-red-600 text-white text-[10px] font-black uppercase rounded-sm skew-x-[-10deg]">
                  <FaLock size={10} /> Protégé
                </div>
              </div>

              {/* Détails du Projet */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-red-500 transition-colors uppercase tracking-tight">
                  {projet.titre}
                </h3>
                <p className="text-slate-400 text-sm mb-6 leading-relaxed line-clamp-3">
                  {projet.description}
                </p>

                {/* Stack Technique avec icône bouclier */}
                {projet.technologies && (
                  <div className="flex flex-wrap gap-2 mb-8">
                    {projet.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-slate-950 border border-slate-800 text-slate-300 text-[10px] font-mono rounded group-hover:border-red-600/30 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}

                {/* Actions */}
                <div className="flex items-center gap-4 pt-4 border-t border-slate-800">
                  {projet.lienDemo && (
                    <a
                      href={projet.lienDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-3 bg-red-600 hover:bg-red-700 text-white text-xs font-bold rounded-xl transition-all"
                    >
                      <FaExternalLinkAlt size={12} /> DÉPLOIEMENT
                    </a>
                  )}
                  {projet.lienGithub && (
                    <a
                      href={projet.lienGithub}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-slate-800 text-slate-300 hover:text-white rounded-xl transition-all"
                      title="Source Code"
                    >
                      <FaCode size={18} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer de section style Statut */}
        <div className="mt-20 flex justify-center">
          <div className="flex items-center gap-3 px-6 py-3 bg-slate-900 border border-slate-800 rounded-2xl text-slate-500 text-xs font-mono">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            Total Projets Indexés : {projets.length} | Audit complet effectué
          </div>
        </div>
      </div>
    </section>
  );
}
