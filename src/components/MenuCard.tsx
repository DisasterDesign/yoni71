'use client';

import Image from 'next/image';
import { TABIT_URL } from '@/lib/constants';

interface MenuCardProps {
  name: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

export default function MenuCard({ name, description, imageSrc, imageAlt }: MenuCardProps) {
  return (
    <div className="group overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:scale-[1.03] hover:shadow-xl">
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-5">
        <h3 className="mb-2 text-lg font-bold text-primary">{name}</h3>
        <p className="mb-4 text-sm text-primary/70 line-clamp-2">{description}</p>
        <a
          href={TABIT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full rounded-full bg-accent px-4 py-2 text-center text-sm font-bold text-primary transition-colors hover:bg-accent/90"
        >
          להזמנה
        </a>
      </div>
    </div>
  );
}
