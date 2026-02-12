import { Navigation } from "../../components/Navigation";
import { Vault } from "../../components/Vault"; // This is your Masonry gallery
import { Footer } from "../../components/Footer";

export default function VaultPage() {
  return (
    <main className="min-h-screen bg-black">
      <Navigation />
      
      {/* Container for the Vault content */}
      <div className="py-20">
        <Vault />
      </div>

      <Footer />
    </main>
  );
}