import { auth } from "@clerk/nextjs/server"

export default async function TestPage() {
  // Enforce auth per-resource. Signed-out visitors are redirected to /sign-in.
  const { userId } = await auth.protect()

  return (
    <div className="flex min-h-svh p-6">
      <div className="flex max-w-md min-w-0 flex-col gap-4 text-sm leading-loose">
        <div>
          <h1 className="font-medium">Protected test page</h1>
          <p>If you can read this, you are signed in and the redirect passed.</p>
          <p className="font-mono text-xs text-muted-foreground">
            userId: {userId}
          </p>
        </div>
      </div>
    </div>
  )
}
