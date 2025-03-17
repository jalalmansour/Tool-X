"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "@/lib/hooks/use-translation";

export function HeroSection() {
  const { t } = useTranslation();
  const containerRef = useRef<HTMLDivElement>(null);

  // Parallax effect for the grid background
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;

      const { left, top, width, height } = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - left) / width - 0.5;
      const y = (e.clientY - top) / height - 0.5;

      const gridItems = containerRef.current.querySelectorAll('.grid-item');
      gridItems.forEach((item) => {
        const el = item as HTMLElement;
        const speed = parseFloat(el.dataset.speed || '1');
        el.style.transform = `translate(${x * 10 * speed}px, ${y * 10 * speed}px)`;
      });
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative overflow-hidden bg-background">
      {/* Animated Grid Background */}
      <div
        ref={containerRef}
        className="absolute inset-0 z-0 opacity-20"
      >
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="grid-item absolute h-2 w-2 rounded-full bg-primary"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5 + 0.2,
            }}
            data-speed={Math.random() * 2 + 0.5}
          />
        ))}
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={`grid-${i}`}
            className="grid-item absolute h-1 w-20 rounded-full bg-secondary"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.3 + 0.1,
              transform: `rotate(${Math.random() * 360}deg)`,
            }}
            data-speed={Math.random() * 2 + 0.5}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto max-w-screen-xl px-4 py-28 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col justify-center md:py-12 lg:py-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-5xl lg:text-6xl">
                <span className="gradient-text glow-text">{t('home.hero.title')}</span>
              </h1>
              <p className="mt-4 text-lg text-muted-foreground md:text-xl">
                {t('home.hero.subtitle')}
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/tools">
                  <Button size="lg" className="relative cybr-btn glow">
                    {t('home.hero.cta')}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/markdown">
                  <Button variant="outline" size="lg" className="border border-primary/50 neon-border">
                    {t('common.learnMore')}
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>

          <div className="relative lg:flex lg:items-center hidden">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-full"
            >
              <div className="relative scan-line">
                <div className="aspect-[4/3] w-full overflow-hidden rounded-xl border border-primary/40 bg-card/40 backdrop-blur-sm neon-border">
                  <div className="absolute left-0 top-0 p-4">
                    <div className="flex items-center text-xs font-mono tracking-wider">
                      <span className="h-2 w-2 rounded-full bg-primary"></span>
                      <span className="ml-2 text-primary">// SYSTEM STATUS: ONLINE</span>
                    </div>
                  </div>

                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[80%] text-center">
                    <div className="mb-6 flex items-center justify-center">
                      <div className="h-20 w-20 rounded-full bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center">
                        <div className="h-[70px] w-[70px] rounded-full bg-background flex items-center justify-center">
                          <span className="text-2xl font-bold font-mono text-primary glow-text">TX</span>
                        </div>
                      </div>
                    </div>
                    <div className="mb-4 text-lg font-mono typing">INITIALIZING SYSTEM...</div>

                    <div className="space-y-2 text-xs font-mono text-left mx-auto max-w-xs">
                      <div className="flex text-muted-foreground">
                        <span className="w-32">CORE MODULES</span>
                        <span className="text-primary">LOADED</span>
                      </div>
                      <div className="flex text-muted-foreground">
                        <span className="w-32">SECURITY SCAN</span>
                        <span className="text-primary">COMPLETE</span>
                      </div>
                      <div className="flex text-muted-foreground">
                        <span className="w-32">ENCRYPTION</span>
                        <span className="text-primary">ENABLED</span>
                      </div>
                      <div className="flex text-muted-foreground">
                        <span className="w-32">API KEY</span>
                        <span className="text-primary">VERIFIED</span>
                      </div>
                      <div className="flex text-muted-foreground">
                        <span className="w-32">AI ASSISTANT</span>
                        <span className="text-primary">ONLINE</span>
                      </div>
                      <div className="flex text-muted-foreground">
                        <span className="w-32">SANDBOX</span>
                        <span className="text-primary">ACTIVE</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative Code Lines */}
                <div className="absolute -bottom-6 -right-6 h-24 w-24 opacity-70">
                  <pre className="text-[7px] text-accent/70 font-mono">
                    {`
function secureInitialize() {
  const entropy = crypto.getRandomValues(
    new Uint8Array(32)
  );
  return sodium.crypto_pwhash(
    32, password, entropy,
    sodium.crypto_pwhash_OPSLIMIT_SENSITIVE,
    sodium.crypto_pwhash_MEMLIMIT_SENSITIVE,
    sodium.crypto_pwhash_ALG_ARGON2ID13
  );
}`.trim()}
                  </pre>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
