"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { usePathname } from "next/navigation";
import { Navigation } from "@/components/navigation";
import { navigations } from "@/config/navigation";
import Link from "next/link";

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar className="font-bitcount-single">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild className="sidebar-header-button">
              <Link href="/">
                <span className="text-base font-semibold">Cocotte</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        {navigations.map((item) => (
          <Navigation key={item.key} navigation={item} pathname={pathname} />
        ))}
      </SidebarContent>
    </Sidebar>
  );
}
