"use client";

import { useState } from "react";

const industries = [
  { name: "Financial Services", description: "Risk modeling, algorithmic intelligence, and predictive quantitative analysis." },
  { name: "Healthcare", description: "Patient analytics, resource forecasting, and semantic clinical trials." },
  { name: "Logistics", description: "Global route optimization and predictive infrastructure maintenance." },
  { name: "Manufacturing", description: "Automated quality control and autonomous yield optimization." },
  { name: "Technology", description: "Product usage analytics and vast infrastructure scaling." },
];

export function IndustriesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="industries" className="py-32 md:py-48 bg-background">
      <div className="container mx-auto max-w-6xl px-4 md:px-8">
        
        <div className="mb-24 md:mb-32">
          <p className="text-sm font-bold tracking-[0.3em] text-primary uppercase mb-4">Sectors</p>
        </div>

        <div className="flex flex-col border-t border-border/40">
          {industries.map((industry, index) => {
            const isHovered = hoveredIndex === index;
            const isAnyHovered = hoveredIndex !== null;

            return (
              <div
                key={index}
                className="group relative border-b border-border/40 py-8 md:py-12 flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-12 transition-all duration-500 cursor-default"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <h3 
                  className={`text-4xl md:text-5xl lg:text-[5rem] font-bold tracking-tighter uppercase transition-colors duration-500 leading-none ${
                    isAnyHovered && !isHovered ? "text-muted/30" : "text-foreground"
                  }`}
                >
                  {industry.name}
                </h3>
                
                <div 
                  className={`max-w-xs transition-all duration-500 ${
                    isHovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4 pointer-events-none"
                  }`}
                >
                  <p className="text-muted-foreground text-sm leading-relaxed border-l-2 border-primary/50 pl-4">
                    {industry.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        
      </div>
    </section>
  );
}
