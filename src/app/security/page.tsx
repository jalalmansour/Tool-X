"use client";

import { SiteLayout } from "@/components/layout/site-layout";
import { I18nProvider } from "@/components/providers/i18n-provider";
import { useTranslation } from "@/lib/hooks/use-translation";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ShieldCheck, Network, Package, Lock, BarChart, Key, Globe, Database, PhoneForwarded } from "lucide-react";

export default function SecurityPage() {
  const { t } = useTranslation();

  const principles = [
    {
      id: "zeroTrust",
      icon: <ShieldCheck className="h-5 w-5 text-primary" />,
      color: "from-primary/20 to-primary/5",
      borderColor: "border-primary/20",
    },
    {
      id: "microsegmentation",
      icon: <Network className="h-5 w-5 text-secondary" />,
      color: "from-secondary/20 to-secondary/5",
      borderColor: "border-secondary/20",
    },
    {
      id: "supplyChain",
      icon: <Package className="h-5 w-5 text-accent" />,
      color: "from-accent/20 to-accent/5",
      borderColor: "border-accent/20",
    },
    {
      id: "leastPrivilege",
      icon: <Lock className="h-5 w-5 text-neon-green" />,
      color: "from-neon-green/20 to-neon-green/5",
      borderColor: "border-neon-green/20",
    },
    {
      id: "continuousMonitoring",
      icon: <BarChart className="h-5 w-5 text-neon-blue" />,
      color: "from-neon-blue/20 to-neon-blue/5",
      borderColor: "border-neon-blue/20",
    },
  ];

  const sections = [
    {
      id: "apiSecurity",
      icon: <Key className="h-5 w-5 text-primary" />,
    },
    {
      id: "frontendSecurity",
      icon: <Globe className="h-5 w-5 text-secondary" />,
    },
    {
      id: "backendSecurity",
      icon: <Database className="h-5 w-5 text-accent" />,
    },
    {
      id: "antiPhishing",
      icon: <PhoneForwarded className="h-5 w-5 text-neon-green" />,
    },
  ];

  return (
    <I18nProvider>
      <SiteLayout>
        <div className="container py-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-8">
              <h1 className="text-3xl font-bold gradient-text">{t('security.title')}</h1>
              <p className="text-muted-foreground mt-2">{t('security.subtitle')}</p>
            </div>

            <div className="mb-12 space-y-8">
              <h2 className="text-xl font-semibold">Core Security Principles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                {principles.map((principle, index) => (
                  <motion.div
                    key={principle.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className={`border ${principle.borderColor} bg-gradient-to-b ${principle.color} h-full`}>
                      <CardHeader className="pb-2">
                        <div className="rounded-full bg-card w-10 h-10 flex items-center justify-center mb-2">
                          {principle.icon}
                        </div>
                        <CardTitle className="text-lg">
                          {t(`security.principles.${principle.id}.title`)}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription>
                          {t(`security.principles.${principle.id}.description`)}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="mb-12 space-y-8">
              <h2 className="text-xl font-semibold">Security Dashboard</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {sections.map((section, index) => (
                  <motion.div
                    key={section.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  >
                    <Card className="border-border/40 bg-card/50 neon-border overflow-hidden">
                      <CardHeader>
                        <div className="flex items-center">
                          <div className="mr-2">{section.icon}</div>
                          <CardTitle>{t(`security.sections.${section.id}.title`)}</CardTitle>
                        </div>
                        <CardDescription>
                          {t(`security.sections.${section.id}.description`)}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="h-48 flex items-center justify-center border border-dashed border-border/40 rounded-md">
                          <p className="text-sm text-muted-foreground">Security metrics and controls will be displayed here</p>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Terminal-like Security Scanner */}
            <div className="mb-12 space-y-4">
              <h2 className="text-xl font-semibold">Security Scanner</h2>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9 }}
              >
                <Card className="border-border/40 bg-card/20 neon-border overflow-hidden">
                  <CardContent className="p-0">
                    <div className="bg-black/50 p-1 border-b border-border/40 flex items-center">
                      <div className="flex space-x-1.5 ml-2">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      </div>
                      <div className="ml-4 text-xs font-mono text-muted-foreground">
                        security_scanner.sh
                      </div>
                    </div>
                    <div className="font-mono text-xs p-4 h-64 overflow-y-auto scan-line">
                      <div className="text-primary">$ ./security_scanner.sh --target=system --level=comprehensive</div>
                      <div className="mt-2 text-muted-foreground">Initializing security scanner...</div>
                      <div className="text-muted-foreground">Loading security modules: <span className="text-primary">OK</span></div>
                      <div className="text-muted-foreground">Checking system integrity: <span className="text-primary">OK</span></div>
                      <div className="text-muted-foreground">Scanning for vulnerabilities...</div>
                      <div className="text-muted-foreground ml-2">Checking network configuration: <span className="text-primary">OK</span></div>
                      <div className="text-muted-foreground ml-2">Checking firewall rules: <span className="text-primary">OK</span></div>
                      <div className="text-muted-foreground ml-2">Checking file permissions: <span className="text-primary">OK</span></div>
                      <div className="text-muted-foreground ml-2">Checking installed packages: <span className="text-yellow-400">WARNING</span></div>
                      <div className="text-muted-foreground ml-4">- Package 'openssl' is outdated (1.1.1f). Update to latest version (3.0.8).</div>
                      <div className="text-muted-foreground ml-2">Checking user accounts: <span className="text-primary">OK</span></div>
                      <div className="text-muted-foreground ml-2">Checking for rootkits: <span className="text-primary">OK</span></div>
                      <div className="text-muted-foreground ml-2">Checking for backdoors: <span className="text-primary">OK</span></div>
                      <div className="text-muted-foreground">Scan complete. See report for details.</div>
                      <div className="mt-2 text-primary">$ _</div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </SiteLayout>
    </I18nProvider>
  );
}
