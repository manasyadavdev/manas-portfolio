type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
};

export default function SectionHeading({ eyebrow, title, subtitle, align = 'left' }: Props) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left';
  return (
    <div className={`max-w-2xl ${alignClass}`}>
      {eyebrow && (
        <span className="tag mb-4 inline-flex">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl font-semibold tracking-tight text-primary-c sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base text-secondary-c sm:text-lg" style={{ lineHeight: 1.6 }}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
