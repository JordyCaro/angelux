interface BrandMarkProps {
  className?: string;
}

const BrandMark = ({ className = "h-12 w-auto" }: BrandMarkProps) => (
  <img
    src="/logo.png"
    alt="Angelux Ink"
    className={`logo-glow ${className}`}
  />
);

export default BrandMark;
