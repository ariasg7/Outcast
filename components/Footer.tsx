"use client";

import { Instagram, Twitter, Youtube, Mail } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-black border-t-2 border-white py-16 px-6 md:px-8">
      <div className="max-w-[1400px] mx-auto">
        {/* Main Grid: 1 column on mobile, 2 on tablet, 4 on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 text-center md:text-left">
          
          {/* Logo & Tagline */}
          <div className="flex flex-col items-center md:items-start">
            <img 
              src="/img/Outcast.png" 
              alt="Outcast Logo" 
              className="w-16 h-16 invert mb-4"
            />
            <h3 className="font-['Impact',sans-serif] text-white text-4xl uppercase leading-none">
              OUTCAST
            </h3>
            <p className="font-mono text-[#888888] text-[10px] tracking-[0.3em] uppercase mt-2">
              Producer Collective
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-['Impact',sans-serif] text-white text-xl uppercase mb-6 tracking-tighter">
              Navigate
            </h4>
            <ul className="space-y-4">
              {['Mixers', 'Services', 'Vault', 'Contact'].map((item) => (
                <li key={item}>
                  {item === 'Vault' ? (
                    /* Use Link for the Vault page */
                    <Link 
                      href="/vault" 
                      className="font-mono text-[#888888] text-sm hover:text-white transition-colors uppercase tracking-widest"
                    >
                      {item}
                    </Link>
                  ) : (
                    /* Use standard # anchors for home page sections */
                    <a 
                      href={`/#${item.toLowerCase()}`} 
                      className="font-mono text-[#888888] text-sm hover:text-white transition-colors uppercase tracking-widest"
                    >
                      {item}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
          
          {/* Services List (Hidden on very small mobile to save space, or kept for detail) */}
          <div className="hidden md:block">
            <h4 className="font-['Impact',sans-serif] text-white text-xl uppercase mb-6 tracking-tighter">
              Expertise
            </h4>
            <ul className="space-y-4">
              {['Full Mix', 'Vocal Tuning', 'Recording Templates', 'Mastering'].map((service) => (
                <li key={service} className="font-mono text-[#888888] text-sm uppercase tracking-widest">
                  {service}
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact & Socials */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-['Impact',sans-serif] text-white text-xl uppercase mb-6 tracking-tighter">
              Connect
            </h4>
            <div className="space-y-4 mb-8">
              <a href="mailto:mpmakoto@null.net" className="font-mono text-[#888888] text-sm hover:text-white transition-colors flex items-center justify-center md:justify-start gap-2 italic">
                <Mail className="w-4 h-4" />
                mpmakoto@null.net
              </a>
              <p className="font-mono text-[#888888] text-sm uppercase tracking-widest">
                New York, NY
              </p>
            </div>
            
            {/* Social Icons */}
            <div className="flex gap-4">
              {[
                { Icon: Instagram, href: "https://www.instagram.com/flp_0utc4st" },
                { Icon: Twitter, href: "https://twitter.com" },
                { Icon: Youtube, href: "https://youtube.com/@flp_0utc4st" }
              ].map(({ Icon, href }, idx) => (
                <a 
                  key={idx}
                  href={href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
        
        {/* Bottom Bar: Stacks on mobile */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="font-mono text-[#444] text-[10px] tracking-widest text-center">
            © 2026 OUTCAST PRODUCER COLLECTIVE.
          </p>
          <div className="flex gap-8">
            <a href="#" className="font-mono text-[#444] text-[10px] hover:text-white transition-colors uppercase tracking-widest">
              Privacy
            </a>
            <a href="#" className="font-mono text-[#444] text-[10px] hover:text-white transition-colors uppercase tracking-widest">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}