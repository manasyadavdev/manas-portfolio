import { Layout, Globe, Atom, Code2, Smartphone, Github, type LucideIcon } from 'lucide-react';
import { capabilities } from '@/data/portfolio';
import Reveal from '@/components/Reveal';

const iconMap: Record<string, LucideIcon> = {
  Layout,
  Globe,
  Atom,
  Code2,
  Smartphone,
  Github,
};

export default function Capabilities() {
  return (
    <section className="section-pad border-y border-subtle-c bg-sunken-c/50">
      <div className="container-max">
        <Reveal>
          <p className="mb-8 text-center font-mono text-xs uppercase tracking-widest text-muted-c">
            Core capabilities
          </p>
        </Reveal>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {capabilities.map((cap, i) => {
            const Icon = iconMap[cap.icon] ?? Code2;
            return (
              <Reveal key={cap.label} delay={i * 0.06}>
                <div className="glass group flex h-full flex-col items-center gap-3 p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl accent-soft-bg transition-transform duration-300 group-hover:scale-110">
                    <Icon className="h-6 w-6 accent-c" />
                  </div>
                  <span className="text-sm font-medium text-secondary-c">{cap.label}</span>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
