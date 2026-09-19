import { useEffect, useRef, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { navLinks, personalInfo } from '@/data/portfolio';
import { useScrollY } from '@/hooks/useScrollY';
import ThemeToggle from './ThemeToggle';
import GitHubButton from './GitHubButton';

type Props = {
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
};

export default function Navbar({ theme, onToggleTheme }: Props) {
  const scrollY = useScrollY();
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const scrolled = scrollY > 24;

  useEffect(() => {
    const sections = navLinks.map((l) => l.href.replace('#', ''));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveSection(e.target.id);
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    if (open) closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };

    if (open) document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-400 ${
          scrolled ? 'py-3' : 'py-5'
        }`}
      >
        <nav
          className={`container-max mx-auto flex items-center justify-between rounded-2xl px-4 py-3 transition-all duration-400 sm:px-6 ${
            scrolled
              ? 'glass-strong'
              : 'border border-transparent bg-transparent'
          }`}
          style={scrolled ? undefined : { background: 'transparent' }}
        >
          {/* Logo */}
          <a
            href="#hero"
            className="text-lg font-semibold tracking-tight text-primary-c transition-opacity hover:opacity-80"
            aria-label="Manas — home"
          >
            {personalInfo.name.toUpperCase()}.
          </a>

          {/* Desktop nav */}
          <ul className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => {
              const id = link.href.replace('#', '');
              const active = activeSection === id;
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`relative rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-300 ${
                      active ? 'accent-c' : 'text-secondary-c hover:text-primary-c'
                    }`}
                  >
                    {link.label}
                    {active && (
                      <span
                        className="absolute inset-x-3 -bottom-px h-px accent-bg"
                        style={{ opacity: 0.6 }}
                      />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <GitHubButton href={personalInfo.github} className="hidden sm:flex" />
            <ThemeToggle theme={theme} onToggle={onToggleTheme} />
            <button
              onClick={() => setOpen(true)}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-subtle-c bg-elevated-c text-secondary-c transition-all hover:border-strong-c hover:text-primary-c md:hidden"
              aria-label="Open menu"
              aria-expanded={open}
              aria-controls="mobile-navigation"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu */}
      {open && (
        <div className="fixed inset-0 z-[60] md:hidden">
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />
          <div
            className="glass-strong absolute right-0 top-0 flex h-full w-[80%] max-w-sm flex-col p-6"
            id="mobile-navigation"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
          >
            <div className="flex items-center justify-between">
              <span className="text-lg font-semibold text-primary-c">
                {personalInfo.name.toUpperCase()}.
              </span>
              <button
                ref={closeButtonRef}
                onClick={() => setOpen(false)}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-subtle-c bg-elevated-c text-secondary-c hover:text-primary-c"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <ul className="mt-10 flex flex-col gap-1">
              {navLinks.map((link, i) => {
                const id = link.href.replace('#', '');
                const active = activeSection === id;
                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={`block rounded-xl px-4 py-3 text-base font-medium transition-colors ${
                        active ? 'accent-c accent-soft-bg' : 'text-secondary-c hover:text-primary-c'
                      }`}
                      style={{
                        animation: open ? `slideIn 0.3s ease ${i * 0.05}s both` : undefined,
                      }}
                    >
                      {link.label}
                    </a>
                  </li>
                );
              })}
            </ul>

            <div className="mt-auto flex items-center gap-3">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost flex-1"
                onClick={() => setOpen(false)}
              >
                GitHub
              </a>
              <a href="#contact" onClick={() => setOpen(false)} className="btn-primary flex-1">
                Contact
              </a>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes slideIn {
          from { opacity: 0; transform: translateX(20px); }
          to { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </>
  );
}
