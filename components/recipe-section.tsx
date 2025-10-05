import { ReactNode } from "react";

interface RecipeSectionProps {
  title: string;
  children: ReactNode;
}

export function RecipeSection({ title, children }: RecipeSectionProps) {
  return (
    <section className="flex flex-col gap-2 text-sm text-foreground/70">
      <h2 className="text-md text-foreground/80 font-semibold">{title}</h2>
      {children}
    </section>
  );
}
