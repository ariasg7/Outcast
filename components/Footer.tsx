"use client";

import { Instagram, Twitter, Youtube, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-black border-t-2 border-white py-16 px-8">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-4 gap-12 mb-12">
          {/* Logo & Tagline */}
          <div className="col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img 
                src= "img/Outcast.png" 
                alt="Outcast Logo" 
                className="w-16 h-16 invert"
              />
            </div>
            <h3 className="font-['Impact',sans-serif] text-white text-3xl uppercase mb-2">
              OUTCAST
            </h3>
            <p className="font-['Space_Mono',monospace] text-[#888888] text-xs uppercase">
              Producer Collective
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-['Impact',sans-serif] text-white text-xl uppercase mb-4">
              Navigate
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#mixers" className="font-['Space_Mono',monospace] text-[#888888] text-sm hover:text-white transition-colors uppercase">
                  Meet the Mixers
                </a>
              </li>
              <li>
                <a href="#services" className="font-['Space_Mono',monospace] text-[#888888] text-sm hover:text-white transition-colors uppercase">
                  Services
                </a>
              </li>
              <li>
                <a href="#vault" className="font-['Space_Mono',monospace] text-[#888888] text-sm hover:text-white transition-colors uppercase">
                  The Vault
                </a>
              </li>
              <li>
                <a href="#contact" className="font-['Space_Mono',monospace] text-[#888888] text-sm hover:text-white transition-colors uppercase">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="font-['Impact',sans-serif] text-white text-xl uppercase mb-4">
              Services
            </h4>
            <ul className="space-y-2">
              <li className="font-['Space_Mono',monospace] text-[#888888] text-sm uppercase">
                Full Mix
              </li>
              <li className="font-['Space_Mono',monospace] text-[#888888] text-sm uppercase">
                Vocal Tuning
              </li>
              <li className="font-['Space_Mono',monospace] text-[#888888] text-sm uppercase">
                Recording Templates
              </li>
              <li className="font-['Space_Mono',monospace] text-[#888888] text-sm uppercase">
                Mastering
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="font-['Impact',sans-serif] text-white text-xl uppercase mb-4">
              Connect
            </h4>
            <div className="space-y-3 mb-6">
              <a href="mailto:studio@outcast.com" className="font-['Space_Mono',monospace] text-[#888888] text-sm hover:text-white transition-colors flex items-center gap-2">
                <Mail className="w-4 h-4" />
                studio@outcast.com
              </a>
              <p className="font-['Space_Mono',monospace] text-[#888888] text-sm">
                Los Angeles, CA
              </p>
            </div>
            
            {/* Social Icons */}
            <div className="flex gap-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 border-2 border-white flex items-center justify-center hover:bg-white hover:text-black transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 border-2 border-white flex items-center justify-center hover:bg-white hover:text-black transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 border-2 border-white flex items-center justify-center hover:bg-white hover:text-black transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t-2 border-[#1A1A1A] pt-8 flex justify-between items-center">
          <p className="font-['Space_Mono',monospace] text-[#888888] text-xs">
            © 2026 OUTCAST PRODUCER COLLECTIVE. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-6">
            <a href="#" className="font-['Space_Mono',monospace] text-[#888888] text-xs hover:text-white transition-colors uppercase">
              Privacy Policy
            </a>
            <a href="#" className="font-['Space_Mono',monospace] text-[#888888] text-xs hover:text-white transition-colors uppercase">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}