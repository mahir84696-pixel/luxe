export default function LuxuryAmenities() {
  return (
    <section className="py-32 px-4 md:px-12 lg:px-24 bg-background">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center">
        <div className="w-full md:w-1/2">
          <h2 className="font-heading text-4xl md:text-6xl text-foreground mb-8 uppercase font-light leading-tight">
            Curated<br />Excellence
          </h2>
          <p className="text-muted-foreground text-lg max-w-md font-light leading-relaxed mb-12">
            Every estate in our collection is handpicked for its architectural pedigree, unparalleled amenities, and absolute privacy. Experience living without compromise.
          </p>
          <button className="text-foreground border-b border-accent pb-1 uppercase tracking-widest text-sm hover:text-accent transition-colors">
            Discover Amenities
          </button>
        </div>
        <div className="w-full md:w-1/2 relative h-[800px]">
           <img 
              src="/images/luxury-amenity.png" 
              alt="Luxury living room with ocean view" 
              className="object-cover w-full h-full"
            />
        </div>
      </div>
    </section>
  );
}
