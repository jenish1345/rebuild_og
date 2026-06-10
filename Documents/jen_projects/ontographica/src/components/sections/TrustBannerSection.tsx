"use client";

import { Building2, Command, Eclipse, Fingerprint, Hexagon, Infinity, Triangle } from "lucide-react";

export function TrustBannerSection() {
  const logos = [
    { icon: Triangle, name: "Acme Corp" },
    { icon: Command, name: "Nexus" },
    { icon: Eclipse, name: "Stellar" },
    { icon: Fingerprint, name: "Identity" },
    { icon: Hexagon, name: "Polymath" },
    { icon: Infinity, name: "Endless" },
    { icon: Building2, name: "Enterprise" },
  ];

  // Duplicate for seamless infinite scrolling
  const marqueeContent = [...logos, ...logos, ...logos];

  return (
    <section className="py-8 bg-background border-y border-border/20 overflow-hidden flex items-center">
      <div className="w-full flex space-x-16 animate-marquee whitespace-nowrap opacity-50 hover:opacity-100 transition-opacity duration-500">
        {marqueeContent.map((logo, i) => (
          <div key={i} className="flex items-center gap-2 text-muted-foreground">
            <logo.icon className="h-6 w-6" />
            <span className="text-lg font-bold uppercase tracking-widest">{logo.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
