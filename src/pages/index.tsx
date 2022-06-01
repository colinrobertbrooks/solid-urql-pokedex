import { Outlet } from 'solid-app-router';
import Navigation from '../components/Navigation';
import PokemonList from '../components/PokemonList';

const Root = () => (
  <>
    <Navigation />
    <PokemonList />
    <Outlet />
  </>
);

export default Root;
