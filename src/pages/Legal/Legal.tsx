import { Link } from 'react-router-dom';

const Legal = () => {
  return (
    <main className="min-h-screen bg-white py-16 mt-24">
      <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-[#00613a] text-center">
          Informations Légales
        </h1>
        
        {/* Section 1 - Politique de confidentialité */}
        <section id="confidentialite" className="mb-16 scroll-mt-24">
          <div className="bg-gray-50 rounded-xl shadow-lg p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-[#00613a]">
              Politique de Confidentialité
            </h2>
            
            <div className="space-y-6 text-gray-700">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-[#00613a]">1. Introduction</h3>
                <p>
                  La présente politique de confidentialité explique comment ShareNSpare collecte, 
                  utilise et protège votre adresse email lorsque vous vous inscrivez à notre newsletter 
                  pour être informé du lancement de notre application.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-[#00613a]">2. Données collectées</h3>
                <p>
                  Nous collectons uniquement votre <strong>adresse email</strong> lorsque vous vous inscrivez 
                  pour être tenu informé du lancement de notre plateforme.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-[#00613a]">3. Utilisation des données</h3>
                <p className="mb-2">
                  Votre adresse email est utilisée exclusivement pour :
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Vous informer de l'avancement du développement de ShareNSpare</li>
                  <li>Vous notifier du lancement officiel de l'application</li>
                  <li>Vous envoyer des informations importantes concernant le projet</li>
                </ul>
                <p className="mt-2">
                  <strong>Nous ne vendons, ne louons et ne partageons jamais votre email avec des tiers.</strong>
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-[#00613a]">4. Base juridique</h3>
                <p>
                  Le traitement de votre email est basé sur votre <strong>consentement explicite</strong> 
                  lors de votre inscription à la newsletter.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-[#00613a]">5. Conservation des données</h3>
                <p>
                  Votre adresse email est conservée jusqu'au lancement de l'application, puis jusqu'à ce que 
                  vous vous désinscriviez de notre newsletter ou que vous créiez un compte utilisateur.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-[#00613a]">6. Vos droits</h3>
                <p className="mb-2">
                  Vous disposez des droits suivants :
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong>Droit d'accès :</strong> Vous pouvez demander quelles données nous avons sur vous</li>
                  <li><strong>Droit de rectification :</strong> Vous pouvez corriger votre email</li>
                  <li><strong>Droit à l'effacement :</strong> Vous pouvez demander la suppression de votre email</li>
                  <li><strong>Droit de retrait :</strong> Vous pouvez vous désinscrire à tout moment</li>
                </ul>
                <p className="mt-3">
                  Pour exercer ces droits ou vous désinscrire, cliquez sur le lien de désinscription 
                  présent dans chaque email ou contactez-nous à : <strong>info@sharenspare.com</strong>
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-[#00613a]">7. Sécurité</h3>
                <p>
                  Nous utilisons des mesures de sécurité appropriées pour protéger votre adresse email 
                  contre tout accès non autorisé, perte ou divulgation.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-[#00613a]">8. Prestataire email</h3>
                <p>
                  Pour l'envoi de nos emails, nous utilisons un service tiers sécurisé qui respecte 
                  les normes européennes de protection des données (RGPD).
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2 - Conditions d'utilisation */}
        <section id="conditions" className="mb-16 scroll-mt-24">
          <div className="bg-gray-50 rounded-xl shadow-lg p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-[#00613a]">
              Conditions d'Utilisation
            </h2>
            
            <div className="space-y-6 text-gray-700">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-[#00613a]">1. Inscription à la newsletter</h3>
                <p>
                  En vous inscrivant à notre newsletter, vous acceptez de recevoir des emails de la part 
                  de ShareNSpare concernant le développement et le lancement de notre plateforme.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-[#00613a]">2. Fréquence des emails</h3>
                <p>
                  Nous nous engageons à ne vous envoyer que des informations pertinentes et importantes. 
                  Nous limiterons nos envois pour ne pas encombrer votre boîte mail.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-[#00613a]">3. Désinscription</h3>
                <p>
                  Vous pouvez vous désinscrire à tout moment en cliquant sur le lien présent dans chaque 
                  email ou en nous contactant directement à info@sharenspare.com.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-[#00613a]">4. Utilisation du site web</h3>
                <p>
                  L'utilisation de ce site web est soumise aux lois suisses. En naviguant sur notre site, 
                  vous acceptez de respecter ces conditions.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-[#00613a]">5. Propriété intellectuelle</h3>
                <p>
                  Tout le contenu de ce site (textes, images, logos) appartient à ShareNSpare et est 
                  protégé par les droits d'auteur. Toute reproduction sans autorisation est interdite.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-[#00613a]">6. Modifications</h3>
                <p>
                  Nous nous réservons le droit de modifier ces conditions à tout moment. Les modifications 
                  seront publiées sur cette page avec la date de mise à jour.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3 - Mentions légales */}
        <section id="mentions-legales" className="mb-16 scroll-mt-24">
          <div className="bg-gray-50 rounded-xl shadow-lg p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-[#00613a]">
              Mentions Légales
            </h2>
            
            <div className="space-y-6 text-gray-700">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-[#00613a]">Éditeur du site</h3>
                <p>
                  <strong>Nom :</strong> ShareNSpare<br />
                  <strong>Statut :</strong> Projet en cours de développement<br />
                  <strong>Localisation :</strong> Suisse<br />
                  <strong>Email :</strong> info@sharenspare.com
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-[#00613a]">Fondateurs</h3>
                <p>
                  <strong>Simon</strong> - Co-fondateur & Stratégie<br />
                  <strong>Teo</strong> - Co-fondateur & Développement
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-[#00613a]">Hébergement</h3>
                <p>
                  <strong>Hébergeur :</strong> Netlify, Inc.<br />
                  <strong>Adresse :</strong> 44 Montgomery Street, Suite 300, San Francisco, CA 94104, USA<br />
                  <strong>Site web :</strong> <a href="https://www.netlify.com" target="_blank" rel="noopener noreferrer" className="text-[#00613a] hover:underline">www.netlify.com</a>
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-[#00613a]">Propriété intellectuelle</h3>
                <p>
                  L'ensemble du contenu de ce site (textes, images, logos, design) est la propriété 
                  de ShareNSpare. Toute reproduction, même partielle, est interdite sans autorisation préalable.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-[#00613a]">Cookies</h3>
                <p>
                  Ce site utilise uniquement des cookies essentiels au fonctionnement du site. 
                  Aucun cookie de tracking ou publicitaire n'est utilisé.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-[#00613a]">Contact</h3>
                <p>
                  Pour toute question concernant ce site ou notre projet :<br />
                  <strong>Email :</strong> info@sharenspare.com<br />
                  <strong>Formulaire :</strong> <Link to="/c2c#contact" className="text-[#00613a] hover:underline">Page contact</Link>
                </p>
              </div>

              <div className="pt-6 border-t border-gray-300">
                <p className="text-sm text-gray-600">
                  Dernière mise à jour : {new Date().toLocaleDateString('fr-CH', { year: 'numeric', month: 'long', day: 'numeric' })}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Bouton retour */}
        <div className="text-center mt-12">
          <Link 
            to="/" 
            className="inline-flex items-center text-[#00613a] font-semibold hover:text-[#005131] transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Retour à l'accueil
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Legal;