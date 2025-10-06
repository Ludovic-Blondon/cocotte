import { PageWrapper } from "@/components/page-wrapper";

export default function Home() {
  return (
    <PageWrapper>
      <h1>Bienvenue sur Cocotte</h1>
      <section className="text-sm text-foreground/70">
        Découvrez une variété de recettes pour votre cocotte en fonte. La
        cuisson lente est une cuisson particulièrement savoureuse. Elle permet
        aux aliments de dégager tous leurs arômes et de rester fondants.
      </section>
    </PageWrapper>
  );
}
