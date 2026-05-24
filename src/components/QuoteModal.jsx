import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import emailService from '../services/emailService';
import { FaUser, FaEnvelope, FaPhone, FaBuilding, FaTools, FaClock, FaPaperPlane, FaTimes, FaBrain, FaLink } from 'react-icons/fa';

// Alignement complet avec votre catalogue de services IA
const SERVICES = [
  { value: 'Conception de Modèles IA & Deep Learning', label: 'Modèles IA & Deep Learning' },
  { value: 'Data Engineering & Pipelines Big Data', label: 'Data Engineering & Big Data' },
  { value: 'Industrialisation & Écosystème MLOps', label: 'Industrialisation & MLOps' },
  { value: 'Business Intelligence & Dataviz', label: 'Business Intelligence & Dataviz' },
];

const TIMELINES = [
  { value: 'asap', label: "Dès que possible (Lancement R&D)" },
  { value: '1-2-semaines', label: '1-2 semaines (Cadrage & Data)' },
  { value: '1-2-mois', label: '1-2 mois (Développement modèle)' },
  { value: 'flexible', label: 'Planification flexible / R&D continue' },
];

const initialState = {
  name: '',
  email: '',
  phone: '',
  company: '',
  website: '',
  projectType: '',
  timeline: '',
  message: '',
};

const QuoteModal = ({ isOpen, onClose, defaultService }) => {
  const [formData, setFormData] = useState({ ...initialState, projectType: defaultService || '' });
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (isOpen) setFormData({ ...initialState, projectType: defaultService || '' });
    setResult(null);
    setErrors({});
  }, [isOpen, defaultService]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Identité requise';
    if (!formData.email.trim() || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(formData.email)) newErrors.email = 'Email non conforme';
    if (!formData.projectType) newErrors.projectType = 'Sélectionnez un service';
    if (!formData.timeline) newErrors.timeline = 'Échéance requise';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setLoading(true);
    try {
      const res = await emailService.sendQuoteRequest(formData);
      setResult(res);
      if (res.success) setTimeout(onClose, 2500);
    } catch {
      setResult({ success: false, message: "Échec de la transmission des données de votre projet." });
    }
    setLoading(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 dark:bg-slate-950/80 backdrop-blur-sm p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={(e) => e.target === e.currentTarget && onClose()}
        >
          <motion.div 
            className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-2xl w-full max-w-xl relative overflow-hidden transition-colors duration-300"
            initial={{ scale: 0.95, y: 15 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.95, y: 15 }}
          >
            {/* Header épuré en Bleu Roi */}
            <div className="bg-blue-600 p-5 flex items-center justify-between">
              <div className="flex items-center gap-2.5 text-white">
                <FaBrain className="animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-wider">Cadrage de Projet R&D — MUAMOKEL AGENCY</span>
              </div>
              <button onClick={onClose} className="text-white/80 hover:text-white transition-colors p-1 rounded-lg hover:bg-white/10">
                <FaTimes size={18} />
              </button>
            </div>

            <div className="p-6 md:p-8 max-h-[75vh] overflow-y-auto">
              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Identité */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[10px] font-bold text-blue-600 dark:text-blue-400 uppercase ml-1">Nom / Prénom</label>
                    <div className="relative mt-1">
                      <FaUser className="absolute left-3.5 top-3.5 text-slate-400" size={14} />
                      <input name="name" type="text" required value={formData.name} onChange={handleChange} className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl pl-10 pr-4 py-3 text-slate-900 dark:text-white focus:border-blue-600 dark:focus:border-blue-500 transition-all outline-none text-sm" placeholder="Votre nom complet" />
                    </div>
                  </div>
                  <div>
                    <label className="text-[10px] font-bold text-blue-600 dark:text-blue-400 uppercase ml-1">Adresse Email</label>
                    <div className="relative mt-1">
                      <FaEnvelope className="absolute left-3.5 top-3.5 text-slate-400" size={14} />
                      <input name="email" type="email" required value={formData.email} onChange={handleChange} className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl pl-10 pr-4 py-3 text-slate-900 dark:text-white focus:border-blue-600 dark:focus:border-blue-500 transition-all outline-none text-sm" placeholder="contact@entreprise.com" />
                    </div>
                  </div>
                </div>

                {/* Téléphone & Entreprise */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[10px] font-bold text-blue-600 dark:text-blue-400 uppercase ml-1">Téléphone (Optionnel)</label>
                    <div className="relative mt-1">
                      <FaPhone className="absolute left-3.5 top-3.5 text-slate-400" size={14} />
                      <input name="phone" type="text" value={formData.phone} onChange={handleChange} className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl pl-10 pr-4 py-3 text-slate-900 dark:text-white focus:border-blue-600 dark:focus:border-blue-500 transition-all outline-none text-sm" placeholder="+243 000 000 000" />
                    </div>
                  </div>
                  <div>
                    <label className="text-[10px] font-bold text-blue-600 dark:text-blue-400 uppercase ml-1">Société / Organisation</label>
                    <div className="relative mt-1">
                      <FaBuilding className="absolute left-3.5 top-3.5 text-slate-400" size={14} />
                      <input name="company" placeholder="Nom de l'entreprise" value={formData.company} onChange={handleChange} className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl pl-10 pr-4 py-3 text-slate-900 dark:text-white focus:border-blue-600 dark:focus:border-blue-500 transition-all outline-none text-sm" />
                    </div>
                  </div>
                </div>

                {/* URL Site Web */}
                <div>
                  <label className="text-[10px] font-bold text-blue-600 dark:text-blue-400 uppercase ml-1">Lien de vos données ou Site Web (Optionnel)</label>
                  <div className="relative mt-1">
                    <FaLink className="absolute left-3.5 top-3.5 text-slate-400" size={14} />
                    <input name="website" placeholder="https://votre-site.com" value={formData.website} onChange={handleChange} className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl pl-10 pr-4 py-3 text-slate-900 dark:text-white focus:border-blue-600 dark:focus:border-blue-500 transition-all outline-none text-sm" />
                  </div>
                </div>

                {/* Sélection Service */}
                <div>
                  <label className="text-[10px] font-bold text-blue-600 dark:text-blue-400 uppercase ml-1">Solution Data souhaitée</label>
                  <div className="relative mt-1">
                    <FaTools className="absolute left-3.5 top-3.5 text-slate-400" size={14} />
                    <select name="projectType" value={formData.projectType} onChange={handleChange} className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl pl-10 pr-4 py-3 text-slate-900 dark:text-white appearance-none focus:border-blue-600 dark:focus:border-blue-500 outline-none text-sm">
                      <option value="">Sélectionner une expertise...</option>
                      {SERVICES.map(s => <option key={s.value} value={s.value}>{s.label}</option>)}
                    </select>
                  </div>
                </div>

                {/* Échéance */}
                <div>
                  <label className="text-[10px] font-bold text-blue-600 dark:text-blue-400 uppercase ml-1">Échéance de déploiement</label>
                  <div className="relative mt-1">
                    <FaClock className="absolute left-3.5 top-3.5 text-slate-400" size={14} />
                    <select name="timeline" value={formData.timeline} onChange={handleChange} className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl pl-10 pr-4 py-3 text-slate-900 dark:text-white appearance-none focus:border-blue-600 dark:focus:border-blue-500 outline-none text-sm">
                      <option value="">Sélectionner un calendrier...</option>
                      {TIMELINES.map(t => <option key={t.value} value={t.value}>{t.label}</option>)}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="text-[10px] font-bold text-blue-600 dark:text-blue-400 uppercase ml-1">Description des besoins / Spécifications techniques</label>
                  <textarea name="message" rows="3" placeholder="Décrivez les objectifs de votre projet, le volume ou la nature des données à traiter..." value={formData.message} onChange={handleChange} className="w-full mt-1 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl p-4 text-slate-900 dark:text-white focus:border-blue-600 dark:focus:border-blue-500 transition-all outline-none resize-none text-sm" />
                </div>

                {/* Messages de validation d'envoi */}
                {result && (
                  <div className={`p-3 rounded-xl text-center text-sm font-semibold ${result.success ? 'bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600' : 'bg-rose-50 dark:bg-rose-900/20 text-rose-600'}`}>
                    {result.message}
                  </div>
                )}

                {/* Bouton de soumission */}
                <button type="submit" disabled={loading} className="w-full py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold uppercase text-xs tracking-wider rounded-xl transition-all flex items-center justify-center gap-3 disabled:opacity-50 shadow-md shadow-blue-500/10">
                  {loading ? "Calcul du pipeline en cours..." : <><FaPaperPlane /> Soumettre mon projet</>}
                </button>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default QuoteModal;
