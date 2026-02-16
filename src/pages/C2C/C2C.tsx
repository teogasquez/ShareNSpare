import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Contact from '../../components/layout/Contact';
import heroImage from '../../assets/images/123456.webp';

const C2C = () => {
  
  // Gère l'onglet actif dans la section "Comment ça marche" (rent/offer/hire-service)
  const [activeTab, setActiveTab] = useState('rent');
  
  // États pour le compte à rebours (countdown) du lancement de l'app
  const [days, setDays] = useState(180);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  
  // États pour le drag scroll du carousel d'exemples
  const [isDragging, setIsDragging] = useState(false); // Indique si l'utilisateur est en train de faire glisser
  const [startX, setStartX] = useState(0); // Position X de départ du drag
  const [scrollLeft, setScrollLeft] = useState(0); // Position de scroll de départ
  

  // Référence pour scroller automatiquement vers la section "Comment ça marche"
  const howItWorksRef = useRef(null);
  
  // Référence pour le container des témoignages (carousel de témoignages)
  const testimonialsRef = useRef<HTMLDivElement>(null);
  
  // Référence pour le container scrollable du carousel d'exemples (pour le drag)
  const scrollRef = useRef<HTMLDivElement>(null);
  

  // Effet pour initialiser et animer le carousel de témoignages
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
    
    // Clone les éléments de témoignages pour créer un effet de loop infini
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
    
    // Applique l'animation à chaque ligne de témoignages
    // Les lignes paires vont vers la gauche, les impaires vers la droite
    const rows = container.querySelectorAll('.testimonial-row');
    rows.forEach((row, index) => {
      const direction = index % 2 === 0 ? 'scrollLeft' : 'scrollRight';
      const duration = 40 + (index * 5); // Durée variable pour chaque ligne
      (row as HTMLElement).style.animation = `${direction} ${duration}s linear infinite`;
    });
    
    // Nettoyage à la destruction du composant
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
  


  // COMPTE À REBOURS - DATE FIXE


  useEffect(() => {
    // ✅ DATE FIXE - Ne change jamais, même après F5
    const LAUNCH_DATE = new Date('2026-06-01T00:00:00'); // 1er juin 2026 à minuit
    
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = LAUNCH_DATE.getTime() - now;
      
      // Calcule les jours, heures, minutes et secondes restantes
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
      // Met à jour les états
      setDays(days);
      setHours(hours);
      setMinutes(minutes);
      setSeconds(seconds);
      
      // Si le compte à rebours est terminé, arrête le timer et remet tout à 0
      if (distance < 0) {
        clearInterval(timer);
        setDays(0);
        setHours(0);
        setMinutes(0);
        setSeconds(0);
      }
    }, 1000); // Met à jour toutes les secondes
    
    // Nettoyage : arrête le timer quand le composant est détruit
    return () => {
      clearInterval(timer);
    };
  }, []); // ✅ Dépendances vides = s'exécute une seule fois au montage

  /**
   * Gère le début du drag (quand l'utilisateur clique et commence à glisser)
   * Enregistre la position de départ pour calculer le déplacement
   */
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true); // Active le mode "dragging"
    setStartX(e.pageX - scrollRef.current.offsetLeft); // Position X de départ du curseur
    setScrollLeft(scrollRef.current.scrollLeft); // Position de scroll actuelle
  };

  /**
   * Gère le mouvement de la souris pendant le drag
   * Calcule le déplacement et met à jour la position de scroll
   */
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return; // Ne fait rien si pas en mode drag
    e.preventDefault(); // Empêche le comportement par défaut (sélection de texte)
    const x = e.pageX - scrollRef.current.offsetLeft; // Position actuelle du curseur
    const walk = (x - startX) * 2; // Calcule le déplacement (x2 pour un scroll plus rapide)
    scrollRef.current.scrollLeft = scrollLeft - walk; // Met à jour la position de scroll
  };

  /**
   * Gère la fin du drag (quand l'utilisateur relâche le clic)
   */
  const handleMouseUp = () => {
    setIsDragging(false); // Désactive le mode "dragging"
  };

  /**
   * Gère le cas où la souris quitte le container pendant le drag
   */
  const handleMouseLeave = () => {
    setIsDragging(false); // Désactive le mode "dragging"
  };


  return (
    <div className="pt-24 md:pt-16">
      {/* Section Hero - Introduction */}
      <section id="hero" className="min-h-screen flex items-center justify-center overflow-hidden py-12 md:py-0">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            
            {/* Colonne gauche - Texte */}
            <div className="space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#00613a] leading-tight">
              Partagez vos <span className="text-[#D17034] font-extrabold">objets</span> ou <span className="text-[#D17034] font-extrabold">services</span>, et réalisez des économies !
            </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-[#00613a]/80">
                Une nouvelle façon de consommer : plus responsable, plus économique.
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
                  className="border-2 border-[#00613a] text-[#00613a] hover:bg-[#D17034] hover:border-[#D17034] hover:text-white font-semibold py-3 px-8 rounded-full flex items-center justify-center"
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
                
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <span className="text-[#00613a] font-medium text-sm sm:text-base">Rejoindre la communauté:</span>
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
            
            {/* ========================================
                Colonne droite - Image
                ✅ CACHÉE SUR MOBILE avec "hidden lg:flex"
                ======================================== */}
            <div className="hidden lg:flex justify-center lg:justify-end">
              <img 
                src={heroImage} 
      alt="Échange entre particuliers"
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
          Comment ça <span className="text-[#D17034]">marche </span>
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
            ? 'bg-[#D17034] text-white shadow-lg' 
              : 'text-gray-600 hover:bg-[#B8714F]/30'
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
            ? 'bg-[#D17034] text-white shadow-lg' 
              : 'text-gray-600 hover:bg-[#B8714F]/30'
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
            ? 'bg-[#D17034] text-white shadow-lg' 
              : 'text-gray-600 hover:bg-[#B8714F]/30'
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
              ? 'bg-[#D17034] text-white shadow-lg'
              : 'text-gray-600 hover:bg-[#B8714F]/30'
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
                    {step === 4 && "Utilisez l'objet pendant la durée convenue, puis restituez-le en l'état au propriétaire."}
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


{/* Section Exemples - Carousel 2 lignes - 100vh */}
<section className="min-h-screen flex items-center py-12 sm:py-16 md:py-20 bg-white">
  <div className="container mx-auto px-4 max-w-7xl w-full">
    {/* Titre et description */}
    <div className="text-center mb-8 sm:mb-12">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-[#00613a]">
        Exemples de services et objets <span className='text-[#D17034]'>disponibles</span>
      </h2>
      <p className="text-base sm:text-lg md:text-xl text-[#00613a] max-w-3xl mx-auto px-4">
        De l'outillage aux services personnalisés, découvrez ce que vous pourrez louer ou proposer sur ShareNSpare
      </p>
    </div>

    {/* Container global avec scroll horizontal */}
    <div className="relative">
      {/* Gradient edges */}
      <div className="hidden sm:block absolute left-0 top-0 bottom-0 w-12 md:w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
      <div className="hidden sm:block absolute right-0 top-0 bottom-0 w-12 md:w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
      
      {/* Zone scrollable avec drag */}
      <div 
        ref={scrollRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        className={`overflow-x-auto overflow-y-hidden scrollbar-hide pb-2 select-none ${
          isDragging ? 'cursor-grabbing' : 'cursor-grab'
        }`}
      >
        <div className="flex flex-col gap-4 sm:gap-6">
          
          {/* LIGNE 1 - Défilement vers la droite */}
          <div className="flex animate-scroll-right gap-4 sm:gap-6">
            {/* Premier set ligne 1 */}
            {[
              { icon: "fa-bicycle", title: "Vélo", category: "Sport & Loisirs", price: "5 CHF/jour" },
              { icon: "fa-campground", title: "Tente de camping", category: "Camping & Nature", price: "8 CHF/jour" },
              { icon: "fa-water", title: "Paddle", category: "Sport Nautique", price: "10 CHF/jour" },
              { icon: "fa-screwdriver-wrench", title: "Montage meuble IKEA", category: "Services", price: "15 CHF/h" },
              { icon: "fa-music", title: "Cours de musique", category: "Services", price: "16 CHF/h" },
              { icon: "fa-map-location-dot", title: "Visite de la ville", category: "Services", price: "8 CHF/h" },
              { icon: "fa-hammer", title: "Perceuse", category: "Bricolage", price: "3 CHF/jour" },
              { icon: "fa-camera", title: "Appareil photo", category: "Photo & Vidéo", price: "7 CHF/jour" }
            ].map((item, index) => (
              <div
                key={`line1-set1-${index}`}
                className="flex-shrink-0 w-64 sm:w-72 md:w-80 bg-white border-2 border-gray-200 rounded-xl p-4 sm:p-6 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:border-[#00613a] pointer-events-none"
              >
                <div className="flex items-start justify-between mb-3 sm:mb-4">
                  <div className="bg-[#00613a]/5 w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center border-2 border-[#00613a]">
                    <i className={`fas ${item.icon} text-xl sm:text-2xl text-[#00613a]`}></i>
                  </div>
                  <span className="bg-[#00613a] text-white text-xs sm:text-sm font-bold px-3 py-1.5 rounded-full shadow">
                    {item.price}
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2 text-[#00613a]">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm font-medium">
                  {item.category}
                </p>
              </div>
            ))}
            
            {/* Duplicate ligne 1 */}
            {[
              { icon: "fa-bicycle", title: "Vélo", category: "Sport & Loisirs", price: "5 CHF/jour" },
              { icon: "fa-campground", title: "Tente de camping", category: "Camping & Nature", price: "8 CHF/jour" },
              { icon: "fa-water", title: "Paddle", category: "Sport Nautique", price: "12 CHF/jour" },
              { icon: "fa-screwdriver-wrench", title: "Montage meuble IKEA", category: "Services", price: "25 CHF/h" },
              { icon: "fa-music", title: "Cours de musique", category: "Services", price: "20 CHF/h" },
              { icon: "fa-map-location-dot", title: "Visite de la ville", category: "Services", price: "15 CHF/h" },
              { icon: "fa-hammer", title: "Perceuse", category: "Bricolage", price: "3 CHF/jour" },
              { icon: "fa-camera", title: "Appareil photo", category: "Photo & Vidéo", price: "18 CHF/jour" }
            ].map((item, index) => (
              <div
                key={`line1-set2-${index}`}
                className="flex-shrink-0 w-64 sm:w-72 md:w-80 bg-white border-2 border-gray-200 rounded-xl p-4 sm:p-6 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:border-[#00613a] pointer-events-none"
              >
                <div className="flex items-start justify-between mb-3 sm:mb-4">
                  <div className="bg-[#00613a]/5 w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center border-2 border-[#00613a]">
                    <i className={`fas ${item.icon} text-xl sm:text-2xl text-[#00613a]`}></i>
                  </div>
                  <span className="bg-[#00613a] text-white text-xs sm:text-sm font-bold px-3 py-1.5 rounded-full shadow">
                    {item.price}
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2 text-[#00613a]">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm font-medium">
                  {item.category}
                </p>
              </div>
            ))}
          </div>

          {/* LIGNE 2 - Défilement vers la gauche */}
          <div className="flex animate-scroll-left gap-4 sm:gap-6">
            {/* Premier set ligne 2 */}
            {[
              { icon: "fa-paintbrush", title: "Cours de peinture", category: "Services", price: "22 CHF/h" },
              { icon: "fa-skiing", title: "Équipement de ski", category: "Sport d'Hiver", price: "25 CHF/jour" },
              { icon: "fa-guitar", title: "Guitare", category: "Musique", price: "8 CHF/jour" },
              { icon: "fa-seedling", title: "Cours de jardinage", category: "Services", price: "20 CHF/h" },
              { icon: "fa-laptop", title: "Ordinateur portable", category: "Informatique", price: "15 CHF/jour" },
              { icon: "fa-tent", title: "Sac de couchage", category: "Camping", price: "4 CHF/jour" },
              { icon: "fa-car", title: "Remorque", category: "Transport", price: "20 CHF/jour" },
              { icon: "fa-wrench", title: "Boîte à outils", category: "Bricolage", price: "5 CHF/jour" }
            ].map((item, index) => (
              <div
                key={`line2-set1-${index}`}
                className="flex-shrink-0 w-64 sm:w-72 md:w-80 bg-white border-2 border-gray-200 rounded-xl p-4 sm:p-6 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:border-[#00613a] pointer-events-none"
              >
                <div className="flex items-start justify-between mb-3 sm:mb-4">
                  <div className="bg-[#00613a]/5 w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center border-2 border-[#00613a]">
                    <i className={`fas ${item.icon} text-xl sm:text-2xl text-[#00613a]`}></i>
                  </div>
                  <span className="bg-[#00613a] text-white text-xs sm:text-sm font-bold px-3 py-1.5 rounded-full shadow">
                    {item.price}
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2 text-[#00613a]">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm font-medium">
                  {item.category}
                </p>
              </div>
            ))}
            
            {/* Duplicate ligne 2 */}
            {[
              { icon: "fa-paintbrush", title: "Cours de peinture", category: "Services", price: "22 CHF/h" },
              { icon: "fa-skiing", title: "Équipement de ski", category: "Sport d'Hiver", price: "25 CHF/jour" },
              { icon: "fa-guitar", title: "Guitare", category: "Musique", price: "8 CHF/jour" },
              { icon: "fa-seedling", title: "Cours de jardinage", category: "Services", price: "20 CHF/h" },
              { icon: "fa-laptop", title: "Ordinateur portable", category: "Informatique", price: "15 CHF/jour" },
              { icon: "fa-tent", title: "Sac de couchage", category: "Camping", price: "4 CHF/jour" },
              { icon: "fa-car", title: "Remorque", category: "Transport", price: "20 CHF/jour" },
              { icon: "fa-wrench", title: "Boîte à outils", category: "Bricolage", price: "5 CHF/jour" }
            ].map((item, index) => (
              <div
                key={`line2-set2-${index}`}
                className="flex-shrink-0 w-64 sm:w-72 md:w-80 bg-white border-2 border-gray-200 rounded-xl p-4 sm:p-6 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:border-[#00613a] pointer-events-none"
              >
                <div className="flex items-start justify-between mb-3 sm:mb-4">
                  <div className="bg-[#00613a]/5 w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center border-2 border-[#00613a]">
                    <i className={`fas ${item.icon} text-xl sm:text-2xl text-[#00613a]`}></i>
                  </div>
                  <span className="bg-[#00613a] text-white text-xs sm:text-sm font-bold px-3 py-1.5 rounded-full shadow">
                    {item.price}
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2 text-[#00613a]">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm font-medium">
                  {item.category}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>

    {/* CTA */}
    <div className="text-center mt-8 sm:mt-12 px-4">
      <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-4 sm:mb-6">
        Et bien plus encore ! Des milliers d'objets et services vous attendent.
      </p>
      <Link 
        to="#countdown" 
        className="inline-flex items-center bg-[#00613a] text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-sm sm:text-base font-semibold hover:bg-[#D17034] transition-colors shadow-lg hover:shadow-xl"
      >
        <span>Découvrir l'application</span>
        <i className="fas fa-arrow-right ml-2"></i>
      </Link>
    </div>
  </div>
</section>
      
{/* Section Compteur - Fond vert */}
<section id='countdown' className="min-h-screen flex items-center bg-[#00613a] py-20">
  <div className="container mx-auto px-4 max-w-7xl">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold mb-6 text-white">L'application sera <span className="text-[#D17034]">bientôt disponible</span></h2>
      <p className="text-xl max-w-2xl mx-auto text-white/90">
        Notre application mobile arrive dans très peu de temps. Inscrivez-vous pour être informé de son lancement !
      </p>
    </div>
    
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-12">
      <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-center shadow-md border border-white/20">
        <div className="text-5xl font-bold mb-2 text-white">{days}</div>
        <div className="text-sm uppercase tracking-wider text-white/80">Jours</div>
      </div>
      
      <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-center shadow-md border border-white/20">
        <div className="text-5xl font-bold mb-2 text-white">{hours}</div>
        <div className="text-sm uppercase tracking-wider text-white/80">Heures</div>
      </div>
      
      <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-center shadow-md border border-white/20">
        <div className="text-5xl font-bold mb-2 text-white">{minutes}</div>
        <div className="text-sm uppercase tracking-wider text-white/80">Minutes</div>
      </div>
      
      <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-center shadow-md border border-white/20">
        <div className="text-5xl font-bold mb-2 text-white">{seconds}</div>
        <div className="text-sm uppercase tracking-wider text-white/80">Secondes</div>
      </div>
    </div>
    
    <div className="max-w-lg mx-auto">
      <form className="flex flex-col md:flex-row gap-4">
        <input 
          type="email" 
          placeholder="Votre adresse e-mail" 
          className="flex-1 px-4 py-3 rounded-full border-2 border-white/30 outline-none bg-white/10 text-white placeholder:text-white/60 focus:border-white focus:ring-2 focus:ring-white/20 backdrop-blur"
        />
        <button type="submit" className="bg-white text-[#00613a] font-semibold px-6 py-3 rounded-full hover:bg-[#D17034] hover:text-white transition-colors shadow-lg">
          M'avertir
        </button>
      </form>
    </div>
  </div>
</section>

{/* Section Devenir partenaire - Fond blanc */}
<section id='partner' className="min-h-screen flex items-center bg-white py-20">
  <div className="container mx-auto px-4 max-w-7xl">
    <div className="max-w-3xl mx-auto bg-gray-50 rounded-2xl p-8 md:p-12 shadow-lg">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-[#00613a] mb-6">Devenir partenaire</h2>
        <p className="text-xl text-gray-600">
          Le projet vous intéresse ? Rejoignez l'aventure ShareNSpare et participez à la révolution de l'économie de partage.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <h3 className="text-2xl font-bold mb-4 text-[#00613a]">Pour les <span className='text-[#D17034]'>particuliers</span> </h3>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-2">
              <i className="fas fa-check-circle text-[#00613a] mt-1"></i>
              <span>Partagez vos objets et savoir-faire sur la plateforme</span>
            </li>
            <li className="flex items-start gap-2">
              <i className="fas fa-check-circle text-[#00613a] mt-1"></i>
              <span>Générez un revenu complémentaire tout en aidant les autres</span>
            </li>
            <li className="flex items-start gap-2">
              <i className="fas fa-check-circle text-[#00613a] mt-1"></i>
              <span>Valorisez ce que vous possédez au lieu de le laisser dormir</span>
            </li>
            <li className="flex items-start gap-2">
              <i className="fas fa-check-circle text-[#00613a] mt-1"></i>
              <span>Faites partie d’une communauté qui partage vos valeurs</span>
            </li>
          </ul>
        </div>
        
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <h3 className="text-2xl font-bold mb-4 text-[#00613a]">Pour les <span className='text-[#D17034]'>prestataires indépendants</span></h3>
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
              <span>Rejoignez une communauté d'indépendants engagés</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="text-center">
        <Link to="#contact" className="bg-[#00613a] text-white hover:bg-[#D17034] transition-colors font-semibold py-3 px-8 rounded-full inline-flex items-center gap-2">
          <span>En savoir plus</span>
          <i className="fas fa-arrow-right"></i>
        </Link>
      </div>
    </div>
  </div>
</section>


{/* Section Contact - Fond vert */}
<section id='contact' className="min-h-screen flex items-center bg-[#00613a] py-20">
  <div className="container mx-auto px-4 max-w-7xl">
    <div className="max-w-5xl mx-auto bg-white rounded-2xl overflow-hidden shadow-2xl">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Colonne gauche - Informations de contact */}
        <div className="p-8 md:p-12 bg-gradient-to-br from-[#00613a] to-[#004d2e] text-white">
          <h2 className="text-3xl font-bold mb-6">Contactez-nous</h2>
          <p className="mb-8 text-white/90">
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
        <div className="p-8 md:p-12 bg-white">
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