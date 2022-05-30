import { Outlet } from 'solid-app-router';
import Navigation from '../components/Navigation';
import PokemonList from '../components/PokemonList';

const Root = () => {
  return (
    <>
      <Navigation />
      <main class="p-4">
        <PokemonList />
      </main>
      <Outlet />
    </>
  );
};

export default Root;
