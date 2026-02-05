// "use client";

import { ChevronRight, type LucideIcon } from "lucide-react";
import { useState } from "react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";

type NavItem = {
  title: string;
  url: string;
  icon?: LucideIcon;
  items?: {
    title: string;
    url: string;
  }[];
};

export function NavMain({
  items,
  activePage,
  setActivePage,
}: {
  items: NavItem[];
  activePage: string;
  setActivePage: (title: string) => void;
}) {
  const [activeAccountSub, setActiveAccountSub] = useState<string | null>(null);

  const handleMainClick = (title: string) => {
    if (["Dashboard", "Kunban","People"].includes(title)) {
      setActivePage(title);
      setActiveAccountSub(null);
    }
  };

  const handleAccountSubClick = (title: string) => {
    setActiveAccountSub(title);
    setActivePage(title);
  };

  return (
    <SidebarGroup>
      <SidebarGroupLabel>Platform</SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item) => (
          <Collapsible
            key={item.title}
            asChild
            defaultOpen={item.title === "Application"}
            className="group/collapsible"
          >
            <SidebarMenuItem>
              <CollapsibleTrigger asChild>
                <SidebarMenuButton
                  tooltip={item.title}
                  onClick={() => handleMainClick(item.title)}
                  className={
                    ["Dashboard", "Kunban","People"].includes(item.title) &&
                    activePage === item.title
                      ? "bg-muted"
                      : ""
                  }
                >
                  {item.icon && <item.icon />}
                  <span>{item.title}</span>

                  {item.items?.length ? (
                    <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                  ) : null}
                </SidebarMenuButton>
              </CollapsibleTrigger>

              {item.title === "Application" && item.items?.length ? (
                <CollapsibleContent>
                  <SidebarMenuSub>
                    {item.items.map((subItem) => (
                      <SidebarMenuSubItem key={subItem.title}>
                        <SidebarMenuSubButton
                          asChild
                          className={
                            activeAccountSub === subItem.title ? "bg-muted" : ""
                          }
                        >
                          <a
                            href={subItem.url}
                            onClick={() => handleAccountSubClick(subItem.title)}
                          >
                            <span>{subItem.title}</span>
                          </a>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                </CollapsibleContent>
              ) : null}
            </SidebarMenuItem>
          </Collapsible>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
