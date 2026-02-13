"use client";

import { useState, useEffect } from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { AudioPlayer } from './AudioPlayer';

const albums = [
  {
    id: 1,
    title: "HOLLYWOOD'S BLEEDING",
    artist: 'Post Malone',
    cover: 'https://images.unsplash.com/photo-1638109879065-10b4a3bf0360?auto=format&fit=crop&q=80&w=600',
    rawStem: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    outcastMix: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3'
  },
  {
    id: 2,
    title: 'GOOD DAYS',
    artist: 'SZA',
    cover: 'https://images.unsplash.com/photo-1598387181032-a3103a2db5b3?auto=format&fit=crop&q=80&w=600',
    rawStem: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
    outcastMix: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3'
  },
  {
    id: 3,
    title: 'MOOD',
    artist: '24kGoldn ft. iann dior',
    cover: 'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?auto=format&fit=crop&q=80&w=600',
    rawStem: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3',
    outcastMix: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3'
  },
  {
    id: 4,
    title: 'RANSOM',
    artist: 'Lil Tecca',
    cover: 'https://images.unsplash.com/photo-1619983081563-430f63602796?auto=format&fit=crop&q=80&w=600',
    rawStem: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3',
    outcastMix: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3'
  },
  {
    id: 5,
    title: 'WITHOUT YOU',
    artist: 'The Kid LAROI',
    cover: 'https://images.unsplash.com/photo-1459749411177-042180ce673c?auto=format&fit=crop&q=80&w=600',
    rawStem: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    outcastMix: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3'
  },
  {
    id: 6,
    title: 'RAPSTAR',
    artist: 'Polo G',
    cover: 'https://images.unsplash.com/photo-1496293455970-f8581aae0e3c?auto=format&fit=crop&q=80&w=600',
    rawStem: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
    outcastMix: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3'
  },
  {
    id: 7,
    title: 'MISS THE RAGE',
    artist: 'Trippie Redd ft. Playboi Carti',
    cover: 'https://images.unsplash.com/photo-1514525253361-b83f859b73c0?auto=format&fit=crop&q=80&w=600',
    rawStem: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3',
    outcastMix: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3'
  },
  {
    id: 8,
    title: 'TICKETS TO MY DOWNFALL',
    artist: 'Machine Gun Kelly',
    cover: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=600',
    rawStem: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3',
    outcastMix: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3'
  }
];

export function Vault() {
  const [mounted, setMounted] = useState(false);
  const [selectedAlbum, setSelectedAlbum] = useState<typeof albums[0] | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="bg-black min-h-screen" />;

  return (
    <div className="bg-black min-h-screen py-16 md:py-24 px-4 md:px-12">
      <div className="max-w-[1600px] mx-auto">
        <h1 
          className="font-['Impact',sans-serif] text-white uppercase text-center mb-4 leading-none"
          style={{ fontSize: 'clamp(48px, 12vw, 100px)', letterSpacing: '-0.02em' }}
        >
          THE VAULT
        </h1>
        <p className="font-mono text-[#888888] text-center text-[10px] md:text-sm tracking-[0.2em] md:tracking-[0.4em] uppercase mb-12 md:mb-20 px-4">
          A Digital Archive of Every Win
        </p>
        
        <ResponsiveMasonry columnsCountBreakPoints={{ 300: 1, 600: 2, 900: 3, 1200: 4 }}>
          <Masonry gutter="16px md:24px">
            {albums.map((album) => (
              <div 
                key={album.id}
                className="cursor-pointer group border-2 border-white/20 hover:border-white transition-all duration-300 overflow-hidden bg-[#111]"
                onClick={() => setSelectedAlbum(album)}
              >
                <img
                  src={album.cover}
                  alt={`${album.title} by ${album.artist}`}
                  className="w-full h-auto block group-hover:scale-105 transition-transform duration-500 grayscale hover:grayscale-0"
                  loading="lazy"
                />
                {/* Mobile Info Bar (Visible on phones) */}
                <div className="p-4 md:hidden bg-black/80 border-t border-white/10">
                   <p className="font-['Impact',sans-serif] text-white text-lg uppercase leading-tight">{album.title}</p>
                   <p className="font-mono text-[#888888] text-[9px] uppercase tracking-widest">{album.artist}</p>
                </div>
              </div>
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
      
      {selectedAlbum && (
        <AudioPlayer 
          album={selectedAlbum}
          onClose={() => setSelectedAlbum(null)}
        />
      )}
    </div>
  );
}