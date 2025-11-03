import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!acceptTerms) {
      alert('Veuillez accepter les conditions d\'utilisation pour envoyer le formulaire.');
      return;
    }

    setIsSubmitting(true);

    const form = e.target as HTMLFormElement;
    const data = new FormData(form);
    
    // ✅ IMPORTANT: S'assurer que form-name est présent
    if (!data.has('form-name')) {
      data.append('form-name', 'contact');
    }

    // Encoder pour Netlify
    const body = new URLSearchParams();
    data.forEach((value, key) => {
      body.append(key, value.toString());
    });

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: body.toString()
    })
    .then((response) => {
      console.log('✅ Réponse serveur:', response.status);
      if (response.ok || response.status === 200) {
        setIsSubmitted(true);
      } else {
        throw new Error(`HTTP ${response.status}`);
      }
      setIsSubmitting(false);
    })
    .catch((error) => {
      console.error('❌ Erreur lors de l\'envoi:', error);
      alert('Une erreur est survenue. Veuillez réessayer.');
      setIsSubmitting(false);
    });
  };

  if (isSubmitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-[#00613a] mb-2">Message envoyé !</h3>
        <p className="text-gray-600">
          Merci pour votre message. Nous vous répondrons dans les plus brefs délais.
        </p>
      </div>
    );
  }

  return (
    <form 
      name="contact" 
      method="POST" 
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      {/* Champs cachés requis par Netlify */}
      <input type="hidden" name="form-name" value="contact" />
      <div className="hidden">
        <label>
          Don't fill this out if you're human: <input name="bot-field" />
        </label>
      </div>

      {/* Nom complet */}
      <div>
        <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
          Nom complet <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00613a] focus:border-transparent transition-all outline-none"
          placeholder="Jean Dupont"
        />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
          Adresse email <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00613a] focus:border-transparent transition-all outline-none"
          placeholder="jean.dupont@example.com"
        />
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00613a] focus:border-transparent transition-all outline-none resize-none"
          placeholder="Décrivez votre demande..."
        />
      </div>

      {/* Acceptation des conditions */}
      <div className="flex items-start space-x-3">
        <input
          type="checkbox"
          id="acceptTerms"
          checked={acceptTerms}
          onChange={(e) => setAcceptTerms(e.target.checked)}
          className="mt-1 w-5 h-5 text-[#00613a] border-gray-300 rounded focus:ring-2 focus:ring-[#00613a] cursor-pointer"
          required
        />
        <label htmlFor="acceptTerms" className="text-sm text-gray-700 cursor-pointer">
          J'accepte les{' '}
          <a 
            href="/legal#conditions" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#00613a] hover:underline font-semibold"
          >
            conditions d'utilisation
          </a>
          {' '}et la{' '}
          <a 
            href="/legal#confidentialite" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#00613a] hover:underline font-semibold"
          >
            politique de confidentialité
          </a>
          {' '}<span className="text-red-500">*</span>
        </label>
      </div>

      {/* Informations */}
      <div className="bg-[#00613a]/5 border border-[#00613a]/20 rounded-lg p-4">
        <p className="text-sm text-gray-600">
          <i className="fas fa-info-circle text-[#00613a] mr-2"></i>
          Vos données sont traitées de manière confidentielle et ne seront jamais partagées avec des tiers.
        </p>
      </div>

      {/* Bouton d'envoi */}
      <button
        type="submit"
        disabled={!acceptTerms || isSubmitting}
        className={`w-full font-semibold py-4 px-6 rounded-lg transition-all duration-300 shadow-md flex items-center justify-center gap-2 ${
          acceptTerms && !isSubmitting
            ? 'bg-[#D17034] text-white hover:bg-[#D17034] hover:shadow-lg transform hover:-translate-y-0.5 cursor-pointer' 
            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
        }`}
      >
        {isSubmitting ? (
          <>
            <i className="fas fa-spinner fa-spin"></i>
            <span>Envoi en cours...</span>
          </>
        ) : (
          <>
            <span>Envoyer le message</span>
            <i className="fas fa-paper-plane"></i>
          </>
        )}
      </button>
    </form>
  );
};

export default Contact;