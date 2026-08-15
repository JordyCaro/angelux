import { Instagram } from "lucide-react";

const TikTokIcon = ({ className = "h-4 w-4" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.88-2.88 2.89 2.89 0 0 1 2.88-2.88c.28 0 .54.04.79.12V9.01a6.27 6.27 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15.3a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.73a8.18 8.18 0 0 0 4.76 1.52V6.8a4.84 4.84 0 0 1-1-.11Z" />
  </svg>
);

export const socialLinks = [
  { name: "Instagram", href: "#", icon: Instagram },
  { name: "TikTok", href: "#", icon: TikTokIcon },
];

type SocialLinksProps = {
  className?: string;
  iconClassName?: string;
};

const SocialLinks = ({ className = "", iconClassName = "h-4 w-4" }: SocialLinksProps) => (
  <div className={`flex gap-3 ${className}`}>
    {socialLinks.map((item) => (
      <a
        key={item.name}
        href={item.href}
        className="flex h-10 w-10 items-center justify-center border border-border/80 transition-colors hover:border-angelux-steel hover:text-primary"
        aria-label={item.name}
      >
        <item.icon className={iconClassName} />
      </a>
    ))}
  </div>
);

export default SocialLinks;
