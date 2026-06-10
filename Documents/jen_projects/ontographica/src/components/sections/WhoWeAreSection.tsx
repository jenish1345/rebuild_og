import * as React from "react";
import { CheckCircle2 } from "lucide-react";

const focusAreas = [
  "AI & Machine Learning",
  "Data Intelligence",
  "Knowledge Graphs",
  "Advanced Analytics",
  "Enterprise Transformation",
  "Digital Innovation",
];

export function WhoWeAreSection() {
  return (
    <section id="company" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Professional Image / Video Placeholder */}
          <div className="relative aspect-[4/5] md:aspect-square lg:aspect-[4/5] w-full rounded-2xl overflow-hidden bg-muted border border-border/50">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/50">
              <span className="text-sm font-medium tracking-widest uppercase">Executive Media</span>
            </div>
          </div>

          {/* Right: Content */}
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-6">
                Redefining the Future of Enterprise Intelligence
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We are a strategic consulting and engineering firm dedicated to transforming complex enterprise data into actionable intelligence. Our mission is to bridge the gap between abstract technology and tangible business value.
              </p>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To become the global standard for enterprise knowledge representation and intelligent decision systems.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Core Focus Areas</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {focusAreas.map((area, index) => (
                    <li key={index} className="flex items-center gap-3 text-muted-foreground">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                      <span>{area}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
