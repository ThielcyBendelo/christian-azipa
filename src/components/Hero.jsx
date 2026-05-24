import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FaCodeBranch, FaBrain, FaDatabase, FaNetworkWired } from 'react-icons/fa'; // Icônes orientées IA/Data
import useParallax from '../hooks/useParallax';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import { profileImage } from '../assets/assets.js';

export default function Hero() {
  const scrollY = useParallax();
  const [elementRef] = useIntersectionObserver();
  const navigate = useNavigate();

  const backgrounds = ['/background11.png', '/background12.png', '/background13.jpeg'];
  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % backgrounds.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [backgrounds.length]);

  return (
    <section ref={elementRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      
      {/* Arrière-plan avec Parallaxe et effet de matrice de données (Bleu) */}
      <div 
        className="absolute inset-0 z-0 transition-all duration-1000 opacity-20 dark:opacity-10" 
        style={{ 
          backgroundImage: `url(${backgrounds[bgIndex]})`, 
          backgroundSize: 'cover', 
          backgroundPosition: 'center',
          filter: 'blue-scale(1) brightness(0.8)',
          transform: `translateY(${scrollY * 0.2}px)`,
        }} 
      />

      {/* Cercles de lumière bleutés en arrière-plan (Effet R&D Lab) */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 dark:bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 dark:bg-cyan-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-20 max-w-5xl mx-auto px-4 text-center py-24">
        
        {/* Photo de profil avec anneau d'apprentissage de modèle (Model Training Loop) */}
        <div className="relative inline-block mb-10">
          {/* Anneaux mathématiques en rotation lente */}
          <motion.div 
            animate={{ rotate: 360 }} 
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }} 
            className="absolute -inset-5 border border-dashed border-blue-500/40 rounded-full" 
          />
          <motion.div 
            animate={{ rotate: -360 }} 
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }} 
            className="absolute -inset-3 border border-blue-400/20 rounded-full" 
          />
          
          <div className="relative z-10 w-44 h-44 md:w-52 md:h-52 rounded-full overflow-hidden border-4 border-white dark:border-slate-900 shadow-[0_10px_40px_rgba(37,99,235,0.15)] dark:shadow-[0_0_40px_rgba(37,99,235,0.3)]">
            <img 
              src={profileImage} 
              alt="Christian AZIPENZA" 
              className="w-full h-full object-cover" 
              style={{ objectPosition: 'center 10%' }}
            />
          </div>
        </div>

        {/* Titres et Descriptions */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-3 tracking-tight">
            Christian <span className="bg-gradient-to-r from-blue-600 to-cyan-500 text-transparent bg-clip-text">AZIPENZA</span>
          </h1>

          {/* Tag de spécialité technique */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 font-mono text-xs md:text-sm font-semibold mb-8 tracking-wider uppercase border border-blue-100 dark:border-blue-900/30">
            <FaBrain className="animate-pulse" /> 
            <span>Ingénieur Intelligence Artificielle & Data Science</span>
          </div>

          <p className="max-w-2xl mx-auto text-slate-600 dark:text-slate-400 mb-10 text-base md:text-xl leading-relaxed">
            Spécialiste de la valorisation de données complexes chez <span className="text-blue-600 dark:text-blue-400 font-bold">MUAMOKEL AGENCY</span>. 
            Je conçois des architectures de <span className="text-slate-900 dark:text-white font-medium">Deep Learning</span> et orchestre des pipelines de production intelligents.
          </p>
        </motion.div>

        {/* Boutons d'Action épurés */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button 
            onClick={() => navigate('/contact')} 
            className="w-full sm:w-auto px-8 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 transition-all hover:-translate-y-0.5"
          >
            Me contacter
          </button>
          <button 
            onClick={() => navigate('/services')} 
            className="w-full sm:w-auto px-8 py-3.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 font-semibold rounded-xl hover:bg-slate-50 dark:hover:bg-slate-850 transition-all"
          >
            Découvrir mes expertises
          </button>
        </div>

        {/* Mini-Badges Technologiques discrets au bas de l'écran */}
        <div className="mt-16 flex gap-6 justify-center text-slate-400 dark:text-slate-600 text-sm font-mono">
          <span className="flex items-center gap-1"><FaDatabase /> MLOps</span>
          <span className="flex items-center gap-1"><FaCodeBranch /> Git Flow</span>
          <span className="flex items-center gap-1"><FaNetworkWired /> Neural Nets</span>
        </div>

      </div>
    </section>
  );
}
