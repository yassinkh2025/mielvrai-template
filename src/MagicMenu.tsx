// src/components/MagicMenu.tsx
import { useEffect, useRef } from "react";
import gsap from "gsap";

const sections = ["accueil", "produits", "apropos", "temoignages", "faq", "contact"];

export default function MagicMenu() {
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(
      menuRef.current,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1.5, ease: "power2.out", delay: 0.5 }
    );
  }, []);

  return (
    <div
      ref={menuRef}
      className="hidden md:flex fixed top-5 left-1/2 transform -translate-x-1/2 z-50 bg-black/30 backdrop-blur-md px-4 py-2 rounded-full shadow-xl gap-2 border border-yellow-300"
    >
      {sections.map((section, index) => (
        <a
          key={index}
          href={section === "accueil" ? "#" : `#${section}`}
          className="text-white text-sm font-bold font-zen tracking-wide px-2 py-1 relative transition hover:text-yellow-400"
        >
          <span className="relative z-10">{section.toUpperCase()}</span>
        </a>
      ))}
    </div>
  );
}
