"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { ModeToggle } from "@/components/theme/mode-toggle";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { LanguageSelector } from "@/components/layout/language-selector";

const mainNavItems = [
  {
    title: "Dashboard",
    href: "/dashboard",
  },
  {
    title: "Tools",
    href: "/tools",
  },
  {
    title: "Markdown Pro",
    href: "/markdown",
  },
  {
    title: "Security",
    href: "/security",
  },
  {
    title: "Resources",
    href: "/resources",
  },
];

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md"
          : "bg-background"
      }`}
    >
      <div className="container flex h-16 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="flex items-center space-x-2">
            <div className="relative h-8 w-8 overflow-hidden rounded-full">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent"
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 10,
                  ease: "linear",
                }}
              />
              <div className="absolute inset-[2px] rounded-full bg-background flex items-center justify-center">
                <span className="text-xs font-bold font-mono">TX</span>
              </div>
            </div>
            <span className="hidden font-bold font-mono sm:inline-block text-foreground">
              <span className="gradient-text">TOOL</span> <span className="glow-text">X</span>
            </span>
          </Link>
        </div>

        <div className="hidden md:flex md:flex-1 md:items-center md:justify-between">
          <nav className="flex items-center space-x-6 text-sm font-medium">
            {mainNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`group relative cybr-btn ${
                  pathname === item.href
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.title}
                {pathname === item.href && (
                  <motion.div
                    className="absolute -bottom-[2px] left-0 right-0 h-[2px] bg-primary"
                    layoutId="navbar-indicator"
                  />
                )}
              </Link>
            ))}
          </nav>
          <div className="flex items-center space-x-2">
            <LanguageSelector />
            <ModeToggle />
            <Link href="/login">
              <Button variant="outline" className="ml-4 neon-border">
                LOG IN
              </Button>
            </Link>
          </div>
        </div>

        <div className="flex flex-1 items-center justify-end md:hidden">
          <LanguageSelector />
          <ModeToggle />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" className="ml-2 px-2">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="border-l-accent/50 w-[80%] max-w-sm">
              <nav className="flex flex-col space-y-8 mt-8">
                {mainNavItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`text-base font-medium hover:text-primary ${
                      pathname === item.href
                        ? "gradient-text"
                        : "text-foreground"
                    }`}
                  >
                    {item.title}
                  </Link>
                ))}
                <Link href="/login">
                  <Button variant="outline" className="w-full neon-border mt-8">
                    LOG IN
                  </Button>
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
