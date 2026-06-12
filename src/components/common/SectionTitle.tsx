interface Props {
  subtitle?: string;
  title: string;
}

export default function SectionTitle({
  subtitle,
  title
}: Props) {
  return (
    <div className="text-center mb-16">
      {subtitle && (
        <p className="text-secondary font-semibold uppercase tracking-wider">
          {subtitle}
        </p>
      )}

      <h2 className="text-4xl md:text-5xl font-bold mt-4">
        {title}
      </h2>
    </div>
  );
}
