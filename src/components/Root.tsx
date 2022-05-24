import { PokemonProvider } from "../contexts";
import App from "./App";

const Root = () => (
  <PokemonProvider>
    <App />
  </PokemonProvider>
);

export default Root;
