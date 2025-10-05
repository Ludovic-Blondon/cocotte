"use client";

import { Sidebar, SidebarContent } from "@/components/ui/sidebar";
import { usePathname } from "next/navigation";
import { Navigation } from "./navigation";
import { navigation } from "@/config/navigation";

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar className="font-bitcount-single">
      <SidebarContent>
        <Navigation navigation={navigation.navCocotte} pathname={pathname} />
      </SidebarContent>
    </Sidebar>
  );
}
