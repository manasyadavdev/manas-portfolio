import { Moon, Sun } from 'lucide-react';

type Props = {
  theme: 'dark' | 'light';
  onToggle: () => void;
};

export default function ThemeToggle({ theme, onToggle }: Props) {
  return (
    <button
      onClick={onToggle}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-subtle-c bg-elevated-c transition-all duration-300 hover:border-strong-c hover:shadow-lg"
    >
      <Sun
        className={`h-[18px] w-[18px] transition-all duration-500 ${
          theme === 'dark' ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-0 opacity-0'
        } absolute`}
      />
      <Moon
        className={`h-[18px] w-[18px] transition-all duration-500 ${
          theme === 'light' ? 'rotate-0 scale-100 opacity-100' : 'rotate-90 scale-0 opacity-0'
        } absolute`}
      />
    </button>
  );
}
