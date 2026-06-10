import Link from "next/link";
import { ArrowRight, Globe, Mail, MessageSquare } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground border-t border-border/10 pt-20 pb-10">
      <div className="container mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-16">
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-2xl font-bold tracking-tight text-primary-foreground">
              Ontographica
            </h3>
            <p className="text-secondary-foreground/70 max-w-sm text-sm leading-relaxed">
              Transforming Data Into Strategic Intelligence. Trusted by Fortune 500
              organizations for AI, Data Intelligence, and Enterprise Analytics.
            </p>
            <div className="space-y-4">
              <h4 className="text-sm font-semibold text-primary-foreground">
                Subscribe to our Insights
              </h4>
              <form className="flex gap-2">
                <input
                  type="email"
                  placeholder="Business Email"
                  className="bg-background/10 border border-border/20 rounded-md px-4 py-2 text-sm text-primary-foreground w-full focus:outline-none focus:ring-1 focus:ring-primary-foreground/50 transition-all placeholder:text-secondary-foreground/50"
                  required
                />
                <button
                  type="submit"
                  className="bg-primary-foreground text-primary px-4 py-2 rounded-md hover:bg-primary-foreground/90 transition-colors flex items-center justify-center"
                  aria-label="Subscribe"
                >
                  <ArrowRight className="h-4 w-4" />
                </button>
              </form>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-primary-foreground uppercase tracking-wider">
              Services
            </h4>
            <ul className="space-y-3 text-sm text-secondary-foreground/70">
              <li><Link href="#" className="hover:text-primary-foreground transition-colors">Data Strategy</Link></li>
              <li><Link href="#" className="hover:text-primary-foreground transition-colors">Business Intelligence</Link></li>
              <li><Link href="#" className="hover:text-primary-foreground transition-colors">AI Solutions</Link></li>
              <li><Link href="#" className="hover:text-primary-foreground transition-colors">Knowledge Graphs</Link></li>
              <li><Link href="#" className="hover:text-primary-foreground transition-colors">Digital Transformation</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-primary-foreground uppercase tracking-wider">
              Industries
            </h4>
            <ul className="space-y-3 text-sm text-secondary-foreground/70">
              <li><Link href="#" className="hover:text-primary-foreground transition-colors">Financial Services</Link></li>
              <li><Link href="#" className="hover:text-primary-foreground transition-colors">Healthcare</Link></li>
              <li><Link href="#" className="hover:text-primary-foreground transition-colors">Manufacturing</Link></li>
              <li><Link href="#" className="hover:text-primary-foreground transition-colors">Logistics</Link></li>
              <li><Link href="#" className="hover:text-primary-foreground transition-colors">Technology</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-primary-foreground uppercase tracking-wider">
              Company
            </h4>
            <ul className="space-y-3 text-sm text-secondary-foreground/70">
              <li><Link href="#" className="hover:text-primary-foreground transition-colors">About Us</Link></li>
              <li><Link href="#" className="hover:text-primary-foreground transition-colors">Careers</Link></li>
              <li><Link href="#" className="hover:text-primary-foreground transition-colors">Contact</Link></li>
              <li><Link href="#" className="hover:text-primary-foreground transition-colors">Partners</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-primary-foreground uppercase tracking-wider">
              Resources
            </h4>
            <ul className="space-y-3 text-sm text-secondary-foreground/70">
              <li><Link href="#" className="hover:text-primary-foreground transition-colors">Insights</Link></li>
              <li><Link href="#" className="hover:text-primary-foreground transition-colors">Case Studies</Link></li>
              <li><Link href="#" className="hover:text-primary-foreground transition-colors">Industry Reports</Link></li>
              <li><Link href="#" className="hover:text-primary-foreground transition-colors">Research</Link></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between border-t border-border/10 pt-8 text-sm text-secondary-foreground/50">
          <p>© {new Date().getFullYear()} Ontographica. All rights reserved.</p>
          <div className="flex items-center gap-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-primary-foreground transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-primary-foreground transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-primary-foreground transition-colors">Legal</Link>
          </div>
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <Link href="#" aria-label="Website" className="hover:text-primary-foreground transition-colors">
              <Globe className="h-5 w-5" />
            </Link>
            <Link href="#" aria-label="Contact" className="hover:text-primary-foreground transition-colors">
              <Mail className="h-5 w-5" />
            </Link>
            <Link href="#" aria-label="Social" className="hover:text-primary-foreground transition-colors">
              <MessageSquare className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
