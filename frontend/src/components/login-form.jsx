import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { cn } from "cn"
import { toast } from "sonner"
import {
  IconArrowRight,
  IconCheck,
  IconEye,
  IconEyeOff,
  IconLoader2,
  IconLock,
  IconMail,
  IconWand,
} from "@tabler/icons-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export function LoginForm({ className, ...props }) {
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [rememberMe, setRememberMe] = useState(true)
  const [isLoading, setIsLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")

  const handleFillDemo = () => {
    setEmail("demo@realmflow.app")
    setPassword("demo12345")
    setErrorMessage("")
    toast.success("Demo credentials filled", {
      description: "Click Sign in to continue.",
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setErrorMessage("")

    if (!email.trim() || !email.includes("@")) {
      setErrorMessage("Please enter a valid email address.")
      return
    }

    if (password.length < 6) {
      setErrorMessage("Password must be at least 6 characters.")
      return
    }

    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      toast.success("Welcome back to RealmFlow!", {
        description: `Signed in as ${email}`,
      })
      navigate("/")
    }, 600)
  }

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="border border-border/60 bg-card/95 shadow-lg backdrop-blur-sm">
        <CardHeader className="gap-2 border-b border-border/60 pb-5">
          <div className="flex items-center justify-between gap-2">
            <CardTitle className="text-2xl font-semibold tracking-tight">
              Welcome back
            </CardTitle>

            <Tooltip>
              <TooltipTrigger
                render={
                  <Button
                    type="button"
                    variant="ghost"
                    size="xs"
                    onClick={handleFillDemo}
                    className="text-muted-foreground hover:text-foreground"
                  />
                }
              >
                <IconWand className="size-3.5 text-sidebar-primary dark:text-primary" />
                Demo login
              </TooltipTrigger>
              <TooltipContent side="top">
                Fill sample email &amp; password
              </TooltipContent>
            </Tooltip>
          </div>

          <CardDescription className="text-sm text-muted-foreground">
            Enter your email and password to access your projects and tasks.
          </CardDescription>
        </CardHeader>

        <CardContent className="pt-2">
          <form onSubmit={handleSubmit} noValidate>
            <FieldGroup className="gap-4">
              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <div className="relative flex items-center">
                  <IconMail className="pointer-events-none absolute left-3.5 size-4 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    autoComplete="email"
                    className="h-10 border-border/60 bg-input/40 pl-10"
                    required
                  />
                </div>
              </Field>

              <Field>
                <div className="flex items-center justify-between">
                  <FieldLabel htmlFor="password">Password</FieldLabel>
                  <button
                    type="button"
                    onClick={() =>
                      toast("Reset password", {
                        description:
                          "Password reset instructions will be sent to your email.",
                      })
                    }
                    className="text-xs font-medium text-muted-foreground transition-colors hover:text-sidebar-primary dark:hover:text-primary"
                  >
                    Forgot password?
                  </button>
                </div>

                <div className="relative flex items-center">
                  <IconLock className="pointer-events-none absolute left-3.5 size-4 text-muted-foreground" />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    autoComplete="current-password"
                    className="h-10 border-border/60 bg-input/40 pr-10 pl-10"
                    required
                  />
                  <Tooltip>
                    <TooltipTrigger
                      render={
                        <button
                          type="button"
                          onClick={() =>
                            setShowPassword((current) => !current)
                          }
                          aria-label={
                            showPassword ? "Hide password" : "Show password"
                          }
                          className="absolute right-2.5 inline-flex size-6 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                        />
                      }
                    >
                      {showPassword ? (
                        <IconEyeOff className="size-4" />
                      ) : (
                        <IconEye className="size-4" />
                      )}
                    </TooltipTrigger>
                    <TooltipContent side="top">
                      {showPassword ? "Hide password" : "Show password"}
                    </TooltipContent>
                  </Tooltip>
                </div>
              </Field>

              {errorMessage && <FieldError>{errorMessage}</FieldError>}

              <div className="flex items-center justify-between pt-0.5">
                <button
                  type="button"
                  role="checkbox"
                  aria-checked={rememberMe}
                  onClick={() => setRememberMe((prev) => !prev)}
                  className="group inline-flex items-center gap-2 text-xs text-muted-foreground transition-colors hover:text-foreground"
                >
                  <span
                    className={cn(
                      "flex size-4 items-center justify-center rounded-md border transition-all",
                      rememberMe
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border bg-input/40 group-hover:border-primary/50"
                    )}
                  >
                    {rememberMe && <IconCheck className="size-3 stroke-[2.5]" />}
                  </span>
                  Remember me
                </button>
              </div>

              <Field className="pt-1">
                <Button
                  type="submit"
                  size="lg"
                  disabled={isLoading}
                  className="w-full font-semibold shadow-sm"
                >
                  {isLoading ? (
                    <>
                      <IconLoader2 className="size-4 animate-spin" />
                      Signing in...
                    </>
                  ) : (
                    <>
                      Sign in
                      <IconArrowRight className="size-4" />
                    </>
                  )}
                </Button>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>

        <CardFooter className="flex items-center justify-center gap-1.5 border-t border-border/60 bg-muted/30 py-3.5 text-xs text-muted-foreground">
          <span>Don&apos;t have an account?</span>
          <a
            href="#signup"
            onClick={(e) => {
              e.preventDefault()
              toast("Sign up", {
                description: "Registration page coming soon.",
              })
            }}
            className="font-semibold text-sidebar-primary underline-offset-4 hover:underline dark:text-primary"
          >
            Sign up
          </a>
        </CardFooter>
      </Card>
    </div>
  )
}
