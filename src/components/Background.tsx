export default function Background() {
  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      aria-hidden="true"
    >
      {/* Base gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% -10%, var(--glow-radial), transparent 60%), radial-gradient(ellipse 60% 50% at 80% 100%, var(--glow-radial), transparent 50%)',
        }}
      />

      {/* Fine grid */}
      <div className="grid-bg absolute inset-0 opacity-60" />

      {/* Orbital lines */}
      <svg
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20"
        width="1200"
        height="1200"
        viewBox="0 0 1200 1200"
        fill="none"
      >
        <circle cx="600" cy="600" r="300" stroke="var(--border-subtle)" strokeWidth="1" />
        <circle cx="600" cy="600" r="450" stroke="var(--border-subtle)" strokeWidth="1" />
        <circle cx="600" cy="600" r="600" stroke="var(--border-subtle)" strokeWidth="1" />
      </svg>

      {/* Subtle noise overlay */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'200\' height=\'200\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'3\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/%3E%3C/svg%3E")',
        }}
      />
    </div>
  );
}
