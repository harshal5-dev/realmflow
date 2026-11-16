import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { cn } from "cn"
import {
  IconArrowRight,
  IconArrowUpRight,
  IconBolt,
  IconBrandGithub,
  IconBrandLinkedin,
  IconCircleCheckFilled,
  IconClockHour4,
  IconCode,
  IconExternalLink,
  IconFolder,
  IconLayoutDashboard,
  IconLayoutKanban,
  IconListCheck,
  IconLock,
  IconMail,
  IconMoon,
  IconPlayerPlay,
  IconServer,
  IconShieldLock,
  IconSparkles,
  IconSun,
  IconTerminal2,
  IconUsers,
} from "@tabler/icons-react"

import { Logo } from "@/components/logo"
import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
} from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { useTheme } from "@/theme"

const PORTFOLIO_LINKS = {
  githubRepo: "https://github.com/harshal5-dev/realmflow",
  githubProfile: "https://github.com/harshal5-dev",
  linkedin: "https://www.linkedin.com/in/harshal5-dev",
  email: "mailto:harshalganbote55@gmail.com",
}

const PREVIEW_TABS = {
  sprint: {
    badge: "Sprint 4 · Active",
    title: "Website Redesign & Go Engine Integration",
    subtitle: "Workspace: Product Core · 12 tasks tracked",
    items: [
      {
        id: "RF-101",
        title: "Design responsive multi-tenant workspace dashboard",
        tag: "Frontend · shadcn/ui",
        priority: "High",
        done: true,
      },
      {
        id: "RF-104",
        title: "Implement JWT authentication & RBAC middleware in Go",
        tag: "Backend · Go",
        priority: "High",
        done: true,
      },
      {
        id: "RF-109",
        title: "Real-time task status sync across project boards",
        tag: "Full-Stack",
        priority: "Medium",
        done: false,
      },
    ],
  },
  architecture: {
    badge: "Go + React Architecture",
    title: "Multi-Tenant Workspace Isolation & RBAC",
    subtitle: "Clean separation of tenants, roles, and project workflows",
    items: [
      {
        id: "ARCH-01",
        title: "Tenant-scoped database queries & workspace boundaries",
        tag: "Isolation",
        priority: "Core",
        done: true,
      },
      {
        id: "ARCH-02",
        title: "Role-Based Access Control (Admin, Maintainer, Member)",
        tag: "Security",
        priority: "Core",
        done: true,
      },
      {
        id: "ARCH-03",
        title: "Modular REST API with fast Go concurrency primitives",
        tag: "Performance",
        priority: "Active",
        done: true,
      },
    ],
  },
}

const PROJECT_FEATURES = [
  {
    icon: IconFolder,
    title: "Workspace Isolation",
    description:
      "Organize multiple teams and projects in isolated workspaces with clean data boundaries.",
  },
  {
    icon: IconLayoutKanban,
    title: "Sprint & Kanban Workflows",
    description:
      "Track tasks from backlog to completion with priorities, due dates, and interactive status updates.",
  },
  {
    icon: IconShieldLock,
    title: "Role-Based Access (RBAC)",
    description:
      "Fine-grained permissions ensuring team members only access and modify authorized resources.",
  },
  {
    icon: IconBolt,
    title: "High-Performance Go Engine",
    description:
      "Designed around a lightweight Go backend engineered for low-latency task workflows.",
  },
  {
    icon: IconUsers,
    title: "Team Collaboration",
    description:
      "Assign owners, monitor team workload, and keep everyone aligned on sprint deliverables.",
  },
  {
    icon: IconCode,
    title: "Modern shadcn/ui Design",
    description:
      "Crafted with React 19, Tailwind CSS v4, and accessible shadcn/ui primitives with dark mode support.",
  },
]

const TECH_STACK = [
  "Go (Golang)",
  "React 19",
  "Vite 8",
  "Tailwind CSS v4",
  "shadcn/ui",
  "React Router",
  "Multi-Tenant RBAC",
  "REST API",
]

export function HomePage() {
  const navigate = useNavigate()
  const { theme, setTheme } = useTheme()
  const [previewTab, setPreviewTab] = useState("sprint")

  const activePreview = PREVIEW_TABS[previewTab]

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <div className="min-h-svh bg-background text-foreground">
      {/* Ambient Background Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute -top-36 left-1/2 size-[520px] -translate-x-1/2 rounded-full bg-primary/12 blur-3xl" />
        <div className="absolute top-1/3 -right-32 size-96 rounded-full bg-primary/8 blur-3xl" />
      </div>

      {/* Sticky Top Navbar */}
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          <Link
            to="/"
            aria-label="RealmFlow Home"
            className="group inline-flex items-center focus-visible:outline-none"
          >
            <Logo />
          </Link>

          <nav
            aria-label="Page sections"
            className="hidden items-center gap-6 text-sm font-medium text-muted-foreground md:flex"
          >
            <a
              href="#features"
              className="transition-colors hover:text-foreground"
            >
              Features
            </a>
            <a
              href="#about"
              className="transition-colors hover:text-foreground"
            >
              About Project
            </a>
            <a
              href="#developer"
              className="transition-colors hover:text-foreground"
            >
              Developer
            </a>
            <a
              href={PORTFOLIO_LINKS.githubRepo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 transition-colors hover:text-foreground"
            >
              GitHub
              <IconArrowUpRight className="size-3.5" />
            </a>
          </nav>

          <div className="flex items-center gap-2">
            <Tooltip>
              <TooltipTrigger
                render={
                  <Button
                    type="button"
                    variant="outline"
                    size="icon-sm"
                    onClick={toggleTheme}
                    aria-label="Toggle color theme"
                  />
                }
              >
                <IconSun className="hidden size-4 dark:block" />
                <IconMoon className="block size-4 dark:hidden" />
              </TooltipTrigger>
              <TooltipContent side="bottom">
                Toggle theme (Shortcut: D)
              </TooltipContent>
            </Tooltip>

            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => navigate("/login")}
              className="text-xs font-medium"
            >
              <IconLock className="size-3.5" />
              Sign In
            </Button>

            <Button
              type="button"
              size="sm"
              onClick={() => navigate("/dashboard")}
              className="text-xs font-semibold shadow-xs"
            >
              <IconLayoutDashboard className="size-3.5" />
              Live Dashboard
            </Button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl space-y-24 px-4 py-12 sm:px-6 md:py-16 lg:px-8">
        {/* Hero Section */}
        <section className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="animate-fade-up space-y-6 lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1 text-xs font-medium text-primary">
              <IconSparkles className="size-3.5" />
              Open-Source Portfolio Project · Go + React
            </div>

            <h1 className="font-heading text-4xl font-bold tracking-tight text-balance sm:text-5xl lg:text-[52px] lg:leading-[1.1]">
              Manage projects &amp; tasks across isolated{" "}
              <span className="text-primary">workspaces.</span>
            </h1>

            <p className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              <strong>RealmFlow</strong> is an open-source, multi-tenant project
              management engine built with Go and React — featuring workspace
              isolation, role-based access control (RBAC), and real-time sprint
              workflows.
            </p>

            {/* Primary Hero CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <Button
                type="button"
                size="lg"
                onClick={() => navigate("/dashboard")}
                className="group font-semibold shadow-sm transition-transform duration-200 hover:-translate-y-0.5"
              >
                <IconPlayerPlay className="size-4 transition-transform duration-200 group-hover:scale-110" />
                Live Dashboard Preview
              </Button>

              <Button
                type="button"
                variant="outline"
                size="lg"
                onClick={() => navigate("/login")}
                className="group font-medium transition-transform duration-200 hover:-translate-y-0.5"
              >
                Try Demo Login
                <IconArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </Button>

              <Button
                variant="ghost"
                size="lg"
                render={
                  <a
                    href={PORTFOLIO_LINKS.githubRepo}
                    target="_blank"
                    rel="noreferrer"
                  />
                }
                nativeButton={false}
                className="font-medium"
              >
                <IconBrandGithub className="size-4.5" />
                GitHub Repo
                <IconExternalLink className="size-3.5 text-muted-foreground" />
              </Button>
            </div>

            {/* Tech Stack Pills */}
            <div className="space-y-2 pt-2">
              <p className="text-xs font-medium tracking-wider text-muted-foreground uppercase">
                Built With Modern Stack
              </p>
              <div className="flex flex-wrap gap-2">
                {TECH_STACK.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-border/70 bg-muted/50 px-3 py-1 text-xs font-medium text-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Live Workspace Preview Card */}
          <div
            className="animate-scale-in lg:col-span-5"
            style={{ animationDelay: "90ms" }}
          >
            <Card className="border border-border/70 bg-card/95 shadow-xl backdrop-blur-sm transition-shadow duration-300 hover:shadow-2xl">
              <CardHeader className="border-b border-border/60 pb-4">
                <div className="flex items-center justify-between gap-2 pb-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/12 px-2.5 py-0.5 text-[11px] font-semibold text-primary">
                    <IconTerminal2 className="size-3.5" />
                    {activePreview.badge}
                  </span>

                  <ButtonGroup className="rounded-3xl bg-muted/70 p-0.5">
                    <Button
                      type="button"
                      size="xs"
                      variant={previewTab === "sprint" ? "default" : "ghost"}
                      onClick={() => setPreviewTab("sprint")}
                    >
                      Sprint Board
                    </Button>
                    <Button
                      type="button"
                      size="xs"
                      variant={
                        previewTab === "architecture" ? "default" : "ghost"
                      }
                      onClick={() => setPreviewTab("architecture")}
                    >
                      Architecture
                    </Button>
                  </ButtonGroup>
                </div>

                <CardTitle className="text-base font-semibold">
                  {activePreview.title}
                </CardTitle>
                <CardDescription className="text-xs">
                  {activePreview.subtitle}
                </CardDescription>
              </CardHeader>

              <CardContent key={previewTab} className="animate-fade-in space-y-2.5 pt-2">
                {activePreview.items.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between gap-3 rounded-2xl border border-border/50 bg-background/60 px-3.5 py-2.5 transition-all duration-200 hover:border-primary/30 hover:bg-background"
                  >
                    <div className="flex min-w-0 items-center gap-2.5">
                      {item.done ? (
                        <IconCircleCheckFilled className="size-4 shrink-0 text-primary" />
                      ) : (
                        <IconClockHour4 className="size-4 shrink-0 text-amber-500" />
                      )}
                      <div className="min-w-0">
                        <p className="truncate text-xs font-medium text-foreground">
                          {item.title}
                        </p>
                        <div className="flex items-center gap-2 text-[11px] text-muted-foreground">
                          <span className="font-mono">{item.id}</span>
                          <span>·</span>
                          <span>{item.tag}</span>
                        </div>
                      </div>
                    </div>
                    <span
                      className={cn(
                        "shrink-0 rounded-full px-2 py-0.5 text-[10px] font-semibold",
                        item.priority === "High"
                          ? "bg-destructive/12 text-destructive"
                          : "bg-primary/12 text-primary"
                      )}
                    >
                      {item.priority}
                    </span>
                  </div>
                ))}
              </CardContent>

              <CardFooter className="flex items-center justify-between border-t border-border/60 bg-muted/25 py-3">
                <div className="flex items-center gap-2">
                  <AvatarGroup>
                    <Avatar size="sm">
                      <AvatarFallback className="bg-primary/15 text-[10px] font-semibold text-primary">
                        HG
                      </AvatarFallback>
                      <AvatarBadge />
                    </Avatar>
                    <Avatar size="sm">
                      <AvatarFallback className="bg-secondary text-[10px] font-semibold text-secondary-foreground">
                        AK
                      </AvatarFallback>
                    </Avatar>
                    <AvatarGroupCount className="text-[10px]">
                      +4
                    </AvatarGroupCount>
                  </AvatarGroup>
                  <span className="text-xs text-muted-foreground">
                    Interactive Demo
                  </span>
                </div>

                <Button
                  type="button"
                  variant="ghost"
                  size="xs"
                  onClick={() => navigate("/dashboard")}
                  className="text-primary"
                >
                  Open App
                  <IconArrowRight className="size-3.5" />
                </Button>
              </CardFooter>
            </Card>
          </div>
        </section>

        {/* Key Features Grid */}
        <section id="features" className="scroll-mt-24 space-y-8">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div className="space-y-2">
              <span className="text-xs font-semibold tracking-wider text-primary uppercase">
                Core Capabilities
              </span>
              <h2 className="font-heading text-2xl font-bold tracking-tight sm:text-3xl">
                Everything needed to run modern project workflows
              </h2>
            </div>
            <p className="max-w-md text-sm text-muted-foreground">
              Designed from the ground up as a full-stack portfolio showcase
              combining clean UI craft with backend systems engineering.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {PROJECT_FEATURES.map((feature) => {
              const IconComponent = feature.icon
              return (
                <Card
                  key={feature.title}
                  size="sm"
                  className="group border border-border/60 bg-card/90 shadow-xs transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md"
                >
                  <CardHeader className="gap-3">
                    <div className="flex size-10 items-center justify-center rounded-2xl bg-primary/12 text-primary transition-transform duration-200 group-hover:scale-105">
                      <IconComponent className="size-5" />
                    </div>
                    <CardTitle className="text-base font-semibold">
                      {feature.title}
                    </CardTitle>
                    <CardDescription className="text-xs leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              )
            })}
          </div>
        </section>

        {/* About the Project & Developer Portfolio Section */}
        <section
          id="about"
          className="scroll-mt-24 grid gap-6 lg:grid-cols-12"
        >
          {/* Left: About RealmFlow Card */}
          <Card className="border border-border/60 bg-card/95 shadow-xs lg:col-span-7">
            <CardHeader className="border-b border-border/60 pb-4">
              <div className="flex items-center gap-2 text-xs font-semibold text-primary">
                <IconServer className="size-4" />
                About This Portfolio Project
              </div>
              <CardTitle className="mt-1 font-heading text-2xl font-bold tracking-tight">
                Why I Built RealmFlow
              </CardTitle>
              <CardDescription className="text-xs">
                Full-stack architecture &amp; product engineering showcase
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-4 pt-2 text-sm leading-relaxed text-muted-foreground">
              <p>
                <strong className="text-foreground">RealmFlow</strong> was
                created to explore how modern SaaS project management tools
                handle{" "}
                <span className="font-medium text-foreground">
                  multi-tenant workspace isolation
                </span>
                ,{" "}
                <span className="font-medium text-foreground">
                  role-based access control (RBAC)
                </span>
                , and fast task execution workflows without sacrificing a clean,
                responsive user interface.
              </p>
              <p>
                The backend engine is architected in{" "}
                <strong className="text-foreground">Go (Golang)</strong> for
                predictable performance and strict tenant boundaries, while the
                frontend is built with{" "}
                <strong className="text-foreground">
                  React 19, Vite, Tailwind CSS v4, and shadcn/ui
                </strong>{" "}
                to deliver an intuitive, keyboard-friendly workspace experience.
              </p>

              <div className="grid gap-3 pt-2 sm:grid-cols-3">
                <div className="rounded-2xl border border-border/60 bg-muted/30 p-3.5">
                  <p className="font-heading text-lg font-bold text-foreground">
                    Multi-Tenant
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Isolated workspaces &amp; project boards
                  </p>
                </div>
                <div className="rounded-2xl border border-border/60 bg-muted/30 p-3.5">
                  <p className="font-heading text-lg font-bold text-foreground">
                    RBAC Security
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Scoped permissions per team role
                  </p>
                </div>
                <div className="rounded-2xl border border-border/60 bg-muted/30 p-3.5">
                  <p className="font-heading text-lg font-bold text-foreground">
                    Open Source
                  </p>
                  <p className="text-xs text-muted-foreground">
                    MIT licensed on GitHub
                  </p>
                </div>
              </div>
            </CardContent>

            <CardFooter className="flex flex-wrap items-center gap-3 border-t border-border/60 bg-muted/25 py-3.5">
              <Button
                type="button"
                size="sm"
                onClick={() => navigate("/dashboard")}
              >
                <IconLayoutDashboard className="size-4" />
                Launch Live Dashboard
              </Button>
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => navigate("/login")}
              >
                <IconListCheck className="size-4" />
                View Login Page
              </Button>
            </CardFooter>
          </Card>

          {/* Right: Developer Profile & Social Links Card */}
          <Card
            id="developer"
            className="scroll-mt-24 border border-border/60 bg-card/95 shadow-xs lg:col-span-5"
          >
            <CardHeader className="border-b border-border/60 pb-4">
              <div className="flex items-center gap-3">
                <Avatar size="lg">
                  <AvatarFallback className="bg-primary text-sm font-bold text-primary-foreground">
                    HG
                  </AvatarFallback>
                  <AvatarBadge />
                </Avatar>
                <div>
                  <CardTitle className="font-heading text-lg font-bold">
                    Harshal D Ganbote
                  </CardTitle>
                  <CardDescription className="text-xs">
                    Full-Stack Developer · Go &amp; React
                  </CardDescription>
                </div>
              </div>
              <CardAction>
                <span className="rounded-full bg-primary/12 px-2.5 py-1 text-[11px] font-semibold text-primary">
                  Creator
                </span>
              </CardAction>
            </CardHeader>

            <CardContent className="space-y-4 pt-2">
              <p className="text-xs leading-relaxed text-muted-foreground">
                Passionate about building scalable backend systems in Go and
                crafting polished, accessible web applications with modern React
                and TypeScript/JavaScript ecosystems.
              </p>

              <div className="space-y-2">
                <a
                  href={PORTFOLIO_LINKS.githubRepo}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between rounded-2xl border border-border/60 bg-background/70 px-3.5 py-2.5 text-xs font-medium transition-colors hover:border-primary/40 hover:bg-muted/50"
                >
                  <span className="flex items-center gap-2.5">
                    <IconBrandGithub className="size-4 text-primary" />
                    <span>Project Repository (harshal5-dev/realmflow)</span>
                  </span>
                  <IconArrowUpRight className="size-4 text-muted-foreground" />
                </a>

                <a
                  href={PORTFOLIO_LINKS.githubProfile}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between rounded-2xl border border-border/60 bg-background/70 px-3.5 py-2.5 text-xs font-medium transition-colors hover:border-primary/40 hover:bg-muted/50"
                >
                  <span className="flex items-center gap-2.5">
                    <IconBrandGithub className="size-4 text-foreground" />
                    <span>GitHub Profile (@harshal5-dev)</span>
                  </span>
                  <IconArrowUpRight className="size-4 text-muted-foreground" />
                </a>

                <a
                  href={PORTFOLIO_LINKS.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between rounded-2xl border border-border/60 bg-background/70 px-3.5 py-2.5 text-xs font-medium transition-colors hover:border-primary/40 hover:bg-muted/50"
                >
                  <span className="flex items-center gap-2.5">
                    <IconBrandLinkedin className="size-4 text-primary" />
                    <span>LinkedIn Profile</span>
                  </span>
                  <IconArrowUpRight className="size-4 text-muted-foreground" />
                </a>

                <a
                  href={PORTFOLIO_LINKS.email}
                  className="flex items-center justify-between rounded-2xl border border-border/60 bg-background/70 px-3.5 py-2.5 text-xs font-medium transition-colors hover:border-primary/40 hover:bg-muted/50"
                >
                  <span className="flex items-center gap-2.5">
                    <IconMail className="size-4 text-primary" />
                    <span>harshalganbote55@gmail.com</span>
                  </span>
                  <IconArrowUpRight className="size-4 text-muted-foreground" />
                </a>
              </div>
            </CardContent>

            <CardFooter className="flex items-center justify-between border-t border-border/60 bg-muted/25 py-3 text-xs text-muted-foreground">
              <span>Available for opportunities &amp; collaboration</span>
              <a
                href={PORTFOLIO_LINKS.githubProfile}
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-primary hover:underline"
              >
                Follow on GitHub
              </a>
            </CardFooter>
          </Card>
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-16 border-t border-border/60 bg-muted/20">
        <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <Logo subtitle="Open-Source Project & Task Management" />

            <div className="flex flex-wrap items-center gap-5 text-xs font-medium text-muted-foreground">
              <Link to="/" className="hover:text-foreground">
                Home
              </Link>
              <Link to="/dashboard" className="hover:text-foreground">
                Live Dashboard
              </Link>
              <Link to="/login" className="hover:text-foreground">
                Login Page
              </Link>
              <a
                href={PORTFOLIO_LINKS.githubRepo}
                target="_blank"
                rel="noreferrer"
                className="hover:text-foreground"
              >
                GitHub Repo
              </a>
              <a
                href={PORTFOLIO_LINKS.linkedin}
                target="_blank"
                rel="noreferrer"
                className="hover:text-foreground"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <Separator className="my-5 bg-border/60" />

          <div className="flex flex-col justify-between gap-2 text-xs text-muted-foreground sm:flex-row">
            <span>
              © {new Date().getFullYear()} RealmFlow · Built by Harshal D
              Ganbote
            </span>
            <span>React 19 · Tailwind CSS v4 · shadcn/ui · Go</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
