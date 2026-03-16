'use client';

interface MenuCardProps {
  name: string;
  description: string;
  onOrderClick: () => void;
}

export default function MenuCard({ name, description, onOrderClick }: MenuCardProps) {
  return (
    <div className="group overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:scale-[1.03] hover:shadow-xl">
      {/* Placeholder image */}
      <div className="aspect-[4/3] bg-muted">
        <div className="flex h-full w-full items-center justify-center text-primary/20">
          <svg className="h-16 w-16" fill="currentColor" viewBox="0 0 24 24">
            <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4m4-5l5-5 5 5m-5-5v12" />
          </svg>
        </div>
      </div>
      <div className="p-5">
        <h3 className="mb-2 text-lg font-bold text-primary">{name}</h3>
        <p className="mb-4 text-sm text-primary/70 line-clamp-2">{description}</p>
        <button
          onClick={onOrderClick}
          className="w-full rounded-full bg-accent px-4 py-2 text-sm font-bold text-primary transition-colors hover:bg-accent/90"
        >
          להזמנה
        </button>
      </div>
    </div>
  );
}
