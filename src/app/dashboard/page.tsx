"use client";

import { SiteLayout } from "@/components/layout/site-layout";
import { I18nProvider } from "@/components/providers/i18n-provider";
import { useTranslation } from "@/lib/hooks/use-translation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, Shield, LineChart, Bell, Clock, Cpu, Database } from "lucide-react";

export default function DashboardPage() {
  const { t } = useTranslation();

  return (
    <I18nProvider>
      <SiteLayout>
        <div className="container py-10">
          <div className="mb-8">
            <h1 className="text-3xl font-bold gradient-text">Dashboard</h1>
            <p className="text-muted-foreground mt-2">
              Welcome to your security monitoring dashboard.
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <StatsCard
              title="CPU Usage"
              value="32%"
              icon={<Cpu className="h-5 w-5 text-primary" />}
              trend="up"
              trendValue="2%"
            />
            <StatsCard
              title="Memory"
              value="2.4 GB"
              icon={<Database className="h-5 w-5 text-secondary" />}
              trend="down"
              trendValue="0.3 GB"
            />
            <StatsCard
              title="Network"
              value="1.2 MB/s"
              icon={<Activity className="h-5 w-5 text-accent" />}
              trend="up"
              trendValue="0.2 MB/s"
            />
            <StatsCard
              title="Uptime"
              value="14d 22h"
              icon={<Clock className="h-5 w-5 text-foreground" />}
              trend="stable"
            />
          </div>

          {/* Activity Feed */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            <div className="lg:col-span-2">
              <Card className="border-border/40 bg-card/50 overflow-hidden neon-border">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <LineChart className="h-5 w-5 mr-2 text-primary" />
                    System Activity
                  </CardTitle>
                  <CardDescription>Real-time system performance metrics</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-64 flex items-center justify-center border border-dashed border-border/40 rounded-md">
                    <p className="text-muted-foreground text-sm">Activity charts will be displayed here</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card className="border-border/40 bg-card/50 overflow-hidden neon-border">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Bell className="h-5 w-5 mr-2 text-primary" />
                    Security Alerts
                  </CardTitle>
                  <CardDescription>Recent security notifications</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <SecurityAlert
                      title="Login Attempt"
                      description="3 failed login attempts detected"
                      time="10 minutes ago"
                      level="warning"
                    />
                    <SecurityAlert
                      title="Firewall Update"
                      description="Firewall rules have been updated"
                      time="1 hour ago"
                      level="info"
                    />
                    <SecurityAlert
                      title="Malware Detected"
                      description="Potential malware detected in upload"
                      time="3 hours ago"
                      level="critical"
                    />
                    <SecurityAlert
                      title="System Update"
                      description="Security patches applied successfully"
                      time="1 day ago"
                      level="success"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </SiteLayout>
    </I18nProvider>
  );
}

interface StatsCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
  trend?: 'up' | 'down' | 'stable';
  trendValue?: string;
}

function StatsCard({ title, value, icon, trend, trendValue }: StatsCardProps) {
  let trendColor = 'text-muted-foreground';
  let trendIcon = null;

  if (trend === 'up') {
    trendColor = 'text-green-500';
    trendIcon = <span className="text-xs">↑</span>;
  } else if (trend === 'down') {
    trendColor = 'text-red-500';
    trendIcon = <span className="text-xs">↓</span>;
  }

  return (
    <Card className="border-border/40 bg-card/50 hover:bg-card/70 transition-colors neon-border">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <CardTitle className="text-sm font-medium text-muted-foreground">{title}</CardTitle>
          {icon}
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold mb-1">{value}</div>
        {trend && (
          <div className={`text-xs ${trendColor} flex items-center`}>
            {trendIcon}
            <span className="ml-1">{trendValue ? trendValue : 'No change'}</span>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

interface SecurityAlertProps {
  title: string;
  description: string;
  time: string;
  level: 'info' | 'warning' | 'critical' | 'success';
}

function SecurityAlert({ title, description, time, level }: SecurityAlertProps) {
  const colors = {
    info: 'bg-blue-500/10 border-blue-500/30 text-blue-500',
    warning: 'bg-yellow-500/10 border-yellow-500/30 text-yellow-500',
    critical: 'bg-red-500/10 border-red-500/30 text-red-500',
    success: 'bg-green-500/10 border-green-500/30 text-green-500',
  };

  return (
    <div className={`border-l-2 ${colors[level]} pl-3 py-1`}>
      <h4 className="font-semibold text-sm">{title}</h4>
      <p className="text-xs text-muted-foreground">{description}</p>
      <p className="text-xs opacity-60 mt-1">{time}</p>
    </div>
  );
}
