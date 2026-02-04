// pages/api/sync-slack.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { WebClient } from '@slack/web-api';

const slack = new WebClient(process.env.SLACK_BOT_TOKEN);

const FIELD_IDS = {
  TITLE: 'Xf099ZKS1UDB',
  CITY: 'Xf099ZKRR077',
  STATE: 'Xf099ZKRR0A1',
  COUNTRY: 'Xf099ZKRPRFX',
  MANAGER: 'Xf099ZKT7Y3X',
  DIRECT_REPORTS: 'Xf099ZKTJ1GV',
  ORGANIZATION: 'Xf099ZKU2SJZ',
  DIVISION: 'Xf099ZKU2QA1',
  DEPARTMENT: 'Xf099ZKU2PC5',
  COST_CENTER: 'Xf099ZKTV7C5',
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  const { members } = req.body;

  if (!members || !Array.isArray(members)) {
    return res.status(400).json({ success: false, message: 'Invalid members data' });
  }

  try {
    // Create a map of Slack IDs to full names for reporting_manager
    const memberMap: Record<string, string> = {};
    members.forEach(m => {
      if (m.member_id && m.full_name) {
        memberMap[m.member_id] = m.full_name;
      }
    });

    // Build promises for non-admin members
    const updatePromises = members
      .filter(member => member.member_id && member.account_type !== 'Org Admin')
      .map(member => {
        const managerName = memberMap[member.reporting_manager] || ''; // map ID to full name

        return slack.users.profile.set({
          user: member.member_id,
          profile: {
            fields: {
              [FIELD_IDS.TITLE]: { value: member.title || '' },
              [FIELD_IDS.CITY]: { value: member.city || '' },
              [FIELD_IDS.STATE]: { value: member.state || '' },
              [FIELD_IDS.COUNTRY]: { value: 'India' },
              [FIELD_IDS.MANAGER]: { value: managerName },
              [FIELD_IDS.DIRECT_REPORTS]: { value: '' },
              [FIELD_IDS.ORGANIZATION]: { value: 'ACPL Exports' },
              [FIELD_IDS.DIVISION]: { value: member.department || '' },
              [FIELD_IDS.DEPARTMENT]: { value: member.department || '' },
              [FIELD_IDS.COST_CENTER]: { value: '' },
            },
          },
        }).catch(err => ({ error: err, member_id: member.member_id }));
      });

    const results = await Promise.all(updatePromises);

    // Collect any failures
    const failed = results.filter(r => (r as any).error);
    if (failed.length > 0) {
      console.error('Some Slack updates failed:', failed);
      return res.status(500).json({
        success: false,
        message: 'Some Slack updates failed',
        errors: failed,
      });
    }

    res.status(200).json({ success: true, message: 'All members synced to Slack successfully!' });
  } catch (error: any) {
    console.error('Slack sync failed:', error);
    res.status(500).json({ success: false, message: 'Slack sync failed', error: error.message });
  }
}
