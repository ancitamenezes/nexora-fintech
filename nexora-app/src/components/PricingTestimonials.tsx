"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function PricingTestimonials() {
  const [annual, setAnnual] = useState(true);

  return (
    <>
      <section className="py-32 bg-[linear-gradient(180deg,var(--bg-primary)_0%,var(--bg-secondary)_100%)] text-center">
        <h2 className="text-[clamp(48px,6vw,72px)] font-display font-bold text-white mb-2 leading-none">$2.4B+</h2>
        <div className="text-sm text-text-secondary uppercase tracking-widest mb-16">Processed Annually</div>

        <div className="max-w-[1000px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 opacity-50 px-6">
          {["ACME CORP", "GLOBEX", "SOYLENT", "INITRODE"].map(logo => (
            <div key={logo} className="font-heading text-xl font-bold border border-border-subtle bg-bg-glass py-6 rounded-xl">
              {logo}
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="py-32 px-6 max-w-[1200px] mx-auto text-center">
        <h2 className="font-heading text-4xl font-bold mb-4">Simple pricing. Infinite scaling.</h2>
        <p className="text-text-secondary mb-10">Start for free. Upgrade when you need advanced controls.</p>

        <div className="flex items-center justify-center gap-3 mb-16">
          <span className="text-sm font-medium">Billed Monthly</span>
          <button 
            className={`w-12 h-6 rounded-full relative transition-colors ${annual ? 'bg-accent-blue' : 'bg-bg-glass border border-border-medium'}`}
            onClick={() => setAnnual(!annual)}
          >
            <motion.div 
              className="w-4 h-4 bg-white rounded-full absolute top-1"
              animate={{ left: annual ? '24px' : '4px' }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          </button>
          <span className="text-sm font-medium">Billed Annually <span className="bg-accent-emerald/20 text-accent-emerald px-2 py-0.5 rounded-full text-xs ml-2">Save 20%</span></span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {/* Starter */}
          <div className="bg-bg-tertiary border border-border-subtle rounded-3xl p-8 hover:-translate-y-2 transition-transform duration-300">
            <h3 className="text-xl font-semibold mb-2">Starter</h3>
            <div className="font-display flex items-start mb-6">
              <span className="text-2xl mt-1">$</span>
              <span className="text-5xl font-bold">{annual ? "0" : "0"}</span>
              <span className="text-sm text-text-secondary mt-auto mb-1 ml-1">/mo</span>
            </div>
            <p className="text-sm text-text-secondary mb-8">For early-stage startups.</p>
            <ul className="flex flex-col gap-3 mb-8">
              {["1 Team workspace", "Virtual cards", "Basic integrations", "Email support"].map((item, i) => (
                <li key={i} className="text-sm flex gap-2"><span className="text-text-secondary">✓</span> {item}</li>
              ))}
            </ul>
            <button className="w-full py-3 rounded-full border border-border-medium text-white hover:bg-white/5 transition-colors font-medium">Get Started</button>
          </div>

          {/* Scale */}
          <div className="bg-[linear-gradient(180deg,rgba(37,99,235,0.05),var(--bg-tertiary))] border border-accent-blue rounded-3xl p-10 shadow-[0_0_30px_rgba(37,99,235,0.15)] relative hover:-translate-y-2 transition-transform duration-300 -mt-4 mb-4">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-accent-blue to-accent-violet text-white text-xs font-bold px-4 py-1 rounded-full">MOST POPULAR</div>
            <h3 className="text-xl font-semibold mb-2">Scale</h3>
            <div className="font-display flex items-start mb-6">
              <span className="text-2xl mt-1">$</span>
              <span className="text-5xl font-bold">{annual ? "49" : "59"}</span>
              <span className="text-sm text-text-secondary mt-auto mb-1 ml-1">/mo</span>
            </div>
            <p className="text-sm text-text-secondary mb-8">For scaling businesses.</p>
            <ul className="flex flex-col gap-3 mb-8">
              {["Unlimited workspaces", "Physical & virtual cards", "AI receipt scanning", "Automated accounting sync", "Priority 24/7 support"].map((item, i) => (
                <li key={i} className="text-sm flex gap-2"><span className="text-accent-blue">✓</span> {item}</li>
              ))}
            </ul>
            <button className="w-full py-3 rounded-full bg-accent-blue text-white hover:bg-accent-blue-glow transition-colors font-medium shadow-[0_0_20px_rgba(37,99,235,0.4)]">Start Free Trial</button>
          </div>

          {/* Enterprise */}
          <div className="bg-bg-tertiary border border-border-subtle rounded-3xl p-8 hover:-translate-y-2 transition-transform duration-300">
            <h3 className="text-xl font-semibold mb-2">Enterprise</h3>
            <div className="font-display flex items-start mb-6">
              <span className="text-5xl font-bold mt-2">Custom</span>
            </div>
            <p className="text-sm text-text-secondary mb-8">For large global teams.</p>
            <ul className="flex flex-col gap-3 mb-8">
              {["Dedicated success manager", "Custom contracts & SLAs", "Multi-subsidiary mgmt", "Advanced role-based access"].map((item, i) => (
                <li key={i} className="text-sm flex gap-2"><span className="text-text-secondary">✓</span> {item}</li>
              ))}
            </ul>
            <button className="w-full py-3 rounded-full border border-border-medium text-white hover:bg-white/5 transition-colors font-medium">Contact Sales</button>
          </div>
        </div>
      </section>
    </>
  );
}
