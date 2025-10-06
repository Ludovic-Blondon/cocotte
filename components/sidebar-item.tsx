"use client";

import { SidebarMenuButton, SidebarMenuItem } from "./ui/sidebar";
import { NavigationItem } from "@/types";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function SidebarItem({ item }: { item: NavigationItem }) {
  const pathname = usePathname();

  return (
    <SidebarMenuItem key={item.href}>
      <SidebarMenuButton isActive={pathname === item.href} asChild>
        <Link href={item.href}>{item.label}</Link>
      </SidebarMenuButton>
    </SidebarMenuItem>
  );
}
