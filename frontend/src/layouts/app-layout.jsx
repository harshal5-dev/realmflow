import { useState } from "react"
import { Link, NavLink, Outlet, useLocation, useNavigate } from "react-router-dom"
import { cn } from "cn"
import { toast } from "sonner"
import {
  IconBell,
  IconCalendarEvent,
  IconFolder,
  IconLayoutDashboard,
  IconLayoutKanban,
  IconLayoutSidebarLeftCollapse,
  IconLayoutSidebarLeftExpand,
  IconListCheck,
  IconLogout,
  IconMenu2,
  IconMoon,
  IconPlus,
  IconSearch,
  IconSettings,
  IconSun,
  IconUsers,
  IconX,
} from "@tabler/icons-react"

import { Logo, LogoMark } from "@/components/logo"
import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
} from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { useTheme } from "@/theme"

const NAV_ITEMS = [
  {
    title: "Dashboard",
    href: "/",
    icon: IconLayoutDashboard,
  },
  {
    title: "Projects",
    href: "/projects",
    icon: IconFolder,
    badge: "4",
  },
  {
    title: "My Tasks",
    href: "/tasks",
    icon: IconListCheck,
    badge: "8",
  },
  {
    title: "Kanban Board",
    href: "/board",
    icon: IconLayoutKanban,
  },
  {
    title: "Calendar",
    href: "/calendar",
    icon: IconCalendarEvent,
  },
  {
    title: "Team",
    href: "/team",
    icon: IconUsers,
  },
]

const PINNED_PROJECTS = [
  { name: "Website Redesign", color: "bg-amber-500", tasks: "12 tasks" },
  { name: "Mobile App v2.0", color: "bg-emerald-500", tasks: "8 tasks" },
  { name: "API Gateway", color: "bg-sky-500", tasks: "5 tasks" },
]

const NOTIFICATIONS = [
  {
    id: 1,
    title: "Sprint 4 milestone reached",
    time: "10m ago",
    detail: "Website Redesign reached 75% task completion.",
  },
  {
    id: 2,
    title: "New task assigned to you",
    time: "1h ago",
    detail: "TASK-29: Finalize dark mode token contrast.",
  },
  {
    id: 3,
    title: "Comment on API Gateway",
    time: "3h ago",
    detail: "Aarav left feedback on the endpoint schema.",
  },
]

const ROUTE_TITLES = {
  "/": "Dashboard",
  "/projects": "Projects",
  "/tasks": "My Tasks",
  "/board": "Kanban Board",
  "/calendar": "Calendar",
  "/team": "Team Members",
  "/settings": "Settings",
}

export function AppLayout() {
  const { theme, setTheme } = useTheme()
  const location = useLocation()
  const navigate = useNavigate()

  const [isCollapsed, setIsCollapsed] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [workspace, setWorkspace] = useState("product-core")
  const [searchQuery, setSearchQuery] = useState("")

  const currentTitle = ROUTE_TITLES[location.pathname] ?? "Dashboard"

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  const handleSignOut = () => {
    toast("Signed out", {
      description: "You have been redirected to the login page.",
    })
    navigate("/login")
  }

  return (
    <div className="flex min-h-svh w-full bg-background text-foreground">
      {/* Mobile Backdrop */}
      {mobileOpen && (
        <div
          aria-hidden="true"
          onClick={() => setMobileOpen(false)}
          className="fixed inset-0 z-40 bg-foreground/25 backdrop-blur-xs lg:hidden"
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-50 flex flex-col border-r border-sidebar-border bg-sidebar text-sidebar-foreground transition-all duration-200 lg:static lg:z-auto",
          isCollapsed ? "lg:w-[76px]" : "lg:w-64",
          mobileOpen
            ? "w-64 translate-x-0 shadow-2xl"
            : "-translate-x-full lg:translate-x-0"
        )}
      >
        {/* Sidebar Top Brand Bar */}
        <div
          className={cn(
            "flex h-16 items-center border-b border-sidebar-border px-4",
            isCollapsed ? "justify-center" : "justify-between"
          )}
        >
          <Link
            to="/"
            onClick={() => setMobileOpen(false)}
            className="group flex items-center gap-2.5 focus-visible:outline-none"
          >
            {isCollapsed ? (
              <LogoMark className="size-9" />
            ) : (
              <Logo subtitle="Workspace Console" />
            )}
          </Link>

          <Button
            type="button"
            variant="ghost"
            size="icon-xs"
            onClick={() => setMobileOpen(false)}
            className="lg:hidden"
            aria-label="Close sidebar"
          >
            <IconX className="size-4" />
          </Button>
        </div>

        {/* Workspace Switcher */}
        {!isCollapsed && (
          <div className="px-3.5 pt-3.5 pb-1">
            <Select
              value={workspace}
              onValueChange={(val) => val && setWorkspace(val)}
            >
              <SelectTrigger className="h-9 w-full border-sidebar-border bg-sidebar-accent/60 px-3 text-xs font-medium">
                <SelectValue placeholder="Select workspace">
                  {workspace === "product-core"
                    ? "Product Team"
                    : workspace === "design-sys"
                      ? "Design System"
                      : "Personal Tasks"}
                </SelectValue>
              </SelectTrigger>
              <SelectContent alignItemWithTrigger={false}>
                <SelectGroup>
                  <SelectLabel>Workspaces</SelectLabel>
                  <SelectItem value="product-core">Product Team</SelectItem>
                  <SelectItem value="design-sys">Design System</SelectItem>
                  <SelectItem value="personal">Personal Tasks</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        )}

        {/* Primary Navigation */}
        <div className="flex-1 space-y-6 overflow-y-auto px-3 py-4">
          <nav className="space-y-1" aria-label="Main navigation">
            {!isCollapsed && (
              <p className="px-2.5 pb-1.5 text-[11px] font-semibold tracking-wider text-muted-foreground uppercase">
                Overview
              </p>
            )}
            {NAV_ITEMS.map((item) => {
              const IconComponent = item.icon
              return (
                <NavLink
                  key={item.href}
                  to={item.href}
                  end={item.href === "/"}
                  onClick={() => setMobileOpen(false)}
                  className={({ isActive }) =>
                    cn(
                      "group flex items-center gap-3 rounded-2xl px-3 py-2 text-sm font-medium transition-colors",
                      isCollapsed && "justify-center px-2",
                      isActive
                        ? "bg-primary text-primary-foreground shadow-xs"
                        : "text-sidebar-foreground/80 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                    )
                  }
                >
                  <IconComponent className="size-4.5 shrink-0" />
                  {!isCollapsed && (
                    <>
                      <span className="flex-1 truncate">{item.title}</span>
                      {item.badge && (
                        <span className="rounded-full bg-background/60 px-2 py-0.5 text-[11px] font-semibold text-foreground">
                          {item.badge}
                        </span>
                      )}
                    </>
                  )}
                </NavLink>
              )
            })}
          </nav>

          {/* Pinned Projects Section */}
          {!isCollapsed && (
            <div className="space-y-2">
              <Separator className="bg-sidebar-border" />
              <div className="flex items-center justify-between px-2.5 pt-2">
                <p className="text-[11px] font-semibold tracking-wider text-muted-foreground uppercase">
                  Active Projects
                </p>
                <button
                  type="button"
                  onClick={() =>
                    toast("Create project", {
                      description: "New project modal coming soon.",
                    })
                  }
                  className="text-muted-foreground transition-colors hover:text-foreground"
                  aria-label="Create project"
                >
                  <IconPlus className="size-3.5" />
                </button>
              </div>

              <div className="space-y-1">
                {PINNED_PROJECTS.map((project) => (
                  <button
                    key={project.name}
                    type="button"
                    onClick={() => {
                      navigate("/projects")
                      setMobileOpen(false)
                    }}
                    className="flex w-full items-center justify-between rounded-2xl px-3 py-2 text-left text-xs font-medium text-sidebar-foreground/80 transition-colors hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                  >
                    <span className="flex items-center gap-2.5 truncate">
                      <span
                        className={cn(
                          "size-2 shrink-0 rounded-full",
                          project.color
                        )}
                      />
                      <span className="truncate">{project.name}</span>
                    </span>
                    <span className="text-[11px] text-muted-foreground">
                      {project.tasks}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Sidebar Bottom User Profile & Sign Out */}
        <div className="border-t border-sidebar-border p-3">
          <div
            className={cn(
              "flex items-center gap-2.5 rounded-2xl bg-sidebar-accent/50 p-2",
              isCollapsed && "justify-center"
            )}
          >
            <Avatar size="default">
              <AvatarFallback className="bg-primary text-xs font-bold text-primary-foreground">
                SH
              </AvatarFallback>
              <AvatarBadge />
            </Avatar>

            {!isCollapsed && (
              <div className="min-w-0 flex-1">
                <p className="truncate text-xs font-semibold text-sidebar-foreground">
                  Shraddha H.
                </p>
                <p className="truncate text-[11px] text-muted-foreground">
                  shraddha@realmflow.app
                </p>
              </div>
            )}

            {!isCollapsed && (
              <div className="flex items-center gap-0.5">
                <Tooltip>
                  <TooltipTrigger
                    render={
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon-xs"
                        onClick={() => navigate("/settings")}
                        aria-label="Workspace settings"
                      />
                    }
                  >
                    <IconSettings className="size-4 text-muted-foreground" />
                  </TooltipTrigger>
                  <TooltipContent side="top">Settings</TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger
                    render={
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon-xs"
                        onClick={handleSignOut}
                        aria-label="Sign out"
                      />
                    }
                  >
                    <IconLogout className="size-4 text-muted-foreground" />
                  </TooltipTrigger>
                  <TooltipContent side="top">Sign out to Login</TooltipContent>
                </Tooltip>
              </div>
            )}
          </div>
        </div>
      </aside>

      {/* Right Column: Top Header + Main Content */}
      <div className="flex min-w-0 flex-1 flex-col">
        {/* Sticky Top Header */}
        <header className="sticky top-0 z-30 flex h-16 items-center justify-between gap-4 border-b border-border/60 bg-background/85 px-4 backdrop-blur-md sm:px-6 lg:px-8">
          <div className="flex items-center gap-2.5">
            {/* Mobile drawer button */}
            <Button
              type="button"
              variant="outline"
              size="icon-sm"
              onClick={() => setMobileOpen(true)}
              className="lg:hidden"
              aria-label="Open navigation menu"
            >
              <IconMenu2 className="size-4" />
            </Button>

            {/* Desktop collapse button */}
            <Tooltip>
              <TooltipTrigger
                render={
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon-sm"
                    onClick={() => setIsCollapsed((prev) => !prev)}
                    className="hidden lg:inline-flex"
                    aria-label={
                      isCollapsed ? "Expand sidebar" : "Collapse sidebar"
                    }
                  />
                }
              >
                {isCollapsed ? (
                  <IconLayoutSidebarLeftExpand className="size-4.5" />
                ) : (
                  <IconLayoutSidebarLeftCollapse className="size-4.5" />
                )}
              </TooltipTrigger>
              <TooltipContent side="bottom">
                {isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
              </TooltipContent>
            </Tooltip>

            <Separator orientation="vertical" className="hidden h-5 sm:block" />

            <div className="flex items-center gap-2 text-sm">
              <span className="hidden text-muted-foreground sm:inline">
                Workspace
              </span>
              <span className="hidden text-muted-foreground sm:inline">/</span>
              <h1 className="font-heading text-base font-semibold tracking-tight text-foreground">
                {currentTitle}
              </h1>
            </div>
          </div>

          {/* Right Header Controls: Search + Notifications + Theme + Action */}
          <div className="flex items-center gap-2.5">
            <div className="relative hidden w-60 items-center md:flex lg:w-72">
              <IconSearch className="pointer-events-none absolute left-3 size-4 text-muted-foreground" />
              <Input
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search tasks, projects..."
                className="h-9 border-border/60 bg-muted/50 pr-12 pl-9 text-xs"
              />
              <kbd className="pointer-events-none absolute right-2.5 rounded-md border border-border bg-background px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground">
                ⌘K
              </kbd>
            </div>

            {/* Notifications Popover */}
            <Popover>
              <PopoverTrigger
                render={
                  <Button
                    type="button"
                    variant="outline"
                    size="icon-sm"
                    className="relative"
                    aria-label="View notifications"
                  />
                }
              >
                <IconBell className="size-4" />
                <span className="absolute top-1.5 right-1.5 size-2 rounded-full bg-primary ring-2 ring-background" />
              </PopoverTrigger>
              <PopoverContent align="end" className="w-80">
                <PopoverHeader className="border-b border-border/60 pb-2.5">
                  <div className="flex items-center justify-between">
                    <PopoverTitle className="text-sm font-semibold">
                      Notifications
                    </PopoverTitle>
                    <span className="rounded-full bg-primary/20 px-2 py-0.5 text-[11px] font-semibold text-primary-foreground dark:bg-primary/15 dark:text-primary">
                      3 New
                    </span>
                  </div>
                  <PopoverDescription className="text-xs">
                    Recent updates across your projects and tasks.
                  </PopoverDescription>
                </PopoverHeader>

                <div className="space-y-2.5">
                  {NOTIFICATIONS.map((item) => (
                    <div
                      key={item.id}
                      className="rounded-2xl border border-border/50 bg-muted/35 p-2.5 text-xs"
                    >
                      <div className="flex items-center justify-between font-medium text-foreground">
                        <span>{item.title}</span>
                        <span className="text-[10px] text-muted-foreground">
                          {item.time}
                        </span>
                      </div>
                      <p className="mt-1 text-muted-foreground">{item.detail}</p>
                    </div>
                  ))}
                </div>
              </PopoverContent>
            </Popover>

            {/* Theme Toggle */}
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

            {/* Quick New Task CTA */}
            <Button
              type="button"
              size="sm"
              onClick={() =>
                toast.success("New task draft created", {
                  description: "Assigned to Sprint 4 in Product Team workspace.",
                })
              }
              className="hidden sm:inline-flex font-semibold"
            >
              <IconPlus className="size-4" />
              New Task
            </Button>
          </div>
        </header>

        {/* Main Routed Content */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
          <div className="mx-auto max-w-7xl">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  )
}
