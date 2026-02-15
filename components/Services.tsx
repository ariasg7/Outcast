"use client";

const services = [
  {
    id: 1,
    title: 'Mixing',
    subtitle: 'Full Mix',
    description: 'Complete mix from raw stems to radio-ready. Vocal tuning, leveling, effects, mastering prep.',
    price: 'From $75 - $150'
  },
  {
    id: 2,
    title: 'Mastering',
    subtitle: 'Vocal Tuning',
    description: 'Precision vocal correction and enhancement. Melodyne, Auto-Tune, breath control, and de-essing.',
    price: 'From $50 - $75'
  },
  {
    id: 3,
    title: 'Mixing + Mastering',
    subtitle: 'Recording Templates',
    description: 'Custom session templates for your workflow. Pre-routed chains, effects racks, and mix buses.',
    price: 'Inquire for pricing'
  }
];

export function Services() {
  return (
    <section id="services" className="bg-black py-20 md:py-32 px-6 md:px-12">
      <div className="max-w-[1400px] mx-auto">
        <h2 
          className="font-['Impact',sans-serif] text-white uppercase text-center mb-12 md:mb-20"
          style={{ 
            fontSize: 'clamp(48px, 10vw, 90px)', 
            letterSpacing: '-0.03em',
            lineHeight: '0.9'
          }}
        >
          SERVICES
        </h2>
        
        {/* Changed to 1 column on mobile, 3 columns on Desktop (lg) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
          {services.map((service) => (
            <div 
              key={service.id}
              className="group bg-[#0a0a0a] border-t-4 border-white p-8 hover:bg-white transition-all duration-300"
            >
              <h3 
                className="font-['Impact',sans-serif] text-white group-hover:text-black uppercase mb-1"
                style={{ fontSize: '36px', letterSpacing: '-0.02em', lineHeight: '1' }}
              >
                {service.title}
              </h3>
              <p className="font-mono text-[#888888] group-hover:text-black/60 text-[10px] tracking-widest uppercase mb-6">
                {service.subtitle}
              </p>
              
              <div className="h-[2px] w-12 bg-white group-hover:bg-black mb-6 transition-colors" />

              <p className="font-mono text-white group-hover:text-black text-sm leading-relaxed mb-8 opacity-80">
                {service.description}
              </p>
              
              <p className="font-mono text-white group-hover:text-black text-lg font-black tracking-tighter uppercase">
                {service.price}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}