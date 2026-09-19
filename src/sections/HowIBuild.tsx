import { processSteps } from '@/data/portfolio';
import SectionHeading from '@/components/SectionHeading';
import Reveal from '@/components/Reveal';

export default function HowIBuild() {
  return (
    <section id="process" className="section-pad border-y border-subtle-c bg-sunken-c/50">
      <div className="container-max">
        <Reveal>
          <SectionHeading
            eyebrow="How I Build"
            title="A clear, repeatable process"
            subtitle="From understanding requirements to refining the final result — every step focused on usable, accessible outcomes."
          />
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, i) => (
            <Reveal key={step.num} delay={i * 0.1}>
              <div className="glass group relative h-full overflow-hidden p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                {/* Number watermark */}
                <span className="absolute -right-2 -top-4 text-7xl font-bold opacity-5 transition-opacity duration-300 group-hover:opacity-10">
                  {step.num}
                </span>

                <div className="relative">
                  <span className="font-mono text-sm accent-c">{step.num}</span>
                  <h3 className="mt-3 text-lg font-semibold text-primary-c">{step.title}</h3>
                  <p
                    className="mt-2 text-sm text-secondary-c"
                    style={{ lineHeight: 1.65 }}
                  >
                    {step.body}
                  </p>
                </div>

                {/* Connector line */}
                {i < processSteps.length - 1 && (
                  <div className="absolute -right-2 top-1/2 hidden h-px w-4 accent-bg opacity-30 lg:block" />
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
