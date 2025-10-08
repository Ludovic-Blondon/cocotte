import { PageWrapper } from "@/components/page-wrapper";
import { RecipeSection } from "@/components/recipe-section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lasagnes au thon",
  description:
    "Recette de lasagnes au thon avec une sauce tomate maison aux légumes, parfaite pour un repas réconfortant au four.",
};

export default function LasagnesAuThon() {
  return (
    <PageWrapper>
      <h1>Lasagnes au thon</h1>

      <RecipeSection title="Ingrédients">
        <ul>
          <li>• 500 g de thon en boîte au naturel</li>
          <li>• 1 oignon</li>
          <li>• 2 carottes</li>
          <li>• 2 branches de céleri</li>
          <li>• 2 gousses d'ail</li>
          <li>• 800 g de tomates pelées en boîte ou de passata</li>
          <li>• 2 cuillères à soupe de concentré de tomates</li>
          <li>• 150 ml de vin blanc</li>
          <li>• 2 feuilles de laurier</li>
          <li>• Huile d’olive</li>
          <li>• Feuilles de lasagnes</li>
          <li>• 100 g de parmesan râpé</li>
          <li>• 1 boite de béchamel</li>
        </ul>
      </RecipeSection>

      <RecipeSection title="Préparation de la sauce">
        <ul>
          <li>
            • Préparation des légumes : Émincez finement l'oignon, les carottes,
            le céleri et l'ail.
          </li>
          <li>
            • Cuisson des légumes : Dans une grande casserole, faites chauffer
            un peu d'huile d'olive à feu moyen. Ajoutez l'oignon et faites-le
            revenir jusqu'à ce qu'il soit translucide. Ajoutez les carottes, le
            céleri et l'ail, et faites revenir quelques minutes de plus.
          </li>
          <li>
            • Ajout du vin et du concentré de tomates : Versez le vin blanc et
            laissez réduire de moitié. Ajoutez ensuite le concentré de tomates
            et mélangez bien.
          </li>
          <li>
            • Ajout des tomates : Ajoutez les tomates pelées ou la passata et
            les feuilles de laurier. Assaisonnez avec du sel et du poivre.
          </li>
          <li>
            • Cuisson longue : Laissez mijoter à feu doux pendant au moins 1
            heure (idéalement 2 heures), en remuant de temps en temps. La sauce
            doit être épaisse et riche en saveurs.
          </li>
          <li>
            • Ajout du thon : Ajoutez le thon émietté 5 minutes avant la fin de
            la cuisson et mélangez délicatement.
          </li>
        </ul>
      </RecipeSection>

      <RecipeSection title="Assemblage des lasagnes :">
        <ul>
          <li>
            • Préchauffage du four : Préchauffez votre four à 180°C (350°F).
          </li>
          <li>
            • Montage des couches : Dans un plat à gratin, commencez par étaler
            une fine couche de sauce. Ajoutez une couche de feuilles de
            lasagnes. Recouvrez de sauce, puis de béchamel. Répétez l’opération
            jusqu’à épuisement des ingrédients, en terminant par une couche de
            béchamel.
          </li>
          <li>
            • Ajout du fromage : Saupoudrez le dessus avec le parmesan râpé et,
            si désiré, la mozzarella râpée.
          </li>
          <li>
            • Cuisson : Enfournez pendant environ 30-40 minutes, jusqu’à ce que
            les lasagnes soient bien dorées et bouillonnantes.
          </li>
          <li>
            • Repos : Laissez reposer les lasagnes pendant 10 minutes avant de
            les couper et de servir. Cela permettra aux couches de se
            stabiliser.
          </li>
        </ul>
      </RecipeSection>
    </PageWrapper>
  );
}
