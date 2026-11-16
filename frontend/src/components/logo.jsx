import { cn } from "cn"

export function LogoMark({ className, ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      fill="none"
      aria-hidden="true"
      className={cn("size-9 shrink-0 select-none", className)}
      {...props}
    >
      <defs>
        <linearGradient
          id="rf-mark-gold-top"
          x1="8"
          y1="8"
          x2="56"
          y2="34"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#FDE047" />
          <stop offset="50%" stopColor="#FACC15" />
          <stop offset="100%" stopColor="#F59E0B" />
        </linearGradient>
        <linearGradient
          id="rf-mark-gold-mid"
          x1="8"
          y1="26"
          x2="56"
          y2="46"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#F59E0B" />
          <stop offset="100%" stopColor="#D97706" />
        </linearGradient>
        <linearGradient
          id="rf-mark-gold-bot"
          x1="10"
          y1="40"
          x2="54"
          y2="56"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#D97706" />
          <stop offset="100%" stopColor="#B45309" />
        </linearGradient>
      </defs>

      {/* Bottom Realm Layer */}
      <path
        d="M10 44L29.8 53.9C31.18 54.59 32.82 54.59 34.2 53.9L54 44"
        stroke="url(#rf-mark-gold-bot)"
        strokeWidth="5.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Middle Task Flow Layer */}
      <path
        d="M10 33L29.8 42.9C31.18 43.59 32.82 43.59 34.2 42.9L54 33"
        stroke="url(#rf-mark-gold-mid)"
        strokeWidth="5.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Top Active Workspace Plane */}
      <path
        d="M29.75 9.6L9.85 19.55C8.15 20.4 8.15 22.8 9.85 23.65L29.75 33.6C31.17 34.31 32.83 34.31 34.25 33.6L54.15 23.65C55.85 22.8 55.85 20.4 54.15 19.55L34.25 9.6C32.83 8.89 31.17 8.89 29.75 9.6Z"
        fill="url(#rf-mark-gold-top)"
        stroke="#D97706"
        strokeWidth="1.25"
      />

      {/* Inner Check / Flow Node */}
      <path
        d="M26 21.8L30.2 26L38.5 17.7"
        stroke="#451A03"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function Logo({
  className,
  showSubtitle = true,
  subtitle = "Project & Task Management",
  ...props
}) {
  return (
    <div
      className={cn("inline-flex items-center gap-2.5 select-none", className)}
      {...props}
    >
      <LogoMark className="size-9 transition-transform duration-200 group-hover:scale-105" />
      <div className="flex flex-col leading-none">
        <span className="font-heading text-lg font-bold tracking-tight text-foreground">
          Realm<span className="text-sidebar-primary dark:text-primary">Flow</span>
        </span>
        {showSubtitle && (
          <span className="mt-0.5 text-[11px] font-medium text-muted-foreground">
            {subtitle}
          </span>
        )}
      </div>
    </div>
  )
}
