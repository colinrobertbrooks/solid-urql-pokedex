import { Outlet } from 'solid-app-router';
import Navigation from '../components/Navigation';
import PokemonList from '../components/PokemonList';
import { PokemonProvider } from '../contexts';

const Root = () => (
  <PokemonProvider>
    <Navigation />
    <main class="p-4">
      <PokemonList />
    </main>
    <Outlet />
  </PokemonProvider>
);

export default Root;
