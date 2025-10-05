import { PageWrapper } from "@/components/page-wrapper";
import { RecipeSection } from "@/components/recipe-section";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lentilles aux saucisses - Cuisson lente en cocotte Staub",
  description:
    "Recette de lentilles aux saucisses cuites lentement en cocotte Staub. Les lentilles absorbent progressivement les saveurs fumées tout en restant fondantes.",
};

export default function LentillesSaucisses() {
  return (
    <PageWrapper>
      <h1>Lentilles aux saucisses - Cuisson lente en cocotte Staub</h1>

      <section className="text-sm text-foreground/70">
        Cette méthode de cuisson lente permet aux lentilles d'absorber
        progressivement les saveurs fumées des saucisses tout en restant
        fondantes sans se défaire. La cocotte Staub, avec son couvercle qui crée
        un effet d'arrosage naturel, est idéale pour cette préparation.
      </section>

      <RecipeSection title="Ingrédients">
        <ul>
          <li>• 250-300g de lentilles vertes (du Puy de préférence)</li>
          <li>• 1 Morteau ou 1 Montbéliard et 4 Franckforts</li>
          <li>• 1 oignon</li>
          <li>• 2 carottes</li>
          <li>• 2-3 gousses d'ail</li>
          <li>• Bouquet garni (thym, laurier, persil)</li>
          <li>• 600-900ml d'eau ou de bouillon</li>
          <li>• Huile d'olive</li>
        </ul>
      </RecipeSection>

      <RecipeSection title="Préparation">
        <ul>
          <li>• Fais blanchir les lentilles.</li>
          <li>• Émince l'oignon finement.</li>
          <li>• Coupe les carottes en rondelles ou en dés.</li>
          <li>• Coupe les saucisses en gros morceaux.</li>
        </ul>
      </RecipeSection>

      <RecipeSection title="Pré-Cuisson">
        <ul>
          <li>
            • Dans ta cocotte Staub, fais revenir l'oignon, les carottes et
            l'ail émincé dans un filet d'huile d'olive pendant 1-2 minutes
          </li>
          <li>
            • Ajoute les morceaux de saucisses et fais-les revenir pendant 1-2
            minutes, puis baisse le feu et fais mijoter pendant 5 minutes.
          </li>
        </ul>
      </RecipeSection>

      <RecipeSection title="Cuisson">
        <ul>
          <li>• Ajoute les lentilles et le bouquet garni.</li>
          <li>• Ajoute l'eau ou le bouillon.</li>
          <li>• Mélange délicatement.</li>
          <li>• Enfourne la cocotte dans un four préchauffé à 140°C.</li>
          <li>• Laisse cuire pendant 2h30.</li>
          <li>• Sers chaud.</li>
        </ul>
      </RecipeSection>

      <section className="max-w-2xl">
        <AspectRatio ratio={16 / 9}>
          <Image
            src="/lentilles-saucisses.jpeg"
            alt="Plat de lentilles aux saucisses cuites en cocotte Staub, servies dans une assiette blanche"
            className="rounded-md object-cover"
            fill
            priority
          />
        </AspectRatio>
      </section>
    </PageWrapper>
  );
}
