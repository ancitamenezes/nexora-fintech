"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [lastY, setLastY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 60) setScrolled(true);
    else setScrolled(false);

    if (latest > lastY && latest > 100) setHidden(true);
    else setHidden(false);

    setLastY(latest);
  });

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-[#050814]/85 backdrop-blur-[20px] saturate-[180%] border-b border-white/10"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 py-5 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <svg className="w-8 h-8 transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(37,99,235,0.6)]" viewBox="0 0 32 32" fill="none">
            <path d="M8 8v16m16-16v16M8 8l16 16" stroke="url(#logo-grad)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
            <defs>
              <linearGradient id="logo-grad" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
                <stop stopColor="#2563EB"/>
                <stop offset="1" stopColor="#7C3AED"/>
              </linearGradient>
            </defs>
          </svg>
          <span className="font-display font-semibold text-2xl tracking-tight text-white">Nexora</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6">
          <div className="relative group py-2 cursor-pointer">
            <span className="text-[15px] font-medium text-white transition-colors group-hover:text-accent-blue">Solutions</span>
            <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-accent-blue to-accent-violet transition-all duration-300 group-hover:w-full"></div>
            
            {/* Mega Menu */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 w-[800px]">
              <div className="bg-[#0C1228]/95 backdrop-blur-xl border border-white/10 rounded-2xl p-10 shadow-2xl flex gap-10">
                <div className="flex-1">
                  <h4 className="font-heading text-text-secondary text-sm tracking-widest uppercase mb-4">For Businesses</h4>
                  <ul className="flex flex-col gap-3">
                    <li><Link href="#" className="text-[15px] text-white hover:text-accent-blue">Cash Flow Management</Link></li>
                    <li><Link href="#" className="text-[15px] text-white hover:text-accent-blue">Payroll & HR</Link></li>
                    <li><Link href="#" className="text-[15px] text-white hover:text-accent-blue">Invoice Automation</Link></li>
                    <li><Link href="#" className="text-[15px] text-white hover:text-accent-blue">Team Spending</Link></li>
                  </ul>
                </div>
                <div className="flex-1">
                  <h4 className="font-heading text-text-secondary text-sm tracking-widest uppercase mb-4">For Startups</h4>
                  <ul className="flex flex-col gap-3">
                    <li><Link href="#" className="text-[15px] text-white hover:text-accent-blue">Fast Payments</Link></li>
                    <li><Link href="#" className="text-[15px] text-white hover:text-accent-blue">Startup Banking</Link></li>
                    <li><Link href="#" className="text-[15px] text-white hover:text-accent-blue">Expense Cards</Link></li>
                    <li><Link href="#" className="text-[15px] text-white hover:text-accent-blue">Venture Debt</Link></li>
                  </ul>
                </div>
                <div className="flex-1 bg-white/5 border border-white/10 rounded-xl p-6 flex flex-col gap-2">
                  <span className="self-start bg-accent-violet/20 text-[#A78BFA] px-2 py-1 rounded-full text-xs font-semibold">New</span>
                  <h4 className="text-white text-base font-semibold m-0">AI Financial Advisor</h4>
                  <p className="text-sm text-text-secondary">Automated insights to optimize your runway.</p>
                </div>
              </div>
            </div>
          </div>
          
          {["Features", "Dashboard", "Pricing", "Security", "Resources", "Blog"].map((item) => (
            <div key={item} className="relative group py-2">
              <Link href="#" className="text-[15px] font-medium text-white transition-colors group-hover:text-accent-blue">{item}</Link>
              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-accent-blue to-accent-violet transition-all duration-300 group-hover:w-full"></div>
            </div>
          ))}
        </div>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-4">
          <Link href="#" className="text-white text-[15px] font-medium px-6 py-2 rounded-full border border-white/10 hover:bg-white/5 hover:border-white/30 transition-all">
            Log in
          </Link>
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <Link href="#" className="bg-gradient-to-r from-accent-blue to-accent-violet text-white text-[15px] font-medium px-6 py-2.5 rounded-full shadow-[0_0_20px_rgba(37,99,235,0.35)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] transition-shadow">
              Get Started
            </Link>
          </motion.div>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-bg-secondary/95 backdrop-blur-xl border-t border-white/10"
          >
            <div className="flex flex-col px-6 py-8 gap-6">
              {["Solutions", "Features", "Dashboard", "Pricing", "Security", "Resources", "Blog"].map((item) => (
                <Link key={item} href="#" className="text-lg font-medium text-white hover:text-accent-blue" onClick={() => setMobileMenuOpen(false)}>
                  {item}
                </Link>
              ))}
              <div className="flex flex-col gap-4 mt-4 pt-6 border-t border-white/10">
                <Link href="#" className="text-center text-white py-3 border border-white/20 rounded-full">Log in</Link>
                <Link href="#" className="text-center text-white py-3 bg-gradient-to-r from-accent-blue to-accent-violet rounded-full">Get Started</Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
