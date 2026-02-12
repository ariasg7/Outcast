"use client";

import { useState } from 'react';

const mixers = [
  {
    id: 1,
    name: 'ALEX RIVERA',
    role: 'Lead Mix Engineer',
    portrait: 'https://images.unsplash.com/photo-1651017810072-3043e05ddbcc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMHByb2R1Y2VyJTIwaGVhZHNob3QlMjBibGFjayUyMHdoaXRlfGVufDF8fHx8MTc3MDM1MjAzMnww&ixlib=rb-4.1.0&q=80&w=1080',
    glitch: 'https://images.unsplash.com/photo-1624154670578-42532d763bd3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdWRpbyUyMGVuZ2luZWVyJTIwbWl4aW5nJTIwZGVzayUyMGJsYWNrJTIwd2hpdGV8ZW58MXx8fHwxNzcwMzUyMDMzfDA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    id: 2,
    name: 'JORDAN BLAKE',
    role: 'Vocal Producer',
    portrait: 'https://images.unsplash.com/photo-1650765814773-d99b321a0124?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMHByb2R1Y2VyJTIwc3R1ZGlvJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzcwMjUyNjA1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    glitch: 'https://images.unsplash.com/photo-1707215048454-66e4c10fa026?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWNvcmRpbmclMjBzdHVkaW8lMjBibGFjayUyMHdoaXRlJTIwZ3JhaW55fGVufDF8fHx8MTc3MDM1MjAzMnww&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    id: 3,
    name: 'CASEY MORGAN',
    role: 'Master Engineer',
    portrait: 'https://images.unsplash.com/photo-1624154670578-42532d763bd3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdWRpbyUyMGVuZ2luZWVyJTIwbWl4aW5nJTIwZGVzayUyMGJsYWNrJTIwd2hpdGV8ZW58MXx8fHwxNzcwMzUyMDMzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    glitch: 'https://images.unsplash.com/photo-1650765814773-d99b321a0124?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMHByb2R1Y2VyJTIwc3R1ZGlvJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzcwMjUyNjA1fDA&ixlib=rb-4.1.0&q=80&w=1080'
  }
];

export function MeetTheMixers() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="mixers" className="bg-black py-24 px-8">
      <div className="max-w-[1400px] mx-auto">
        <h2 
          className="font-['Impact',sans-serif] text-white uppercase text-center mb-16"
          style={{ fontSize: '80px', letterSpacing: '-0.02em' }}
        >
          MEET THE MIXERS
        </h2>
        
        <div className="grid grid-cols-3 gap-12">
          {mixers.map((mixer, index) => (
            <div 
              key={mixer.id}
              className="relative"
              style={{ marginTop: index % 2 === 1 ? '80px' : '0' }}
              onMouseEnter={() => setHoveredId(mixer.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="relative w-full aspect-[3/4] overflow-hidden border-2 border-white">
                <img
                  src={hoveredId === mixer.id ? mixer.glitch : mixer.portrait}
                  alt={mixer.name}
                  className="w-full h-full object-cover"
                  style={{ 
                    filter: 'grayscale(100%) contrast(1.3)',
                    transition: 'none'
                  }}
                />
              </div>
              <div className="mt-6">
                <h3 
                  className="font-['Impact',sans-serif] text-white uppercase"
                  style={{ fontSize: '40px', letterSpacing: '-0.02em' }}
                >
                  {mixer.name}
                </h3>
                <p className="font-['Space_Mono',monospace] text-[#888888] uppercase text-xs mt-1">
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
