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
          id="rf-mark-bg"
          x1="0"
          y1="0"
          x2="64"
          y2="64"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#18181B" />
          <stop offset="100%" stopColor="#09090B" />
        </linearGradient>
        <linearGradient
          id="rf-mark-gold-top"
          x1="14"
          y1="14"
          x2="50"
          y2="34"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#FEF08A" />
          <stop offset="50%" stopColor="#FACC15" />
          <stop offset="100%" stopColor="#F59E0B" />
        </linearGradient>
        <linearGradient
          id="rf-mark-gold-mid"
          x1="14"
          y1="26"
          x2="50"
          y2="46"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#FACC15" />
          <stop offset="100%" stopColor="#D97706" />
        </linearGradient>
        <linearGradient
          id="rf-mark-gold-bot"
          x1="16"
          y1="38"
          x2="48"
          y2="52"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#B45309" stopOpacity="0.55" />
        </linearGradient>
      </defs>

      <rect x="2" y="2" width="60" height="60" rx="16" fill="url(#rf-mark-bg)" />
      <rect
        x="2.75"
        y="2.75"
        width="58.5"
        height="58.5"
        rx="15.25"
        stroke="#FACC15"
        strokeOpacity="0.25"
        strokeWidth="1.5"
      />

      <path
        d="M15 41.5L30.2 49.1C31.33 49.66 32.67 49.66 33.8 49.1L49 41.5"
        stroke="url(#rf-mark-gold-bot)"
        strokeWidth="4.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 32.5L30.2 40.1C31.33 40.66 32.67 40.66 33.8 40.1L49 32.5"
        stroke="url(#rf-mark-gold-mid)"
        strokeWidth="4.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M30.15 14.45L14.85 22.1C13.45 22.8 13.45 24.8 14.85 25.5L30.15 33.15C31.31 33.73 32.69 33.73 33.85 33.15L49.15 25.5C50.55 24.8 50.55 22.8 49.15 22.1L33.85 14.45C32.69 13.87 31.31 13.87 30.15 14.45Z"
        fill="url(#rf-mark-gold-top)"
      />
      <path
        d="M27.5 23.8L30.8 27.1L37 20.9"
        stroke="#18181B"
        strokeWidth="3"
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
      <LogoMark className="size-9.5 shadow-sm transition-transform duration-200 group-hover:scale-105" />
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
