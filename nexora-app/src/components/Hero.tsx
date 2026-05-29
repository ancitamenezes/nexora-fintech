"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Hero() {
  const [revenue, setRevenue] = useState(0);
  const [insightText, setInsightText] = useState("");
  const fullInsight = "Revenue is tracking 23% above last quarter. Consider reinvesting surplus...";

  useEffect(() => {
    // Number counter animation
    const duration = 1500;
    const target = 2847392;
    const start = performance.now();

    const animateNum = (time: number) => {
        const elapsed = time - start;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 4); // easeOutQuart
        setRevenue(Math.floor(eased * target));
        if (progress < 1) requestAnimationFrame(animateNum);
    };
    requestAnimationFrame(animateNum);

    // Typewriter effect
    setTimeout(() => {
      let i = 0;
      const typeInterval = setInterval(() => {
        if (i <= fullInsight.length) {
          setInsightText(fullInsight.slice(0, i));
          i++;
        } else {
          clearInterval(typeInterval);
        }
      }, 30);
      return () => clearInterval(typeInterval);
    }, 1500);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="relative min-h-screen flex items-center pt-[100px] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 bg-bg-primary">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,#1E3A8A_0%,transparent_70%)] opacity-80" />
        <div className="absolute top-[10%] left-[20%] w-[40vw] h-[40vw] rounded-full bg-accent-blue blur-[80px] opacity-15 animate-[blob-float_18s_ease-in-out_infinite]" />
        <div className="absolute bottom-[10%] right-[10%] w-[35vw] h-[35vw] rounded-full bg-accent-violet blur-[80px] opacity-15 animate-[blob-float_22s_ease-in-out_infinite_reverse]" />
        <div className="absolute top-[40%] left-[50%] w-[30vw] h-[30vw] rounded-full bg-accent-cyan blur-[80px] opacity-15 animate-[blob-float_25s_ease-in-out_infinite_5s]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_80%)]" />
      </div>

      <div className="max-w-[1440px] mx-auto px-6 w-full flex flex-col lg:flex-row gap-16 items-center relative z-10">
        
        {/* Left Content */}
        <motion.div 
          className="flex-1 max-w-[600px]"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 bg-white/5 border border-accent-blue/40 px-4 py-1.5 rounded-full text-[13px] font-medium mb-6 shadow-[inset_0_0_10px_rgba(37,99,235,0.1)] hover:shadow-[inset_0_0_20px_rgba(37,99,235,0.2),0_0_15px_rgba(37,99,235,0.3)] transition-shadow">
            <span className="text-accent-amber animate-pulse">⚡</span> New: AI-Powered Financial Intelligence — Now Available
          </motion.div>

          <motion.h1 variants={itemVariants} className="font-display font-bold text-[clamp(48px,6vw,80px)] tracking-[-0.03em] leading-[1.1] mb-4">
            Your Financial<br/>
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 bg-[length:200%_auto] text-transparent bg-clip-text animate-[text-gradient_4s_linear_infinite]">
              Command Center.
            </span>
          </motion.h1>

          <motion.p variants={itemVariants} className="text-lg text-text-secondary max-w-[520px] mb-10 leading-relaxed">
            Manage payments, spending, investments, and business finances from a single intelligent platform. Built for ambitious teams that move fast.
          </motion.p>

          <motion.div variants={itemVariants} className="flex items-center gap-3 text-[13px] text-text-tertiary mb-16">
            <span className="text-accent-emerald tracking-widest">★★★★★</span>
            <span>Trusted by 12,000+ businesses &bull; $2.4B+ processed &bull; 150+ countries</span>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-6 mb-16">
            <Link href="#" className="relative inline-flex items-center justify-center bg-gradient-to-r from-accent-blue to-accent-violet text-white px-8 py-3.5 rounded-full font-semibold text-[17px] group">
              <span className="absolute inset-[-2px] rounded-full bg-inherit blur-md opacity-70 animate-[pulse-glow_2s_infinite] -z-10" />
              Start for Free <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </Link>
            <Link href="#" className="inline-flex items-center gap-2 text-white border border-white/10 px-8 py-3.5 rounded-full font-medium text-[17px] hover:bg-white/5 hover:border-white/30 transition-colors">
              <Play className="w-5 h-5 fill-current" /> Watch Demo
            </Link>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-col gap-4">
            <span className="text-[12px] font-semibold text-text-tertiary tracking-widest uppercase">As featured in:</span>
            <div className="flex gap-10 font-heading text-sm font-bold text-text-secondary opacity-40 hover:opacity-70 transition-opacity">
              <span>Forbes</span><span>TechCrunch</span><span>Bloomberg</span><span>Financial Times</span><span>WSJ</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Dashboard Visual */}
        <motion.div 
          className="flex-1 relative perspective-[1200px]"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        >
          <motion.div 
            className="w-full max-w-[600px] bg-[#0C1228]/70 backdrop-blur-xl border border-accent-blue/40 rounded-3xl p-6 shadow-[0_4px_24px_rgba(0,0,0,0.4),0_0_60px_rgba(37,99,235,0.12)] relative"
            animate={{ y: [-6, 6, -6] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            whileHover={{ rotateX: 2, rotateY: -5, scale: 1.02 }}
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* Header */}
            <div className="flex justify-between items-center border-b border-white/10 pb-4 mb-4">
              <span className="font-mono text-xs tracking-widest text-text-secondary">NEXORA DASHBOARD</span>
              <span className="flex items-center gap-1.5 text-xs bg-white/5 px-2.5 py-1 rounded-full">
                <span className="w-2 h-2 bg-accent-emerald rounded-full animate-pulse shadow-[0_0_0_0_rgba(16,185,129,0.4)]" /> Live
              </span>
            </div>

            {/* Metrics & Chart */}
            <div className="flex gap-6 bg-white/5 rounded-2xl p-6 mb-4">
              <div className="w-[150px] shrink-0">
                <label className="text-xs text-text-secondary uppercase tracking-wider">Total Revenue</label>
                <div className="font-heading text-3xl font-semibold my-1">${new Intl.NumberFormat().format(revenue)}</div>
                <div className="text-[13px] font-medium text-accent-emerald">↑ +18.4%</div>
              </div>
              <div className="flex-1 relative h-[60px]">
                <svg viewBox="0 0 200 60" className="w-full h-full" preserveAspectRatio="none">
                  <path d="M0 50 Q 20 45, 40 30 T 80 40 T 120 20 T 160 30 T 200 10 L 200 60 L 0 60 Z" fill="url(#chart-grad-1)"/>
                  <motion.path 
                    d="M0 50 Q 20 45, 40 30 T 80 40 T 120 20 T 160 30 T 200 10" 
                    fill="none" stroke="#2563EB" strokeWidth="2"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.5, delay: 1, ease: "easeInOut" }}
                  />
                  <defs>
                    <linearGradient id="chart-grad-1" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="rgba(37,99,235,0.4)"/>
                      <stop offset="100%" stopColor="rgba(37,99,235,0)"/>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>

            {/* Expenses */}
            <div className="flex gap-6 bg-white/5 rounded-2xl p-6 mb-4">
              <div className="w-[150px] shrink-0">
                <label className="text-xs text-text-secondary uppercase tracking-wider">Expenses</label>
                <div className="font-heading text-3xl font-semibold my-1">$421,083</div>
                <div className="text-[13px] font-medium text-accent-rose">↓ -3.2%</div>
              </div>
              <div className="flex-1 flex justify-between items-end pb-1 font-mono text-[11px] text-text-tertiary">
                <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span>
              </div>
            </div>

            {/* Transactions */}
            <div className="bg-white/5 rounded-2xl p-6 mb-4">
              <label className="text-[11px] text-text-tertiary tracking-widest block mb-4 uppercase">Recent Transactions</label>
              <div className="flex flex-col gap-3">
                {[
                  { name: "Stripe Payment", amt: "+$14,200", time: "2m ago", color: "bg-accent-blue", pos: true },
                  { name: "AWS Invoice", amt: "-$3,840", time: "12m ago", color: "bg-accent-rose", pos: false },
                  { name: "Payroll Transfer", amt: "-$82,000", time: "1h ago", color: "bg-accent-violet", pos: false },
                ].map((tx, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 + idx * 0.3 }}
                    className="flex items-center gap-3 text-sm pb-2 border-b border-white/5 last:border-0 last:pb-0"
                  >
                    <div className={`w-2 h-2 rounded-full ${tx.color}`} />
                    <span>{tx.name}</span>
                    <span className={`ml-auto font-mono font-medium ${tx.pos ? 'text-accent-emerald' : ''}`}>{tx.amt}</span>
                    <span className="w-12 text-right text-xs text-text-tertiary">{tx.time}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* AI Insight */}
            <div className="bg-accent-violet/10 border border-accent-violet/20 rounded-xl p-4 flex gap-3 items-start">
              <span className="text-lg leading-none">🤖</span>
              <div>
                <span className="block text-[10px] text-accent-violet font-bold tracking-widest uppercase mb-1">AI Insight</span>
                <span className="text-[13px] text-text-secondary">{insightText}</span>
              </div>
            </div>

            {/* Floating Widgets */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2.5 }}
              className="absolute -top-5 -right-10 bg-white text-black border border-white/10 rounded-xl p-3 flex gap-3 items-center shadow-xl z-20"
              style={{ transform: "translateZ(30px)" }}
            >
              <div className="w-6 h-6 bg-accent-emerald rounded-full flex items-center justify-center text-white text-xs">✓</div>
              <div className="flex flex-col">
                <strong className="text-[13px] leading-tight">Payment received</strong>
                <span className="text-[11px] text-gray-500">+$14,200 (Stripe → Nexora)</span>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 3.5 }}
              className="absolute -bottom-5 -left-12 bg-[#0C1228]/95 border border-accent-violet rounded-xl p-3 flex gap-3 items-center shadow-[0_0_20px_rgba(124,58,237,0.2)] z-20"
              style={{ transform: "translateZ(30px)" }}
            >
              <div className="text-xl">🧠</div>
              <div className="flex flex-col">
                <strong className="text-[13px] leading-tight text-white">Anomaly Detected</strong>
                <span className="text-[11px] text-text-secondary">Unusual $48k transfer flagged</span>
              </div>
            </motion.div>

          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
