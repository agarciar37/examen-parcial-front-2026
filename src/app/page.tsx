import Cocktail from "@/components/Cocktail";
import RandomButton from "@/components/RandomButton";
import { getCocktails } from "@/api/cocktailAPI";

export default async function HomePage() {
  const data = await getCocktails();
  const drinks = data.drinks || [];

  return (
    <main className="home-page">
      <h1 className="title">Cocktails Parcial</h1>

      <RandomButton />

      <section className="cocktails-grid">
        {drinks.map((drink) => (
          <Cocktail key={drink.idDrink} drink={drink} />
        ))}
      </section>
    </main>
  );
}