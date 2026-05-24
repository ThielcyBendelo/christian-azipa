import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaBrain } from "react-icons/fa"; // Remplacement de l'icône bouclier par l'icône de cerveau IA

function GoogleMapsSection() {
  return (
    <section className="py-24 px-4 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-900 transition-colors duration-300" id="localisation">
      <div className="max-w-4xl mx-auto">
        
        {/* Header de section épuré (Bleu & Blanc) */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-blue-600/10 rounded-full">
              <FaBrain className="text-blue-600 text-2xl animate-pulse" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            NOTRE <span className="bg-gradient-to-r from-blue-600 to-cyan-500 text-transparent bg-clip-text">LABORATOIRE DATA</span>
          </h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Conteneur Carte et Infos */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl overflow-hidden shadow-sm dark:shadow-2xl transition-colors">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Carte Google Maps avec filtre de couleur ajusté */}
            <div className="lg:col-span-8 h-[350px] relative">
              <iframe 
                title="Google Maps localisation" 
                src="https://www.google.com/maps?q=Avenue+Kimwenza+A%2FA25,+Kinshasa,+DR+Congo&output=embed" 
                width="100%" 
                height="100%" 
                style={{ 
                  border: 0, 
                  filter: "contrast(95%) brightness(95%)" // Suppression de l'inversion forcée pour mieux correspondre au thème clair/sombre moderne
                }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <div className="absolute inset-0 pointer-events-none border-[15px] border-slate-900/5 dark:border-slate-900/10 shadow-inner"></div>
            </div>

            {/* Infos de contact MUAMOKEL AGENCY */}
            <div className="lg:col-span-4 p-8 flex flex-col justify-center bg-slate-50 dark:bg-slate-900">
              <div className="space-y-6">
                
                <div className="flex items-start gap-4">
                  <FaMapMarkerAlt className="text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-xs font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-1">Localisation</h4>
                    <p className="text-slate-700 dark:text-slate-200 text-sm font-medium">
                      Avenue Kimwenza A/A25,<br />Kinshasa, DR Congo
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <FaPhoneAlt className="text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-xs font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-1">MUAMOKEL AGENCY</h4>
                    <p className="text-slate-700 dark:text-slate-200 text-sm font-medium">+243 814 176 800</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <FaEnvelope className="text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-xs font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-1">Contact Technique</h4>
                    <p className="text-slate-700 dark:text-slate-200 text-sm font-medium break-all">christian.azipenza@gmail.com</p>
                  </div>
                </div>

              </div>

              {/* Bouton d'itinéraire aux couleurs de la charte */}
              <button 
                onClick={() => window.open('https://www.google.com/maps?q=Avenue+Kimwenza+A%2FA25,+Kinshasa,+DR+Congo', '_blank')} 
                className="mt-8 w-full py-3.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all shadow-md shadow-blue-500/10 hover:shadow-blue-500/20"
              >
                Lancer l'itinéraire
              </button>
            </div>

          </div>
        </div>

        <p className="text-center text-slate-400 dark:text-slate-600 text-xs mt-8 font-mono italic">
          // R&D Hub — Modèles d'Intelligence Artificielle & Pipelines Big Data
        </p>

      </div>
    </section>
  );
}

export default GoogleMapsSection;
