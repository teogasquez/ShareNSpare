import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const languages = [
  { code: 'fr', name: 'Français' },
  { code: 'de', name: 'Deutsch' },
  { code: 'it', name: 'Italiano' },
];

const Header = () => {
  const [currentLang, setCurrentLang] = useState('fr');
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    // Détecter la langue du navigateur
    const userLang = navigator.language.split('-')[0];
    if (languages.some(lang => lang.code === userLang)) {
      setCurrentLang(userLang);
    }
    
    // Gérer le scroll pour changer l'apparence du header
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Déterminer si le header doit être coloré
      if (currentScrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      
      // Masquer le header lors du défilement vers le bas
      // Afficher le header lors du défilement vers le haut
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      
      setLastScrollY(currentScrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 px-5 py-5 transition-all duration-400 
      ${scrolled ? 'bg-white/98 shadow-md py-3' : 'bg-white/85 backdrop-blur-md'}
      ${hidden ? '-translate-y-full' : 'translate-y-0'}`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="z-10 no-underline">
          <h1 className="text-xl font-extrabold text-[#00613a] relative px-4 py-1 transition-all duration-300">
            ShareNSpare
            <span className="absolute bottom-[-2px] left-4 w-10 h-[3px] bg-[#00613a] rounded transition-all duration-300"></span>
          </h1>
        </Link>

        <div className="flex items-center gap-4">
          <nav className={`hidden md:flex items-center gap-4`}>
            <ul className="flex gap-7 m-0 p-0 items-center h-full list-none">
              <li>
                <Link to="/about" className="text-gray-700 font-medium relative px-2 py-2 transition-all duration-300 hover:text-[#00613a]">
                  À propos
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-700 font-medium relative px-2 py-2 transition-all duration-300 hover:text-[#00613a]">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-700 font-medium relative px-2 py-2 transition-all duration-300 hover:text-[#00613a]">
                  Contact
                </Link>
              </li>
            </ul>
            
            <div className="bg-[rgba(0,97,58,0.08)] rounded-full px-5 py-1.5 flex items-center shadow-md h-11 overflow-hidden relative transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg">
              <Link to="/download" className="text-[#00613a] font-semibold flex items-center relative z-10">
                <span className="mr-2">Télécharger l'app</span>
                <i className="fas fa-download text-lg"></i>
              </Link>
            </div>
            
            <div className="bg-[#00613a] rounded-full px-5 py-1.5 flex items-center shadow-md h-11 relative overflow-hidden transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg">
              <select 
                className="bg-transparent border-0 text-white font-semibold px-3 py-2 cursor-pointer outline-none appearance-none pr-6 relative z-10"
                value={currentLang}
                onChange={(e) => setCurrentLang(e.target.value)}
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='5' viewBox='0 0 10 5'%3E%3Cpath fill='white' d='M0 0l5 5 5-5z'/%3E%3C/svg%3E")`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'right 0.5rem center',
                }}
              >
                {languages.map(lang => (
                  <option key={lang.code} value={lang.code}>
                    {lang.name}
                  </option>
                ))}
              </select>
            </div>
          </nav>
          
          <button 
            className="md:hidden flex items-center justify-center bg-[#00613a] text-white border-0 text-lg cursor-pointer w-11 h-11 rounded-full shadow-md transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg"
            aria-label="Menu"
            onClick={toggleMobileMenu}
          >
            <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </button>
        </div>
      </div>
      
      {/* Menu mobile */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-white z-40 pt-20 px-5">
          <nav className="flex flex-col gap-6">
            <ul className="flex flex-col gap-5 m-0 p-0 list-none">
              <li>
                <Link 
                  to="/about" 
                  className="text-gray-700 font-medium text-lg block py-2 hover:text-[#00613a]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  À propos
                </Link>
              </li>
              <li>
                <Link 
                  to="/faq" 
                  className="text-gray-700 font-medium text-lg block py-2 hover:text-[#00613a]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="text-gray-700 font-medium text-lg block py-2 hover:text-[#00613a]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </Link>
              </li>
            </ul>
            
            <div className="flex flex-col gap-4">
              <Link 
                to="/download" 
                className="bg-[rgba(0,97,58,0.08)] text-[#00613a] font-semibold py-3 px-5 rounded-full flex items-center justify-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="mr-2">Télécharger l'app</span>
                <i className="fas fa-download"></i>
              </Link>
              
              <div className="bg-[#00613a] rounded-full p-2 flex items-center justify-center">
                <select 
                  className="bg-transparent border-0 text-white font-semibold p-2 cursor-pointer outline-none appearance-none w-full text-center"
                  value={currentLang}
                  onChange={(e) => setCurrentLang(e.target.value)}
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