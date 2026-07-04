import CinematicHero from "@/components/sections/CinematicHero";

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-32">
      <section className="py-24 px-4 md:px-12 lg:px-24 max-w-7xl mx-auto w-full">
        <h1 className="font-heading text-5xl md:text-7xl text-foreground mb-12 uppercase font-light tracking-wide border-b border-border pb-8">
          The Agency
        </h1>
        <div className="flex flex-col md:flex-row gap-16">
          <div className="w-full md:w-1/2">
            <p className="text-xl text-muted-foreground font-light leading-relaxed mb-8">
              Founded on the principles of exclusivity and architectural significance, Luxe Estate represents the pinnacle of luxury real estate representation.
            </p>
            <p className="text-muted-foreground font-light leading-relaxed mb-8">
              We curate only the most exceptional properties across the globe. Our clientele expects nothing less than perfection, and our agents deliver a bespoke service tailored to the unique demands of the ultra-high-net-worth market.
            </p>
            <div className="grid grid-cols-2 gap-8 mt-16">
              <div>
                <h4 className="text-4xl font-heading text-accent mb-2">$5B+</h4>
                <p className="text-xs uppercase tracking-widest text-muted-foreground">In Sales</p>
              </div>
              <div>
                <h4 className="text-4xl font-heading text-accent mb-2">12</h4>
                <p className="text-xs uppercase tracking-widest text-muted-foreground">Global Offices</p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 h-[600px] relative">
            <img 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop"
              alt="Luxe Estate Office"
              className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
