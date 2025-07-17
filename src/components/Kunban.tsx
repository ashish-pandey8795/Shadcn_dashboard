import { MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Badge } from "@/components/ui/badge"

export default function Kanban() {
  return (
    <div className="p-2 w-full">
      {/* Top Header */}
      <div className="flex gap-105 items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold">Kanban</h1>
          <p className="text-sm text-muted-foreground">Manage tasks by dnd</p>
        </div>
        <Button
          variant="outline"
          size="sm"
          className="bg-muted hover:bg-muted  rounded-md px-4 py-2 text-sm font-medium shadow-sm"
        >
          + Add New Todo
        </Button>
      </div>

      

      {/* Kanban Board */}
      <div className="flex gap-6 overflow-x-auto pb-4">
        {/* Column */}
        <div className="min-w-[35%] h-[75vh] flex-shrink-0 rounded-xl border bg-muted shadow-sm">
          {/* Column Header */}
          <div className="flex items-center justify-between px-8 py-6 border-b">
            <div className="flex items-center gap-6 w-[80%]">
              <span className="text-sm text-blue-600 font-bold">⋮⋮</span>
              <span className="text-sm font-medium shadow w-full px-2 py-2">Todo</span>
            </div>
            <Button variant="ghost" size="icon" className="  shadow  px-2 py-2">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </div>

          {/* Tasks */}
          <ScrollArea className="h-[460px] px-2 py-3">
            <Card className="mb-4  py-7 rounded-lg border shadow-sm bg-background">
              <div className="flex justify-between px-4 items-center text-xs text-muted-foreground">
                <span className="cursor-move font-bold ">⋮⋮</span>
                <Badge variant="outline" className="px-2 py-0.5 text-xs">Task</Badge>
              </div>
              <hr/>
              <div className="mt-3 px-3 text-sm font-medium text-black">
                Project initiation and planning
              </div>
            </Card>

                   <Card className="mb-4  py-7 rounded-lg border shadow-sm bg-background">
              <div className="flex justify-between px-4 items-center text-xs text-muted-foreground">
                <span className="cursor-move font-bold ">⋮⋮</span>
                <Badge variant="outline" className="px-2 py-0.5 text-xs">Task</Badge>
              </div>
              <hr/>
              <div className="mt-3 px-3 text-sm font-medium text-black">
                  Gather requirements from stakeholders
              </div>
            </Card>

          
          </ScrollArea>
        </div>

          <div className="flex justify-end mb-3">
        <Button
          variant="ghost"
          className="bg-muted hover:bg-muted border px-20 py-2 rounded-md text-sm font-medium shadow-sm"
        >
          + Add New Section
        </Button>
      </div>
      </div>
    </div>
  )
}
