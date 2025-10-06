export type NavigationConfig = {
  key: string;
  type: "group";
  label: string;
  items: NavigationItem[];
};

export type NavigationItem = {
  key: string;
  type: "page";
  label: string;
  href: string;
};
