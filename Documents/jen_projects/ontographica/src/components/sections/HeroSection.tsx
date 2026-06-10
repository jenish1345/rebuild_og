"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const textOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const textScale = useTransform(scrollYProgress, [0, 0.4], [1, 0.95]);
  const textY = useTransform(scrollYProgress, [0, 0.4], [0, -50]);

  const visualOpacity = useTransform(scrollYProgress, [0.2, 0.6], [0.1, 1]);
  const visualScale = useTransform(scrollYProgress, [0.2, 0.6], [0.95, 1]);

  return (
    <section ref={containerRef} className="relative h-[200vh] bg-background">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col items-center justify-center pt-20">
        
        {/* Background Visual Layer */}
        <motion.div 
          style={{ opacity: visualOpacity, scale: visualScale }}
          className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none"
        >
           <div className="relative w-full max-w-5xl aspect-video opacity-40 dark:opacity-20 mix-blend-multiply dark:mix-blend-screen">
             {/* Abstract Geometric Grid */}
             <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
             
             {/* Data Nodes */}
             <div className="absolute top-[20%] left-[30%] w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-pulse" />
             <div className="absolute bottom-[30%] right-[20%] w-48 h-48 bg-primary/20 rounded-full blur-[80px] animate-pulse" style={{ animationDelay: '1s' }} />
             <div className="absolute top-[40%] right-[40%] w-24 h-24 bg-primary/30 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }} />
           </div>
        </motion.div>

        {/* Foreground Content Layer */}
        <motion.div 
          style={{ opacity: textOpacity, scale: textScale, y: textY }}
          className="relative z-10 container mx-auto max-w-6xl px-4 md:px-8 flex flex-col items-center text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="text-6xl md:text-8xl lg:text-[8rem] font-bold tracking-tighter text-foreground leading-[0.9] mb-8">
              Intelligence
              <br />
              <span className="text-muted-foreground font-medium tracking-tight italic">Engineered.</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-xl md:text-2xl text-muted-foreground/80 max-w-2xl font-light leading-relaxed mb-12"
          >
            We transform complex enterprise data into predictive, scalable, and actionable strategic intelligence.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <Button size="lg" className="rounded-full px-10 h-14 text-base font-medium transition-transform hover:scale-105 active:scale-95">
              Initiate Strategy
            </Button>
            <Button
              variant="ghost"
              size="lg"
              className="rounded-full px-10 h-14 text-base font-medium hover:bg-muted/50 transition-colors"
            >
              Discover Framework
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          style={{ opacity: textOpacity }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-semibold">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-muted-foreground/50 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
