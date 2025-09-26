import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const C2C = () => {
  const [activeTab, setActiveTab] = useState('rent');
  const [days, setDays] = useState(90);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  
  const testimonialsRef = useRef<HTMLDivElement>(null);
  
  // Définir des styles pour les lignes de témoignages
  const testimonialRowStyle = {
    display: 'flex',
    gap: '20px',
    width: 'fit-content'
  };
  
  // Témoignages fictifs
  const testimonials = [
    { id: 1, name: "Marie L.", text: "J'ai hâte de pouvoir me connecter avec mes voisins pour partager des objets du quotidien. Une super initiative !", avatar: "https://randomuser.me/api/portraits/women/44.jpg" },
    { id: 2, name: "Thomas R.", text: "Fini les outils qui prennent la poussière dans mon garage. Je vais enfin pouvoir les rentabiliser !", avatar: "https://randomuser.me/api/portraits/men/32.jpg" },
    { id: 3, name: "Julie M.", text: "L'économie de partage est l'avenir. Je suis ravie de voir une app suisse qui facilite ces échanges.", avatar: "https://randomuser.me/api/portraits/women/68.jpg" },
    { id: 4, name: "Antoine D.", text: "Pouvoir louer du matériel de qualité sans avoir à l'acheter est une révolution pour moi.", avatar: "https://randomuser.me/api/portraits/men/12.jpg" },
    { id: 5, name: "Sophie B.", text: "J'adore l'idée de réduire notre empreinte écologique tout en créant du lien social dans mon quartier.", avatar: "https://randomuser.me/api/portraits/women/65.jpg" },
    { id: 6, name: "Luc V.", text: "Je possède tellement d'objets que j'utilise rarement, c'est génial de pouvoir les partager.", avatar: "https://randomuser.me/api/portraits/men/42.jpg" },
    { id: 7, name: "Émilie G.", text: "Cette application va vraiment changer notre façon de consommer. J'ai hâte de l'utiliser !", avatar: "https://randomuser.me/api/portraits/women/33.jpg" },
    { id: 8, name: "Nicolas P.", text: "Économiser de l'argent tout en aidant la planète, c'est exactement ce dont nous avons besoin.", avatar: "https://randomuser.me/api/portraits/men/67.jpg" },
    { id: 9, name: "Camille F.", text: "Je suis impatiente de pouvoir prêter ma machine à raclette qui ne sert que 2 fois par an !", avatar: "https://randomuser.me/api/portraits/women/22.jpg" },
  ];
  
  // Articles de blog fictifs
  const blogPosts = [
    {
      id: 1,
      title: "L'économie de partage : un modèle d'avenir",
      excerpt: "Découvrez comment l'économie collaborative transforme notre façon de consommer et d'échanger.",
      image: "https://images.unsplash.com/photo-1521791055366-0d553872125f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      date: "12 mai 2023"
    },
    {
      id: 2,
      title: "Réduire son impact écologique au quotidien",
      excerpt: "Astuces et conseils pour diminuer votre empreinte carbone grâce au partage d'objets.",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      date: "3 juin 2023"
    },
    {
      id: 3,
      title: "Comment optimiser l'usage de vos objets",
      excerpt: "Maximisez l'utilisation de vos biens en les partageant avec votre communauté locale.",
      image: "https://images.unsplash.com/photo-1556742031-c6961e8560b0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      date: "28 juin 2023"
    }
  ];
  
  // Effet pour le carousel de témoignages
  useEffect(() => {
    const container = testimonialsRef.current;
    if (!container) return;
    
    // Créer dynamiquement un élément style pour les animations
    const styleElement = document.createElement('style');
    styleElement.textContent = `
      @keyframes scrollLeft {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
      
      @keyframes scrollRight {
        0% { transform: translateX(-50%); }
        100% { transform: translateX(0); }
      }
    `;
    document.head.appendChild(styleElement);
    
    const cloneItems = () => {
      const rows = container.querySelectorAll('.testimonial-row');
      rows.forEach(row => {
        const items = Array.from(row.children);
        items.forEach(item => {
          const clone = item.cloneNode(true);
          row.appendChild(clone);
        });
      });
    };
    
    cloneItems();
    
    // Animation pour chaque ligne
    const rows = container.querySelectorAll('.testimonial-row');
    rows.forEach((row, index) => {
      const direction = index % 2 === 0 ? 'scrollLeft' : 'scrollRight';
      const duration = 40 + (index * 5);
      (row as HTMLElement).style.animation = `${direction} ${duration}s linear infinite`;
    });
    
    // Nettoyage
    return () => {
      if (styleElement.parentNode) {
        styleElement.parentNode.removeChild(styleElement);
      }
      const rows = container.querySelectorAll('.testimonial-row');
      rows.forEach(row => {
        (row as HTMLElement).style.animation = '';
      });
    };
  }, []);
  
  // Timer pour le lancement de l'application
  useEffect(() => {
    const countdownDate = new Date();
    countdownDate.setDate(countdownDate.getDate() + 90); // 3 mois
    
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate.getTime() - now;
      
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
      setDays(days);
      setHours(hours);
      setMinutes(minutes);
      setSeconds(seconds);
      
      if (distance < 0) {
        clearInterval(timer);
        setDays(0);
        setHours(0);
        setMinutes(0);
        setSeconds(0);
      }
    }, 1000);
    
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="pt-16">
      {/* Section d'accueil - Fond blanc */}
      <section className="h-screen flex items-center bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Partagez vos objets, réalisez des économies
              </h1>
              <p className="text-xl md:text-2xl text-gray-600">
                Une nouvelle façon de consommer responsable et économique
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="#more" className="btn btn-primary">
                  En savoir plus
                </Link>
                <div className="flex items-center gap-4">
                  <span className="text-gray-600 font-medium">Rejoindre la communauté:</span>
                  <div className="flex gap-3">
                    <a href="#" className="w-10 h-10 rounded-full bg-[#00613a] flex items-center justify-center text-white hover:bg-opacity-90 transition-all">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-[#00613a] flex items-center justify-center text-white hover:bg-opacity-90 transition-all">
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-[#00613a] flex items-center justify-center text-white hover:bg-opacity-90 transition-all">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <img 
                src="https://images.unsplash.com/photo-1591035897819-f4bdf739f446?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Partage d'objets" 
                className="rounded-xl shadow-lg max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Section Comment ça marche - Fond vert */}
      <section id="more" className="min-h-screen flex items-center bg-[#00613a] text-white py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Comment ça marche</h2>
            <p className="text-xl max-w-2xl mx-auto">
              Share N Spare vous permet de louer vos objets inutilisés ou de louer ce dont vous avez besoin
              ponctuellement, facilement et en toute sécurité.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-6 max-w-3xl mx-auto">
            <div className="flex rounded-full bg-gray-100 p-1 mb-8">
              <button 
                className={`flex-1 py-3 rounded-full text-center transition-all ${activeTab === 'rent' ? 'bg-[#00613a] text-white' : 'text-gray-700'}`}
                onClick={() => setActiveTab('rent')}
              >
                Mettre en location
              </button>
              <button 
                className={`flex-1 py-3 rounded-full text-center transition-all ${activeTab === 'borrow' ? 'bg-[#00613a] text-white' : 'text-gray-700'}`}
                onClick={() => setActiveTab('borrow')}
              >
                Louer
              </button>
            </div>
            
            <div className="text-gray-800">
              {activeTab === 'rent' ? (
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#00613a] text-white flex items-center justify-center rounded-full shrink-0 font-bold text-xl">1</div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Ajoutez vos objets</h3>
                      <p className="text-gray-600">Prenez une photo, décrivez l'objet et fixez un prix de location. C'est simple et rapide !</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#00613a] text-white flex items-center justify-center rounded-full shrink-0 font-bold text-xl">2</div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Recevez des demandes</h3>
                      <p className="text-gray-600">Les membres intéressés vous envoient des demandes de réservation pour les dates souhaitées.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#00613a] text-white flex items-center justify-center rounded-full shrink-0 font-bold text-xl">3</div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Échangez l'objet</h3>
                      <p className="text-gray-600">Rencontrez le locataire pour lui remettre l'objet. Vous pouvez vérifier son identité via l'application.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#00613a] text-white flex items-center justify-center rounded-full shrink-0 font-bold text-xl">4</div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Gagnez de l'argent</h3>
                      <p className="text-gray-600">Recevez votre paiement directement sur votre compte une fois la location terminée.</p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#00613a] text-white flex items-center justify-center rounded-full shrink-0 font-bold text-xl">1</div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Trouvez l'objet dont vous avez besoin</h3>
                      <p className="text-gray-600">Recherchez par catégorie ou mot-clé, et filtrez les résultats par distance et disponibilité.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#00613a] text-white flex items-center justify-center rounded-full shrink-0 font-bold text-xl">2</div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Réservez en quelques clics</h3>
                      <p className="text-gray-600">Sélectionnez les dates et envoyez une demande de réservation au propriétaire.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#00613a] text-white flex items-center justify-center rounded-full shrink-0 font-bold text-xl">3</div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Récupérez l'objet</h3>
                      <p className="text-gray-600">Rencontrez le propriétaire pour récupérer l'objet loué à l'endroit convenu.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#00613a] text-white flex items-center justify-center rounded-full shrink-0 font-bold text-xl">4</div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Profitez et restituez</h3>
                      <p className="text-gray-600">Utilisez l'objet pendant la durée convenue, puis restituez-le en bon état au propriétaire.</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      
      {/* Section Location de service - Fond blanc */}
      <section className="min-h-screen flex items-center bg-white py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Location de services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              En plus des objets, vous pouvez aussi partager vos compétences et services avec votre communauté locale.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl p-8 shadow-md text-center hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="w-20 h-20 bg-[#00613a] rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-tools text-3xl text-white"></i>
              </div>
              <h3 className="text-2xl font-bold mb-4">Bricolage</h3>
              <p className="text-gray-600">
                Partagez votre expertise en menuiserie, plomberie ou électricité avec ceux qui en ont besoin.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-8 shadow-md text-center hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="w-20 h-20 bg-[#00613a] rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-seedling text-3xl text-white"></i>
              </div>
              <h3 className="text-2xl font-bold mb-4">Jardinage</h3>
              <p className="text-gray-600">
                Aidez vos voisins à entretenir leur jardin ou à créer leur potager urbain.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-8 shadow-md text-center hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="w-20 h-20 bg-[#00613a] rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-laptop-code text-3xl text-white"></i>
              </div>
              <h3 className="text-2xl font-bold mb-4">Informatique</h3>
              <p className="text-gray-600">
                Proposez votre aide pour résoudre les problèmes informatiques ou pour des formations.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <button className="btn btn-outline inline-flex items-center gap-2">
              <span>Découvrir tous les services</span>
              <i className="fas fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </section>
      
      {/* Section Témoignages - Fond vert */}
      <section className="min-h-screen flex items-center bg-[#00613a] py-20 overflow-hidden">
        <div className="container mx-auto px-4 max-w-7xl relative">
          <div className="text-center mb-16 text-white">
            <h2 className="text-4xl font-bold mb-6">Ce que notre communauté en dit</h2>
            <p className="text-xl max-w-2xl mx-auto">
              Découvrez les témoignages de nos premiers utilisateurs enthousiastes.
            </p>
          </div>
          
          <div className="testimonials-container" ref={testimonialsRef}>
            <div className="testimonial-row mb-6 py-2" style={testimonialRowStyle}>
              {testimonials.slice(0, 3).map(testimonial => (
                <div 
                  key={`row1-${testimonial.id}`}
                  className="bg-white rounded-xl p-6 shadow-md w-80 shrink-0"
                >
                  <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
                  <div className="flex items-center gap-3">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name} 
                      className="w-12 h-12 rounded-full"
                    />
                    <span className="font-medium text-gray-900">{testimonial.name}</span>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="testimonial-row mb-6 py-2" style={testimonialRowStyle}>
              {testimonials.slice(3, 6).map(testimonial => (
                <div 
                  key={`row2-${testimonial.id}`}
                  className="bg-white rounded-xl p-6 shadow-md w-80 shrink-0"
                >
                  <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
                  <div className="flex items-center gap-3">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name} 
                      className="w-12 h-12 rounded-full"
                    />
                    <span className="font-medium text-gray-900">{testimonial.name}</span>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="testimonial-row py-2" style={testimonialRowStyle}>
              {testimonials.slice(6, 9).map(testimonial => (
                <div 
                  key={`row3-${testimonial.id}`}
                  className="bg-white rounded-xl p-6 shadow-md w-80 shrink-0"
                >
                  <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
                  <div className="flex items-center gap-3">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name} 
                      className="w-12 h-12 rounded-full"
                    />
                    <span className="font-medium text-gray-900">{testimonial.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Section Blog - Fond blanc */}
      <section className="min-h-screen flex items-center bg-white py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Notre blog</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Découvrez nos articles sur l'économie de partage et l'écologie.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map(post => (
              <div key={post.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all hover:-translate-y-1">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="text-sm text-gray-500 mb-2">{post.date}</div>
                  <h3 className="text-xl font-bold mb-3">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <Link to="#" className="text-[#00613a] font-semibold hover:underline inline-flex items-center">
                    <span>Lire l'article</span>
                    <i className="fas fa-arrow-right ml-2"></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/blog" className="btn btn-primary inline-flex items-center gap-2">
              <span>Voir tous les articles</span>
              <i className="fas fa-arrow-right"></i>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Section Compteur - Fond vert */}
      <section className="min-h-screen flex items-center bg-[#00613a] py-20 text-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">L'application sera bientôt disponible</h2>
            <p className="text-xl max-w-2xl mx-auto">
              Notre application mobile arrive dans très peu de temps. Inscrivez-vous pour être informé de son lancement !
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-12">
            <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-center">
              <div className="text-5xl font-bold mb-2">{days}</div>
              <div className="text-sm uppercase tracking-wider">Jours</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-center">
              <div className="text-5xl font-bold mb-2">{hours}</div>
              <div className="text-sm uppercase tracking-wider">Heures</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-center">
              <div className="text-5xl font-bold mb-2">{minutes}</div>
              <div className="text-sm uppercase tracking-wider">Minutes</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-center">
              <div className="text-5xl font-bold mb-2">{seconds}</div>
              <div className="text-sm uppercase tracking-wider">Secondes</div>
            </div>
          </div>
          
          <div className="max-w-lg mx-auto">
            <form className="flex flex-col md:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Votre adresse e-mail" 
                className="flex-1 px-4 py-3 rounded-full border-0 outline-none text-gray-800"
              />
              <button type="submit" className="bg-white text-[#00613a] font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition-colors">
                M'avertir
              </button>
            </form>
          </div>
        </div>
      </section>
      
      {/* Section Devenir partenaire - Fond blanc */}
      <section className="min-h-screen flex items-center bg-white py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-3xl mx-auto bg-gray-50 rounded-2xl p-8 md:p-12 shadow-lg">
            <div className="text-center mb-10">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Devenir partenaire</h2>
              <p className="text-xl text-gray-600">
                Le projet vous intéresse ? Rejoignez l'aventure Share N Spare et participez à la révolution de l'économie de partage.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-2xl font-bold mb-4 text-[#00613a]">Pour les entreprises</h3>
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
              
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-2xl font-bold mb-4 text-[#00613a]">Pour les collectivités</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <i className="fas fa-check-circle text-[#00613a] mt-1"></i>
                    <span>Proposez un nouveau service à vos citoyens</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <i className="fas fa-check-circle text-[#00613a] mt-1"></i>
                    <span>Réduisez l'impact environnemental de votre commune</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <i className="fas fa-check-circle text-[#00613a] mt-1"></i>
                    <span>Créez du lien social entre les habitants</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <i className="fas fa-check-circle text-[#00613a] mt-1"></i>
                    <span>Développez l'économie locale et solidaire</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="text-center">
              <Link to="/partners" className="btn btn-primary inline-flex items-center gap-2">
                <span>En savoir plus</span>
                <i className="fas fa-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Section Contact - Fond vert */}
      <section id='contact' className="min-h-screen flex items-center bg-[#00613a] py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-5xl mx-auto bg-white rounded-2xl overflow-hidden shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 md:p-12 bg-[#00613a] text-white">
                <h2 className="text-3xl font-bold mb-6">Contactez-nous</h2>
                <p className="mb-8">
                  Vous avez des questions ou des suggestions ? Nous sommes à votre écoute ! 
                  Remplissez ce formulaire et nous vous répondrons dans les meilleurs délais.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                      <i className="fas fa-envelope"></i>
                    </div>
                    <div>
                      <div className="font-medium text-lg">Email</div>
                      <a href="mailto:contact@sharenspare.ch" className="text-white/80 hover:text-white">contact@sharenspare.ch</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                      <i className="fas fa-phone-alt"></i>
                    </div>
                    <div>
                      <div className="font-medium text-lg">Téléphone</div>
                      <a href="tel:+41XXXXXXXXX" className="text-white/80 hover:text-white">+41 XX XXX XX XX</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                      <i className="fas fa-map-marker-alt"></i>
                    </div>
                    <div>
                      <div className="font-medium text-lg">Adresse</div>
                      <address className="text-white/80 not-italic">
                        Share N Spare<br />
                        1200 Genève<br />
                        Suisse
                      </address>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-8 md:p-12">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Nom</label>
                      <input 
                        type="text" 
                        id="name"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#00613a] focus:ring-2 focus:ring-[#00613a]/20"
                        placeholder="Votre nom"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                      <input 
                        type="email" 
                        id="email"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#00613a] focus:ring-2 focus:ring-[#00613a]/20"
                        placeholder="Votre email"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Sujet</label>
                    <input 
                      type="text" 
                      id="subject"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#00613a] focus:ring-2 focus:ring-[#00613a]/20"
                      placeholder="Sujet de votre message"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                    <textarea 
                      id="message"
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#00613a] focus:ring-2 focus:ring-[#00613a]/20 resize-none"
                      placeholder="Votre message"
                    ></textarea>
                  </div>
                  
                  <div>
                    <button 
                      type="submit" 
                      className="bg-[#00613a] text-white px-8 py-3 rounded-lg hover:bg-[#007a49] transition-colors font-medium w-full md:w-auto"
                    >
                      Envoyer le message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default C2C;