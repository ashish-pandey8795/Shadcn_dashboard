import { MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button"; // ✅ ShadCN
import { Card } from "@/components/ui/card"; // ✅ ShadCN
import { ScrollArea } from "@/components/ui/scroll-area"; // ✅ ShadCN
import { Badge } from "@/components/ui/badge"; // ✅ ShadCN

export default function Kanban() {
  return (
    <div className="w-full p-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold ">Kanban</h1>
          <p className="text-sm ">Manage tasks by dnd</p>
        </div>
        <Button
          variant="outline"
          size="sm"
          className="bg-muted hover:bg-muted rounded-md px-4 py-2 text-sm font-medium shadow-sm"
        >
          + Add New Todo
        </Button>
      </div>

      {/* Kanban Columns */}
      <div className="flex gap-6 overflow-x-auto pb-2">
        {/* Column */}
        <div className=" w-[400px] h-[75vh] flex-shrink-0 rounded-xl border bg-muted/60 shadow-sm flex flex-col">
          {/* Column Header */}
          <div className="flex items-center justify-between px-4 py-4 border-b">
            <div className="flex items-center gap-2">
              <span className="text-base font-semibold ">Todo</span>
            </div>
            <Button variant="ghost" size="icon" className="h-6 w-6">
              <MoreHorizontal className="h-4 w-4 text-muted-foreground" />
            </Button>
          </div>

          {/* Tasks */}
          <ScrollArea className="flex-1 px-3 py-4">
            {/* Task 1 */}
            <Card className="mb-4 p-4 rounded-lg border shadow-sm bg-white text-bleck dark:bg-black dark:text-white">
              <div className="flex justify-between items-center text-xs text-muted-foreground mb-2">
                <span className="cursor-move font-bold">⋮⋮</span>
                <Badge variant="outline" className="px-2 py-0.5 text-xs  bg-white text-bleck dark:bg-black dark:text-white">
                  Task
                </Badge>
              </div>
              <div className="text-sm font-medium">
                Project initiation and planning
              </div>
            </Card>

            {/* Task 2 */}
            <Card className="mb-4 p-4 rounded-lg border shadow-sm bg-white text-bleck dark:bg-black dark:text-white">
              <div className="flex justify-between items-center text-xs text-muted-foreground mb-2">
                <span className="cursor-move font-bold">⋮⋮</span>
                <Badge variant="outline" className="px-2 py-0.5 text-xs  bg-white text-bleck dark:bg-black dark:text-white">
                  Task
                </Badge>
              </div>
              <div className="text-sm font-medium">
                Gather requirements from stakeholders
              </div>
            </Card>
          </ScrollArea>
        </div>

        {/* Add New Section Button */}
        <div className=" flex items-start justify-center ">
          <Button
            variant="ghost"
            className=" bg-muted hover:bg-muted border px-8 py-2 rounded-md text-sm font-medium shadow-sm"
          >
            + Add New Section
          </Button>
        </div>
      </div>
    </div>
  );
}
