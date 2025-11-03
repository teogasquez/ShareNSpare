import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import mascotImage from '../../assets/images/mascotte-removebg-preview.webp';
import '../../styles/globals.css';

// Style pour l'animation de respiration
const mascotBreathingStyle = `
  @keyframes mascotBreath {
    0%, 100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.03);
    }
  }
`;

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    // Déclencher l'animation après un court délai
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="font-sans antialiased">
      {/* Injecter le style de l'animation */}
      <style dangerouslySetInnerHTML={{ __html: mascotBreathingStyle }} />

      {/* Section principale - Hauteur ajustée pour garantir 100vh sans le footer visible */}
      <section className="min-h-[100vh] flex items-center justify-center bg-gradient-to-br from-white to-gray-50">
        <div className="container mx-auto px-6 py-16 mt-16 flex flex-col lg:flex-row items-center justify-center lg:justify-between">
          {/* Contenu textuel - ajusté pour l'espacement */}
          <div className="flex flex-col max-w-xl mb-12 lg:mb-0 z-10 lg:pr-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight tracking-tighter">
              <span className="bg-gradient-to-r from-[#00613a] to-[#00a86b] bg-clip-text text-transparent">Share</span>
              <span className="bg-gradient-to-r from-[#A8632D] to-[#D17034] bg-clip-text text-transparent">N</span>
              <span className="bg-gradient-to-r from-[#009559] to-[#00BE72] bg-clip-text text-transparent">Spare</span>
            </h1>
            
            <p className="text-2xl font-semibold text-[#D17034] mb-6 leading-relaxed">
              Do more with less.
            </p>
            
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
            Notre plateforme met en relation celles et ceux qui possèdent des biens ou des compétences inutilisés avec ceux qui en ont besoin.
            Plutôt que d’acheter du neuf, partageons et louons ce qui existe déjà : c’est plus économique, plus durable et plus intelligent.
            
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5">
              <Link 
                to="/c2c" 
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#00613a] to-[#00a86b] text-white font-semibold rounded-full hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 text-lg shadow-md"
              >
                Pour les particuliers
              </Link>
              
              <Link 
                to="/b2b" 
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-[#00613a] text-[#00613a] font-semibold rounded-full hover:bg-gradient-to-r from-[#A8632D] to-[#D17034] hover:border-[#dddddd00] hover:text-white transform hover:-translate-y-1 transition-all duration-300 text-lg"
              >
                Pour les entreprises
              </Link>
            </div>
          </div>
          
          {/* Conteneur de la mascotte - ajusté pour l'espacement */}
          <div className="relative lg:flex-1 flex justify-center items-center lg:pl-8 lg:pr-16">
            {/* Fond simplifié */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#00613a]/10 to-[#00a86b]/10 rounded-full blur-3xl transform scale-110 opacity-70"></div>
            
            {/* Mascotte avec animation d'entrée par la droite et respiration */}
            <div className="relative z-10 flex justify-center items-center w-full h-full">
              <img 
                src={mascotImage} 
                alt="Mascotte ShareNSpare" 
                className={`
                  max-w-[80%] md:max-w-md lg:max-w-md xl:max-w-lg filter drop-shadow-2xl 
                  transition-all duration-1000 ease-out
                  ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'}
                `}
                style={{
                  animation: isLoaded ? 'mascotBreath 4s ease-in-out infinite' : 'none'
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vous pouvez ajouter d'autres sections ici si nécessaire */}
    </main>
  );
};

export default Home;