import { useState } from 'react';
import { Link } from 'react-router-dom';




const B2B = () => {
  // État pour le formulaire de contact
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: ''
  });

  // Gestion des changements du formulaire
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Gestion de la soumission du formulaire
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Formulaire soumis:', formData);
    // Ajoutez ici votre logique d'envoi du formulaire (API, etc.)
    alert('Merci pour votre message! Nous vous contacterons prochainement.');
    setFormData({ name: '', company: '', email: '', phone: '', message: '' });
  };

  return (
    <div id='hero' className="pt-16">
      {/* Section 1: ShareNspare pour les entreprises - Fond blanc */}
      <section className="min-h-screen py-20 flex items-center bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#00613a]">
                ShareNspare pour les entreprises
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
                    <strong className="text-[#00613a]">Transformez</strong> votre matériel inactif en opportunité en le proposant à d'autres entreprises locales.
                  </p>
                </div>
                
                <div className="flex items-start gap-3 mb-6">
                  <div className="bg-[#00613a]/10 p-2 rounded-full mt-1">
                    <i className="fas fa-search-dollar text-[#00613a]"></i>
                  </div>
                  <p>
                    <strong className="text-[#00613a]">Accédez</strong> aux équipements dont vous avez besoin ponctuellement, sans investir dans du matériel neuf.
                  </p>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="bg-[#00613a]/10 p-2 rounded-full mt-1">
                    <i className="fas fa-leaf text-[#00613a]"></i>
                  </div>
                  <p>
                    <strong className="text-[#00613a]">Réduisez</strong> vos coûts, améliorez votre rentabilité et participez à une démarche durable.
                  </p>
                </div>
              </div>
              
              <div className="mt-8">
              <Link 
                to="#" 
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-[#00613a] text-white py-3 px-8 rounded-full hover:bg-[#005131] transition-colors font-medium flex items-center gap-2"
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
                className="mt-6 text-center p-4 bg-[#00613a] text-white rounded-xl block hover:bg-[#005131] transition-colors cursor-pointer"
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
      
      {/* Section 3: Contactez-nous - Fond blanc */}
      <section className="min-h-screen py-20 flex items-center bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6 text-[#00613a]">Contactez-nous</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Vous souhaitez en savoir plus sur ShareNSpare et découvrir comment votre entreprise peut 
              bénéficier de cette nouvelle façon de collaborer ?
            </p>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mt-4">
              Remplissez le formulaire ci-dessous et nous vous recontacterons rapidement pour discuter de vos besoins.
            </p>
          </div>
          
          <div id="contact-form" className="max-w-3xl mx-auto bg-gray-50 rounded-2xl shadow-lg p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Nom et prénom</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#00613a] focus:ring-2 focus:ring-[#00613a]/20"
                    placeholder="Votre nom"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-gray-700 font-medium mb-2">Entreprise</label>
                  <input 
                    type="text" 
                    id="company" 
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#00613a] focus:ring-2 focus:ring-[#00613a]/20"
                    placeholder="Nom de votre entreprise"
                    required
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email professionnel</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#00613a] focus:ring-2 focus:ring-[#00613a]/20"
                    placeholder="votre.email@entreprise.com"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Téléphone</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#00613a] focus:ring-2 focus:ring-[#00613a]/20"
                    placeholder="Votre numéro de téléphone"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Votre message</label>
                <textarea 
                  id="message" 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#00613a] focus:ring-2 focus:ring-[#00613a]/20 resize-none"
                  placeholder="Décrivez votre besoin ou votre question"
                  required
                ></textarea>
              </div>
              
              <div className="flex items-center">
                <input 
                  type="checkbox" 
                  id="consent" 
                  className="w-5 h-5 text-[#00613a]" 
                  required
                />
                <label htmlFor="consent" className="ml-3 text-gray-700">
                  J'accepte que mes données soient utilisées pour être recontacté(e)
                </label>
              </div>
              
              <div className="text-center pt-4">
                <button 
                  type="submit" 
                  className="bg-[#00613a] text-white font-medium px-8 py-3 rounded-lg hover:bg-[#005131] transition-colors"
                >
                  Envoyer ma demande
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default B2B;