import { useState } from 'react';
import { Link } from 'react-router-dom';

const B2B = () => {
  const [activeTab, setActiveTab] = useState('equipment');
  
  // Données pour la section "Ils nous font confiance"
  const partners = [
    { id: 1, name: "TechCorp", logo: "https://via.placeholder.com/120x60?text=TechCorp" },
    { id: 2, name: "BuildPro", logo: "https://via.placeholder.com/120x60?text=BuildPro" },
    { id: 3, name: "MediTech", logo: "https://via.placeholder.com/120x60?text=MediTech" },
    { id: 4, name: "EcoSolutions", logo: "https://via.placeholder.com/120x60?text=EcoSolutions" },
    { id: 5, name: "AlpineEvents", logo: "https://via.placeholder.com/120x60?text=AlpineEvents" },
  ];
  
  // Données pour la section avantages
  const benefits = [
    {
      id: 1,
      title: "Rentabilisez vos équipements",
      description: "Optimisez l'utilisation de vos ressources matérielles en les rendant accessibles aux entreprises qui en ont besoin ponctuellement.",
      icon: "fa-chart-line",
    },
    {
      id: 2,
      title: "Réduisez vos coûts d'exploitation",
      description: "Accédez aux équipements dont vous avez besoin sans investissement lourd en capital et optimisez votre trésorerie.",
      icon: "fa-coins",
    },
    {
      id: 3,
      title: "Gestion simplifiée",
      description: "Notre plateforme sécurisée gère automatiquement les réservations, les contrats et les paiements pour vous.",
      icon: "fa-tasks",
    },
    {
      id: 4,
      title: "Solution éco-responsable",
      description: "Réduisez votre empreinte carbone en mutualisant les ressources et participez à une économie plus durable.",
      icon: "fa-leaf",
    }
  ];
  
  return (
    <div className="pt-16">
      {/* Section Hero - Fond blanc */}
      <section className="h-screen flex items-center bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="inline-block bg-[rgba(0,97,58,0.1)] text-[#00613a] font-semibold px-4 py-2 rounded-full text-sm">
                Solutions pour entreprises
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                L'économie de partage au service des <span className="text-[#00613a]">entreprises</span>
              </h1>
              <p className="text-xl text-gray-600">
                Optimisez votre gestion d'équipements professionnels grâce à notre solution de mutualisation des ressources matérielles.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#demo" className="btn btn-primary">
                  Demander une démo
                </a>
                <Link to="/contact" className="btn btn-outline">
                  Nous contacter
                </Link>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <img 
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Entreprises collaboratives" 
                className="rounded-xl shadow-lg max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Section Partenaires - Fond gris clair */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <p className="text-center text-gray-600 font-medium mb-10">
            Ils nous font confiance
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {partners.map(partner => (
              <div key={partner.id}>
                <img 
                  src={partner.logo} 
                  alt={partner.name} 
                  className="h-12 grayscale hover:grayscale-0 transition-all"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Section Comment ça marche - Fond vert */}
      <section className="min-h-screen flex items-center bg-[#00613a] text-white py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Comment ça marche</h2>
            <p className="text-xl max-w-2xl mx-auto">
              Share N Spare Business offre une solution complète pour la gestion et le partage de vos équipements professionnels.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-6 max-w-3xl mx-auto">
            <div className="flex rounded-full bg-gray-100 p-1 mb-8">
              <button 
                className={`flex-1 py-3 rounded-full text-center transition-all ${activeTab === 'equipment' ? 'bg-[#00613a] text-white' : 'text-gray-700'}`}
                onClick={() => setActiveTab('equipment')}
              >
                Mettre à disposition
              </button>
              <button 
                className={`flex-1 py-3 rounded-full text-center transition-all ${activeTab === 'rent' ? 'bg-[#00613a] text-white' : 'text-gray-700'}`}
                onClick={() => setActiveTab('rent')}
              >
                Louer du matériel
              </button>
            </div>
            
            <div className="text-gray-800">
              {activeTab === 'equipment' ? (
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#00613a] text-white flex items-center justify-center rounded-full shrink-0 font-bold text-xl">1</div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Référencez vos équipements</h3>
                      <p className="text-gray-600">Cataloguez facilement vos machines, outils ou espaces sous-exploités dans notre plateforme sécurisée.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#00613a] text-white flex items-center justify-center rounded-full shrink-0 font-bold text-xl">2</div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Définissez vos conditions</h3>
                      <p className="text-gray-600">Fixez vos tarifs, disponibilités, conditions d'assurance et modalités de prise en charge.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#00613a] text-white flex items-center justify-center rounded-full shrink-0 font-bold text-xl">3</div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Recevez des demandes</h3>
                      <p className="text-gray-600">Les entreprises intéressées vous contactent via notre plateforme sécurisée et vérifiée.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#00613a] text-white flex items-center justify-center rounded-full shrink-0 font-bold text-xl">4</div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Générez des revenus supplémentaires</h3>
                      <p className="text-gray-600">Recevez vos paiements automatiquement et suivez vos performances dans votre tableau de bord.</p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#00613a] text-white flex items-center justify-center rounded-full shrink-0 font-bold text-xl">1</div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Trouvez l'équipement adapté</h3>
                      <p className="text-gray-600">Accédez à notre catalogue d'équipements professionnels disponibles dans votre région.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#00613a] text-white flex items-center justify-center rounded-full shrink-0 font-bold text-xl">2</div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Réservez en quelques clics</h3>
                      <p className="text-gray-600">Sélectionnez vos dates et envoyez une demande de réservation au propriétaire de l'équipement.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#00613a] text-white flex items-center justify-center rounded-full shrink-0 font-bold text-xl">3</div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Signez électroniquement</h3>
                      <p className="text-gray-600">Un contrat est généré automatiquement avec toutes les garanties nécessaires pour les deux parties.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#00613a] text-white flex items-center justify-center rounded-full shrink-0 font-bold text-xl">4</div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Utilisez et restituez</h3>
                      <p className="text-gray-600">Récupérez l'équipement selon les modalités définies et restituez-le en fin de période.</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      
      {/* Section Avantages - Fond blanc */}
      <section className="min-h-screen flex items-center bg-white py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Les avantages pour votre entreprise</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Notre solution offre de nombreux bénéfices pour optimiser votre parc matériel et réduire vos coûts d'exploitation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {benefits.map(benefit => (
              <div key={benefit.id} className="bg-gray-50 rounded-xl p-8 shadow-md hover:shadow-lg transition-all hover:-translate-y-1">
                <div className="w-16 h-16 bg-[#00613a] rounded-full flex items-center justify-center mb-6 text-white">
                  <i className={`fas ${benefit.icon} text-2xl`}></i>
                </div>
                <h3 className="text-2xl font-bold mb-4">{benefit.title}</h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Section Solutions - Fond vert clair */}
      <section className="min-h-screen flex items-center bg-[rgba(0,97,58,0.1)] py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Nos solutions sectorielles</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Des offres adaptées à tous les secteurs professionnels avec des fonctionnalités spécifiques.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="h-48 bg-[#00613a] flex items-center justify-center text-white">
                <i className="fas fa-hard-hat text-5xl"></i>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">BTP & Construction</h3>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2">
                    <i className="fas fa-check text-[#00613a]"></i>
                    <span>Gestion des engins de chantier</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <i className="fas fa-check text-[#00613a]"></i>
                    <span>Équipements spécialisés</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <i className="fas fa-check text-[#00613a]"></i>
                    <span>Planification par projet</span>
                  </li>
                </ul>
                <Link to="/btp" className="text-[#00613a] font-semibold hover:underline inline-flex items-center">
                  <span>En savoir plus</span>
                  <i className="fas fa-arrow-right ml-2"></i>
                </Link>
              </div>
            </div>
            
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="h-48 bg-[#00613a] flex items-center justify-center text-white">
                <i className="fas fa-stethoscope text-5xl"></i>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">Secteur médical</h3>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2">
                    <i className="fas fa-check text-[#00613a]"></i>
                    <span>Matériel médical spécialisé</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <i className="fas fa-check text-[#00613a]"></i>
                    <span>Conformité aux normes sanitaires</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <i className="fas fa-check text-[#00613a]"></i>
                    <span>Traçabilité certifiée</span>
                  </li>
                </ul>
                <Link to="/medical" className="text-[#00613a] font-semibold hover:underline inline-flex items-center">
                  <span>En savoir plus</span>
                  <i className="fas fa-arrow-right ml-2"></i>
                </Link>
              </div>
            </div>
            
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="h-48 bg-[#00613a] flex items-center justify-center text-white">
                <i className="fas fa-camera text-5xl"></i>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">Événementiel</h3>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2">
                    <i className="fas fa-check text-[#00613a]"></i>
                    <span>Matériel audiovisuel</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <i className="fas fa-check text-[#00613a]"></i>
                    <span>Mobilier et décoration</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <i className="fas fa-check text-[#00613a]"></i>
                    <span>Réservation saisonnière</span>
                  </li>
                </ul>
                <Link to="/event" className="text-[#00613a] font-semibold hover:underline inline-flex items-center">
                  <span>En savoir plus</span>
                  <i className="fas fa-arrow-right ml-2"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Section Tableau de bord - Fond blanc */}
      <section className="min-h-screen flex items-center bg-white py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Tableau de bord intelligent</h2>
              <p className="text-xl text-gray-600">
                Notre plateforme offre une interface intuitive pour suivre et gérer tous vos équipements, réservations et transactions.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#00613a] text-white flex items-center justify-center shrink-0 mt-1">
                    <i className="fas fa-check text-sm"></i>
                  </div>
                  <span className="text-gray-700">Suivi en temps réel de vos équipements</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#00613a] text-white flex items-center justify-center shrink-0 mt-1">
                    <i className="fas fa-check text-sm"></i>
                  </div>
                  <span className="text-gray-700">Gestion des disponibilités et planning</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#00613a] text-white flex items-center justify-center shrink-0 mt-1">
                    <i className="fas fa-check text-sm"></i>
                  </div>
                  <span className="text-gray-700">Rapports financiers et analytiques</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#00613a] text-white flex items-center justify-center shrink-0 mt-1">
                    <i className="fas fa-check text-sm"></i>
                  </div>
                  <span className="text-gray-700">Gestion des contrats et assurances</span>
                </li>
              </ul>
            </div>
            
            <div className="flex justify-center shadow-2xl rounded-xl overflow-hidden">
              <img 
                src="https://via.placeholder.com/600x400?text=Dashboard+Screenshot" 
                alt="Tableau de bord Share N Spare Business" 
                className="max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Section FAQ - Fond vert clair */}
      <section className="min-h-screen flex items-center bg-[rgba(0,97,58,0.1)] py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Questions fréquentes</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tout ce que vous devez savoir sur notre solution professionnelle.
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold mb-3">Comment la sécurité est-elle assurée ?</h3>
              <p className="text-gray-600">
                Tous les équipements sont couverts par notre assurance partenaire pendant la durée de la location. De plus, nous vérifions l'identité et la solvabilité de toutes les entreprises inscrites sur notre plateforme.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold mb-3">Quels types d'entreprises peuvent utiliser votre solution ?</h3>
              <p className="text-gray-600">
                Notre plateforme est adaptée aux entreprises de toutes tailles, des TPE aux grands groupes, dans divers secteurs d'activité : construction, événementiel, médical, audiovisuel, etc.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold mb-3">Comment sont gérés les aspects juridiques ?</h3>
              <p className="text-gray-600">
                Notre système génère automatiquement des contrats adaptés à chaque location, conformes à la législation suisse. Tous les documents sont signés électroniquement et archivés de façon sécurisée.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold mb-3">Quel est le modèle de facturation ?</h3>
              <p className="text-gray-600">
                Nous proposons plusieurs formules d'abonnement selon vos besoins, ainsi qu'une commission sur les transactions réalisées via notre plateforme. Contactez-nous pour obtenir un devis personnalisé.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Section Contact/Demo - Fond vert */}
      <section id='contact' className="min-h-screen flex items-center bg-[#00613a] py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-5xl mx-auto bg-white rounded-2xl overflow-hidden shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 md:p-12">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">Contactez notre équipe commerciale</h2>
                <p className="text-gray-600 mb-8">
                  Nos experts sont à votre disposition pour vous aider à optimiser la gestion de votre équipement professionnel.
                </p>
                
                <form className="space-y-6">
                  <div>
                    <label htmlFor="company" className="block text-gray-700 font-medium mb-2">Nom de l'entreprise</label>
                    <input 
                      type="text" 
                      id="company"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#00613a] focus:ring-2 focus:ring-[#00613a]/20"
                      placeholder="Votre entreprise"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="contact" className="block text-gray-700 font-medium mb-2">Personne de contact</label>
                    <input 
                      type="text" 
                      id="contact"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#00613a] focus:ring-2 focus:ring-[#00613a]/20"
                      placeholder="Nom et prénom"
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email professionnel</label>
                      <input 
                        type="email" 
                        id="email"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#00613a] focus:ring-2 focus:ring-[#00613a]/20"
                        placeholder="email@entreprise.com"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Téléphone</label>
                      <input 
                        type="tel" 
                        id="phone"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#00613a] focus:ring-2 focus:ring-[#00613a]/20"
                        placeholder="+41 XX XXX XX XX"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Votre besoin</label>
                    <textarea 
                      id="message"
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#00613a] focus:ring-2 focus:ring-[#00613a]/20 resize-none"
                      placeholder="Décrivez votre projet ou vos besoins spécifiques"
                    ></textarea>
                  </div>
                  
                  <div>
                    <button 
                      type="submit" 
                      className="bg-[#00613a] text-white px-8 py-3 rounded-lg hover:bg-[#007a49] transition-colors font-medium"
                    >
                      Demander une démo
                    </button>
                  </div>
                </form>
              </div>
              
              <div className="p-8 md:p-12 bg-[#00613a] text-white flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-6">Pourquoi demander une démo ?</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                      <i className="fas fa-laptop-code"></i>
                    </div>
                    <div>
                      <h4 className="font-medium text-lg">Solution sur mesure</h4>
                      <p className="text-white/80">Découvrez comment notre plateforme s'adapte à vos besoins spécifiques.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                      <i className="fas fa-calculator"></i>
                    </div>
                    <div>
                      <h4 className="font-medium text-lg">Estimation de ROI</h4>
                      <p className="text-white/80">Recevez une simulation personnalisée des économies potentielles pour votre entreprise.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                      <i className="fas fa-shield-alt"></i>
                    </div>
                    <div>
                      <h4 className="font-medium text-lg">Sécurité et assurance</h4>
                      <p className="text-white/80">Comprenez en détail nos mesures de protection pour vos équipements et transactions.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                      <i className="fas fa-rocket"></i>
                    </div>
                    <div>
                      <h4 className="font-medium text-lg">Intégration rapide</h4>
                      <p className="text-white/80">Découvrez comment implémenter notre solution en moins de 48h dans votre entreprise.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default B2B;