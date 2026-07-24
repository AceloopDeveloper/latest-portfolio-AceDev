import React from 'react';

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="aceloop-sans relative min-h-screen flex items-center bg-[#0a0a0a] text-[#f5f4f0] antialiased px-6 md:px-12 lg:px-20 pt-19"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;1,9..144,500&family=Inter:wght@400;500&display=swap');
        .aceloop-serif { font-family: 'Fraunces', serif; }
        .aceloop-sans { font-family: 'Inter', sans-serif; }
      `}</style>

      <div className="max-w-350 w-full mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        {/* Photo — placeholder until the real image is uploaded */}
        <div className="order-1">
          <div className="relative aspect-4/5 w-full max-w-md mx-auto md:mx-0 overflow-hidden">
            <img src="./src/assets/hero4.png" alt="Hero" className="w-full h-full object-cover" />
            {/* soft edge-fade so the photo's near-black background blends into the page bg (#0a0a0a) instead of cutting off sharply */}
            <div
              className="pointer-events-none absolute inset-0"
              style={{ boxShadow: 'inset 0 0 90px 50px #0a0a0a' }}
            />
          </div>
        </div>

        {/* Headline / subtext / CTA */}
        <div className="order-2 text-left">
          <h1 className="aceloop-serif italic text-4xl sm:text-5xl md:text-6xl leading-[1.05] text-[#f5f4f0] mb-6">
            Building things
            <br />
            the web remembers
          </h1>
          <p className="text-[#8c8a85] text-base md:text-lg max-w-md mb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed nam asperiores esse optio vero. Architecto numquam magni accusamus, eligendi culpa et nisi corporis alias sunt provident ipsam adipisci aspernatur officia.
          </p>
          <a
            href="mailto:hello@aceloop.dev"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-[11px] uppercase tracking-[0.2em] text-[#f5f4f0] hover:bg-[#f5f4f0] hover:text-[#0a0a0a] transition-colors duration-300"
          >
            Get in touch
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}