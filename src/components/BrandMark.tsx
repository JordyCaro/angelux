interface BrandMarkProps {
  className?: string;
}

const BrandMark = ({ className = "h-12 w-auto" }: BrandMarkProps) => (
  <img
    src="/logo-white.png"
    alt="Angelux Ink"
    className={className}
  />
);

export default BrandMark;
