import {
  createClient as createUrqlClient,
  Provider as UrqlProvider,
} from "solid-urql";
import { PokemonProvider } from "../contexts";
import App from "./App";

const urqlClient = createUrqlClient({
  url: "https://trygql.formidable.dev/graphql/basic-pokedex",
});

const Root = () => (
  <UrqlProvider value={urqlClient}>
    <PokemonProvider>
      <App />
    </PokemonProvider>
  </UrqlProvider>
);

export default Root;
