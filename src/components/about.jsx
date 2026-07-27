import React from 'react';
import Reveal from './Reveal';

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
        {/* Photo — reused hero photo */}
        <div className="order-1">
          <div className="relative aspect-4/5 w-full max-w-md mx-auto md:mx-0 overflow-hidden">
            <img src="./src/assets/hero4.png" alt="Hero" className="w-full h-full object-cover" />
            <div
              className="pointer-events-none absolute inset-0"
              style={{ boxShadow: 'inset 0 0 90px 50px #0a0a0a' }}
            />
          </div>
        </div>

        {/* Text */}
        <div className="order-2 text-left">
          <h1 className="aceloop-serif italic text-4xl sm:text-5xl md:text-6xl leading-[1.05] text-[#f5f4f0] mb-6">
            Driven to Build
            </h1>
          <p className="text-[#8c8a85] text-base md:text-lg leading-relaxed max-w-xl">
            I am a aspiring full stack developer with a strong foundation in web development. I have experience working with various technologies and frameworks, and I am constantly learning and improving my skills. I am eager to contribute to innovative projects and collaborate with like-minded individuals in the tech industry.
          </p>
        </div>
      </Reveal>
    </section>
  );
}