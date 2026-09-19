import { ArrowRight, ArrowUpRight, Mail } from 'lucide-react';
import { personalInfo, heroTags } from '@/data/portfolio';
import HeroVisual from '@/components/HeroVisual';
import { useScrollY } from '@/hooks/useScrollY';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

export default function Hero() {
  const scrollY = useScrollY();
  const reduced = usePrefersReducedMotion();
  const parallax = reduced ? 0 : Math.min(scrollY * 0.15, 100);

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-16 md:pt-32"
    >
      <div className="container-max grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Left */}
        <div
          className="flex flex-col items-start"
          style={{ transform: `translateY(${parallax * 0.3}px)` }}
        >
          <span className="tag mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
            Open to opportunities
          </span>

          <h1 className="text-5xl font-bold tracking-tighter text-primary-c sm:text-6xl md:text-7xl lg:text-8xl">
            {personalInfo.name.toUpperCase()}
          </h1>

          <p className="mt-3 text-xl font-medium text-secondary-c sm:text-2xl">
            {personalInfo.title}
          </p>

          <p
            className="mt-6 max-w-xl text-base text-secondary-c sm:text-lg"
            style={{ lineHeight: 1.65 }}
          >
            Building modern frontend experiences and scalable WordPress solutions with a
            strong focus on usability, responsive design and clean implementation.
          </p>

          {/* CTA buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#projects" className="btn-primary group">
              View Projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost group"
            >
              GitHub
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a href="#contact" className="btn-ghost group">
              <Mail className="h-4 w-4" />
              Contact Me
            </a>
          </div>

          {/* Technical signals */}
          <div className="mt-8 flex flex-wrap items-center gap-2">
            {heroTags.map((tag) => (
              <span key={tag} className="tag">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Right — 3D visual */}
        <div
          className="relative"
          style={{ transform: `translateY(${parallax * -0.2}px)` }}
        >
          <HeroVisual />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 md:block">
        <div
          className="flex h-9 w-5 items-start justify-center rounded-full border border-subtle-c p-1"
          aria-hidden="true"
        >
          <div
            className="h-1.5 w-1 rounded-full accent-bg"
            style={reduced ? undefined : { animation: 'scrollDot 2s ease-in-out infinite' }}
          />
        </div>
      </div>

      <style>{`
        @keyframes scrollDot {
          0%, 100% { transform: translateY(0); opacity: 1; }
          50% { transform: translateY(10px); opacity: 0.3; }
        }
      `}</style>
    </section>
  );
}
