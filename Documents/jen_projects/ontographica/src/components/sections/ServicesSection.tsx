import * as React from "react";
import { ArrowRight, Database, LineChart, BrainCircuit, Network, Server, Building2, Cpu, BarChart3 } from "lucide-react";

const services = [
  {
    title: "Data Strategy",
    description: "Align your data assets with business objectives to create a foundation for scalable growth.",
    icon: Database,
  },
  {
    title: "Business Intelligence",
    description: "Transform raw data into visual, actionable insights that drive executive decision-making.",
    icon: LineChart,
  },
  {
    title: "AI Solutions",
    description: "Implement custom machine learning models to automate processes and uncover predictive insights.",
    icon: BrainCircuit,
  },
  {
    title: "Knowledge Graphs",
    description: "Map complex relationships within your enterprise data to enable deep semantic search and discovery.",
    icon: Network,
  },
  {
    title: "Data Engineering",
    description: "Build robust, scalable pipelines that ensure data quality, reliability, and accessibility.",
    icon: Server,
  },
  {
    title: "Digital Transformation",
    description: "Modernize legacy systems and architectures to thrive in a data-first economy.",
    icon: Building2,
  },
  {
    title: "Enterprise Automation",
    description: "Streamline operations across departments with intelligent workflow automation.",
    icon: Cpu,
  },
  {
    title: "Analytics Consulting",
    description: "Expert guidance on selecting, implementing, and optimizing enterprise analytics platforms.",
    icon: BarChart3,
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-24 md:py-32 bg-alternate">
      <div className="container mx-auto max-w-7xl px-4 md:px-8">
        <div className="mb-16 md:mb-24 max-w-3xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-6">
            Enterprise Capabilities
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We deliver end-to-end data and AI solutions, designed specifically for the scale, security, and complexity of modern enterprises.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-card border border-border/60 hover:border-border transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:hover:shadow-[0_8px_30px_rgba(255,255,255,0.02)] flex flex-col h-full"
            >
              <div className="h-12 w-12 rounded-xl bg-muted flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
                <service.icon className="h-6 w-6 text-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-8 flex-grow">
                {service.description}
              </p>
              <div className="flex items-center text-sm font-medium text-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-auto">
                Explore Capability <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
