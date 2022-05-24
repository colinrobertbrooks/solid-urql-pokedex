import Navigation from "./Navigation";
import PokemonList from "./PokemonList";
import PokemonModal from "./PokemonModal";

const App = () => {
  return (
    <>
      <Navigation />
      <main class="p-6">
        <PokemonList />
      </main>
      <PokemonModal />
    </>
  );
};

export default App;
