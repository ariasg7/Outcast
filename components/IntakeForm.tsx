"use client";
import { useState } from 'react';

export function IntakeForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    instagram: '',
    service: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // REPLACE THIS URL WITH YOUR DEPLOYED GOOGLE APPS SCRIPT WEB APP URL
    const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzu6o1I1GxmLla2IITJ50-TpY_Rxx0PmbXfigxZP1BDqGgxE4rwOyQgcGNNXASbNTN3/exec";

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors', // Required for Google Apps Script cross-origin
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      alert('MESSAGE SENT TO THE LAB! WE\'LL BE IN TOUCH SOON.');
      setFormData({ fullName: '', email: '', phone: '', instagram: '', service: '' });
    } catch (error) {
      console.error('Submission error:', error);
      alert('ERROR SENDING TO THE LAB. PLEASE CHECK YOUR CONNECTION.');
    } finally {
      setIsSubmitting(false);
    }
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
              className="w-full bg-black border-0 border-b-2 border-white text-white font-['Space_Mono',monospace] text-sm py-4 px-0 focus:outline-none focus:border-[#888888] uppercase appearance-none cursor-pointer"
              style={{ 
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='white' d='M6 9L1 4h10z'/%3E%3C/svg%3E")`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right 0 center'
              }}
            >
              <option value="" disabled>SELECT SERVICE</option>
              <option value="treatment">Mixing</option>
              <option value="cleanup">Mastering</option>
              <option value="blueprint">Mixing & Mastering</option>
              <option value="other">OTHER</option>
            </select>
          </div>
          
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full bg-black border-2 border-white text-white font-['Impact',sans-serif] uppercase py-6 transition-colors ${isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-white hover:text-black'}`}
            style={{ fontSize: '24px', letterSpacing: '0.05em' }}
          >
            {isSubmitting ? 'SENDING...' : 'SEND TO THE LAB'}
          </button>
        </form>
      </div>
    </section>
  );
}