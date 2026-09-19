import { Github } from 'lucide-react';

type Props = {
  href: string;
  className?: string;
};

export default function GitHubButton({ href, className = '' }: Props) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="GitHub profile"
      className={`flex h-10 w-10 items-center justify-center rounded-xl border border-subtle-c bg-elevated-c text-secondary-c transition-all duration-300 hover:border-strong-c hover:text-primary-c hover:shadow-lg ${className}`}
    >
      <Github className="h-[18px] w-[18px]" />
    </a>
  );
}
