
'use client';

import { useState } from 'react';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import {
  Plus,
  RefreshCw,
} from 'lucide-react';

type Member = {
  member_id: string;
  full_name: string;
  display_name: string;
  email: string;
  account_type: string;
  department: string;
  city: string;
  state: string;
  title: string;
  reporting_manager: string;
  updated_at: string;
};

export function ProductTable() {
  const [members, setMembers] = useState<Member[]>([]);
  const [loading, setLoading] = useState(false);
  const [syncLoad, setSyncLoad] = useState(false);

  const [selectedMember, setSelectedMember] = useState<Member | null>(null);

  const fetchMembers = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/slack-members');
      const json = await res.json();

      console.log('Fetched members:', json);

      if (json.success) {
        setMembers(json.data);
      }
    } catch (err) {
      console.error('Fetch failed', err);
    } finally {
      setLoading(false);
    }
  };

  const syncToSlack = async () => {
  setSyncLoad(true);
  try {
    const res = await fetch('/api/sync-slack', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ members }),
    });

    const json = await res.json();
    if (json.success) {
      alert('Members synced to Slack successfully!');
    } else {
      alert('Slack sync failed: ' + json.message);
    }
  } catch (err) {
    console.error('Slack sync error', err);
    alert('Slack sync error: ' + err);
  } finally {
    setSyncLoad(false);
  }
};




  return (
    <div className="bg-white dark:bg-black p-6 space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">People</h2>
          <p className="text-sm text-muted-foreground">
            Manage Slack members
          </p>
        </div>

        {/* TOP BUTTONS */}
        <div className="flex gap-2">
          <Button variant="outline" onClick={fetchMembers} disabled={loading} className='cursor-pointer'>
            <Plus className="w-4 h-4 mr-2" />
            {loading ? 'Fetching…' : 'Get Members'}
          </Button>

          <Button variant="outline" onClick={syncToSlack} disabled={syncLoad}  className='cursor-pointer'>
            <RefreshCw className="w-4 h-4 mr-2" />
            {syncLoad ? 'Syncing…' : 'Sync to Slack'}
          </Button>

        </div>
      </div>

      {/* Search + Filters */}
      {/* <div className="flex gap-2">
        <Input placeholder="Search people…" className="max-w-sm" />
        <Button variant="outline" className="flex items-center gap-2">
          <Filter className="w-4 h-4" />
          Department
        </Button>
      </div> */}

      {/* Table */}
      <div className="rounded-md border">
        <Table >
          <TableHeader className="bg-muted/50 sticky top-0 z-10">
            <TableRow className="rounded-md " >
              <TableHead className='font-bold'>Member ID</TableHead>
              <TableHead className='font-bold'>Full Name</TableHead>
              <TableHead className='font-bold'>Display Name</TableHead>
              <TableHead className='font-bold'>Email</TableHead>
              <TableHead className='font-bold'>Account Type</TableHead>
              <TableHead className='font-bold'>Department</TableHead>
              <TableHead className='font-bold'>Title</TableHead>
              <TableHead className='font-bold'>Reporting Manager</TableHead>
              <TableHead className='font-bold'>City</TableHead>
              <TableHead className='font-bold'>State</TableHead>
              <TableHead className='font-bold'>Last Updated</TableHead>
            
            </TableRow>
          </TableHeader>

          <TableBody>
            {members.length === 0 && !loading ? (
              <TableRow>
                <TableCell colSpan={11} className="text-center py-6">
                  Click <strong>Get Members</strong> to load data
                </TableCell>
              </TableRow>
            ) : (
              members.map((member) => (
                <TableRow key={member.member_id}>
                  <TableCell>{member.member_id}</TableCell>
                  <TableCell>{member.full_name}</TableCell>
                  <TableCell>@{member.display_name}</TableCell>
                  <TableCell>{member.email}</TableCell>
                  <TableCell>
                    <Badge variant="outline">{member.account_type}</Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant="secondary">{member.department}</Badge>
                  </TableCell>
                  <TableCell>{member.title}</TableCell>
                  <TableCell>{member.reporting_manager}</TableCell>
                  <TableCell>{member.city}</TableCell>
                  <TableCell>{member.state}</TableCell>
                  <TableCell>
                    {new Date(member.updated_at).toLocaleString()}
                  </TableCell>
                
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>

      </div>

      {/* Footer */}
      <div className="text-sm text-muted-foreground pt-4">
        {members.length} row(s) total.
      </div>

      {/* View Member Modal */}
      <Dialog
        open={!!selectedMember}
        onOpenChange={() => setSelectedMember(null)}
      >
        <DialogContent className="max-w-4xl">
          {selectedMember && (
            <>
              <DialogHeader>
                <DialogTitle className="text-xl">
                  {selectedMember.full_name}
                </DialogTitle>
                <p className="text-sm text-muted-foreground">
                  @{selectedMember.display_name}
                </p>
              </DialogHeader>

              <div className="grid grid-cols-2 gap-x-16 gap-y-4 text-sm mt-4">
                <div>
                  <p className="text-muted-foreground">Email</p>
                  <p className="font-medium">{selectedMember.email}</p>
                </div>

                <div>
                  <p className="text-muted-foreground">Account Type</p>
                  <Badge variant="outline">
                    {selectedMember.account_type}
                  </Badge>
                </div>

                <div>
                  <p className="text-muted-foreground">Department</p>
                  <Badge variant="secondary">
                    {selectedMember.department}
                  </Badge>
                </div>

                <div>
                  <p className="text-muted-foreground">Title</p>
                  <p className="font-medium">{selectedMember.title}</p>
                </div>

                <div>
                  <p className="text-muted-foreground">Location</p>
                  <p className="font-medium">
                    {selectedMember.city}, {selectedMember.state}
                  </p>
                </div>

                <div>
                  <p className="text-muted-foreground">Reporting Manager</p>
                  <p className="font-medium">{selectedMember.reporting_manager}</p>
                </div>

                <div className="col-span-2">
                  <p className="text-muted-foreground">Last Updated</p>
                  <p className="font-medium">
                    {new Date(selectedMember.updated_at).toLocaleString()}
                  </p>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}




