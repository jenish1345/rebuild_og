"use client";

import { Truck, Factory, HeartPulse, ShoppingBag, Landmark, Laptop } from "lucide-react";

const industries = [
  { name: "Financial Services", description: "Risk modeling and algorithmic intelligence.", icon: Landmark },
  { name: "Healthcare", description: "Patient analytics and resource forecasting.", icon: HeartPulse },
  { name: "Logistics", description: "Route optimization and predictive maintenance.", icon: Truck },
  { name: "Manufacturing", description: "Yield optimization and automated quality control.", icon: Factory },
  { name: "Retail", description: "Demand prediction and personalized experiences.", icon: ShoppingBag },
  { name: "Technology", description: "Product analytics and infrastructure scaling.", icon: Laptop },
];

export function IndustriesSection() {
  return (
    <section id="industries" className="py-24 md:py-32 bg-background border-t border-border/40">
      <div className="container mx-auto max-w-7xl px-4 md:px-8">
        
        <div className="text-center mb-16 md:mb-24">
          <p className="text-sm font-medium tracking-widest text-primary uppercase mb-4">Sectors</p>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-foreground uppercase">
            INDUSTRIES
          </h2>
          <p className="text-muted-foreground mt-6 text-lg">Specialized intelligence for global markets.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl border border-border/60 bg-muted/10 hover:bg-muted/30 transition-colors"
            >
              <div className="h-12 w-12 rounded-xl bg-background border border-border/50 flex items-center justify-center mb-6">
                <industry.icon className="h-6 w-6 text-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{industry.name}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {industry.description}
              </p>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
