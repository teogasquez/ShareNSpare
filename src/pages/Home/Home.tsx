import { Link } from 'react-router-dom';
import mascotImage from '../../assets/images/mascotte-removebg-preview.webp';
import '../../styles/globals.css';

const Home = () => {
  return (
    <main className="pt-16 font-sans antialiased">
      <section className="min-h-screen flex items-center bg-gradient-to-br from-white to-gray-50">
        <div className="container mx-auto px-6 py-16 flex flex-col lg:flex-row items-center justify-between">
          <div className="flex flex-col max-w-xl mb-12 lg:mb-0">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight tracking-tighter">
              <span className="bg-gradient-to-r from-[#00613a] to-[#00a86b] bg-clip-text text-transparent">Share</span>
              <span className="bg-gradient-to-r from-[#00613a] to-[#00a86b] bg-clip-text text-transparent"> N </span>
              <span className="bg-gradient-to-r from-[#00613a] to-[#00a86b] bg-clip-text text-transparent">Spare</span>
            </h1>
            
            <p className="text-2xl font-semibold text-gray-700 mb-6 leading-relaxed">
              Partagez, économisez, préservez
            </p>
            
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              Notre plateforme connecte les propriétaires d'objets peu utilisés
              avec ceux qui en ont besoin ponctuellement, pour un impact positif
              sur l'environnement et votre portefeuille.
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
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-[#00613a] text-[#00613a] font-semibold rounded-full hover:bg-[#00613a] hover:text-white transform hover:-translate-y-1 transition-all duration-300 text-lg"
              >
                Pour les entreprises
              </Link>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#00613a]/10 to-[#00a86b]/10 rounded-full blur-3xl transform scale-110 opacity-70"></div>
            <div className="w-64 h-64 md:w-96 md:h-96 bg-gradient-to-br from-[#00613a]/20 to-[#00a86b]/20 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 blur-2xl"></div>
            <img 
              src={mascotImage} 
              alt="Mascotte Share N Spare" 
              className="relative z-10 max-w-xs md:max-w-md lg:max-w-lg filter drop-shadow-2xl" 
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;