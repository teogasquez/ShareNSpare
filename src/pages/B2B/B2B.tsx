import { Link } from 'react-router-dom';
import Contact from '../../components/layout/Contact';





const B2B = () => {


  return (
    <div id='hero' className="pt-16">
      {/* Section 1: ShareNspare pour les entreprises - Fond blanc */}
      <section className="min-h-screen py-20 flex items-center bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#00613a]">
                Share<span className='text-[#D17034]'>N</span>Spare pour les <span className='text-[#D17034]'>entreprises</span>
              </h1>
              
              <div className="text-lg text-gray-700 mb-8">
                <p className="mb-6">
                  Dans le monde professionnel, <span className="text-[#00613a] font-medium">certains équipements sont essentiels mais rarement utilisés</span> en permanence.
                </p>
                
                <div className="flex items-start gap-3 mb-6">
                  <div className="bg-[#00613a]/10 p-2 rounded-full mt-1">
                    <i className="fas fa-sync-alt text-[#00613a]"></i>
                  </div>
                  <p>
                    <strong className="text-[#D17034]">Transformez</strong> votre matériel inactif en opportunité en le proposant à d'autres entreprises locales.
                  </p>
                </div>
                
                <div className="flex items-start gap-3 mb-6">
                  <div className="bg-[#00613a]/10 p-2 rounded-full mt-1">
                    <i className="fas fa-search-dollar text-[#00613a]"></i>
                  </div>
                  <p>
                    <strong className="text-[#D17034]">Accédez</strong> aux équipements dont vous avez besoin ponctuellement, sans investir dans du matériel neuf.
                  </p>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="bg-[#00613a]/10 p-2 rounded-full mt-1">
                    <i className="fas fa-leaf text-[#00613a]"></i>
                  </div>
                  <p>
                    <strong className="text-[#D17034]">Réduisez</strong> vos coûts, améliorez votre rentabilité et participez à une démarche durable.
                  </p>
                </div>
              </div>
              
              <div className="mt-8">
              <Link 
                to="/c2c#hero" 
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-[#00613a] text-white py-3 px-8 rounded-full hover:bg-[#D17034] transition-colors font-medium flex items-center gap-2"
              >
                <span>Rejoindre le réseau</span>
                <i className="fas fa-arrow-right"></i>
              </Link>
              </div>
            </div>
            
            <div className="bg-[#00613a]/5 p-8 rounded-2xl">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white shadow-md rounded-xl p-5 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-[#00613a]/10 rounded-lg flex items-center justify-center mb-4">
                    <i className="fas fa-microphone text-[#00613a] text-xl"></i>
                  </div>
                  <h3 className="font-bold text-lg mb-2">Systèmes son</h3>
                  <p className="text-gray-600 text-sm">Équipements audio professionnels</p>
                </div>
                
                <div className="bg-white shadow-md rounded-xl p-5 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-[#00613a]/10 rounded-lg flex items-center justify-center mb-4">
                    <i className="fas fa-lightbulb text-[#00613a] text-xl"></i>
                  </div>
                  <h3 className="font-bold text-lg mb-2">Éclairages scéniques</h3>
                  <p className="text-gray-600 text-sm">Projecteurs et effets lumineux</p>
                </div>
                
                <div className="bg-white shadow-md rounded-xl p-5 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-[#00613a]/10 rounded-lg flex items-center justify-center mb-4">
                    <i className="fas fa-couch text-[#00613a] text-xl"></i>
                  </div>
                  <h3 className="font-bold text-lg mb-2">Mobilier design</h3>
                  <p className="text-gray-600 text-sm">Pour salons et réceptions</p>
                </div>
                
                <div className="bg-white shadow-md rounded-xl p-5 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-[#00613a]/10 rounded-lg flex items-center justify-center mb-4">
                    <i className="fas fa-landmark text-[#00613a] text-xl"></i>
                  </div>
                  <h3 className="font-bold text-lg mb-2">Structures scéniques</h3>
                  <p className="text-gray-600 text-sm">Podiums et estrades modulaires</p>
                </div>
              </div>
              
              <Link 
                to="/about" 
                className="mt-6 text-center p-4 bg-[#D17034] text-white rounded-xl block hover:bg-[#D17034] transition-colors cursor-pointer"
              >
                <p className="font-bold text-lg">Do more with less</p>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Section 2: Des secteurs déjà concernés - Fond vert */}
      <section className="min-h-screen py-20 flex items-center bg-[#00613a] text-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-8">Des secteurs prometteurs</h2>
            
            <p className="text-xl max-w-3xl mx-auto text-white/90">
              Construction, ingénierie, événementiel, agriculture, industrie, audiovisuel, technologies… 
              Dans tous ces domaines, ShareNSpare répond au même besoin : éviter les immobilisations coûteuses, 
              rentabiliser le matériel existant et accéder facilement aux équipements nécessaires, 
              uniquement quand vous en avez besoin.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
            
            
            <div className="bg-white/10 p-8 rounded-xl backdrop-blur-sm">
              <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-6 mx-auto">
                <i className="fas fa-calendar-alt text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center">Événementiel</h3>
              <p className="text-white/80 text-center">
                Mobilier, matériel audio-visuel, structures temporaires et équipements logistiques.
              </p>
            </div>

            <div className="bg-white/10 p-8 rounded-xl backdrop-blur-sm">
              <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-6 mx-auto">
                <i className="fas fa-hard-hat text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center">Construction</h3>
              <p className="text-white/80 text-center">
                Échafaudages, machines spécialisées, équipements de sécurité et outils professionnels.
              </p>
            </div>
            
            <div className="bg-white/10 p-8 rounded-xl backdrop-blur-sm">
              <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-6 mx-auto">
                <i className="fas fa-industry text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center">Industrie</h3>
              <p className="text-white/80 text-center">
                Équipements de production, outils de mesure, machines spécialisées et matériel d'inspection.
              </p>
            </div>
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
          <h3 className="text-2xl font-bold mb-4 text-[#00613a]">Pour les <span className='text-[#D17034]'>entreprises</span></h3>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-2">
              <i className="fas fa-check-circle text-[#00613a] mt-1"></i>
              <span>Intégrez votre inventaire à notre plateforme</span>
            </li>
            <li className="flex items-start gap-2">
              <i className="fas fa-check-circle text-[#00613a] mt-1"></i>
              <span>Atteignez de nouveaux clients</span>
            </li>
            <li className="flex items-start gap-2">
              <i className="fas fa-check-circle text-[#00613a] mt-1"></i>
              <span>Optimisez l'utilisation de vos équipements</span>
            </li>
            <li className="flex items-start gap-2">
              <i className="fas fa-check-circle text-[#00613a] mt-1"></i>
              <span>Rejoignez un réseau d'entreprises engagées</span>
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

      
    

{/* Section Contact B2B - Fond vert */}
<section id="contact" className="min-h-screen py-20 flex items-center bg-[#00613a]">
  <div className="container mx-auto px-4 max-w-7xl">
    <div className="max-w-4xl mx-auto">
      {/* En-tête */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-6 text-white">Contactez-nous</h2>
        <p className="text-xl text-white/90 max-w-2xl mx-auto">
          Vous souhaitez en savoir plus sur ShareNSpare et découvrir comment votre entreprise peut 
          bénéficier de cette nouvelle façon de collaborer ?
        </p>
        <p className="text-xl text-white/90 max-w-2xl mx-auto mt-4">
          Remplissez le formulaire ci-dessous et nous vous recontacterons rapidement pour discuter de vos besoins.
        </p>
      </div>
      
      {/* Formulaire dans un conteneur blanc */}
      <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
        <Contact />
      </div>

      {/* Informations supplémentaires */}
      <div className="mt-8 text-center">
        <p className="text-white/80">
          Vous pouvez également nous contacter directement à{' '}
          <a 
            href="mailto:contact@sharenspare.ch" 
            className="text-white font-semibold hover:underline"
          >
            contact@sharenspare.ch
          </a>
        </p>
      </div>
    </div>
  </div>
</section>
    </div>
  );
};

export default B2B;