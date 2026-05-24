import React from 'react';
import { motion } from 'framer-motion';
import { FaBrain, FaDatabase, FaCogs, FaChartBar, FaRobot } from 'react-icons/fa';

const skillCategories = [
  {
    title: "Intelligence Artificielle & DL",
    icon: <FaBrain className="text-blue-600 dark:text-blue-400" />,
    skills: [
      { name: "Architectures Deep Learning (PyTorch, TensorFlow)", level: 85 },
      { name: "Computer Vision & Traitement d'Image", level: 80 },
      { name: "Natural Language Processing (NLP)", level: 75 },
      { name: "Large Language Models & Fine-Tuning", level: 70 }
    ]
  },
  {
    title: "Data Engineering & Big Data",
    icon: <FaDatabase className="text-cyan-500" />,
    skills: [
      { name: "Conception de Pipelines ETL (Airflow)", level: 85 },
      { name: "Bases de données SQL, NoSQL & Vectorielles", level: 90 },
      { name: "Traitement de Données (Pandas, PySpark)", level: 85 },
      { name: "Data Cleaning & Feature Engineering", level: 95 }
    ]
  },
  {
    title: "Écosystème MLOps & Cloud",
    icon: <FaCogs className="text-indigo-500" />,
    skills: [
      { name: "Conteneurisation (Docker, Kubernetes)", level: 80 },
      { name: "Suivi d'Expériences (MLflow, DVC)", level: 75 },
      { name: "Déploiement d'API (FastAPI, Flask)", level: 85 },
      { name: "Pipelines CI/CD pour la Data", level: 70 }
    ]
  },
  {
    title: "Analyse & Modélisation",
    icon: <FaChartBar className="text-teal-500" />,
    skills: [
      { name: "Machine Learning Classique (Scikit-Learn)", level: 90 },
      { name: "Analyse Statistique & Dataviz", level: 85 },
      { name: "Création de Dashboards (Streamlit, PowerBI)", level: 80 },
      { name: "Développement Front-end (Vite, React)", level: 75 }
    ]
  }
];

export default function Skills() {
  return (
    <section className="bg-slate-50 dark:bg-slate-950 min-h-screen py-24 px-6 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        
        {/* Header de la page épuré */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }} 
            animate={{ opacity: 1, y: 0 }} 
            className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight"
          >
            STACK & <span className="bg-gradient-to-r from-blue-600 to-cyan-500 text-transparent bg-clip-text">COMPÉTENCES</span>
          </motion.h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto mt-4 mb-6 rounded-full"></div>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-base md:text-lg">
            Matrice des expertises techniques déployées au sein de MUAMOKEL AGENCY pour la conception, l'entraînement et l'industrialisation de vos solutions d'IA.
          </p>
        </div>

        {/* Grille de Compétences Adaptative (Bleu & Blanc) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, scale: 0.98 }} 
              whileInView={{ opacity: 1, scale: 1 }} 
              transition={{ delay: idx * 0.05 }}
              className="bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 p-8 rounded-2xl hover:border-blue-500/30 shadow-sm dark:shadow-md transition-all" 
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-slate-100 dark:bg-slate-800 rounded-xl text-xl">
                  {category.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-6">
                {category.skills.map((skill, sIdx) => (
                  <div key={sIdx}>
                    <div className="flex justify-between text-sm mb-2 font-medium">
                      <span className="text-slate-700 dark:text-slate-300 font-mono text-xs">{skill.name}</span>
                      <span className="text-blue-600 dark:text-blue-400 font-bold">{skill.level}%</span>
                    </div>
                    
                    {/* Barre de progression épurée */}
                    <div className="h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }} 
                        whileInView={{ width: `${skill.level}%` }} 
                        transition={{ duration: 1.2, ease: "easeOut" }} 
                        className="h-full bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full" 
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Section Bonus: Stack d'outils Data et Frameworks */}
        <div className="mt-20 p-8 bg-blue-50/50 dark:bg-blue-950/10 border border-blue-100 dark:border-blue-900/20 rounded-3xl text-center shadow-inner">
          <h4 className="text-blue-600 dark:text-blue-400 font-bold uppercase text-sm mb-6 flex items-center justify-center gap-2">
            <FaRobot /> FRAMEWORKS & ENVIRENNEMENTS DATA UTILIÉS
          </h4>
          <div className="flex flex-wrap justify-center gap-8 text-xs font-mono font-bold tracking-widest text-slate-400 dark:text-slate-500">
            <span className="hover:text-blue-600 transition-colors">PYTHON</span>
            <span className="hover:text-blue-600 transition-colors">PYTORCH</span>
            <span className="hover:text-blue-600 transition-colors">SCIKIT-LEARN</span>
            <span className="hover:text-blue-600 transition-colors">FASTAPI</span>
            <span className="hover:text-blue-600 transition-colors">DOCKER</span>
            <span className="hover:text-blue-600 transition-colors">MLFLOW</span>
          </div>
        </div>

      </div>
    </section>
  );
}
