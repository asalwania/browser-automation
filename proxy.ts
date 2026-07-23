import { clerkMiddleware } from "@clerk/nextjs/server"

// Auth is enforced per-resource (in each protected page/route/action) rather than
// by path matching here. Keep clerkMiddleware() running so auth() works app-wide.
export default clerkMiddleware()

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
}
