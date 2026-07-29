import React from 'react';
import Reveal from './Reveal';
import ProfileCard from './Profile';

export default function AboutSection() {
  return (
    <section
      id="about"
      className="aceloop-sans relative min-h-screen flex items-center bg-[#0a0a0a] text-[#f5f4f0] antialiased px-6 md:px-12 lg:px-20 pt-19"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;1,9..144,500&family=Inter:wght@400;500&display=swap');
        .aceloop-serif { font-family: 'Fraunces', serif; }
        .aceloop-sans { font-family: 'Inter', sans-serif; }
      `}</style>

      <Reveal className="max-w-350 w-full mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div className="order-1">
          <ProfileCard />
        </div>

        <div className="order-2 text-left">
          <h1 className="aceloop-serif italic text-4xl sm:text-5xl md:text-6xl leading-[1.05] text-[#f5f4f0] mb-6">
            Driven to Build
          </h1>
          <p className="text-[#8c8a85] text-base md:text-lg leading-relaxed max-w-xl mb-8">
            I am a aspiring full stack developer with a strong foundation in web development. I have experience working with various technologies and frameworks, and I am constantly learning and improving my skills. I am eager to contribute to innovative projects and collaborate with like-minded individuals in the tech industry.
          </p>

          {/* Pull quote — swap in your own line, e.g. reuse hero copy */}
          <blockquote className="aceloop-serif italic text-xl md:text-2xl leading-snug text-[#f5f4f0] border-l border-white/20 pl-5 mb-8">
            Building things the web remembers.
          </blockquote>

          {/* Hairline divider */}
          <div className="h-px bg-white/10 mb-8" />

          {/* Stats row — placeholder numbers, edit to your real counts */}
          <div className="grid grid-cols-3 gap-6 max-w-xl">
            <div>
              <span className="block aceloop-serif text-3xl text-[#f5f4f0]">1+</span>
              <span className="block text-xs uppercase tracking-[0.35em] text-[#8c8a85] mt-1">Years building</span>
            </div>
            <div>
              <span className="block aceloop-serif text-3xl text-[#f5f4f0]">6+</span>
              <span className="block text-xs uppercase tracking-[0.35em] text-[#8c8a85] mt-1">Projects shipped</span>
            </div>
            <div>
              <span className="block aceloop-serif text-3xl text-[#f5f4f0]">3</span>
              <span className="block text-xs uppercase tracking-[0.35em] text-[#8c8a85] mt-1">Core stack</span>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}