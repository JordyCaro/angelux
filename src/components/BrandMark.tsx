interface BrandMarkProps {
  className?: string;
}

const BrandMark = ({ className = "w-10 h-10" }: BrandMarkProps) => (
  <svg viewBox="0 0 48 48" className={className} fill="none" aria-hidden="true">
    <path
      d="M16.5 3.5h15L44.5 16.5v15L31.5 44.5h-15L3.5 31.5v-15L16.5 3.5z"
      stroke="currentColor"
      strokeWidth="1.25"
    />
    <path
      d="M24 11.5 35 37h-4.2l-2.6-6.6H19.8L17.2 37H13L24 11.5Z"
      fill="currentColor"
    />
    <path d="M20.6 26.6h6.8L24 17.8 20.6 26.6Z" fill="hsl(var(--background))" />
    <circle cx="24" cy="41.2" r="1.4" fill="hsl(var(--angelux-steel))" />
  </svg>
);

export default BrandMark;
