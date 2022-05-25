import { For } from "solid-js";
import { pokemonList } from "../data";
import PokemonCard from "./PokemonCard";

// TODO: query paginated list
const PokemonList = () => {
  return (
    <div class="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4">
      <For each={pokemonList}>{(pokemon) => <PokemonCard {...pokemon} />}</For>
    </div>
  );
};

export default PokemonList;
