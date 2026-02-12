"use client";

export function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1707215048454-66e4c10fa026?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWNvcmRpbmclMjBzdHVkaW8lMjBibGFjayUyMHdoaXRlJTIwZ3JhaW55fGVufDF8fHx8MTc3MDM1MjAzMnww&ixlib=rb-4.1.0&q=80&w=1080')`,
          filter: 'grayscale(100%) contrast(1.2)'
        }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-40" />
      
      {/* Logo with Difference Blend Mode */}
      <div className="absolute inset-0 flex items-center justify-center">
        <img 
          src= "img/Outcast.png"
          alt="Outcast Logo"
          className="w-[400px] h-auto"
          style={{ 
            mixBlendMode: 'difference',
            filter: 'grayscale(100%)'
          }}
        />
      </div>
      
      {/* Hero Text */}
      <div className="absolute inset-0 flex items-end justify-center pb-24">
        <h1 
          className="font-['Inter_Tight',sans-serif] text-white text-center uppercase px-8"
          style={{
            fontSize: '120px',
            fontWeight: 900,
            letterSpacing: '-0.05em',
            lineHeight: '1',
            textShadow: '4px 4px 0px rgba(0,0,0,0.8)'
          }}
        >
          WE DON'T MIX IN.<br />WE STAND OUT.
        </h1>
      </div>
    </section>
  );
}