import { Navigation } from "../components/Navigation";
import { Hero } from "../components/Hero";
import { ArtistCarousel } from "../components/ArtistCarousel";
import { MeetTheMixers } from "../components/MeetTheMixers";
import { Services } from "../components/Services";
import { IntakeForm } from "../components/IntakeForm";
import { Footer } from "../components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      {/* Navigation Layer */}
      <Navigation />

      {/* Hero Section */}
      <Hero />

      {/* Narrative Section - "MEET THE MIXERS" */}
      <MeetTheMixers />

      {/* Services Section */}
      <Services />

      {/* The Infinite Scroll - "ARTISTS WE'VE WORKED WITH" */}
      <ArtistCarousel />

      {/* Lead Gen / Contact Section */}
      <IntakeForm />

      {/* Footer */}
      <Footer />
    </main>
  );
}