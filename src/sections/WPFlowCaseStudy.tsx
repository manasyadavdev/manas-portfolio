import { useEffect, useRef, useState } from 'react';
import {
  ArrowUpRight,
  Github,
  Monitor,
  Smartphone,
  Tablet,
  Layers,
  Zap,
  Accessibility,
  Moon,
} from 'lucide-react';
import { wpflowCaseStudy, wpflowFeatures, wpflowTech } from '@/data/portfolio';
import Reveal from '@/components/Reveal';
import { useScrollY } from '@/hooks/useScrollY';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

function CaseStudyItem({
  item,
  index,
  active,
  onActive,
}: {
  item: { heading: string; body: string };
  index: number;
  active: boolean;
  onActive: (i: number) => void;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) onActive(index);
        });
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [index, onActive]);

  return (
    <div
      ref={ref}
      className="group relative border-l-2 pl-6 transition-colors duration-300"
      style={{ borderColor: active ? 'var(--accent)' : 'var(--border-subtle)' }}
    >
      <div className="flex items-center gap-3">
        <span className="font-mono text-xs text-muted-c">
          {String(index + 1).padStart(2, '0')}
        </span>
        <h3 className="text-lg font-semibold text-primary-c">{item.heading}</h3>
      </div>
      <p className="mt-2 text-sm text-secondary-c sm:text-base" style={{ lineHeight: 1.7 }}>
        {item.body}
      </p>
    </div>
  );
}

export default function WPFlowCaseStudy() {
  const scrollY = useScrollY();
  const reduced = usePrefersReducedMotion();
  const [activeSection, setActiveSection] = useState(0);

  const parallax = reduced ? 0 : Math.min(scrollY * 0.05, 40);

  return (
    <section id="wpflow" className="section-pad">
      <div className="container-max">
        {/* Header */}
        <Reveal>
          <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="tag mb-4">Featured Case Study</span>
              <h2 className="text-4xl font-bold tracking-tight text-primary-c sm:text-5xl md:text-6xl">
                WPFlow 5.0
              </h2>
              <p className="mt-3 max-w-xl text-base text-secondary-c" style={{ lineHeight: 1.65 }}>
                A responsive SaaS-style web experience with interactive UI, theme architecture and
                a WordPress-oriented design approach.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <a
                href="https://github.com/manasyadavdev/wpflow/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost group"
              >
                <Github className="h-4 w-4" />
                GitHub
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="https://manasyadavdev.github.io/wpflow/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary group"
              >
                Live Demo
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>
        </Reveal>

        {/* Tech tags */}
        <Reveal delay={0.1}>
          <div className="mb-12 flex flex-wrap gap-2">
            {wpflowTech.map((t) => (
              <span key={t} className="tag">
                {t}
              </span>
            ))}
          </div>
        </Reveal>

        {/* Case study layout */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left — sticky visual */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-24">
              <div
                className="glass-strong relative overflow-hidden rounded-2xl"
                style={{ transform: `translateY(${parallax * -0.3}px)` }}
              >
                {/* Browser mockup */}
                <div className="border-b border-subtle-c px-4 py-3">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <span className="h-2.5 w-2.5 rounded-full bg-red-400/60" />
                      <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/60" />
                      <span className="h-2.5 w-2.5 rounded-full bg-green-400/60" />
                    </div>
                    <div className="ml-2 flex-1">
                      <div className="flex items-center gap-1.5 rounded-md bg-sunken-c px-2.5 py-1">
                        <Monitor className="h-3 w-3 text-muted-c" />
                        <span className="font-mono text-[10px] text-muted-c">
                          manasyadavdev.github.io/wpflow
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Interface preview */}
                <div className="space-y-4 p-5">
                  {/* Hero block */}
                  <div className="rounded-xl border border-subtle-c bg-sunken-c p-4">
                    <div className="h-2 w-20 rounded-full accent-bg opacity-60" />
                    <div className="mt-2 h-3 w-32 rounded-full bg-secondary-c/20" />
                    <div className="mt-1.5 h-3 w-24 rounded-full bg-secondary-c/10" />
                    <div className="mt-3 flex gap-2">
                      <div className="h-7 w-20 rounded-lg accent-bg" />
                      <div className="h-7 w-20 rounded-lg border border-subtle-c" />
                    </div>
                  </div>

                  {/* Pricing toggle */}
                  <div className="flex items-center justify-center gap-3 rounded-xl border border-subtle-c bg-sunken-c p-3">
                    <span className="font-mono text-[10px] text-secondary-c">Monthly</span>
                    <div className="relative h-5 w-10 rounded-full accent-bg">
                      <div className="absolute right-0.5 top-0.5 h-4 w-4 rounded-full bg-white" />
                    </div>
                    <span className="font-mono text-[10px] accent-c font-medium">Yearly</span>
                  </div>

                  {/* Feature cards */}
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { icon: Layers, label: 'Components' },
                      { icon: Zap, label: 'Fast' },
                      { icon: Accessibility, label: 'A11y' },
                    ].map((c) => (
                      <div
                        key={c.label}
                        className="flex flex-col items-center gap-1.5 rounded-lg border border-subtle-c bg-sunken-c p-3"
                      >
                        <c.icon className="h-4 w-4 accent-c" />
                        <span className="font-mono text-[9px] text-muted-c">{c.label}</span>
                      </div>
                    ))}
                  </div>

                  {/* Device preview row */}
                  <div className="flex items-end justify-center gap-3 rounded-xl border border-subtle-c bg-sunken-c p-4">
                    <Monitor className="h-6 w-6 text-muted-c" />
                    <Tablet className="h-5 w-5 text-muted-c" />
                    <Smartphone className="h-4 w-4 text-muted-c" />
                    <span className="ml-2 font-mono text-[10px] text-muted-c">Responsive</span>
                  </div>

                  {/* Theme indicator */}
                  <div className="flex items-center gap-2 rounded-lg border border-subtle-c bg-sunken-c px-3 py-2">
                    <Moon className="h-3.5 w-3.5 accent-c" />
                    <span className="font-mono text-[10px] text-secondary-c">Dark / Light theme</span>
                    <span className="ml-auto font-mono text-[10px] text-muted-c">localStorage</span>
                  </div>
                </div>

                {/* Floating metadata */}
                <div className="absolute -right-3 top-20 hidden rounded-lg border border-subtle-c bg-elevated-c px-3 py-2 shadow-lg xl:block">
                  <p className="font-mono text-[9px] text-muted-c">scroll progress</p>
                  <div className="mt-1 h-1 w-16 overflow-hidden rounded-full bg-sunken-c">
                    <div className="h-full w-2/3 accent-bg" />
                  </div>
                </div>
              </div>

              {/* Features list */}
              <div className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-2">
                {wpflowFeatures.slice(0, 6).map((f) => (
                  <div
                    key={f}
                    className="flex items-center gap-2 rounded-lg border border-subtle-c bg-elevated-c px-3 py-2"
                  >
                    <span className="h-1.5 w-1.5 rounded-full accent-bg" />
                    <span className="text-xs text-secondary-c">{f}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right — scrollable case study content */}
          <div className="lg:col-span-7">
            <div className="space-y-8">
              {wpflowCaseStudy.map((item, i) => (
                <Reveal key={item.heading} delay={0.05}>
                  <CaseStudyItem
                    item={item}
                    index={i}
                    active={activeSection === i}
                    onActive={setActiveSection}
                  />
                </Reveal>
              ))}
            </div>

            {/* Remaining features */}
            <Reveal delay={0.1}>
              <div className="mt-10">
                <h3 className="mb-4 text-sm font-semibold text-primary-c">Additional features</h3>
                <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {wpflowFeatures.slice(6).map((f) => (
                    <div
                      key={f}
                      className="flex items-center gap-2 rounded-lg border border-subtle-c bg-elevated-c px-3 py-2"
                    >
                      <span className="h-1.5 w-1.5 rounded-full accent-bg" />
                      <span className="text-xs text-secondary-c">{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Disclaimer */}
            <Reveal delay={0.15}>
              <div className="mt-8 rounded-xl border border-subtle-c bg-sunken-c p-4">
                <p className="text-xs text-muted-c" style={{ lineHeight: 1.6 }}>
                  <span className="font-medium text-secondary-c">Note:</span> The deployed demo is a
                  frontend presentation. The WordPress backend architecture (PHP, REST API, AJAX,
                  MySQL) represents a conceptual design direction, not a deployed backend.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
