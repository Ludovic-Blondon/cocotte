import { PageWrapper } from "@/components/page-wrapper";
import { RecipeSection } from "@/components/recipe-section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Paupiettes",
  description: "Recette de paupiettes",
};

export default function Paupiettes() {
  return (
    <PageWrapper>
      <h1>Paupiettes - Cuisson lente en cocotte Staub</h1>

      <section className="text-sm text-foreground/70">
        Cette recette de paupiettes est une cuisson lente en cocotte Staub. Elle
        permet de cuire les paupiettes de manière uniforme et de les garder
        fondantes.
      </section>

      <RecipeSection title="Ingrédients">
        <ul>
          <li>• 4 paupiettes de veau</li>
          <li>• 1 gros oignon émincé</li>
          <li>• Quelques champignons de Paris émincés</li>
          <li>• 1 kg de pommes de terre, coupées en morceaux</li>
          <li>• 1 sachet de crème fraîche</li>
          <li>• 1 cuillère à soupe de moutarde</li>
          <li>• 1 verre de vin blanc (optionnel)</li>
        </ul>
      </RecipeSection>

      <RecipeSection title="Pré-Cuisson">
        <ul>
          <li>
            • Dans ta cocotte Staub, fais revenir l'oignon dans un filet d'huile
            pendant 1-2 minutes
          </li>
          <li>
            • Ajoute les paupiettes et fais-les dorer sur toutes les faces
          </li>
          <li>
            • Ajoute ensuite les pommes de terre et fais-les colorer légèrement
          </li>
        </ul>
      </RecipeSection>

      <RecipeSection title="Préparation de la sauce">
        <ul>
          <li>• Retire les paupiettes et réserve-les.</li>
          <li>
            • Verse le vin blanc dans la cocotte pour déglacer, gratte bien le
            fond avec une spatule.
          </li>
          <li>
            • Ajoute la crème fraîche et la moutarde, mélange bien avec les
            oignons et les pommes de terre.
          </li>
          <li>• Assaisonne avec du sel, du poivre et du muscade.</li>
          <li>• Replace les paupiettes et ajoute les champignons crus.</li>
        </ul>
      </RecipeSection>

      <RecipeSection title="Cuisson au four">
        <ul>
          <li>• Couvre avec le couvercle.</li>
          <li>• Enfourne 2h à 160°C.</li>
          <li>
            • Retire le couvercle sur les 15 dernières minutes si tu veux que le
            dessus dore légèrement.
          </li>
          <li>
            • Laisse reposer 10 minutes hors du four avant de servir, couvercle
            légèrement ouvert (la sauce épaissira naturellement).
          </li>
        </ul>
      </RecipeSection>
    </PageWrapper>
  );
}
