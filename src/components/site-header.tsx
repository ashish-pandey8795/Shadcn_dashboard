
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

import { SidebarTrigger } from "@/components/ui/sidebar";
import { ModeToggle } from "./ModeToggle";
import { ThemeSelector } from "./theme-selector";
import SearchInput from "./SearchInput";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "./ui/avatar";
import { Button } from "./ui/button";

interface SiteHeaderProps {
  onLogout?: () => void;
}

export function SiteHeader({
  onLogout,
}: SiteHeaderProps): JSX.Element {
  return (
    <header className="bg-white text-black dark:bg-black dark:text-white flex h-[var(--header-height)] sticky top-0 z-50 w-full items-center">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
        <SidebarTrigger className="-ml-1" />

        <div className="ml-auto flex items-center gap-3">
          {/* <Link
            href="https://github.com/shadcn-ui/ui/tree/main/apps/v4/app/(examples)/dashboard"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="h-6 w-6 cursor-pointer" />
          </Link> */}

          {/* <SearchInput /> */}
          <ModeToggle />

          {/* <Avatar>
            <AvatarImage
              src="https://github.com/shadcn.png"
              alt="User Avatar"
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar> */}

          <ThemeSelector />

          {onLogout && (
            <Button
              onClick={onLogout}
              className="cursor-pointer"
              type="button"
              variant={"outline"}
            >
              Logout
            </Button>
          )}
        </div>
      </div>
    </header>
  );
}
