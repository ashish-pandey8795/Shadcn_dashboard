



// 'use client';

// import * as React from 'react';
// import { ChevronsUpDown, Plus } from 'lucide-react';

// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuShortcut,
//   DropdownMenuTrigger,
// } from '@/components/ui/dropdown-menu';

// import {
//   SidebarMenu,
//   SidebarMenuButton,
//   SidebarMenuItem,
//   useSidebar,
// } from '@/components/ui/sidebar';

// import { useThemeConfig } from '@/components/active-theme';

// type Team = {
//   name: string;
//   logo: React.ElementType;
//   plan: string;
//   theme?: string; // Optional: attach a theme to each team
// };

// export function TeamSwitcher({ teams }: { teams: Team[] }) {
//   const { isMobile } = useSidebar();
//   const { setActiveTheme } = useThemeConfig();

//   const [activeTeam, setActiveTeam] = React.useState<Team>(teams[0]);

//   if (!activeTeam) return null;

//   const ActiveLogo = activeTeam.logo;

//   const handleSelectTeam = (team: Team, index: number) => {
//     setActiveTeam(team);
//     if (team.theme) setActiveTheme(team.theme);
//   };

//   return (
//     <SidebarMenu>
//       <SidebarMenuItem>
//         <DropdownMenu>
//           <DropdownMenuTrigger asChild>
//             <SidebarMenuButton
//               size="lg"
//               className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
//             >
//               <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
//                 <ActiveLogo className="size-4" />
//               </div>
//               <div className="grid flex-1 text-left text-sm leading-tight">
//                 <span className="truncate font-medium">{activeTeam.name}</span>
//                 <span className="truncate text-xs">{activeTeam.plan}</span>
//               </div>
//               <ChevronsUpDown className="ml-auto size-4 opacity-50" />
//             </SidebarMenuButton>
//           </DropdownMenuTrigger>
//           <DropdownMenuContent
//             className="min-w-56 rounded-lg"
//             align="start"
//             side={isMobile ? 'bottom' : 'right'}
//             sideOffset={4}
//           >
//             <DropdownMenuLabel className="text-xs text-muted-foreground">
//               Teams
//             </DropdownMenuLabel>

//             {teams.map((team, index) => {
//               const TeamLogo = team.logo;
//               return (
//                 <DropdownMenuItem
//                   key={team.name}
//                   onClick={() => handleSelectTeam(team, index)}
//                   className="gap-2 p-2"
//                 >
//                   <div className="flex size-6 items-center justify-center rounded-md border">
//                     <TeamLogo className="size-3.5 shrink-0" />
//                   </div>
//                   {team.name}
//                   <DropdownMenuShortcut>⌘{index + 1}</DropdownMenuShortcut>
//                 </DropdownMenuItem>
//               );
//             })}

//             <DropdownMenuSeparator />

//             <DropdownMenuItem className="gap-2 p-2">
//               <div className="flex size-6 items-center justify-center rounded-md border bg-transparent">
//                 <Plus className="size-4" />
//               </div>
//               <div className="font-medium text-muted-foreground">Add team</div>
//             </DropdownMenuItem>
//           </DropdownMenuContent>
//         </DropdownMenu>
//       </SidebarMenuItem>
//     </SidebarMenu>
//   );
// }




'use client';

import * as React from 'react';
import { ChevronsUpDown, Plus } from 'lucide-react';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from '@/components/ui/sidebar';

import { useThemeConfig } from '@/components/active-theme';

type Team = {
  name: string;
  logo: React.ElementType;
  plan: string;
  theme?: string;
};

export function TeamSwitcher({ teams }: { teams: Team[] }) {
  const { isMobile } = useSidebar();
  const { setActiveTheme } = useThemeConfig();
  const [activeTeam, setActiveTeam] = React.useState<Team>(teams[0]);

  if (!activeTeam) return null;

  const ActiveLogo = activeTeam.logo;

  const handleSelectTeam = (team: Team) => {
    setActiveTeam(team);
    if (team.theme) setActiveTheme(team.theme);
  };

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <div className=" bg-[var(--chart-1)] text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                <ActiveLogo className="size-4 " />
              </div>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-medium">{activeTeam.name}</span>
                <span className="truncate text-xs">{activeTeam.plan}</span>
              </div>
              <ChevronsUpDown className="ml-auto size-4 opacity-50" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>

          <DropdownMenuContent
            className="min-w-56 rounded-lg"
            align="start"
            side={isMobile ? 'bottom' : 'right'}
            sideOffset={4}
          >
            <DropdownMenuLabel className="text-xs text-muted-foreground">
              Teams
            </DropdownMenuLabel>

            {teams.map((team, index) => {
              const TeamLogo = team.logo;
              return (
                <DropdownMenuItem
                  key={team.name}
                  onClick={() => handleSelectTeam(team)}
                  className="gap-2 p-2"
                >
                  <div className="flex size-6 items-center justify-center rounded-md border">
                    <TeamLogo className="size-3.5 shrink-0" />
                  </div>
                  {team.name}
                  <DropdownMenuShortcut>⌘{index + 1}</DropdownMenuShortcut>
                </DropdownMenuItem>
              );
            })}

            <DropdownMenuSeparator />

            <DropdownMenuItem className="gap-2 p-2">
              <div className="flex size-6 items-center justify-center rounded-md border bg-transparent">
                <Plus className="size-4" />
              </div>
              <div className="font-medium text-muted-foreground">Add team</div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
