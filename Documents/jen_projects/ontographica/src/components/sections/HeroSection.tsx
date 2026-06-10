"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-48 md:pb-32 bg-background">
      <div className="container mx-auto max-w-7xl px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.1]">
                Transforming Data Into{" "}
                <span className="text-primary/80">Strategic Intelligence</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed"
            >
              Ontographica empowers enterprise leaders with AI-driven analytics,
              knowledge graphs, and digital transformation strategies to unlock
              hidden value and drive sustainable growth.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="mt-10 flex flex-col sm:flex-row gap-4"
            >
              <Button size="lg" className="rounded-full px-8 h-14 text-base font-medium">
                Book Consultation
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-full px-8 h-14 text-base font-medium border-border/60 hover:bg-muted"
              >
                Explore Services
              </Button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
            className="relative h-[400px] lg:h-[600px] w-full hidden lg:block"
          >
            {/* Minimal geometric/knowledge graph abstract visual */}
            <div className="absolute inset-0 bg-gradient-to-tr from-muted/30 to-background rounded-[2rem] border border-border/40 overflow-hidden flex items-center justify-center">
              <div className="relative w-full h-full opacity-60 dark:opacity-40">
                {/* Abstract geometric lines representing a graph */}
                <div className="absolute top-1/4 left-1/4 w-3 h-3 rounded-full bg-primary/60 shadow-[0_0_15px_rgba(15,23,42,0.2)]" />
                <div className="absolute top-1/2 left-1/2 w-4 h-4 rounded-full bg-primary/80 shadow-[0_0_20px_rgba(15,23,42,0.3)]" />
                <div className="absolute bottom-1/3 right-1/4 w-3 h-3 rounded-full bg-primary/40 shadow-[0_0_10px_rgba(15,23,42,0.1)]" />
                <div className="absolute top-1/3 right-1/3 w-2 h-2 rounded-full bg-primary/30" />
                <div className="absolute bottom-1/4 left-1/3 w-2 h-2 rounded-full bg-primary/50" />
                
                {/* Connecting lines */}
                <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <line x1="25%" y1="25%" x2="50%" y2="50%" stroke="currentColor" strokeWidth="1" className="text-border/80" />
                  <line x1="50%" y1="50%" x2="75%" y2="66%" stroke="currentColor" strokeWidth="1" className="text-border/80" />
                  <line x1="50%" y1="50%" x2="66%" y2="33%" stroke="currentColor" strokeWidth="1" className="text-border/80" />
                  <line x1="25%" y1="25%" x2="33%" y2="75%" stroke="currentColor" strokeWidth="1" className="text-border/80" />
                  <line x1="33%" y1="75%" x2="50%" y2="50%" stroke="currentColor" strokeWidth="1" className="text-border/80" />
                </svg>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
