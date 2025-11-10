"use client";

import { motion } from "framer-motion";

const navItems = [
  { href: "#home", color: "gold" },
  { href: "#about-doctor", color: "pink" },
  { href: "#results", color: "gold" },
  { href: "#services", color: "pink" },
  { href: "#faq", color: "gold" },
  { href: "#about", color: "pink" },
  { href: "#call-to-action", color: "gold" },
] as const;

export default function Sidebar() {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
      className="fixed top-0 left-0 w-full bg-beige/80 backdrop-blur-md flex justify-center items-center py-4 z-50 shadow-sm border-b border-white/20"
    >
      <div className="flex flex-row gap-6 md:gap-8">
        {navItems.map((item, idx) => (
          <a
            key={idx}
            href={item.href}
            aria-label={`Ir para ${item.href.replace("#", "")}`}
            className="p-1"
          >
            <span
              className={`w-3 h-3 md:w-4 md:h-4 rounded-full block transition-all duration-300 hover:scale-150 hover:shadow-md ${
                item.color === "gold" ? "bg-gold" : "bg-pink"
              }`}
            ></span>
          </a>
        ))}
      </div>
    </motion.nav>
  );
}
