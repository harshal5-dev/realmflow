import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { toast } from "sonner"
import { z } from "zod"
import {
  IconArrowRight,
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
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const loginSchema = z.object({
  email: z
    .string()
    .trim()
    .min(1, "Email is required.")
    .email("Please enter a valid email address."),
  password: z
    .string()
    .min(1, "Password is required.")
    .min(6, "Password must be at least 6 characters."),
})

const LoginForm = () => {
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false)

  const form = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onTouched",
  })

  const { isSubmitting } = form.formState

  const handleFillDemo = () => {
    form.setValue("email", "demo@realmflow.app", {
      shouldValidate: true,
      shouldDirty: true,
      shouldTouch: true,
    })
    form.setValue("password", "demo12345", {
      shouldValidate: true,
      shouldDirty: true,
      shouldTouch: true,
    })
    form.clearErrors()
    toast.success("Demo credentials filled", {
      description: "Click Sign in to continue.",
    })
  }

  const onSubmit = async (values) => {
    await new Promise((resolve) => setTimeout(resolve, 600))
    toast.success("Welcome back to RealmFlow!", {
      description: `Signed in as ${values.email}`,
    })
    navigate("/dashboard")
  }

  return (
    <div className="flex flex-col gap-6">
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
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              noValidate
              className="flex flex-col gap-4"
            >
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <div className="relative flex items-center">
                      <IconMail className="pointer-events-none absolute left-3.5 size-4 text-muted-foreground" />
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="you@example.com"
                          autoComplete="email"
                          className="h-10 border-border/60 bg-input/40 pl-10"
                          {...field}
                        />
                      </FormControl>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex items-center justify-between">
                      <FormLabel>Password</FormLabel>
                      <button
                        type="button"
                        onClick={() =>
                          toast.info("Reset password", {
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
                      <FormControl>
                        <Input
                          type={showPassword ? "text" : "password"}
                          placeholder="••••••••"
                          autoComplete="current-password"
                          className="h-10 border-border/60 bg-input/40 pr-10 pl-10"
                          {...field}
                        />
                      </FormControl>
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
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="pt-3 pb-5">
                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="group w-full font-semibold shadow-sm transition-all duration-200 hover:-translate-y-0.5"
                >
                  {isSubmitting ? (
                    <>
                      <IconLoader2 className="size-4 animate-spin" />
                      Signing in...
                    </>
                  ) : (
                    <>
                      Sign in
                      <IconArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                    </>
                  )}
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  )
}

export default LoginForm
