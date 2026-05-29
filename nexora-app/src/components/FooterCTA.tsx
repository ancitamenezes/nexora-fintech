"use client";

import { motion } from "framer-motion";

export default function FooterCTA() {
  return (
    <>
      {/* Final CTA */}
      <section className="relative py-32 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.15)_0%,transparent_60%)]" />
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-[800px] mx-auto"
        >
          <h2 className="font-display font-bold text-[clamp(36px,5vw,64px)] mb-6 leading-tight">Ready to upgrade your<br/>financial stack?</h2>
          <p className="text-lg text-text-secondary mb-10 max-w-[600px] mx-auto">Join thousands of fast-growing companies that trust Nexora to manage their finances, scale globally, and extend their runway.</p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <button className="bg-gradient-to-r from-accent-blue to-accent-violet text-white px-8 py-4 rounded-full font-semibold text-[17px] shadow-[0_0_20px_rgba(37,99,235,0.35)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] transition-shadow">
              Open an Account in Minutes
            </button>
            <button className="border border-white/20 text-white px-8 py-4 rounded-full font-semibold text-[17px] hover:bg-white/10 transition-colors">
              Talk to an Expert
            </button>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 text-sm text-text-tertiary">
            <span className="flex items-center gap-2"><span className="text-accent-emerald">✓</span> No hidden fees</span>
            <span className="flex items-center gap-2"><span className="text-accent-emerald">✓</span> Cancel anytime</span>
            <span className="flex items-center gap-2"><span className="text-accent-emerald">✓</span> Fast onboarding</span>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-bg-secondary border-t border-border-subtle pt-24 pb-8 px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-6 gap-12 mb-20">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <svg className="w-6 h-6" viewBox="0 0 32 32" fill="none">
                  <path d="M8 8v16m16-16v16M8 8l16 16" stroke="#2563EB" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="font-display font-bold tracking-tight text-xl">Nexora</span>
              </div>
              <p className="text-sm text-text-secondary mb-6 max-w-[280px]">The modern financial operating system for ambitious businesses.</p>
              <div className="flex border border-border-subtle rounded-full p-1 bg-bg-primary">
                <input type="email" placeholder="Subscribe to newsletter" className="bg-transparent border-none outline-none text-sm text-white px-4 py-2 w-full" />
                <button className="bg-accent-blue text-white rounded-full w-8 h-8 flex items-center justify-center shrink-0">→</button>
              </div>
            </div>
            
            {[
              { title: "Products", links: ["Business Accounts", "Corporate Cards", "Expense Management", "Bill Pay", "Invoicing", "Capital"] },
              { title: "Solutions", links: ["Startups", "Enterprise", "E-commerce", "SaaS", "Web3", "Agencies"] },
              { title: "Resources", links: ["Blog", "Customer Stories", "Help Center", "API Documentation", "System Status"] },
              { title: "Company", links: ["About Us", "Careers", "Press", "Partners", "Contact", "Legal"] },
            ].map((col, i) => (
              <div key={i}>
                <h4 className="text-xs text-text-tertiary tracking-widest uppercase mb-6 font-semibold">{col.title}</h4>
                <ul className="flex flex-col gap-3">
                  {col.links.map(link => (
                    <li key={link}><a href="#" className="text-sm text-text-secondary hover:text-white transition-colors">{link}</a></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="border-t border-border-subtle pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[13px] text-text-tertiary">
            <p>© {new Date().getFullYear()} Nexora Finance, Inc. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Security</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
