import { Link } from 'react-router-dom';
import simon from '../../assets/images/castor_bleu.webp';
import teo from '../../assets/images/castor_vert.webp';

const About = () => {
  return (
    <main className="font-sans antialiased">
      {/* Hero section - Fond vert, texte blanc */}
      <section className="min-h-[calc(100vh-96px)] py-16 md:py-24 mt-24 flex items-center bg-[#00613a] text-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                À propos de <span className="text-white">ShareNSpare</span>
              </h1>
              <p className="text-xl sm:text-2xl leading-relaxed font-medium mb-6">
                Do more with less.
              </p>
              <p className="text-base sm:text-lg opacity-80">
                Face au gaspillage et à la surconsommation, nous avons créé une solution qui transforme la manière dont nous utilisons les objets au quotidien.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur p-6 sm:p-8 rounded-xl shadow-lg">
              <div className="flex items-start mb-6">
                <div className="text-4xl sm:text-5xl font-bold mr-4 opacity-30">01</div>
                <div>
                  <p className="font-medium text-sm sm:text-base">
                    En Suisse, chaque habitant produit <span className="font-bold">13 tonnes de CO₂e par an</span>, soit deux fois plus que la moyenne mondiale.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start mb-6">
                <div className="text-4xl sm:text-5xl font-bold mr-4 opacity-30">02</div>
                <div>
                  <p className="font-medium text-sm sm:text-base">
                    Nous générons <span className="font-bold">677 kilos de déchets par personne</span>, soit 32% de plus que la moyenne européenne.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="text-4xl sm:text-5xl font-bold mr-4 opacity-30">03</div>
                <div>
                  <p className="font-medium text-sm sm:text-base">
                    Et pourtant, <span className="font-bold">30% des objets</span> que nous possédons ne sont jamais utilisés.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Notre histoire - Fond blanc, texte vert */}
      <section className="py-16 sm:py-20 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 text-[#00613a] text-center">Notre histoire</h2>
          
          <div className="max-w-6xl mx-auto">
            {/* Timeline */}
            <div className="relative">
              {/* Ligne verticale de la timeline */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#00613a]/20"></div>
              
              {/* Première étape */}
              <div className="mb-12 sm:mb-16 md:mb-24 relative">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0 text-right hidden md:block">
                    <h3 className="text-xl sm:text-2xl font-bold mb-3 text-[#00613a]">L'idée initiale</h3>
                    <p className="text-[#00613a] opacity-80 text-sm sm:text-base">
                      Lors d'un forum sur l'économie circulaire en 2024, nous avons pris conscience de l'ampleur du gaspillage lié à la sous-utilisation des objets du quotidien.
                    </p>
                  </div>
                  
                  <div className="md:hidden mb-4 text-center">
                    <h3 className="text-xl sm:text-2xl font-bold mb-3 text-[#00613a]">L'idée initiale</h3>
                    <p className="text-[#00613a] opacity-80 text-sm sm:text-base">
                    Lors d'un forum sur l'économie circulaire en 2024, nous avons pris conscience de l'ampleur du gaspillage lié à la sous-utilisation des objets du quotidien.
                    </p>
                  </div>
                  
                  
                  
                  <div className="md:w-1/2 md:pl-12 md:text-left hidden md:block">
                    <div className="bg-[rgba(0,97,58,0.05)] p-4 sm:p-6 rounded-xl shadow">
                      <p className="text-[#00613a] italic text-sm sm:text-base">
                        "Et si on pouvait facilement partager tous ces objets qu'on utilise rarement mais qui prennent tant de place ?"
                      </p>
                    </div>
                  </div>
                  
                  <div className="md:hidden">
                    <div className="bg-[rgba(0,97,58,0.05)] p-4 sm:p-6 rounded-xl shadow">
                      <p className="text-[#00613a] italic text-sm sm:text-base">
                        "Et si on pouvait facilement partager tous ces objets qu'on utilise rarement mais qui prennent tant de place ?"
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Deuxième étape */}
              <div className="mb-12 sm:mb-16 md:mb-24 relative">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0 md:text-right">
                    <div className="bg-[rgba(0,97,58,0.05)] p-4 sm:p-6 rounded-xl shadow md:hidden">
                      <p className="text-[#00613a] italic text-sm sm:text-base">
                        "Après 6 mois de recherche et développement, le premier prototype de ShareNspare était né."
                      </p>
                    </div>
                  </div>
                  
                  <div className="md:hidden mb-4 text-center">
                    <h3 className="text-xl sm:text-2xl font-bold mb-3 text-[#00613a]">Premiers pas</h3>
                    <p className="text-[#00613a] opacity-80 text-sm sm:text-base">
                      Fin 2024, nous avons commencé à développer le concept et à étudier les besoins des utilisateurs potentiels à travers des entretiens et sondages.
                    </p>
                  </div>
                  
                  
                  
                  <div className="md:w-1/2 md:pl-12">
                    <h3 className="text-xl sm:text-2xl font-bold mb-3 text-[#00613a] hidden md:block">Premiers pas</h3>
                    <p className="text-[#00613a] opacity-80 hidden md:block text-sm sm:text-base">
                      Fin 2024, nous avons commencé à développer le concept et à étudier les besoins des utilisateurs potentiels à travers des entretiens et sondages.
                    </p>
                    <div className="bg-[rgba(0,97,58,0.05)] p-4 sm:p-6 rounded-xl shadow hidden md:block mt-4">
                      <p className="text-[#00613a] italic text-sm sm:text-base">
                        "Après 6 mois de recherche et développement, le premier prototype de ShareNspare était né."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Troisième étape */}
              <div className="relative">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0 text-right hidden md:block">
                    <h3 className="text-xl sm:text-2xl font-bold mb-3 text-[#00613a]">Aujourd'hui</h3>
                    <p className="text-[#00613a] opacity-80 text-sm sm:text-base">
                      En 2025, nous lançons officiellement ShareNspare avec l'ambition de transformer notre rapport aux objets et de contribuer à un avenir plus durable.
                    </p>
                  </div>
                  
                  <div className="md:hidden mb-4 text-center">
                    <h3 className="text-xl sm:text-2xl font-bold mb-3 text-[#00613a]">Aujourd'hui</h3>
                    <p className="text-[#00613a] opacity-80 text-sm sm:text-base">
                      En 2025, nous lançons officiellement ShareNspare avec l'ambition de transformer notre rapport aux objets et de contribuer à un avenir plus durable.
                    </p>
                  </div>
                  
                  
                  
                  <div className="md:w-1/2 md:pl-12 md:text-left hidden md:block">
                    <div className="bg-[rgba(0,97,58,0.05)] p-4 sm:p-6 rounded-xl shadow">
                      <p className="text-[#00613a] italic text-sm sm:text-base">
                        "Notre vision est de créer une communauté où le partage d'objets devient un réflexe naturel."
                      </p>
                    </div>
                  </div>
                  
                  <div className="md:hidden">
                    <div className="bg-[rgba(0,97,58,0.05)] p-4 sm:p-6 rounded-xl shadow">
                      <p className="text-[#00613a] italic text-sm sm:text-base">
                        "Notre vision est de créer une communauté où le partage d'objets devient un réflexe naturel."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-12 sm:mt-16">
              <p className="text-lg sm:text-xl font-bold text-[#00613a]">
                Un projet né d'une vision simple : Do more with less.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Comment ça marche - Fond vert, texte blanc */}
      <section className="py-16 sm:py-20 md:py-24 bg-[#00613a] text-white">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 text-center">Comment ça marche ?</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 max-w-6xl mx-auto">
            {/* Pour les particuliers */}
            <div className="bg-white/10 backdrop-blur p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Pour les particuliers</h3>
              <p className="mb-4 opacity-80 text-sm sm:text-base">
                Vous avez des objets qui prennent la poussière ? Mettez-les à disposition de vos voisins et rentabilisez-les.
              </p>
              <p className="mb-4 opacity-80 text-sm sm:text-base">
                Besoin d'un objet occasionnellement ? Empruntez-le près de chez vous plutôt que d'acheter.
              </p>
              <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0">
                <span className="text-xs sm:text-sm opacity-75">Paddle, perceuse, appareil à raclette...</span>
                <Link 
                  to="/c2c" 
                  className="inline-flex items-center text-white font-semibold border-b-2 border-white pb-1 hover:opacity-80 transition-opacity"
                >
                  En savoir plus
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </Link>
              </div>
            </div>
            
            {/* Pour les entreprises */}
            <div className="bg-white/10 backdrop-blur p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Pour les entreprises</h3>
              <p className="mb-4 opacity-80 text-sm sm:text-base">
                Optimisez vos actifs : transformez vos équipements sous-utilisés en sources de revenus.
              </p>
              <p className="mb-4 opacity-80 text-sm sm:text-base">
                Accédez à du matériel professionnel dans votre région sans investissement lourd.
              </p>
              <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0">
                <span className="text-xs sm:text-sm opacity-75">Échafaudages, caméras thermiques, outils spécialisés...</span>
                <Link 
                  to="/b2b" 
                  className="inline-flex items-center text-white font-semibold border-b-2 border-white pb-1 hover:opacity-80 transition-opacity"
                >
                  En savoir plus
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          
          <div className="max-w-4xl mx-auto text-center mt-10 sm:mt-12">
            <p className="text-lg sm:text-xl font-bold">
              C'est ça, faire plus avec moins – Do more with less.
            </p>
          </div>
        </div>
      </section>
      
      {/* Pourquoi ShareNspare - Fond blanc, texte vert */}
      <section className="py-16 sm:py-20 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 text-[#00613a] text-center">Pourquoi ShareNspare ?</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-10 sm:mb-12">
              <div className="bg-[rgba(0,97,58,0.05)] p-5 sm:p-6 rounded-xl text-center">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4 text-[#00613a]">
                  <i className="fas fa-globe"></i>
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-[#00613a]">Impact écologique</h3>
                <p className="text-[#00613a] opacity-80 text-sm sm:text-base">
                  Réduire les déchets et la production de nouveaux biens en utilisant mieux l'existant.
                </p>
              </div>
              
              <div className="bg-[rgba(0,97,58,0.05)] p-5 sm:p-6 rounded-xl text-center">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4 text-[#00613a]">
                  <i className="fas fa-coins"></i>
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-[#00613a]">Économie locale</h3>
                <p className="text-[#00613a] opacity-80 text-sm sm:text-base">
                  Créer de la valeur entre particuliers et entreprises dans une même communauté locale.
                </p>
              </div>
              
              <div className="bg-[rgba(0,97,58,0.05)] p-5 sm:p-6 rounded-xl text-center sm:col-span-2 md:col-span-1 sm:max-w-md sm:mx-auto md:max-w-none md:mx-0">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4 text-[#00613a]">
                  <i className="fas fa-users"></i>
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-[#00613a]">Lien social</h3>
                <p className="text-[#00613a] opacity-80 text-sm sm:text-base">
                  Favoriser les rencontres et les échanges dans votre quartier ou votre ville.
                </p>
              </div>
            </div>
            
            <p className="text-lg sm:text-xl font-bold text-center mt-10 sm:mt-12 text-[#00613a]">
              Moins d'achats, moins de déchets, plus de partage. <br/>
              <span className="inline-block mt-2">Do more with less.</span>
            </p>
          </div>
        </div>
      </section>
      
      {/* Qui sommes-nous - Fond vert, texte blanc */}
      <section className="py-16 sm:py-20 md:py-24 bg-[#00613a] text-white">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 text-center">Qui sommes-nous ?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 max-w-5xl mx-auto">
            {/* Simon */}
            <div className="bg-white/10 backdrop-blur rounded-xl overflow-hidden shadow-lg transform transition-transform hover:scale-[1.02]">
              <div className="h-48 sm:h-64 bg-white/5 flex items-center justify-center">
                {/* Placeholder pour la photo - à remplacer par une vraie image */}
                <div className="w-44 h-44 sm:w-32 sm:h-32 rounded-full bg-white/20 flex items-center justify-center overflow-hidden">
                <img 
                  src={simon} 
                  alt="ShareNSpare Mascotte" 
                  className="h-50 w-auto mr-2" 
                />
                </div>
              </div>
              <div className="p-5 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold mb-2">Simon</h3>
                <p className="opacity-80 mb-3 sm:mb-4 text-sm sm:text-base">Co-fondateur ShareNspare</p>
                <p className="opacity-80 text-sm sm:text-base">
                  Bachelor en économie et management à l'Université de Genève, actuellement en Master 
                  en Sustainable Management and Technology à l'EPFL. Simon pilote la stratégie business, 
                  les partenariats et le développement global du projet.
                </p>
              </div>
            </div>
            
            {/* Teo */}
            <div className="bg-white/10 backdrop-blur rounded-xl overflow-hidden shadow-lg transform transition-transform hover:scale-[1.02]">
              <div className="h-48 sm:h-64 bg-white/5 flex items-center justify-center">
                {/* Placeholder pour la photo - à remplacer par une vraie image */}
                <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-white/20 flex items-center justify-center overflow-hidden">
                <img 
                  src={teo} 
                  alt="ShareNSpare Mascotte" 
                  className="h-10 w-auto mr-2" 
                />
                </div>
              </div>
              <div className="p-5 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold mb-2">Teo</h3>
                <p className="opacity-80 mb-3 sm:mb-4 text-sm sm:text-base">Co-fondateur ShareNspare</p>
                <p className="opacity-80 text-sm sm:text-base">
                  Étudiant en dernière année de Web Development à la SAE. Teo est responsable du 
                  développement technique, de la création de l'application et du site web.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Et maintenant - Fond blanc, texte vert */}
      <section className="py-16 sm:py-20 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 text-[#00613a]">Et maintenant ?</h2>
            
            <div className="relative mb-10 sm:mb-12 text-left">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#00613a]/20"></div>
              
              <div className="ml-6 sm:ml-8 mb-6 sm:mb-8 relative">
                <div className="absolute -left-8 sm:-left-10 top-1.5 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#00613a]"></div>
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-[#00613a]">L'aventure commence</h3>
                <p className="text-[#00613a] opacity-80 text-sm sm:text-base">
                  L'application ShareNspare est en développement et sera bientôt disponible.
                  Nous travaillons chaque jour pour créer la plateforme de partage la plus intuitive et efficace.
                </p>
              </div>
              
              <div className="ml-6 sm:ml-8 relative">
                <div className="absolute -left-8 sm:-left-10 top-1.5 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#00613a]"></div>
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-[#00613a]">Rejoignez la communauté</h3>
                <p className="text-[#00613a] opacity-80 text-sm sm:text-base">
                  Nous avons besoin de vous pour faire grandir ce projet. Inscrivez-vous pour être
                  parmi les premiers à profiter de notre plateforme et aider à construire un modèle plus durable.
                </p>
              </div>
            </div>
            
            <p className="text-xl sm:text-2xl font-bold text-[#00613a]">
              ShareNspare – Do more with less.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mt-8 sm:mt-12">
              <Link 
                to="/c2c#countdown" 
                className="bg-[#00613a] text-white font-semibold py-2.5 sm:py-3 px-6 sm:px-8 rounded-full hover:bg-opacity-90 transition-colors"
              >
                Être informé du lancement
              </Link>
              <Link 
                to="/c2c#contact" 
                className="border-2 border-[#00613a] text-[#00613a] font-semibold py-2.5 sm:py-3 px-6 sm:px-8 rounded-full hover:bg-[#00613a]/10 transition-colors"
              >
                Nous contacter
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;