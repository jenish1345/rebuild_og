"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const steps = [
  { 
    phase: "01", 
    name: "Strategic Discovery", 
    description: "We conduct a deep architectural audit of your existing data assets, identifying silos, inefficiencies, and untapped value. This phase culminates in a comprehensive intelligence roadmap aligned with executive business objectives." 
  },
  { 
    phase: "02", 
    name: "System Design", 
    description: "Our engineers architect a highly scalable infrastructure designed specifically for your regulatory environment. We select the appropriate AI methodologies—from LLMs to complex knowledge graphs—to ensure long-term resilience." 
  },
  { 
    phase: "03", 
    name: "Engineering & Build", 
    description: "We construct robust data pipelines, train bespoke machine learning models, and develop the core intelligence layer. Every line of code is optimized for performance, security, and integration capabilities." 
  },
  { 
    phase: "04", 
    name: "Deployment", 
    description: "Solutions are seamlessly integrated into your enterprise environment with zero operational downtime. We handle the complex orchestration of microservices and assure flawless transition." 
  },
  { 
    phase: "05", 
    name: "Scale & Optimize", 
    description: "Post-deployment, we continuously monitor algorithmic performance, optimize cloud resource consumption, and expand intelligence capabilities enterprise-wide." 
  },
];

export function ProcessSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  return (
    <section id="process" ref={containerRef} className="py-32 bg-background relative">
      <div className="container mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          
          {/* Left Sticky Sidebar */}
          <div className="lg:col-span-5 relative">
            <div className="sticky top-40 h-[60vh] flex flex-col justify-between">
              <div>
                <h2 className="text-sm uppercase tracking-[0.3em] font-semibold text-primary mb-6">
                  Implementation
                </h2>
                <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.1] mb-6">
                  The Methodical Process
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-md">
                  Engineered to minimize risk, ensure compliance, and guarantee measurable business outcomes at every phase of deployment.
                </p>
              </div>

              {/* Progress Line */}
              <div className="relative h-32 w-[2px] bg-border/40 overflow-hidden mt-12 hidden lg:block">
                <motion.div 
                  className="absolute top-0 left-0 w-full bg-primary"
                  style={{ 
                    height: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]) 
                  }}
                />
              </div>
            </div>
          </div>

          {/* Right Scrolling Content */}
          <div className="lg:col-span-7">
            <div className="flex flex-col gap-24 lg:gap-40 pt-12 lg:pt-[20vh] pb-[20vh]">
              {steps.map((step, index) => (
                <div key={index} className="relative group">
                  <div className="flex flex-col gap-6">
                    <span className="text-5xl md:text-7xl font-bold text-muted/50 tracking-tighter transition-colors group-hover:text-primary/20">
                      {step.phase}
                    </span>
                    <h4 className="text-2xl md:text-3xl font-semibold text-foreground">
                      {step.name}
                    </h4>
                    <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
