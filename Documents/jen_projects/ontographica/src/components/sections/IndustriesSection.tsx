"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const industries = [
  { 
    id: "01",
    name: "Financial Services", 
    description: "Risk modeling, fraud detection, and algorithmic intelligence designed for global financial institutions.",
    metric: "$2.4B+",
    metricLabel: "Risk Mitigated"
  },
  { 
    id: "02",
    name: "Healthcare", 
    description: "Patient analytics, resource forecasting, and clinical trial optimization using secure knowledge graphs.",
    metric: "30%",
    metricLabel: "Efficiency Gain"
  },
  { 
    id: "03",
    name: "Logistics & Supply Chain", 
    description: "Route optimization, predictive maintenance, and end-to-end global visibility.",
    metric: "15M+",
    metricLabel: "Routes Optimized"
  },
  { 
    id: "04",
    name: "Manufacturing", 
    description: "Yield optimization, automated quality control, and intelligent resource allocation.",
    metric: "99.9%",
    metricLabel: "Uptime Achieved"
  },
];

export function IndustriesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="industries" className="py-32 bg-foreground text-background">
      <div className="container mx-auto max-w-7xl px-4 md:px-8">
        <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-background/20 pb-12">
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight">
            Industry Expertise
          </h2>
          <p className="text-lg text-background/60 max-w-sm font-light">
            Intelligence solutions tailored to the unique regulatory and operational landscapes of your sector.
          </p>
        </div>

        <div className="flex flex-col w-full relative">
          {industries.map((industry, index) => {
            const isHovered = hoveredIndex === index;
            const isAnyHovered = hoveredIndex !== null;

            return (
              <div 
                key={industry.id}
                className="group relative border-b border-background/10 py-10 md:py-16 transition-colors hover:border-background/30"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className={`flex flex-col md:flex-row items-start md:items-center justify-between gap-8 transition-opacity duration-500 ${isAnyHovered && !isHovered ? 'opacity-30' : 'opacity-100'}`}>
                  
                  {/* Left: Number & Title */}
                  <div className="flex items-center gap-8 md:gap-16 w-full md:w-1/2">
                    <span className="text-xl md:text-2xl font-mono text-background/40">
                      {industry.id}
                    </span>
                    <h3 className="text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight">
                      {industry.name}
                    </h3>
                  </div>

                  {/* Right: Reveal Content */}
                  <div className="w-full md:w-1/2 flex items-center justify-between">
                    <div className="max-w-xs overflow-hidden h-16 relative">
                      <AnimatePresence mode="popLayout">
                        {isHovered && (
                          <motion.p 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="text-background/70 font-light"
                          >
                            {industry.description}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>

                    <div className="hidden md:flex flex-col items-end opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <span className="text-3xl font-bold text-primary">{industry.metric}</span>
                      <span className="text-xs uppercase tracking-widest text-background/50">{industry.metricLabel}</span>
                    </div>

                    <ArrowUpRight className="h-8 w-8 text-background/30 group-hover:text-primary group-hover:translate-x-2 group-hover:-translate-y-2 transition-all duration-500 hidden sm:block" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
