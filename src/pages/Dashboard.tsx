import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { useAuth } from "@/hooks/use-auth";
import {
  LayoutDashboard,
  LogOut,
  Plus,
  TrendingUp,
  FolderOpen,
  Clock,
  CheckCircle2,
  ArrowUpRight,
} from "lucide-react";
import { useNavigate } from "react-router";

const projects = [
  {
    name: "Website Redesign",
    description: "Modernizing the company website with new branding",
    status: "active" as const,
    progress: 72,
  },
  {
    name: "Mobile App",
    description: "iOS and Android companion app",
    status: "active" as const,
    progress: 45,
  },
  {
    name: "API Integration",
    description: "Third-party service integrations",
    status: "paused" as const,
    progress: 28,
  },
  {
    name: "Documentation",
    description: "Internal knowledge base and docs",
    status: "archived" as const,
    progress: 100,
  },
];

const statusColors = {
  active: "success",
  paused: "secondary",
  archived: "outline",
} as const;

export default function Dashboard() {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

  return (
    <main className="min-h-screen bg-background">
      {/* Top Bar */}
      <header className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto max-w-6xl px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div
              className="flex items-center gap-2.5 cursor-pointer"
              onClick={() => navigate("/")}
            >
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground text-sm font-bold">
                N
              </div>
              <span className="text-base font-semibold tracking-tight">
                Nexus
              </span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-sm text-muted-foreground hidden sm:inline">
              {user?.name ? `Hi, ${user.name}` : "Welcome"}
            </span>
            <Button
              type="button"
              variant="ghost"
              size="sm"
              className="gap-2 text-muted-foreground"
              onClick={handleSignOut}
            >
              <LogOut className="h-4 w-4" />
              <span className="hidden sm:inline">Sign out</span>
            </Button>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="mx-auto max-w-6xl px-6 py-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold tracking-tight">
            Welcome back{user?.name ? `, ${user.name}` : ""}
          </h1>
          <p className="mt-1 text-muted-foreground">
            Here's what's happening with your projects.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {[
            {
              label: "Total Projects",
              value: "4",
              icon: FolderOpen,
              change: "+2 this month",
            },
            {
              label: "Active",
              value: "2",
              icon: TrendingUp,
              change: "In progress",
            },
            {
              label: "In Review",
              value: "1",
              icon: Clock,
              change: "Awaiting feedback",
            },
            {
              label: "Completed",
              value: "1",
              icon: CheckCircle2,
              change: "Last week",
            },
          ].map((stat) => (
            <Card
              key={stat.label}
              className="border-border/40 bg-card/50 hover:bg-card hover:border-border/60 transition-all duration-200"
            >
              <CardContent className="p-5">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-muted-foreground">
                    {stat.label}
                  </span>
                  <stat.icon className="h-4 w-4 text-muted-foreground" />
                </div>
                <p className="text-2xl font-bold tracking-tight">
                  {stat.value}
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  {stat.change}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Projects Section */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold tracking-tight">Projects</h2>
          <Button size="sm" className="gap-1.5">
            <Plus className="h-4 w-4" />
            New project
          </Button>
        </div>

        <div className="grid gap-4">
          {projects.map((project) => (
            <Card
              key={project.name}
              className="border-border/40 bg-card/50 hover:bg-card hover:border-border/60 hover:shadow-md hover:shadow-primary/[0.02] transition-all duration-200 group cursor-pointer"
            >
              <CardContent className="p-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-medium">{project.name}</h3>
                      <Badge
                        variant={statusColors[project.status]}
                        className="text-[10px] uppercase tracking-wider"
                      >
                        {project.status}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {project.description}
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-32">
                      <div className="flex items-center justify-between text-xs mb-1.5">
                        <span className="text-muted-foreground">Progress</span>
                        <span className="font-medium">{project.progress}%</span>
                      </div>
                      <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                        <div
                          className="h-full bg-primary rounded-full transition-all duration-500"
                          style={{ width: `${project.progress}%` }}
                        />
                      </div>
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="mt-12">
          <Separator className="mb-8" />
          <h2 className="text-lg font-semibold tracking-tight mb-6">
            Quick actions
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              {
                title: "Create a project",
                description: "Start a new project from scratch",
                icon: FolderOpen,
              },
              {
                title: "Invite teammates",
                description: "Collaborate with your team",
                icon: Plus,
              },
              {
                title: "View analytics",
                description: "Track your team's performance",
                icon: TrendingUp,
              },
            ].map((action) => (
              <Card
                key={action.title}
                className="border-border/40 bg-card/50 hover:bg-card hover:border-border/60 hover:shadow-md hover:shadow-primary/[0.02] transition-all duration-200 cursor-pointer group"
              >
                <CardContent className="p-5 flex items-start gap-4">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/15 transition-colors">
                    <action.icon className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-sm">{action.title}</h3>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      {action.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-border/40">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
            <p>© 2026 Nexus. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-foreground transition-colors">
                Privacy
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Terms
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Help
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
