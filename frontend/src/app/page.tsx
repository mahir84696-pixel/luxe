import CinematicHero from "@/components/sections/CinematicHero";
import FeaturedProperties from "@/components/sections/FeaturedProperties";
import DesignPhilosophy from "@/components/sections/DesignPhilosophy";
import CollectionsSplit from "@/components/sections/CollectionsSplit";
import LuxuryAmenities from "@/components/sections/LuxuryAmenities";
import LifestyleGallery from "@/components/sections/LifestyleGallery";
import Testimonials from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <CinematicHero />
      <FeaturedProperties />
      <DesignPhilosophy />
      <CollectionsSplit />
      <LuxuryAmenities />
      <LifestyleGallery />
      <Testimonials />
      
      {/* Footer */}
      <footer className="w-full bg-[#060606] py-24 px-4 md:px-12 lg:px-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-16">
          <div>
            <h2 className="font-heading text-3xl mb-6 text-foreground uppercase tracking-widest">Luxe Estate</h2>
            <p className="text-white/40 max-w-xs text-sm leading-relaxed font-light">
              The premier digital platform for luxury real estate, connecting elite buyers with exclusive properties worldwide.
            </p>
            <div className="flex items-center gap-3 mt-8">
              <span className="w-3 h-3 border border-accent rotate-45" />
              <span className="text-[10px] uppercase tracking-[0.3em] text-white/30">
                Since 2018
              </span>
            </div>
          </div>
          <div className="flex gap-16">
            <div className="flex flex-col gap-4">
              <span className="text-accent uppercase tracking-widest text-xs mb-2">Platform</span>
              <a href="#" className="text-white/40 hover:text-white text-sm transition-colors duration-300">Properties</a>
              <a href="#" className="text-white/40 hover:text-white text-sm transition-colors duration-300">Agents</a>
              <a href="#" className="text-white/40 hover:text-white text-sm transition-colors duration-300">Journal</a>
              <a href="#" className="text-white/40 hover:text-white text-sm transition-colors duration-300">About</a>
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-accent uppercase tracking-widest text-xs mb-2">Connect</span>
              <a href="#" className="text-white/40 hover:text-white text-sm transition-colors duration-300">Contact</a>
              <a href="#" className="text-white/40 hover:text-white text-sm transition-colors duration-300">Instagram</a>
              <a href="#" className="text-white/40 hover:text-white text-sm transition-colors duration-300">LinkedIn</a>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="text-white/20 text-xs tracking-wider">
            © 2025 Luxe Estate. All rights reserved.
          </span>
          <div className="flex gap-6">
            <a href="#" className="text-white/20 hover:text-white/50 text-xs transition-colors">Privacy</a>
            <a href="#" className="text-white/20 hover:text-white/50 text-xs transition-colors">Terms</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
