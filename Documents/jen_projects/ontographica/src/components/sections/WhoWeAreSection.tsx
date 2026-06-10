"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function WhoWeAreSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section id="company" ref={containerRef} className="py-32 md:py-48 bg-muted/20 relative overflow-hidden">
      <div className="container mx-auto max-w-7xl px-4 md:px-8">
        
        {/* Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Left Column: Huge Number & Sticky Label */}
          <div className="lg:col-span-4 relative">
            <div className="sticky top-40">
              <span className="text-[12rem] leading-none font-bold text-foreground/5 tracking-tighter block -ml-4">
                01
              </span>
              <h2 className="text-sm uppercase tracking-[0.3em] font-semibold text-primary mt-8">
                The Firm
              </h2>
            </div>
          </div>

          {/* Right Column: Massive Editorial Typography */}
          <div className="lg:col-span-8">
            <h3 className="text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight text-foreground leading-[1.2] mb-16">
              We are a strategic engineering firm dedicated to bridging the gap between <span className="italic text-muted-foreground">abstract artificial intelligence</span> and tangible enterprise value.
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h4 className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Our Vision</h4>
                <p className="text-lg text-foreground/80 font-light leading-relaxed">
                  To establish the global standard for enterprise knowledge representation, turning fragmented data silos into unified, intelligent decision systems.
                </p>
              </div>
              
              <div>
                <h4 className="text-xs uppercase tracking-widest text-muted-foreground mb-4">The Approach</h4>
                <p className="text-lg text-foreground/80 font-light leading-relaxed">
                  We reject off-the-shelf software. We engineer bespoke, scalable intelligence layers designed exclusively for the complexity of Fortune 500 organizations.
                </p>
              </div>
            </div>

            {/* Sleek Photographic Image */}
            <div className="mt-24 h-[400px] w-full rounded-[2rem] overflow-hidden relative group">
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80" 
                alt="Enterprise Architecture"
                className="absolute inset-0 w-full h-full object-cover filter grayscale mix-blend-luminosity opacity-80 group-hover:scale-105 transition-transform duration-[2s] ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
