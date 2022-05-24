import { For } from "solid-js";
import { Pokemon } from "../types";
import PokemonCard from "./PokemonCard";

type PokemonListProps = {
  pokemonList: Pokemon[];
  handleClick: (id: string) => void;
};

const PokemonList = ({ pokemonList, handleClick }: PokemonListProps) => (
  <div class="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4">
    <For each={pokemonList}>
      {(pokemon) => <PokemonCard {...pokemon} handleClick={handleClick} />}
    </For>
  </div>
);

export default PokemonList;
