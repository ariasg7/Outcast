"use client";

import Link from 'next/link'; // Import the Link component
import { useRouter, usePathname } from 'next/navigation';

export function Navigation() {
  const router = useRouter();
  const pathname = usePathname();

  const scrollToSection = (id: string) => {
    // If we are not on the home page, go home first, then scroll
    if (pathname !== '/') {
      router.push(`/#${id}`);
      return;
    }

    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-black border-b-2 border-white px-8 py-6">
      <div className="flex justify-between items-center max-w-[1920px] mx-auto">
        {/* Logo - Wrap in Link to always go home */}
        <Link href="/" className="flex items-center gap-4 cursor-pointer group">
          <img 
            src="/img/Outcast.png" 
            alt="Outcast Logo" 
            className="w-12 h-12 invert"
          />
          <span className="font-sans font-black text-white text-4xl tracking-tighter uppercase">
            OUTCAST
          </span>
        </Link>

        {/* Links */}
        <div className="flex gap-12">
          <button
            onClick={() => scrollToSection('mixers')}
            className="font-mono text-white text-sm tracking-wider hover:text-[#888888] transition-colors uppercase"
          >
            MIXERS
          </button>
          <button
            onClick={() => scrollToSection('services')}
            className="font-mono text-white text-sm tracking-wider hover:text-[#888888] transition-colors uppercase"
          >
            SERVICES
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="font-mono text-white text-sm tracking-wider hover:text-[#888888] transition-colors uppercase"
          >
            CONTACT
          </button>
          
          {/* THE VAULT LINK */}
          <Link
            href="/vault"
            className="font-mono text-white text-sm tracking-wider hover:text-[#888888] transition-colors uppercase"
          >
            VAULT
          </Link>
        </div>
      </div>
    </nav>
  );
}