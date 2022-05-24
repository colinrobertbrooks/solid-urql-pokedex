import { Show } from "solid-js";
import { usePokemonContext } from "../contexts";
import { pokemonById, pokemonList } from "../data";
import Navigation from "./Navigation";
import PokemonList from "./PokemonList";
import PokemonModal from "./PokemonModal";

const App = () => {
  const { selectedPokemonId, setSelectedPokemonId } = usePokemonContext();
  const selectedPokemon = () =>
    selectedPokemonId() ? pokemonById.get(selectedPokemonId()!) : null;

  return (
    <>
      <Navigation />
      <main class="p-6">
        <PokemonList
          pokemonList={pokemonList}
          handleClick={(id) => setSelectedPokemonId(id)}
        />
      </main>
      <Show when={selectedPokemonId()}>
        <PokemonModal
          {...selectedPokemon()!}
          handleClose={() => setSelectedPokemonId(null)}
        />
      </Show>
    </>
  );
};

export default App;
