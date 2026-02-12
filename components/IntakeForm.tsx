"use client";
import { useState } from 'react';

export function IntakeForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    instagram: '',
    service: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Message sent to the lab! We\'ll be in touch soon.');
    setFormData({ fullName: '', email: '', phone: '', instagram: '', service: '' });
  };

  return (
    <section id="contact" className="bg-black py-24 px-8">
      <div className="max-w-[900px] mx-auto">
        <h2 
          className="font-['Impact',sans-serif] text-white uppercase text-center mb-16"
          style={{ fontSize: '80px', letterSpacing: '-0.02em' }}
        >
          THE INTAKE
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-8">
          <div>
            <input
              type="text"
              placeholder="FULL NAME"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              required
              className="w-full bg-transparent border-0 border-b-2 border-white text-white font-['Space_Mono',monospace] text-sm py-4 px-0 focus:outline-none focus:border-[#888888] placeholder-[#888888] uppercase"
            />
          </div>
          
          <div>
            <input
              type="email"
              placeholder="EMAIL"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className="w-full bg-transparent border-0 border-b-2 border-white text-white font-['Space_Mono',monospace] text-sm py-4 px-0 focus:outline-none focus:border-[#888888] placeholder-[#888888] uppercase"
            />
          </div>
          
          <div>
            <input
              type="tel"
              placeholder="PHONE"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              required
              className="w-full bg-transparent border-0 border-b-2 border-white text-white font-['Space_Mono',monospace] text-sm py-4 px-0 focus:outline-none focus:border-[#888888] placeholder-[#888888] uppercase"
            />
          </div>
          
          <div>
            <input
              type="text"
              placeholder="IG HANDLE (@username)"
              value={formData.instagram}
              onChange={(e) => setFormData({ ...formData, instagram: e.target.value })}
              className="w-full bg-transparent border-0 border-b-2 border-white text-white font-['Space_Mono',monospace] text-sm py-4 px-0 focus:outline-none focus:border-[#888888] placeholder-[#888888] uppercase"
            />
          </div>
          
          <div>
            <select
              value={formData.service}
              onChange={(e) => setFormData({ ...formData, service: e.target.value })}
              required
              className="w-full bg-transparent border-0 border-b-2 border-white text-white font-['Space_Mono',monospace] text-sm py-4 px-0 focus:outline-none focus:border-[#888888] uppercase appearance-none cursor-pointer"
              style={{ 
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='white' d='M6 9L1 4h10z'/%3E%3C/svg%3E")`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right 0 center'
              }}
            >
              <option value="" disabled>SELECT SERVICE</option>
              <option value="treatment">THE TREATMENT (Full Mix)</option>
              <option value="cleanup">THE CLEAN UP (Vocal Tuning)</option>
              <option value="blueprint">THE BLUEPRINT (Recording Templates)</option>
              <option value="other">OTHER</option>
            </select>
          </div>
          
          <button
            type="submit"
            className="w-full bg-black border-2 border-white text-white font-['Impact',sans-serif] uppercase py-6 hover:bg-white hover:text-black transition-colors"
            style={{ fontSize: '24px', letterSpacing: '0.05em' }}
          >
            SEND TO THE LAB
          </button>
        </form>
      </div>
    </section>
  );
}
