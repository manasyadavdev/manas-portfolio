import { Github, Mail, ArrowUp } from 'lucide-react';
import { personalInfo, navLinks } from '@/data/portfolio';

export default function Footer() {
  return (
    <footer className="border-t border-subtle-c bg-sunken-c/50">
      <div className="container-max px-6 py-12 md:px-10">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Brand */}
          <div>
            <a href="#hero" className="text-lg font-semibold tracking-tight text-primary-c">
              {personalInfo.name.toUpperCase()}.
            </a>
            <p className="mt-2 text-sm text-secondary-c" style={{ lineHeight: 1.6 }}>
              {personalInfo.title}
            </p>
            <p className="mt-1 text-xs text-muted-c">
              B.Tech CSE · Allenhouse Institute of Technology
            </p>
          </div>

          {/* Nav */}
          <div>
            <p className="mb-3 font-mono text-xs uppercase tracking-wider text-muted-c">
              Navigation
            </p>
            <ul className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-secondary-c transition-colors hover:text-primary-c"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="mb-3 font-mono text-xs uppercase tracking-wider text-muted-c">
              Connect
            </p>
            <div className="flex flex-col gap-2">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-2 text-sm text-secondary-c transition-colors hover:text-primary-c"
              >
                <Mail className="h-4 w-4" />
                {personalInfo.email}
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-secondary-c transition-colors hover:text-primary-c"
              >
                <Github className="h-4 w-4" />
                @manasyadavdev
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-subtle-c pt-6 sm:flex-row">
          <p className="text-xs text-muted-c">
            © {new Date().getFullYear()} {personalInfo.name}. Built with React, Vite and Tailwind CSS.
          </p>
          <a
            href="#hero"
            className="flex items-center gap-2 text-xs text-secondary-c transition-colors hover:text-primary-c"
          >
            Back to top
            <ArrowUp className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
