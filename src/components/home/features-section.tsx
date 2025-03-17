"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FileCode2, Shield, Bot, Activity } from "lucide-react";
import { useTranslation } from "@/lib/hooks/use-translation";

const features = [
  {
    icon: FileCode2,
    color: "from-primary/20 to-primary/10",
    borderColor: "border-primary/20",
    glowClass: "glow",
    translateClass: "group-hover:-translate-y-1",
    key: "markdownPro",
  },
  {
    icon: Shield,
    color: "from-secondary/20 to-secondary/10",
    borderColor: "border-secondary/20",
    glowClass: "glow-blue",
    translateClass: "group-hover:translate-y-1",
    key: "securityTools",
  },
  {
    icon: Bot,
    color: "from-accent/20 to-accent/10",
    borderColor: "border-accent/20",
    glowClass: "glow-purple",
    translateClass: "group-hover:-translate-x-1",
    key: "aiAssistant",
  },
  {
    icon: Activity,
    color: "from-neon-green/20 to-neon-green/10",
    borderColor: "border-neon-green/20",
    glowClass: "glow-green",
    translateClass: "group-hover:translate-x-1",
    key: "realTimeMonitoring",
  },
];

export function FeaturesSection() {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="py-16 md:py-24 relative overflow-hidden" ref={ref}>
      {/* Decorative grid lines */}
      <div className="absolute inset-0 z-0">
        <div className="h-full w-full bg-grid-pattern-dot opacity-[0.03]"></div>
      </div>

      <div className="container relative z-10">
        <div className="text-center mx-auto max-w-3xl mb-16">
          <motion.h2
            className="text-3xl font-extrabold tracking-tight gradient-text md:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            {t('home.features.title')}
          </motion.h2>
          <motion.p
            className="mt-4 text-muted-foreground md:text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {t('home.features.subtitle')}
          </motion.p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={index}
                className={`group relative overflow-hidden rounded-xl border ${feature.borderColor} bg-gradient-to-b ${feature.color} p-8 transition-all duration-300 hover:shadow-lg hover:${feature.glowClass}`}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              >
                <motion.div
                  className={`mb-6 inline-flex h-12 w-12 items-center justify-center rounded-full bg-background ${feature.translateClass} transition-transform duration-300`}
                >
                  <Icon className={`h-6 w-6 text-${feature.key === 'markdownPro' ? 'primary' : feature.key === 'securityTools' ? 'secondary' : feature.key === 'aiAssistant' ? 'accent' : 'neon-green'}`} />
                </motion.div>

                <h3 className="mb-2 text-xl font-bold">
                  {t(`home.features.${feature.key}.title`)}
                </h3>

                <p className="text-muted-foreground text-sm">
                  {t(`home.features.${feature.key}.description`)}
                </p>

                {/* Decorative corner */}
                <div className="absolute -bottom-2 -right-2 h-10 w-10 opacity-30">
                  <div className="absolute h-px w-10 bg-gradient-to-r from-transparent to-primary/50 right-0 bottom-4"></div>
                  <div className="absolute h-10 w-px bg-gradient-to-t from-transparent to-primary/50 right-4 bottom-0"></div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
