"use client";

import { useState } from "react";
import { SiteLayout } from "@/components/layout/site-layout";
import I18nProvider from "@/components/providers/i18n-provider";
import { useTranslation } from "@/lib/hooks/use-translation";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download, Settings, MathOperations, Table, Paintbrush } from "lucide-react";

export default function MarkdownProPage() {
  const { t } = useTranslation();
  const [content, setContent] = useState<string>(`# Welcome to Markdown Pro

This is a **powerful** editor with advanced features.

## Features

- Rich text editing
- LaTeX math expressions
- Code highlighting
- Table generation
- Export to multiple formats

## Code Example

\`\`\`javascript
function secureHash(input) {
  return crypto.subtle.digest('SHA-256', new TextEncoder().encode(input))
    .then(hash => {
      return Array.from(new Uint8Array(hash))
        .map(b => b.toString(16).padStart(2, '0'))
        .join('');
    });
}
\`\`\`

## Math Expressions

Inline math: $E = mc^2$

Display math:

$$
\\frac{\\partial f}{\\partial x} = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h}
$$

## Tables

| Header 1 | Header 2 | Header 3 |
|----------|----------|----------|
| Cell 1   | Cell 2   | Cell 3   |
| Cell 4   | Cell 5   | Cell 6   |
`);

  return (
    <I18nProvider>
      <SiteLayout>
        <div className="container py-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-6">
              <h1 className="text-3xl font-bold gradient-text">{t('markdown.title')}</h1>
              <p className="text-muted-foreground mt-2">{t('markdown.subtitle')}</p>
            </div>

            <div className="flex flex-col gap-6 lg:flex-row">
              <div className="lg:w-1/4 space-y-4">
                <Tabs defaultValue="editor" orientation="vertical" className="w-full h-full">
                  <TabsList className="w-full h-auto mb-6 bg-card/50">
                    <TabsTrigger value="editor" className="flex-1 data-[state=active]:bg-primary/10">
                      {t('markdown.tabs.editor')}
                    </TabsTrigger>
                    <TabsTrigger value="tools" className="flex-1 data-[state=active]:bg-primary/10">
                      {t('markdown.tabs.tools')}
                    </TabsTrigger>
                    <TabsTrigger value="math" className="flex-1 data-[state=active]:bg-primary/10">
                      {t('markdown.tabs.math')}
                    </TabsTrigger>
                    <TabsTrigger value="tables" className="flex-1 data-[state=active]:bg-primary/10">
                      {t('markdown.tabs.tables')}
                    </TabsTrigger>
                    <TabsTrigger value="styles" className="flex-1 data-[state=active]:bg-primary/10">
                      {t('markdown.tabs.styles')}
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="editor" className="space-y-4">
                    <Card className="border-border/40 bg-card/50">
                      <CardContent className="p-4">
                        <div className="space-y-4">
                          <h3 className="text-lg font-medium">{t('markdown.editor.title')}</h3>
                          <div className="flex flex-wrap gap-2">
                            <Button size="sm" variant="outline">
                              # {t('markdown.editor.heading')}
                            </Button>
                            <Button size="sm" variant="outline">
                              **{t('markdown.editor.bold')}**
                            </Button>
                            <Button size="sm" variant="outline">
                              *{t('markdown.editor.italic')}*
                            </Button>
                            <Button size="sm" variant="outline">
                              [{t('markdown.editor.link')}](url)
                            </Button>
                            <Button size="sm" variant="outline">
                              - {t('markdown.editor.list')}
                            </Button>
                            <Button size="sm" variant="outline">
                              ```{t('markdown.editor.code')}```
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="tools">
                    <Card className="border-border/40 bg-card/50">
                      <CardContent className="p-4">
                        <div className="space-y-4">
                          <div className="flex items-center space-x-2">
                            <Settings className="h-4 w-4 text-primary" />
                            <h3 className="text-lg font-medium">{t('markdown.tabs.tools')}</h3>
                          </div>
                          <div className="space-y-2">
                            <Button className="w-full justify-start text-left" variant="outline">
                              {t('markdown.formats.title')}
                            </Button>
                            <div className="pl-4 space-y-2">
                              <Button size="sm" className="w-full justify-start text-left neon-border glow" variant="outline">
                                <Download className="mr-2 h-4 w-4" />
                                {t('markdown.formats.pdf')}
                              </Button>
                              <Button size="sm" className="w-full justify-start text-left" variant="outline">
                                <Download className="mr-2 h-4 w-4" />
                                {t('markdown.formats.docx')}
                              </Button>
                              <Button size="sm" className="w-full justify-start text-left" variant="outline">
                                <Download className="mr-2 h-4 w-4" />
                                {t('markdown.formats.ppt')}
                              </Button>
                              <Button size="sm" className="w-full justify-start text-left" variant="outline">
                                <Download className="mr-2 h-4 w-4" />
                                {t('markdown.formats.png')}
                              </Button>
                              <Button size="sm" className="w-full justify-start text-left" variant="outline">
                                <Download className="mr-2 h-4 w-4" />
                                {t('markdown.formats.html')}
                              </Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="math">
                    <Card className="border-border/40 bg-card/50">
                      <CardContent className="p-4">
                        <div className="space-y-4">
                          <div className="flex items-center space-x-2">
                            <MathOperations className="h-4 w-4 text-primary" />
                            <h3 className="text-lg font-medium">{t('markdown.tabs.math')}</h3>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            Insert LaTeX math expressions with $ for inline and $$ for display math.
                          </p>
                          <div className="space-y-2">
                            <Button size="sm" className="w-full justify-start text-left" variant="outline">
                              $E = mc^2$
                            </Button>
                            <Button size="sm" className="w-full justify-start text-left" variant="outline">
                              $\sqrt{a^2 + b^2 = c^2}$
                            </Button>
                            <Button size="sm" className="w-full justify-start text-left" variant="outline">
                              $\frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="tables">
                    <Card className="border-border/40 bg-card/50">
                      <CardContent className="p-4">
                        <div className="space-y-4">
                          <div className="flex items-center space-x-2">
                            <Table className="h-4 w-4 text-primary" />
                            <h3 className="text-lg font-medium">{t('markdown.tabs.tables')}</h3>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            Generate tables with the visual editor.
                          </p>
                          <div className="space-y-2">
                            <Button size="sm" className="w-full" variant="outline">
                              Generate Table
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="styles">
                    <Card className="border-border/40 bg-card/50">
                      <CardContent className="p-4">
                        <div className="space-y-4">
                          <div className="flex items-center space-x-2">
                            <Paintbrush className="h-4 w-4 text-primary" />
                            <h3 className="text-lg font-medium">{t('markdown.tabs.styles')}</h3>
                          </div>
                          <div className="space-y-2">
                            <div className="space-y-1">
                              <label className="text-xs font-medium">Text Color</label>
                              <div className="flex space-x-2">
                                <button className="h-5 w-5 rounded-full bg-primary"></button>
                                <button className="h-5 w-5 rounded-full bg-secondary"></button>
                                <button className="h-5 w-5 rounded-full bg-accent"></button>
                                <button className="h-5 w-5 rounded-full bg-red-500"></button>
                                <button className="h-5 w-5 rounded-full bg-green-500"></button>
                                <button className="h-5 w-5 rounded-full bg-blue-500"></button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>
              </div>

              <div className="lg:w-3/4 flex flex-col">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
                  <div className="h-full">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="text-sm font-medium text-muted-foreground">Markdown</h3>
                      <div className="flex space-x-2">
                        <Button variant="ghost" size="sm">
                          {t('markdown.editor.save')}
                        </Button>
                      </div>
                    </div>
                    <div className="h-[600px] overflow-y-auto rounded-md border border-border/40 bg-card/50 neon-border">
                      <textarea
                        className="h-full w-full resize-none bg-transparent p-4 font-mono text-sm focus:outline-none"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        placeholder={t('markdown.editor.placeholder')}
                      />
                    </div>
                  </div>

                  <div className="h-full">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="text-sm font-medium text-muted-foreground">{t('markdown.editor.preview')}</h3>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          <Download className="mr-2 h-4 w-4" />
                          {t('markdown.editor.export')}
                        </Button>
                      </div>
                    </div>
                    <div className="h-[600px] overflow-y-auto rounded-md border border-border/40 bg-card/50 p-4 neon-border">
                      <div className="prose prose-invert max-w-none">
                        <div dangerouslySetInnerHTML={{ __html: "Preview content will be rendered here" }} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </SiteLayout>
    </I18nProvider>
  );
}
