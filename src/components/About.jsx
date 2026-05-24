import { about, profile1Image as profileImg } from '../assets/assets.js'; 
import { motion } from 'framer-motion'; 
import { FaBrain, FaDatabase, FaCogs, FaMapMarkerAlt, FaFileDownload, FaChartLine, FaGraduationCap } from 'react-icons/fa'; 
import LazyImage from './LazyImage'; 
import GoogleMapsSection from './GoogleMapsSection'; 

export default function About() { 
  const containerVariants = { 
    hidden: { opacity: 0 }, 
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }, 
  }; 

  const itemVariants = { 
    hidden: { opacity: 0, y: 20 }, 
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }, 
  }; 

  const details = [ 
    { 
      icon: <FaBrain />, 
      title: "Intelligence Artificielle", 
      text: "Conception et entraînement d'architectures de réseaux de neurones (Deep Learning, Vision par ordinateur, NLP) pour automatiser des processus décisionnels complexes." 
    }, 
    { 
      icon: <FaDatabase />, 
      title: "Data Engineering & Big Data", 
      text: "Modélisation et maintenance de pipelines ETL robustes. Optimisation du stockage et du requêtage sur des bases de données volumineuses (SQL & NoSQL)." 
    }, 
    { 
      icon: <FaCogs />, 
      title: "Écosystème MLOps", 
      text: "Automatisation du déploiement, du versioning de modèles (DVC) et de la surveillance en production à l'aide de conteneurs Docker et de pipelines CI/CD." 
    }, 
    { 
      icon: <FaChartLine />, 
      title: "Business Intelligence", 
      text: "Traduction de données brutes complexes en indicateurs de performance clés (KPI) exploitables et dashboards interactifs pour la direction stratégique." 
    }, 
    { 
      icon: <FaGraduationCap />, 
      title: "Cursus Spécialisé", 
      text: "Formation supérieure approfondie axée sur l'ingénierie des données, l'analyse statistique avancée, les mathématiques appliquées et l'algorithmique fondamentale pour l'IA." 
    }, 
    { 
      icon: <FaGraduationCap />, 
      title: "Certifications Industries", 
      text: "Validation continue de compétences sur les technologies de pointe et les environnements cloud majeurs afin de garantir des déploiements de modèles d'apprentissage aux standards du marché." 
    }, 
  ]; 

  const certifications = [
    {
      title: "Spécialisation Deep Learning & Réseaux de Neurones",
      issuer: "DeepLearning.AI / Coursera",
      date: "2025"
    },
    {
      title: "Certification Machine Learning Engineering",
      issuer: "Google Cloud Academy",
      date: "2024"
    },
    {
      title: "Génie Informatique - Option Intelligence Artificielle",
      issuer: "Université de Kinshasa (UNIKIN)",
      date: "2023"
    }
  ];

  return ( 
    <div className="bg-slate-50 dark:bg-slate-950 pt-24 min-h-screen transition-colors duration-300"> 
      <motion.section 
        className="max-w-6xl mx-auto px-6 pb-20" 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true }} 
        variants={containerVariants} 
      > 
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start"> 
          
          {/* Colonne Gauche */} 
          <motion.div className="lg:col-span-4 flex flex-col items-center lg:sticky lg:top-28 z-10 w-full" variants={itemVariants}> 
            <div className="relative group cursor-pointer"> 
              <div className="absolute -inset-2 bg-gradient-to-tr from-blue-600 via-cyan-400 to-indigo-500 rounded-[2rem] blur-xl opacity-30 group-hover:opacity-60 transition duration-700 animate-tilt"></div> 
              <div className="relative p-1.5 bg-gradient-to-b from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-800 rounded-[2rem] shadow-2xl backdrop-blur-3xl overflow-hidden"> 
                <LazyImage src={profileImg} alt="Christian AZIPENZA" className="w-56 h-56 md:w-64 md:h-64 rounded-[1.8rem] object-cover transition-transform duration-700 group-hover:scale-105" style={{ objectPosition: 'center 10%' }} /> 
              </div> 
              <div className="absolute -bottom-3 -right-3 bg-gradient-to-r from-blue-600 to-cyan-500 p-3.5 rounded-2xl border-4 border-slate-50 dark:border-slate-950 text-white shadow-xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"> 
                <FaBrain size={20} className="animate-pulse" /> 
              </div> 
            </div> 
            
            <div className="mt-8 text-center bg-white/70 dark:bg-slate-900/40 p-6 rounded-3xl border border-slate-200/60 dark:border-slate-800/60 w-full backdrop-blur-xl shadow-xl shadow-slate-100 dark:shadow-none relative overflow-hidden group/card"> 
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/40 to-transparent"></div> 
              <h3 className="text-slate-900 dark:text-white font-black text-2xl tracking-tight uppercase font-sans"> C. AZIPENZA </h3> 
              <p className="mt-1 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-400 font-mono text-xs uppercase tracking-[0.2em] font-bold"> AI & Data Engineer </p> 
              <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800/60 flex items-center justify-center gap-2 text-slate-500 dark:text-slate-400 text-xs tracking-wide"> 
                <FaMapMarkerAlt className="text-blue-500 animate-bounce" style={{ animationDuration: '3s' }} /> 
                <span>KINSHASA, RDC</span> 
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></span> 
              </div> 
              <button className="mt-6 flex items-center justify-center gap-3 w-full py-4 bg-slate-900 dark:bg-slate-100 hover:bg-blue-600 dark:hover:bg-blue-500 text-white dark:text-slate-950 dark:hover:text-white text-xs font-bold uppercase tracking-wider rounded-2xl transition-all duration-300 shadow-lg shadow-slate-900/10 dark:shadow-none hover:-translate-y-0.5 active:translate-y-0"> 
                <FaFileDownload className="text-sm" /> 
                <span>Télécharger le CV</span> 
              </button> 
            </div> 
          </motion.div> 

          {/* Colonne Droite */} 
          <div className="lg:col-span-8"> 
            <motion.div variants={itemVariants}> 
              <h2 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-6 uppercase tracking-tight leading-none"> Vision & <br /> <span className="bg-gradient-to-r from-blue-600 to-cyan-500 text-transparent bg-clip-text">Expertise</span> </h2> 
              <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-10 text-justify font-medium"> {about || "Ingénieur passionné par l'exploitation des données et le déploiement d'intelligences artificielles sur-mesure au sein de Muamokel Agency. Mon objectif consiste à transformer des flux de données complexes en solutions prédictives et décisionnelles concrètes afin de propulser la croissance et l'innovation technologique de nos partenaires."} </p> 
            </motion.div> 
            
            {/* Grille */} 
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4"> 
              {details.map((item, index) => ( 
                <motion.div key={index} variants={itemVariants} className="p-6 bg-white dark:bg-slate-900/20 border border-slate-200 dark:border-slate-800 rounded-2xl hover:border-blue-500/50 dark:hover:border-blue-500/30 hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-all duration-300 group shadow-sm" > 
                  <div className="text-blue-600 dark:text-blue-400 text-3xl mb-4 group-hover:scale-110 transition-transform"> {item.icon} </div> 
                  <h4 className="text-slate-900 dark:text-white font-bold text-lg mb-2 uppercase tracking-tight"> {item.title} </h4> 
                  <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed"> {item.text} </p> 
                </motion.div> 
              ))} 
            </div> 

            {/* Section Certifications & Formations */}
            <div className="mt-12">
              <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-6 uppercase tracking-tight flex items-center gap-3">
                <span className="w-8 h-1 bg-blue-600 rounded-full"></span>
                Détail des Certifications 
              </h3>
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center justify-between p-5 bg-white dark:bg-slate-900/40 border border-slate-200/70 dark:border-slate-800/70 rounded-2xl hover:border-blue-500/40 transition-all duration-300 group/cert">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-blue-400 rounded-xl">
                        <FaGraduationCap size={20} />
                      </div>
                      <div>
                        <h4 className="text-slate-900 dark:text-white font-bold text-base uppercase">
                          {cert.title}
                        </h4>
                        <p className="text-slate-500 dark:text-slate-400 text-xs mt-0.5">
                          {cert.issuer}
                        </p>
                      </div>
                    </div>
                    <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-xs font-mono font-bold rounded-lg shrink-0 hidden sm:inline-block">
                      {cert.date}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.section>
      <GoogleMapsSection /> 
    </div>
  ); 
}
            
          
