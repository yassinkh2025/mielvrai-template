import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import FlyingBees from "./FlyingBees";
import StickyScrollBackground from "./StickyScrollBackground";

const currentYear = new Date().getFullYear();

const products = [
  {
    name: "Miel de fleurs",
    description: "Riche en antioxydants, parfait pour les infusions et le petit-déjeuner.",
    image: "/miel-fleurs.jpg",
    back: "Idéal pour stimuler le système immunitaire naturellement.",
  },
  {
    name: "Miel de Lavande",
    description: "Apaise les voies respiratoires et sublime vos desserts.",
    image: "/miel-lavande.jpg",
    back: "Parfait en cas de toux ou stress, au goût délicat.",
  },
  {
    name: "Miel de Forêt",
    description: "Riche en minéraux, idéal pour les sportifs.",
    image: "/miel-foret.jpeg",
    back: "Excellent tonifiant naturel, goût intense et boisé.",
  },
];

const Landing: React.FC = () => {
  const headerRef = useRef(null);
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);

  useEffect(() => {
    gsap.to(headerRef.current, {
      scale: 1.05,
      duration: 10,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });
  }, []);

  const handleFlip = (index: number) => {
    setFlippedIndex(index === flippedIndex ? null : index);
  };

  return (
    <>
      <StickyScrollBackground />
      <div className="relative z-10 min-h-screen cursor-custom overflow-x-hidden">

        <FlyingBees />

        {/* Header */}
        <header
          className="relative h-screen flex items-center justify-center overflow-hidden px-4 text-center"
          ref={headerRef}
        >
          <div className="text-white drop-shadow-lg z-10 max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 gold-text">MielVrai</h1>
            <p className="text-lg md:text-xl">Le goût authentique du miel pur et naturel</p>
            <a
              href="#produits"
              className="mt-6 inline-block bg-yellow-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition"
            >
              Découvrir nos miels 🍯
            </a>
          </div>
        </header>

        {/* Produits */}
        <section className="py-20 px-4 md:px-6" id="produits">
          <h2 className="text-4xl font-bold text-center mb-10 gold-text">Notre gamme de produits</h2>
          <div className="flex flex-wrap justify-center gap-10">
            {products.map((product, index) => (
              <div
                key={index}
                className="w-[280px] h-[380px] md:w-[300px] md:h-[400px] perspective cursor-pointer"
                onClick={() => handleFlip(index)}
              >
                <div
                  className={`relative w-full h-full transition-transform duration-700 transform-style preserve-3d ${
                    flippedIndex === index ? "rotate-y-180" : ""
                  }`}
                >
                  {/* Recto */}
                  <div className="absolute w-full h-full backface-hidden bg-white/80 backdrop-blur shadow-xl rounded-xl overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-2/3 object-cover"
                    />
                    <div className="p-4 text-center">
                      <h3 className="text-xl font-bold text-yellow-700">{product.name}</h3>
                      <p className="text-gray-600 text-sm">{product.description}</p>
                    </div>
                  </div>
                  {/* Verso */}
                  <div className="absolute w-full h-full backface-hidden transform rotate-y-180 bg-yellow-200/80 backdrop-blur text-center rounded-xl flex items-center justify-center p-4">
                    <p className="text-gray-800 text-sm font-medium">{product.back}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* À propos */}
        <section className="py-20 px-4 md:px-6 bg-white/70 backdrop-blur" id="apropos">
          <h2 className="text-4xl font-bold text-center mb-8 gold-text">À propos de MielVrai</h2>
          <p className="max-w-3xl mx-auto text-center text-gray-700 text-lg">
            MielVrai est une marque engagée, issue d'apiculteurs passionnés qui respectent les abeilles
            et la nature. Nos miels sont 100% purs, non transformés, et récoltés dans les régions les plus
            préservées pour garantir un goût unique et une qualité irréprochable.
          </p>
        </section>

        {/* Témoignages */}
        <section className="py-20 px-4" id="temoignages">
          <h2 className="text-3xl font-bold text-center mb-8 gold-text">Ce que disent nos clients</h2>
          <div className="flex flex-col md:flex-row justify-center gap-8">
            <div className="bg-white/80 backdrop-blur shadow-md p-6 rounded-lg max-w-md">
              <p className="text-gray-700 italic">
                “Un goût exceptionnel, on sent que c’est du miel naturel. Je le recommande à tous mes proches !”
              </p>
              <p className="text-yellow-700 font-bold mt-4">— Nadia B.</p>
            </div>
            <div className="bg-white/80 backdrop-blur shadow-md p-6 rounded-lg max-w-md">
              <p className="text-gray-700 italic">
                “J’ai testé le miel de lavande, une merveille ! Texture parfaite et goût authentique.”
              </p>
              <p className="text-yellow-700 font-bold mt-4">— Karim L.</p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 px-4 md:px-6" id="faq">
          <h2 className="text-3xl font-bold text-center mb-8 gold-text">Foire aux questions</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            <div className="border p-4 rounded-lg bg-white/70 backdrop-blur">
              <h4 className="font-semibold text-yellow-700">🐝 Le miel est-il 100% naturel ?</h4>
              <p className="text-gray-700">Oui, sans aucun additif ni conservateur.</p>
            </div>
            <div className="border p-4 rounded-lg bg-white/70 backdrop-blur">
              <h4 className="font-semibold text-yellow-700">📦 Délai de livraison ?</h4>
              <p className="text-gray-700">Livraison en 48h via notre partenaire logistique éco-responsable.</p>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="py-20 px-4 md:px-6" id="contact">
          <h2 className="text-3xl font-bold text-center mb-10 gold-text">Contactez-nous</h2>
          <form className="max-w-xl mx-auto bg-white/80 backdrop-blur p-6 rounded-lg shadow-md">
            <div className="mb-4">
              <label className="block mb-1 text-yellow-700">Nom</label>
              <input type="text" className="w-full border border-gray-300 p-2 rounded" placeholder="Votre nom" />
            </div>
            <div className="mb-4">
              <label className="block mb-1 text-yellow-700">Email</label>
              <input type="email" className="w-full border border-gray-300 p-2 rounded" placeholder="Votre email" />
            </div>
            <div className="mb-4">
              <label className="block mb-1 text-yellow-700">Message</label>
              <textarea className="w-full border border-gray-300 p-2 rounded" rows={4} placeholder="Votre message"></textarea>
            </div>
            <button
              type="submit"
              className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition"
            >
              Envoyer
            </button>
          </form>
        </section>

        {/* Footer */}
        <footer className="py-6 text-center text-sm text-yellow-700 font-semibold">
          <p className="gold-text">© {currentYear} — Fait par SAYATH</p>
        </footer>
      </div>
    </>
  );
};

export default Landing;
