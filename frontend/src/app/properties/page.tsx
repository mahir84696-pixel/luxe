export default function PropertiesPage() {
  const properties = [
    {
      name: 'The Coastal Estate',
      location: 'Amalfi Coast, Italy',
      price: '$28,500,000',
      image: '/images/property-4.png',
    },
    {
      name: 'The Skyline Penthouse',
      location: 'Manhattan, NY',
      price: '$19,200,000',
      image: '/images/property-2.png',
    },
    {
      name: 'The Glass Pavilion',
      location: 'Beverly Hills, CA',
      price: '$14,500,000',
      image: '/images/property-3.png',
    },
    {
      name: 'The Modern Mansion',
      location: 'Monaco',
      price: '$35,000,000',
      image: '/images/property-1.png',
    }
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-32">
      <section className="py-24 px-4 md:px-12 lg:px-24 max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-border pb-8">
          <h1 className="font-heading text-5xl md:text-7xl text-foreground uppercase font-light tracking-wide">
            The Collection
          </h1>
          <div className="flex gap-8 mt-8 md:mt-0">
            <span className="text-xs uppercase tracking-widest text-muted-foreground hover:text-white cursor-pointer">All</span>
            <span className="text-xs uppercase tracking-widest text-accent cursor-pointer">Estates</span>
            <span className="text-xs uppercase tracking-widest text-muted-foreground hover:text-white cursor-pointer">Villas</span>
            <span className="text-xs uppercase tracking-widest text-muted-foreground hover:text-white cursor-pointer">Penthouses</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {properties.map((prop, idx) => (
            <div key={idx} className="group cursor-pointer">
              <div className="relative h-[700px] w-full overflow-hidden bg-muted mb-6">
                <img 
                  src={prop.image} 
                  alt={prop.name} 
                  className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-1000 ease-[cubic-bezier(0.76,0,0.24,1)]"
                />
              </div>
              <div className="flex justify-between items-end">
                <div>
                  <h3 className="font-heading text-3xl text-foreground mb-2">{prop.name}</h3>
                  <p className="text-muted-foreground text-sm uppercase tracking-widest">{prop.location}</p>
                </div>
                <p className="text-accent text-xl">{prop.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
