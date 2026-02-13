"use client";

import { useState } from 'react';

const mixers = [
  {
    id: 1,
    name: 'MP Makoto',
    role: 'Lead Mix Engineer',
    portrait: 'img/MP Makoto.jpeg',
    glitch: 'img/MP Makoto 1.jpeg'
  },
  {
    id: 2,
    name: 'Dreamy',
    role: 'Mix Engineer',
    portrait: 'img/DREAMy.jpg',
    glitch: 'img/DREAMy 1.jpeg'
  },
  {
    id: 3,
    name: 'Prod. Tony',
    role: 'Mix Engineer',
    portrait: 'img/prod tony.jpeg',
    glitch: 'https://images.unsplash.com/photo-1650765814773-d99b321a0124?auto=format&fit=crop&q=80&w=1080'
  },
  {
    id: 4,
    name: 'Atasament',
    role: 'Mix Engineer',
    portrait: 'img/Atasament.JPG',
    glitch: 'img/Atasament 1.JPG'
  }
];

export function MeetTheMixers() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="mixers" className="bg-black py-24 px-8">
      <div className="max-w-[1500px] mx-auto">
        <h2 
          className="font-['Impact',sans-serif] text-white uppercase text-center mb-16"
          style={{ fontSize: 'clamp(48px, 8vw, 80px)', letterSpacing: '-0.02em' }}
        >
          MEET THE MIXERS
        </h2>
        
        {/* Changed from grid-cols-3 to grid-cols-2 (mobile) and lg:grid-cols-4 (desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {mixers.map((mixer, index) => (
            <div 
              key={mixer.id}
              className="relative"
              // Adjusted stagger logic: 1st and 3rd are high, 2nd and 4th are low
              style={{ marginTop: index % 2 === 1 ? '40px' : '0' }}
              onMouseEnter={() => setHoveredId(mixer.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="relative w-full aspect-[3/4] overflow-hidden border-2 border-white">
                <img
                  src={hoveredId === mixer.id ? mixer.glitch : mixer.portrait}
                  alt={mixer.name}
                  className="w-full h-full object-cover transition-opacity duration-75"
                  style={{ 
                    filter: 'grayscale(100%) contrast(1.3)',
                  }}
                />
              </div>
              <div className="mt-6">
                <h3 
                  className="font-['Impact',sans-serif] text-white uppercase leading-none"
                  style={{ fontSize: '32px', letterSpacing: '-0.02em' }}
                >
                  {mixer.name}
                </h3>
                <p className="font-mono text-[#888888] uppercase text-[10px] mt-2 tracking-widest">
                  {mixer.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}