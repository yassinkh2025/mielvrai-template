import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useIsMobile from "./useIsMobile";

gsap.registerPlugin(ScrollTrigger);

const StickyScrollBackground = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [pageHeight, setPageHeight] = useState(0);
  const isMobile = useIsMobile();

  // ✅ Met à jour dynamiquement la hauteur totale de la page pour que la vidéo reste présente jusqu’en bas
  useEffect(() => {
    const updateHeight = () => {
      setPageHeight(document.body.scrollHeight);
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  // ❌ Aucune animation sur PC : la vidéo reste fixe et bien cadrée
  useEffect(() => {
    // Si besoin d’un effet sur mobile plus tard, tu peux le gérer ici
  }, [isMobile]);

  // ✅ Choix dynamique du fichier vidéo selon la taille de l'écran
  const videoSrc = isMobile
    ? "/sunflower-mobile.mp4"
    : "/sunflower-desktop.mp4";

  return (
    <>
      {/* 🎥 Fond vidéo fixe derrière toute la page */}
      <div
        className="fixed top-0 left-0 w-full z-[-1] overflow-hidden pointer-events-none"
        style={{ height: "100vh" }}
      >
        <video
          key={videoSrc} // 🔁 Force le rechargement quand on change de version (mobile/desktop)
          ref={videoRef}
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      </div>

      {/* 🧱 Couche invisible pour réserver toute la hauteur de la page */}
      <div
        className="absolute top-0 left-0 w-full pointer-events-none opacity-0"
        style={{ height: `${pageHeight}px` }}
      />
    </>
  );
};

export default StickyScrollBackground;
