import { useRef, type MouseEvent } from 'react';
import { ArrowUpRight, Github, ExternalLink } from 'lucide-react';
import { projects } from '@/data/portfolio';
import SectionHeading from '@/components/SectionHeading';
import Reveal from '@/components/Reveal';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

function ProjectCard({
  name,
  type,
  description,
  tech,
  outcome,
  github,
  demo,
  hasDemo,
}: (typeof projects)[0]) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = usePrefersReducedMotion();

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    if (reduced || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    ref.current.style.transform = `perspective(1000px) rotateY(${x * 6}deg) rotateX(${-y * 6}deg) translateY(-4px)`;
  };

  const handleLeave = () => {
    if (!ref.current) return;
    ref.current.style.transform = '';
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="card-3d glass group relative flex h-full flex-col overflow-hidden p-6 sm:p-8"
    >
      {/* Top row */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <span className="font-mono text-xs text-muted-c">{type}</span>
          <h3 className="mt-1 text-xl font-semibold text-primary-c sm:text-2xl">{name}</h3>
        </div>
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl accent-soft-bg transition-transform duration-300 group-hover:scale-110">
          <ExternalLink className="h-5 w-5 accent-c" />
        </div>
      </div>

      {/* Description */}
      <p className="mt-4 text-sm text-secondary-c sm:text-base" style={{ lineHeight: 1.65 }}>
        {description}
      </p>

      {/* Tech */}
      <div className="mt-5 flex flex-wrap gap-1.5">
        {tech.map((t) => (
          <span
            key={t}
            className="rounded-md border border-subtle-c bg-sunken-c px-2 py-1 font-mono text-[10px] text-muted-c"
          >
            {t}
          </span>
        ))}
      </div>

      {/* Outcome */}
      <div className="mt-5 rounded-xl border border-subtle-c bg-sunken-c p-4">
        <p className="font-mono text-[10px] uppercase tracking-wider text-muted-c">Outcome</p>
        <p className="mt-1.5 text-sm text-secondary-c" style={{ lineHeight: 1.6 }}>
          {outcome}
        </p>
      </div>

      {/* Links */}
      <div className="mt-auto flex flex-wrap gap-2 pt-6">
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-ghost group/btn text-xs"
        >
          <Github className="h-3.5 w-3.5" />
          View GitHub
          <ArrowUpRight className="h-3 w-3 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
        </a>
        {hasDemo && demo && (
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-xs"
          >
            Live Demo
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        )}
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section-pad">
      <div className="container-max">
        <Reveal>
          <SectionHeading
            eyebrow="Projects"
            title="Practical project work"
            subtitle="Real projects built to demonstrate modern frontend development, responsive design and full-stack integration."
          />
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.1} className="h-full">
              <ProjectCard {...p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
