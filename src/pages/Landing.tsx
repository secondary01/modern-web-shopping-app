import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  ArrowRight,
  Layers,
  Zap,
  Shield,
  Users,
  Check,
  Sparkles,
  BarChart3,
  Globe,
  MessageSquare,
  Lock,
  ChevronRight,
} from "lucide-react";
import { useNavigate } from "react-router";
import { useAuth } from "@/hooks/use-auth";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function Landing() {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground text-sm font-bold">
              N
            </div>
            <span className="text-base font-semibold tracking-tight">
              Nexus
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#features"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Features
            </a>
            <a
              href="#testimonials"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Testimonials
            </a>
            <a
              href="#pricing"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Pricing
            </a>
          </nav>
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="sm"
              onClick={() =>
                navigate(isAuthenticated ? "/dashboard" : "/auth")
              }
            >
              Sign in
            </Button>
            <Button
              size="sm"
              onClick={() =>
                navigate(isAuthenticated ? "/dashboard" : "/auth")
              }
            >
              Get started
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.03] via-transparent to-transparent" />
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/[0.04] rounded-full blur-[120px]" />

        <div className="relative mx-auto max-w-6xl px-6 pt-24 pb-20 md:pt-32 md:pb-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <Badge
              variant="secondary"
              className="mb-6 border border-primary/10 bg-primary/5 text-primary gap-1.5 px-3 py-1"
            >
              <Sparkles className="h-3 w-3" />
              Now in public beta
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.1]">
              Workspaces that{" "}
              <span className="text-primary">move with you</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Nexus brings your team, projects, and ideas together in one
              beautiful workspace. Organize, collaborate, and ship faster.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="lg"
                className="h-12 px-8 text-base gap-2"
                onClick={() =>
                  navigate(isAuthenticated ? "/dashboard" : "/auth")
                }
              >
                Start for free
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="h-12 px-8 text-base gap-2"
              >
                Watch demo
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </motion.div>

          {/* Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="mt-16 md:mt-20 mx-auto max-w-4xl"
          >
            <div className="rounded-2xl border border-border/60 bg-card p-1 shadow-2xl shadow-primary/[0.06]">
              <div className="rounded-xl bg-muted/30 p-6 md:p-8">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-3 h-3 rounded-full bg-border" />
                  <div className="w-3 h-3 rounded-full bg-border" />
                  <div className="w-3 h-3 rounded-full bg-border" />
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="col-span-2 space-y-4">
                    <div className="h-3 bg-primary/10 rounded-full w-3/4" />
                    <div className="h-2 bg-muted rounded-full w-full" />
                    <div className="h-2 bg-muted rounded-full w-5/6" />
                    <div className="h-2 bg-muted rounded-full w-2/3" />
                  </div>
                  <div className="space-y-3">
                    <div className="h-20 bg-primary/5 rounded-lg" />
                    <div className="h-20 bg-primary/5 rounded-lg" />
                  </div>
                </div>
                <div className="grid grid-cols-4 gap-3 mt-6">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="h-16 bg-primary/[0.03] rounded-lg border border-border/40"
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Logos */}
      <section className="border-y border-border/40 bg-muted/20">
        <div className="mx-auto max-w-6xl px-6 py-10">
          <p className="text-center text-sm text-muted-foreground mb-8">
            Trusted by teams at
          </p>
          <div className="flex items-center justify-center gap-12 flex-wrap opacity-40">
            {["Acme Corp", "Globex", "Initech", "Hooli", "Massive"].map(
              (name) => (
                <span
                  key={name}
                  className="text-lg font-semibold tracking-tight text-foreground"
                >
                  {name}
                </span>
              )
            )}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <motion.div variants={fadeUp}>
              <Badge variant="secondary" className="mb-4">
                Features
              </Badge>
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="text-3xl md:text-4xl font-bold tracking-tight"
            >
              Everything your team needs
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mt-4 text-lg text-muted-foreground"
            >
              Powerful features that help you stay organized and focused on what
              matters most.
            </motion.p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="grid md:grid-cols-3 gap-6"
          >
            {[
              {
                icon: Layers,
                title: "Organized Workspaces",
                description:
                  "Structure projects with boards, lists, and views that match how your team thinks.",
              },
              {
                icon: Zap,
                title: "Lightning Fast",
                description:
                  "Built for speed with real-time sync. Changes appear instantly across all devices.",
              },
              {
                icon: Shield,
                title: "Enterprise Security",
                description:
                  "SOC 2 compliant with end-to-end encryption. Your data stays safe and private.",
              },
              {
                icon: Users,
                title: "Team Collaboration",
                description:
                  "Work together seamlessly with comments, mentions, and shared views.",
              },
              {
                icon: BarChart3,
                title: "Progress Tracking",
                description:
                  "Visual dashboards and reports that give you clarity on project health.",
              },
              {
                icon: Globe,
                title: "Global Access",
                description:
                  "Access from anywhere with cloud-first design. No setup, no installs.",
              },
            ].map((feature, i) => (
              <motion.div key={feature.title} variants={fadeUp}>
                <Card className="h-full border-border/40 bg-card/50 hover:bg-card hover:shadow-lg hover:shadow-primary/[0.04] hover:border-border/80 transition-all duration-300">
                  <CardContent className="p-6 pt-8">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <feature.icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Separator className="max-w-6xl mx-auto" />

      {/* Testimonials */}
      <section id="testimonials" className="py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <motion.div variants={fadeUp}>
              <Badge variant="secondary" className="mb-4">
                Testimonials
              </Badge>
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="text-3xl md:text-4xl font-bold tracking-tight"
            >
              Loved by teams worldwide
            </motion.h2>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="grid md:grid-cols-3 gap-6"
          >
            {[
              {
                name: "Sarah Chen",
                role: "Engineering Lead at Acme",
                quote:
                  "Nexus transformed how our engineering team tracks work. We shipped 40% more features last quarter.",
              },
              {
                name: "Marcus Johnson",
                role: "Product Manager at Globex",
                quote:
                  "The cleanest workspace tool I've used. It just works — no learning curve, just productivity.",
              },
              {
                name: "Elena Rodriguez",
                role: "Design Director at Hooli",
                quote:
                  "Finally a tool that looks as good as the work we put into it. Our design team lives in Nexus.",
              },
            ].map((t) => (
              <motion.div key={t.name} variants={fadeUp}>
                <Card className="h-full border-border/40 bg-card/50">
                  <CardContent className="p-6">
                    <div className="flex gap-1 mb-4">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <Check
                          key={s}
                          className="h-4 w-4 text-primary fill-primary/20"
                        />
                      ))}
                    </div>
                    <p className="text-sm leading-relaxed text-muted-foreground mb-6">
                      "{t.quote}"
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center text-sm font-medium text-primary">
                        {t.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                      <div>
                        <p className="text-sm font-medium">{t.name}</p>
                        <p className="text-xs text-muted-foreground">
                          {t.role}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Separator className="max-w-6xl mx-auto" />

      {/* Pricing */}
      <section id="pricing" className="py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <motion.div variants={fadeUp}>
              <Badge variant="secondary" className="mb-4">
                Pricing
              </Badge>
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="text-3xl md:text-4xl font-bold tracking-tight"
            >
              Simple, transparent pricing
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mt-4 text-lg text-muted-foreground"
            >
              Start free. Upgrade when you're ready.
            </motion.p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto"
          >
            {/* Free */}
            <motion.div variants={fadeUp}>
              <Card className="h-full border-border/40 bg-card/50">
                <CardContent className="p-8">
                  <h3 className="font-semibold text-lg">Free</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Perfect for individuals
                  </p>
                  <div className="mt-6 mb-8">
                    <span className="text-4xl font-bold">$0</span>
                    <span className="text-muted-foreground ml-1">
                      /month
                    </span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {[
                      "3 workspaces",
                      "Unlimited tasks",
                      "Basic views",
                      "Mobile access",
                    ].map((f) => (
                      <li
                        key={f}
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                      >
                        <Check className="h-4 w-4 text-primary shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() =>
                      navigate(isAuthenticated ? "/dashboard" : "/auth")
                    }
                  >
                    Get started
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Pro */}
            <motion.div variants={fadeUp}>
              <Card className="h-full border-primary/20 bg-card shadow-lg shadow-primary/[0.04] relative overflow-hidden">
                <div className="absolute top-0 right-0">
                  <Badge className="rounded-none rounded-bl-lg">
                    Popular
                  </Badge>
                </div>
                <CardContent className="p-8">
                  <h3 className="font-semibold text-lg">Pro</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    For growing teams
                  </p>
                  <div className="mt-6 mb-8">
                    <span className="text-4xl font-bold">$12</span>
                    <span className="text-muted-foreground ml-1">
                      /user/month
                    </span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {[
                      "Unlimited workspaces",
                      "Custom views & filters",
                      "Priority support",
                      "Advanced analytics",
                      "Team management",
                      "API access",
                    ].map((f) => (
                      <li
                        key={f}
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                      >
                        <Check className="h-4 w-4 text-primary shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Button
                    className="w-full"
                    onClick={() =>
                      navigate(isAuthenticated ? "/dashboard" : "/auth")
                    }
                  >
                    Start free trial
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 border-t border-border/40">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Ready to transform your workflow?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
              Join thousands of teams already using Nexus to ship better work,
              faster.
            </p>
            <Button
              size="lg"
              className="mt-8 h-12 px-8 text-base gap-2"
              onClick={() =>
                navigate(isAuthenticated ? "/dashboard" : "/auth")
              }
            >
              Get started for free
              <ArrowRight className="h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40 bg-muted/20">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground text-sm font-bold">
                  N
                </div>
                <span className="text-base font-semibold tracking-tight">
                  Nexus
                </span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Modern workspaces for teams that ship.
              </p>
            </div>
            {[
              {
                title: "Product",
                links: ["Features", "Pricing", "Changelog", "API"],
              },
              {
                title: "Company",
                links: ["About", "Blog", "Careers", "Press"],
              },
              {
                title: "Legal",
                links: ["Privacy", "Terms", "Security", "Contact"],
              },
            ].map((col) => (
              <div key={col.title}>
                <p className="text-sm font-medium mb-4">{col.title}</p>
                <ul className="space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <Separator />
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8">
            <p className="text-xs text-muted-foreground">
              © 2026 Nexus. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              {[
                { icon: MessageSquare, label: "Twitter" },
                { icon: Globe, label: "Website" },
                { icon: Lock, label: "Security" },
              ].map((s) => (
                <a
                  key={s.label}
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
