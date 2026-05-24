import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { logoImages } from '../assets/assets.js';

export default function ProfessionalSplashScreen({ onComplete }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  // Étapes de chargement orientées Intelligence Artificielle & Big Data
  const loadingSteps = useMemo(
    () => [
      { label: 'Initialisation des pipelines de données...', duration: 800 },
      { label: 'Chargement des poids du modèle (Tensors)...', duration: 1000 },
      { label: 'Configuration de l’environnement MLOps...', duration: 600 },
      { label: 'Optimisation de la vitesse d’inférence...', duration: 700 },
      { label: 'Démarrage de l’interface analytique...', duration: 500 },
    ],
    []
  );

  useEffect(() => {
    let progressInterval;
    let stepTimeout;

    const runLoadingSequence = () => {
      if (currentStep < loadingSteps.length) {
        const step = loadingSteps[currentStep];

        // Animation fluide de la barre de progression
        progressInterval = setInterval(() => {
          setProgress((prev) => {
            const newProgress = prev + 100 / loadingSteps.length / (step.duration / 50);
            if (newProgress >= (currentStep + 1) * (100 / loadingSteps.length)) {
              clearInterval(progressInterval);
              return (currentStep + 1) * (100 / loadingSteps.length);
            }
            return newProgress;
          });
        }, 50);

        // Transition vers l'étape de R&D suivante
        stepTimeout = setTimeout(() => {
          setCurrentStep((prev) => prev + 1);
        }, step.duration);
      } else {
        // Finalisation et fermeture du rideau d'accueil
        setTimeout(() => {
          setIsLoading(false);
          setTimeout(() => {
            if (onComplete) onComplete();
          }, 800);
        }, 300);
      }
    };

    runLoadingSequence();

    return () => {
      clearInterval(progressInterval);
      clearTimeout(stepTimeout);
    };
  }, [currentStep, onComplete, loadingSteps]);

  const exitVariants = {
    exit: {
      scale: 0.95,
      opacity: 0,
      transition: { duration: 0.6, ease: 'easeInOut' },
    },
  };

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={exitVariants.exit}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-slate-950 px-6"
        >
          {/* Logo d'agence centralisé avec masque fluide */}
          <div className="relative z-20 mb-8 max-w-md w-full flex flex-col items-center text-center">
            {logoImages && (
              <motion.img 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                src={logoImages} 
                alt="MUAMOKEL AGENCY Logo" 
                className="h-24 md:h-28 object-contain mb-6 opacity-80"
              />
            )}
            <h2 className="text-white font-mono text-xs tracking-[0.2em] uppercase opacity-60">
              Christian Azipenza &bull; Data Hub
            </h2>
          </div>

          {/* Arrière-plan animé (Matrice de Tenseurs & Particules géométriques) */}
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            {/* Particules flottantes */}
            <div className="absolute inset-0">
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-blue-500 rounded-full opacity-30"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    y: [-10, -30, -10],
                    opacity: [0.2, 0.6, 0.2],
                  }}
                  transition={{
                    duration: 4 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                    ease: 'easeInOut',
                  }}
                />
              ))}
            </div>

            {/* Grille mathématique discrète */}
            <div className="absolute inset-0 opacity-5 dark:opacity-10">
              <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <defs>
                  <pattern id="splash-grid" width="8" height="8" patternUnits="userSpaceOnUse">
                    <path d="M 8 0 L 0 0 0 8" fill="none" stroke="currentColor" strokeWidth="0.3" />
                  </pattern>
                </defs>
                <rect width="100" height="100" fill="url(#splash-grid)" className="text-blue-400" />
              </svg>
            </div>
          </div>

          {/* Module de Barre de Progression */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="relative z-20 w-full max-w-sm mt-4"
          >
            {/* Texte d'étape dynamique */}
            <div className="text-slate-400 font-mono text-[11px] mb-3 min-h-[18px] text-center tracking-wide">
              {currentStep < loadingSteps.length && (
                <motion.span
                  key={currentStep}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  {loadingSteps[currentStep]?.label}
                </motion.span>
              )}
            </div>

            {/* Structure de la barre aux couleurs Bleu & Cyan */}
            <div className="relative w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
              <motion.div
                className="absolute left-0 top-0 h-full bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-400 origin-left"
                style={{ width: `${progress}%` }}
              />
              {/* Effet lumineux de survol (Shimmer) */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                animate={{ x: ['-100%', '100%'] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: 'linear' }}
              />
            </div>

            {/* Métriques de pourcentage */}
            <div className="flex justify-between items-center mt-2.5 text-[10px] font-mono text-slate-500 tracking-wider">
              <span className="uppercase">Analyse de la stack</span>
              <span>{Math.round(progress)}%</span>
            </div>
          </motion.div>

        </motion.div>
      )}
    </AnimatePresence>
  );
}
