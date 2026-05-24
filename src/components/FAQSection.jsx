import React from "react";
import { FaChevronDown, FaBrain } from "react-icons/fa"; // Remplacement par une icône axée IA

const faqs = [
  {
    question: "Quels types de solutions en IA et Data Science développez-vous ?",
    answer: "Je conçois des modèles prédictifs personnalisés, des algorithmes de Deep Learning (vision par ordinateur, NLP), des pipelines d'ingestion Big Data et des systèmes d'automatisation intelligente intégrés à vos outils métiers.",
  },
  {
    question: "Comment garantissez-vous la fiabilité et la précision de vos modèles ?",
    answer: "Chaque modèle suit un cycle MLOps rigoureux : validation croisée sur les données d'entraînement, optimisation des hyperparamètres, et suivi minutieux des métriques clés (Précision, Rappel, F1-Score) avant et après le déploiement.",
  },
  {
    question: "Quelle est votre approche concernant la confidentialité des données ?",
    answer: "La sécurité des données est au cœur de ma démarche. J'applique des protocoles stricts d'anonymisation, de chiffrement à la source, et je veille à la conformité totale avec les réglementations de protection des données (RGPD) lors des phases de traitement.",
  },
  {
    question: "Pouvez-vous intégrer des modèles d'IA sur des infrastructures existantes ?",
    answer: "Absolument. Grâce à la conteneurisation avec Docker et à l'utilisation d'API REST/GraphQL robustes, j'intègre de manière transparente des solutions d'intelligence artificielle dans vos architectures Cloud ou serveurs locaux actuels.",
  },
];

function FAQSection() {
  return (
    <section className="py-24 px-4 bg-slate-50 dark:bg-slate-950 transition-colors duration-300" id="faq">
      <div className="max-w-4xl mx-auto">
        
        {/* En-tête de section épuré (Bleu & Blanc) */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
            FOIRE AUX <span className="bg-gradient-to-r from-blue-600 to-cyan-500 text-transparent bg-clip-text">QUESTIONS</span>
          </h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto mt-4 mb-6 rounded-full"></div>
          <p className="text-slate-600 dark:text-slate-400 text-base md:text-lg max-w-xl mx-auto">
            Réponses techniques sur la conception, l'entraînement et le déploiement de vos projets Data.
          </p>
        </div>

        {/* Liste des FAQ avec effet moderne et adouci */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <details 
              key={idx} 
              className="group border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 rounded-2xl overflow-hidden transition-all duration-300 open:ring-2 open:ring-blue-500/20 open:bg-white dark:open:bg-slate-900 shadow-sm"
            >
              <summary className="flex items-center justify-between p-6 cursor-pointer list-none select-none">
                <div className="flex items-center gap-4">
                  <FaBrain className="text-blue-600 text-lg opacity-80 group-open:opacity-100 group-open:scale-110 transition-transform" />
                  <span className="font-semibold text-slate-800 dark:text-slate-200 text-base md:text-lg group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {faq.question}
                  </span>
                </div>
                <div className="p-1 rounded-lg bg-slate-100 dark:bg-slate-800 group-hover:bg-blue-50 dark:group-hover:bg-blue-950/50 transition-colors">
                  <FaChevronDown className="text-slate-500 dark:text-slate-400 group-open:rotate-180 transition-transform duration-300 text-sm" />
                </div>
              </summary>
              
              <div className="px-6 pb-6 ml-10">
                <div className="h-[1px] bg-slate-100 dark:bg-slate-800 mb-4 w-full"></div>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm md:text-base">
                  {faq.answer}
                </p>
              </div>
            </details>
          ))}
        </div>

      </div>
    </section>
  );
}

export default FAQSection;
