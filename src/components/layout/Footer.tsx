import { Link } from 'react-router-dom';
import { useState } from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logique pour gérer l'inscription à la newsletter
    alert(`Merci de vous être inscrit à notre newsletter avec l'adresse ${email}`);
    setEmail('');
  };

  return (
    <footer className="bg-gray-50 pt-16 pb-8 border-t border-gray-200">
      <div className="container mx-auto px-4">
        {/* Section supérieure avec logo et inscription newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-12">
          <div>
            <Link to="/" className="block mb-6">
              <img 
                src="/src/assets/images/mascotte-removebg-preview.webp" 
                alt="ShareNSpare Logo" 
                className="h-10" 
              />
            </Link>
            <p className="text-gray-600 mb-6 max-w-md">
              ShareNSpare révolutionne l'économie du partage en connectant particuliers et entreprises pour une utilisation optimale des ressources.
            </p>
            <div className="flex space-x-4">
              <Link 
                to="/coming-soon" 
                aria-label="Facebook"
                className="w-10 h-10 bg-gray-200 hover:bg-[#00613a]/20 rounded-full flex items-center justify-center text-gray-600 hover:text-[#00613a] transition-colors"
              >
                <i className="fab fa-facebook-f"></i>
              </Link>
              <Link 
                to="/coming-soon" 
                aria-label="Twitter"
                className="w-10 h-10 bg-gray-200 hover:bg-[#00613a]/20 rounded-full flex items-center justify-center text-gray-600 hover:text-[#00613a] transition-colors"
              >
                <i className="fab fa-twitter"></i>
              </Link>
              <Link 
                to="/coming-soon" 
                aria-label="Instagram"
                className="w-10 h-10 bg-gray-200 hover:bg-[#00613a]/20 rounded-full flex items-center justify-center text-gray-600 hover:text-[#00613a] transition-colors"
              >
                <i className="fab fa-instagram"></i>
              </Link>
              <Link 
                to="/coming-soon" 
                aria-label="LinkedIn"
                className="w-10 h-10 bg-gray-200 hover:bg-[#00613a]/20 rounded-full flex items-center justify-center text-gray-600 hover:text-[#00613a] transition-colors"
              >
                <i className="fab fa-linkedin-in"></i>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 text-gray-800">Restez informé</h3>
            <p className="text-gray-600 mb-4">
              Abonnez-vous à notre newsletter pour recevoir les dernières nouvelles et mises à jour.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Votre adresse e-mail"
                required
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00613a]/20 focus:border-[#00613a]"
              />
              <button
                type="submit"
                className="bg-[#00613a] text-white px-6 py-2 rounded-lg hover:bg-[#005131] transition-colors whitespace-nowrap"
              >
                S'abonner
              </button>
            </form>
          </div>
        </div>

        {/* Section principale - Plan du site structuré pour le SEO */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 border-t border-gray-200 pt-10">
          {/* Colonne 1 - Principales pages */}
          <div>
            <h4 className="text-md font-semibold mb-4 text-gray-800">Navigation</h4>
            <nav aria-label="Plan du site principal">
              <ul className="space-y-3">
                <li>
                  <Link to="/" className="text-gray-600 hover:text-[#00613a] transition-colors">
                    Accueil
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-gray-600 hover:text-[#00613a] transition-colors">
                    À propos
                  </Link>
                </li>
                <li>
                  <Link to="/c2c" className="text-gray-600 hover:text-[#00613a] transition-colors">
                    Particuliers
                  </Link>
                </li>
                <li>
                  <Link to="/b2b" className="text-gray-600 hover:text-[#00613a] transition-colors">
                    Entreprises
                  </Link>
                </li>
                <li>
                  <Link to="#" onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }} className="text-gray-600 hover:text-[#00613a] transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Colonne 2 - Services */}
          <div>
            <h4 className="text-md font-semibold mb-4 text-gray-800">Nos services</h4>
            <nav aria-label="Services">
              <ul className="space-y-3">
                <li>
                  <Link to="/C2C#hero" className="text-gray-600 hover:text-[#00613a] transition-colors">
                    Location d'équipement
                  </Link>
                </li>
                <li>
                  <Link to="/b2b#hero" className="text-gray-600 hover:text-[#00613a] transition-colors">
                    Solutions professionnelles
                  </Link>
                </li>
                <li>
                  <Link to="/C2C#countdown" className="text-gray-600 hover:text-[#00613a] transition-colors">
                    Application mobile
                  </Link>
                </li>
                <li>
                  <Link to="#partner" className="text-gray-600 hover:text-[#00613a] transition-colors">
                    Programme partenaires
                  </Link>
                </li>
                <li>
                  <Link to="#contact" className="text-gray-600 hover:text-[#00613a] transition-colors">
                    Assistance
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Colonne 3 - Ressources */}
          <div>
            <h4 className="text-md font-semibold mb-4 text-gray-800">Ressources</h4>
            <nav aria-label="Ressources">
              <ul className="space-y-3">
                <li>
                  <Link to="/coming-soon#hero" className="text-gray-600 hover:text-[#00613a] transition-colors">
                    Blog
                  </Link>
                </li>
              
                
                <li>
                  <Link to="/coming-soon#hero" className="text-gray-600 hover:text-[#00613a] transition-colors">
                    Guides d'utilisation de l'application
                  </Link>
                </li>
              
              </ul>
            </nav>
          </div>

          {/* Colonne 4 - Informations légales */}
          <div>
            <h4 className="text-md font-semibold mb-4 text-gray-800">Informations légales</h4>
            <nav aria-label="Informations légales">
              <ul className="space-y-3">
                <li>
                  <Link to="/legal#conditions" className="text-gray-600 hover:text-[#00613a] transition-colors">
                    Conditions d'utilisation
                  </Link>
                </li>
                <li>
                  <Link to="/legal#confidentialite" className="text-gray-600 hover:text-[#00613a] transition-colors">
                    Politique de confidentialité
                  </Link>
                </li>
                
                <li>
                  <Link to="/legal#mentions-legales" className="text-gray-600 hover:text-[#00613a] transition-colors">
                    Mentions légales
                  </Link>
                </li>
                
              </ul>
            </nav>
          </div>
        </div>

        {/* Section inférieure - Copyright et liens légaux importants */}
        <div className="border-t border-gray-200 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6">
              <p className="text-gray-600 text-sm">
                &copy; {currentYear} ShareNSpare. Tous droits réservés.
              </p>
              <p className="text-gray-600 text-sm">
                Siège social : Genève, Suisse
              </p>
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-sm text-gray-600 hover:text-[#00613a] transition-colors">
                Confidentialité
              </Link>
              <Link to="/terms" className="text-sm text-gray-600 hover:text-[#00613a] transition-colors">
                Conditions
              </Link>
              <Link to="/accessibility" className="text-sm text-gray-600 hover:text-[#00613a] transition-colors">
                Accessibilité
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;