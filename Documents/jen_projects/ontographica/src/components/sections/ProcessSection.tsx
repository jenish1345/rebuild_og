import * as React from "react";

const steps = [
  { phase: "01", name: "Discover", description: "Audit existing data assets and align on strategic business objectives." },
  { phase: "02", name: "Design", description: "Architect scalable infrastructure and select appropriate AI methodologies." },
  { phase: "03", name: "Build", description: "Engineer data pipelines, train models, and develop the intelligence layer." },
  { phase: "04", name: "Deploy", description: "Seamlessly integrate solutions into enterprise environments with zero downtime." },
  { phase: "05", name: "Scale", description: "Monitor performance, optimize resources, and expand capabilities enterprise-wide." },
];

export function ProcessSection() {
  return (
    <section id="process" className="py-24 md:py-32 bg-alternate">
      <div className="container mx-auto max-w-7xl px-4 md:px-8">
        <div className="max-w-2xl mx-auto text-center mb-16 md:mb-24">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-6">
            Methodical Implementation
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Our enterprise process is engineered to minimize risk, ensure compliance, and guarantee measurable business outcomes at every phase.
          </p>
        </div>

        <div className="relative">
          {/* Horizontal Line for Desktop */}
          <div className="hidden lg:block absolute top-6 left-[10%] right-[10%] h-px bg-border" />
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative flex flex-col items-center text-center group">
                <div className="h-12 w-12 rounded-full bg-background border border-border flex items-center justify-center text-sm font-semibold text-foreground z-10 mb-6 group-hover:border-primary group-hover:text-primary transition-colors duration-300">
                  {step.phase}
                </div>
                {/* Vertical Line for Mobile */}
                {index !== steps.length - 1 && (
                  <div className="lg:hidden absolute top-12 bottom-[-3rem] left-1/2 w-px bg-border -translate-x-1/2" />
                )}
                <h3 className="text-xl font-semibold text-foreground mb-3">{step.name}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed max-w-[200px]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
