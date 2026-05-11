import { Link, useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import heroImage from "../../assets/images/1234567.webp";
import Contact from '../../components/layout/Contact';

const Festival = () => {
  const [searchParams] = useSearchParams();
  const [mode, setMode] = useState<"rent" | "borrow">("rent");

  useEffect(() => {
    const modeParam = searchParams.get("mode");

    if (modeParam === "borrow") {
      setMode("borrow");
    } else {
      setMode("rent");
    }
  }, [searchParams]);

 

  return (
    <div className="pt-16">

{/* Section Hero - Festivals */}
<section id="hero" className="py-20 lg:min-h-screen flex items-center">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
      
      {/* ========================= */}
      {/* COLONNE TEXTE */}
      {/* ========================= */}
      <div className="space-y-6">

        {/* TITRE */}
        <h1 className="text-4xl sm:text-4xl md:text-5xl 
               font-bold 
               text-[#00613a] 
               leading-tight
               text-center lg:text-left">
          Et si les festivals suisses devenaient{" "}
          <span className="text-[#D17034] font-extrabold">partenaires </span>
          plutôt que{" "}
          <span className="text-[#D17034] font-extrabold">concurrents ?</span>
        </h1>

        {/* INTRO */}
        <p className="text-xl sm:text-xl md:text-2xl
              text-[#00613a]/80
              text-center lg:text-left
              px-4 lg:px-0">
  La première plateforme suisse de location de matériel entre festivals.
</p>

        {/* IMAGE MOBILE */}
        <div className="block lg:hidden mt-6 flex justify-center">
  <img 
    src={heroImage}
    alt="Festival suisse"
    className="rounded-xl shadow-xl w-5/6 max-h-[260px] object-cover"
  />
</div>

        {/* BOUTONS PRINCIPAUX */}
        {/* BOUTONS PRINCIPAUX */}
        <div className="flex flex-col sm:flex-row gap-4 pt-6 items-center">

  <Link 
    to="?mode=rent#how-it-works"
    className="w-11/12 sm:w-auto
               bg-[#00613a] 
               text-white 
               hover:bg-[#005131] 
               transition-all duration-300 
               font-semibold 
               py-3 
               px-6 sm:px-8 
               rounded-full 
               flex items-center justify-center 
               shadow-md hover:shadow-lg"
  >
    <i className="fas fa-box-open mr-3"></i>
    <span>Proposer du matériel</span>
  </Link>

  <Link 
    to="?mode=borrow#how-it-works"
    className="w-11/12 sm:w-auto
               border-2 border-[#00613a] 
               text-[#00613a] 
               hover:bg-[#D17034] 
               hover:border-[#D17034] 
               hover:text-white 
               transition-all duration-300 
               font-semibold 
               py-3 
               px-6 sm:px-8 
               rounded-full 
               flex items-center justify-center"
  >
    <i className="fas fa-handshake mr-3"></i>
    <span>Louer du matériel</span>
  </Link>

</div>

        {/* BOUTONS SECONDAIRES */}
        <div className="flex flex-col sm:flex-row gap-4 pt-1 items-center">

  <Link 
    to="#defis-partages"
    className="w-11/12 sm:w-auto
               bg-[rgba(0,97,58,0.08)] 
               text-[#00613a] 
               hover:bg-[rgba(0,97,58,0.15)] 
               transition-all duration-300
               font-semibold 
               py-2.5 
               px-6 sm:px-6 
               rounded-full 
               flex items-center justify-center"
  >
    <span className="mr-2">En savoir plus</span>
    <i className="fas fa-arrow-down"></i>
  </Link>

  <Link 
    to="#contact"
    className="w-11/12 sm:w-auto
               bg-[rgba(0,97,58,0.08)] 
               text-[#00613a] 
               hover:bg-[#D17034] 
               hover:text-white
               transition-all duration-300
               font-semibold 
               py-2.5 
               px-6 
               rounded-full 
               flex items-center justify-center"
  >
    <i className="fas fa-user-plus mr-2"></i>
    <span>Rejoindre le réseau</span>
  </Link>

</div>

      </div>

      {/* ========================= */}
      {/* IMAGE DESKTOP */}
      {/* ========================= */}
      <div className="hidden lg:flex justify-end">
        <img 
          src={heroImage}
          alt="Festival suisse"
          className="rounded-xl shadow-xl max-h-[500px] object-cover"
        />
      </div>

    </div>
  </div>
</section>

      {/* ========================================================= */}
      {/* 2️⃣ LA RÉALITÉ DU SECTEUR (FOND ORANGE) */}
      {/* ========================================================= */}

      <section
  id="defis-partages"
  className="min-h-screen bg-[#00613a] text-white flex items-center py-24"
>
  <div className="container mx-auto px-6 max-w-7xl text-center">

    {/* TITRE */}
    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
      Des défis{" "}
      <span className="text-[#D17034]">partagés</span>
    </h2>

    {/* INTRO */}
    <p className="text-xl text-white/90 max-w-3xl mx-auto mb-20">
      La Suisse est l’un des pays avec la plus forte densité de festivals par habitant.  
      Pourtant, qu’ils soient petits ou grands, tous font face à une même réalité :
    </p>

    {/* PROBLÉMATIQUES */}
    <div className="grid md:grid-cols-2 gap-10 text-left">

      {[
        {
          title: "Des coûts élevés",
          desc: "Des frais de location importants à chaque édition."
        },
        {
          title: "Une pression financière constante",
          desc: "Un besoin permanent de nouvelles sources de revenus."
        },
        {
          title: "Du matériel inutilisé hors saison",
          desc: "Des équipements stockés la majorité de l’année."
        },
        {
          title: "Un manque de collaboration",
          desc: "Peu de synergie et d’entraide entre festivals."
        }
      ].map((item, i) => (
        <div
          key={i}
          className="group bg-white text-[#00613a] p-10 rounded-3xl shadow-2xl hover:-translate-y-2 transition-all duration-300"
        >
          <h3 className="text-2xl font-bold mb-4 text-[#00613a] group-hover:text-[#D17034] transition-colors duration-300">
            {item.title}
          </h3>

          <p className="text-gray-600 text-lg">
            {item.desc}
          </p>
        </div>
      ))}

    </div>

    {/* PHRASE DE FIN */}
    <p className="text-3xl font-semibold mt-24 max-w-4xl mx-auto">
  ShareNSpare veut transformer cette réalité en une{" "}
  <span className="text-[#D17034]">opportunité !</span>
</p>

  </div>
</section>


      {/* ========================================================= */}
{/* 3️⃣ COMMENT ÇA MARCHE (INTERACTIF) */}
{/* ========================================================= */}

<section
  id="how-it-works"
  className="min-h-screen bg-white py-24 flex items-center"
>
  <div className="container mx-auto px-6 max-w-7xl">

  <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
  <span className="text-[#00613a]">Comment ça</span>{" "}
  <span className="text-[#D17034]">marche ?</span>
</h2>

    {/* NOUVEAU TEXTE */}
    <p className="text-center text-xl text-gray-600 max-w-3xl mx-auto mb-16">
    ShareNSpare permet aux festivals de se louer du matériel entre eux afin d’optimiser leurs coûts, générer des revenus supplémentaires et réduire leur empreinte carbone.
    </p>

    {/* SWITCH */}
    <div className="flex justify-center gap-6 mb-20">
      <button
        onClick={() => setMode("rent")}
        className={`px-8 py-4 rounded-full font-semibold transition-all ${
          mode === "rent"
            ? "bg-[#00613a] text-white shadow-xl"
            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
        }`}
      >
        Mettre vos objets en location
      </button>

      <button
  onClick={() => setMode("borrow")}
  className={`px-8 py-4 rounded-full font-semibold transition-all ${
    mode === "borrow"
      ? "bg-[#D17034] text-white shadow-xl"
      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
  }`}
>
  Louer du matériel
</button>
    </div>

    {/* WIDGETS */}
    <div className="grid lg:grid-cols-2 gap-16 items-start">

      {/* LOCATION */}
      <motion.div
  onClick={() => {
    if (mode !== "rent") setMode("rent");
  }}
  animate={{
    opacity: mode === "rent" ? 1 : 0.35,
    scale: mode === "rent" ? 1 : 0.94,
    filter: mode === "rent"
      ? "blur(0px) brightness(1)"
      : "blur(8px) brightness(0.8)"
  }}
  transition={{ duration: 0.35, ease: "easeInOut" }}
  className={`
    ${mode !== "rent" ? "hidden lg:block cursor-pointer" : "block"}
  `}
>
        <div className="flex gap-6">
          <div className="flex flex-col items-center">
            <div className="w-6 h-6 bg-[#D17034] rounded-full"></div>
            <div className="w-1 h-24 bg-[#D17034]"></div>
            <div className="w-6 h-6 bg-[#D17034] rounded-full"></div>
            <div className="w-1 h-24 bg-[#D17034]"></div>
            <div className="w-6 h-6 bg-[#D17034] rounded-full"></div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4">
              1. Publiez votre matériel
            </h3>
            <p className="text-gray-600 mb-8">
              Listez vos équipements hors saison et définissez vos conditions.
            </p>

            <h3 className="text-2xl font-bold mb-4">
              2. Recevez des demandes
            </h3>
            <p className="text-gray-600 mb-8">
              D’autres festivals réservent directement via la plateforme.
            </p>

            <h3 className="text-2xl font-bold mb-4">
              3. Générez des revenus
            </h3>
            <p className="text-gray-600">
              Rentabilisez votre matériel inutilisé.
            </p>
          </div>
        </div>
      </motion.div>

      {/* LOCATION MATÉRIEL */}
      <motion.div
  onClick={() => {
    if (mode !== "borrow") setMode("borrow");
  }}
  animate={{
    opacity: mode === "borrow" ? 1 : 0.35,
    scale: mode === "borrow" ? 1 : 0.94,
    filter: mode === "borrow"
      ? "blur(0px) brightness(1)"
      : "blur(8px) brightness(0.8)"
  }}
  transition={{ duration: 0.35, ease: "easeInOut" }}
  className={`
    ${mode !== "borrow" ? "hidden lg:block cursor-pointer" : "block"}
  `}
>
        <div className="flex gap-6">
          <div className="flex flex-col items-center">
            <div className="w-6 h-6 bg-[#00613a] rounded-full"></div>
            <div className="w-1 h-24 bg-[#00613a]"></div>
            <div className="w-6 h-6 bg-[#00613a] rounded-full"></div>
            <div className="w-1 h-24 bg-[#00613a]"></div>
            <div className="w-6 h-6 bg-[#00613a] rounded-full"></div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4">
              1. Recherchez du matériel
            </h3>
            <p className="text-gray-600 mb-8">
              Trouvez les équipements disponibles près de votre événement à petit prix.
            </p>

            <h3 className="text-2xl font-bold mb-4">
              2. Réservez facilement
            </h3>
            <p className="text-gray-600 mb-8">
              Contactez directement les festivals et réservez via l'application. 
            </p>

            <h3 className="text-2xl font-bold mb-4">
              3. Réduisez vos coûts
            </h3>
            <p className="text-gray-600">
              Accédez à du matériel de qualité sans investir dans du neuf.
            </p>
          </div>
        </div>
      </motion.div>

    </div>

  </div>
</section>

{/* ================= EXEMPLES D'OBJETS ================= */}
<section className="min-h-screen bg-[#00613a] flex items-center py-24 text-white">
  <div className="container mx-auto px-6 max-w-7xl">

    {/* HEADER CENTRÉ */}
    <div className="mb-20 text-center">
    <h2 className="text-4xl md:text-5xl font-bold mb-6">
  <span className="text-[#D17034]">Exemples</span> d’objets disponibles
</h2>

      <p className="text-xl text-white/90 max-w-3xl mx-auto">
        Du matériel scénique aux équipements logistiques, 
        ShareNSpare permet aux festivals de mutualiser des ressources clés 
        et d’optimiser chaque investissement.
      </p>
    </div>

    {/* GRID */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {[
        {
          icon: "fa-microphone",
          title: "Systèmes son",
          desc: "Enceintes professionnelles, consoles, amplificateurs."
        },
        {
          icon: "fa-lightbulb",
          title: "Éclairages scéniques",
          desc: "Projecteurs LED, spots et poursuites, effets lumineux."
        },
        {
          icon: "fa-warehouse",
          title: "Structures & tentes",
          desc: "Chapiteaux, scènes modulaires."
        },
        {
          icon: "fa-chair",
          title: "Mobilier événementiel",
          desc: "Bancs, tables, bars, mobilier VIP."
        },
        {
          icon: "fa-shield-alt",
          title: "Barrières & sécurité",
          desc: "Barrières de sécurité, contrôle d’accès, signalétique."
        },
        {
          icon: "fa-truck-loading",
          title: "Équipements logistiques",
          desc: "Groupes électrogènes, équipements de transport."
        }
      ].map((item, i) => (
        <div
          key={i}
          className="group bg-white text-[#00613a] p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-3"
        >
          <div className="w-16 h-16 bg-[#00613a]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#D17034]/10 transition-all">
            <i className={`fas ${item.icon} text-[#00613a] text-2xl group-hover:text-[#D17034] transition-all`}></i>
          </div>

          <h3 className="text-xl font-bold mb-3">
            {item.title}
          </h3>

          <p className="text-gray-600">
            {item.desc}
          </p>
        </div>
      ))}
    </div>

    {/* PHRASE FINALE CENTRÉE */}
    <p className="text-2xl font-semibold mt-20 text-center">
    Transformez votre matériel dormant en source de revenus !
    </p>

  </div>
</section>

 {/* ========================================================= */}
{/* 4️⃣ DOUBLE BÉNÉFICE (FOND BLANC) */}
{/* ========================================================= */}

<section className="min-h-screen bg-white flex items-center py-24">
  <div className="container mx-auto px-6 max-w-7xl">

  <h2 className="text-4xl md:text-5xl font-bold mb-20 text-center text-black">
  <span className="text-[#00613a]"> Un double</span>{" "}
  <span className="text-[#D17034]">bénéfice !</span>
</h2>

    <div className="grid lg:grid-cols-2 gap-16">

      {/* CARTE 1 */}
      <div className="bg-gray-50 p-12 rounded-3xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
      <h3 className="text-2xl font-bold text-black mb-8">
  Pour votre{" "}
  <span className="text-[#00613a]">
    porte-monnaie
  </span>
</h3>

        <ul className="space-y-5 text-lg text-gray-700">
          <li className="flex items-start gap-3">
            <span className="text-[#D17034] font-bold">✓</span>
            Générer des revenus complémentaires
          </li>
          <li className="flex items-start gap-3">
            <span className="text-[#D17034] font-bold">✓</span>
            Financer votre prochaine édition
          </li>
          <li className="flex items-start gap-3">
            <span className="text-[#D17034] font-bold">✓</span>
            Prolonger la durée de vie des équipements
          </li>
          <li className="flex items-start gap-3">
            <span className="text-[#D17034] font-bold">✓</span>
            Soutenir d’autres événements
          </li>
        </ul>

        <p className="text-xl font-semibold mt-14 text-[#00613a]">
        Votre matériel inutilisé devient une source de revenus !
        </p>
      </div>

      {/* CARTE 2 */}
      <div className="bg-gray-50 p-12 rounded-3xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
      
      <h3 className="text-2xl font-bold text-black mb-8">
  Pour {" "}
  <span className="text-[#00613a]">
    l'environnement
  </span>
</h3>

        <ul className="space-y-5 text-lg text-gray-700">
          <li className="flex items-start gap-3">
            <span className="text-[#D17034] font-bold">✓</span>
            Réduire la production d’équipements
          </li>
          <li className="flex items-start gap-3">
            <span className="text-[#D17034] font-bold">✓</span>
            Limiter les transports inutiles
          </li>
          <li className="flex items-start gap-3">
            <span className="text-[#D17034] font-bold">✓</span>
            Diminuer l’empreinte carbone
          </li>
          <li className="flex items-start gap-3">
            <span className="text-[#D17034] font-bold">✓</span>
            Renforcer l’économie circulaire
          </li>
        </ul>

        <p className="text-xl font-semibold mt-14 text-[#00613a]">
          Une action simple, mais à fort impact.
        </p>
      </div>

    </div>

  </div>
</section>

{/* Section Contact - Fond vert */}
<section id='contact' className="min-h-screen flex items-center bg-[#00613a] py-20">
<div className="container mx-auto px-4 max-w-7xl">


    <div className="max-w-5xl mx-auto bg-white rounded-2xl overflow-hidden shadow-2xl">
      <div className="grid grid-cols-1 lg:grid-cols-2">

        {/* Colonne gauche - Informations de contact */}
        <div className="p-8 md:p-12 bg-gradient-to-br from-[#00613a] to-[#004d2e] text-white">
        <h3 className="text-3xl font-bold mb-6">
  <span className="text-white">Rejoindre</span>{" "}
  <span className="text-[#D17034]">le réseau</span>
</h3>
          <p className="mb-8 text-white/90">
            Notre prototype est prêt à accueillir ses premiers utilisateurs. 
            Contactez-nous afin d’être intégré au réseau et d’accéder à une large sélection 
            de matériel événementiel disponible près de chez vous !
          </p>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                <i className="fas fa-envelope"></i>
              </div>
              <div>
                <div className="font-medium text-lg">Email</div>
                <a 
                  href="mailto:contact@sharenspare.ch" 
                  className="text-white/80 hover:text-white transition-colors"
                >
                  contact@sharenspare.ch
                </a>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div>
                <div className="font-medium text-lg">Localisation</div>
                <address className="text-white/80 not-italic">
                  Suisse
                </address>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-white/20">
              <p className="text-sm text-white/80">
                <i className="fas fa-clock mr-2"></i>
                Nous répondons généralement sous 24-48 heures
              </p>
            </div>
          </div>
        </div>
        
           {/* Colonne droite - Formulaire de contact */}
        <div className="p-8 md:p-12 bg-white">
          <Contact />
        </div>

      </div>
    </div>
  </div>
</section>
      







{/* ========================================================= */}
{/* 6️⃣ REJOINDRE SHARENSPARE (FOND BLANC) */}
{/* ========================================================= */}

<section className="min-h-screen bg-white flex items-center py-24">
  <div className="container mx-auto px-6 max-w-7xl text-center">

    {/* TITRE */}
    <h2 className="text-4xl md:text-5xl font-bold mb-16 text-[#00613a]">
      Rejoindre ShareNSpare, c’est{" "}
      <span className="text-[#D17034]">faire un choix !</span>
    </h2>

    {/* BLOCS */}
    <div className="grid md:grid-cols-3 gap-10 mb-20">

      <div className="bg-[#00613a] text-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
        <p className="text-xl font-semibold">
          La collaboration plutôt que la concurrence
        </p>
      </div>

      <div className="bg-[#00613a] text-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
        <p className="text-xl font-semibold">
          La mutualisation plutôt que l’accumulation
        </p>
      </div>

      <div className="bg-[#00613a] text-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
        <p className="text-xl font-semibold">
          L’intelligence collective plutôt que l’isolement
        </p>
      </div>

    </div>

    {/* TEXTE FINAL */}
    <p className="text-2xl font-semibold text-[#00613a] max-w-4xl mx-auto mb-12">
      ShareNSpare rassemble les festivals afin de réduire les coûts,
      renforcer l’entraide et construire un modèle durable.
    </p>

    {/* BOUTON CTA */}
    <Link
      to="#contact"
      className="inline-block bg-[#D17034] text-white px-12 py-5 rounded-full text-lg font-semibold transition-all shadow-xl hover:bg-[#00613a] hover:text-white hover:-translate-y-1"
    >
      Rejoindre le réseau
    </Link>

  </div>
</section>


    </div>
  );
};

export default Festival;