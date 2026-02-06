
// import { useState } from 'react'
// import {
//   Table,
//   TableBody,
//   TableCell,

//   TableHead,
//   TableHeader,
//   TableRow,
// } from '@/components/ui/table'
// import { Button } from '@/components/ui/button'
// import { Badge } from '@/components/ui/badge'
// import { Plus, RefreshCw } from 'lucide-react'

// type Member = {
//   member_id: string
//   full_name: string
//   display_name: string
//   email: string
//   account_type: string
//   department: string
//   city: string
//   state: string
//   title: string
//   reporting_manager: string
//   updated_at: string
// }

// export function ProductTable() {
  
//   const [members, setMembers] = useState<Member[]>([]);
//   const [loading, setLoading] = useState(false);
//   const [syncLoad, setSyncLoad] = useState(false);

//   const fetchMembers = async () => {
//     setLoading(true);
//     try {
//       const res = await fetch("/api/slack-members");
//       const json = await res.json();
//       if (json.success) setMembers(json.data);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const syncToSlack = async () => {
//     setSyncLoad(true);
//     try {
//       await fetch("/api/sync-slack", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ members }),
//       });
//     } finally {
//       setSyncLoad(false);
//     }
//   };

//   return (
//     <div className="bg-background text-sm rounded-xl border md:max-w-[100%]">
//       {/* Header */}
//       <div className="flex items-center justify-between px-6 py-5 border-b bg-muted/40">
//         <div>
//           <h2 className="text-2xl font-semibold">People</h2>
//           <p className="text-sm text-muted-foreground">
//             Manage Slack members
//           </p>
//         </div>

//         <div className="flex gap-2">
//           <Button
//             variant="outline"
//             onClick={fetchMembers}
//             disabled={loading}
//           >
//             <Plus className="w-4 h-4 mr-2" />
//             {loading ? "Fetching…" : "Get Members"}
//           </Button>

//           <Button
//             variant="outline"
//             onClick={syncToSlack}
//             disabled={syncLoad || members.length === 0}
//           >
//             <RefreshCw className="w-4 h-4 mr-2" />
//             {syncLoad ? "Syncing…" : "Sync to Slack"}
//           </Button>
//         </div>
//       </div>

//       {/* Table */}
//       <div className="relative">
//         <Table>
//           <TableHeader>
//             <TableRow className="h-12">
//               <TableHead>Member ID</TableHead>
//               <TableHead>Full Name</TableHead>
//               <TableHead>Display Name</TableHead>
//               <TableHead>Email</TableHead>
//               <TableHead>Account Type</TableHead>
//               <TableHead>Department</TableHead>
//               <TableHead>Title</TableHead>
//               <TableHead>Reporting Manager</TableHead>
//               <TableHead>City</TableHead>
//               <TableHead>State</TableHead>
//               <TableHead className="text-right">Last Updated</TableHead>
//             </TableRow>
//           </TableHeader>

//           <TableBody>
//             {members.length === 0 ? (
//               <TableRow>
//                 <TableCell
//                   colSpan={11}
//                   className="h-[280px] text-center text-muted-foreground"
//                 >
//                   Click <strong>Get Members</strong> to load data
//                 </TableCell>
//               </TableRow>
//             ) : (
//               members.map((m) => (
//                 <TableRow
//                   key={m.member_id}
//                   className="h-14 hover:bg-muted/40 transition"
//                 >
//                   <TableCell className="font-medium">
//                     {m.member_id}
//                   </TableCell>
//                   <TableCell>{m.full_name}</TableCell>
//                   <TableCell className="text-muted-foreground">
//                     @{m.display_name}
//                   </TableCell>
//                   <TableCell>{m.email}</TableCell>
//                   <TableCell>
//                     <Badge variant="outline">{m.account_type}</Badge>
//                   </TableCell>
//                   <TableCell>
//                     <Badge variant="secondary">{m.department}</Badge>
//                   </TableCell>
//                   <TableCell>{m.title}</TableCell>
//                   <TableCell>{m.reporting_manager}</TableCell>
//                   <TableCell>{m.city}</TableCell>
//                   <TableCell>{m.state}</TableCell>
//                   <TableCell className="text-right text-muted-foreground">
//                     {new Date(m.updated_at).toLocaleString()}
//                   </TableCell>
//                 </TableRow>
//               ))
//             )}
//           </TableBody>
//         </Table>
//       </div>
//     </div>
//     );
// }















"use client";

import * as React from "react";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { DateRange } from "react-day-picker";
import { format } from "date-fns";
import {
  Plus,
  RefreshCw,
  Filter,
  ChevronsUpDown,
  X,
  Calendar as CalendarIcon,
} from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Member = {
  member_id: string;
  full_name: string;
  display_name: string;
  email: string;
  account_type: string;
  department: string;
  title: string;
  reporting_manager: string;
  city: string;
  state: string;
  updated_at: string;
};

type FilterKey = "account_type" | "department" | "title";

export function ProductTable() {
  const [members, setMembers] = React.useState<Member[]>([]);
  const [loading, setLoading] = React.useState(false);
  const [syncLoad, setSyncLoad] = React.useState(false);

  const [filters, setFilters] = React.useState<
    Partial<Record<FilterKey, string>>
  >({});
  const [activeFilters, setActiveFilters] = React.useState<FilterKey[]>([]);
  const [filterOpen, setFilterOpen] = React.useState(false);

  const [dateRange, setDateRange] = React.useState<DateRange | undefined>();
  const [dateOpen, setDateOpen] = React.useState(false);
  const dateWrapperRef = React.useRef<HTMLDivElement>(null);

  const fetchMembers = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/slack-members");
      const json = await res.json();
      if (json.success) setMembers(json.data);
    } finally {
      setLoading(false);
    }
  };

  const syncToSlack = async () => {
    setSyncLoad(true);
    try {
      await fetch("/api/sync-slack", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ members }),
      });
    } finally {
      setSyncLoad(false);
    }
  };

  const options = {
    account_type: [...new Set(members.map((m) => m.account_type))],
    department: [...new Set(members.map((m) => m.department))],
    title: [...new Set(members.map((m) => m.title))],
  };

  const labels: Record<FilterKey, string> = {
    account_type: "Account Type",
    department: "Department",
    title: "Title",
  };

  const addFilter = (key: FilterKey) => {
    if (!activeFilters.includes(key)) setActiveFilters((f) => [...f, key]);
  };

  const removeFilter = (key: FilterKey) => {
    setActiveFilters((f) => f.filter((k) => k !== key));
    setFilters((f) => {
      const copy = { ...f };
      delete copy[key];
      return copy;
    });
  };

  const availableFilters: FilterKey[] = [
    "account_type",
    "department",
    "title",
  ].filter((f) => !activeFilters.includes(f));

  const filteredMembers = members.filter((m) => {
    const dropdownMatch = Object.entries(filters).every(
      ([key, value]) => m[key as FilterKey] === value,
    );

    if (!dateRange?.from) return dropdownMatch;

    const updatedDate = new Date(m.updated_at);
    const updated = new Date(
      updatedDate.getFullYear(),
      updatedDate.getMonth(),
      updatedDate.getDate(),
    );

    const start = new Date(
      dateRange.from.getFullYear(),
      dateRange.from.getMonth(),
      dateRange.from.getDate(),
    );
    const end = dateRange.to
      ? new Date(
          dateRange.to.getFullYear(),
          dateRange.to.getMonth(),
          dateRange.to.getDate(),
        )
      : start;
    return dropdownMatch && updated >= start && updated <= end;
  });

  React.useEffect(() => {
    function handleOutsideClick(e: MouseEvent) {
      if (
        dateWrapperRef.current &&
        !dateWrapperRef.current.contains(e.target as Node)
      ) {
        setDateOpen(false);
      }
    }
    if (dateOpen) document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, [dateOpen]);

  return (
    <div className="bg-background text-sm rounded-xl border w-full">
      <div className="flex items-center justify-between px-6 py-5 border-b bg-muted/40">
        <div>
          <h2 className="text-2xl font-semibold">People</h2>
          <p className="text-sm text-muted-foreground">Manage Slack members</p>
        </div>

        <div className="flex gap-2 items-center">
          <div className="relative inline-block" ref={dateWrapperRef}>
            <Button
              type="button"
              variant="outline"
              onClick={(e) => {
                e.stopPropagation();
                setDateOpen((v) => !v);
              }}
            >
              <CalendarIcon className="w-4 h-4 mr-2" />
              {dateRange?.from
                ? dateRange.to
                  ? `${format(dateRange.from, "dd MMM")} - ${format(dateRange.to, "dd MMM")}`
                  : format(dateRange.from, "dd MMM yyyy")
                : "Last Updated"}
            </Button>

            {dateOpen && (
              <div
                className="absolute top-full left-0 mt-2 z-[9999] rounded-md border bg-background shadow-xl p-3"
                onClick={(e) => e.stopPropagation()}
              >
                <Calendar
                  mode="range"
                  numberOfMonths={2}
                  selected={dateRange}
                  onSelect={setDateRange}
                />
                <div className="flex justify-between pt-2">
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => setDateRange(undefined)}
                  >
                    Clear
                  </Button>
                  <Button
                    size="sm"
                    onClick={() => setDateOpen(false)}
                    disabled={!dateRange?.from}
                  >
                    Apply
                  </Button>
                </div>
              </div>
            )}
          </div>

          <Button variant="outline" onClick={fetchMembers} disabled={loading}>
            <Plus className="w-4 h-4 mr-2" />
            {loading ? "Fetching…" : "Get Members"}
          </Button>
          <Button
            variant="outline"
            onClick={syncToSlack}
            disabled={syncLoad || members.length === 0}
          >
            <RefreshCw className="w-4 h-4 mr-2" />
            {syncLoad ? "Syncing…" : "Sync to Slack"}
          </Button>

          {(activeFilters.length > 0 || dateRange) && (
            <Button
              variant="destructive"
              size="sm"
              onClick={() => {
                setFilters({});
                setActiveFilters([]);
                setDateRange(undefined);
              }}
            >
              Reset Filters
            </Button>
          )}
        </div>
      </div>

      <Collapsible
        open={filterOpen}
        onOpenChange={setFilterOpen}
        className="border-b"
      >
        <div className="flex items-center justify-between px-6 py-3 bg-muted/30">
          <div className="flex items-center gap-2">
            <Filter className="h-4 w-4 text-muted-foreground" />
            <span className="font-medium">Filters</span>
          </div>

          <CollapsibleTrigger asChild>
            <Button variant="ghost" size="icon">
              <ChevronsUpDown
                className={`h-4 w-4 transition-transform ${filterOpen ? "rotate-180" : ""}`}
              />
            </Button>
          </CollapsibleTrigger>
        </div>

        <CollapsibleContent className="px-6 py-4 space-y-3">
          {activeFilters.map((key) => (
            <div key={key} className="flex gap-2 max-w-md">
              <Select
                value={filters[key]}
                onValueChange={(v) => setFilters((f) => ({ ...f, [key]: v }))}
              >
                <SelectTrigger>
                  <SelectValue placeholder={labels[key]} />
                </SelectTrigger>
                <SelectContent>
                  {options[key].map((v) => (
                    <SelectItem key={v} value={v}>
                      {v}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Button
                size="icon"
                variant="ghost"
                onClick={() => removeFilter(key)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          ))}

          {availableFilters.length > 0 && (
            <div className="flex gap-2 flex-wrap">
              {availableFilters.map((f) => (
                <Button
                  key={f}
                  size="sm"
                  variant="outline"
                  onClick={() => addFilter(f)}
                >
                  + {labels[f]}
                </Button>
              ))}
            </div>
          )}
        </CollapsibleContent>
      </Collapsible>

    <Table>
          <TableHeader>
            <TableRow className="h-12">
              <TableHead>Member ID</TableHead>
              <TableHead>Full Name</TableHead>
              <TableHead>Display Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Account Type</TableHead>
              <TableHead>Department</TableHead>
              <TableHead>Title</TableHead>
              <TableHead>Reporting Manager</TableHead>
              <TableHead>City</TableHead>
              <TableHead>State</TableHead>
              <TableHead className="text-right">Last Updated</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {members.length === 0 ? (
              <TableRow>
                <TableCell
                  colSpan={11}
                  className="h-[280px] text-center text-muted-foreground"
                >
                  Click <strong>Get Members</strong> to load data
                </TableCell>
              </TableRow>
            ) : (
              members.map((m) => (
                <TableRow
                  key={m.member_id}
                  className="h-14 hover:bg-muted/40 transition"
                >
                  <TableCell className="font-medium">
                    {m.member_id}
                  </TableCell>
                  <TableCell>{m.full_name}</TableCell>
                  <TableCell className="text-muted-foreground">
                    @{m.display_name}
                  </TableCell>
                  <TableCell>{m.email}</TableCell>
                  <TableCell>
                    <Badge variant="outline">{m.account_type}</Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant="secondary">{m.department}</Badge>
                  </TableCell>
                  <TableCell>{m.title}</TableCell>
                  <TableCell>{m.reporting_manager}</TableCell>
                  <TableCell>{m.city}</TableCell>
                  <TableCell>{m.state}</TableCell>
                  <TableCell className="text-right text-muted-foreground">
                    {new Date(m.updated_at).toLocaleString()}
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
    </div>
  );
}
