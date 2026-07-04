export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-32">
      <section className="py-24 px-4 md:px-12 lg:px-24 max-w-7xl mx-auto w-full">
        <h1 className="font-heading text-5xl md:text-7xl text-foreground mb-12 uppercase font-light tracking-wide border-b border-border pb-8">
          Contact Us
        </h1>
        <div className="flex flex-col md:flex-row gap-16">
          <div className="w-full md:w-1/2">
            <p className="text-xl text-muted-foreground font-light leading-relaxed mb-12">
              For inquiries regarding our exclusive portfolio or bespoke representation, please reach out to our global headquarters.
            </p>
            
            <form className="flex flex-col gap-8">
              <input 
                type="text" 
                placeholder="Name" 
                className="w-full bg-transparent border-b border-white/20 pb-4 text-white placeholder-white/50 focus:outline-none focus:border-accent transition-colors uppercase tracking-widest text-sm"
              />
              <input 
                type="email" 
                placeholder="Email" 
                className="w-full bg-transparent border-b border-white/20 pb-4 text-white placeholder-white/50 focus:outline-none focus:border-accent transition-colors uppercase tracking-widest text-sm"
              />
              <textarea 
                placeholder="Message" 
                rows={4}
                className="w-full bg-transparent border-b border-white/20 pb-4 text-white placeholder-white/50 focus:outline-none focus:border-accent transition-colors tracking-wide resize-none"
              ></textarea>
              <button type="submit" className="w-fit px-12 py-4 bg-white text-black uppercase tracking-widest text-sm hover:bg-accent hover:text-white transition-colors duration-500">
                Submit Inquiry
              </button>
            </form>
          </div>
          
          <div className="w-full md:w-1/2 flex flex-col gap-12">
            <div>
              <h4 className="text-accent uppercase tracking-widest text-xs mb-4">Los Angeles</h4>
              <p className="text-muted-foreground font-light leading-relaxed">
                90210 Beverly Blvd<br />
                Beverly Hills, CA 90210<br />
                +1 (310) 555-0198
              </p>
            </div>
            <div>
              <h4 className="text-accent uppercase tracking-widest text-xs mb-4">London</h4>
              <p className="text-muted-foreground font-light leading-relaxed">
                1 Mayfair Place<br />
                London W1J 8AJ<br />
                +44 20 7946 0958
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
