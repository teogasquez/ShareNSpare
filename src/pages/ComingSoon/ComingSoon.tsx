import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ComingSoon = () => {
  const [email, setEmail] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    // Animation d'entrée
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logique pour enregistrer l'email (à remplacer par votre API)
    alert(`Merci ! Nous vous informerons à ${email} dès que cette fonctionnalité sera disponible.`);
    setEmail('');
  };

  return (
    <div className="pt-16">
      <section className="h-[calc(100vh-64px)] flex items-center justify-center bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div 
            className={`transform transition-all duration-1000 ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <div className="max-w-4xl mx-auto flex flex-col-reverse md:flex-row items-center gap-8 md:gap-10">
              {/* Partie gauche - Texte et formulaire */}
              <div className="flex-1 text-left w-full">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#00613a]/10 text-[#00613a] text-sm font-medium mb-4 sm:mb-6">
                  <span className="flex w-2 h-2 rounded-full bg-[#00613a] mr-2"></span>
                  En construction
                </div>
                
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-gray-800 leading-tight">
                  Cette fonctionnalité sera <span className="bg-gradient-to-r from-[#00613a] to-[#00a86b] bg-clip-text text-transparent">bientôt disponible</span>
                </h1>
                
                <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                  Notre équipe travaille actuellement sur cette fonctionnalité pour vous offrir une expérience optimale. 
                  Laissez-nous votre email et soyez parmi les premiers à en bénéficier.
                </p>
                
                <form onSubmit={handleSubmit} className="relative mb-6 sm:mb-10">
                  <input 
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Votre adresse e-mail"
                    className="w-full pl-4 sm:pl-5 pr-24 sm:pr-36 py-3 sm:py-4 rounded-full border border-gray-300 focus:outline-none focus:border-[#00613a] focus:ring-2 focus:ring-[#00613a]/20 shadow-sm text-sm sm:text-base"
                    required
                  />
                  <button 
                    type="submit"
                    className="absolute right-1 top-1 bg-gradient-to-r from-[#00613a] to-[#00a86b] hover:from-[#005131] hover:to-[#008c59] text-white font-medium px-3 sm:px-6 py-2 sm:py-3 rounded-full transition-all duration-300 text-sm sm:text-base"
                  >
                    M'avertir
                  </button>
                </form>
                
                <div className="flex flex-wrap items-center gap-4 sm:gap-6">
                  <Link
                    to="/"
                    className="inline-flex items-center gap-2 text-[#00613a] font-medium hover:text-[#005131] transition-colors text-sm sm:text-base"
                  >
                    <i className="fas fa-arrow-left text-xs sm:text-sm"></i>
                    <span>Accueil</span>
                  </Link>
                  
                  <Link
                    to="/about"
                    className="inline-flex items-center gap-2 text-[#00613a] font-medium hover:text-[#005131] transition-colors text-sm sm:text-base"
                  >
                    <span>À propos</span>
                    <i className="fas fa-arrow-right text-xs sm:text-sm"></i>
                  </Link>
                  
                  <span className="text-gray-400 text-xs sm:text-sm hidden sm:inline">|</span>
                  
                  
                </div>
              </div>
              
              {/* Partie droite - Illustration */}
              <div className="flex-1 flex justify-center mb-6 md:mb-0">
                <div className="relative">
                  <img 
                    src="/src/assets/images/mascotte-removebg-preview.webp" 
                    alt="Mascotte Share N Spare" 
                    className="h-40 sm:h-56 md:h-64 lg:h-72 relative z-10 drop-shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ComingSoon;