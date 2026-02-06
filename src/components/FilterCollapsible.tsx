"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { ChevronsUpDown, Filter } from "lucide-react"

type Props = {
  accountTypes: string[]
  departments: string[]
  titles: string[]
  filters: {
    account_type?: string
    department?: string
    title?: string
  }
  setFilters: React.Dispatch<
    React.SetStateAction<{
      account_type?: string
      department?: string
      title?: string
    }>
  >
}

export function FilterCollapsible({
  accountTypes,
  departments,
  titles,
  filters,
  setFilters,
}: Props) {
  const [open, setOpen] = React.useState(false)

  return (
    <Collapsible
      open={open}
      onOpenChange={setOpen}
      className="w-[280px] rounded-lg border bg-background"
    >
      {/* 🔘 FILTER BUTTON */}
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-2">
          <Filter className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm font-medium">Filters</span>
        </div>

        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="icon" className="size-8">
            <ChevronsUpDown
              className={`h-4 w-4 transition-transform ${
                open ? "rotate-180" : ""
              }`}
            />
            <span className="sr-only">Toggle filters</span>
          </Button>
        </CollapsibleTrigger>
      </div>

      {/* 🔽 FILTER CONTENT */}
      <CollapsibleContent className="space-y-3 px-4 pb-4">
        {/* Account Type */}
        <Select
          value={filters.account_type}
          onValueChange={(v) =>
            setFilters((f) => ({ ...f, account_type: v }))
          }
        >
          <SelectTrigger>
            <SelectValue placeholder="Account Type" />
          </SelectTrigger>
          <SelectContent>
            {accountTypes.map((v) => (
              <SelectItem key={v} value={v}>
                {v}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {/* Department */}
        <Select
          value={filters.department}
          onValueChange={(v) =>
            setFilters((f) => ({ ...f, department: v }))
          }
        >
          <SelectTrigger>
            <SelectValue placeholder="Department" />
          </SelectTrigger>
          <SelectContent>
            {departments.map((v) => (
              <SelectItem key={v} value={v}>
                {v}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {/* Title */}
        <Select
          value={filters.title}
          onValueChange={(v) =>
            setFilters((f) => ({ ...f, title: v }))
          }
        >
          <SelectTrigger>
            <SelectValue placeholder="Title" />
          </SelectTrigger>
          <SelectContent>
            {titles.map((v) => (
              <SelectItem key={v} value={v}>
                {v}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </CollapsibleContent>
    </Collapsible>
  )
}
