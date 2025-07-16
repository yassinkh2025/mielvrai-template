// src/components/MagicBurgerMenu.tsx
import { useState, useEffect } from "react";
import { gsap } from "gsap";

const sections = ["accueil", "produits", "apropos", "temoignages", "faq", "contact"];

export default function MagicBurgerMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      gsap.to("#mobileMenu", { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" });
    } else {
      gsap.to("#mobileMenu", { y: -50, opacity: 0, duration: 0.4, ease: "power2.in" });
    }
  }, [open]);

  return (
    <>
      {/* Bouton burger */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed top-5 right-5 z-50 md:hidden w-10 h-10 flex flex-col justify-center items-center bg-gradient-to-br from-yellow-400 via-yellow-200 to-yellow-500 rounded-full shadow-xl ring-2 ring-yellow-300 ring-offset-2 hover:scale-105 transition-transform"
      >
        <div className={`w-6 h-0.5 bg-white mb-1 transition-transform ${open ? "rotate-45 translate-y-1.5" : ""}`} />
        <div className={`w-6 h-0.5 bg-white mb-1 ${open ? "opacity-0" : ""}`} />
        <div className={`w-6 h-0.5 bg-white transition-transform ${open ? "-rotate-45 -translate-y-1.5" : ""}`} />
      </button>

      {/* Halo magique animé autour du menu */}
      {open && (
        <div className="fixed top-[52px] right-[52px] z-40 w-24 h-24 rounded-full bg-yellow-400 opacity-30 blur-3xl animate-ping pointer-events-none" />
      )}

      {/* Menu mobile */}
      <div
        id="mobileMenu"
        className="fixed top-16 right-4 z-40 bg-black/80 backdrop-blur-md p-6 rounded-xl text-white shadow-2xl space-y-4 w-52 origin-top-right"
        style={{ opacity: 0, transform: "translateY(-50px)" }}
      >
        {sections.map((section, index) => (
          <a
            key={index}
            href={section === "accueil" ? "#" : `#${section}`}
            onClick={() => setOpen(false)}
            className="block text-base font-bold font-zen tracking-wide hover:text-yellow-400 transition"
          >
            {section.toUpperCase()}
          </a>
        ))}
      </div>
    </>
  );
}
