import { useState, useEffect } from 'react';
import { init, send } from '@emailjs/browser';
import { FaEnvelope, FaLinkedin, FaGithub, FaInstagram, FaFacebook, FaPaperPlane, FaBrain, FaRobot } from 'react-icons/fa'; 
import { contact } from '../assets/assets.js';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import notificationService from '../services/notificationService';
import analyticsService from '../services/analyticsService';
import messagingService from '../dashboard/services/messagingService';

const contactIcons = {
  Email: FaEnvelope,
  LinkedIn: FaLinkedin,
  GitHub: FaGithub,
  Instagram: FaInstagram,
  Facebook: FaFacebook,
};

export default function Contact() {
  const [elementRef, isVisible] = useIntersectionObserver();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ type: '', message: '' });

  const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || '';
  const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '';
  const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '';

  useEffect(() => {
    if (EMAILJS_PUBLIC_KEY) init(EMAILJS_PUBLIC_KEY);
  }, [EMAILJS_PUBLIC_KEY]);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: 'loading', message: 'Transmission en cours...' });
    analyticsService.trackEvent('contact_form_submit', { category: 'contact' });
    
    const loadingToast = notificationService.loading('Envoi de votre demande de projet...');

    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      window.location.href = `mailto:christian.azipenza@://gmail.com IA - ${formData.name}&body=${formData.message}`;
      notificationService.dismiss(loadingToast);
      notificationService.success('Client mail ouvert !');
      return;
    }

    try {
      const templateParams = {
        from_name: formData.name,
        to_reply: formData.email,
        message: formData.message,
        to_email: 'christian.azipenza@gmail.com'
      };
      
      await send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams);
      
      await messagingService.addMessage({ 
        ...formData, 
        source: 'contact_form', 
        timestamp: new Date().toISOString() 
      });

      notificationService.dismiss(loadingToast);
      notificationService.formSuccess('Message transmis avec succès !');
      setStatus({ type: 'success', message: 'Message envoyé.' });
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      notificationService.dismiss(loadingToast);
      notificationService.error('Erreur de transmission.');
      setStatus({ type: 'error', message: 'Erreur.' });
    }
  };

  return (
    <section ref={elementRef} className="py-24 px-6 bg-slate-50 dark:bg-slate-950 min-h-screen transition-colors duration-300">
      <div className={`max-w-6xl mx-auto transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4 text-blue-600 dark:text-blue-400">
            <FaBrain size={32} className="animate-pulse" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            CONTACT & <span className="bg-gradient-to-r from-blue-600 to-cyan-500 text-transparent bg-clip-text">COLLABORATION</span>
          </h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto mt-4 mb-6 rounded-full"></div>
          <p className="text-slate-600 dark:text-slate-400 max-w-md mx-auto text-base">
            Planifions ensemble l'architecture et le déploiement de vos futures solutions d'intelligence artificielle.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          
          <form onSubmit={handleSubmit} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 rounded-3xl shadow-sm dark:shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-cyan-500"></div>
            <div className="space-y-6">
              
              <div>
                <label className="text-[10px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider ml-1">Identité</label>
                <input name="name" type="text" required value={formData.name} onChange={handleChange} className="w-full mt-1 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 text-slate-900 dark:text-white focus:border-blue-600 dark:focus:border-blue-500 outline-none transition-all text-sm" placeholder="Nom complet ou Organisation" />
              </div>
              
              <div>
                <label className="text-[10px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider ml-1">Adresse Email</label>
                <input name="email" type="email" required value={formData.email} onChange={handleChange} className="w-full mt-1 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 text-slate-900 dark:text-white focus:border-blue-600 dark:focus:border-blue-500 outline-none transition-all text-sm" placeholder="votre@entreprise.com" />
              </div>
              
              <div>
                <label className="text-[10px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider ml-1">Détails du projet ou cas d'usage</label>
                <textarea name="message" required rows="5" value={formData.message} onChange={handleChange} className="w-full mt-1 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 text-slate-900 dark:text-white focus:border-blue-600 dark:focus:border-blue-500 outline-none transition-all resize-none text-sm" placeholder="Décrivez vos jeux de données, vos besoins algorithmiques ou vos objectifs métiers..." />
              </div>
              
              <button type="submit" className="w-full py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold uppercase text-xs tracking-widest rounded-xl shadow-md flex items-center justify-center gap-3 transition-all hover:scale-[1.01] active:scale-98 shadow-blue-500/10">
                <FaPaperPlane /> {status.type === 'loading' ? 'Initialisation...' : 'Initier le contact'}
              </button>

            </div>
          </form>

          <div className="space-y-6">
            <div className="p-8 bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                <FaRobot className="text-blue-600 dark:text-blue-400" /> Canaux Directs
              </h3>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {contact.map((item) => {
                  const Icon = contactIcons[item.label];
                  if (!Icon) return null;
                  return (
                    <a 
                      key={item.label} 
                      href={item.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex flex-col items-center gap-2 p-4 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-2xl hover:border-blue-500 hover:text-blue-600 dark:hover:border-blue-400 dark:hover:text-blue-400 transition-all text-slate-500 dark:text-slate-400 group text-center"
                    >
                      <Icon size={22} className="group-hover:scale-110 transition-transform" />
                      <span className="text-[10px] font-bold uppercase tracking-wider">{item.label}</span>
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="p-8 bg-blue-50/50 dark:bg-blue-950/10 border border-blue-100 dark:border-blue-900/20 rounded-3xl shadow-inner">
              <p className="text-slate-600 dark:text-slate-400 text-sm italic leading-relaxed text-justify">
                "Chaque demande fait l'objet d'un examen attentif de faisabilité technique par notre pôle technique. Nous garantissons un retour d'analyse et de cadrage sous 48h ouvrées pour l'évaluation de vos pipelines de données."
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
