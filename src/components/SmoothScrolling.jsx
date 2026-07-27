import React, { useEffect } from 'react';
import Lenis from 'lenis';

// Wrap your whole app with this once, e.g. in App.jsx:
//   <SmoothScrollProvider>
//     <Navbar />
//     <HeroSection />
//     <AboutSection />
//     ...
//   </SmoothScrollProvider>
//
// Install first: npm install lenis

export default function SmoothScrollProvider({ children }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => 1 - Math.pow(1 - t, 3), // ease-out cubic
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}