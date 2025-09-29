import { Link } from 'react-router-dom';

const About = () => {
  return (
    <main className="font-sans antialiased">
      {/* Hero section - Fond vert, texte blanc */}
      <section className="h-[calc(100vh-96px)] mt-24 flex items-center bg-[#00613a] text-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                À propos de <span className="text-white">ShareNspare</span>
              </h1>
              <p className="text-2xl leading-relaxed font-medium mb-6">
                Do more with less.
              </p>
              <p className="text-lg opacity-80">
                Face au gaspillage et à la surconsommation, nous avons créé une solution qui transforme la manière dont nous utilisons les objets au quotidien.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur p-8 rounded-xl shadow-lg">
              <div className="flex items-start mb-6">
                <div className="text-5xl font-bold mr-4 opacity-30">01</div>
                <div>
                  <p className="font-medium">
                    En Suisse, chaque habitant produit <span className="font-bold">13 tonnes de CO₂e par an</span>, soit deux fois plus que la moyenne mondiale.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start mb-6">
                <div className="text-5xl font-bold mr-4 opacity-30">02</div>
                <div>
                  <p className="font-medium">
                    Nous générons <span className="font-bold">677 kilos de déchets par personne</span>, soit 32% de plus que la moyenne européenne.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="text-5xl font-bold mr-4 opacity-30">03</div>
                <div>
                  <p className="font-medium">
                    Et pourtant, <span className="font-bold">30% des objets</span> que nous possédons ne sont jamais utilisés.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Comment ça marche - Fond blanc, texte vert */}
      <section className="h-screen flex items-center bg-white py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-[#00613a] text-center">⚙️ Comment ça marche ?</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Pour les particuliers */}
            <div className="bg-[rgba(0,97,58,0.05)] p-8 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
              <h3 className="text-2xl font-bold mb-6 text-[#00613a]">Pour les particuliers</h3>
              <p className="mb-4 text-[#00613a] opacity-80">
                Vous avez des objets qui prennent la poussière ? Mettez-les à disposition de vos voisins et rentabilisez-les.
              </p>
              <p className="mb-4 text-[#00613a] opacity-80">
                Besoin d'un objet occasionnellement ? Empruntez-le près de chez vous plutôt que d'acheter.
              </p>
              <div className="mt-8 flex justify-between items-center">
                <span className="text-sm text-[#00613a] opacity-75">Paddle, perceuse, appareil à raclette...</span>
                <Link 
                  to="/c2c" 
                  className="inline-flex items-center text-[#00613a] font-semibold border-b-2 border-[#00613a] pb-1 hover:opacity-80 transition-opacity"
                >
                  En savoir plus
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </Link>
              </div>
            </div>
            
            {/* Pour les entreprises */}
            <div className="bg-[rgba(0,97,58,0.05)] p-8 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
              <h3 className="text-2xl font-bold mb-6 text-[#00613a]">Pour les entreprises</h3>
              <p className="mb-4 text-[#00613a] opacity-80">
                Optimisez vos actifs : transformez vos équipements sous-utilisés en sources de revenus.
              </p>
              <p className="mb-4 text-[#00613a] opacity-80">
                Accédez à du matériel professionnel dans votre région sans investissement lourd.
              </p>
              <div className="mt-8 flex justify-between items-center">
                <span className="text-sm text-[#00613a] opacity-75">Échafaudages, caméras thermiques, outils spécialisés...</span>
                <Link 
                  to="/b2b" 
                  className="inline-flex items-center text-[#00613a] font-semibold border-b-2 border-[#00613a] pb-1 hover:opacity-80 transition-opacity"
                >
                  En savoir plus
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          
          <div className="max-w-4xl mx-auto text-center mt-12">
            <p className="text-xl font-bold text-[#00613a]">
              C'est ça, faire plus avec moins – Do more with less.
            </p>
          </div>
        </div>
      </section>
      
      {/* Pourquoi ShareNspare - Fond vert, texte blanc */}
      <section className="h-screen flex items-center bg-[#00613a] py-16 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Pourquoi ShareNspare ?</h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white/10 backdrop-blur p-6 rounded-xl text-center">
                <div className="text-4xl mb-4">
                  <i className="fas fa-globe"></i>
                </div>
                <h3 className="text-xl font-bold mb-3">Impact écologique</h3>
                <p className="opacity-80">
                  Réduire les déchets et la production de nouveaux biens en utilisant mieux l'existant.
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur p-6 rounded-xl text-center">
                <div className="text-4xl mb-4">
                  <i className="fas fa-coins"></i>
                </div>
                <h3 className="text-xl font-bold mb-3">Économie locale</h3>
                <p className="opacity-80">
                  Créer de la valeur entre particuliers et entreprises dans une même communauté locale.
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur p-6 rounded-xl text-center">
                <div className="text-4xl mb-4">
                  <i className="fas fa-users"></i>
                </div>
                <h3 className="text-xl font-bold mb-3">Lien social</h3>
                <p className="opacity-80">
                  Favoriser les rencontres et les échanges dans votre quartier ou votre ville.
                </p>
              </div>
            </div>
            
            <p className="text-xl font-bold text-center mt-12">
              Moins d'achats, moins de déchets, plus de partage. <br/>
              <span className="inline-block mt-2">Do more with less.</span>
            </p>
          </div>
        </div>
      </section>
      
      {/* Qui sommes-nous - Fond blanc, texte vert */}
      <section className="h-screen flex items-center bg-white py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-[#00613a] text-center">Qui sommes-nous ?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Simon */}
            <div className="bg-[rgba(0,97,58,0.05)] rounded-xl overflow-hidden shadow-lg transform transition-transform hover:scale-[1.02]">
              <div className="h-64 bg-[rgba(0,97,58,0.02)] flex items-center justify-center">
                {/* Placeholder pour la photo - à remplacer par une vraie image */}
                <div className="w-32 h-32 rounded-full bg-[rgba(0,97,58,0.2)] flex items-center justify-center overflow-hidden">
                  <span className="text-4xl font-bold text-[#00613a]">S</span>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2 text-[#00613a]">Simon</h3>
                <p className="text-[#00613a] opacity-80 mb-4">Co-fondateur ShareNspare</p>
                <p className="text-[#00613a] opacity-80">
                  Bachelor en économie et management à l'Université de Genève, actuellement en Master 
                  en Sustainable Management and Technology à l'EPFL. Simon pilote la stratégie business, 
                  les partenariats et le développement global du projet.
                </p>
              </div>
            </div>
            
            {/* Teo */}
            <div className="bg-[rgba(0,97,58,0.05)] rounded-xl overflow-hidden shadow-lg transform transition-transform hover:scale-[1.02]">
              <div className="h-64 bg-[rgba(0,97,58,0.02)] flex items-center justify-center">
                {/* Placeholder pour la photo - à remplacer par une vraie image */}
                <div className="w-32 h-32 rounded-full bg-[rgba(0,97,58,0.2)] flex items-center justify-center overflow-hidden">
                  <span className="text-4xl font-bold text-[#00613a]">T</span>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2 text-[#00613a]">Teo</h3>
                <p className="text-[#00613a] opacity-80 mb-4">Co-fondateur ShareNspare</p>
                <p className="text-[#00613a] opacity-80">
                  Étudiant en dernière année de Web Development à la SAE. Teo est responsable du 
                  développement technique, de la création de l'application et du site web.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Et maintenant - Fond vert, texte blanc */}
      <section className="h-screen flex items-center bg-[#00613a] py-16 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">Et maintenant ?</h2>
            
            <div className="relative mb-12">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-white/20"></div>
              
              <div className="ml-8 mb-8 relative">
                <div className="absolute -left-10 w-5 h-5 rounded-full bg-white"></div>
                <h3 className="text-xl font-bold mb-3">L'aventure commence</h3>
                <p className="opacity-80">
                  L'application ShareNspare est en développement et sera bientôt disponible.
                  Nous travaillons chaque jour pour créer la plateforme de partage la plus intuitive et efficace.
                </p>
              </div>
              
              <div className="ml-8 mb-8 relative">
                <div className="absolute -left-10 w-5 h-5 rounded-full bg-white"></div>
                <h3 className="text-xl font-bold mb-3">Rejoignez la communauté</h3>
                <p className="opacity-80">
                  Nous avons besoin de vous pour faire grandir ce projet. Inscrivez-vous pour être
                  parmi les premiers à profiter de notre plateforme et aider à construire un modèle plus durable.
                </p>
              </div>
            </div>
            
            <p className="text-2xl font-bold">
              ShareNspare – Do more with less.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mt-12">
              <Link 
                to="/c2c#countdown" 
                className="bg-white text-[#00613a] font-semibold py-3 px-8 rounded-full hover:bg-opacity-90 transition-colors"
              >
                Être informé du lancement
              </Link>
              <Link 
                to="/c2c#contact" 
                className="border-2 border-white text-white font-semibold py-3 px-8 rounded-full hover:bg-white/10 transition-colors"
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