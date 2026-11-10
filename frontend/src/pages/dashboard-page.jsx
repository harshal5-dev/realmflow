import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { cn } from "cn"
import { toast } from "sonner"
import {
  IconAlertTriangle,
  IconArrowUpRight,
  IconCalendarEvent,
  IconCircleCheckFilled,
  IconClockHour4,
  IconFolder,
  IconListCheck,
  IconPlus,
  IconTrendingUp,
  IconUsers,
} from "@tabler/icons-react"

import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
} from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"
import { Calendar } from "@/components/ui/calendar"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const STAT_CARDS = [
  {
    title: "Active Projects",
    value: "8",
    change: "+2 this month",
    description: "Across 3 team workspaces",
    icon: IconFolder,
  },
  {
    title: "Tasks in Progress",
    value: "18",
    change: "5 high priority",
    description: "Assigned in Sprint 4",
    icon: IconClockHour4,
  },
  {
    title: "Completed Tasks",
    value: "124",
    change: "+18% velocity",
    description: "92% on-time delivery rate",
    icon: IconCircleCheckFilled,
  },
  {
    title: "Due This Week",
    value: "4",
    change: "2 due tomorrow",
    description: "Requires review before Friday",
    icon: IconAlertTriangle,
  },
]

const INITIAL_TASKS = [
  {
    id: "TASK-101",
    title: "Design responsive sidebar & dashboard layout",
    project: "Website Redesign",
    priority: "High",
    status: "Completed",
    dueDate: "Today",
    assignee: "SH",
  },
  {
    id: "TASK-104",
    title: "Implement authentication & React Router setup",
    project: "Website Redesign",
    priority: "High",
    status: "Completed",
    dueDate: "Today",
    assignee: "AK",
  },
  {
    id: "TASK-108",
    title: "Build interactive Kanban drag-and-drop columns",
    project: "Mobile App v2.0",
    priority: "Medium",
    status: "In Progress",
    dueDate: "Tomorrow",
    assignee: "MR",
  },
  {
    id: "TASK-112",
    title: "Connect REST API endpoints for project creation",
    project: "API Gateway",
    priority: "High",
    status: "In Progress",
    dueDate: "Nov 14",
    assignee: "SH",
  },
  {
    id: "TASK-115",
    title: "Write unit tests for task permission middleware",
    project: "API Gateway",
    priority: "Low",
    status: "In Progress",
    dueDate: "Nov 16",
    assignee: "JD",
  },
]

const DEMO_PROJECTS = [
  {
    name: "Website Redesign",
    category: "Frontend · UI/UX",
    progress: 78,
    tasksLeft: "4 tasks remaining",
    due: "Nov 18",
    members: ["SH", "AK", "MR"],
  },
  {
    name: "Mobile App v2.0",
    category: "React Native · Sprint 4",
    progress: 52,
    tasksLeft: "8 tasks remaining",
    due: "Nov 25",
    members: ["MR", "JD"],
  },
  {
    name: "API Gateway",
    category: "Go Backend · Core",
    progress: 88,
    tasksLeft: "2 tasks remaining",
    due: "Nov 15",
    members: ["SH", "JD", "AK"],
  },
]

const TEAM_MEMBERS = [
  {
    name: "Shraddha H.",
    role: "Product & Frontend Lead",
    initials: "SH",
    tasks: "6 active",
    online: true,
  },
  {
    name: "Aarav Kulkarni",
    role: "Backend Go Engineer",
    initials: "AK",
    tasks: "5 active",
    online: true,
  },
  {
    name: "Maya Roberts",
    role: "Product Designer",
    initials: "MR",
    tasks: "4 active",
    online: false,
  },
]

export function DashboardPage() {
  const navigate = useNavigate()
  const [taskFilter, setTaskFilter] = useState("all")
  const [selectedDate, setSelectedDate] = useState(() => new Date())
  const [tasks, setTasks] = useState(INITIAL_TASKS)

  const filteredTasks = tasks.filter((task) => {
    if (taskFilter === "progress") return task.status === "In Progress"
    if (taskFilter === "completed") return task.status === "Completed"
    return true
  })

  const toggleTaskStatus = (taskId) => {
    setTasks((prev) =>
      prev.map((task) => {
        if (task.id !== taskId) return task
        const nextStatus =
          task.status === "Completed" ? "In Progress" : "Completed"
        toast.success(`${task.id} marked as ${nextStatus}`)
        return { ...task, status: nextStatus }
      })
    )
  }

  return (
    <div className="space-y-6">
      {/* Top Page Banner & Actions */}
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h2 className="font-heading text-2xl font-bold tracking-tight sm:text-3xl">
            Project Overview
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Track your active sprints, upcoming task deadlines, and team
            progress.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          {/* Date Picker Popover using shadcn Popover + Calendar */}
          <Popover>
            <PopoverTrigger
              render={
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  className="text-xs font-medium"
                />
              }
            >
              <IconCalendarEvent className="size-4 text-sidebar-primary dark:text-primary" />
              {selectedDate
                ? selectedDate.toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })
                : "Select date"}
            </PopoverTrigger>
            <PopoverContent align="end" className="w-auto p-2">
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={(date) => date && setSelectedDate(date)}
              />
            </PopoverContent>
          </Popover>

          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => navigate("/login")}
            className="text-xs font-medium"
          >
            Login Page
            <IconArrowUpRight className="size-3.5" />
          </Button>
        </div>
      </div>

      {/* 4 Demo Metric Cards */}
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {STAT_CARDS.map((stat) => {
          const IconComponent = stat.icon
          return (
            <Card
              key={stat.title}
              size="sm"
              className="border border-border/60 bg-card/95 shadow-xs transition-all hover:border-primary/40 hover:shadow-md"
            >
              <CardHeader className="pb-2">
                <CardDescription className="text-xs font-medium text-muted-foreground">
                  {stat.title}
                </CardDescription>
                <CardAction>
                  <div className="flex size-8 items-center justify-center rounded-2xl bg-primary/20 text-primary-foreground dark:bg-primary/15 dark:text-primary">
                    <IconComponent className="size-4" />
                  </div>
                </CardAction>
                <CardTitle className="font-heading text-3xl font-bold tracking-tight">
                  {stat.value}
                </CardTitle>
              </CardHeader>

              <CardFooter className="flex items-center justify-between pt-1 text-xs">
                <span className="inline-flex items-center gap-1 font-semibold text-sidebar-primary dark:text-primary">
                  <IconTrendingUp className="size-3.5" />
                  {stat.change}
                </span>
                <span className="text-muted-foreground">{stat.description}</span>
              </CardFooter>
            </Card>
          )
        })}
      </div>

      {/* Main Content Grid: Sprint Tasks Table (Left) + Active Projects & Team (Right) */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Left 2 Columns: Sprint Tasks Table Card */}
        <Card className="border border-border/60 bg-card/95 shadow-xs lg:col-span-2">
          <CardHeader className="border-b border-border/60 pb-4">
            <div>
              <CardTitle className="flex items-center gap-2 text-lg font-semibold">
                <IconListCheck className="size-5 text-sidebar-primary dark:text-primary" />
                Recent Sprint Tasks
              </CardTitle>
              <CardDescription className="mt-0.5 text-xs">
                Click any task status pill to toggle completion.
              </CardDescription>
            </div>

            <CardAction>
              <ButtonGroup className="rounded-3xl bg-muted/70 p-0.5">
                <Button
                  type="button"
                  size="xs"
                  variant={taskFilter === "all" ? "default" : "ghost"}
                  onClick={() => setTaskFilter("all")}
                >
                  All ({tasks.length})
                </Button>
                <Button
                  type="button"
                  size="xs"
                  variant={taskFilter === "progress" ? "default" : "ghost"}
                  onClick={() => setTaskFilter("progress")}
                >
                  In Progress
                </Button>
                <Button
                  type="button"
                  size="xs"
                  variant={taskFilter === "completed" ? "default" : "ghost"}
                  onClick={() => setTaskFilter("completed")}
                >
                  Done
                </Button>
              </ButtonGroup>
            </CardAction>
          </CardHeader>

          <CardContent className="pt-2">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-24 text-xs">Task ID</TableHead>
                  <TableHead className="text-xs">Title &amp; Project</TableHead>
                  <TableHead className="text-xs">Priority</TableHead>
                  <TableHead className="text-xs">Assignee</TableHead>
                  <TableHead className="text-right text-xs">Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredTasks.map((task) => {
                  const isDone = task.status === "Completed"
                  return (
                    <TableRow key={task.id}>
                      <TableCell className="font-mono text-xs text-muted-foreground">
                        {task.id}
                      </TableCell>
                      <TableCell>
                        <div className="max-w-[260px] sm:max-w-xs">
                          <p
                            className={cn(
                              "truncate text-xs font-medium text-foreground",
                              isDone && "line-through text-muted-foreground"
                            )}
                          >
                            {task.title}
                          </p>
                          <span className="text-[11px] text-muted-foreground">
                            {task.project} · Due {task.dueDate}
                          </span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <span
                          className={cn(
                            "inline-flex rounded-full px-2 py-0.5 text-[11px] font-medium",
                            task.priority === "High"
                              ? "bg-destructive/12 text-destructive"
                              : task.priority === "Medium"
                                ? "bg-primary/25 text-primary-foreground dark:bg-primary/15 dark:text-primary"
                                : "bg-muted text-muted-foreground"
                          )}
                        >
                          {task.priority}
                        </span>
                      </TableCell>
                      <TableCell>
                        <Avatar size="sm">
                          <AvatarFallback className="bg-primary/20 text-[10px] font-semibold text-primary-foreground dark:bg-primary/15 dark:text-primary">
                            {task.assignee}
                          </AvatarFallback>
                        </Avatar>
                      </TableCell>
                      <TableCell className="text-right">
                        <button
                          type="button"
                          onClick={() => toggleTaskStatus(task.id)}
                          className={cn(
                            "inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-[11px] font-medium transition-colors",
                            isDone
                              ? "border-primary/40 bg-primary/20 text-primary-foreground dark:border-primary/30 dark:bg-primary/15 dark:text-primary"
                              : "border-border bg-muted/60 text-foreground hover:bg-muted"
                          )}
                        >
                          {isDone ? (
                            <IconCircleCheckFilled className="size-3" />
                          ) : (
                            <IconClockHour4 className="size-3 text-muted-foreground" />
                          )}
                          {task.status}
                        </button>
                      </TableCell>
                    </TableRow>
                  )
                })}
              </TableBody>
            </Table>
          </CardContent>

          <CardFooter className="flex items-center justify-between border-t border-border/60 bg-muted/25 py-3 text-xs text-muted-foreground">
            <span>Showing {filteredTasks.length} tasks in current sprint</span>
            <Button
              type="button"
              variant="ghost"
              size="xs"
              onClick={() => navigate("/tasks")}
            >
              View all tasks
              <IconArrowUpRight className="size-3.5" />
            </Button>
          </CardFooter>
        </Card>

        {/* Right Column: Demo Project Cards & Team Activity */}
        <div className="space-y-6">
          {/* Active Projects Demo Card */}
          <Card className="border border-border/60 bg-card/95 shadow-xs">
            <CardHeader className="border-b border-border/60 pb-4">
              <CardTitle className="flex items-center gap-2 text-base font-semibold">
                <IconFolder className="size-4.5 text-sidebar-primary dark:text-primary" />
                Active Projects
              </CardTitle>
              <CardDescription className="text-xs">
                Milestone completion across boards
              </CardDescription>
              <CardAction>
                <Button
                  type="button"
                  variant="outline"
                  size="icon-xs"
                  onClick={() =>
                    toast("New Project", {
                      description: "Project creation drawer coming soon.",
                    })
                  }
                  aria-label="Add project"
                >
                  <IconPlus className="size-3.5" />
                </Button>
              </CardAction>
            </CardHeader>

            <CardContent className="space-y-4 pt-1">
              {DEMO_PROJECTS.map((project) => (
                <div
                  key={project.name}
                  className="space-y-2.5 rounded-2xl border border-border/50 bg-muted/25 p-3.5"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <p className="text-xs font-semibold text-foreground">
                        {project.name}
                      </p>
                      <p className="text-[11px] text-muted-foreground">
                        {project.category}
                      </p>
                    </div>
                    <span className="rounded-full bg-primary/25 px-2 py-0.5 text-[11px] font-semibold text-primary-foreground dark:bg-primary/15 dark:text-primary">
                      {project.progress}%
                    </span>
                  </div>

                  {/* Progress Bar */}
                  <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
                    <div
                      className="h-full rounded-full bg-primary transition-all duration-500"
                      style={{ width: `${project.progress}%` }}
                    />
                  </div>

                  <div className="flex items-center justify-between pt-0.5 text-[11px] text-muted-foreground">
                    <span>{project.tasksLeft}</span>
                    <AvatarGroup>
                      {project.members.map((initials) => (
                        <Avatar key={initials} size="sm">
                          <AvatarFallback className="bg-secondary text-[9px] font-semibold text-secondary-foreground">
                            {initials}
                          </AvatarFallback>
                        </Avatar>
                      ))}
                      <AvatarGroupCount className="text-[9px]">
                        +1
                      </AvatarGroupCount>
                    </AvatarGroup>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Team Members Demo Card */}
          <Card className="border border-border/60 bg-card/95 shadow-xs">
            <CardHeader className="border-b border-border/60 pb-4">
              <CardTitle className="flex items-center gap-2 text-base font-semibold">
                <IconUsers className="size-4.5 text-sidebar-primary dark:text-primary" />
                Team Workload
              </CardTitle>
              <CardDescription className="text-xs">
                Collaborators in Product Team
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-3 pt-1">
              {TEAM_MEMBERS.map((member) => (
                <div
                  key={member.name}
                  className="flex items-center justify-between gap-3 rounded-2xl border border-border/50 bg-background/60 px-3 py-2.5"
                >
                  <div className="flex items-center gap-2.5">
                    <Avatar size="default">
                      <AvatarFallback className="bg-primary/20 text-xs font-semibold text-primary-foreground dark:bg-primary/15 dark:text-primary">
                        {member.initials}
                      </AvatarFallback>
                      {member.online && <AvatarBadge />}
                    </Avatar>
                    <div>
                      <p className="text-xs font-semibold text-foreground">
                        {member.name}
                      </p>
                      <p className="text-[11px] text-muted-foreground">
                        {member.role}
                      </p>
                    </div>
                  </div>
                  <span className="rounded-full border border-border/70 bg-muted/50 px-2.5 py-0.5 text-[11px] font-medium text-foreground">
                    {member.tasks}
                  </span>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
