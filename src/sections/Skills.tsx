import { useState } from 'react';
import { Layout, Globe, Wrench, Palette, Lightbulb, type LucideIcon } from 'lucide-react';
import { skillCategories } from '@/data/portfolio';
import SectionHeading from '@/components/SectionHeading';
import Reveal from '@/components/Reveal';

const iconMap: Record<string, LucideIcon> = {
  Layout,
  Globe,
  Wrench,
  Palette,
  Lightbulb,
};

export default function Skills() {
  const [active, setActive] = useState(0);

  return (
    <section id="skills" className="section-pad border-y border-subtle-c bg-sunken-c/50">
      <div className="container-max">
        <Reveal>
          <SectionHeading
            eyebrow="Skills"
            title="Technologies I work with"
            subtitle="An interactive view of my technical toolkit across frontend, WordPress, tools and design."
          />
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-12">
          {/* Category tabs */}
          <div className="lg:col-span-4">
            <div className="flex flex-row gap-2 overflow-x-auto pb-2 no-scrollbar lg:flex-col lg:overflow-visible">
              {skillCategories.map((cat, i) => {
                const Icon = iconMap[cat.icon] ?? Layout;
                const isActive = active === i;
                return (
                  <button
                    key={cat.name}
                    onClick={() => setActive(i)}
                    className={`flex items-center gap-3 rounded-xl border px-4 py-3 text-left transition-all duration-300 ${
                      isActive
                        ? 'border-strong-c bg-elevated-c shadow-md'
                        : 'border-subtle-c bg-transparent hover:border-strong-c'
                    }`}
                    aria-pressed={isActive}
                  >
                    <div
                      className={`flex h-9 w-9 items-center justify-center rounded-lg transition-colors ${
                        isActive ? 'accent-soft-bg' : 'bg-sunken-c'
                      }`}
                    >
                      <Icon className={`h-[18px] w-[18px] ${isActive ? 'accent-c' : 'text-muted-c'}`} />
                    </div>
                    <span
                      className={`whitespace-nowrap text-sm font-medium transition-colors ${
                        isActive ? 'text-primary-c' : 'text-secondary-c'
                      }`}
                    >
                      {cat.name}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Skills display */}
          <div className="lg:col-span-8">
            <div className="glass min-h-[280px] p-6 sm:p-8">
              <div key={active} style={{ animation: 'fadeIn 0.4s ease both' }}>
                <h3 className="text-xl font-semibold text-primary-c">
                  {skillCategories[active].name}
                </h3>
                <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {skillCategories[active].skills.map((skill, i) => (
                    <div
                      key={skill}
                      className="flex items-center gap-3 rounded-xl border border-subtle-c bg-sunken-c px-4 py-3 transition-colors hover:border-strong-c"
                      style={{ animation: `fadeIn 0.3s ease ${i * 0.05}s both` }}
                    >
                      <span className="h-1.5 w-1.5 rounded-full accent-bg" />
                      <span className="text-sm font-medium text-secondary-c">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
