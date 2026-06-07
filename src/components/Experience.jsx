import { experiences } from '../assets/assets.js'; 
import { FaBriefcase, FaBuilding, FaCalendarAlt, FaBrain, FaDatabase, FaCogs, FaGraduationCap, FaNetworkWired } from 'react-icons/fa'; 
import { motion } from 'framer-motion'; 

// Icônes de rôles ciblées IA et Data
const roleIcon = (type) => {
  switch ((type || '').toLowerCase()) {
    case 'internship':
    case 'stage': 
      return FaGraduationCap;
    case 'ai':
    case 'intelligence-artificielle': 
      return FaBrain;
    case 'data':
    case 'data-science': 
      return FaDatabase;
    case 'mlops':
    case 'devops': 
      return FaCogs;
    case 'bigdata': 
      return FaNetworkWired;
    default: 
      return FaBriefcase;
  }
};

export default function Experience() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="bg-slate-50 dark:bg-slate-950 py-24 px-4 min-h-screen transition-colors duration-300">
      <div className="max-w-5xl mx-auto">
        
        {/* Header de section épuré (Bleu & Blanc) */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            PARCOURS <span className="bg-gradient-to-r from-blue-600 to-cyan-500 text-transparent bg-clip-text">PROFESSIONNEL</span>
          </h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto mt-4 mb-6 rounded-full"></div>
          <p className="text-slate-600 dark:text-slate-400 max-w-xl mx-auto text-base md:text-lg">
            Historique des missions d'ingénierie, déploiements d'algorithmes et projets d'innovation technologique.
          </p>
        </div>

        {/* Timeline Container */}
        <motion.div 
          className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-4 md:ml-12 space-y-12" 
          variants={containerVariants} 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
        >
          {experiences.map((exp, idx) => {
            const Icon = roleIcon(exp.type);
            return (
              <motion.div key={idx} className="relative pl-8 md:pl-12" variants={itemVariants}>
                
                {/* Point d'ancrage sur la Timeline */}
                <div className="absolute -left-[11px] top-0 w-5 h-5 bg-slate-50 dark:bg-slate-950 border-2 border-blue-600 rounded-full z-10 shadow-[0_0_10px_rgba(37,99,235,0.3)] transition-colors" />
                
                {/* Carte de contenu adaptative */}
                <div className="group bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 p-6 rounded-2xl hover:border-blue-500/50 dark:hover:border-blue-500/30 transition-all shadow-sm dark:shadow-xl">
                  
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-4">
                    <div className="flex items-center gap-4">
                      {/* Icône de catégorie dynamique */}
                      <div className="p-3 bg-slate-100 dark:bg-slate-800 rounded-xl text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                        <Icon size={20} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {exp.role}
                        </h3>
                        <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm mt-1">
                          <FaBuilding size={12} />
                          <span className="text-blue-600 dark:text-blue-400 font-semibold uppercase tracking-wider text-xs">{exp.company}</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Badge de date style Badge Tech */}
                    <div className="flex items-center gap-2 bg-slate-50 dark:bg-slate-950 px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 text-xs font-mono font-medium">
                      <FaCalendarAlt className="text-blue-600 dark:text-blue-400" /> {exp.year}
                    </div>
                  </div>
                  
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed border-t border-slate-100 dark:border-slate-800 pt-4 mt-4 text-justify">
                    {exp.description}
                  </p>

                   <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed border-t border-slate-100 dark:border-slate-800 pt-4 mt-4 text-justify">
                    {exp.description1}
                  </p>
                  
                </div>
              </motion.div>
            );
          })}
        </motion.div>
        
      </div>
    </section>
  );
}
