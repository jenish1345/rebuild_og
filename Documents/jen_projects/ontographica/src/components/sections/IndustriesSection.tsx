import * as React from "react";
import { Truck, Factory, HeartPulse, ShoppingBag, Landmark, Laptop, Zap, Boxes, Building } from "lucide-react";

const industries = [
  { name: "Logistics", description: "Route optimization and predictive maintenance.", icon: Truck },
  { name: "Manufacturing", description: "Yield optimization and automated quality control.", icon: Factory },
  { name: "Healthcare", description: "Patient analytics and resource forecasting.", icon: HeartPulse },
  { name: "Retail", description: "Demand prediction and personalized experiences.", icon: ShoppingBag },
  { name: "Financial Services", description: "Risk modeling and algorithmic intelligence.", icon: Landmark },
  { name: "Technology", description: "Product analytics and infrastructure scaling.", icon: Laptop },
  { name: "Energy", description: "Grid optimization and consumption forecasting.", icon: Zap },
  { name: "Supply Chain", description: "End-to-end visibility and resilience planning.", icon: Boxes },
  { name: "Government", description: "Public data analytics and citizen services.", icon: Building },
];

export function IndustriesSection() {
  return (
    <section id="industries" className="py-24 md:py-32 bg-background border-y border-border/40">
      <div className="container mx-auto max-w-7xl px-4 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 md:mb-24">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-6">
              Industry Expertise
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We tailor our intelligence solutions to the unique regulatory, operational, and competitive landscapes of your sector.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border/50 rounded-2xl overflow-hidden border border-border/50">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="bg-background p-8 md:p-10 group hover:bg-muted/30 transition-colors duration-300"
            >
              <industry.icon className="h-8 w-8 text-muted-foreground group-hover:text-foreground transition-colors mb-6" />
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
