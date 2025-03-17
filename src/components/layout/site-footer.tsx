"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/30 bg-background/50 backdrop-blur-sm">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="flex flex-col space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="relative h-8 w-8 overflow-hidden rounded-full">
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent" />
                <div className="absolute inset-[2px] rounded-full bg-background flex items-center justify-center">
                  <span className="text-xs font-bold font-mono">TX</span>
                </div>
              </div>
              <span className="font-bold font-mono text-foreground">
                <span className="gradient-text">TOOL</span>{" "}
                <span className="glow-text">X</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              Advanced hacking/pentesting/security-focused toolkit with a
              cyberpunk aesthetic. Designed for security professionals.
            </p>
            <div className="flex items-center space-x-3">
              <Link
                href="https://twitter.com/duinotoolx"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-primary/20 transition-colors"
              >
                <svg
                  className="h-5 w-5 text-muted-foreground hover:text-primary"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </Link>
              <Link
                href="https://github.com/duinotoolx"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-primary/20 transition-colors"
              >
                <svg
                  className="h-5 w-5 text-muted-foreground hover:text-primary"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  />
                </svg>
              </Link>
              <Link
                href="https://www.linkedin.com/in/jalalm/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-primary/20 transition-colors"
              >
                <svg
                  className="h-5 w-5 text-muted-foreground hover:text-primary"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 md:col-span-3 md:grid-cols-3">
            <div className="space-y-4">
              <h4 className="text-sm font-bold tracking-wide uppercase text-foreground">
                Site
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="/"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/tools"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Tools
                  </Link>
                </li>
                <li>
                  <Link
                    href="/markdown"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Markdown Pro
                  </Link>
                </li>
                <li>
                  <Link
                    href="/resources"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Resources
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-bold tracking-wide uppercase text-foreground">
                Legal
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="/privacy"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link
                    href="/disclaimer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Ethical Hacking Disclaimer
                  </Link>
                </li>
                <li>
                  <Link
                    href="/cookies"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-bold tracking-wide uppercase text-foreground">
                Company
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="/about"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    About Duino
                  </Link>
                </li>
                <li>
                  <Link
                    href="/team"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Team
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
              <div className="pt-4">
                <Link href="https://www.linkedin.com/in/jalalm/" target="_blank" rel="noopener noreferrer">
                  <div className="flex items-center space-x-2">
                    <div className="relative h-10 w-10 overflow-hidden rounded-full border border-border">
                      <Image
                        src="https://media.licdn.com/dms/image/v2/D4E03AQHY371YFMjVWw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1728159919382?e=1744243200&v=beta&t=26LD0exnL8rpTIOmMcOFrMHT1FdSOBl0mWELVxsu8fM"
                        alt="Jalal Mansour"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs font-medium">Founder</span>
                      <span className="text-sm font-semibold">Jalal Mansour</span>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-border/30 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Duino Inc. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground mt-4 md:mt-0">
            Built with <span className="text-primary">♥</span> by{" "}
            <a
              href="https://duino.io"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 transition-colors"
            >
              Duino
            </a>
            {" "} | Powered by{" "}
            <span className="text-primary font-mono">DuinoBot</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
