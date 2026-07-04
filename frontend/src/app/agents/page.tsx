export default function AgentsPage() {
  const agents = [
    { name: "Eleanor Vance", title: "Managing Partner", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop" },
    { name: "Julian Thorne", title: "Director of International", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&auto=format&fit=crop" },
    { name: "Sophia Laurent", title: "Senior Estates Director", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600&auto=format&fit=crop" }
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-32">
      <section className="py-24 px-4 md:px-12 lg:px-24 max-w-7xl mx-auto w-full">
        <h1 className="font-heading text-5xl md:text-7xl text-foreground mb-12 uppercase font-light tracking-wide border-b border-border pb-8">
          Our Agents
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {agents.map((agent, idx) => (
            <div key={idx} className="group cursor-pointer">
              <div className="relative h-[500px] w-full overflow-hidden bg-muted mb-6">
                <img 
                  src={agent.img}
                  alt={agent.name}
                  className="object-cover w-full h-full grayscale group-hover:grayscale-0 transform group-hover:scale-105 transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)]"
                />
              </div>
              <h3 className="font-heading text-2xl text-foreground mb-2">{agent.name}</h3>
              <p className="text-accent text-sm uppercase tracking-widest">{agent.title}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
