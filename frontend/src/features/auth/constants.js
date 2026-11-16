import { IconFolder, IconListCheck, IconUsers } from "@tabler/icons-react"

export const SAMPLE_TASKS = [
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

export const FEATURES = [
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
