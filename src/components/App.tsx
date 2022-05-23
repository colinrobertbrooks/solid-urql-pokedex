import { For } from "solid-js";
import { pokemons } from "../data";
import Navigation from "./Navigation";
import PokemonCard from "./PokemonCard";

const App = () => (
  <>
    <Navigation />
    <main class="p-6">
      <div class="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4">
        <For each={pokemons}>{(pokemon) => <PokemonCard {...pokemon} />}</For>
      </div>
    </main>
  </>
);

export default App;
