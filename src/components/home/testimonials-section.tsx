"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star } from "lucide-react";
import { useTranslation } from "@/lib/hooks/use-translation";

export function TestimonialsSection() {
  const { t } = useTranslation();
  const testimonials = t('home.testimonials.items', { returnObjects: true }) as {
    name: string;
    role: string;
    company: string;
    text: string;
    rating: number;
  }[];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="py-16 md:py-24 bg-card/30 relative overflow-hidden" ref={ref}>
      {/* Background gradient effects */}
      <div className="absolute top-0 left-1/4 -translate-x-1/2 h-1/2 w-1/2 bg-primary/10 rounded-full blur-[100px] opacity-30"></div>
      <div className="absolute bottom-0 right-1/4 translate-x-1/2 h-1/2 w-1/2 bg-secondary/10 rounded-full blur-[100px] opacity-30"></div>

      <div className="container relative z-10">
        <div className="mx-auto max-w-3xl mb-16 text-center">
          <motion.h2
            className="text-3xl font-extrabold tracking-tight gradient-text md:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            {t('home.testimonials.title')}
          </motion.h2>
          <motion.p
            className="mt-4 text-muted-foreground md:text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {t('home.testimonials.subtitle')}
          </motion.p>
        </div>

        <div className="testimonials-container relative overflow-hidden mx-auto max-w-6xl">
          {/* Outer scrolling container */}
          <div className="flex space-x-6 animate-scroll py-4">
            {/* First set of testimonials */}
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={`a-${index}`}
                testimonial={testimonial}
                index={index}
                inView={isInView}
              />
            ))}

            {/* Duplicated set for infinite scrolling */}
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={`b-${index}`}
                testimonial={testimonial}
                index={index}
                inView={isInView}
              />
            ))}
          </div>

          {/* Gradient fade on edges */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-card/30 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-card/30 to-transparent z-10"></div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}

interface TestimonialCardProps {
  testimonial: {
    name: string;
    role: string;
    company: string;
    text: string;
    rating: number;
  };
  index: number;
  inView: boolean;
}

function TestimonialCard({ testimonial, index, inView }: TestimonialCardProps) {
  return (
    <motion.div
      className="group flex-shrink-0 w-72 md:w-96 p-6 rounded-xl border border-border bg-card/50 hover:bg-card hover:border-primary/30 neon-border transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
    >
      <div className="flex mb-2">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`h-4 w-4 ${
              i < testimonial.rating ? "fill-primary text-primary" : "text-muted"
            }`}
          />
        ))}
      </div>

      <blockquote className="mb-4 italic text-muted-foreground text-sm">
        "{testimonial.text}"
      </blockquote>

      <div className="flex items-center border-t border-border/50 pt-4 mt-4">
        <div className="relative h-10 w-10 rounded-full bg-gradient-to-br from-primary to-accent overflow-hidden">
          <div className="absolute inset-[2px] rounded-full bg-card flex items-center justify-center">
            <span className="text-lg font-bold text-primary">{testimonial.name.charAt(0)}</span>
          </div>
        </div>

        <div className="ml-3">
          <p className="font-semibold">{testimonial.name}</p>
          <p className="text-xs text-muted-foreground">
            {testimonial.role}, {testimonial.company}
          </p>
        </div>
      </div>

      {/* Cyberpunk corner detail */}
      <div className="absolute -bottom-1 -right-1 h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="absolute h-px w-8 bg-primary right-0 bottom-3"></div>
        <div className="absolute h-8 w-px bg-primary right-3 bottom-0"></div>
      </div>
    </motion.div>
  );
}
