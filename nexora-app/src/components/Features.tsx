"use client";

import { motion } from "framer-motion";

const features = [
  {
    icon: "🏦",
    title: "Smart Banking for Modern Businesses",
    desc: "Virtual IBANs, multi-currency wallets, international wires in 150+ countries, and real-time settlement.",
    color: "var(--accent-blue)",
    list: ["Virtual accounts per team", "Wires in 150+ currencies", "Same-day USD/EUR settlement", "API-first infrastructure"]
  },
  {
    icon: "💳",
    title: "Expense Control Without the Headache",
    desc: "Issue smart cards with custom spending limits. Auto-capture receipts via mobile. Categorize expenses with AI.",
    color: "var(--accent-emerald)",
    list: ["Physical + virtual cards", "AI receipt scanning", "Custom approval workflows", "Real-time notifications"]
  },
  {
    icon: "⚡",
    title: "Payments That Scale With You",
    desc: "Accept any payment method globally. Generate beautiful invoices. Manage subscriptions and recurring revenue.",
    color: "var(--accent-violet)",
    list: ["50+ payment methods", "Smart invoice automation", "Subscription & SaaS billing", "99.99% uptime SLA"]
  },
  {
    icon: "📈",
    title: "Put Your Idle Cash to Work",
    desc: "Automated cash sweeping into money market funds. Portfolio analytics. AI-driven asset allocation recommendations.",
    color: "var(--accent-violet)",
    list: ["Automated cash sweeping", "4.8% APY on idle balances", "Real-time portfolio dashboard", "AI rebalancing suggestions"]
  },
  {
    icon: "🧠",
    title: "Intelligence Built Into Every Decision",
    desc: "AI-powered cashflow forecasting. Burn rate alerts. Revenue attribution models. Risk scoring.",
    color: "var(--accent-cyan)",
    list: ["90-day cashflow forecast", "Anomaly detection & alerts", "Custom KPI dashboards", "CFO-ready report exports"]
  },
  {
    icon: "🛡️",
    title: "Bank-Grade Security as Standard",
    desc: "256-bit AES encryption. PCI-DSS Level 1. SOC 2 Type II. GDPR compliant. Biometric MFA.",
    color: "var(--accent-amber)",
    list: ["End-to-end encryption", "Real-time fraud scoring", "Role-based access control", "Full audit trails"]
  }
];

export default function Features() {
  return (
    <section className="py-32 px-6 max-w-[1200px] mx-auto">
      <motion.div 
        className="text-center max-w-[700px] mx-auto mb-24"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="text-[13px] font-bold text-accent-blue tracking-widest uppercase block mb-4">[ ✦ PLATFORM FEATURES ]</span>
        <h2 className="font-heading text-[clamp(36px,4vw,56px)] font-bold tracking-tight mb-4 leading-tight">Everything you need to run your finances.</h2>
        <p className="text-lg text-text-secondary">One platform. Every financial tool your business needs to grow, manage risk, and operate efficiently.</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {features.map((feat, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="group relative bg-bg-tertiary border border-border-subtle rounded-3xl p-8 transition-all duration-300 hover:-translate-y-1 hover:border-accent-blue/40 shadow-card hover:shadow-[0_10px_40px_rgba(0,0,0,0.5),0_0_30px_rgba(37,99,235,0.2)_inset] overflow-hidden"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1),transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" style={{ background: `radial-gradient(circle at top right, ${feat.color}, transparent 60%)` }} />
            
            <div className="text-3xl mb-6 inline-block filter drop-shadow-[0_0_12px_var(--icon-color)]" style={{ "--icon-color": feat.color } as any}>{feat.icon}</div>
            <h3 className="font-heading text-2xl font-semibold mb-4">{feat.title}</h3>
            <p className="text-[15px] text-text-secondary mb-6">{feat.desc}</p>
            
            <ul className="mb-6 flex flex-col gap-2">
              {feat.list.map((item, i) => (
                <li key={i} className="text-sm text-text-primary flex items-center gap-2">
                  <span className="text-accent-emerald">✓</span> {item}
                </li>
              ))}
            </ul>
            
            <a href="#" className="text-sm font-semibold hover:underline" style={{ color: feat.color }}>Explore Feature →</a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
