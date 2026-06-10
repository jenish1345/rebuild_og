"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Database, LineChart, BrainCircuit, Network } from "lucide-react";

const services = [
  {
    title: "Data Strategy",
    description: "Align your data assets with business objectives. We audit your existing architecture and map a scalable path to advanced intelligence.",
    icon: Database,
    color: "bg-background",
  },
  {
    title: "Business Intelligence",
    description: "Transform raw data into visual, actionable insights. Build executive dashboards that drive immediate decision-making capabilities.",
    icon: LineChart,
    color: "bg-muted/30",
  },
  {
    title: "AI Solutions",
    description: "Implement custom machine learning models to automate critical processes, uncover hidden patterns, and predict future trends.",
    icon: BrainCircuit,
    color: "bg-muted/60",
  },
  {
    title: "Knowledge Graphs",
    description: "Map complex relationships within your enterprise data. Enable deep semantic search and discovery across siloed business units.",
    icon: Network,
    color: "bg-muted",
  },
];

const Card = ({ service, index, progress, range, targetScale }: any) => {
  const scale = useTransform(progress, range, [1, targetScale]);
  const opacity = useTransform(progress, range, [1, 0.5]);
  const Icon = service.icon;

  return (
    <div className="h-screen flex items-center justify-center sticky top-0">
      <motion.div 
        style={{ scale, opacity, top: `calc(-5vh + ${index * 25}px)` }}
        className={`relative w-full max-w-4xl h-[500px] flex flex-col md:flex-row rounded-[2.5rem] border border-border/50 shadow-2xl overflow-hidden ${service.color}`}
      >
        <div className="flex-1 p-12 md:p-20 flex flex-col justify-center">
          <div className="h-16 w-16 rounded-2xl bg-primary/5 border border-primary/10 flex items-center justify-center mb-8">
            <Icon className="h-8 w-8 text-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
            {service.title}
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            {service.description}
          </p>
        </div>
        
        {/* Abstract structural visualization for each card */}
        <div className="hidden md:flex flex-1 items-center justify-center border-l border-border/20 bg-primary/[0.02]">
           <div className="w-64 h-64 border border-primary/20 rounded-full flex items-center justify-center relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent rounded-full" />
              <div className="w-32 h-32 border border-primary/30 rounded-full" />
              <div className="absolute top-0 right-10 w-4 h-4 bg-primary/40 rounded-full" />
              <div className="absolute bottom-10 left-0 w-6 h-6 bg-primary/20 rounded-full" />
           </div>
        </div>
      </motion.div>
    </div>
  );
};

export function ServicesSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section ref={containerRef} className="relative mt-20" style={{ height: `${services.length * 100}vh` }}>
      {services.map((service, i) => {
        const targetScale = 1 - (services.length - i) * 0.05;
        const range = [i * 0.25, 1];
        
        return (
          <Card 
            key={i} 
            index={i} 
            service={service} 
            progress={scrollYProgress} 
            range={range} 
            targetScale={targetScale} 
          />
        );
      })}
    </section>
  );
}
