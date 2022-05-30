export type PokemonType =
  | 'Grass'
  | 'Poison'
  | 'Fire'
  | 'Flying'
  | 'Water'
  | 'Bug'
  | 'Normal'
  | 'Electric'
  | 'Ground'
  | 'Fairy'
  | 'Fighting'
  | 'Psychic'
  | 'Rock'
  | 'Steel'
  | 'Ice'
  | 'Ghost'
  | 'Dragon'
  | 'Dark';

type PokemonDimensions = {
  minimum: string;
  maximum: string;
};

type EvolutionRequirement = {
  amount: number;
  name: string;
};

type Attack = {
  name: string;
  type: PokemonType;
  damage: number;
};

type AttackConnection = {
  fast: Attack[];
  special: Attack[];
};

export type Pokemon = {
  id: string;
  name: string;
  classification: string;
  types: PokemonType[];
  resistant: PokemonType[];
  weaknesses: PokemonType[];
  weight: PokemonDimensions;
  height: PokemonDimensions;
  fleeRate: number;
  evolutionRequirements: EvolutionRequirement[];
  evolutions: Pokemon[];
  maxCP: number;
  maxHP: number;
  attacks: AttackConnection;
};
