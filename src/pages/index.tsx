import { Outlet } from 'solid-app-router';
import Navigation from '../components/Navigation';
import PokemonList from '../components/PokemonList';

const Root = () => {
  return (
    <>
      <Navigation />
      <main class="mx-auto p-6 max-w-screen-2xl">
        <PokemonList />
      </main>
      <Outlet />
    </>
  );
};

export default Root;
