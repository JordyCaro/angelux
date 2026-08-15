const items = [
  "BLACKWORK",
  "BLACK & GREY",
  "REALISMO",
  "FINELINE",
  "GEOMETRÍA",
  "SOMBRA",
  "CONTRASTE",
  "TINTA NEGRA",
];

const InkMarquee = () => {
  const line = [...items, ...items];

  return (
    <div className="relative overflow-hidden border-y border-angelux-steel/30 bg-background/80 py-3 backdrop-blur-sm">
      <div className="animate-marquee flex w-max gap-10 whitespace-nowrap">
        {line.map((item, i) => (
          <span key={`${item}-${i}`} className="flex items-center gap-10">
            <span className="font-cinzel text-xs tracking-[0.35em] text-muted-foreground">{item}</span>
            <span className="h-1 w-1 rotate-45 bg-angelux-steel" />
          </span>
        ))}
      </div>
    </div>
  );
};

export default InkMarquee;
