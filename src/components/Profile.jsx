import React from 'react';

function BadgeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="11" fill="#f5f4f0" />
      <path d="M7 12.5l3 3 7-7" stroke="#0a0a0a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function FolderIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" strokeLinecap="round" />
    </svg>
  );
}

const FADE = 'linear-gradient(to bottom, transparent 0%, black 40%)';

export default function ProfileCard() {
  return (
    <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-[0_30px_70px_-20px_rgba(0,0,0,0.85)] max-w-md w-full mx-auto md:mx-0 h-130 md:h-160 lg:h-130">
      {/* Photo — fills the entire card */}
      <img src="./src/assets/acehero11.png" alt="Ace" className="absolute inset-0 w-full h-full object-cover" />

      {/* Bottom zone: blur fades in quickly (tight transition), no hard box edge */}
      <div className="absolute bottom-0 inset-x-0 h-64">
        {/* Blur itself fades in via mask — this is what removes the hard "box" look */}
        <div
          className="absolute inset-0 backdrop-blur-md"
          style={{ maskImage: FADE, WebkitMaskImage: FADE }}
        />
        {/* Subtle dark gradient for text contrast, same tight fade shape */}
        <div className="absolute inset-0 bg-linear-to-t from-[#0a0a0a]/70 via-[#0a0a0a]/30 to-transparent" />

        <div className="relative z-10 h-full flex flex-col justify-end p-6">
          <div className="flex items-center gap-2 mb-2">
            <h3 className="text-xl font-medium text-[#f5f4f0]">Ace</h3>
            <BadgeIcon />
          </div>

          {/* TODO: swap in your real one-line caption */}
          <p className="text-[#e5e4e0] text-sm leading-relaxed mb-5">
            Full-stack developer focused on clean, functional interfaces.
          </p>

          <div className="flex items-center justify-between border-t border-white/20 pt-5">
            <div className="flex items-center gap-4">
              {/* TODO: swap in your real numbers */}
              <div className="flex items-center gap-1.5 text-[#e5e4e0] text-sm">
                <FolderIcon />
                <span className="text-[#f5f4f0] font-medium">12</span>
                Projects
              </div>
              <div className="flex items-center gap-1.5 text-[#e5e4e0] text-sm">
                <ClockIcon />
                <span className="text-[#f5f4f0] font-medium">2</span>
                Years
              </div>
            </div>

            <a
              href="mailto:hello@aceloop.dev"
              className="inline-flex items-center gap-1.5 rounded-full bg-[#f5f4f0] px-4 py-2 text-[11px] uppercase tracking-[0.15em] text-[#0a0a0a] hover:bg-[#0a0a0a] hover:text-[#f5f4f0] border border-transparent hover:border-white/20 transition-colors duration-300"
            >
              Get in touch
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}