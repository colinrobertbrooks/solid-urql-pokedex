import {
  Accessor,
  createContext,
  createSignal,
  JSX,
  useContext,
} from "solid-js";

type PokemonContextValue = {
  selectedPokemonId: Accessor<string | null>;
  setSelectedPokemonId: (id: string | null) => null;
};

const PokemonContext = createContext<PokemonContextValue>();

// NOTE: destructuring props seems to break the context
export const PokemonProvider = (props: { children: JSX.Element }) => {
  const [selectedPokemonId, setSelectedPokemonId] = createSignal<string | null>(
    null
  );

  return (
    <PokemonContext.Provider
      value={{ selectedPokemonId, setSelectedPokemonId }}
    >
      {props.children}
    </PokemonContext.Provider>
  );
};

export const usePokemonContext = () => {
  const context = useContext(PokemonContext);
  if (!context) {
    throw new Error("usePokemonContext must be used within a PokemonProvider");
  }
  return context;
};
