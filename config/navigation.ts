import { NavigationConfig } from "@/types";

export const navigations: NavigationConfig[] = [
  {
    key: "cocotte",
    type: "group",
    label: "Cocotte",
    items: [
      {
        key: "lentilles-saucisses",
        type: "page",
        label: "Lentilles saucisses",
        href: "/lentilles-saucisses",
      },
    ],
  },
];
