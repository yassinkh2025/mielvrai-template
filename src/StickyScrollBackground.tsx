import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const StickyScrollBackground = () => {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = bgRef.current;
    if (!el) return;

    const updateScroll = () => {
      const bodyHeight = document.body.scrollHeight;
      const viewportHeight = window.innerHeight;

      gsap.killTweensOf(el);

      gsap.to(el, {
        y: -(el.offsetHeight - viewportHeight),
        ease: "none",
        scrollTrigger: {
          trigger: document.body,
          start: "top top",
          end: `${bodyHeight - viewportHeight}px bottom`,
          scrub: true,
        },
      });
    };

    updateScroll();
    window.addEventListener("resize", updateScroll);

    return () => {
      window.removeEventListener("resize", updateScroll);
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div
      ref={bgRef}
      className="fixed top-0 left-0 w-full h-[300vh] z-[-1] bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: "url('/honey-scroll6.png')" }}
    />
  );
};

export default StickyScrollBackground;
