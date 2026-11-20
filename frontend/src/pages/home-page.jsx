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
  IconMenu2,
  IconMoon,
  IconPlayerPlay,
  IconServer,
  IconShieldLock,
  IconSparkles,
  IconSun,
  IconTerminal2,
  IconUsers,
  IconX,
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

const NAV_SECTIONS = [
  { id: "hero", label: "Overview" },
  { id: "preview", label: "Live Preview" },
  { id: "features", label: "Features" },
  { id: "about", label: "About" },
  { id: "developer", label: "Developer" },
]

const PREVIEW_TABS = {
  sprint: {
    badge: "Sprint 4 · Active",
    title: "Website Redesign & Go Engine Integration",
    subtitle: "Workspace: Product Core · 12 tasks tracked",
    metrics: [
      { label: "Active Tasks", value: "18" },
      { label: "Completed", value: "92%" },
      { label: "Team Members", value: "6" },
    ],
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
    metrics: [
      { label: "Isolation", value: "Per-Tenant" },
      { label: "Auth Model", value: "JWT + RBAC" },
      { label: "Engine", value: "Go 1.23" },
    ],
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
  const [activeSection, setActiveSection] = useState("hero")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const activePreview = PREVIEW_TABS[previewTab]

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId)
    setMobileMenuOpen(false)
    if (sectionId === "hero") {
      window.scrollTo({ top: 0, behavior: "smooth" })
      return
    }
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <div className="min-h-svh w-full overflow-x-hidden bg-background text-foreground">
      {/* Ambient Background Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute -top-36 left-1/2 size-96 -translate-x-1/2 rounded-full bg-primary/12 blur-3xl sm:size-130" />
        <div className="absolute top-1/3 -right-32 size-80 rounded-full bg-primary/8 blur-3xl" />
      </div>

      {/* Sticky Top Navbar with Pill Menu & Mobile Drawer */}
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
          {/* Brand Logo (Compact on Mobile, Full on sm+) */}
          <Link
            to="/"
            onClick={() => scrollToSection("hero")}
            aria-label="RealmFlow Home"
            className="group inline-flex shrink-0 items-center focus-visible:outline-none"
          >
            <Logo className="hidden sm:inline-flex" />
            <Logo showSubtitle={false} className="sm:hidden" />
          </Link>

          {/* Desktop Floating Pill Navigation */}
          <nav
            aria-label="Primary navigation"
            className="hidden items-center gap-1 rounded-full border border-border/70 bg-muted/45 p-1 shadow-2xs backdrop-blur-md md:flex"
          >
            {NAV_SECTIONS.map((item) => {
              const isActive = activeSection === item.id
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => scrollToSection(item.id)}
                  className={cn(
                    "rounded-full px-3.5 py-1.5 text-xs font-medium transition-all duration-200",
                    isActive
                      ? "bg-primary text-primary-foreground shadow-xs"
                      : "text-muted-foreground hover:bg-background/70 hover:text-foreground"
                  )}
                >
                  {item.label}
                </button>
              )
            })}
          </nav>

          {/* Right Header Actions */}
          <div className="flex items-center gap-2">
            {/* GitHub Icon Button (Desktop/Tablet) */}
            <Tooltip>
              <TooltipTrigger
                render={
                  <Button
                    variant="ghost"
                    size="icon-sm"
                    nativeButton={false}
                    render={
                      <a
                        href={PORTFOLIO_LINKS.githubRepo}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="View GitHub Repository"
                      />
                    }
                    className="hidden sm:inline-flex"
                  />
                }
              >
                <IconBrandGithub className="size-4.5" />
              </TooltipTrigger>
              <TooltipContent side="bottom">GitHub Repository</TooltipContent>
            </Tooltip>

            {/* Theme Toggle Button */}
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

            {/* Desktop Auth & Dashboard Buttons */}
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => navigate("/login")}
              className="hidden text-xs font-medium sm:inline-flex"
            >
              <IconLock className="size-3.5" />
              Sign In
            </Button>

            <Button
              type="button"
              size="sm"
              onClick={() => navigate("/dashboard")}
              className="hidden text-xs font-semibold shadow-xs sm:inline-flex"
            >
              <IconLayoutDashboard className="size-3.5" />
              Dashboard
            </Button>

            {/* Mobile Hamburger Menu Button */}
            <Button
              type="button"
              variant="outline"
              size="icon-sm"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="md:hidden"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <IconX className="size-4" />
              ) : (
                <IconMenu2 className="size-4" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Dropdown Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="animate-fade-in border-t border-border/60 bg-background/95 px-4 pt-3 pb-5 shadow-xl backdrop-blur-xl md:hidden">
            <nav
              aria-label="Mobile navigation"
              className="flex flex-col gap-1"
            >
              {NAV_SECTIONS.map((item) => {
                const isActive = activeSection === item.id
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => scrollToSection(item.id)}
                    className={cn(
                      "flex w-full items-center justify-between rounded-2xl px-3.5 py-2.5 text-left text-sm font-medium transition-colors",
                      isActive
                        ? "bg-primary/12 text-primary font-semibold"
                        : "text-foreground/85 hover:bg-muted"
                    )}
                  >
                    <span>{item.label}</span>
                    <IconArrowRight className="size-4 text-muted-foreground" />
                  </button>
                )
              })}
            </nav>

            <Separator className="my-3.5 bg-border/60" />

            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              <Button
                type="button"
                size="default"
                onClick={() => {
                  setMobileMenuOpen(false)
                  navigate("/dashboard")
                }}
                className="w-full font-semibold"
              >
                <IconLayoutDashboard className="size-4" />
                Open Live Dashboard
              </Button>

              <Button
                type="button"
                variant="outline"
                size="default"
                onClick={() => {
                  setMobileMenuOpen(false)
                  navigate("/login")
                }}
                className="w-full font-medium"
              >
                <IconLock className="size-4" />
                Sign In / Demo Login
              </Button>

              <Button
                variant="ghost"
                size="sm"
                nativeButton={false}
                render={
                  <a
                    href={PORTFOLIO_LINKS.githubRepo}
                    target="_blank"
                    rel="noreferrer"
                  />
                }
                className="w-full justify-center text-xs text-muted-foreground"
              >
                <IconBrandGithub className="size-4" />
                View Source on GitHub
                <IconExternalLink className="size-3.5" />
              </Button>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-6xl space-y-16 px-4 py-8 sm:space-y-24 sm:px-6 sm:py-14 lg:px-8">
        {/* Hero Section */}
        <section
          id="hero"
          className="animate-fade-up mx-auto flex max-w-3xl flex-col items-center text-center"
        >
          <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1 text-xs font-medium text-primary">
            <IconSparkles className="size-3.5 shrink-0" />
            <span className="truncate">
              Open-Source Portfolio Project · Go + React 19
            </span>
          </div>

          <h1 className="mt-5 font-heading text-3xl leading-[1.15] font-bold tracking-tight text-balance sm:text-5xl lg:text-6xl">
            Manage projects &amp; tasks across isolated{" "}
            <span className="text-primary">workspaces.</span>
          </h1>

          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base md:text-lg">
            <strong className="font-semibold text-foreground">RealmFlow</strong>{" "}
            is an open-source, multi-tenant project management engine built with
            Go and React — featuring workspace isolation, role-based access
            control (RBAC), and real-time sprint workflows.
          </p>

          {/* Primary Hero CTAs (Full width on mobile, inline on sm+) */}
          <div className="mt-7 flex w-full flex-col items-stretch justify-center gap-3 sm:w-auto sm:flex-row sm:items-center">
            <Button
              type="button"
              size="lg"
              onClick={() => navigate("/dashboard")}
              className="group w-full font-semibold shadow-sm transition-transform duration-200 hover:-translate-y-0.5 sm:w-auto"
            >
              <IconPlayerPlay className="size-4 transition-transform duration-200 group-hover:scale-110" />
              Live Dashboard Preview
            </Button>

            <Button
              type="button"
              variant="outline"
              size="lg"
              onClick={() => navigate("/login")}
              className="group w-full font-medium transition-transform duration-200 hover:-translate-y-0.5 sm:w-auto"
            >
              Try Demo Login
              <IconArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </Button>

            <Button
              variant="ghost"
              size="lg"
              nativeButton={false}
              render={
                <a
                  href={PORTFOLIO_LINKS.githubRepo}
                  target="_blank"
                  rel="noreferrer"
                />
              }
              className="w-full font-medium sm:w-auto"
            >
              <IconBrandGithub className="size-4.5" />
              GitHub Repo
              <IconExternalLink className="size-3.5 text-muted-foreground" />
            </Button>
          </div>

          {/* Tech Stack Pills */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {TECH_STACK.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-border/70 bg-muted/45 px-3 py-1 text-xs font-medium text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Interactive Workspace Preview Section */}
        <section
          id="preview"
          className="animate-scale-in scroll-mt-24"
          style={{ animationDelay: "90ms" }}
        >
          <Card className="mx-auto max-w-4xl border border-border/70 bg-card/95 shadow-xl backdrop-blur-sm">
            {/* Browser-style Top Bar */}
            <CardHeader className="gap-4 border-b border-border/60 pb-4">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5">
                    <span className="size-2.5 rounded-full bg-rose-500/80" />
                    <span className="size-2.5 rounded-full bg-amber-500/80" />
                    <span className="size-2.5 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="ml-1 inline-flex items-center gap-1.5 rounded-full bg-primary/12 px-2.5 py-0.5 text-[11px] font-semibold text-primary">
                    <IconTerminal2 className="size-3.5 shrink-0" />
                    {activePreview.badge}
                  </span>
                </div>

                <ButtonGroup className="w-full rounded-3xl bg-muted/70 p-0.5 sm:w-auto">
                  <Button
                    type="button"
                    size="xs"
                    variant={previewTab === "sprint" ? "default" : "ghost"}
                    onClick={() => setPreviewTab("sprint")}
                    className="flex-1 sm:flex-initial"
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
                    className="flex-1 sm:flex-initial"
                  >
                    Architecture
                  </Button>
                </ButtonGroup>
              </div>

              <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
                <div className="min-w-0">
                  <CardTitle className="text-base font-semibold sm:text-lg">
                    {activePreview.title}
                  </CardTitle>
                  <CardDescription className="text-xs">
                    {activePreview.subtitle}
                  </CardDescription>
                </div>

                {/* Mini Metric Strip */}
                <div className="grid grid-cols-3 gap-2 rounded-2xl border border-border/60 bg-muted/30 px-3 py-1.5 text-center">
                  {activePreview.metrics.map((metric) => (
                    <div key={metric.label} className="px-1">
                      <p className="font-heading text-xs font-bold text-foreground sm:text-sm">
                        {metric.value}
                      </p>
                      <p className="text-[10px] text-muted-foreground">
                        {metric.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </CardHeader>

            <CardContent
              key={previewTab}
              className="animate-fade-in space-y-2.5 pt-2"
            >
              {activePreview.items.map((item) => (
                <div
                  key={item.id}
                  className="flex items-start justify-between gap-3 rounded-2xl border border-border/50 bg-background/60 p-3 transition-all duration-200 hover:border-primary/30 hover:bg-background sm:items-center sm:px-4"
                >
                  <div className="flex min-w-0 flex-1 items-start gap-2.5 sm:items-center">
                    {item.done ? (
                      <IconCircleCheckFilled className="mt-0.5 size-4 shrink-0 text-primary sm:mt-0" />
                    ) : (
                      <IconClockHour4 className="mt-0.5 size-4 shrink-0 text-amber-500 sm:mt-0" />
                    )}
                    <div className="min-w-0 flex-1">
                      <p className="text-xs font-medium wrap-break-word text-foreground sm:truncate sm:text-sm">
                        {item.title}
                      </p>
                      <div className="mt-0.5 flex flex-wrap items-center gap-x-2 gap-y-0.5 text-[11px] text-muted-foreground">
                        <span className="font-mono">{item.id}</span>
                        <span>·</span>
                        <span>{item.tag}</span>
                      </div>
                    </div>
                  </div>

                  <span
                    className={cn(
                      "shrink-0 rounded-full px-2.5 py-0.5 text-[10px] font-semibold",
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

            <CardFooter className="flex flex-wrap items-center justify-between gap-3 border-t border-border/60 bg-muted/25 py-3">
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
                  Interactive Demo Workspace
                </span>
              </div>

              <Button
                type="button"
                variant="outline"
                size="xs"
                onClick={() => navigate("/dashboard")}
                className="text-primary"
              >
                Launch Full Dashboard
                <IconArrowRight className="size-3.5" />
              </Button>
            </CardFooter>
          </Card>
        </section>

        {/* Key Features Grid */}
        <section id="features" className="scroll-mt-24 space-y-8">
          <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <div className="space-y-1.5">
              <span className="text-xs font-semibold tracking-wider text-primary uppercase">
                Core Capabilities
              </span>
              <h2 className="font-heading text-2xl font-bold tracking-tight sm:text-3xl">
                Everything needed to run modern project workflows
              </h2>
            </div>
            <p className="max-w-md text-xs leading-relaxed text-muted-foreground sm:text-sm">
              Designed from the ground up as a full-stack portfolio showcase
              combining clean UI craft with backend systems engineering.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
          <Card className="min-w-0 border border-border/60 bg-card/95 shadow-xs lg:col-span-7">
            <CardHeader className="border-b border-border/60 pb-4">
              <div className="flex items-center gap-2 text-xs font-semibold text-primary">
                <IconServer className="size-4 shrink-0" />
                About This Portfolio Project
              </div>
              <CardTitle className="mt-1 font-heading text-xl font-bold tracking-tight sm:text-2xl">
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
                  <p className="font-heading text-base font-bold text-foreground sm:text-lg">
                    Multi-Tenant
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Isolated workspaces &amp; project boards
                  </p>
                </div>
                <div className="rounded-2xl border border-border/60 bg-muted/30 p-3.5">
                  <p className="font-heading text-base font-bold text-foreground sm:text-lg">
                    RBAC Security
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Scoped permissions per team role
                  </p>
                </div>
                <div className="rounded-2xl border border-border/60 bg-muted/30 p-3.5">
                  <p className="font-heading text-base font-bold text-foreground sm:text-lg">
                    Open Source
                  </p>
                  <p className="text-xs text-muted-foreground">
                    MIT licensed on GitHub
                  </p>
                </div>
              </div>
            </CardContent>

            <CardFooter className="flex flex-wrap items-center gap-2.5 border-t border-border/60 bg-muted/25 py-3.5">
              <Button
                type="button"
                size="sm"
                onClick={() => navigate("/dashboard")}
                className="flex-1 sm:flex-initial"
              >
                <IconLayoutDashboard className="size-4" />
                Launch Live Dashboard
              </Button>
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => navigate("/login")}
                className="flex-1 sm:flex-initial"
              >
                <IconListCheck className="size-4" />
                View Login Page
              </Button>
            </CardFooter>
          </Card>

          {/* Right: Developer Profile & Social Links Card */}
          <Card
            id="developer"
            className="min-w-0 scroll-mt-24 border border-border/60 bg-card/95 shadow-xs lg:col-span-5"
          >
            <CardHeader className="border-b border-border/60 pb-4">
              <div className="flex items-center gap-3">
                <Avatar size="lg">
                  <AvatarFallback className="bg-primary text-sm font-bold text-primary-foreground">
                    HG
                  </AvatarFallback>
                  <AvatarBadge />
                </Avatar>
                <div className="min-w-0">
                  <CardTitle className="truncate font-heading text-base font-bold sm:text-lg">
                    Harshal D Ganbote
                  </CardTitle>
                  <CardDescription className="truncate text-xs">
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
                  className="flex items-center justify-between gap-2 rounded-2xl border border-border/60 bg-background/70 px-3.5 py-2.5 text-xs font-medium transition-colors hover:border-primary/40 hover:bg-muted/50"
                >
                  <span className="flex min-w-0 items-center gap-2.5">
                    <IconBrandGithub className="size-4 shrink-0 text-primary" />
                    <span className="truncate">
                      GitHub Repo (harshal5-dev/realmflow)
                    </span>
                  </span>
                  <IconArrowUpRight className="size-4 shrink-0 text-muted-foreground" />
                </a>

                <a
                  href={PORTFOLIO_LINKS.githubProfile}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between gap-2 rounded-2xl border border-border/60 bg-background/70 px-3.5 py-2.5 text-xs font-medium transition-colors hover:border-primary/40 hover:bg-muted/50"
                >
                  <span className="flex min-w-0 items-center gap-2.5">
                    <IconBrandGithub className="size-4 shrink-0 text-foreground" />
                    <span className="truncate">
                      GitHub Profile (@harshal5-dev)
                    </span>
                  </span>
                  <IconArrowUpRight className="size-4 shrink-0 text-muted-foreground" />
                </a>

                <a
                  href={PORTFOLIO_LINKS.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between gap-2 rounded-2xl border border-border/60 bg-background/70 px-3.5 py-2.5 text-xs font-medium transition-colors hover:border-primary/40 hover:bg-muted/50"
                >
                  <span className="flex min-w-0 items-center gap-2.5">
                    <IconBrandLinkedin className="size-4 shrink-0 text-primary" />
                    <span className="truncate">LinkedIn Profile</span>
                  </span>
                  <IconArrowUpRight className="size-4 shrink-0 text-muted-foreground" />
                </a>

                <a
                  href={PORTFOLIO_LINKS.email}
                  className="flex items-center justify-between gap-2 rounded-2xl border border-border/60 bg-background/70 px-3.5 py-2.5 text-xs font-medium transition-colors hover:border-primary/40 hover:bg-muted/50"
                >
                  <span className="flex min-w-0 items-center gap-2.5">
                    <IconMail className="size-4 shrink-0 text-primary" />
                    <span className="truncate">harshalganbote55@gmail.com</span>
                  </span>
                  <IconArrowUpRight className="size-4 shrink-0 text-muted-foreground" />
                </a>
              </div>
            </CardContent>

            <CardFooter className="flex flex-wrap items-center justify-between gap-2 border-t border-border/60 bg-muted/25 py-3 text-xs text-muted-foreground">
              <span>Available for opportunities</span>
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
      <footer className="mt-12 border-t border-border/60 bg-muted/20 sm:mt-16">
        <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <Logo subtitle="Open-Source Project & Task Management" />

            <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-muted-foreground sm:gap-5">
              <button
                type="button"
                onClick={() => scrollToSection("hero")}
                className="hover:text-foreground"
              >
                Overview
              </button>
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
