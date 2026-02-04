
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { isAuthenticated, logout } from "@/lib/auth";

import { AppSidebar } from "@/components/app-sidebar";
import { ChartAreaLegend } from "@/components/ChartAreaLegend";
import { ChartBarInteractive } from "@/components/ChartBarInteractive";
import { ChartPieDonutText } from "@/components/ChartPieDonutText";
import { RecentSales } from "@/components/RecentSales";
import { SectionCards } from "@/components/section-cards";
import { SiteHeader } from "@/components/site-header";
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar";
import { ProductTable } from "@/components/product-table";
import Profile from "@/components/Profile";
import Kunban from "@/components/Kunban";

export default function Page() {
  const router = useRouter();
  const [activePage, setActivePage] = useState("People");
  const [mounted, setMounted] = useState(false);

  // 🔐 AUTH GUARD
  useEffect(() => {
    if (!isAuthenticated()) {
      router.replace("/auth/login");
    } else {
      setMounted(true);
    }
  }, [router]);

  const handleLogout = () => {
    logout();
    router.push("/auth/login");
  };

  // Prevent flicker
  if (!mounted) return null;

  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
      className="themed-title"
    >
      <AppSidebar
        activePage={activePage}
        setActivePage={setActivePage}
      />

      <SidebarInset>

        <div className="bg-white dark:bg-black pt-4 sticky top-0 z-50 flex justify-between items-center px-4">
          <SiteHeader />
          <button
            onClick={handleLogout}
            className="text-sm underline text-gray-600"
          >
            Logout
          </button>
        </div>
        {/* Content */}
        <div className="bg-white dark:bg-black flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            {activePage === "Dashboard" ||
              activePage === "Login" ? (
              <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
                <SectionCards />

                <div className="px-4 lg:px-6 flex flex-col md:flex-row gap-4">
                  <div className="w-full md:w-[60%]">
                    <ChartBarInteractive />
                  </div>
                  <div className="w-full md:w-[40%]">
                    <RecentSales />
                  </div>
                </div>

                <div className="px-4 lg:px-6 flex flex-col md:flex-row gap-4">
                  <div className="w-full md:w-[60%]">
                    <ChartAreaLegend />
                  </div>
                  <div className="w-full md:w-[40%]">
                    <ChartPieDonutText />
                  </div>
                </div>
              </div>
            ) : activePage === "People" ? (
              <div className="px-4 py-6">
                <ProductTable />
              </div>
            ) : activePage === "Profile" ? (
              <div className="px-4 py-6">
                <Profile />
              </div>
            ) : activePage === "Kunban" ? (
              <div className="px-4 py-6">
                <Kunban />
              </div>
            ) : (
              <div className="flex flex-1 items-center justify-center text-gray-400 text-xl">
                Select a menu to view content
              </div>
            )}
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
