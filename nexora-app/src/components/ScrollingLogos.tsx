"use client";

import { motion } from "framer-motion";

const ROW_1_LOGOS = ["ACME CORP", "GLOBEX", "SOYLENT", "INITRODE", "INITECH", "UMBRELLA", "WAYNE ENT", "STARK IND", "OSCORP", "MASSIF"];
const ROW_2_LOGOS = ["VANDELAY", "DUNDER MIFFLIN", "PIED PIPER", "HOOLI", "AVIATO", "MASSIVE DYNAMIC", "TYRELL", "CYBERDYNE", "WEYLAND", "CHOAM"];

export default function ScrollingLogos() {
  return (
    <section className="py-24 text-center overflow-hidden">
      <motion.h3 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-[14px] uppercase tracking-widest text-text-tertiary mb-10"
      >
        Powering finance for 12,000+ companies worldwide
      </motion.h3>

      <div className="flex flex-col gap-8 [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
        {/* Row 1 */}
        <div className="flex whitespace-nowrap overflow-hidden">
          <motion.div 
            className="flex gap-24 items-center shrink-0 min-w-full"
            animate={{ x: [0, "-50%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
          >
            {[...ROW_1_LOGOS, ...ROW_1_LOGOS].map((logo, i) => (
              <span key={i} className="font-heading text-2xl font-bold text-white opacity-60 hover:opacity-80 transition-opacity">
                {logo}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Row 2 */}
        <div className="flex whitespace-nowrap overflow-hidden">
          <motion.div 
            className="flex gap-24 items-center shrink-0 min-w-full"
            animate={{ x: ["-50%", 0] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 35 }}
          >
            {[...ROW_2_LOGOS, ...ROW_2_LOGOS].map((logo, i) => (
              <span key={i} className="font-heading text-2xl font-bold text-white opacity-60 hover:opacity-80 transition-opacity">
                {logo}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
