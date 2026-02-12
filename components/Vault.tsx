"use client";

import { useState } from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { AudioPlayer } from './AudioPlayer';

const albums = [
  {
    id: 1,
    title: 'HOLLYWOOD\'S BLEEDING',
    artist: 'Post Malone',
    cover: 'https://images.unsplash.com/photo-1638109879065-10b4a3bf0360?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
    rawStem: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    outcastMix: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3'
  },
  {
    id: 2,
    title: 'GOOD DAYS',
    artist: 'SZA',
    cover: 'https://images.unsplash.com/photo-1601642965991-43f29377082b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
    rawStem: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
    outcastMix: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3'
  },
  {
    id: 3,
    title: 'MOOD',
    artist: '24kGoldn ft. iann dior',
    cover: 'https://images.unsplash.com/photo-1644855640845-ab57a047320e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
    rawStem: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3',
    outcastMix: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3'
  },
  {
    id: 4,
    title: 'RANSOM',
    artist: 'Lil Tecca',
    cover: 'https://images.unsplash.com/photo-1616663395403-2e0052b8e595?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
    rawStem: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3',
    outcastMix: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3'
  },
  {
    id: 5,
    title: 'WITHOUT YOU',
    artist: 'The Kid LAROI',
    cover: 'https://images.unsplash.com/photo-1638109879065-10b4a3bf0360?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
    rawStem: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    outcastMix: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3'
  },
  {
    id: 6,
    title: 'RAPSTAR',
    artist: 'Polo G',
    cover: 'https://images.unsplash.com/photo-1601642965991-43f29377082b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
    rawStem: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
    outcastMix: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3'
  },
  {
    id: 7,
    title: 'MISS THE RAGE',
    artist: 'Trippie Redd ft. Playboi Carti',
    cover: 'https://images.unsplash.com/photo-1644855640845-ab57a047320e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
    rawStem: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3',
    outcastMix: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3'
  },
  {
    id: 8,
    title: 'TICKETS TO MY DOWNFALL',
    artist: 'Machine Gun Kelly',
    cover: 'https://images.unsplash.com/photo-1616663395403-2e0052b8e595?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
    rawStem: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3',
    outcastMix: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3'
  }
];

export function Vault() {
  const [selectedAlbum, setSelectedAlbum] = useState<typeof albums[0] | null>(null);

  return (
    <div className="bg-black min-h-screen py-24 px-8">
      <div className="max-w-[1600px] mx-auto">
        <h1 
          className="font-['Impact',sans-serif] text-white uppercase text-center mb-4"
          style={{ fontSize: '100px', letterSpacing: '-0.02em' }}
        >
          THE VAULT
        </h1>
        <p className="font-['Space_Mono',monospace] text-[#888888] text-center text-sm uppercase mb-16">
          A Digital Archive of Every Win
        </p>
        
        <Masonry columnsCount={4} gutter="24px">
          {albums.map((album) => (
            <div 
              key={album.id}
              className="cursor-pointer group border-2 border-white hover:border-[#888888] transition-colors overflow-hidden"
              onClick={() => setSelectedAlbum(album)}
            >
              <img
                src={album.cover}
                alt={`${album.title} by ${album.artist}`}
                className="w-full h-auto block group-hover:opacity-80 transition-opacity"
              />
            </div>
          ))}
        </Masonry>
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
