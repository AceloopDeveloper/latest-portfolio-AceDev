import React, { useState, useEffect } from 'react';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <div className="aceloop-sans">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;1,9..144,500&family=Inter:wght@400;500&display=swap');
        .aceloop-serif { font-family: 'Fraunces', serif; }
        .aceloop-sans { font-family: 'Inter', sans-serif; }
      `}</style>

      {/* NAV — full-bleed, edge-to-edge, fixed/sticky on scroll */}
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/10'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-350 mx-auto px-6 md:px-12 lg:px-20 h-19 flex items-center justify-between">
          <a href="#hero" className="aceloop-serif italic text-[22px] tracking-tight text-[#f5f4f0]">
            AceDev
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-10">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="group relative text-[11px] uppercase tracking-[0.25em] text-[#8c8a85] hover:text-[#f5f4f0] transition-colors duration-300"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-px w-full bg-[#f5f4f0] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </a>
            ))}
          </nav>

          {/* Mobile toggle */}
          <button
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden relative z-50 w-8 h-8 flex flex-col items-center justify-center gap-1.5"
          >
            <span
              className={`block h-px w-6 bg-[#f5f4f0] transition-transform duration-300 ${
                menuOpen ? 'rotate-45 translate-y-[3.5px]' : ''
              }`}
            />
            <span
              className={`block h-px w-6 bg-[#f5f4f0] transition-transform duration-300 ${
                menuOpen ? '-rotate-45 translate-y-[-3.5px]' : ''
              }`}
            />
          </button>
        </div>
      </header>

      {/* Backdrop — blurs/dims everything outside the drawer, tap to close */}
      <div
        onClick={() => setMenuOpen(false)}
        className={`md:hidden fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      />

      {/* Side drawer — slides in from the right, ~75% width */}
      <div
        className={`md:hidden fixed top-0 right-0 z-60 h-full w-[75%] max-w-xs bg-[#0a0a0a] border-l border-white/10 transition-transform duration-300 ease-out flex flex-col ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-end h-19 px-6">
          <button
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
            className="relative w-8 h-8 flex items-center justify-center"
          >
            <span className="absolute h-px w-6 bg-[#f5f4f0] rotate-45" />
            <span className="absolute h-px w-6 bg-[#f5f4f0] -rotate-45" />
          </button>
        </div>

        <nav className="flex flex-col items-start gap-8 px-8 mt-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="aceloop-serif italic text-2xl text-[#f5f4f0]"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}