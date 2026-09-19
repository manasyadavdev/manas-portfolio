import { useEffect, useRef, useState } from 'react';
import { Code2, Layers, Globe, MousePointer2, Cpu, Zap } from 'lucide-react';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

export default function HeroVisual() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    if (reduced) return;
    const el = containerRef.current;
    if (!el) return;

    let raf = 0;
    const onMove = (e: MouseEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dx = (e.clientX - cx) / rect.width;
        const dy = (e.clientY - cy) / rect.height;
        setTilt({ x: dy * -8, y: dx * 10 });
      });
    };
    const onLeave = () => setTilt({ x: 0, y: 0 });

    window.addEventListener('mousemove', onMove, { passive: true });
    window.addEventListener('mouseleave', onLeave);
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseleave', onLeave);
      cancelAnimationFrame(raf);
    };
  }, [reduced]);

  const float = reduced ? {} : { animation: 'float 8s ease-in-out infinite' };
  const floatSlow = reduced ? {} : { animation: 'float 12s ease-in-out infinite' };

  return (
    <div
      ref={containerRef}
      className="perspective-1000 relative mx-auto flex h-full min-h-[420px] w-full max-w-lg items-center justify-center lg:max-w-none"
      style={{ perspective: '1200px' }}
    >
      {/* Ambient glow */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(circle at 50% 50%, var(--accent-glow), transparent 65%)',
          opacity: 0.4,
        }}
      />

      {/* Main floating browser mockup */}
      <div
        className="preserve-3d relative w-full max-w-md"
        style={{
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        {/* Browser window */}
        <div
          className="glass-strong relative overflow-hidden rounded-2xl"
          style={float}
        >
          {/* Browser bar */}
          <div className="flex items-center gap-2 border-b border-subtle-c px-4 py-3">
            <div className="flex gap-1.5">
              <span className="h-3 w-3 rounded-full bg-red-400/70" />
              <span className="h-3 w-3 rounded-full bg-yellow-400/70" />
              <span className="h-3 w-3 rounded-full bg-green-400/70" />
            </div>
            <div className="ml-2 flex-1">
              <div className="flex items-center gap-2 rounded-md bg-sunken-c px-3 py-1.5">
                <Globe className="h-3 w-3 text-muted-c" />
                <span className="font-mono text-xs text-muted-c">manasyadavdev.github.io</span>
              </div>
            </div>
          </div>

          {/* Browser content — code interface */}
          <div className="space-y-3 p-5">
            {/* Code header */}
            <div className="flex items-center gap-2">
              <Code2 className="h-4 w-4 accent-c" />
              <span className="font-mono text-xs text-secondary-c">index.html</span>
              <span className="ml-auto font-mono text-[10px] text-muted-c">UTF-8</span>
            </div>

            {/* Code lines */}
            <div className="space-y-2 font-mono text-[11px] leading-relaxed">
              <div className="flex gap-3">
                <span className="text-muted-c/50">1</span>
                <span className="text-secondary-c">
                  <span style={{ color: 'var(--accent)' }}>const</span> dev = {'{'}
                </span>
              </div>
              <div className="flex gap-3 pl-4">
                <span className="text-muted-c/50">2</span>
                <span>
                  <span className="text-secondary-c">name:</span>{' '}
                  <span style={{ color: '#10b981' }}>'Manas'</span>,
                </span>
              </div>
              <div className="flex gap-3 pl-4">
                <span className="text-muted-c/50">3</span>
                <span>
                  <span className="text-secondary-c">role:</span>{' '}
                  <span style={{ color: '#10b981' }}>'Frontend'</span>,
                </span>
              </div>
              <div className="flex gap-3 pl-4">
                <span className="text-muted-c/50">4</span>
                <span>
                  <span className="text-secondary-c">stack:</span> [
                  <span style={{ color: '#10b981' }}>'React'</span>,{' '}
                  <span style={{ color: '#10b981' }}>'WP'</span>],
                </span>
              </div>
              <div className="flex gap-3">
                <span className="text-muted-c/50">5</span>
                <span className="text-secondary-c">{'}'}</span>
              </div>
            </div>

            {/* Mini UI cards */}
            <div className="grid grid-cols-3 gap-2 pt-2">
              <div className="rounded-lg border border-subtle-c bg-sunken-c p-2.5">
                <Layers className="h-4 w-4 accent-c" />
                <p className="mt-1.5 font-mono text-[9px] text-muted-c">Components</p>
              </div>
              <div className="rounded-lg border border-subtle-c bg-sunken-c p-2.5">
                <Cpu className="h-4 w-4 accent-c" />
                <p className="mt-1.5 font-mono text-[9px] text-muted-c">Optimized</p>
              </div>
              <div className="rounded-lg border border-subtle-c bg-sunken-c p-2.5">
                <Zap className="h-4 w-4 accent-c" />
                <p className="mt-1.5 font-mono text-[9px] text-muted-c">Fast</p>
              </div>
            </div>
          </div>
        </div>

        {/* Floating UI card — top right */}
        <div
          className="glass absolute -right-6 -top-8 hidden rounded-xl px-4 py-3 sm:block"
          style={{
            ...floatSlow,
            transform: 'translateZ(60px)',
          }}
        >
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg accent-soft-bg">
              <Globe className="h-4 w-4 accent-c" />
            </div>
            <div>
              <p className="text-xs font-medium text-primary-c">WordPress</p>
              <p className="font-mono text-[10px] text-muted-c">REST API</p>
            </div>
          </div>
        </div>

        {/* Floating UI card — bottom left */}
        <div
          className="glass absolute -bottom-6 -left-8 hidden rounded-xl px-4 py-3 sm:block"
          style={{
            ...float,
            animationDelay: '2s',
            transform: 'translateZ(40px)',
          }}
        >
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg accent-soft-bg">
              <MousePointer2 className="h-4 w-4 accent-c" />
            </div>
            <div>
              <p className="text-xs font-medium text-primary-c">Interactive</p>
              <p className="font-mono text-[10px] text-muted-c">UI / UX</p>
            </div>
          </div>
        </div>

        {/* Floating tag — top left */}
        <div
          className="glass absolute -left-4 top-12 hidden rounded-lg px-3 py-2 lg:block"
          style={{
            ...floatSlow,
            animationDelay: '1s',
            transform: 'translateZ(30px)',
          }}
        >
          <p className="font-mono text-[10px] text-muted-c">
            <span style={{ color: '#10b981' }}>●</span> Responsive
          </p>
        </div>

        {/* Floating tag — bottom right */}
        <div
          className="glass absolute -right-2 bottom-10 hidden rounded-lg px-3 py-2 lg:block"
          style={{
            ...float,
            animationDelay: '3s',
            transform: 'translateZ(50px)',
          }}
        >
          <p className="font-mono text-[10px] text-muted-c">
            <span style={{ color: 'var(--accent)' }}>▲</span> Accessible
          </p>
        </div>
      </div>
    </div>
  );
}
