import React from 'react';
import Reveal from './Reveal';

const PLACEHOLDER_PROJECTS = [
  {
    title: 'Project One',
    description: 'A short one-line description of what this project does and the problem it solves.',
    tags: ['React', 'Vite', 'Tailwind'],
  },
  {
    title: 'Project Two',
    description: 'A short one-line description of what this project does and the problem it solves.',
    tags: ['Next.js', 'Node', 'MongoDB'],
  },
  {
    title: 'Project Three',
    description: 'A short one-line description of what this project does and the problem it solves.',
    tags: ['React', 'Framer Motion'],
  },
  {
    title: 'Project Four',
    description: 'A short one-line description of what this project does and the problem it solves.',
    tags: ['Tailwind', 'Express', 'PostgreSQL'],
  },
];

function ThumbnailPlaceholder() {
  return (
    <div className="relative aspect-16/10 w-full bg-[#141311] flex items-center justify-center overflow-hidden">
      {/* TODO: replace with <img src="..." alt="..." className="w-full h-full object-cover" /> */}
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" className="text-[#5a5852]">
        <rect x="3" y="4" width="18" height="16" rx="1" />
        <circle cx="8.5" cy="9.5" r="1.5" />
        <path d="M21 16l-5.5-5.5L9 17" />
      </svg>
    </div>
  );
}

function ProjectCard({ project }) {
  return (
    <div className="group flex-none snap-start w-75 sm:w-90 border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1.5 hover:scale-[1.02]">
      <ThumbnailPlaceholder />
      <div className="p-5">
        <h3 className="aceloop-serif italic text-xl text-[#f5f4f0] mb-2">{project.title}</h3>
        <p className="text-[#8c8a85] text-sm leading-relaxed mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/15 px-3 py-1 text-[10px] uppercase tracking-wide text-[#8c8a85]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="aceloop-sans relative bg-[#0a0a0a] text-[#f5f4f0] antialiased px-6 md:px-12 lg:px-20 py-24 md:py-32 border-t border-white/10"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;1,9..144,500&family=Inter:wght@400;500&display=swap');
        .aceloop-serif { font-family: 'Fraunces', serif; }
        .aceloop-sans { font-family: 'Inter', sans-serif; }
      `}</style>

      <Reveal>
        <span className="block text-[11px] uppercase tracking-[0.25em] text-[#8c8a85] mb-4">
          Projects
        </span>
        <h2 className="aceloop-serif italic text-3xl md:text-4xl text-[#f5f4f0] mb-10">
          Selected work
        </h2>

        <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 -mx-6 px-6 md:-mx-12 md:px-12 lg:-mx-20 lg:px-20">
          {PLACEHOLDER_PROJECTS.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </Reveal>
    </section>
  );
}