import { Briefcase, ArrowRight } from 'lucide-react';
import { opportunities } from '@/data/portfolio';
import Reveal from '@/components/Reveal';

export default function Opportunities() {
  return (
    <section className="section-pad">
      <div className="container-max">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-subtle-c bg-elevated-c p-8 sm:p-12 lg:p-16">
            {/* Animated border glow */}
            <div
              className="absolute inset-0 -z-10"
              style={{
                background:
                  'radial-gradient(ellipse 60% 100% at 50% 0%, var(--accent-glow), transparent 70%)',
                opacity: 0.5,
              }}
            />

            <div className="flex flex-col items-center text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl accent-soft-bg">
                <Briefcase className="h-7 w-7 accent-c" />
              </div>

              <span className="tag mt-6">Open to Opportunities</span>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-primary-c sm:text-4xl md:text-5xl">
                Open to Opportunities
              </h2>

              <p className="mt-4 max-w-lg text-base text-secondary-c" style={{ lineHeight: 1.65 }}>
                I'm currently open to roles and collaborations where I can contribute frontend and
                WordPress development skills.
              </p>

              {/* Opportunity types */}
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                {opportunities.map((o) => (
                  <div
                    key={o}
                    className="glass flex items-center gap-2 px-4 py-3"
                  >
                    <span className="h-2 w-2 rounded-full bg-green-400" />
                    <span className="text-sm font-medium text-primary-c">{o}</span>
                  </div>
                ))}
              </div>

              <a href="#contact" className="btn-primary group mt-8">
                Get in touch
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
