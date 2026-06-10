"use client";

import { useState } from "react";
import { Database, LineChart, BrainCircuit, Network, Server, Building2, Cpu, BarChart3, ChevronRight } from "lucide-react";

const services = [
  {
    id: "data-strategy",
    title: "Data Strategy",
    description: "Align your data assets with business objectives. We audit your existing architecture and map a scalable path to advanced intelligence.",
    icon: Database,
  },
  {
    id: "business-intelligence",
    title: "Business Intelligence",
    description: "Transform raw data into visual, actionable insights. Build executive dashboards that drive immediate decision-making capabilities.",
    icon: LineChart,
  },
  {
    id: "ai-solutions",
    title: "AI Solutions",
    description: "Implement custom machine learning models to automate critical processes, uncover hidden patterns, and predict future trends.",
    icon: BrainCircuit,
  },
  {
    id: "knowledge-graphs",
    title: "Knowledge Graphs",
    description: "Map complex relationships within your enterprise data. Enable deep semantic search and discovery across siloed business units.",
    icon: Network,
  },
  {
    id: "data-engineering",
    title: "Data Engineering",
    description: "Build robust, scalable pipelines that ensure data quality, reliability, and accessibility across the entire organization.",
    icon: Server,
  },
];

export function ServicesSection() {
  const [activeService, setActiveService] = useState(services[0].id);

  const selectedService = services.find((s) => s.id === activeService) || services[0];

  return (
    <section id="services" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto max-w-7xl px-4 md:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-medium tracking-widest text-primary uppercase mb-4">Capabilities</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
            ENTERPRISE SERVICES
          </h2>
          <p className="text-muted-foreground mt-4">Click to explore our core offerings.</p>
        </div>

        {/* IDE-Style Container */}
        <div className="max-w-5xl mx-auto border border-border/60 rounded-2xl overflow-hidden bg-muted/10 shadow-sm">
          
          {/* Top Bar */}
          <div className="bg-muted/30 border-b border-border/60 px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-primary">~/capabilities</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-400/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
              <div className="w-3 h-3 rounded-full bg-green-400/80" />
            </div>
          </div>

          <div className="flex flex-col md:flex-row min-h-[400px]">
            {/* Sidebar Explorer */}
            <div className="w-full md:w-64 bg-muted/20 border-r border-border/60 p-4">
              <div className="text-xs font-semibold text-muted-foreground mb-4 uppercase tracking-widest">Explorer</div>
              <ul className="space-y-1">
                {services.map((service) => (
                  <li key={service.id}>
                    <button
                      onClick={() => setActiveService(service.id)}
                      className={`w-full flex items-center gap-2 px-3 py-2 rounded-md text-sm transition-colors ${
                        activeService === service.id
                          ? "bg-primary/10 text-primary font-medium"
                          : "text-muted-foreground hover:bg-muted hover:text-foreground"
                      }`}
                    >
                      <service.icon className="h-4 w-4" />
                      <span className="truncate">{service.title}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 p-8 md:p-12 flex flex-col justify-center bg-background">
              <div className="h-16 w-16 rounded-xl bg-primary/5 flex items-center justify-center mb-8 border border-primary/10">
                <selectedService.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                {selectedService.title}
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                {selectedService.description}
              </p>
              <div className="mt-10">
                <button className="flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors">
                  Learn more about {selectedService.title} <ChevronRight className="ml-1 h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
