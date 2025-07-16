import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import StickyScrollBackground from "./StickyScrollBackground";
import MagicMenu from "./MagicMenu";
import MagicBurgerMenu from "./MagicBurgerMenu";

const products = [
  {
    name: "Miel de fleurs",
    description: "Riche en antioxydants, parfait pour les infusions et le petit-déjeuner.",
    image: "/miel-fleurs.jpg",
  },
  {
    name: "Miel de Lavande",
    description: "Apaise les voies respiratoires et sublime vos desserts.",
    image: "/miel-lavande.jpg",
  },
  {
    name: "Miel de Forêt",
    description: "Riche en minéraux et oligo-éléments, idéal pour les sportifs.",
    image: "/miel-foret.jpeg",
  },
];

const sections = ["#produits", "#apropos", "#temoignages", "#faq", "#contact"];

const Landing: React.FC = () => {
  const titleRef = useRef(null);
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 1.5, ease: "power3.out", delay: 0.3 }
    );

    sections.forEach((id) => {
      const el = document.querySelector(id);
      if (el) {
        gsap.fromTo(
          el,
          { scale: 0.8, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 1.2,
            scrollTrigger: {
              trigger: el,
              start: "top center+=100",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    });
  }, []);

  const handleFlip = (index: number) => {
    setFlippedIndex(index === flippedIndex ? null : index);
  };

  return (
    <>
      <StickyScrollBackground />
      <div className="relative z-10 min-h-screen overflow-x-hidden text-white">
        <MagicMenu />
        <MagicBurgerMenu />

        {/* Header */}
        <header className="h-screen flex items-center justify-center text-center px-4">
          <div ref={titleRef} className="bg-black/40 p-8 rounded-xl shadow-lg max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-yellow-100 drop-shadow-lg font-zen">
              MielVrai
            </h1>
            <p className="text-xl md:text-2xl text-yellow-100 mb-6">
              Le goût authentique du miel pur et naturel
            </p>
            <a href="#produits" className="inline-block bg-yellow-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-yellow-600 transition shadow-md">
              Découvrir nos miels
            </a>
          </div>
        </header>

        {/* Produits */}
        <section id="produits" className="scroll-mt-28 min-h-screen py-20 px-6">
          <div className="bg-white/80 backdrop-blur-md rounded-xl p-8 max-w-6xl mx-auto text-gray-800 shadow-lg">
            <h2 className="text-center mb-10 text-4xl font-extrabold text-yellow-600 drop-shadow-lg font-zen">
              Notre gamme de produits
            </h2>
            <div className="flex flex-wrap justify-center gap-10">
              {products.map((product, index) => (
                <div key={index} className="w-[300px] h-[400px] perspective cursor-pointer" onClick={() => handleFlip(index)}>
                  <div className={`relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] ${flippedIndex === index ? "rotate-y-180" : ""}`}>
                    <div className="absolute w-full h-full backface-hidden bg-white/90 backdrop-blur rounded-xl shadow-xl overflow-hidden">
                      <img src={product.image} alt={product.name} className="w-full h-2/3 object-cover" />
                      <div className="p-4 text-center">
                        <h3 className="text-xl font-bold text-yellow-700">{product.name}</h3>
                        <p className="text-gray-700">{product.description}</p>
                      </div>
                    </div>
                    <div className="absolute w-full h-full backface-hidden transform rotate-y-180 bg-yellow-200/90 backdrop-blur text-center rounded-xl flex items-center justify-center p-4">
                      <p className="text-gray-800 font-semibold">Vertus naturelles, récolté à froid, sans additifs.</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-10 text-center">
              <a href="#contact" className="inline-block bg-yellow-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-yellow-700 transition">
                Commander maintenant
              </a>
            </div>
          </div>
        </section>

        {/* À propos */}
        <section id="apropos" className="scroll-mt-28 min-h-screen py-20 px-6">
          <div className="bg-white/80 backdrop-blur-md rounded-xl p-8 max-w-4xl mx-auto text-gray-800 shadow-lg">
            <h2 className="text-center mb-8 text-4xl font-extrabold text-yellow-600 drop-shadow-lg font-zen">
              À propos de MielVrai
            </h2>
            <p className="text-lg text-center">
              MielVrai est une marque engagée, issue d'apiculteurs passionnés qui respectent les abeilles et la nature.
              Nos miels sont 100% purs, non transformés, et récoltés dans les régions les plus préservées pour garantir un goût unique et une qualité irréprochable.
            </p>
          </div>
        </section>

        {/* Témoignages */}
        <section id="temoignages" className="scroll-mt-28 min-h-screen py-20 px-6">
          <div className="bg-white/80 backdrop-blur-md rounded-xl p-8 max-w-5xl mx-auto text-gray-800 shadow-lg">
            <h2 className="text-center mb-8 text-3xl font-extrabold text-yellow-600 drop-shadow-lg font-zen">
              Ce que disent nos clients
            </h2>
            <div className="flex flex-col md:flex-row justify-center gap-8">
              <div className="bg-white/90 backdrop-blur shadow p-6 rounded-lg max-w-md">
                <p className="text-gray-700 italic">“Un goût exceptionnel, on sent que c’est du miel naturel. Je le recommande à tous mes proches !”</p>
                <p className="text-yellow-700 font-bold mt-4">— Nadia B.</p>
              </div>
              <div className="bg-white/90 backdrop-blur shadow p-6 rounded-lg max-w-md">
                <p className="text-gray-700 italic">“J’ai testé le miel de lavande, une merveille ! Texture parfaite et goût authentique.”</p>
                <p className="text-yellow-700 font-bold mt-4">— Karim L.</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="scroll-mt-28 min-h-screen py-20 px-6">
          <div className="bg-white/80 backdrop-blur-md rounded-xl p-8 max-w-3xl mx-auto text-gray-800 shadow-lg">
            <h2 className="text-center mb-8 text-3xl font-extrabold text-yellow-600 drop-shadow-lg font-zen">
              Foire aux questions
            </h2>
            <div className="space-y-4">
              <div className="border p-4 rounded-lg bg-white/90 backdrop-blur">
                <h4 className="font-semibold text-yellow-700">🐝 Le miel est-il 100% naturel ?</h4>
                <p>Oui, sans aucun additif ni conservateur.</p>
              </div>
              <div className="border p-4 rounded-lg bg-white/90 backdrop-blur">
                <h4 className="font-semibold text-yellow-700">📦 Délai de livraison ?</h4>
                <p>Livraison en 48h via notre partenaire logistique éco-responsable.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="scroll-mt-28 min-h-screen py-20 px-6">
          <div className="bg-white/80 backdrop-blur-md rounded-xl p-8 max-w-xl mx-auto text-gray-800 shadow-lg">
            <h2 className="text-center mb-10 text-3xl font-extrabold text-yellow-600 drop-shadow-lg font-zen">
              Contactez-nous
            </h2>
            <form>
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
              <button type="submit" className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition">
                Envoyer
              </button>
            </form>
          </div>
        </section>

        {/* Footer */}
        <footer className="relative z-10 w-full bg-black/60 backdrop-blur-sm text-yellow-100 py-10 px-6 text-center shadow-inner">
          <div className="max-w-5xl mx-auto">
            <p className="text-xl font-zen font-bold mb-4">© {new Date().getFullYear()} — Fait par SAYATH</p>
            <div className="flex justify-center flex-wrap gap-6 text-sm md:text-base">
              <a href="mailto:contact@mielvrai.com" className="hover:underline">📧 contact@mielvrai.com</a>
              <a href="#" className="hover:underline">Instagram</a>
              <a href="#" className="hover:underline">Facebook</a>
              <a href="#" className="hover:underline"> Twitter</a>
            </div>
            <div className="mt-6">
              <a href="#" className="inline-block px-5 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded transition">
                ⬆ Retour en haut
              </a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Landing;
