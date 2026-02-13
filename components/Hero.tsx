"use client";

export function Hero() {
  return (
    <section className="relative h-[60vh] md:h-screen w-full overflow-hidden bg-black">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1707215048454-66e4c10fa026?auto=format&fit=crop&q=80&w=1080')`,
          filter: 'grayscale(100%) contrast(1.2)'
        }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-40" />
      
      {/* Logo with Difference Blend Mode */}
      <div className="absolute inset-0 flex items-center justify-center">
        <img 
          src="/img/Outcast.png"
          alt="Outcast Logo"
          className="w-[180px] md:w-[400px] h-auto"
          style={{ 
            mixBlendMode: 'difference',
            filter: 'grayscale(100%)'
          }}
        />
      </div>
      
      {/* Hero Text */}
      <div className="absolute inset-0 flex items-center md:items-end justify-center pb-0 md:pb-48">
        <h1 
          className="font-['Inter_Tight',sans-serif] text-white text-center uppercase px-6 md:px-8"
          style={{
            fontSize: 'clamp(32px, 10vw, 120px)',
            fontWeight: 900,
            letterSpacing: '-0.05em',
            lineHeight: '0.85',
            textShadow: '2px 2px 0px rgba(0,0,0,0.8)'
          }}
        >
          WE DON'T MIX IN.<br />WE STAND OUT.
        </h1>
      </div>
    </section>
  );
}