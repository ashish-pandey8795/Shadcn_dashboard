import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { ModeToggle } from "./ModeToggle";
// import { FaGithub } from "react-icons/fa";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  // BreadcrumbPage,
  // BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { ThemeSelector } from "./theme-selector";
import SearchInput from "./SearchInput";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export function SiteHeader() {
  return (
    <header className="flex h-[var(--header-height)]  bg-background sticky top-0 py-6  z-50 w-full  shrink-0 items-center gap-2  transition-[width,height] ease-linear group-[.has-data-[collapsible=icon]]/sidebar-wrapper:h-[var(--header-height)] " >
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6 ">
        <SidebarTrigger className="-ml-1" />
        <Separator
          orientation="vertical"
          className="mx-2 data-[orientation=vertical]:h-4"
        />
        <div>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/dashboard">components</BreadcrumbLink>
              </BreadcrumbItem>
              {/* <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Overview</BreadcrumbPage>
              </BreadcrumbItem> */}
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <div className="ml-auto flex items-center gap-2">
             <Button variant="ghost" asChild size="sm" className="hidden sm:flex">
            <a
              href="https://github.com/shadcn-ui/ui/tree/main/apps/v4/app/(examples)/dashboard"
              rel="noopener noreferrer"
              target="_blank"
              className="dark:text-foreground"
            >
            GitHub
            </a>
          </Button>
          <SearchInput/>
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
