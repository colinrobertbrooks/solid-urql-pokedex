import data from "../data/pokemon-data";

export type PokemonType =
  | "Grass"
  | "Poison"
  | "Fire"
  | "Flying"
  | "Water"
  | "Bug"
  | "Normal"
  | "Electric"
  | "Ground"
  | "Fairy"
  | "Fighting"
  | "Psychic"
  | "Rock"
  | "Steel"
  | "Ice"
  | "Ghost"
  | "Dragon"
  | "Dark";

// TODO: type this once data is removed
export type Pokemon = typeof data[0];
