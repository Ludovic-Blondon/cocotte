import { PageWrapper } from "@/components/page-wrapper";
import { RecipeSection } from "@/components/recipe-section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lasagnes bolognaise",
  description:
    "Recette traditionnelle de lasagnes bolognaise avec une sauce mijotée maison, des couches de béchamel et de parmesan pour un plat réconfortant au four.",
};

export default function LasagnesBolognaise() {
  return (
    <PageWrapper>
      <h1>Lasagnes bolognaise</h1>

      <RecipeSection title="Ingrédients">
        <ul>
          <li>• 500 g de viande de bœuf hachée</li>
          <li>• 1 oignon</li>
          <li>• 2 carottes</li>
          <li>• 2 branches de céleri</li>
          <li>• 2 gousses d'ail</li>
          <li>• 800 g de tomates pelées en boîte ou de passata</li>
          <li>• 2 cuillères à soupe de concentré de tomates</li>
          <li>• 150 ml de vin rouge</li>
          <li>• 2 feuilles de laurier</li>
          <li>• Huile d’olive</li>
          <li>• Feuilles de lasagnes</li>
          <li>• 100 g de parmesan râpé</li>
          <li>• 1 boite de béchamel</li>
        </ul>
      </RecipeSection>

      <RecipeSection title="Préparation de la sauce bolognaise">
        <ul>
          <li>
            • Préparation des légumes : Émincez finement l’oignon, les carottes,
            le céleri et l’ail.
          </li>
          <li>
            • Cuisson de la viande : Dans une grande casserole, faites chauffer
            un peu d’huile d’olive à feu moyen. Ajoutez l’oignon et faites-le
            revenir jusqu’à ce qu’il soit translucide. Ajoutez les carottes, le
            céleri et l’ail, et faites revenir quelques minutes de plus.
          </li>
          <li>
            • Ajout de la viande : Ajoutez la viande hachée et faites-la cuire
            jusqu’à ce qu’elle soit bien dorée.
          </li>
          <li>
            • Ajout du vin et du concentré de tomates : Versez le vin rouge et
            laissez réduire de moitié. Ajoutez ensuite le concentré de tomates
            et mélangez bien.
          </li>
          <li>
            • Ajout des tomates et du bouillon : Ajoutez les tomates pelées ou
            la passata et les feuilles de laurier. Assaisonnez avec du sel et du
            poivre.
          </li>
          <li>
            • Cuisson longue : Laissez mijoter à feu doux pendant au moins 1
            heure (idéalement 2 heures), en remuant de temps en temps. La sauce
            doit être épaisse et riche en saveurs.
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
            une fine couche de sauce bolognaise. Ajoutez une couche de feuilles
            de lasagnes. Recouvrez de sauce bolognaise, puis de béchamel.
            Répétez l’opération jusqu’à épuisement des ingrédients, en terminant
            par une couche de béchamel.
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
