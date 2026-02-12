const services = [
  {
    id: 1,
    title: 'Mixing',
    subtitle: 'Full Mix',
    description: 'Complete mix from raw stems to radio-ready. Vocal tuning, leveling, effects, mastering prep.',
    price: 'From $50'
  },
  {
    id: 2,
    title: 'Mastering',
    subtitle: 'Vocal Tuning',
    description: 'Precision vocal correction and enhancement. Melodyne, Auto-Tune, breath control, and de-essing.',
    price: 'From $75'
  },
  {
    id: 3,
    title: 'Mixing and Mastering',
    subtitle: 'Recording Templates',
    description: 'Custom session templates for your workflow. Pre-routed chains, effects racks, and mix buses.',
    price: 'Fill contact form for inquiries'
  }
];

export function Services() {
  return (
    <section id = "services" className="bg-black py-24 px-8">
      <div className="max-w-[1400px] mx-auto">
        <h2 
          className="font-['Impact',sans-serif] text-white uppercase text-center mb-16"
          style={{ fontSize: '80px', letterSpacing: '-0.02em' }}
        >
          SERVICES
        </h2>
        
        <div className="grid grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id}
              className="bg-[#1A1A1A] border-t-[3px] border-white p-8"
            >
              <h3 
                className="font-['Impact',sans-serif] text-white uppercase mb-2"
                style={{ fontSize: '32px', letterSpacing: '-0.02em' }}
              >
                {service.title}
              </h3>
              <p className="font-['Space_Mono',monospace] text-[#888888] text-xs uppercase mb-6">
                {service.subtitle}
              </p>
              <p className="font-['Space_Mono',monospace] text-white text-sm leading-relaxed mb-6">
                {service.description}
              </p>
              <p className="font-['Space_Mono',monospace] text-white text-sm font-bold">
                {service.price}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
