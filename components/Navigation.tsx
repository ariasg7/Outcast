"use client";

import { useState } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion'; // For smooth mobile transitions
import { Menu, X } from 'lucide-react'; // Icons for the sandwich menu

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const scrollToSection = (id: string) => {
    setIsOpen(false); // Close menu when clicking a link
    if (pathname !== '/') {
      router.push(`/#${id}`);
      return;
    }

    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { name: 'Mixers', id: 'mixers', type: 'scroll' },
    { name: 'Services', id: 'services', type: 'scroll' },
    { name: 'Contact', id: 'contact', type: 'scroll' },
    { name: 'Vault', href: '/vault', type: 'link' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-black border-b-2 border-white px-6 md:px-8 py-6">
      <div className="flex justify-between items-center max-w-[1920px] mx-auto">
        
        {/* Logo */}
        <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center gap-4 cursor-pointer group z-50">
          <img 
            src="/img/Outcast.png" 
            alt="Outcast Logo" 
            className="w-10 h-10 md:w-12 md:h-12 invert"
          />
          <span className="font-sans font-black text-white text-2xl md:text-4xl tracking-tighter uppercase">
            OUTCAST
          </span>
        </Link>

        {/* Desktop Links (Hidden on Mobile) */}
        <div className="hidden lg:flex gap-12">
          {navLinks.map((link) => (
            link.type === 'scroll' ? (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id!)}
                className="font-mono text-white text-sm tracking-wider hover:text-[#888888] transition-colors uppercase"
              >
                {link.name}
              </button>
            ) : (
              <Link
                key={link.href}
                href={link.href!}
                className="font-mono text-white text-sm tracking-wider hover:text-[#888888] transition-colors uppercase"
              >
                {link.name}
              </Link>
            )
          ))}
        </div>

        {/* Sandwich Button (Hidden on Desktop) */}
        <button 
          className="lg:hidden text-white z-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              /* items-center and justify-center handle the vertical/horizontal box alignment */
              className="fixed inset-0 bg-black z-40 flex flex-col items-center justify-center gap-8 px-6"
            >
              {navLinks.map((link) => (
                link.type === 'scroll' ? (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id!)}
                    /* w-full and text-center ensure the text doesn't lean left or right */
                    className="w-full text-center font-['Impact',sans-serif] text-white text-6xl uppercase tracking-tighter hover:italic transition-all"
                  >
                    {link.name}
                  </button>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href!}
                    onClick={() => setIsOpen(false)}
                    className="w-full text-center font-['Impact',sans-serif] text-white text-6xl uppercase tracking-tighter hover:italic transition-all"
                  >
                    {link.name}
                  </Link>
                )
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}