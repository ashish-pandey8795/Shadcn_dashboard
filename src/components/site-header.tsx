
import { SidebarTrigger } from "@/components/ui/sidebar";
import { ModeToggle } from "./ModeToggle";
import { FaGithub } from "react-icons/fa";

import { ThemeSelector } from "./theme-selector";
import SearchInput from "./SearchInput";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import Link from "next/link";

export function SiteHeader() {
  return (
    <header className=" bg-white text-black dark:bg-black dark:text-white flex h-[var(--header-height)]  bg-background sticky top-0 py-6  z-50 w-full  shrink-0 items-center gap-2  transition-[width,height] ease-linear group-[.has-data-[collapsible=icon]]/sidebar-wrapper:h-[var(--header-height)] " >
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6 ">
        <SidebarTrigger className="-ml-1" />
   
  
        <div className="ml-auto flex items-center gap-2">

          <Link
            href="https://github.com/shadcn-ui/ui/tree/main/apps/v4/app/(examples)/dashboard"
            rel="noopener noreferrer"
            target="_blank"
            className="dark:text-foreground"
          >
            <FaGithub className="mr-2 cursor-pointer h-6 w-6" />
          </Link>

          <SearchInput />
          <ModeToggle />
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <ThemeSelector />


        </div>
      </div>
    </header>
  );
}
