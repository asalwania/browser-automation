import { auth } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"
import { Workflow } from "lucide-react"

import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"
import { NewWorkflowButton } from "../new-workflow-button"

export default async function Page() {
  const { userId } = await auth()

  if (!userId) {
    redirect("/sign-in")
  }

  return (
    <Empty className="min-h-svh border-none">
      <EmptyHeader>
        <EmptyMedia variant="icon" className="size-12 [&_svg:not([class*='size-'])]:size-6">
          <Workflow />
        </EmptyMedia>
        <EmptyTitle className="text-2xl">No workflow selected</EmptyTitle>
        <EmptyDescription className="text-base">
          Select a workflow from the sidebar or create a new one to get
          started.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <NewWorkflowButton />
      </EmptyContent>
    </Empty>
  )
}
