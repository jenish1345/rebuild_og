"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="pt-32 pb-24 md:pt-40 md:pb-32 bg-background min-h-[90vh] flex items-center">
      <div className="container mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">
          
          {/* Left Column: Authentic Content */}
          <div className="max-w-xl">
            <p className="text-sm font-bold tracking-[0.2em] text-primary uppercase mb-6">
              Ontographica
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-foreground leading-[1.05] mb-6">
              Where Data <br /> Becomes Meaningful <span className="text-muted-foreground italic font-light">Intelligence.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed mb-12">
              Enterprise ontology and knowledge graph consulting. 
              Semantic infrastructure that scales with your AI ambitions.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Button className="w-full sm:w-auto rounded-full px-8 h-12 text-sm font-medium bg-foreground text-background hover:bg-foreground/90">
                Explore Infrastructure <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="w-full sm:w-auto rounded-full px-8 h-12 text-sm font-medium bg-transparent border-border hover:bg-muted/50">
                Consulting Services
              </Button>
            </div>
          </div>

          {/* Right Column: Sleek Visual Image */}
          <div className="relative h-[500px] lg:h-[650px] w-full rounded-[2.5rem] bg-muted/10 overflow-hidden hidden md:block">
            {/* High-quality abstract architectural/tech image, desaturated for the premium feel */}
            <img 
              src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80" 
              alt="Enterprise Server Architecture"
              className="absolute inset-0 w-full h-full object-cover filter grayscale opacity-90 mix-blend-luminosity hover:scale-105 transition-transform duration-1000 ease-in-out"
            />
            {/* Overlay to ensure it blends seamlessly with the background in both light and dark modes */}
            <div className="absolute inset-0 bg-gradient-to-tr from-background via-background/40 to-transparent" />
          </div>

        </div>
      </div>
    </section>
  );
}
