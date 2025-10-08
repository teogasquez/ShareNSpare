import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Contact from '../../components/layout/Contact';



const C2C = () => {
  const [activeTab, setActiveTab] = useState('rent');
  const [days, setDays] = useState(90);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const howItWorksRef = useRef(null);
  
  const testimonialsRef = useRef<HTMLDivElement>(null);
  
  
  
  // Effet pour le carousel de témoignages
  useEffect(() => {
    const container = testimonialsRef.current;
    if (!container) return;
    
    // Créer dynamiquement un élément style pour les animations
    const styleElement = document.createElement('style');
    styleElement.textContent = `
      @keyframes scrollLeft {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
      
      @keyframes scrollRight {
        0% { transform: translateX(-50%); }
        100% { transform: translateX(0); }
      }
    `;
    document.head.appendChild(styleElement);
    
    const cloneItems = () => {
      const rows = container.querySelectorAll('.testimonial-row');
      rows.forEach(row => {
        const items = Array.from(row.children);
        items.forEach(item => {
          const clone = item.cloneNode(true);
          row.appendChild(clone);
        });
      });
    };
    
    cloneItems();
    
    // Animation pour chaque ligne
    const rows = container.querySelectorAll('.testimonial-row');
    rows.forEach((row, index) => {
      const direction = index % 2 === 0 ? 'scrollLeft' : 'scrollRight';
      const duration = 40 + (index * 5);
      (row as HTMLElement).style.animation = `${direction} ${duration}s linear infinite`;
    });
    
    // Nettoyage
    return () => {
      if (styleElement.parentNode) {
        styleElement.parentNode.removeChild(styleElement);
      }
      const rows = container.querySelectorAll('.testimonial-row');
      rows.forEach(row => {
        (row as HTMLElement).style.animation = '';
      });
    };
  }, []);
  
  // Timer pour le lancement de l'application
  useEffect(() => {
    const countdownDate = new Date();
    countdownDate.setDate(countdownDate.getDate() + 90); // 3 mois
    
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate.getTime() - now;
      
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
      setDays(days);
      setHours(hours);
      setMinutes(minutes);
      setSeconds(seconds);
      
      if (distance < 0) {
        clearInterval(timer);
        setDays(0);
        setHours(0);
        setMinutes(0);
        setSeconds(0);
      }
    }, 1000);
    
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="pt-16">
      {/* Section Hero - Introduction */}
      <section id="hero" className="h-screen flex items-center justify-center">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-[#00613a] leading-tight">
              Partagez vos objets ou services, et réalisez des économies !
              </h1>
              <p className="text-xl md:text-2xl text-[#00613a]/80">
                Une nouvelle façon de consommer, plus responsable, plus économique.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <Link 
                  to="#how-it-works" 
                  className="bg-[#00613a] text-white hover:bg-[#005131] transition-colors font-semibold py-3 px-8 rounded-full flex items-center justify-center shadow-lg"
                  onClick={() => setActiveTab('rent')}
                >
                  <i className="fas fa-box mr-3"></i>
                  <span>Partager des objets</span>
                </Link>
                <Link 
                  to="#how-it-works" 
                  className="border-2 border-[#00613a] text-[#00613a] hover:bg-[rgba(0,97,58,0.08)] transition-colors font-semibold py-3 px-8 rounded-full flex items-center justify-center"
                  onClick={() => setActiveTab('offer-service')}
                >
                  <i className="fas fa-hands-helping mr-3"></i>
                  <span>Échanger des services</span>
                </Link>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <Link 
                  to="#how-it-works" 
                  className="bg-[rgba(0,97,58,0.08)] text-[#00613a] hover:bg-[rgba(0,97,58,0.15)] transition-colors cursor-pointer font-semibold py-2 px-6 rounded-full flex items-center justify-center"
                >
                  <span className="mr-2">En savoir plus</span>
                  <i className="fas fa-arrow-down"></i>
                </Link>
                
                <div className="flex items-center gap-4">
                  <span className="text-[#00613a] font-medium">Rejoindre la communauté:</span>
                  <div className="flex gap-3">
                    <a href="#" className="w-10 h-10 rounded-full bg-[#00613a] flex items-center justify-center text-white hover:bg-opacity-90 transition-all">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-[#00613a] flex items-center justify-center text-white hover:bg-opacity-90 transition-all">
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-[#00613a] flex items-center justify-center text-white hover:bg-opacity-90 transition-all">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <img 
                src="https://images.unsplash.com/photo-1591035897819-f4bdf739f446?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Partage d'objets entre particuliers"
                className="rounded-xl shadow-xl max-h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
  

{/* Section Comment ça marche - Fond vert */}
<section id="how-it-works" className="min-h-screen py-24 flex items-center justify-center bg-[#00613a] text-white" ref={howItWorksRef}>
  <div className="container mx-auto px-4 max-w-7xl">
    <div className="text-center mb-16">
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold mb-6"
      >
        Comment ça marche
      </motion.h2>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-xl max-w-2xl mx-auto text-white/90"
      >
        ShareNSpare vous permet de louer, d’emprunter ou d’échanger des objets et des services simplement et en toute sécurité !
      </motion.p>
    </div>
    
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8 md:p-10 max-w-4xl mx-auto mb-16"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 rounded-xl bg-gray-100/90 p-1.5 mb-10 shadow-inner">
        <button 
          className={`py-3 px-2 rounded-xl text-center transition-all font-medium text-sm sm:text-base ${
            activeTab === 'rent' 
              ? 'bg-[#00613a] text-white shadow-lg' 
              : 'text-gray-600 hover:bg-gray-200'
          }`}
          onClick={() => setActiveTab('rent')}
        >
          <span className="flex flex-col items-center justify-center">
            <i className="fas fa-upload text-lg mb-1"></i>
            <span>Mettre en location</span>
          </span>
        </button>
        <button 
          className={`py-3 px-2 rounded-xl text-center transition-all font-medium text-sm sm:text-base ${
            activeTab === 'borrow' 
              ? 'bg-[#00613a] text-white shadow-lg' 
              : 'text-gray-600 hover:bg-gray-200'
          }`}
          onClick={() => setActiveTab('borrow')}
        >
          <span className="flex flex-col items-center justify-center">
            <i className="fas fa-download text-lg mb-1"></i>
            <span>Louer un objet</span>
          </span>
        </button>
        <button 
          className={`py-3 px-2 rounded-xl text-center transition-all font-medium text-sm sm:text-base ${
            activeTab === 'offer-service' 
              ? 'bg-[#00613a] text-white shadow-lg' 
              : 'text-gray-600 hover:bg-gray-200'
          }`}
          onClick={() => setActiveTab('offer-service')}
        >
          <span className="flex flex-col items-center justify-center">
            <i className="fas fa-hands-helping text-lg mb-1"></i>
            <span>Proposer un service</span>
          </span>
        </button>
        <button 
          className={`py-3 px-2 rounded-xl text-center transition-all font-medium text-sm sm:text-base ${
            activeTab === 'hire-service' 
              ? 'bg-[#00613a] text-white shadow-lg' 
              : 'text-gray-600 hover:bg-gray-200'
          }`}
          onClick={() => setActiveTab('hire-service')}
        >
          <span className="flex flex-col items-center justify-center">
            <i className="fas fa-user-clock text-lg mb-1"></i>
            <span>Réserver un service</span>
          </span>
        </button>
      </div>
      
      <div className="text-gray-800">
        {activeTab === 'rent' && (
          <div className="space-y-8">
            {[1, 2, 3, 4].map((step, index) => (
              <motion.div 
                key={`rent-step-${step}`}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="flex items-start gap-6 p-4 rounded-xl hover:bg-gray-50 transition-colors"
              >
                <div className="w-14 h-14 bg-[#00613a] text-white flex items-center justify-center rounded-full shrink-0 font-bold text-xl shadow-lg">
                  {step}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-[#00613a]">
                    {step === 1 && "Ajoutez vos objets"}
                    {step === 2 && "Recevez des demandes"}
                    {step === 3 && "Échangez l'objet"}
                    {step === 4 && "Gagnez de l'argent"}
                  </h3>
                  <p className="text-gray-600">
                    {step === 1 && "Prenez une photo, décrivez l'objet et fixez un prix de location. C'est simple et rapide !"}
                    {step === 2 && "Les membres intéressés vous envoient des demandes de réservation pour les dates souhaitées."}
                    {step === 3 && "Rencontrez le locataire, vérifiez son identité via l’application et procédez à l’échange en toute tranquillité."}
                    {step === 4 && "Recevez votre paiement directement sur votre compte une fois la location terminée."}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        )}
        
        {activeTab === 'borrow' && (
          <div className="space-y-8">
            {[1, 2, 3, 4].map((step, index) => (
              <motion.div 
                key={`borrow-step-${step}`}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="flex items-start gap-6 p-4 rounded-xl hover:bg-gray-50 transition-colors"
              >
                <div className="w-14 h-14 bg-[#00613a] text-white flex items-center justify-center rounded-full shrink-0 font-bold text-xl shadow-lg">
                  {step}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-[#00613a]">
                    {step === 1 && "Trouvez l'objet dont vous avez besoin"}
                    {step === 2 && "Réservez en quelques clics"}
                    {step === 3 && "Récupérez l'objet"}
                    {step === 4 && "Profitez et restituez"}
                  </h3>
                  <p className="text-gray-600">
                    {step === 1 && "Recherchez par catégorie ou mot-clé, et filtrez les résultats par distance et disponibilité."}
                    {step === 2 && "Sélectionnez les dates et envoyez une demande de réservation au propriétaire."}
                    {step === 3 && "Rencontrez le propriétaire pour récupérer l'objet loué à l'endroit convenu."}
                    {step === 4 && "Utilisez l'objet pendant la durée convenue, puis restituez-le en bon état au propriétaire."}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        )}
        
        {activeTab === 'offer-service' && (
          <div className="space-y-8">
            {[1, 2, 3, 4].map((step, index) => (
              <motion.div 
                key={`offer-service-step-${step}`}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="flex items-start gap-6 p-4 rounded-xl hover:bg-gray-50 transition-colors"
              >
                <div className="w-14 h-14 bg-[#00613a] text-white flex items-center justify-center rounded-full shrink-0 font-bold text-xl shadow-lg">
                  {step}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-[#00613a]">
                    {step === 1 && "Proposez votre service"}
                    {step === 2 && "Recevez des demandes"}
                    {step === 3 && "Réalisez la prestation"}
                    {step === 4 && "Encaissez"}
                  </h3>
                  <p className="text-gray-600">
                    {step === 1 && "Décrivez vos compétences, fixez votre tarif et vos disponibilités. En quelques clics, votre service est en ligne !"}
                    {step === 2 && "Les membres intéressés vous contactent directement via l’application et envoient leurs demandes de réservation selon leurs besoins."}
                    {step === 3 && "Rencontrez votre client et effectuez la mission convenue."}
                    {step === 4 && "Une fois le service terminé, recevez automatiquement votre paiement sur votre compte !"}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        )}
        
        {activeTab === 'hire-service' && (
          <div className="space-y-8">
            {[1, 2, 3, 4].map((step, index) => (
              <motion.div 
                key={`hire-service-step-${step}`}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="flex items-start gap-6 p-4 rounded-xl hover:bg-gray-50 transition-colors"
              >
                <div className="w-14 h-14 bg-[#00613a] text-white flex items-center justify-center rounded-full shrink-0 font-bold text-xl shadow-lg">
                  {step}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-[#00613a]">
                    {step === 1 && "Trouvez le service qu’il vous faut"}
                    {step === 2 && "Envoyez une demande via l’application"}
                    {step === 3 && "Profitez du service"}
                    {step === 4 && "Réglez et recommencez !"}
                  </h3>
                  <p className="text-gray-600">
                    {step === 1 && "Parcourez les annonces disponibles et choisissez le service adapté à vos besoins."}
                    {step === 2 && "Sélectionnez vos dates et envoyez directement votre demande de réservation au prestataire."}
                    {step === 3 && "Rencontrez le prestataire ou bénéficiez de la prestation convenue, en toute simplicité."}
                    {step === 4 && "Le paiement est géré via l’application et n’est prélevé qu’une fois le service réalisé."}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </motion.div>
    
  </div>
</section>      
      
      
{/* Section Compteur - Fond blanc */}
<section id='countdown' className="min-h-screen flex items-center bg-white py-20">
  <div className="container mx-auto px-4 max-w-7xl">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold mb-6 text-[#00613a]">L'application sera bientôt disponible</h2>
      <p className="text-xl max-w-2xl mx-auto text-gray-600">
        Notre application mobile arrive dans très peu de temps. Inscrivez-vous pour être informé de son lancement !
      </p>
    </div>
    
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-12">
      <div className="bg-[#00613a]/10 backdrop-blur rounded-xl p-6 text-center shadow-md">
        <div className="text-5xl font-bold mb-2 text-[#00613a]">{days}</div>
        <div className="text-sm uppercase tracking-wider text-gray-600">Jours</div>
      </div>
      
      <div className="bg-[#00613a]/10 backdrop-blur rounded-xl p-6 text-center shadow-md">
        <div className="text-5xl font-bold mb-2 text-[#00613a]">{hours}</div>
        <div className="text-sm uppercase tracking-wider text-gray-600">Heures</div>
      </div>
      
      <div className="bg-[#00613a]/10 backdrop-blur rounded-xl p-6 text-center shadow-md">
        <div className="text-5xl font-bold mb-2 text-[#00613a]">{minutes}</div>
        <div className="text-sm uppercase tracking-wider text-gray-600">Minutes</div>
      </div>
      
      <div className="bg-[#00613a]/10 backdrop-blur rounded-xl p-6 text-center shadow-md">
        <div className="text-5xl font-bold mb-2 text-[#00613a]">{seconds}</div>
        <div className="text-sm uppercase tracking-wider text-gray-600">Secondes</div>
      </div>
    </div>
    
    <div className="max-w-lg mx-auto">
      <form className="flex flex-col md:flex-row gap-4">
        <input 
          type="email" 
          placeholder="Votre adresse e-mail" 
          className="flex-1 px-4 py-3 rounded-full border border-gray-300 outline-none text-gray-800 focus:border-[#00613a] focus:ring-2 focus:ring-[#00613a]/20"
        />
        <button type="submit" className="bg-[#00613a] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#005131] transition-colors">
          M'avertir
        </button>
      </form>
    </div>
  </div>
</section>

{/* Section Devenir partenaire - Fond vert */}
<section id='partner' className="min-h-screen flex items-center bg-[#00613a] py-20">
  <div className="container mx-auto px-4 max-w-7xl">
    <div className="max-w-3xl mx-auto bg-white rounded-2xl p-8 md:p-12 shadow-lg">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-[#00613a] mb-6">Devenir partenaire</h2>
        <p className="text-xl text-gray-600">
          Le projet vous intéresse ? Rejoignez l'aventure ShareNSpare et participez à la révolution de l'économie de partage.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
        <div className="bg-gray-50 rounded-xl p-6 shadow-sm">
          <h3 className="text-2xl font-bold mb-4 text-[#00613a]">Pour les entreprises</h3>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-2">
              <i className="fas fa-check-circle text-[#00613a] mt-1"></i>
              <span>Intégrez votre inventaire à notre plateforme</span>
            </li>
            <li className="flex items-start gap-2">
              <i className="fas fa-check-circle text-[#00613a] mt-1"></i>
              <span>Atteignez de nouveaux clients</span>
            </li>
            <li className="flex items-start gap-2">
              <i className="fas fa-check-circle text-[#00613a] mt-1"></i>
              <span>Optimisez l'utilisation de vos équipements</span>
            </li>
            <li className="flex items-start gap-2">
              <i className="fas fa-check-circle text-[#00613a] mt-1"></i>
              <span>Rejoignez un réseau d'entreprises engagées</span>
            </li>
          </ul>
        </div>
        
        <div className="bg-gray-50 rounded-xl p-6 shadow-sm">
          <h3 className="text-2xl font-bold mb-4 text-[#00613a]">Pour les prestataires indépendants</h3>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-2">
              <i className="fas fa-check-circle text-[#00613a] mt-1"></i>
              <span>Soyez parmi les premiers à proposer vos services via ShareNSpare</span>
            </li>
            <li className="flex items-start gap-2">
              <i className="fas fa-check-circle text-[#00613a] mt-1"></i>
              <span>Gagnez en visibilité et attirez de nouveaux clients</span>
            </li>
            <li className="flex items-start gap-2">
              <i className="fas fa-check-circle text-[#00613a] mt-1"></i>
              <span>Boostez votre activité</span>
            </li>
            <li className="flex items-start gap-2">
              <i className="fas fa-check-circle text-[#00613a] mt-1"></i>
              <span>Rejoignez une communauté d’indépendants engagés</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="text-center">
        <Link to="#contact" className="bg-[#00613a] text-white hover:bg-[#005131] transition-colors font-semibold py-3 px-8 rounded-full inline-flex items-center gap-2">
          <span>En savoir plus</span>
          <i className="fas fa-arrow-right"></i>
        </Link>
      </div>
    </div>
  </div>
</section>


{/* Section Contact - Fond blanc */}
<section id='contact' className="min-h-screen flex items-center bg-white py-20">
  <div className="container mx-auto px-4 max-w-7xl">
    <div className="max-w-5xl mx-auto bg-gray-50 rounded-2xl overflow-hidden shadow-xl">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Colonne gauche - Informations de contact */}
        <div className="p-8 md:p-12 bg-[#00613a] text-white">
          <h2 className="text-3xl font-bold mb-6">Contactez-nous</h2>
          <p className="mb-8">
            Vous avez des questions ou des suggestions ? Nous sommes à votre écoute ! 
            Remplissez ce formulaire et nous vous répondrons dans les meilleurs délais.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                <i className="fas fa-envelope"></i>
              </div>
              <div>
                <div className="font-medium text-lg">Email</div>
                <a href="mailto:contact@sharenspare.ch" className="text-white/80 hover:text-white transition-colors">
                  contact@sharenspare.ch
                </a>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div>
                <div className="font-medium text-lg">Localisation</div>
                <address className="text-white/80 not-italic">
                  Suisse
                </address>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-white/20">
              <p className="text-sm text-white/80">
                <i className="fas fa-clock mr-2"></i>
                Nous répondons généralement sous 24-48 heures
              </p>
            </div>
          </div>
        </div>
        
        {/* Colonne droite - Formulaire de contact */}
        <div className="p-8 md:p-12">
          <Contact />
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  );
};

export default C2C;