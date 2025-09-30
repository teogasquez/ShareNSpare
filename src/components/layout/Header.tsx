import { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import mascotImage from '../../assets/images/mascotte-removebg-preview.webp';

// Navigation links simplifiés
const navItems = [
  { path: '/', label: 'Accueil' },
  { path: '/c2c#hero', label: 'Particuliers' },
  { path: '/b2b#hero', label: 'Entreprises' },
  { path: '/about', label: 'À propos' },  
  { 
    label: 'Contact',
    hasSubmenu: true,
    submenu: [
      { path: '/c2c#contact', label: 'Particuliers' }, // Section de contact dans C2C
      { path: '/b2b#contact', label: 'Entreprises' }   // Section de contact dans B2B
    ]
  }
];

// Available languages with their labels
const languages = [
  { code: 'fr', name: 'Français' },
  { code: 'en', name: 'English' },
  { code: 'de', name: 'Deutsch' },
  { code: 'it', name: 'Italiano' }
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('fr');
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const submenuTimeoutRef = useRef<number | null>(null);
  const lastScrollY = useRef(0);
  const location = useLocation();
  const navigate = useNavigate();

  // Détecter la langue du navigateur et mettre à jour la langue en fonction de la localisation
  useEffect(() => {
    // Fonction pour détecter la langue préférée de l'utilisateur
    const detectUserLanguage = () => {
      // Navigateur
      const browserLang = navigator.language.split('-')[0]; // 'fr-FR' -> 'fr'
      
      // Vérifier si la langue du navigateur est supportée
      const isSupported = languages.some(lang => lang.code === browserLang);
      
      if (isSupported) {
        return browserLang;
      }

      // Option de repli - utiliser la géolocalisation IP pour estimer le pays
      return 'fr';
    };

    const userLang = detectUserLanguage();
    setCurrentLang(userLang);
    
    localStorage.setItem('preferredLanguage', userLang);
  }, []);

  // Charger la langue depuis localStorage si disponible
  useEffect(() => {
    const savedLang = localStorage.getItem('preferredLanguage');
    if (savedLang && languages.some(lang => lang.code === savedLang)) {
      setCurrentLang(savedLang);
    }
  }, []);

  // Appliquer le changement de langue à l'ensemble de l'application
  useEffect(() => {
    document.documentElement.lang = currentLang;
    localStorage.setItem('preferredLanguage', currentLang);
  }, [currentLang]);

  // Gérer l'apparition/disparition du header lors du scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Déterminer si on a scrollé suffisamment pour modifier l'apparence
      setIsScrolled(currentScrollY > 20);
      
      // Si on est tout en haut de la page, toujours montrer le header
      if (currentScrollY <= 20) {
        setIsVisible(true);
      } 
      // Déterminer la direction du scroll
      else {
        // Scroll vers le bas = cacher, scroll vers le haut = montrer
        setIsVisible(currentScrollY < lastScrollY.current || currentScrollY <= 20);
      }
      
      // Mémoriser la position actuelle pour la prochaine comparaison
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close mobile menu on location change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  // Nettoyer les timeouts lors du démontage du composant
  useEffect(() => {
    return () => {
      if (submenuTimeoutRef.current !== null) {
        clearTimeout(submenuTimeoutRef.current);
      }
    };
  }, []);

  // Effect pour gérer le scroll vers les ancres après la navigation
  useEffect(() => {
    // Si l'URL contient une ancre, faire défiler vers cette ancre
    if (location.hash) {
      const id = location.hash.substring(1); // Enlever le # du début
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100); // Léger délai pour permettre le rendu de la page
    }
  }, [location]);

  // Fonction pour gérer le clic sur les liens avec ancres
  const handleContactClick = (path: string) => {
    const [route, hash] = path.split('#');
    
    // Si on est déjà sur la bonne page, on peut juste faire défiler vers l'ancre
    if (location.pathname === route) {
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Sinon, naviguer vers la nouvelle page avec l'ancre
      navigate(path);
    }
    
    // Fermer le sous-menu après le clic
    setActiveSubmenu(null);
  };

  // Fonction pour gérer le clic sur le bouton télécharger
  const handleDownloadClick = () => {
    // Naviguer vers la page C2C avec l'ancre countdown
    navigate('/c2c#countdown');
  };

  // Vérifie si le chemin actuel correspond à un élément du menu
  const isActiveNavItem = (item: any) => {
    if (item.path) {
      // Pour les chemins avec ancres, on vérifie si le pathname correspond
      const itemPath = item.path.split('#')[0];
      if (itemPath === '') return location.pathname === '/';
      return location.pathname === itemPath;
    }
    if (item.hasSubmenu && item.submenu) {
      return item.submenu.some((subItem: any) => {
        const pathWithoutHash = subItem.path.split('#')[0];
        return location.pathname === pathWithoutHash;
      });
    }
    return false;
  };

  // Gestion de l'affichage des sous-menus au survol avec délai
  const handleMouseEnter = (label: string) => {
    // Annule tout délai de fermeture en cours
    if (submenuTimeoutRef.current !== null) {
      clearTimeout(submenuTimeoutRef.current);
      submenuTimeoutRef.current = null;
    }
    setActiveSubmenu(label);
  };

  const handleMouseLeave = () => {
    // Ajoute un délai avant de fermer le sous-menu
    submenuTimeoutRef.current = window.setTimeout(() => {
      setActiveSubmenu(null);
    }, 300); // Délai de 300ms
  };

  // Pour le menu mobile
  const toggleSubmenu = (label: string) => {
    setActiveSubmenu(activeSubmenu === label ? null : label);
  };

  // Gérer le changement de langue
  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLang = e.target.value;
    setCurrentLang(newLang);
  };

  return (
    <header className={`fixed left-0 w-full z-50 px-5 transition-all duration-300 ${
      isVisible ? 'top-5 opacity-100' : '-top-20 opacity-0'
    }`}>
      <div className={`mx-auto max-w-7xl rounded-full transition-all duration-300 backdrop-blur-sm ${
        isScrolled ? 'bg-white/90 shadow-lg py-2' : 'bg-white/80 py-3'
      }`}>
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center relative">
            {/* Logo desktop */}
            <Link to="/" className="hidden lg:flex items-center gap-3">
              <div className="flex items-center">
                <img 
                  src={mascotImage} 
                  alt="ShareNSpare Mascotte" 
                  className="h-10 w-auto mr-2" 
                />
                <span className="text-xl font-bold text-[#00613a]">ShareNSpare</span>
              </div>
            </Link>
            
            {/* Mobile/Tablet layout */}
            <div className="lg:hidden flex w-full justify-between items-center">
              {/* Mascotte à gauche */}
              <Link to="/" className="flex items-center">
                <img 
                  src={mascotImage} 
                  alt="Share N Spare Mascotte" 
                  className="h-10 w-auto" 
                />
              </Link>
  
              {/* Logo au centre - position absolue pour centrage parfait */}
              <div className="absolute left-1/2 transform -translate-x-1/2 pointer-events-none">
                <span className="text-xl font-bold text-[#00613a]">ShareNSpare</span>
              </div>
  
              {/* Menu burger à droite */}
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-[#00613a]"
                aria-controls="mobile-menu"
                aria-expanded="false"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <span className="sr-only">Ouvrir le menu principal</span>
                {mobileMenuOpen ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
            
            {/* Desktop navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              <ul className="flex items-center gap-6">
                {navItems.map((item: any) => (
                  <li 
                    key={item.label} 
                    className="relative"
                    onMouseEnter={() => item.hasSubmenu && handleMouseEnter(item.label)}
                    onMouseLeave={handleMouseLeave}
                  >
                    {!item.hasSubmenu ? (
                      // Élément de menu standard avec lien
                      <Link
                        to={item.path}
                        className={`transition-all duration-300 font-medium ${
                          isActiveNavItem(item)
                            ? 'text-[#00613a] font-bold text-xl transform scale-110' 
                            : 'text-gray-700 hover:text-[#00613a] text-base'
                        }`}
                      >
                        {item.label}
                      </Link>
                    ) : (
                      // Élément avec sous-menu
                      <div className="cursor-pointer">
                        <span 
                          className={`transition-all duration-300 font-medium flex items-center ${
                            isActiveNavItem(item) || activeSubmenu === item.label
                              ? 'text-[#00613a] font-bold text-xl transform scale-110' 
                              : 'text-gray-700 hover:text-[#00613a] text-base'
                          }`}
                        >
                          {item.label}
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </span>
  
                        {/* Sous-menu avec ses propres événements de survol */}
                        {activeSubmenu === item.label && item.submenu && (
                          <div 
                            className="absolute top-full left-0 mt-2 bg-white/95 backdrop-blur-sm shadow-lg rounded-lg py-2 w-48 z-10"
                            onMouseEnter={() => handleMouseEnter(item.label)}
                            onMouseLeave={handleMouseLeave}
                          >
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
              
              <button 
                onClick={handleDownloadClick}
                className="bg-[rgba(0,97,58,0.08)] text-[#00613a] hover:bg-[rgba(0,97,58,0.15)] transition-colors cursor-pointer font-semibold py-3 px-5 rounded-full flex items-center"
                role="link"
                aria-label="Télécharger l'application"
              >
                <span className="mr-2">Télécharger l'app</span>
                <i className="fas fa-download"></i>
              </button>
              
              <div className="bg-[#00613a] rounded-full p-1">
                <select 
                  className="bg-transparent border-0 text-white font-semibold p-2 cursor-pointer outline-none appearance-none"
                  value={currentLang}
                  onChange={handleLanguageChange}
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
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-sm shadow-lg border-t mt-2 rounded-xl mx-5 absolute w-[calc(100%-40px)]">
          <nav className="container mx-auto px-4 py-6">
            <ul className="flex flex-col gap-4 mb-6">
              {navItems.map((item: any) => (
                <li key={item.label} className="relative">
                  {!item.hasSubmenu ? (
                    // Élément de menu standard
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
                    // Élément avec sous-menu (version mobile)
                    <div>
                      <div 
                        className={`flex justify-between items-center transition-all duration-300 py-2 ${
                          isActiveNavItem(item)
                            ? 'text-[#00613a] font-bold text-xl' 
                            : 'text-gray-700 hover:text-[#00613a] font-medium text-base'
                        }`}
                        onClick={() => toggleSubmenu(item.label)}
                      >
                        {item.label}
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          className={`h-5 w-5 transition-transform ${activeSubmenu === item.label ? 'transform rotate-180' : ''}`} 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
  
                      {/* Sous-menu mobile */}
                      {activeSubmenu === item.label && item.submenu && (
                        <div className="pl-4 mt-2 border-l-2 border-gray-200">
                          {item.submenu.map((subItem: any) => (
                            <button
                              key={subItem.path}
                              className="block w-full text-left py-2 text-gray-600 hover:text-[#00613a]"
                              onClick={() => {
                                handleContactClick(subItem.path);
                                setMobileMenuOpen(false);
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
            
            <div className="flex flex-col gap-4">
              <button 
                onClick={() => {
                  handleDownloadClick();
                  setMobileMenuOpen(false);
                }}
                className="bg-[rgba(0,97,58,0.08)] text-[#00613a] hover:bg-[rgba(0,97,58,0.15)] transition-colors cursor-pointer font-semibold py-3 px-5 rounded-full flex items-center justify-center"
                role="link"
                aria-label="Télécharger l'application"
              >
                <span className="mr-2">Télécharger l'app</span>
                <i className="fas fa-download"></i>
              </button>
              
              <div className="bg-[#00613a] rounded-full p-2 flex items-center justify-center">
                <select 
                  className="bg-transparent border-0 text-white font-semibold p-2 cursor-pointer outline-none appearance-none w-full text-center"
                  value={currentLang}
                  onChange={handleLanguageChange}
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