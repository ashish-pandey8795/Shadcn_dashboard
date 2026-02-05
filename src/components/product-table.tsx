
import { useState } from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
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
  const [members, setMembers] = useState<Member[]>([])
  const [loading, setLoading] = useState(false)
  const [syncLoad, setSyncLoad] = useState(false)

  const fetchMembers = async () => {
    setLoading(true)
    try {
      const res = await fetch('/api/slack-members')
      const json = await res.json()
      if (json.success) {
        setMembers(json.data)
      }
    } catch (err) {
      console.error('Fetch failed', err)
    } finally {
      setLoading(false)
    }
  }

  const syncToSlack = async () => {
    setSyncLoad(true)
    try {
      const res = await fetch('/api/sync-slack', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ members }),
      })
      const json = await res.json()
      if (json.success) {
        alert('Members synced to Slack successfully!')
      } else {
        alert(json.message || 'Sync failed')
      }
    } catch (err) {
      console.error('Sync failed', err)
    } finally {
      setSyncLoad(false)
    }
  }

  return (
    <div className="bg-background p-6 space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">People</h2>
          <p className="text-sm text-muted-foreground">
            Manage Slack members
          </p>
        </div>

        <div className="flex gap-2">
          <Button variant="outline" onClick={fetchMembers} disabled={loading}>
            <Plus className="w-4 h-4 mr-2" />
            {loading ? 'Fetching…' : 'Get Members'}
          </Button>

          <Button variant="outline" onClick={syncToSlack} disabled={syncLoad}>
            <RefreshCw className="w-4 h-4 mr-2" />
            {syncLoad ? 'Syncing…' : 'Sync to Slack'}
          </Button>
        </div>
      </div>

      {/* Table */}
      <Table>

        <TableHeader>
          <TableRow className="h-12">
            <TableHead className="px-4 font-medium">Member ID</TableHead>
            <TableHead className="px-4 font-medium">Full Name</TableHead>
            <TableHead className="px-4 font-medium">Display Name</TableHead>
            <TableHead className="px-4 font-medium">Email</TableHead>
            <TableHead className="px-4 font-medium">Account Type</TableHead>
            <TableHead className="px-4 font-medium">Department</TableHead>
            <TableHead className="px-4 font-medium">Title</TableHead>
            <TableHead className="px-4 font-medium">Reporting Manager</TableHead>
            <TableHead className="px-4 font-medium">City</TableHead>
            <TableHead className="px-4 font-medium">State</TableHead>
            <TableHead className="px-4 font-medium text-right">
              Last Updated
            </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {members.length === 0 ? (
            <TableRow>
              <TableCell
                colSpan={11}
                className="text-center py-10 text-muted-foreground"
              >
                Click <strong>Get Members</strong> to load data
              </TableCell>
            </TableRow>
          ) : (
            members.map((member) => (
              <TableRow
                key={member.member_id}
                className="h-14 hover:bg-muted/40 transition"
              >
                <TableCell className="px-4 font-medium">
                  {member.member_id}
                </TableCell>

                <TableCell className="px-4">
                  {member.full_name}
                </TableCell>

                <TableCell className="px-4 text-muted-foreground">
                  @{member.display_name}
                </TableCell>

                <TableCell className="px-4">
                  {member.email}
                </TableCell>

                <TableCell className="px-4">
                  <Badge variant="outline">{member.account_type}</Badge>
                </TableCell>

                <TableCell className="px-4">
                  <Badge variant="secondary">{member.department}</Badge>
                </TableCell>

                <TableCell className="px-4">
                  {member.title}
                </TableCell>

                <TableCell className="px-4">
                  {member.reporting_manager}
                </TableCell>

                <TableCell className="px-4">
                  {member.city}
                </TableCell>

                <TableCell className="px-4">
                  {member.state}
                </TableCell>

                <TableCell className="px-4 text-right text-sm text-muted-foreground">
                  {new Date(member.updated_at).toLocaleString()}
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>

        <TableFooter>
          <TableRow>
            <TableCell colSpan={10}>Total Members</TableCell>
            <TableCell className="text-right font-medium">
              {members.length}
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  )
}
