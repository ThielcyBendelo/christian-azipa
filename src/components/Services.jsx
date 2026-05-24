import React, { useState } from "react"; 
import QuoteModal from "./QuoteModal"; 
import { FaBrain, FaDatabase, FaCogs, FaChartLine, FaEnvelope, FaCheck } from "react-icons/fa"; 

const services = [
  { 
    title: "Conception de Modèles IA & Deep Learning", 
    icon: <FaBrain />, 
    description: "Développement d'algorithmes intelligents sur-mesure pour automatiser vos processus décisionnels.", 
    template: "Entraînement de réseaux de neurones (Computer Vision, NLP), fine-tuning de Large Language Models (LLM) et optimisation fine des hyperparamètres.", 
    benefits: ["Précision optimisée", "Modèles sur-mesure", "Computer Vision / NLP", "Fine-Tuning LLM"], 
    price: "Sur Devis", 
    tag: "Intelligence Artificielle" 
  }, 
  { 
    title: "Data Engineering & Pipelines Big Data", 
    icon: <FaDatabase />, 
    description: "Modélisation d'architectures de données robustes pour l'ingestion de volumes massifs.", 
    template: "Création et automatisation de pipelines ETL/ELT avec Apache Airflow, structuration de bases SQL/NoSQL et intégration de bases de données vectorielles.", 
    benefits: ["Pipelines ETL fluides", "Architecture Big Data", "Bases Vectorielles", "Haute Disponibilité"], 
    price: "Sur Devis", 
    tag: "Data Engineering" 
  }, 
  { 
    title: "Industrialisation & Écosystème MLOps", 
    icon: <FaCogs />, 
    description: "Transition fluide de vos modèles de l'environnement de recherche à la production.", 
    template: "Conteneurisation via Docker/Kubernetes, versioning de datasets avec DVC, tracking d'expériences avec MLflow et déploiement d'API d'inférence via FastAPI.", 
    benefits: ["Déploiement Docker", "Tracking MLflow", "API FastAPI robustes", "CI/CD pour la Data"], 
    price: "Sur Devis", 
    tag: "MLOps & Cloud" 
  }, 
  { 
    title: "Business Intelligence & Dataviz", 
    icon: <FaChartLine />, 
    description: "Traduction de vos flux de données brutes en indicateurs stratégiques exploitables.", 
    template: "Création de dashboards analytiques interactifs sous Streamlit ou PowerBI et modélisation de statistiques prédictives pour l'aide à la décision.", 
    benefits: ["Dashboards Interactifs", "KPIs Stratégiques", "Analyses Prédictives", "Aide à la Décision"], 
    price: "Sur Devis", 
    tag: "Data Analytics" 
  }, 
]; 

export default function Services() { 
  const [modalOpen, setModalOpen] = useState(false); 
  const [selectedService, setSelectedService] = useState(""); 

  const handleQuoteClick = (title) => { 
    setSelectedService(title); 
    setModalOpen(true); 
  }; 

  return ( 
    <section id="services" className="py-24 px-6 bg-slate-50 dark:bg-slate-950 transition-colors duration-300"> 
      <div className="max-w-6xl mx-auto"> 
        
        {/* En-tête de section épuré (Bleu & Blanc) */}
        <div className="text-center mb-16"> 
          <span className="text-blue-600 dark:text-blue-400 font-mono font-bold tracking-widest uppercase text-xs">Solutions Technologiques</span> 
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mt-2 tracking-tight"> 
            CATALOGUE DE <span className="bg-gradient-to-r from-blue-600 to-cyan-500 text-transparent bg-clip-text">SERVICES</span> 
          </h2> 
          <div className="h-1 w-20 bg-blue-600 mx-auto mt-4 mb-6 rounded-full"></div> 
        </div> 

        {/* Grille des services */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8"> 
          {services.map((service, idx) => ( 
            <div 
              key={idx} 
              className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-8 shadow-sm dark:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 flex flex-col group" 
            > 
              <div className="flex justify-between items-start mb-6"> 
                {/* Icône enveloppée dans un bloc bleu épuré */}
                <div className="text-4xl text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/40 p-4 rounded-xl group-hover:scale-110 transition-transform"> 
                  {service.icon} 
                </div> 
                <span className="text-[10px] font-bold bg-slate-100 dark:bg-slate-800 text-slate-500 px-3 py-1 rounded-full uppercase tracking-widest"> 
                  {service.tag} 
                </span> 
              </div> 

              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3"> 
                {service.title} 
              </h3> 
              
              <p className="text-slate-500 dark:text-slate-400 text-sm mb-6 leading-relaxed"> 
                {service.description} 
              </p> 

              {/* Encadré d'ingénierie */}
              <div className="bg-slate-50 dark:bg-slate-950 p-4 rounded-xl mb-6 border-l-4 border-blue-500 transition-colors"> 
                <span className="text-[10px] text-blue-600 dark:text-blue-400 font-black uppercase mb-1 block">Protocole de développement</span> 
                <p className="text-xs text-slate-600 dark:text-slate-400 italic leading-relaxed">{service.template}</p> 
              </div> 

              {/* Avantages clés */}
              <div className="grid grid-cols-2 gap-3 mb-8"> 
                {service.benefits.map((b, i) => ( 
                  <div key={i} className="flex items-center gap-2 text-xs font-semibold text-slate-700 dark:text-slate-300"> 
                    <FaCheck className="text-emerald-500 text-sm flex-shrink-0" /> 
                    {b} 
                  </div> 
                ))} 
              </div> 

              {/* Boutons d'action mis à niveau */}
              <div className="flex flex-col sm:flex-row gap-3 mt-auto"> 
                <button 
                  onClick={() => handleQuoteClick(service.title)} 
                  className="flex-1 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all shadow-md shadow-blue-500/10 hover:shadow-blue-500/20 active:scale-98 text-sm" 
                > 
                  Demander un devis 
                </button> 
                <a 
                  href={`mailto:christian.azipenza@://gmail.com de service : ${service.title}`} 
                  className="flex items-center justify-center gap-2 px-6 py-3.5 border-2 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 rounded-xl font-bold hover:border-blue-600 hover:text-blue-600 dark:hover:border-blue-400 dark:hover:border-blue-400 transition-all" 
                  aria-label="Contacter par email"
                > 
                  <FaEnvelope /> 
                </a> 
              </div> 
            </div> 
          ))} 
        </div> 

        {/* Modal de demande de devis */}
        <QuoteModal isOpen={modalOpen} onClose={() => setModalOpen(false)} defaultService={selectedService} /> 
      </div> 
    </section> 
  ); 
}
