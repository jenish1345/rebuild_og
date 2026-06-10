import * as React from "react";

const companies = [
  { name: "Acme Corp", logo: "ACME" },
  { name: "GlobalTech", logo: "GLOBALTECH" },
  { name: "Nexus", logo: "NEXUS" },
  { name: "Zenith", logo: "ZENITH" },
  { name: "Apex", logo: "APEX" },
  { name: "Vertex", logo: "VERTEX" },
];

export function TrustSection() {
  return (
    <section className="py-20 border-y border-border/40 bg-muted/30">
      <div className="container mx-auto max-w-7xl px-4 md:px-8 text-center">
        <p className="text-sm font-medium tracking-widest text-muted-foreground uppercase mb-10">
          Trusted by Fortune 500 organizations worldwide
        </p>
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-10 opacity-70 grayscale">
          {companies.map((company, index) => (
            <div
              key={index}
              className="text-xl md:text-2xl font-bold tracking-tighter text-foreground/80 hover:text-foreground transition-colors cursor-default"
            >
              {company.logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
