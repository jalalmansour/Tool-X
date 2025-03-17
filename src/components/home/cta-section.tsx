"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/lib/hooks/use-translation";

export function CTASection() {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      ref={ref}
      className="py-16 relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
      <div className="absolute -left-20 top-1/4 w-60 h-60 bg-primary/20 rounded-full blur-[80px] opacity-50"></div>
      <div className="absolute -right-20 bottom-1/4 w-60 h-60 bg-secondary/20 rounded-full blur-[80px] opacity-50"></div>

      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto px-4 py-12 md:py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-extrabold gradient-text mb-4">
              {t('home.cta.title')}
            </h2>
            <p className="text-muted-foreground md:text-lg mb-8">
              {t('home.cta.subtitle')}
            </p>

            <div className="relative inline-block">
              <Link href="/sign-up">
                <Button size="lg" className="glow px-8 font-medium">
                  {t('home.cta.button')}
                </Button>
              </Link>
              <div className="absolute -inset-0.5 rounded-md bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 opacity-0 blur transition duration-500 group-hover:opacity-50"></div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Circuit board pattern at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-16 overflow-hidden opacity-10">
        <div className="absolute bottom-0 left-0 right-0 h-px bg-primary"></div>
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute bottom-0"
            style={{
              left: `${i * 5}%`,
              width: '1px',
              height: `${Math.random() * 12 + 4}px`,
              backgroundColor: 'hsl(var(--primary))'
            }}
          />
        ))}
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            key={`a-${i}`}
            className="absolute bottom-0"
            style={{
              left: `${i * 10}%`,
              width: '1px',
              height: `${Math.random() * 16 + 8}px`,
              backgroundColor: 'hsl(var(--secondary))'
            }}
          />
        ))}
      </div>
    </section>
  );
}
