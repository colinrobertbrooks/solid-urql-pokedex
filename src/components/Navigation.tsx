import { PokemonLogo } from './PokemonLogo';

const Navigation = () => (
  <nav class="flex items-center flex-wrap bg-white p-4 border-b shadow-2xl sticky top-0 mb-10 z-10">
    <div class="mx-auto -mb-12 max-w-[62%]">
      <PokemonLogo />
    </div>
  </nav>
);

export default Navigation;
