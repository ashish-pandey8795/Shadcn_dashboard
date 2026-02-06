import * as React from "react";
import {
  AppWindow,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Users,
  FileText,
  // SquareTerminal,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
// import { NavProjects } from "@/components/nav-projects"
// import { NavUser } from "@/components/nav-user";
import { TeamSwitcher } from "@/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";

// import { Flame, Leaf, Sun } from 'lucide-react';

// // This is sample data
const data = {
  user: {
    name: "Safexpress: Slack Central",
    email: "",
    avatar: "",
  },
  teams: [
    {
      name: "Safexpress: Slack Central",
      logo: GalleryVerticalEnd,
      plan: "",
    },
    // {
    //   name: "Acme Corp.",
    //   logo: AudioWaveform,
    //   plan: "Startup",
    // },
    // {
    //   name: "Evil Corp.",
    //   logo: Command,
    //   plan: "Free",
    // },
  ],
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: PieChart,
    },

    // },
    {
      title: "People",
      url: "/people",
      icon: Users,
    },



    {
      title: "Application",
      url: "#",
      icon: AppWindow,

      items: [
        {
          title: "Waybill",
          url: "#",
        },
        // {
        //   title: "Login",
        //   url: "/auth/login",
        // },
      ],
    },

    {
      title: "Logs",
      url: "/logs",
      icon: FileText,
    },
  ],
  projects: [
    {
      name: "Design Engineering",
      url: "#",
      icon: Frame,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Travel",
      url: "#",
      icon: Map,
    },
  ],
};

export function AppSidebar({
  activePage,
  setActivePage,
  ...props
}: React.ComponentProps<typeof Sidebar> & {
  activePage: string;
  setActivePage: (title: string) => void;
}) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
        {/* <TeamSwitcher teams={teams} /> */}
      </SidebarHeader>
      <SidebarContent>
        <NavMain
          items={data.navMain}
          activePage={activePage}
          setActivePage={setActivePage}
        />
      </SidebarContent>
      {/* <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter> */}
      <SidebarRail />
    </Sidebar>
  );
}
