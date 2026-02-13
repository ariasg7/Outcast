"use client";

import { useState, useRef, useEffect } from 'react';
import { X, Play, Pause, Volume2 } from 'lucide-react';

// Ensure this matches exactly what is being passed from Vault
interface Album {
  id: number;
  title: string;
  artist: string;
  cover: string;
  rawStem: string;
  outcastMix: string;
}

export function AudioPlayer({ album, onClose }: { album: Album; onClose: () => void }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentMode, setCurrentMode] = useState<'raw' | 'outcast'>('outcast');
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  
  // FIXED LINE BELOW:
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Seamlessly swap audio source without losing position
  useEffect(() => {
    if (audioRef.current) {
      const wasPlaying = isPlaying;
      const timeBeforeSwap = audioRef.current.currentTime;
      
      audioRef.current.src = currentMode === 'raw' ? album.rawStem : album.outcastMix;
      audioRef.current.load();
      audioRef.current.currentTime = timeBeforeSwap;
      
      if (wasPlaying) {
        audioRef.current.play().catch(() => setIsPlaying(false));
      }
    }
  }, [currentMode, album.rawStem, album.outcastMix]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(console.error);
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) setCurrentTime(audioRef.current.currentTime);
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) setDuration(audioRef.current.duration);
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (audioRef.current && duration > 0) {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const percentage = x / rect.width;
      audioRef.current.currentTime = percentage * duration;
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div className="fixed inset-x-0 bottom-0 md:bottom-0 z-50 bg-black border-t-2 border-white p-4 md:p-8 animate-in slide-in-from-bottom duration-300">
      <audio
        ref={audioRef}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={() => setIsPlaying(false)}
      />
      
      <div className="max-w-[1600px] mx-auto flex flex-col gap-4 md:gap-6">
        
        {/* Top Section: Info and Buttons */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          
          {/* Album Info */}
          <div className="flex items-center gap-4 w-full md:w-auto">
            <img
              src={album.cover}
              alt={album.title}
              className="w-16 h-16 md:w-20 md:h-20 border-2 border-white object-cover"
            />
            <div className="overflow-hidden">
              <h3 className="font-['Impact',sans-serif] text-white text-xl md:text-3xl uppercase truncate leading-tight">
                {album.title}
              </h3>
              <p className="font-mono text-[#888888] text-[10px] md:text-xs uppercase tracking-widest truncate">
                {album.artist}
              </p>
            </div>
            {/* Mobile Close Button */}
            <button onClick={onClose} className="md:hidden ml-auto p-2 border border-white/30 text-white">
              <X size={20} />
            </button>
          </div>
          
          {/* Controls Group */}
          <div className="flex items-center gap-2 md:gap-6 w-full md:w-auto">
            {/* Play Button */}
            <button
              onClick={togglePlay}
              className="flex-1 md:flex-none w-14 h-14 border-2 border-white flex items-center justify-center bg-white/5 hover:bg-white hover:text-black transition-all"
            >
              {isPlaying ? <Pause fill="currentColor" /> : <Play fill="currentColor" className="ml-1" />}
            </button>
            
            {/* A/B Switch */}
            <div className="flex flex-1 md:flex-none border-2 border-white bg-black">
              <button
                onClick={() => setCurrentMode('raw')}
                className={`flex-1 md:px-6 py-3 font-mono text-[9px] md:text-xs uppercase transition-all ${
                  currentMode === 'raw' ? 'bg-white text-black' : 'text-white hover:bg-white/10'
                }`}
              >
                RAW STEMS
              </button>
              <button
                onClick={() => setCurrentMode('outcast')}
                className={`flex-1 md:px-6 py-3 font-mono text-[9px] md:text-xs uppercase transition-all ${
                  currentMode === 'outcast' ? 'bg-white text-black' : 'text-white hover:bg-white/10'
                }`}
              >
                OUTCAST MIX
              </button>
            </div>

            {/* Desktop Close Button */}
            <button onClick={onClose} className="hidden md:flex w-12 h-12 border-2 border-white items-center justify-center hover:bg-white hover:text-black transition-all">
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>
        
        {/* Waveform Area */}
        <div className="w-full">
          <div 
            className="h-16 md:h-24 bg-[#0A0A0A] border-2 border-white/20 relative cursor-pointer overflow-hidden group"
            onClick={handleProgressClick}
          >
            {/* Custom Bar Waveform */}
            <div className="absolute inset-0 flex items-end justify-between gap-[2px] md:gap-[4px] px-1 opacity-40">
              {[...Array(60)].map((_, i) => (
                <div
                  key={i}
                  className="flex-1 bg-white" // flex-1 makes them fill the space evenly
                  style={{ 
                    height: `${20 + Math.random() * 80}%`,
                    minWidth: '2px' // Ensures they never disappear on mobile
                  }}
                />
              ))}
            </div>
            
            {/* Active Progress Overlay */}
            <div 
              className="absolute inset-y-0 left-0 bg-white/20 border-r-2 border-white pointer-events-none transition-all duration-100"
              style={{ width: `${progress}%` }}
            />
          </div>
          
          <div className="flex justify-between mt-2 font-mono text-[10px] md:text-xs text-[#888888] uppercase tracking-tighter">
            <span>{formatTime(currentTime)}</span>
            <span className="flex items-center gap-1">
              <Volume2 size={10} />
              {currentMode === 'outcast' ? 'OUTCAST_OPTIMIZED' : 'RAW_DATA'}
            </span>
            <span>{formatTime(duration)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}