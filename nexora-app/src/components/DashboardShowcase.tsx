"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AreaChart, Area, XAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Jan", revenue: 4000 },
  { name: "Feb", revenue: 3000 },
  { name: "Mar", revenue: 5000 },
  { name: "Apr", revenue: 4500 },
  { name: "May", revenue: 6000 },
  { name: "Jun", revenue: 5500 },
  { name: "Jul", revenue: 7000 },
  { name: "Aug", revenue: 8000 },
  { name: "Sep", revenue: 7500 },
  { name: "Oct", revenue: 9000 },
  { name: "Nov", revenue: 8500 },
  { name: "Dec", revenue: 10000 },
];

export default function DashboardShowcase() {
  const [activeTab, setActiveTab] = useState("business");
  const [activeInsight, setActiveInsight] = useState(0);

  const insights = [
    { text: "📈 Revenue trending +23% above forecast\n→ Consider Q4 growth investment" },
    { text: "⚠️ 3 subscriptions with low ROI detected\n→ Review & optimize spend" },
    { text: "💰 $180k idle — earning 0% returns\n→ Invest in Treasury Fund (4.8% APY)" }
  ];

  return (
    <section className="w-full bg-bg-primary py-24 overflow-hidden">
      <div className="flex justify-center gap-4 mb-16">
        {[
          { id: "business", label: "Business Dashboard" },
          { id: "personal", label: "Personal Finance" },
          { id: "admin", label: "Admin & Compliance" }
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-6 py-2.5 rounded-full text-[15px] transition-all duration-300 ${
              activeTab === tab.id 
                ? "bg-gradient-to-r from-accent-blue to-accent-violet text-white shadow-[0_0_20px_rgba(37,99,235,0.3)]" 
                : "bg-white/5 border border-white/10 text-text-secondary hover:text-white"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <motion.div 
        className="max-w-[1200px] mx-auto bg-bg-tertiary border border-border-accent rounded-3xl flex shadow-[0_4px_24px_rgba(0,0,0,0.4),0_0_40px_rgba(37,99,235,0.05)] h-[700px] overflow-hidden"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        {/* Sidebar */}
        <div className="w-[240px] border-r border-border-subtle bg-[#080D1F]/50 p-6 flex flex-col">
          <div className="flex justify-between items-center mb-10">
            <span className="font-display font-semibold text-lg">NEXORA</span>
            <span className="flex items-center gap-1.5 text-xs bg-white/5 px-2 py-1 rounded-full">
              <span className="w-2 h-2 bg-accent-emerald rounded-full animate-pulse" /> Live
            </span>
          </div>
          <ul className="flex flex-col gap-2 flex-1">
            {["⚏ Overview", "◎ Analytics", "⊞ Payments", "⬡ Expenses", "⊕ Invoices", "◉ Payroll", "⬙ Investments", "⚙ Settings"].map((item, i) => (
              <li key={i} className={`px-3 py-2 rounded-xl text-sm cursor-pointer transition-colors ${i === 0 ? 'bg-accent-blue/15 text-white' : 'text-text-secondary hover:bg-white/5 hover:text-white'}`}>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Main Area */}
        <div className="flex-1 p-8 flex flex-col gap-8 overflow-y-auto">
          {/* Top Metrics */}
          <div className="grid grid-cols-4 gap-6">
            {[
              { label: "Total Bal.", val: "$4,284,921", trend: "↑ +8.4% vs last mo", pos: true },
              { label: "Monthly Rev", val: "$847,203", trend: "↑ +23.1% vs last mo", pos: true },
              { label: "Expenses", val: "$312,847", trend: "↓ -4.2% vs last mo", pos: false },
              { label: "Net Profit", val: "$534,356", trend: "↑ +31.8% vs last mo", pos: true },
            ].map((m, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-4">
                <div className="text-xs text-text-secondary mb-2">{m.label}</div>
                <div className="font-heading text-2xl font-semibold mb-1">{m.val}</div>
                <div className={`text-[13px] ${m.pos ? 'text-accent-emerald' : 'text-accent-rose'}`}>{m.trend}</div>
              </div>
            ))}
          </div>

          <div className="flex gap-8 flex-1">
            {/* Chart Area */}
            <div className="flex-[2] bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-semibold text-lg">Revenue Overview</h3>
                <div className="flex bg-black/20 rounded-full p-1 text-xs">
                  {["7D", "1M", "3M", "6M", "1Y", "ALL"].map((t, i) => (
                    <span key={i} className={`px-3 py-1 cursor-pointer rounded-full ${i === 5 ? 'bg-bg-tertiary text-white' : 'text-text-secondary'}`}>{t}</span>
                  ))}
                </div>
              </div>
              <div className="flex-1 min-h-[250px]">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={data} margin={{ top: 10, right: 0, left: 0, bottom: 0 }}>
                    <defs>
                      <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#2563EB" stopOpacity={0.4}/>
                        <stop offset="95%" stopColor="#2563EB" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <XAxis dataKey="name" stroke="#475569" fontSize={11} tickLine={false} axisLine={false} />
                    <Tooltip 
                      contentStyle={{ backgroundColor: 'rgba(12, 18, 40, 0.9)', borderColor: 'rgba(255,255,255,0.1)', borderRadius: '12px' }}
                      itemStyle={{ color: '#fff' }}
                    />
                    <Area type="monotone" dataKey="revenue" stroke="#2563EB" strokeWidth={2} fillOpacity={1} fill="url(#colorRev)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Right Side Panels */}
            <div className="flex-1 flex flex-col gap-6">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex-1">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="font-semibold text-sm tracking-widest uppercase">Recent Transactions</h3>
                  <a href="#" className="text-xs text-accent-blue hover:underline">View All →</a>
                </div>
                <div className="flex flex-col gap-4">
                  {[
                    { dot: "bg-accent-emerald", name: "Stripe payment", amt: "+$24,800", time: "2m ago", pos: true },
                    { dot: "bg-accent-rose", name: "AWS Infrastructure", amt: "-$8,400", time: "15m ago", pos: false },
                    { dot: "bg-accent-emerald", name: "Customer Invoice #847", amt: "+$6,200", time: "1h ago", pos: true },
                    { dot: "bg-accent-amber", name: "Pending: Payroll Run", amt: "$82,000", time: "3h ago", pos: false, neu: true },
                  ].map((tx, i) => (
                    <div key={i} className="flex justify-between items-center pb-3 border-b border-white/5 last:border-0 last:pb-0">
                      <div className="flex items-center gap-2 text-sm">
                        <div className={`w-2 h-2 rounded-full ${tx.dot}`} /> {tx.name}
                      </div>
                      <div className="text-right">
                        <div className={`font-mono text-sm ${tx.pos ? 'text-accent-emerald' : tx.neu ? 'text-text-secondary' : 'text-white'}`}>{tx.amt}</div>
                        <div className="text-[11px] text-text-tertiary">{tx.time}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-accent-violet/5 border border-accent-violet/20 rounded-2xl p-6 cursor-pointer" onClick={() => setActiveInsight((a) => (a + 1) % insights.length)}>
                <h3 className="text-xs font-bold text-accent-violet tracking-widest uppercase mb-4">🤖 AI Financial Advisor</h3>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeInsight}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="text-sm text-text-primary whitespace-pre-line"
                  >
                    {insights[activeInsight].text}
                  </motion.div>
                </AnimatePresence>
                <button className="mt-4 text-xs text-accent-violet border border-accent-violet/40 px-3 py-1.5 rounded-full hover:bg-accent-violet/10 transition-colors">
                  Take Action →
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
