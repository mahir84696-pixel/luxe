const properties = [
  {
    name: 'The Coastal Estate',
    location: 'Amalfi Coast, Italy',
    price: '$28,500,000',
    image: '/images/property-1.png',
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
];

export default function FeaturedProperties() {
  return (
    <section className="py-32 px-4 md:px-12 lg:px-24 bg-secondary">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-heading text-4xl md:text-6xl text-foreground mb-12 uppercase font-light tracking-wide border-b border-border pb-8">
          Featured Collection
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((prop) => (
            <div key={prop.name} className="group cursor-pointer">
              <div className="relative h-[600px] w-full overflow-hidden bg-muted mb-6">
                <img 
                  src={prop.image} 
                  alt={prop.name} 
                  className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-1000 ease-[cubic-bezier(0.76,0,0.24,1)]"
                />
              </div>
              <h3 className="font-heading text-2xl text-foreground mb-2">{prop.name}</h3>
              <p className="text-muted-foreground text-sm uppercase tracking-widest mb-4">{prop.location}</p>
              <p className="text-accent text-lg">{prop.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
