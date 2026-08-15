const GeometryCorners = ({ inset = "inset-4 md:inset-8" }: { inset?: string }) => (
  <div className="pointer-events-none absolute inset-0 z-[1]" aria-hidden="true">
    <div className={`absolute ${inset} border border-angelux-steel/15`} />
    <span className="absolute top-4 left-4 md:top-8 md:left-8 h-5 w-5 border-l-2 border-t-2 border-angelux-steel/80" />
    <span className="absolute top-4 right-4 md:top-8 md:right-8 h-5 w-5 border-r-2 border-t-2 border-angelux-steel/80" />
    <span className="absolute bottom-4 left-4 md:bottom-8 md:left-8 h-5 w-5 border-l-2 border-b-2 border-angelux-steel/80" />
    <span className="absolute bottom-4 right-4 md:bottom-8 md:right-8 h-5 w-5 border-r-2 border-b-2 border-angelux-steel/80" />
    <span className="absolute left-1/2 top-4 md:top-8 h-3 w-px -translate-x-1/2 bg-angelux-steel/50" />
    <span className="absolute left-1/2 bottom-4 md:bottom-8 h-3 w-px -translate-x-1/2 bg-angelux-steel/50" />
  </div>
);

export default GeometryCorners;
