import { Outlet } from 'solid-app-router';
import Navigation from '../components/Navigation';
import PokemonList from '../components/PokemonList';

const Root = () => {
  return (
    <>
      <Navigation />
      <PokemonList />
      <Outlet />
    </>
  );
};

export default Root;
