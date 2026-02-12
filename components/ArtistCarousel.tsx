"use client";

import { useEffect, useRef } from 'react';

const brands = [
  'DRAKE', 'TRAVIS SCOTT', 'KENDRICK LAMAR', 'FUTURE', 'LIL UZI VERT',
  'PLAYBOI CARTI', '21 SAVAGE', 'METRO BOOMIN', 'GUNNA', 'YOUNG THUG',
  'MACHINE GUN KELLY', 'JUICE WRLD', 'LIL SKIES', 'YUNG PINCH', 'RICH THE KID'
];

export function ArtistCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let scrollPosition = 0;
    const scrollSpeed = 1.5;

    const scroll = () => {
      scrollPosition += scrollSpeed;
      if (scrollPosition >= container.scrollWidth / 3) {
        scrollPosition = 0;
      }
      container.scrollLeft = scrollPosition;
      requestAnimationFrame(scroll);
    };

    const animationId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <section 
      id="artists" 
      className="bg-black overflow-hidden border-t-2 border-b-2 border-white py-6"
    >
      <div 
        ref={containerRef}
        className="overflow-hidden whitespace-nowrap select-none"
      >
        <div className="flex w-max items-center">
          {[...brands, ...brands, ...brands].map((brand, index) => (
            <div
              key={index}
              className="px-12 flex-shrink-0"
            >
              <span className="font-['Impact',sans-serif] text-white text-5xl md:text-6xl uppercase tracking-tighter leading-none">
                {brand}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}