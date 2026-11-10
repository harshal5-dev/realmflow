import {
  IconCircleCheckFilled,
  IconClock,
  IconFolder,
  IconLayoutKanban,
  IconListCheck,
  IconMoon,
  IconSun,
  IconUsers,
} from "@tabler/icons-react"

import { LoginForm } from "@/components/login-form"
import { Logo } from "@/components/logo"
import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
} from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
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

const SAMPLE_TASKS = [
  {
    id: "TASK-12",
    title: "Design project dashboard & Kanban board",
    tag: "UI / UX",
    status: "Completed",
    done: true,
  },
  {
    id: "TASK-18",
    title: "Add task priority filters and due date reminders",
    tag: "Frontend",
    status: "Completed",
    done: true,
  },
  {
    id: "TASK-24",
    title: "Connect workspace API endpoints for team tasks",
    tag: "Backend",
    status: "In Progress",
    done: false,
  },
]

const FEATURES = [
  {
    icon: IconFolder,
    title: "Project Workspaces",
    description: "Keep all your projects, boards, and docs neatly organized.",
  },
  {
    icon: IconListCheck,
    title: "Task Tracking",
    description: "Set priorities, due dates, and statuses from start to finish.",
  },
  {
    icon: IconUsers,
    title: "Team Collaboration",
    description: "Assign tasks and track sprint progress together with your team.",
  },
]

const App = () => {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <div className="relative grid min-h-svh bg-background text-foreground lg:grid-cols-2">
      {/* Left Column: Brand Header + Email/Password Login + Footer */}
      <div className="flex flex-col justify-between p-6 sm:p-8 md:p-10 lg:p-12">
        <header className="flex items-center justify-between gap-4">
          <a
            href="#top"
            onClick={(e) => e.preventDefault()}
            aria-label="RealmFlow Home"
            className="group inline-flex items-center focus-visible:outline-none"
          >
            <Logo />
          </a>

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
        </header>

        <main className="my-8 flex flex-1 items-center justify-center">
          <div className="w-full max-w-100">
            <LoginForm />
          </div>
        </main>

        <footer className="flex items-center justify-between text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} RealmFlow</span>
          <span>Manage projects &amp; tasks with clarity</span>
        </footer>
      </div>

      {/* Right Column: Clean Project & Task Management Showcase */}
      <aside className="relative hidden flex-col justify-between overflow-hidden border-l border-border/60 bg-muted/35 p-10 lg:flex xl:p-14">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10"
        >
          <div className="absolute -top-24 -right-24 size-96 rounded-full bg-primary/15 blur-3xl" />
          <div className="absolute bottom-10 -left-20 size-80 rounded-full bg-primary/10 blur-3xl" />
        </div>

        <div className="space-y-3">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-primary/40 bg-primary/20 px-3 py-1 text-xs font-medium text-primary-foreground dark:border-primary/25 dark:bg-primary/12 dark:text-primary">
            <IconLayoutKanban className="size-3.5" />
            Project &amp; Task Management
          </div>

          <h2 className="max-w-md font-heading text-2xl font-semibold tracking-tight text-balance xl:text-3xl">
            Plan projects, track tasks, and ship work on time.
          </h2>
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
            Break down big goals into actionable tasks, organize sprints on
            clean boards, and keep your daily workflow moving forward.
          </p>
        </div>

        {/* Sample Project Sprint Card */}
        <div className="my-6">
          <Card className="border border-border/60 bg-card/90 shadow-lg backdrop-blur-sm">
            <CardHeader className="border-b border-border/60 pb-4">
              <CardTitle className="flex items-center gap-2 text-base font-semibold">
                <IconListCheck className="size-4 text-sidebar-primary dark:text-primary" />
                Product Launch · Sprint 4
              </CardTitle>
              <CardDescription className="text-xs">
                Active tasks in your workspace
              </CardDescription>
              <CardAction>
                <span className="inline-flex items-center rounded-full bg-primary/25 px-2.5 py-1 text-xs font-semibold text-primary-foreground dark:bg-primary/15 dark:text-primary">
                  2 / 3 Done
                </span>
              </CardAction>
            </CardHeader>

            <CardContent className="space-y-2.5 pt-1">
              {SAMPLE_TASKS.map((task) => (
                <div
                  key={task.id}
                  className="flex items-center justify-between gap-3 rounded-2xl border border-border/50 bg-background/60 px-3.5 py-2.5"
                >
                  <div className="flex min-w-0 items-center gap-2.5">
                    {task.done ? (
                      <IconCircleCheckFilled className="size-4 shrink-0 text-sidebar-primary dark:text-primary" />
                    ) : (
                      <IconClock className="size-4 shrink-0 text-muted-foreground" />
                    )}
                    <div className="min-w-0">
                      <p className="truncate text-xs font-medium text-foreground">
                        {task.title}
                      </p>
                      <div className="flex items-center gap-2 text-[11px] text-muted-foreground">
                        <span className="font-mono">{task.id}</span>
                        <span>·</span>
                        <span>{task.tag}</span>
                      </div>
                    </div>
                  </div>
                  <span className="shrink-0 rounded-full border border-border/70 bg-muted/60 px-2 py-0.5 text-[11px] font-medium text-foreground">
                    {task.status}
                  </span>
                </div>
              ))}
            </CardContent>

            <CardFooter className="flex items-center justify-between border-t border-border/60 bg-muted/25 py-3">
              <div className="flex items-center gap-2.5">
                <AvatarGroup>
                  <Avatar size="sm">
                    <AvatarFallback className="bg-primary/25 text-[10px] font-semibold text-primary-foreground dark:bg-primary/15 dark:text-primary">
                      SH
                    </AvatarFallback>
                    <AvatarBadge />
                  </Avatar>
                  <Avatar size="sm">
                    <AvatarFallback className="bg-secondary text-[10px] font-semibold text-secondary-foreground">
                      AK
                    </AvatarFallback>
                  </Avatar>
                  <Avatar size="sm">
                    <AvatarFallback className="bg-muted text-[10px] font-semibold text-muted-foreground">
                      MR
                    </AvatarFallback>
                  </Avatar>
                  <AvatarGroupCount className="text-[10px] font-medium">
                    +3
                  </AvatarGroupCount>
                </AvatarGroup>
                <span className="text-xs text-muted-foreground">
                  6 team members assigned
                </span>
              </div>

              <span className="text-xs font-semibold text-sidebar-primary dark:text-primary">
                On track
              </span>
            </CardFooter>
          </Card>
        </div>

        {/* Bottom Feature Highlights */}
        <div className="space-y-4">
          <Separator className="bg-border/60" />
          <div className="grid grid-cols-3 gap-4 pt-1">
            {FEATURES.map((feature) => {
              const IconComponent = feature.icon
              return (
                <div key={feature.title} className="space-y-1.5">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-foreground">
                    <div className="flex size-6 items-center justify-center rounded-lg bg-primary/25 text-primary-foreground dark:bg-primary/15 dark:text-primary">
                      <IconComponent className="size-3.5" />
                    </div>
                    <span>{feature.title}</span>
                  </div>
                  <p className="text-xs leading-relaxed text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </aside>
    </div>
  )
}

export default App
