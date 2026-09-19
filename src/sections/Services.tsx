import { Layout, Smartphone, Globe, Palette, type LucideIcon } from 'lucide-react';
import { services } from '@/data/portfolio';
import SectionHeading from '@/components/SectionHeading';
import Reveal from '@/components/Reveal';

const iconMap: Record<string, LucideIcon> = {
  Layout,
  Smartphone,
  Globe,
  Palette,
};

export default function Services() {
  return (
    <section id="services" className="section-pad border-y border-subtle-c bg-sunken-c/50">
      <div className="container-max">
        <Reveal>
          <SectionHeading
            eyebrow="Services"
            title="What I can help with"
            subtitle="Practical frontend and WordPress services — focused on responsive, accessible and clean implementation."
          />
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {services.map((s, i) => {
            const Icon = iconMap[s.icon] ?? Layout;
            return (
              <Reveal key={s.title} delay={i * 0.08}>
                <div className="glass group flex h-full items-start gap-4 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl accent-soft-bg transition-transform duration-300 group-hover:scale-110">
                    <Icon className="h-6 w-6 accent-c" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary-c">{s.title}</h3>
                    <p className="mt-1.5 text-sm text-secondary-c" style={{ lineHeight: 1.65 }}>
                      {s.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
