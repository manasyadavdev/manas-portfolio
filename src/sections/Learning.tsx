import { GraduationCap, Compass, Telescope } from 'lucide-react';
import { learningTimeline, currentFocus, futureDirection } from '@/data/portfolio';
import SectionHeading from '@/components/SectionHeading';
import Reveal from '@/components/Reveal';

export default function Learning() {
  return (
    <section id="learning" className="section-pad">
      <div className="container-max">
        <Reveal>
          <SectionHeading
            eyebrow="Learning & Development"
            title="Education and growth direction"
            subtitle="A learning timeline instead of fabricated work history — showing where I am and where I'm headed."
          />
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
          {/* Timeline */}
          <div className="lg:col-span-5">
            <Reveal>
              <div className="relative">
                {/* Vertical line */}
                <div className="absolute left-6 top-2 h-full w-px bg-gradient-to-b from-transparent via-border-strong to-transparent" style={{ background: 'linear-gradient(to bottom, transparent, var(--border-strong), transparent)' }} />

                {learningTimeline.map((item) => (
                  <div key={item.year} className="relative pl-16 pb-8">
                    {/* Dot */}
                    <div className="absolute left-4 top-1 flex h-5 w-5 items-center justify-center rounded-full border-2 border-strong-c bg-elevated-c">
                      <div className="h-2 w-2 rounded-full accent-bg" />
                    </div>

                    <div className="glass p-5">
                      <span className="font-mono text-xs accent-c">{item.year}</span>
                      <h3 className="mt-2 font-semibold text-primary-c">{item.title}</h3>
                      <p className="mt-1 text-sm text-secondary-c">{item.place}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Current focus + Future direction */}
          <div className="lg:col-span-7 space-y-6">
            <Reveal delay={0.1}>
              <div className="glass p-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl accent-soft-bg">
                    <Compass className="h-5 w-5 accent-c" />
                  </div>
                  <h3 className="text-lg font-semibold text-primary-c">Current focus</h3>
                </div>
                <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {currentFocus.map((f) => (
                    <div
                      key={f}
                      className="flex items-center gap-2 rounded-lg border border-subtle-c bg-sunken-c px-3 py-2.5"
                    >
                      <span className="h-1.5 w-1.5 rounded-full accent-bg" />
                      <span className="text-sm text-secondary-c">{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="glass p-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl accent-soft-bg">
                    <Telescope className="h-5 w-5 accent-c" />
                  </div>
                  <h3 className="text-lg font-semibold text-primary-c">Future direction</h3>
                </div>
                <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {futureDirection.map((f) => (
                    <div
                      key={f}
                      className="flex items-center gap-2 rounded-lg border border-subtle-c bg-sunken-c px-3 py-2.5"
                    >
                      <span className="h-1.5 w-1.5 rounded-full accent-bg opacity-50" />
                      <span className="text-sm text-secondary-c">{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="flex items-center gap-3 rounded-xl border border-subtle-c bg-sunken-c p-4">
                <GraduationCap className="h-5 w-5 accent-c" />
                <p className="text-sm text-muted-c" style={{ lineHeight: 1.6 }}>
                  Currently pursuing B.Tech in Computer Science & Engineering at Allenhouse Institute
                  of Technology, expected graduation 2030.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
