import { Github, ArrowUpRight, Star, GitFork, Code2 } from 'lucide-react';
import { personalInfo } from '@/data/portfolio';
import Reveal from '@/components/Reveal';

export default function GitHubCTA() {
  return (
    <section id="github" className="section-pad">
      <div className="container-max">
        <Reveal>
          <div className="glass-strong relative overflow-hidden rounded-3xl p-8 sm:p-12 lg:p-16">
            {/* Background glow */}
            <div
              className="absolute inset-0 -z-10 opacity-30"
              style={{
                background:
                  'radial-gradient(circle at 30% 50%, var(--accent-glow), transparent 60%)',
              }}
            />

            <div className="flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-xl">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl accent-soft-bg">
                  <Github className="h-7 w-7 accent-c" />
                </div>
                <h2 className="mt-6 text-3xl font-bold tracking-tight text-primary-c sm:text-4xl">
                  Explore My Code
                </h2>
                <p className="mt-3 text-base text-secondary-c sm:text-lg" style={{ lineHeight: 1.65 }}>
                  Explore practical projects, experiments and implementation work on GitHub.
                </p>

                {/* Quick stats icons */}
                <div className="mt-6 flex flex-wrap gap-3">
                  <div className="flex items-center gap-2 rounded-lg border border-subtle-c bg-sunken-c px-3 py-2">
                    <Code2 className="h-4 w-4 text-muted-c" />
                    <span className="text-xs text-muted-c">Projects</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-lg border border-subtle-c bg-sunken-c px-3 py-2">
                    <Star className="h-4 w-4 text-muted-c" />
                    <span className="text-xs text-muted-c">Open source</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-lg border border-subtle-c bg-sunken-c px-3 py-2">
                    <GitFork className="h-4 w-4 text-muted-c" />
                    <span className="text-xs text-muted-c">Experiments</span>
                  </div>
                </div>
              </div>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary group text-base"
              >
                <Github className="h-5 w-5" />
                Visit GitHub
                <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
