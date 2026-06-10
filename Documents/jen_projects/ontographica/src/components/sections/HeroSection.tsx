"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="pt-32 pb-24 md:pt-40 md:pb-32 bg-background min-h-[90vh] flex items-center">
      <div className="container mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">
          
          {/* Left Column: Content */}
          <div className="max-w-xl">
            <p className="text-sm font-semibold tracking-[0.2em] text-muted-foreground uppercase mb-6">
              Enterprise Intelligence
            </p>
            <h1 className="text-6xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tighter text-foreground leading-[1.05] mb-6">
              Intelligence <br />
              Engineered.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed mb-12">
              Transforming complex enterprise data into actionable, predictive insights. 
              We craft intelligent solutions that scale securely.
            </p>

            {/* Metrics */}
            <div className="flex items-center gap-12 mb-12 border-l-2 border-border/60 pl-6 py-2">
              <div>
                <span className="block text-4xl font-bold text-foreground">50+</span>
                <span className="text-sm text-muted-foreground mt-1 block">Enterprise Clients</span>
              </div>
              <div>
                <span className="block text-4xl font-bold text-foreground">$2B+</span>
                <span className="text-sm text-muted-foreground mt-1 block">Value Generated</span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Button className="rounded-full px-8 h-12 text-sm font-medium bg-foreground text-background hover:bg-foreground/90">
                Book Consultation <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Right Column: Clean Container Visual */}
          <div className="relative h-[500px] lg:h-[650px] w-full rounded-[2.5rem] bg-muted/30 border border-border/50 overflow-hidden hidden md:flex items-center justify-center p-12">
            <div className="absolute inset-0 bg-gradient-to-tr from-background/40 to-transparent z-10" />
            
            {/* Minimalist Data/Code Representation */}
            <div className="w-full h-full border border-border/40 rounded-2xl bg-background/50 shadow-sm relative z-20 overflow-hidden flex flex-col">
              <div className="h-10 border-b border-border/40 bg-muted/20 flex items-center px-4 gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-border" />
                <div className="w-2.5 h-2.5 rounded-full bg-border" />
                <div className="w-2.5 h-2.5 rounded-full bg-border" />
              </div>
              <div className="flex-1 p-6 flex flex-col gap-4 opacity-30">
                <div className="w-3/4 h-4 rounded bg-foreground/20" />
                <div className="w-1/2 h-4 rounded bg-foreground/20" />
                <div className="w-5/6 h-4 rounded bg-foreground/20 mt-4" />
                <div className="w-2/3 h-4 rounded bg-foreground/20" />
                <div className="w-full h-4 rounded bg-foreground/20" />
                <div className="w-1/3 h-4 rounded bg-foreground/20 mt-4" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
