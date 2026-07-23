"use client"

import { Plus } from "lucide-react"

import { Button } from "@/components/ui/button"

export function NewWorkflowButton() {
  return (
    <Button size="lg">
      <Plus />
      New workflow
    </Button>
  )
}
