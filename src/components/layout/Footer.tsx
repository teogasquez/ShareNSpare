import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-100 py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
        <div>
          <h2 className="text-xl font-bold text-[#00613a] mb-4">Share N Spare</h2>
          <p className="text-gray-600 mb-4">
            Louez, prêtez, et partagez vos objets pour un avenir plus durable.
          </p>
          <div className="flex items-center space-x-2">
            <img 
              src="/img/swiss-made.png" 
              alt="Swiss Made" 
              className="h-6"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
            <span className="text-sm font-medium text-gray-700">Made in Switzerland</span>
          </div>
        </div>
        
        <div>
          <h3 className="font-semibold text-gray-800 mb-4">Navigation</h3>
          <ul className="space-y-2">
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
              <Link to="/faq" className="text-gray-600 hover:text-[#00613a] transition-colors">
                FAQ
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-gray-600 hover:text-[#00613a] transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        
        <div>
          <h3 className="font-semibold text-gray-800 mb-4">Nos services</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/c2c" className="text-gray-600 hover:text-[#00613a] transition-colors">
                Pour les particuliers
              </Link>
            </li>
            <li>
              <Link to="/b2b" className="text-gray-600 hover:text-[#00613a] transition-colors">
                Pour les entreprises
              </Link>
            </li>
            <li>
              <Link to="/download" className="text-gray-600 hover:text-[#00613a] transition-colors">
                Télécharger l'application
              </Link>
            </li>
          </ul>
        </div>
        
        <div>
          <h3 className="font-semibold text-gray-800 mb-4">Contact</h3>
          <p className="text-gray-600 mb-4">info@sharenspare.ch</p>
          <div className="flex space-x-4">
            <a 
              href="#" 
              aria-label="Facebook"
              className="w-10 h-10 bg-[#00613a] text-white flex items-center justify-center rounded-full hover:bg-[#008c54] transition-colors"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a 
              href="#" 
              aria-label="Instagram"
              className="w-10 h-10 bg-[#00613a] text-white flex items-center justify-center rounded-full hover:bg-[#008c54] transition-colors"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a 
              href="#" 
              aria-label="LinkedIn"
              className="w-10 h-10 bg-[#00613a] text-white flex items-center justify-center rounded-full hover:bg-[#008c54] transition-colors"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>
      
      <div className="border-t border-gray-200 mt-8 pt-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm">
              &copy; {currentYear} Share N Spare. Tous droits réservés.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link to="/privacy" className="text-sm text-gray-600 hover:text-[#00613a] transition-colors">
                Politique de confidentialité
              </Link>
              <Link to="/terms" className="text-sm text-gray-600 hover:text-[#00613a] transition-colors">
                Conditions d'utilisation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;