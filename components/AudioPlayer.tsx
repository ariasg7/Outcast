"use client";

import { useState, useRef, useEffect } from 'react';
import { X, Play, Pause } from 'lucide-react';

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
  const [currentMode, setCurrentMode] = useState<'raw' | 'outcast'>('raw');
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.load();
      setIsPlaying(false);
      setCurrentTime(0);
    }
  }, [currentMode, album]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (audioRef.current) {
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
    <div className="fixed bottom-0 left-0 right-0 bg-black border-t-2 border-white z-50 p-8">
      <audio
        ref={audioRef}
        src={currentMode === 'raw' ? album.rawStem : album.outcastMix}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
      />
      
      <div className="max-w-[1600px] mx-auto">
        <div className="flex items-center gap-8">
          {/* Album Cover */}
          <img
            src={album.cover}
            alt={album.title}
            className="w-24 h-24 border-2 border-white"
          />
          
          {/* Track Info */}
          <div className="flex-1">
            <h3 className="font-['Impact',sans-serif] text-white text-2xl uppercase">
              {album.title}
            </h3>
            <p className="font-['Space_Mono',monospace] text-[#888888] text-xs uppercase">
              {album.artist}
            </p>
          </div>
          
          {/* Controls */}
          <div className="flex items-center gap-6">
            <button
              onClick={togglePlay}
              className="w-12 h-12 border-2 border-white flex items-center justify-center hover:bg-white hover:text-black transition-colors"
            >
              {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
            </button>
            
            {/* A/B Toggle */}
            <div className="flex border-2 border-white">
              <button
                onClick={() => setCurrentMode('raw')}
                className={`px-6 py-3 font-['Space_Mono',monospace] text-sm uppercase transition-colors ${
                  currentMode === 'raw' 
                    ? 'bg-white text-black' 
                    : 'bg-black text-white hover:bg-[#1A1A1A]'
                }`}
              >
                RAW STEMS
              </button>
              <button
                onClick={() => setCurrentMode('outcast')}
                className={`px-6 py-3 font-['Space_Mono',monospace] text-sm uppercase transition-colors ${
                  currentMode === 'outcast' 
                    ? 'bg-white text-black' 
                    : 'bg-black text-white hover:bg-[#1A1A1A]'
                }`}
              >
                OUTCAST MIX
              </button>
            </div>
          </div>
          
          {/* Close Button */}
          <button
            onClick={onClose}
            className="w-12 h-12 border-2 border-white flex items-center justify-center hover:bg-white hover:text-black transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        
        {/* Waveform / Progress Bar */}
        <div className="mt-6">
          <div 
            className="h-24 bg-[#1A1A1A] border-2 border-white relative cursor-pointer overflow-hidden"
            onClick={handleProgressClick}
          >
            {/* Fake Waveform Background */}
            <div 
              className="absolute inset-0 flex items-end justify-around px-2"
              style={{ 
                backgroundImage: 'repeating-linear-gradient(90deg, #888888 0px, #888888 2px, transparent 2px, transparent 6px)',
                opacity: 0.3
              }}
            >
              {[...Array(100)].map((_, i) => (
                <div
                  key={i}
                  className="w-0.5 bg-white"
                  style={{ 
                    height: `${Math.random() * 100}%`,
                    opacity: 0.5
                  }}
                />
              ))}
            </div>
            
            {/* Progress Overlay */}
            <div 
              className="absolute inset-y-0 left-0 bg-white"
              style={{ 
                width: `${progress}%`,
                opacity: 0.2
              }}
            />
            
            {/* Progress Line */}
            <div 
              className="absolute inset-y-0 w-0.5 bg-white"
              style={{ 
                left: `${progress}%`
              }}
            />
          </div>
          
          {/* Time Display */}
          <div className="flex justify-between mt-2">
            <span className="font-['Space_Mono',monospace] text-white text-xs">
              {formatTime(currentTime)}
            </span>
            <span className="font-['Space_Mono',monospace] text-white text-xs">
              {formatTime(duration)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
