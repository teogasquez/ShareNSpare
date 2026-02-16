// ========================================
// IMPORTS
// ========================================
import { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import mascotImage from '../../assets/images/mascotte-removebg-preview.webp';

// ========================================
// DONNÉES DE NAVIGATION
// ========================================

/**
 * Liste des liens de navigation principaux
 * - path: chemin de la route (peut inclure une ancre avec #)
 * - label: texte affiché dans le menu
 * - hasSubmenu: indique si l'élément possède un sous-menu
 * - submenu: tableau des éléments du sous-menu
 */
const navItems = [
  { path: '/', label: 'Accueil' },
  { path: '/c2c#hero', label: 'Particuliers' },
  //{ path: '/b2b#hero', label: 'Entreprises' },
  { path: '/festival', label: 'Festivals' }, // Au calme nouvelle petite page
  { path: '/about', label: 'À propos' },  
  { 
    label: 'Contact',
    hasSubmenu: true,
    submenu: [
      { path: '/c2c#contact', label: 'Particuliers' },
      { path: '/festival#contact', label: 'Festivals' }
    ]
  }
];

/**
 * Langues disponibles sur le site
 * - code: code ISO de la langue (fr, en, de, it)
 * - name: nom de la langue dans sa propre langue
 */
const languages = [
  { code: 'fr', name: 'Français' },
  { code: 'en', name: 'English' },
  { code: 'de', name: 'Deutsch' },
  { code: 'it', name: 'Italiano' }
];

// ========================================
// COMPOSANT HEADER
// ========================================

const Header = () => {
  // ========================================
  // STATES
  // ========================================
  
  // Indique si la page a été scrollée (pour changer l'apparence du header)
  const [isScrolled, setIsScrolled] = useState(false);
  
  // Indique si le header est visible (caché lors du scroll vers le bas)
  const [isVisible, setIsVisible] = useState(true);
  
  // Indique si le menu mobile est ouvert
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Langue actuellement sélectionnée
  const [currentLang, setCurrentLang] = useState('fr');
  
  // Sous-menu actuellement actif (null si aucun)
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  
  // ========================================
  // REFS
  // ========================================
  
  // Référence pour le délai de fermeture des sous-menus
  const submenuTimeoutRef = useRef<number | null>(null);
  
  // Mémorise la dernière position de scroll pour détecter la direction
  const lastScrollY = useRef(0);
  
  // ========================================
  // HOOKS ROUTER
  // ========================================
  
  // Récupère la location actuelle (pathname, hash, etc.)
  const location = useLocation();
  
  // Permet de naviguer programmatiquement
  const navigate = useNavigate();

  // ========================================
  // EFFECT: DÉTECTION LANGUE NAVIGATEUR
  // ========================================
  
  /**
   * Détecte automatiquement la langue préférée de l'utilisateur
   * au chargement de la page et la sauvegarde dans localStorage
   */
  useEffect(() => {
    const detectUserLanguage = () => {
      // Extrait le code langue du navigateur (ex: 'fr-FR' → 'fr')
      const browserLang = navigator.language.split('-')[0];
      
      // Vérifie si la langue est supportée par notre site
      const isSupported = languages.some(lang => lang.code === browserLang);
      
      // Si supportée, retourne la langue détectée, sinon français par défaut
      return isSupported ? browserLang : 'fr';
    };

    const userLang = detectUserLanguage();
    setCurrentLang(userLang);
    localStorage.setItem('preferredLanguage', userLang);
  }, []);

  // ========================================
  // EFFECT: CHARGEMENT LANGUE SAUVEGARDÉE
  // ========================================
  
  /**
   * Charge la langue sauvegardée dans localStorage au chargement
   * (permet de conserver la préférence entre les sessions)
   */
  useEffect(() => {
    const savedLang = localStorage.getItem('preferredLanguage');
    if (savedLang && languages.some(lang => lang.code === savedLang)) {
      setCurrentLang(savedLang);
    }
  }, []);

  // ========================================
  // EFFECT: RESET LANGUE SUR COMING SOON
  // ✅ NOUVEAU: Force le retour au Français sur /coming-soon
  // ========================================
  
  /**
   * Réinitialise automatiquement la langue à "Français" 
   * quand l'utilisateur arrive sur la page Coming Soon
   * - Évite que le sélecteur affiche une autre langue
   * - Met à jour le localStorage
   */
  useEffect(() => {
    if (location.pathname === '/coming-soon') {
      setCurrentLang('fr');
      localStorage.setItem('preferredLanguage', 'fr');
      document.documentElement.lang = 'fr';
    }
  }, [location.pathname]);

  // ========================================
  // EFFECT: APPLICATION DU CHANGEMENT DE LANGUE
  // ========================================
  
  /**
   * Applique la langue sélectionnée à l'ensemble de l'application
   * - Met à jour l'attribut lang du HTML
   * - Sauvegarde dans localStorage
   */
  useEffect(() => {
    document.documentElement.lang = currentLang;
    localStorage.setItem('preferredLanguage', currentLang);
  }, [currentLang]);

  // ========================================
  // EFFECT: GESTION DU SCROLL
  // ========================================
  
  /**
   * Gère l'apparition/disparition du header lors du scroll
   * - Header caché lors du scroll vers le bas
   * - Header visible lors du scroll vers le haut
   * - Changement d'apparence après 20px de scroll
   */
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Détermine si le style "scrollé" doit être appliqué
      setIsScrolled(currentScrollY > 20);
      
      // Si en haut de page, toujours montrer le header
      if (currentScrollY <= 20) {
        setIsVisible(true);
      } 
      // Sinon, montrer/cacher selon la direction du scroll
      else {
        setIsVisible(currentScrollY < lastScrollY.current || currentScrollY <= 20);
      }
      
      // Mémorise la position pour la prochaine comparaison
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // ========================================
  // EFFECT: FERMETURE MENU MOBILE
  // ========================================
  
  /**
   * Ferme automatiquement le menu mobile lors d'un changement de page
   */
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  // ========================================
  // EFFECT: NETTOYAGE TIMEOUTS
  // ========================================
  
  /**
   * Nettoie les timeouts lors du démontage du composant
   * (évite les fuites mémoire)
   */
  useEffect(() => {
    return () => {
      if (submenuTimeoutRef.current !== null) {
        clearTimeout(submenuTimeoutRef.current);
      }
    };
  }, []);

  // ========================================
  // EFFECT: SCROLL VERS ANCRES
  // ========================================
  
  /**
   * Fait défiler automatiquement vers l'ancre après la navigation
   * Ex: /c2c#contact → scroll vers l'élément avec id="contact"
   */
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.substring(1); // Enlève le #
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100); // Délai pour permettre le rendu
    }
  }, [location]);

  // ========================================
  // HANDLERS
  // ========================================
  
  /**
   * Gère le clic sur les liens avec ancres
   * - Si déjà sur la page : scroll uniquement
   * - Sinon : navigation puis scroll
   */
  const handleContactClick = (path: string) => {
    const [route, hash] = path.split('#');
    
    if (location.pathname === route) {
      // Déjà sur la page, juste scroller
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Naviguer vers la nouvelle page avec ancre
      navigate(path);
    }
    
    // Ferme le sous-menu après le clic
    setActiveSubmenu(null);
  };

  /**
   * Gère le clic sur le bouton "Télécharger l'app"
   * Redirige vers la section countdown de la page C2C
   */
  const handleDownloadClick = () => {
    navigate('/c2c#countdown');
  };

  /**
   * Vérifie si un élément de navigation est actif
   * (correspond au pathname actuel)
   */
  const isActiveNavItem = (item: any) => {
    if (item.path) {
      // Extrait le pathname sans l'ancre
      const itemPath = item.path.split('#')[0];
      if (itemPath === '') return location.pathname === '/';
      return location.pathname === itemPath;
    }
    if (item.hasSubmenu && item.submenu) {
      // Vérifie si un des éléments du sous-menu est actif
      return item.submenu.some((subItem: any) => {
        const pathWithoutHash = subItem.path.split('#')[0];
        return location.pathname === pathWithoutHash;
      });
    }
    return false;
  };

  /**
   * Gère l'ouverture d'un sous-menu au survol (desktop)
   * Annule tout délai de fermeture en cours
   */
  const handleMouseEnter = (label: string) => {
    if (submenuTimeoutRef.current !== null) {
      clearTimeout(submenuTimeoutRef.current);
      submenuTimeoutRef.current = null;
    }
    setActiveSubmenu(label);
  };

  /**
   * Gère la fermeture d'un sous-menu après un délai (desktop)
   * Le délai permet de garder le menu ouvert si l'utilisateur
   * déplace légèrement la souris
   */
  const handleMouseLeave = () => {
    submenuTimeoutRef.current = window.setTimeout(() => {
      setActiveSubmenu(null);
    }, 300); // Délai de 300ms
  };

  /**
   * Toggle l'ouverture/fermeture d'un sous-menu (mobile)
   */
  const toggleSubmenu = (label: string) => {
    setActiveSubmenu(activeSubmenu === label ? null : label);
  };

  /**
   * Gère le changement de langue
   * ✅ MODIFIÉ: Redirige vers /coming-soon pour toutes les langues sauf français
   * - Si Français : met à jour normalement
   * - Si autre langue : redirige vers Coming Soon (la langue sera reset à 'fr' par l'effect)
   */
  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLang = e.target.value;
    
    // Si l'utilisateur sélectionne Français
    if (newLang === 'fr') {
      setCurrentLang(newLang);
      localStorage.setItem('preferredLanguage', newLang);
    } 
    // Si l'utilisateur sélectionne une autre langue
    else {
      // Rediriger vers Coming Soon
      // (L'effect "RESET LANGUE SUR COMING SOON" remettra automatiquement la langue en français)
      navigate('/coming-soon');
    }
  };

  // ========================================
  // RENDER (voir partie suivante)
  // ========================================
  return (
    // ========================================
    // HEADER PRINCIPAL - Fixé en haut de la page
    // - Visible/caché selon le scroll (isVisible)
    // - Position fixe avec transition smooth
    // ========================================
    <header className={`fixed left-0 w-full z-50 px-5 transition-all duration-300 ${
      isVisible ? 'top-5 opacity-100' : '-top-20 opacity-0'
    }`}>
      
      {/* ========================================
    CONTAINER DU HEADER
    - Fond blanc translucide avec backdrop-blur
    - Forme arrondie (rounded-full)
    - ✅ MODIFIÉ: Shadow permanent (sorti de la condition)
    ======================================== */}
<div className={`mx-auto max-w-7xl rounded-full transition-all duration-300 backdrop-blur-sm shadow-lg ${
  isScrolled ? 'bg-white/90 py-2' : 'bg-white/80 py-3'
}`}>
  <div className="container mx-auto px-6">
    <div className="flex justify-between items-center relative">
            
            {/* ========================================
                LOGO DESKTOP
                - Visible uniquement sur écrans larges (lg:)
                - Mascotte + texte "ShareNSpare"
                ======================================== */}
            <Link to="/" className="hidden lg:flex items-center gap-3">
              <div className="flex items-center">
                <img 
                  src={mascotImage} 
                  alt="ShareNSpare Mascotte" 
                  className="h-10 w-auto mr-2" 
                />
                <div className="flex flex-col ">
                  <div className="flex ">
                      <span className="text-xl font-bold text-[#00613a]">Share</span>
                      <span className="text-xl font-bold text-[#D17034]">N</span>
                      <span className="text-xl font-bold text-[#00613a]">Spare</span>
                  </div>
                  <span className="text-[10px] text-[#D17034]/70 -mt-1 ">Do more with less</span>
                </div>
              </div>
            </Link>
            
            {/* ========================================
                LAYOUT MOBILE/TABLETTE
                - Visible uniquement sur petits écrans (< lg)
                - Structure: Mascotte | Logo centré | Burger
                ======================================== */}
            <div className="lg:hidden flex w-full justify-between items-center">
              
              {/* Mascotte à gauche */}
              <Link to="/" className="flex items-center">
                <img 
                  src={mascotImage} 
                  alt="Share N Spare Mascotte" 
                  className="h-10 w-auto" 
                />
              </Link>
  
              {/* Logo au centre - Position absolue pour centrage parfait */}
              <div className="absolute left-1/2 transform -translate-x-1/2 pointer-events-none">
                <span className="text-xl font-bold text-[#00613a]">ShareNSpare</span>
              </div>
  
              {/* Bouton menu burger à droite */}
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-[#00613a]"
                aria-controls="mobile-menu"
                aria-expanded={mobileMenuOpen}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <span className="sr-only">Ouvrir le menu principal</span>
                {/* Icône change selon l'état du menu (X ou burger) */}
                {mobileMenuOpen ? (
                  // Icône X (fermeture)
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  // Icône burger (ouverture)
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
            
            {/* ========================================
                NAVIGATION DESKTOP
                - Visible uniquement sur grands écrans (lg:)
                - Contient: liens navigation + bouton app + sélecteur langue
                ======================================== */}
            <nav className="hidden lg:flex items-center gap-8">
              
              {/* ========================================
                  LISTE DES LIENS DE NAVIGATION
                  - Map sur navItems
                  - Gestion des sous-menus au survol
                  ======================================== */}
              <ul className="flex items-center gap-6">
                {navItems.map((item: any) => (
                  <li 
                    key={item.label} 
                    className="relative"
                    // Affiche le sous-menu au survol (si hasSubmenu = true)
                    onMouseEnter={() => item.hasSubmenu && handleMouseEnter(item.label)}
                    onMouseLeave={handleMouseLeave}
                  >
                    {/* CONDITION: Si l'élément n'a PAS de sous-menu */}
                    {!item.hasSubmenu ? (
                      // Lien simple vers une page
                      <Link
                        to={item.path}
                        className={`transition-all duration-300 font-medium ${
                          isActiveNavItem(item)
                            ? 'text-[#D17034] font-bold text-xl transform scale-110' // Style actif
                            : 'text-gray-700 hover:text-[#00613a] text-base' // Style normal
                        }`}
                      >
                        {item.label}
                      </Link>
                    ) : (
                      /* CONDITION: Si l'élément A un sous-menu (ex: Contact) */
                      <div className="cursor-pointer">
                        {/* Label du menu parent avec flèche */}
                        <span 
                          className={`transition-all duration-300 font-medium flex items-center ${
                            isActiveNavItem(item) || activeSubmenu === item.label
                              ? 'text-[#00613a] font-bold text-xl transform scale-110' 
                              : 'text-gray-700 hover:text-[#00613a] text-base'
                          }`}
                        >
                          {item.label}
                          {/* Flèche vers le bas */}
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </span>
  
                        {/* ========================================
                            DROPDOWN DU SOUS-MENU
                            - Affiché uniquement si activeSubmenu correspond
                            - Conserve le sous-menu ouvert au survol
                            ======================================== */}
                        {activeSubmenu === item.label && item.submenu && (
                          <div 
                            className="absolute top-full left-0 mt-2 bg-white/95 backdrop-blur-sm shadow-lg rounded-lg py-2 w-48 z-10"
                            onMouseEnter={() => handleMouseEnter(item.label)}
                            onMouseLeave={handleMouseLeave}
                          >
                            {/* Boucle sur les éléments du sous-menu */}
                            {item.submenu.map((subItem: any) => (
                              <button
                                key={subItem.path}
                                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-[#00613a] hover:text-white transition-colors"
                                onClick={() => handleContactClick(subItem.path)}
                              >
                                {subItem.label}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                  </li>
                ))}
              </ul>
              
              {/* ========================================
                  BOUTON "TÉLÉCHARGER L'APP" (desktop)
                  - Redirige vers /c2c#countdown
                  ======================================== */}
              <button 
                onClick={handleDownloadClick}
                className="bg-[rgba(0,97,58,0.08)] text-[#00613a] hover:bg-[rgba(0,97,58,0.15)] transition-colors cursor-pointer font-semibold py-3 px-5 rounded-full flex items-center"
                role="link"
                aria-label="Télécharger l'application"
              >
                <span className="mr-2">Télécharger l'app</span>
                <i className="fas fa-download"></i>
              </button>
              
              {/* ========================================
                  SÉLECTEUR DE LANGUE (desktop)
                  ✅ MODIFIÉ: Redirige vers /coming-soon si langue ≠ fr
                  ======================================== */}
              <div className="bg-[#00613a] rounded-full p-1">
                <select 
                  className="bg-transparent border-0 text-white font-semibold p-2 cursor-pointer outline-none appearance-none"
                  value={currentLang}
                  onChange={handleLanguageChange} // ⬅️ Handler modifié avec redirection
                >
                  {languages.map(lang => (
                    <option key={lang.code} value={lang.code}>
                      {lang.name}
                    </option>
                  ))}
                </select>
              </div>
            </nav>
          </div>
        </div>
      </div>
      
      {/* ========================================
          MENU MOBILE
          - Affiché uniquement si mobileMenuOpen = true
          - Position absolue sous le header
          - Fond blanc translucide avec backdrop-blur
          ======================================== */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-sm shadow-lg border-t mt-2 rounded-xl mx-5 absolute w-[calc(100%-40px)]">
          <nav className="container mx-auto px-4 py-6">
            
            {/* ========================================
                LISTE DES LIENS DE NAVIGATION (mobile)
                - Version verticale (flex-col)
                - Gestion des sous-menus au clic
                ======================================== */}
            <ul className="flex flex-col gap-4 mb-6">
              {navItems.map((item: any) => (
                <li key={item.label} className="relative">
                  {/* CONDITION: Si l'élément n'a PAS de sous-menu */}
                  {!item.hasSubmenu ? (
                    // Lien simple qui ferme le menu au clic
                    <Link
                      to={item.path}
                      className={`block transition-all duration-300 py-2 ${
                        isActiveNavItem(item)
                          ? 'text-[#00613a] font-bold text-xl' 
                          : 'text-gray-700 hover:text-[#00613a] font-medium text-base'
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    /* CONDITION: Si l'élément A un sous-menu */
                    <div>
                      {/* En-tête du sous-menu avec flèche cliquable */}
                      <div 
                        className={`flex justify-between items-center transition-all duration-300 py-2 cursor-pointer ${
                          isActiveNavItem(item)
                            ? 'text-[#00613a] font-bold text-xl' 
                            : 'text-gray-700 hover:text-[#00613a] font-medium text-base'
                        }`}
                        onClick={() => toggleSubmenu(item.label)}
                      >
                        {item.label}
                        {/* Flèche qui tourne selon l'état (ouvert/fermé) */}
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          className={`h-5 w-5 transition-transform ${
                            activeSubmenu === item.label ? 'transform rotate-180' : ''
                          }`} 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
  
                      {/* ========================================
                          LISTE DES ÉLÉMENTS DU SOUS-MENU (mobile)
                          - Affiché uniquement si activeSubmenu correspond
                          - Indentation avec bordure à gauche
                          ======================================== */}
                      {activeSubmenu === item.label && item.submenu && (
                        <div className="pl-4 mt-2 border-l-2 border-gray-200">
                          {item.submenu.map((subItem: any) => (
                            <button
                              key={subItem.path}
                              className="block w-full text-left py-2 text-gray-600 hover:text-[#00613a] transition-colors"
                              onClick={() => {
                                handleContactClick(subItem.path);
                                setMobileMenuOpen(false); // Ferme le menu après clic
                              }}
                            >
                              {subItem.label}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </li>
              ))}
            </ul>
            
            {/* ========================================
                BOUTONS DU BAS (mobile)
                - Bouton télécharger l'app
                - Sélecteur de langue
                ======================================== */}
            <div className="flex flex-col gap-4">
              
              {/* Bouton "Télécharger l'app" (mobile) */}
              <button 
                onClick={() => {
                  handleDownloadClick();
                  setMobileMenuOpen(false); // Ferme le menu après clic
                }}
                className="bg-[rgba(0,97,58,0.08)] text-[#00613a] hover:bg-[rgba(0,97,58,0.15)] transition-colors cursor-pointer font-semibold py-3 px-5 rounded-full flex items-center justify-center"
                role="link"
                aria-label="Télécharger l'application"
              >
                <span className="mr-2">Télécharger l'app</span>
                <i className="fas fa-download"></i>
              </button>
              
              {/* ========================================
                  SÉLECTEUR DE LANGUE (mobile)
                  ✅ MODIFIÉ: Redirige vers /coming-soon si langue ≠ fr
                  ======================================== */}
              <div className="bg-[#00613a] rounded-full p-2 flex items-center justify-center">
                <select 
                  className="bg-transparent border-0 text-white font-semibold p-2 cursor-pointer outline-none appearance-none w-full text-center"
                  value={currentLang}
                  onChange={handleLanguageChange} // ⬅️ Handler modifié avec redirection
                >
                  {languages.map(lang => (
                    <option key={lang.code} value={lang.code}>
                      {lang.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;