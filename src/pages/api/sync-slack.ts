import type { NextApiRequest, NextApiResponse } from "next";
import { WebClient } from "@slack/web-api";

const slack = new WebClient(process.env.SLACK_BOT_TOKEN);

/**
 * Slack Custom Profile Field IDs
 */
const FIELD_IDS = {
  TITLE: "Xf099ZKS1UDB",
  CITY: "Xf099ZKRR077",
  STATE: "Xf099ZKRR0A1",
  COUNTRY: "Xf099ZKRPRFX",
  MANAGER: "Xf099ZKT7Y3X",
  DIRECT_REPORTS: "Xf099ZKTJ1GV",
  ORGANIZATION: "Xf099ZKU2SJZ",
  DIVISION: "Xf099ZKU2QA1",
  DEPARTMENT: "Xf099ZKU2PC5",
  COST_CENTER: "Xf099ZKTV7C5",
} as const;

/**
 * Member payload type
 */
interface Member {
  member_id: string;
  full_name?: string;
  title?: string;
  city?: string;
  state?: string;
  department?: string;
  reporting_manager?: string;
  account_type?: string;
}

type ApiResponse =
  | { success: true; message: string }
  | { success: false; message: string; errors?: unknown[] };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse>
) {
  if (req.method !== "POST") {
    return res
      .status(405)
      .json({ success: false, message: "Method not allowed" });
  }

  const { members } = req.body as { members?: Member[] };

  if (!Array.isArray(members)) {
    return res
      .status(400)
      .json({ success: false, message: "Invalid members data" });
  }

  try {
    /**
     * Build map: Slack User ID -> Full Name
     * Used for reporting manager lookup
     */
    const memberMap: Record<string, string> = {};
    for (const m of members) {
      if (m.member_id && m.full_name) {
        memberMap[m.member_id] = m.full_name;
      }
    }

    /**
     * Update Slack profiles (skip Org Admins)
     */
    const updatePromises = members
      .filter(
        (member) =>
          member.member_id && member.account_type !== "Org Admin"
      )
      .map(async (member) => {
        const managerName =
          member.reporting_manager &&
          memberMap[member.reporting_manager]
            ? memberMap[member.reporting_manager]
            : "";

        try {
          await slack.users.profile.set({
            user: member.member_id,
            profile: {
              fields: {
                [FIELD_IDS.TITLE]: { value: member.title ?? "" },
                [FIELD_IDS.CITY]: { value: member.city ?? "" },
                [FIELD_IDS.STATE]: { value: member.state ?? "" },
                [FIELD_IDS.COUNTRY]: { value: "India" },
                [FIELD_IDS.MANAGER]: { value: managerName },
                [FIELD_IDS.DIRECT_REPORTS]: { value: "" },
                [FIELD_IDS.ORGANIZATION]: { value: "ACPL Exports" },
                [FIELD_IDS.DIVISION]: {
                  value: member.department ?? "",
                },
                [FIELD_IDS.DEPARTMENT]: {
                  value: member.department ?? "",
                },
                [FIELD_IDS.COST_CENTER]: { value: "" },
              },
            },
          });

          return { success: true, member_id: member.member_id };
        } catch (error) {
          return {
            success: false,
            member_id: member.member_id,
            error,
          };
        }
      });

    const results = await Promise.all(updatePromises);

    const failed = results.filter(
      (r) => r.success === false
    );

    if (failed.length > 0) {
      console.error("Some Slack updates failed:", failed);
      return res.status(500).json({
        success: false,
        message: "Some Slack profile updates failed",
        errors: failed,
      });
    }

    return res.status(200).json({
      success: true,
      message: "All members synced to Slack successfully",
    });
  } catch (error) {
    console.error("Slack sync failed:", error);
    return res.status(500).json({
      success: false,
      message: "Slack sync failed",
    });
  }
}
