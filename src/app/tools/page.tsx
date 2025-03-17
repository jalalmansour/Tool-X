"use client";

import { useState } from "react";
import Link from "next/link";
import { SiteLayout } from "@/components/layout/site-layout";
import { I18nProvider } from "@/components/providers/i18n-provider";
import { useTranslation } from "@/lib/hooks/use-translation";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Code, KeyRound, Key, Network, Database, Image, Shield, Terminal, Scanner } from "lucide-react";

export default function ToolsPage() {
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState("");

  const toolCategories = [
    {
      id: "encoding",
      icon: <Code className="h-4 w-4" />,
      tools: ["base64", "url", "hex", "caesar"]
    },
    {
      id: "hashing",
      icon: <KeyRound className="h-4 w-4" />,
      tools: ["md5", "sha1", "sha256", "sha512", "bcrypt", "argon2"]
    },
    {
      id: "passwords",
      icon: <Key className="h-4 w-4" />,
      tools: ["passwordGenerator", "passwordStrength"]
    },
    {
      id: "network",
      icon: <Network className="h-4 w-4" />,
      tools: ["portScanner", "ping", "traceroute", "dnsLookup", "whois"]
    },
    {
      id: "data",
      icon: <Database className="h-4 w-4" />,
      tools: ["dataSanitizer", "fileShredder", "memoryCleaner"]
    },
    {
      id: "steganography",
      icon: <Image className="h-4 w-4" />,
      tools: ["stegoHide", "stegoDetect"]
    },
    {
      id: "exploits",
      icon: <Shield className="h-4 w-4" />,
      tools: ["exploitSearch", "cveDetails"]
    },
    {
      id: "sandbox",
      icon: <Terminal className="h-4 w-4" />,
      tools: ["vmSandbox"]
    },
    {
      id: "scanners",
      icon: <Scanner className="h-4 w-4" />,
      tools: ["webScanner"]
    }
  ];

  const filteredTools = (categoryId: string) => {
    const category = toolCategories.find(cat => cat.id === categoryId);
    if (!category) return [];

    return category.tools.filter(tool =>
      searchQuery === "" ||
      t(`tools.tools.${tool}.title`).toLowerCase().includes(searchQuery.toLowerCase()) ||
      t(`tools.tools.${tool}.description`).toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  return (
    <I18nProvider>
      <SiteLayout>
        <div className="container py-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-4">
              <div>
                <h1 className="text-3xl font-bold gradient-text">{t('tools.title')}</h1>
                <p className="text-muted-foreground mt-2">{t('tools.subtitle')}</p>
              </div>

              <div className="relative w-full md:w-64">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder={t('common.search')}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            <Tabs defaultValue="encoding" className="w-full">
              <TabsList className="mb-6 flex w-full h-auto flex-wrap">
                {toolCategories.map((category) => (
                  <TabsTrigger
                    key={category.id}
                    value={category.id}
                    className="flex items-center data-[state=active]:bg-primary/10 py-2"
                  >
                    <span className="mr-2">{category.icon}</span>
                    <span>{t(`tools.categories.${category.id}`)}</span>
                  </TabsTrigger>
                ))}
              </TabsList>

              {toolCategories.map((category) => (
                <TabsContent key={category.id} value={category.id} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredTools(category.id).map((tool) => (
                      <ToolCard
                        key={tool}
                        title={t(`tools.tools.${tool}.title`)}
                        description={t(`tools.tools.${tool}.description`)}
                        href={`/tools/${category.id}/${tool}`}
                      />
                    ))}

                    {filteredTools(category.id).length === 0 && (
                      <div className="col-span-full flex justify-center py-12">
                        <p className="text-muted-foreground">
                          {searchQuery ? t('common.nothingFound') : 'No tools available'}
                        </p>
                      </div>
                    )}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </motion.div>
        </div>
      </SiteLayout>
    </I18nProvider>
  );
}

interface ToolCardProps {
  title: string;
  description: string;
  href: string;
}

function ToolCard({ title, description, href }: ToolCardProps) {
  return (
    <Link href={href}>
      <Card className="border-border/40 bg-card/50 overflow-hidden transition-all hover:-translate-y-1 hover:shadow-lg hover:neon-border cursor-pointer h-full">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-sm">{description}</CardDescription>
        </CardContent>
        <CardFooter>
          <Button variant="ghost" className="px-0 text-primary text-xs">
            Open Tool
          </Button>
        </CardFooter>

        {/* Cyberpunk accent line */}
        <div className="absolute bottom-0 left-0 h-[2px] w-full">
          <div className="absolute bottom-0 left-0 w-1/2 h-full bg-gradient-to-r from-primary/70 to-transparent"></div>
        </div>
      </Card>
    </Link>
  );
}
