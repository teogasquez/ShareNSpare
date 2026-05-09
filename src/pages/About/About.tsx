import { Link } from 'react-router-dom';
import simon from '../../assets/images/beaver_chapi.webp';
import teo from '../../assets/images/beaver_gasqo.webp';

const About = () => {
  return (
    <main className="font-sans antialiased">

      {/* Hero section */}
      <section className="min-h-[calc(100vh-96px)] py-16 md:py-24 mt-24 flex items-center bg-[#00613a] text-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              À propos de <span className="text-white">Share<span className='text-[#D17034]'>N</span>Spare</span>
            </h1>
            <p className="text-xl text-[#D17034] sm:text-2xl leading-relaxed font-medium mb-4">
              Do more with less.
            </p>
            <p className="text-base sm:text-lg opacity-80 mb-14">
              La Suisse regorge de festivals — mais chacun se débrouille dans son coin. On a voulu changer ça.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
              <div className="bg-white/10 backdrop-blur p-6 rounded-xl text-left">
                <div className="text-3xl mb-4"><i className="fas fa-globe text-[#D17034]"></i></div>
                <h3 className="text-lg font-bold mb-2">Impact écologique</h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  Mutualiser le matériel existant, c'est réduire les achats inutiles, limiter les transports et diminuer l'empreinte carbone du secteur événementiel.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur p-6 rounded-xl text-left">
                <div className="text-3xl mb-4"><i className="fas fa-coins text-[#D17034]"></i></div>
                <h3 className="text-lg font-bold mb-2">Économie locale</h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  Créer de la valeur entre festivals d'une même région, en transformant la concurrence en collaboration.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur p-6 rounded-xl text-left">
                <div className="text-3xl mb-4"><i className="fas fa-users text-[#D17034]"></i></div>
                <h3 className="text-lg font-bold mb-2">Solidarité festivalière</h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  Favoriser l'entraide entre organisateurs pour que chaque festival, petit ou grand, puisse exister et grandir.
                </p>
              </div>
            </div>

            <p className="text-base sm:text-lg font-semibold opacity-90">
              Moins de gaspillage, plus de collaboration, un secteur plus durable.{' '}
              <span className="text-[#D17034]">Do more with less.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Notre histoire */}
      <section className="py-16 sm:py-20 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 text-[#00613a] text-center">
            Notre Histoire : Share<span className='text-[#D17034]'>N</span>Spare
          </h2>

          <div className="max-w-6xl mx-auto">
            <div className="relative">
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#00613a]/20"></div>

              {/* Étape 1 - Une conversation qui change tout */}
              <div className="mb-12 sm:mb-16 md:mb-24 relative">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0 text-right hidden md:block">
                    <h3 className="text-xl sm:text-2xl font-bold mb-4 text-[#D17034] text-left">Une conversation qui change tout</h3>
                    <p className="text-[#00613a] opacity-90 text-sm sm:text-base leading-relaxed mb-4 text-left">
                      Tout commence par un verre entre amis. Un soir de 2024, Simon retrouve un ami qui organise un petit festival de musique depuis quelques années. La conversation tourne vite autour des galères de l'organisation — mais surtout du financement nécessaire.
                    </p>
                    <p className="text-[#00613a] opacity-90 text-sm sm:text-base leading-relaxed mb-4 text-left">
                      Des projecteurs. Des enceintes. Des barrières. Des milliers de francs d'équipements immobilisés. Et si à quelques kilomètres de là, d'autres festivals pouvaient avoir besoin de ce matériel pour leur événement ?
                    </p>
                    <p className="text-[#00613a] opacity-90 text-sm sm:text-base leading-relaxed text-left">
                      Simon n'arrive pas à se sortir cette image de la tête. <em>"Pendant ce temps, des festivals à côté louent les mêmes trucs à prix d'or."</em>
                    </p>
                  </div>

                  {/* Mobile */}
                  <div className="md:hidden mb-6 text-center">
                    <h3 className="text-xl sm:text-2xl font-bold mb-4 text-[#00613a]">Une conversation qui change tout</h3>
                    <p className="text-[#00613a] opacity-90 text-sm sm:text-base leading-relaxed mb-4">
                      Tout commence par un verre entre amis. Un soir de 2024, Simon retrouve un ami qui organise un petit festival de musique. La conversation tourne autour des galères d'organisation — et du financement nécessaire.
                    </p>
                    <p className="text-[#00613a] opacity-90 text-sm sm:text-base leading-relaxed mb-4">
                      Des projecteurs. Des enceintes. Des barrières. Des milliers de francs d'équipements immobilisés. Et si à quelques kilomètres, d'autres festivals pouvaient en avoir besoin ?
                    </p>
                    <p className="text-[#00613a] opacity-90 text-sm sm:text-base leading-relaxed">
                      Simon n'arrive pas à se sortir cette image de la tête.
                    </p>
                  </div>

                  <div className="md:w-1/2 md:pl-12">
                    <div className="bg-[rgba(0,97,58,0.05)] p-6 rounded-xl shadow-lg">
                      <p className="text-[#00613a] italic text-base sm:text-lg font-medium text-center">
                        "Le pire dans tout ça ? J'ai du matériel qui vaut des milliers de francs qui dort dans un garage onze mois sur douze."
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Étape 2 - Du Constat au Réseau */}
              <div className="mb-12 sm:mb-16 md:mb-24 relative">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0 md:text-right order-2 md:order-1">
                    <div className="bg-[rgba(0,97,58,0.05)] p-6 rounded-xl shadow-lg">
                      <p className="text-[#00613a] italic text-base sm:text-lg font-medium text-center">
                        "Et si les festivals arrêtaient de se tourner le dos ?"
                      </p>
                    </div>
                  </div>

                  <div className="md:w-1/2 md:pl-12 order-1 md:order-2 mb-6 md:mb-0">
                    <h3 className="text-xl sm:text-2xl font-bold mb-4 text-[#D17034] text-center md:text-left">
                      Du Constat au Réseau
                    </h3>
                    <p className="text-[#00613a] opacity-90 text-sm sm:text-base leading-relaxed mb-4 text-center md:text-left">
                      Simon ne lâche pas l'idée. Il commence à en parler autour de lui, à d'autres organisateurs. Et très vite, il réalise que son ami n'est pas un cas isolé — c'est la norme. Chaque festival gère ses équipements dans son coin, sans vraiment savoir ce que font les autres.
                    </p>
                    <p className="text-[#00613a] opacity-90 text-sm sm:text-base leading-relaxed mb-4 text-center md:text-left">
                      La Suisse est l'un des pays avec la plus forte densité de festivals par habitant — et pourtant, il n'existait aucune plateforme pour les connecter entre eux.
                    </p>
                    <p className="text-[#00613a] opacity-90 text-sm sm:text-base leading-relaxed text-center md:text-left">
                      Il partage l'idée avec Téo, ami de longue date passionné de design et de tech, qui rejoint immédiatement l'aventure. ShareNSpare commence à prendre forme.
                    </p>
                  </div>
                </div>
              </div>

              {/* Étape 3 - Lancement et Vision */}
              <div className="relative">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0 text-right hidden md:block">
                    <h3 className="text-xl sm:text-2xl font-bold mb-4 text-[#D17034] text-left">Lancement et Vision</h3>
                    <p className="text-[#00613a] opacity-90 text-sm sm:text-base leading-relaxed mb-4 text-left">
                      Août 2025 : le concept est prêt et nous créons officiellement ShareNSpare ! Ce n'est plus seulement une idée, mais un projet concret avec une mission claire : rendre la location simple, accessible et bénéfique pour tous.
                    </p>
                    <p className="text-[#00613a] opacity-90 text-sm sm:text-base leading-relaxed mb-4 text-left">
                      Chaque jour, nous travaillons avec passion pour transformer cette vision en réalité. Mais nous ne le faisons pas seuls : c'est aussi grâce à vos idées et vos retours que nous développons l'application de partage de demain.
                    </p>
                    <p className="text-[#00613a] opacity-90 text-sm sm:text-base leading-relaxed text-left">
                      Alors, si vous ne faites pas encore partie de l'aventure, rejoignez ShareNSpare et devenez acteur du changement !
                    </p>
                  </div>

                  {/* Mobile */}
                  <div className="md:hidden mb-6 text-center">
                    <h3 className="text-xl sm:text-2xl font-bold mb-4 text-[#00613a]">Lancement et Vision</h3>
                    <p className="text-[#00613a] opacity-90 text-sm sm:text-base leading-relaxed mb-4">
                      Août 2025 : le concept est prêt et nous créons officiellement ShareNSpare ! Un projet concret avec une mission claire : rendre la location simple, accessible et bénéfique pour tous.
                    </p>
                    <p className="text-[#00613a] opacity-90 text-sm sm:text-base leading-relaxed">
                      Alors, si vous ne faites pas encore partie de l'aventure, rejoignez ShareNSpare et devenez acteur du changement !
                    </p>
                  </div>

                  <div className="md:w-1/2 md:pl-12">
                    <div className="bg-[rgba(0,97,58,0.05)] p-6 rounded-xl shadow-lg">
                      <p className="text-[#00613a] italic text-base sm:text-lg font-medium text-center">
                        "Seul on va plus vite, ensemble on va plus loin."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-12 sm:mt-16">
              <p className="text-lg sm:text-xl font-bold text-[#00613a]">
                Une seule devise guide notre projet : <span className='text-[#D17034]'>Do more with less.</span>
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Qui sommes-nous */}
      <section className="py-16 sm:py-20 md:py-24 bg-[#00613a] text-white">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 text-center">Qui sommes-nous ?</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 max-w-5xl mx-auto">
            <div className="bg-white rounded-xl overflow-hidden shadow-lg transform transition-transform hover:scale-[1.02]">
              <div className="h-48 sm:h-64 bg-gray-50 flex items-center justify-center">
                <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden">
                  <img src={simon} alt="Simon - Co-fondateur ShareNSpare" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="p-5 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold mb-2 text-[#00613a]">Simon Chappatte</h3>
                <p className="text-[#D17034]/70 mb-3 sm:mb-4 text-sm sm:text-base font-medium">Co-fondateur & Stratégie</p>
                <p className="text-gray-600 text-sm sm:text-base">
                  Simon dirige la vision stratégique de ShareNSpare et développe les partenariats clés.
                  Il s'occupe du business model, de la croissance et des relations avec les festivals partenaires.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-lg transform transition-transform hover:scale-[1.02]">
              <div className="h-48 sm:h-64 bg-gray-50 flex items-center justify-center">
                <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden">
                  <img src={teo} alt="Teo - Co-fondateur ShareNSpare" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="p-5 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold mb-2 text-[#00613a]">Teo Gasquez</h3>
                <p className="text-[#D17034]/70 mb-3 sm:mb-4 text-sm sm:text-base font-medium">Co-fondateur & Développement</p>
                <p className="text-gray-600 text-sm sm:text-base">
                  Teo conçoit et développe la plateforme ShareNSpare. Il pilote l'architecture technique,
                  l'expérience utilisateur et assure le bon fonctionnement de l'application et du site web.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Et maintenant */}
      <section className="py-16 sm:py-20 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 text-[#00613a]">Et maintenant ?</h2>

            <div className="relative mb-10 sm:mb-12 text-left">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#00613a]/20"></div>

              <div className="ml-6 sm:ml-8 mb-6 sm:mb-8 relative">
                <div className="absolute -left-8 sm:-left-10 top-1.5 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#00613a]"></div>
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-[#D17034]">L'aventure commence</h3>
                <p className="text-[#00613a] opacity-80 text-sm sm:text-base">
                  L'application ShareNspare est en développement et sera bientôt disponible.
                  Nous travaillons chaque jour pour créer la plateforme de partage la plus intuitive et efficace.
                </p>
              </div>

              <div className="ml-6 sm:ml-8 relative">
                <div className="absolute -left-8 sm:-left-10 top-1.5 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#00613a]"></div>
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-[#D17034]">Rejoignez la communauté</h3>
                <p className="text-[#00613a] opacity-80 text-sm sm:text-base">
                  Nous avons besoin de vous pour faire grandir ce projet. Inscrivez-vous pour être
                  parmi les premiers à profiter de notre plateforme et aider à construire un modèle plus durable.
                </p>
              </div>
            </div>

            <p className="text-xl sm:text-2xl font-bold text-[#00613a]">
              Share<span className='text-[#D17034]'>N</span>Spare – Do more with less.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mt-8 sm:mt-12">
              <Link
                to="/#countdown"
                className="bg-[#00613a] text-white font-semibold py-2.5 sm:py-3 px-6 sm:px-8 rounded-full hover:bg-opacity-90 transition-colors"
              >
                Être informé du lancement
              </Link>
              <Link
                to="/#contact"
                className="border-2 border-[#00613a] text-[#00613a] font-semibold py-2.5 sm:py-3 px-6 sm:px-8 rounded-full hover:bg-[#D17034] hover:border-[#D17034] hover:text-white transition-colors"
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
