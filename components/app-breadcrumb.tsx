"use client";

import { navigations } from "@/config/navigation";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "./ui/breadcrumb";
import { usePathname } from "next/navigation";
import { Fragment, useMemo } from "react";

export function AppBreadcrumb() {
  const pathname = usePathname();
  const breadcrumbItems = pathname.split("/").filter((item) => item);

  const navigationMap = useMemo(() => {
    const map = new Map<string, string>();
    navigations.flatMap((nav) => nav.items).forEach((item) => {
      map.set(item.href, item.label);
    });
    return map;
  }, []);

  const resolveLabel = (item: string) =>
    navigationMap.get(`/${item}`) ||
    item.charAt(0).toUpperCase() + item.slice(1);

  return (
    <Breadcrumb className="font-bitcount-single hidden md:block">
      <BreadcrumbList>
        <BreadcrumbItem>
          {breadcrumbItems.length === 0 ? (
            <BreadcrumbPage>Accueil</BreadcrumbPage>
          ) : (
            <BreadcrumbLink href="/">Accueil</BreadcrumbLink>
          )}
        </BreadcrumbItem>
        {breadcrumbItems.map((item, index) => (
          <Fragment key={item}>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              {index === breadcrumbItems.length - 1 ? (
                <BreadcrumbPage>{resolveLabel(item)}</BreadcrumbPage>
              ) : (
                <BreadcrumbLink href={`/${item}`}>
                  {resolveLabel(item)}
                </BreadcrumbLink>
              )}
            </BreadcrumbItem>
          </Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
