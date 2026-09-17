'use client';

import React from 'react';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import AutoScroll from 'embla-carousel-auto-scroll';
import ScrollFade from '@/components/ScrollFade';

export interface ClientItem {
  name: string;
  subtitle: string;
  logo: string;
}

export const CLIENT_LOGOS: ClientItem[] = [
  {
    name: "AAHDPO",
    subtitle: "Addis Ababa Housing Dev",
    logo: "/assets/logos/aahdpo-logo.png",
  },
  {
    name: "ALERT Hospital",
    subtitle: "Specialized Healthcare Center",
    logo: "/assets/logos/alert-comprhensive-specialized-hosp-logo.png",
  },
  {
    name: "St. Peter Hospital",
    subtitle: "Specialized Clinical Facilities",
    logo: "/assets/logos/St.Peter Hospital.png",
  },
  {
    name: "World Vision",
    subtitle: "Civil & Community Infrastructure",
    logo: "/assets/logos/world-vision.png",
  },
  {
    name: "Customs Commission",
    subtitle: "Federal Public Facilities",
    logo: "/assets/logos/customs-commission.png",
  },
  {
    name: "The Hunger Project",
    subtitle: "Rural Civil & Water Works",
    logo: "/assets/logos/the-hunger-project.png",
  },
];

interface ClientRosterCarouselProps {
  clients?: ClientItem[];
  speed?: number;
}

export default function ClientRosterCarousel({
  clients = CLIENT_LOGOS,
  speed = 0.8,
}: ClientRosterCarouselProps) {
  // We duplicate items to guarantee a continuous loop with no gaps on ultra-wide screens
  const duplicatedClients = [...clients, ...clients, ...clients];

  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      dragFree: true,
      containScroll: false,
    },
    [
      AutoScroll({
        speed,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
        playOnInit: true,
      }),
    ]
  );

  return (
    <div className="relative w-full overflow-hidden">
      <ScrollFade
        direction="horizontal"
        fadeSize={56}
        alwaysShowFade={true}
        fadeStart={true}
        fadeEnd={true}
        className="w-full"
      >
        <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
          <div className="flex gap-4 py-2">
          {duplicatedClients.map((client, index) => (
            <div
              key={`${client.name}-${index}`}
              className="flex-[0_0_220px] sm:flex-[0_0_240px] min-w-0"
            >
              <div className="group bg-surface-container-low p-4 h-full border border-outline-variant/30 flex flex-col items-center justify-center gap-2 hover:border-primary/50 transition-all duration-300 select-none">
                <div className="relative w-full h-12 flex items-center justify-center">
                  <Image
                    src={client.logo}
                    alt={`${client.name} logo`}
                    width={130}
                    height={48}
                    className="object-contain max-h-12 grayscale contrast-125 opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                  />
                </div>
                <div className="flex flex-col items-center text-center">
                  <span className="font-label-sm text-label-sm text-on-surface font-bold tracking-tight">
                    {client.name}
                  </span>
                  <span className="text-[11px] text-secondary line-clamp-1">
                    {client.subtitle}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      </ScrollFade>
    </div>
  );
}
