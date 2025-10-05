"use client";

import { useTheme } from "next-themes";
import { Button } from "./ui/button";
import { SunMoon } from "lucide-react";

export function ToggleTheme() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <SunMoon className="size-5" />
    </Button>
  );
}
