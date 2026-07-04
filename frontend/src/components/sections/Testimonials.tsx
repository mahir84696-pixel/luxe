'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    name: 'Michael D.',
    role: 'Small Business Owner',
    quote: 'The results were truly transformative for our growth.',
    image: 'https://i.pravatar.cc/300?img=11',
  },
  {
    name: 'Sarah L.',
    role: 'Product Manager',
    quote: 'They simplified a complex process for us effortlessly.',
    image: 'https://i.pravatar.cc/300?img=5',
  },
  {
    name: 'Kenji T.',
    role: 'Retired Architect',
    quote: 'A flawless experience with excellent communication throughout.',
    image: 'https://i.pravatar.cc/300?img=3',
  },
];

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, i) => {
        if (!card) return;
        gsap.fromTo(
          card,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            delay: i * 0.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 70%',
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#090909] overflow-hidden"
    >
      {/* Subtle top border */}
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-32 md:py-44">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-20 gap-6">
          <div>
            <span className="uppercase tracking-[0.35em] text-[11px] text-accent font-medium mb-6 block">
              Client Experiences
            </span>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-white font-light uppercase tracking-wide">
              Trusted by the{' '}
              <span className="italic font-normal text-white/50">
                discerning few
              </span>
            </h2>
          </div>
          <p className="text-white/40 text-sm max-w-xs leading-relaxed font-light md:text-right">
            Our clients don&apos;t just buy properties — they invest in a
            lifestyle defined by exclusivity and refinement.
          </p>
        </div>

        {/* Testimonial grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              ref={(el) => {
                cardsRef.current[i] = el;
              }}
              className="group relative flex flex-col bg-[#111111] border border-white/5 overflow-hidden hover:border-accent/30 transition-colors duration-700"
            >
              {/* Portrait image */}
              <div className="relative h-[340px] md:h-[380px] overflow-hidden">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-full h-full object-cover object-top transition-transform duration-[1.2s] ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:scale-105 grayscale group-hover:grayscale-0"
                />
                {/* Gradient fade */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent" />
              </div>

              {/* Text content */}
              <div className="p-8 flex-1 flex flex-col">
                <div className="mb-6">
                  <h3 className="text-white text-sm uppercase tracking-[0.15em] font-medium">
                    {t.name}
                  </h3>
                  <span className="text-white/30 text-xs tracking-wider">
                    — {t.role}
                  </span>
                </div>

                <p className="text-white/70 text-lg md:text-xl font-light leading-snug flex-1">
                  &ldquo;{t.quote}&rdquo;
                </p>

                {/* Bottom accent */}
                <div className="mt-8 w-8 h-[1px] bg-accent/40 group-hover:w-16 group-hover:bg-accent transition-all duration-700" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
