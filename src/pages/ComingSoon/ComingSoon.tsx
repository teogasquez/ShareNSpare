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
      <section className="min-h-screen flex items-center justify-center bg-white">
        <div className="container mx-auto px-6 py-16 text-center">
          <div className={`transform transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="max-w-3xl mx-auto">
              {/* Indicateur de page en construction */}
              <div className="inline-flex items-center justify-center w-20 h-20 bg-[#00613a]/10 rounded-full mb-8">
                <i className="fas fa-tools text-[#00613a] text-3xl"></i>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-8 text-gray-800">
                Cette page est en <span className="bg-gradient-to-r from-[#00613a] to-[#00a86b] bg-clip-text text-transparent">cours de création</span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-10">
                Notre équipe travaille actuellement sur cette fonctionnalité pour vous offrir la meilleure expérience possible. 
                Nous vous invitons à revenir bientôt pour découvrir les nouveautés de Share N Spare.
              </p>
              
              {/* Formulaire de notification */}
              <div className="max-w-md mx-auto bg-gray-50 rounded-xl shadow-sm p-6 mb-12">
                <h3 className="text-lg font-semibold mb-4 text-gray-700">
                  Soyez informé(e) du lancement
                </h3>
                <p className="text-gray-600 mb-4">
                  Laissez-nous votre email et nous vous préviendrons dès que cette fonctionnalité sera disponible.
                </p>
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
                  <input 
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Votre adresse e-mail"
                    className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[#00613a] focus:ring-2 focus:ring-[#00613a]/20"
                    required
                  />
                  <button 
                    type="submit"
                    className="bg-[#00613a] hover:bg-[#005131] text-white font-medium px-6 py-3 rounded-lg transition-colors"
                  >
                    M'avertir
                  </button>
                </form>
              </div>
              
              {/* Boutons de navigation */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  to="/"
                  className="inline-flex items-center gap-2 text-[#00613a] font-medium hover:text-[#005131] transition-colors"
                >
                  <i className="fas fa-arrow-left"></i>
                  <span>Retour à l'accueil</span>
                </Link>
                
                <span className="hidden sm:inline text-gray-300">|</span>
                
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-[#00613a] font-medium hover:text-[#005131] transition-colors"
                >
                  <span>En savoir plus sur Share N Spare</span>
                  <i className="fas fa-arrow-right"></i>
                </Link>
              </div>
              
              {/* Illustration */}
              <div className="mt-16">
                <img 
                  src="/src/assets/images/mascotte-removebg-preview.webp" 
                  alt="Mascotte Share N Spare" 
                  className="h-40 mx-auto opacity-70"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ComingSoon;
