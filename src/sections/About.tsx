import { GraduationCap, Sparkles, ArrowDownRight } from 'lucide-react';
import { personalInfo } from '@/data/portfolio';
import SectionHeading from '@/components/SectionHeading';
import Reveal from '@/components/Reveal';

export default function About() {
  return (
    <section id="about" className="section-pad">
      <div className="container-max grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
        {/* Left — heading */}
        <div className="lg:col-span-5">
          <Reveal>
            <SectionHeading
              eyebrow="About"
              title="Frontend-focused developer with a WordPress edge"
            />
          </Reveal>
        </div>

        {/* Right — content */}
        <div className="lg:col-span-7">
          <Reveal delay={0.1}>
            <div className="space-y-5 text-base text-secondary-c sm:text-lg" style={{ lineHeight: 1.7 }}>
              <p>
                I'm <span className="font-semibold text-primary-c">Manas</span>, a frontend and
                WordPress developer focused on building modern, responsive web experiences. My
                work centers on clean interfaces, usable interactions and accessible design.
              </p>
              <p>
                I work primarily with <span className="font-medium text-primary-c">React</span>,{' '}
                <span className="font-medium text-primary-c">JavaScript</span> and{' '}
                <span className="font-medium text-primary-c">WordPress</span> — building
                component-driven interfaces and WordPress-oriented architectures that prioritize
                clarity and performance.
              </p>
              <p>
                My current learning direction explores advanced frontend engineering, WordPress
                REST API integration and production-grade web applications.
              </p>
            </div>
          </Reveal>

          {/* Education card */}
          <Reveal delay={0.2}>
            <div className="glass mt-8 flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl accent-soft-bg">
                  <GraduationCap className="h-6 w-6 accent-c" />
                </div>
                <div>
                  <p className="font-semibold text-primary-c">{personalInfo.education.degree}</p>
                  <p className="text-sm text-secondary-c">{personalInfo.education.college}</p>
                  <p className="mt-1 font-mono text-xs text-muted-c">
                    Expected graduation: {personalInfo.education.graduation}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 rounded-lg accent-soft-bg px-3 py-2 sm:shrink-0">
                <Sparkles className="h-4 w-4 accent-c" />
                <span className="text-xs font-medium accent-c">Currently learning</span>
              </div>
            </div>
          </Reveal>

          {/* Focus areas */}
          <Reveal delay={0.3}>
            <div className="mt-6 flex flex-wrap gap-2">
              {['Frontend', 'React', 'WordPress', 'UI/UX', 'JavaScript'].map((f) => (
                <span key={f} className="tag">
                  <ArrowDownRight className="h-3 w-3" />
                  {f}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
