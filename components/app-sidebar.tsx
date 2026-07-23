import { OrganizationSwitcher, UserButton } from "@clerk/nextjs"
import { Plus, Workflow } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { EmptyMedia } from "./ui/empty"

const workflows = [
  "dominant-wasp",
  "honest-reindeer",
  "expected-llama",
  "essential-ocelot",
  "creepy-echidna",
  "eastern-silkworm",
  "cultural-lion",
  "proud-weasel",
  "regional-bonobo",
]

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="inset" collapsible="icon" {...props}>
      <SidebarHeader>
        <div className="flex items-center justify-between gap-2">
          <OrganizationSwitcher
            hidePersonal={false}
            appearance={{
              elements: {
                rootBox: "min-w-0 group-data-[collapsible='icon']:!hidden",
                organizationSwitcherTrigger: "w-full justify-between",
              },
            }}
          />
          <SidebarTrigger />
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Workflows</SidebarGroupLabel>
          <SidebarGroupAction title="New workflow">
            <Plus />
            <span className="sr-only">New workflow</span>
          </SidebarGroupAction>
          <SidebarGroupContent>
            <SidebarMenu>
              {workflows.map((workflow, index) => (
                <SidebarMenuItem key={workflow}>
                  <SidebarMenuButton isActive={index === 0}>
                    
                      <Workflow />
                    <span>{workflow}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="group-data-[collapsible='icon']:item-center">
        <UserButton
          appearance={{
            elements: {
              rootBox: "w-full",
              userButtonTrigger: "w-full justify-start group-data-[collapsible='icon']:justify-center",
              userButtonOuterIdentifier: "group-data-[collapsible='icon']:hidden",
            },
          }}
        />
      </SidebarFooter>
    </Sidebar>
  )
}
