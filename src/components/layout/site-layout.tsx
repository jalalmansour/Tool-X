"use client";

import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { motion, AnimatePresence } from "framer-motion";

interface SiteLayoutProps {
  children: React.ReactNode;
}

export function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <AnimatePresence mode="wait">
        <motion.main
          className="flex-1"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            duration: 0.3,
          }}
        >
          {children}
        </motion.main>
      </AnimatePresence>
      <SiteFooter />
    </div>
  );
}
