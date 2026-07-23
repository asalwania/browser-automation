import { OrganizationSwitcher, UserButton } from "@clerk/nextjs"
import { auth } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"

export default async function Page() {
  const { userId } = await auth()

  if (!userId) {
    redirect("/sign-in")
  }

  return (
    <div className="flex items-center gap-4 p-4">
      <OrganizationSwitcher afterSelectOrganizationUrl="/" />
      <UserButton />
    </div>
  )
}
