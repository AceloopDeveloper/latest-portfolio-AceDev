import React from 'react';
import Reveal from './Reveal';

export default function HomeSection() {
  return (
    <section
      id="hero"
      className="aceloop-sans relative min-h-screen flex items-center overflow-hidden bg-[#0a0a0a] text-[#f5f4f0] antialiased px-6 md:px-12 lg:px-20 pt-19"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;1,9..144,500&family=Inter:wght@400;500&display=swap');
        .aceloop-serif { font-family: 'Fraunces', serif; }
        .aceloop-sans { font-family: 'Inter', sans-serif; }
      `}</style>

      <Reveal className="relative z-10 max-w-2xl w-full mx-auto text-center flex flex-col items-center">
        <span className="block text-[11px] uppercase tracking-[0.25em] text-[#8c8a85] mb-4">
          Hello, World. I'm Ace 
        </span>
        <h1 className="aceloop-serif italic text-4xl sm:text-5xl md:text-6xl leading-[1.05] text-[#f5f4f0] mb-6">
          Aspiring Full Stack Developer
          </h1>
        <p className="text-[#8c8a85] text-base md:text-lg leading-relaxed max-w-xl mb-8">
          Driven by curiosity and the process of creating something from nothing.
        </p>
        <div className="flex items-center gap-4">
          <a
            href="mailto:hello@aceloop.dev"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-[11px] uppercase tracking-[0.2em] text-[#f5f4f0] hover:bg-[#f5f4f0] hover:text-[#0a0a0a] transition-colors duration-300"
          >
            Get in touch
            <span aria-hidden="true">↗</span>
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-[#f5f4f0] px-6 py-3 text-[11px] uppercase tracking-[0.2em] text-[#0a0a0a] hover:bg-[#0a0a0a] hover:text-[#f5f4f0] transition-colors duration-300"
          >
            View resume
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </Reveal>
    </section>
  );
}