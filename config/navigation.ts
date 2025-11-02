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
      {
        key: "paupiettes",
        type: "page",
        label: "Paupiettes",
        href: "/paupiettes",
      },
    ],
  },
  {
    key: "four",
    type: "group",
    label: "Four",
    items: [
      {
        key: "lasagnes-bolognaise",
        type: "page",
        label: "Lasagnes bolognaise",
        href: "/lasagnes-bolognaise",
      },
      {
        key: "lasagnes-au-thon",
        type: "page",
        label: "Lasagnes au thon",
        href: "/lasagnes-au-thon",
      },
    ],
  },
];
