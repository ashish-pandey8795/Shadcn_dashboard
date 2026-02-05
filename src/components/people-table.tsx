
import { useState } from 'react'
import {
  Table,
  TableBody,
  TableCell,

  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Plus, RefreshCw } from 'lucide-react'

type Member = {
  member_id: string
  full_name: string
  display_name: string
  email: string
  account_type: string
  department: string
  city: string
  state: string
  title: string
  reporting_manager: string
  updated_at: string
}

export function ProductTable() {
  
  const [members, setMembers] = useState<Member[]>([]);
  const [loading, setLoading] = useState(false);
  const [syncLoad, setSyncLoad] = useState(false);

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

  return (
    <div className="bg-background text-sm rounded-xl border md:max-w-[100%]">
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-5 border-b bg-muted/40">
        <div>
          <h2 className="text-2xl font-semibold">People</h2>
          <p className="text-sm text-muted-foreground">
            Manage Slack members
          </p>
        </div>

        <div className="flex gap-2">
          <Button
            variant="outline"
            onClick={fetchMembers}
            disabled={loading}
          >
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
        </div>
      </div>

      {/* Table */}
      <div className="relative">
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
    </div>
    );
}