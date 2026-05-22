interface SectionTitleProps {
  title: string;
  subtitle: string;
  center?: boolean;
}

const SectionTitle = ({
  title,
  subtitle,
  center = true,
}: SectionTitleProps) => {
  return (
    <div className={center ? "text-center" : ""}>
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
        {title}
      </h2>
      <p className="mt-3 text-muted text-sm md:text-base tracking-wide max-w-[600px] mx-auto">
        {subtitle}
      </p>
    </div>
  );
};

export default SectionTitle;
