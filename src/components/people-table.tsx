
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
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";

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

  const [dateRange, setDateRange] = React.useState<DateRange | undefined>();
  const [dateOpen, setDateOpen] = React.useState(false);
  const dateWrapperRef = React.useRef<HTMLDivElement>(null);
  const [openFilterPopover, setOpenFilterPopover] = React.useState<FilterKey | null>(null);


  // Fetch Slack members
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

  // Sync members to Slack
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

  // Available filter options
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
    setOpenFilterPopover(key);
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

  // Filter members by active filters and date range
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

  // Close date picker when clicking outside
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
      {/* Header */}
      <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center px-6 py-5 border-b bg-muted/40 gap-3">
        <div>
          <h2 className="text-2xl font-semibold">People</h2>
          <p className="text-sm text-muted-foreground">Manage Slack members</p>
        </div>

        <div className="flex flex-wrap gap-2 items-center">
          {/* Date Range Picker */}
          <div className="relative inline-block" ref={dateWrapperRef}>
            <Button
              type="button"
              variant="outline"
              onClick={(e) => {
                e.stopPropagation();
                setDateOpen((v) => !v);
              }}
              className="flex items-center gap-2"
            >
              <CalendarIcon className="w-4 h-4" />
              {dateRange?.from
                ? dateRange.to
                  ? `${format(dateRange.from, "dd MMM")} - ${format(
                    dateRange.to,
                    "dd MMM",
                  )}`
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

          {/* Get Members Button */}
          <Button variant="outline" onClick={fetchMembers} disabled={loading}>
            <Plus className="w-4 h-4 mr-2" />
            {loading ? "Fetching…" : "Get Members"}
          </Button>

          {/* Sync Button */}
          <Button
            variant="outline"
            onClick={syncToSlack}
            disabled={syncLoad || members.length === 0}
          >
            <RefreshCw className="w-4 h-4 mr-2" />
            {syncLoad ? "Syncing…" : "Sync to Slack"}
          </Button>

          {/* Reset Filters */}
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

      {/* Filters Section */}
      <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center px-6 py-4 gap-3 border-b bg-muted/30">
        {/* Left: Active Filters */}
        <div className="flex flex-wrap gap-2 items-center">
          {activeFilters.map((key) => {
            const values = [...new Set(members.map((m) => m[key]))];
            return (
              <Popover
                key={key}
                open={openFilterPopover === key}
                onOpenChange={(open) =>
                  setOpenFilterPopover(open ? key : null)
                }
              >
                <PopoverTrigger asChild>
                  <div className="flex gap-2 items-center">
                    <Button
                      size="sm"
                      variant="outline"
                      className="min-w-[150px] flex justify-between cursor-pointer"
                    >
                      {filters[key] || `Select ${labels[key]}`}
                    </Button>
                    <Button
                      size="icon"
                      variant="ghost"
                      onClick={() => {
                        removeFilter(key);
                        if (openFilterPopover === key) setOpenFilterPopover(null);
                      }}
                    >
                      <X className="h-4 w-4 cursor-pointer" />
                    </Button>
                  </div>
                </PopoverTrigger>
                <PopoverContent className="w-[220px] p-0">
                  <Command>
                    <CommandInput placeholder={`Search ${labels[key]}`} autoFocus />
                    <CommandEmpty>No results found.</CommandEmpty>
                    <CommandGroup>
                      {values.map((v) => (
                        <CommandItem
                          key={v}
                          onSelect={() => {
                            setFilters((f) => ({ ...f, [key]: v }));
                            setOpenFilterPopover(null); // close popover after select
                          }}
                        >
                          {v}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </Command>
                </PopoverContent>
              </Popover>
            );
          })}

          {/* Add More Filter button */}
          {activeFilters.length > 0 && availableFilters.length > 0 && (
            <Popover>
              <PopoverTrigger>
                <Button size="sm" variant="outline" className="cursor-pointer ">
                  + Add Filter
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-[220px] p-0">
                <Command>
                  <CommandInput placeholder="Search filter..." />
                  <CommandEmpty>No filter found.</CommandEmpty>
                  <CommandGroup>
                    {availableFilters.map((f) => (
                      <CommandItem key={f} onSelect={() => addFilter(f)}>
                        {labels[f]}
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </Command>
              </PopoverContent>
            </Popover>
          )}
        </div>

        {/* Right: Main Filter button (always present) */}
        {availableFilters.length > 0 && (
          <Popover>
            <PopoverTrigger>
              <Button
                size="sm"
                variant="outline"
                className="flex items-center gap-2 cursor-pointer"
              >
                <Filter className="w-4 h-4" /> Filter
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] ml-[-80px] p-0">
              <Command>
                <CommandInput placeholder="Search filter..." />
                <CommandEmpty>No filter found.</CommandEmpty>
                <CommandGroup>
                  {availableFilters.map((f) => (
                    <CommandItem key={f} onSelect={() => addFilter(f)}>
                      {labels[f]}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </Command>
            </PopoverContent>
          </Popover>
        )}
      </div>


      {/* Table */}
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
            filteredMembers.map((m) => (
              <TableRow
                key={m.member_id}
                className="h-14 hover:bg-muted/40 transition"
              >
                <TableCell className="font-medium">{m.member_id}</TableCell>
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
