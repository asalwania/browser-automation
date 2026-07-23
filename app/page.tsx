import { OrganizationSwitcher, UserButton } from "@clerk/nextjs"

export default function Page() {
  return (
    <div className="flex items-center gap-4 p-4">
      <OrganizationSwitcher afterSelectOrganizationUrl="/" />
      <UserButton />
    </div>
  )
}
