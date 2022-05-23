// https://github.com/FormidableLabs/trygql/blob/main/graphql/basic-pokedex/data/pokemon-data.json
export const pokemons = [
  {
    id: "001",
    name: "Bulbasaur",
    classification: "Seed Pokémon",
    types: ["Grass", "Poison"],
    resistant: ["Water", "Electric", "Grass", "Fighting", "Fairy"],
    weaknesses: ["Fire", "Ice", "Flying", "Psychic"],
    weight: {
      minimum: "6.04kg",
      maximum: "7.76kg",
    },
    height: {
      minimum: "0.61m",
      maximum: "0.79m",
    },
    fleeRate: 0.1,
    evolutionRequirements: {
      amount: 25,
      name: "Bulbasaur candies",
    },
    evolutions: [
      {
        id: 2,
        name: "Ivysaur",
      },
      {
        id: 3,
        name: "Venusaur",
      },
    ],
    maxCP: 951,
    maxHP: 1071,
    attacks: {
      fast: [
        {
          name: "Tackle",
          type: "Normal",
          damage: 12,
        },
        {
          name: "Vine Whip",
          type: "Grass",
          damage: 7,
        },
      ],
      special: [
        {
          name: "Power Whip",
          type: "Grass",
          damage: 70,
        },
        {
          name: "Seed Bomb",
          type: "Grass",
          damage: 40,
        },
        {
          name: "Sludge Bomb",
          type: "Poison",
          damage: 55,
        },
      ],
    },
  },
  {
    id: "002",
    name: "Ivysaur",
    classification: "Seed Pokémon",
    types: ["Grass", "Poison"],
    resistant: ["Water", "Electric", "Grass", "Fighting", "Fairy"],
    weaknesses: ["Fire", "Ice", "Flying", "Psychic"],
    weight: {
      minimum: "11.38kg",
      maximum: "14.63kg",
    },
    height: {
      minimum: "0.88m",
      maximum: "1.13m",
    },
    fleeRate: 0.07,
    "Previous evolution(s)": [
      {
        id: 1,
        name: "Bulbasaur",
      },
    ],
    evolutionRequirements: {
      amount: 100,
      name: "Bulbasaur candies",
    },
    evolutions: [
      {
        id: 3,
        name: "Venusaur",
      },
    ],
    maxCP: 1483,
    maxHP: 1632,
    attacks: {
      fast: [
        {
          name: "Razor Leaf",
          type: "Grass",
          damage: 15,
        },
        {
          name: "Vine Whip",
          type: "Grass",
          damage: 7,
        },
      ],
      special: [
        {
          name: "Power Whip",
          type: "Grass",
          damage: 70,
        },
        {
          name: "Sludge Bomb",
          type: "Poison",
          damage: 55,
        },
        {
          name: "Solar Beam",
          type: "Grass",
          damage: 120,
        },
      ],
    },
  },
  {
    id: "003",
    name: "Venusaur",
    classification: "Seed Pokémon",
    types: ["Grass", "Poison"],
    resistant: ["Water", "Electric", "Grass", "Fighting", "Fairy"],
    weaknesses: ["Fire", "Ice", "Flying", "Psychic"],
    weight: {
      minimum: "87.5kg",
      maximum: "112.5kg",
    },
    height: {
      minimum: "1.75m",
      maximum: "2.25m",
    },
    fleeRate: 0.05,
    "Previous evolution(s)": [
      {
        id: 1,
        name: "Bulbasaur",
      },
      {
        id: 2,
        name: "Ivysaur",
      },
    ],
    maxCP: 2392,
    maxHP: 2580,
    attacks: {
      fast: [
        {
          name: "Razor Leaf",
          type: "Grass",
          damage: 15,
        },
        {
          name: "Vine Whip",
          type: "Grass",
          damage: 7,
        },
      ],
      special: [
        {
          name: "Petal Blizzard",
          type: "Grass",
          damage: 65,
        },
        {
          name: "Sludge Bomb",
          type: "Poison",
          damage: 55,
        },
        {
          name: "Solar Beam",
          type: "Grass",
          damage: 120,
        },
      ],
    },
  },
  {
    id: "004",
    name: "Charmander",
    classification: "Lizard Pokémon",
    types: ["Fire"],
    resistant: ["Fire", "Grass", "Ice", "Bug", "Steel", "Fairy"],
    weaknesses: ["Water", "Ground", "Rock"],
    weight: {
      minimum: "7.44kg",
      maximum: "9.56kg",
    },
    height: {
      minimum: "0.53m",
      maximum: "0.68m",
    },
    fleeRate: 0.1,
    evolutionRequirements: {
      amount: 25,
      name: "Charmander candies",
    },
    evolutions: [
      {
        id: 5,
        name: "Charmeleon",
      },
      {
        id: 6,
        name: "Charizard",
      },
    ],
    maxCP: 841,
    maxHP: 955,
    attacks: {
      fast: [
        {
          name: "Ember",
          type: "Fire",
          damage: 10,
        },
        {
          name: "Scratch",
          type: "Normal",
          damage: 6,
        },
      ],
      special: [
        {
          name: "Flame Burst",
          type: "Fire",
          damage: 30,
        },
        {
          name: "Flame Charge",
          type: "Fire",
          damage: 25,
        },
        {
          name: "Flamethrower",
          type: "Fire",
          damage: 55,
        },
      ],
    },
  },
  {
    id: "005",
    name: "Charmeleon",
    classification: "Flame Pokémon",
    types: ["Fire"],
    resistant: ["Fire", "Grass", "Ice", "Bug", "Steel", "Fairy"],
    weaknesses: ["Water", "Ground", "Rock"],
    weight: {
      minimum: "16.63kg",
      maximum: "21.38kg",
    },
    height: {
      minimum: "0.96m",
      maximum: "1.24m",
    },
    fleeRate: 0.07,
    "Previous evolution(s)": [
      {
        id: 4,
        name: "Charmander",
      },
    ],
    evolutionRequirements: {
      amount: 100,
      name: "Charmander candies",
    },
    evolutions: [
      {
        id: 6,
        name: "Charizard",
      },
    ],
    maxCP: 1411,
    maxHP: 1557,
    attacks: {
      fast: [
        {
          name: "Ember",
          type: "Fire",
          damage: 10,
        },
        {
          name: "Scratch",
          type: "Normal",
          damage: 6,
        },
      ],
      special: [
        {
          name: "Fire Punch",
          type: "Fire",
          damage: 40,
        },
        {
          name: "Flame Burst",
          type: "Fire",
          damage: 30,
        },
        {
          name: "Flamethrower",
          type: "Fire",
          damage: 55,
        },
      ],
    },
  },
  {
    id: "006",
    name: "Charizard",
    classification: "Flame Pokémon",
    types: ["Fire", "Flying"],
    resistant: ["Fire", "Grass", "Fighting", "Bug", "Steel", "Fairy"],
    weaknesses: ["Water", "Electric", "Rock"],
    weight: {
      minimum: "79.19kg",
      maximum: "101.81kg",
    },
    height: {
      minimum: "1.49m",
      maximum: "1.91m",
    },
    fleeRate: 0.05,
    "Previous evolution(s)": [
      {
        id: 4,
        name: "Charmander",
      },
      {
        id: 5,
        name: "Charmeleon",
      },
    ],
    maxCP: 2413,
    maxHP: 2602,
    attacks: {
      fast: [
        {
          name: "Ember",
          type: "Fire",
          damage: 10,
        },
        {
          name: "Wing Attack",
          type: "Flying",
          damage: 9,
        },
      ],
      special: [
        {
          name: "Dragon Claw",
          type: "Dragon",
          damage: 35,
        },
        {
          name: "Fire Blast",
          type: "Fire",
          damage: 100,
        },
        {
          name: "Flamethrower",
          type: "Fire",
          damage: 55,
        },
      ],
    },
  },
  {
    id: "007",
    name: "Squirtle",
    classification: "Tiny Turtle Pokémon",
    types: ["Water"],
    resistant: ["Fire", "Water", "Ice", "Steel"],
    weaknesses: ["Electric", "Grass"],
    weight: {
      minimum: "7.88kg",
      maximum: "10.13kg",
    },
    height: {
      minimum: "0.44m",
      maximum: "0.56m",
    },
    fleeRate: 0.1,
    evolutionRequirements: {
      amount: 25,
      name: "Squirtle candies",
    },
    evolutions: [
      {
        id: 8,
        name: "Wartortle",
      },
      {
        id: 9,
        name: "Blastoise",
      },
    ],
    maxCP: 891,
    maxHP: 1008,
    attacks: {
      fast: [
        {
          name: "Bubble",
          type: "Water",
          damage: 25,
        },
        {
          name: "Tackle",
          type: "Normal",
          damage: 12,
        },
      ],
      special: [
        {
          name: "Aqua Jet",
          type: "Water",
          damage: 25,
        },
        {
          name: "Aqua Tail",
          type: "Water",
          damage: 45,
        },
        {
          name: "Water Pulse",
          type: "Water",
          damage: 35,
        },
      ],
    },
  },
  {
    id: "008",
    name: "Wartortle",
    classification: "Turtle Pokémon",
    types: ["Water"],
    resistant: ["Fire", "Water", "Ice", "Steel"],
    weaknesses: ["Electric", "Grass"],
    weight: {
      minimum: "19.69kg",
      maximum: "25.31kg",
    },
    height: {
      minimum: "0.88m",
      maximum: "1.13m",
    },
    fleeRate: 0.07,
    "Previous evolution(s)": [
      {
        id: 7,
        name: "Squirtle",
      },
    ],
    evolutionRequirements: {
      amount: 100,
      name: "Squirtle candies",
    },
    evolutions: [
      {
        id: 9,
        name: "Blastoise",
      },
    ],
    maxCP: 1435,
    maxHP: 1582,
    attacks: {
      fast: [
        {
          name: "Bite",
          type: "Dark",
          damage: 6,
        },
        {
          name: "Water Gun",
          type: "Water",
          damage: 6,
        },
      ],
      special: [
        {
          name: "Aqua Jet",
          type: "Water",
          damage: 25,
        },
        {
          name: "Gunk Shot",
          type: "Poison",
          damage: 65,
        },
        {
          name: "Hydro Pump",
          type: "Water",
          damage: 90,
        },
        {
          name: "Ice Beam",
          type: "Ice",
          damage: 65,
        },
      ],
    },
  },
  {
    id: "009",
    name: "Blastoise",
    classification: "Shellfish Pokémon",
    types: ["Water"],
    resistant: ["Fire", "Water", "Ice", "Steel"],
    weaknesses: ["Electric", "Grass"],
    weight: {
      minimum: "74.81kg",
      maximum: "96.19kg",
    },
    height: {
      minimum: "1.4m",
      maximum: "1.8m",
    },
    fleeRate: 0.05,
    "Previous evolution(s)": [
      {
        id: 7,
        name: "Squirtle",
      },
      {
        id: 8,
        name: "Wartortle",
      },
    ],
    maxCP: 2355,
    maxHP: 2542,
    attacks: {
      fast: [
        {
          name: "Bite",
          type: "Dark",
          damage: 6,
        },
        {
          name: "Water Gun",
          type: "Water",
          damage: 6,
        },
      ],
      special: [
        {
          name: "Flash Cannon",
          type: "Steel",
          damage: 60,
        },
        {
          name: "Gunk Shot",
          type: "Poison",
          damage: 65,
        },
        {
          name: "Hydro Pump",
          type: "Water",
          damage: 90,
        },
        {
          name: "Ice Beam",
          type: "Ice",
          damage: 65,
        },
      ],
    },
  },
  {
    id: "010",
    name: "Caterpie",
    classification: "Worm Pokémon",
    types: ["Bug"],
    resistant: ["Grass", "Fighting", "Ground"],
    weaknesses: ["Fire", "Flying", "Rock"],
    weight: {
      minimum: "2.54kg",
      maximum: "3.26kg",
    },
    height: {
      minimum: "0.26m",
      maximum: "0.34m",
    },
    fleeRate: 0.2,
    evolutionRequirements: {
      amount: 12,
      name: "Caterpie candies",
    },
    evolutions: [
      {
        id: 11,
        name: "Metapod",
      },
      {
        id: 12,
        name: "Butterfree",
      },
    ],
    maxCP: 367,
    maxHP: 443,
    attacks: {
      fast: [
        {
          name: "Bug Bite",
          type: "Bug",
          damage: 5,
        },
        {
          name: "Tackle",
          type: "Normal",
          damage: 12,
        },
      ],
      special: [
        {
          name: "Struggle",
          type: "Normal",
          damage: 15,
        },
      ],
    },
  },
  {
    id: "011",
    name: "Metapod",
    classification: "Cocoon Pokémon",
    types: ["Bug"],
    resistant: ["Grass", "Fighting", "Ground"],
    weaknesses: ["Fire", "Flying", "Rock"],
    weight: {
      minimum: "8.66kg",
      maximum: "11.14kg",
    },
    height: {
      minimum: "0.61m",
      maximum: "0.79m",
    },
    fleeRate: 0.09,
    "Previous evolution(s)": [
      {
        id: 10,
        name: "Caterpie",
      },
    ],
    evolutionRequirements: {
      amount: 50,
      name: "Caterpie candies",
    },
    evolutions: [
      {
        id: 12,
        name: "Butterfree",
      },
    ],
    maxCP: 397,
    maxHP: 477,
    attacks: {
      fast: [
        {
          name: "Bug Bite",
          type: "Bug",
          damage: 5,
        },
        {
          name: "Tackle",
          type: "Normal",
          damage: 12,
        },
      ],
      special: [
        {
          name: "Struggle",
          type: "Normal",
          damage: 15,
        },
      ],
    },
  },
  {
    id: "012",
    name: "Butterfree",
    classification: "Butterfly Pokémon",
    types: ["Bug", "Flying"],
    resistant: ["Grass", "Fighting", "Ground", "Bug"],
    weaknesses: ["Fire", "Electric", "Ice", "Flying", "Rock"],
    weight: {
      minimum: "28kg",
      maximum: "36kg",
    },
    height: {
      minimum: "0.96m",
      maximum: "1.24m",
    },
    fleeRate: 0.06,
    "Previous evolution(s)": [
      {
        id: 10,
        name: "Caterpie",
      },
      {
        id: 11,
        name: "Metapod",
      },
    ],
    maxCP: 1315,
    maxHP: 1454,
    attacks: {
      fast: [
        {
          name: "Bug Bite",
          type: "Bug",
          damage: 5,
        },
        {
          name: "Confusion",
          type: "Psychic",
          damage: 15,
        },
      ],
      special: [
        {
          name: "Bug Buzz",
          type: "Bug",
          damage: 75,
        },
        {
          name: "Psychic",
          type: "Psychic",
          damage: 55,
        },
        {
          name: "Signal Beam",
          type: "Bug",
          damage: 45,
        },
      ],
    },
  },
  {
    id: "013",
    name: "Weedle",
    classification: "Hairy Pokémon",
    types: ["Bug", "Poison"],
    resistant: ["Grass", "Fighting", "Poison", "Bug", "Fairy"],
    weaknesses: ["Fire", "Flying", "Psychic", "Rock"],
    weight: {
      minimum: "2.8kg",
      maximum: "3.6kg",
    },
    height: {
      minimum: "0.26m",
      maximum: "0.34m",
    },
    fleeRate: 0.2,
    evolutionRequirements: {
      amount: 12,
      name: "Weedle candies",
    },
    evolutions: [
      {
        id: 14,
        name: "Kakuna",
      },
      {
        id: 15,
        name: "Beedrill",
      },
    ],
    maxCP: 372,
    maxHP: 449,
    attacks: {
      fast: [
        {
          name: "Bug Bite",
          type: "Bug",
          damage: 5,
        },
        {
          name: "Poison Sting",
          type: "Poison",
          damage: 6,
        },
      ],
      special: [
        {
          name: "Struggle",
          type: "Normal",
          damage: 15,
        },
      ],
    },
  },
  {
    id: "014",
    name: "Kakuna",
    classification: "Cocoon Pokémon",
    types: ["Bug", "Poison"],
    resistant: ["Grass", "Fighting", "Poison", "Bug", "Fairy"],
    weaknesses: ["Fire", "Flying", "Psychic", "Rock"],
    weight: {
      minimum: "8.75kg",
      maximum: "11.25kg",
    },
    height: {
      minimum: "0.53m",
      maximum: "0.68m",
    },
    fleeRate: 0.09,
    "Previous evolution(s)": [
      {
        id: 13,
        name: "Weedle",
      },
    ],
    evolutionRequirements: {
      amount: 50,
      name: "Weedle candies",
    },
    evolutions: [
      {
        id: 15,
        name: "Beedrill",
      },
    ],
    maxCP: 405,
    maxHP: 485,
    attacks: {
      fast: [
        {
          name: "Bug Bite",
          type: "Bug",
          damage: 5,
        },
        {
          name: "Poison Sting",
          type: "Poison",
          damage: 6,
        },
      ],
      special: [
        {
          name: "Struggle",
          type: "Normal",
          damage: 15,
        },
      ],
    },
  },
  {
    id: "015",
    name: "Beedrill",
    classification: "Poison Bee Pokémon",
    types: ["Bug", "Poison"],
    resistant: ["Grass", "Fighting", "Poison", "Bug", "Fairy"],
    weaknesses: ["Fire", "Flying", "Psychic", "Rock"],
    weight: {
      minimum: "25.81kg",
      maximum: "33.19kg",
    },
    height: {
      minimum: "0.88m",
      maximum: "1.13m",
    },
    fleeRate: 0.06,
    "Previous evolution(s)": [
      {
        id: 13,
        name: "Weedle",
      },
      {
        id: 14,
        name: "Kakuna",
      },
    ],
    maxCP: 1301,
    maxHP: 1439,
    attacks: {
      fast: [
        {
          name: "Bug Bite",
          type: "Bug",
          damage: 5,
        },
        {
          name: "Poison Jab",
          type: "Poison",
          damage: 12,
        },
      ],
      special: [
        {
          name: "Aerial Ace",
          type: "Flying",
          damage: 30,
        },
        {
          name: "Sludge Bomb",
          type: "Poison",
          damage: 55,
        },
        {
          name: "X Scissor",
          type: "Bug",
          damage: 35,
        },
      ],
    },
  },
  {
    id: "016",
    name: "Pidgey",
    classification: "Tiny Bird Pokémon",
    types: ["Normal", "Flying"],
    resistant: ["Grass", "Ground", "Bug", "Ghost"],
    weaknesses: ["Electric", "Ice", "Rock"],
    weight: {
      minimum: "1.57kg",
      maximum: "2.02kg",
    },
    height: {
      minimum: "0.26m",
      maximum: "0.34m",
    },
    fleeRate: 0.2,
    evolutionRequirements: {
      amount: 12,
      name: "Pidgey candies",
    },
    evolutions: [
      {
        id: 17,
        name: "Pidgeotto",
      },
      {
        id: 18,
        name: "Pidgeot",
      },
    ],
    maxCP: 585,
    maxHP: 679,
    attacks: {
      fast: [
        {
          name: "Quick Attack",
          type: "Normal",
          damage: 10,
        },
        {
          name: "Tackle",
          type: "Normal",
          damage: 12,
        },
      ],
      special: [
        {
          name: "Aerial Ace",
          type: "Flying",
          damage: 30,
        },
        {
          name: "Air Cutter",
          type: "Flying",
          damage: 30,
        },
        {
          name: "Twister",
          type: "Dragon",
          damage: 25,
        },
      ],
    },
  },
  {
    id: "017",
    name: "Pidgeotto",
    classification: "Bird Pokémon",
    types: ["Normal", "Flying"],
    resistant: ["Grass", "Ground", "Bug", "Ghost"],
    weaknesses: ["Electric", "Ice", "Rock"],
    weight: {
      minimum: "26.25kg",
      maximum: "33.75kg",
    },
    height: {
      minimum: "0.96m",
      maximum: "1.24m",
    },
    fleeRate: 0.09,
    "Previous evolution(s)": [
      {
        id: 16,
        name: "Pidgey",
      },
    ],
    evolutionRequirements: {
      amount: 50,
      name: "Pidgey candies",
    },
    evolutions: [
      {
        id: 18,
        name: "Pidgeot",
      },
    ],
    maxCP: 1096,
    maxHP: 1223,
    attacks: {
      fast: [
        {
          name: "Steel Wing",
          type: "Steel",
          damage: 15,
        },
        {
          name: "Wing Attack",
          type: "Flying",
          damage: 9,
        },
      ],
      special: [
        {
          name: "Aerial Ace",
          type: "Flying",
          damage: 30,
        },
        {
          name: "Air Cutter",
          type: "Flying",
          damage: 30,
        },
        {
          name: "Twister",
          type: "Dragon",
          damage: 25,
        },
      ],
    },
  },
  {
    id: "018",
    name: "Pidgeot",
    classification: "Bird Pokémon",
    types: ["Normal", "Flying"],
    resistant: ["Grass", "Ground", "Bug", "Ghost"],
    weaknesses: ["Electric", "Ice", "Rock"],
    weight: {
      minimum: "34.56kg",
      maximum: "44.44kg",
    },
    height: {
      minimum: "1.31m",
      maximum: "1.69m",
    },
    fleeRate: 0.06,
    "Previous evolution(s)": [
      {
        id: 16,
        name: "Pidgey",
      },
      {
        id: 17,
        name: "Pidgeotto",
      },
    ],
    maxCP: 1923,
    maxHP: 2091,
    attacks: {
      fast: [
        {
          name: "Steel Wing",
          type: "Steel",
          damage: 15,
        },
        {
          name: "Wing Attack",
          type: "Flying",
          damage: 9,
        },
      ],
      special: [
        {
          name: "Aerial Ace",
          type: "Flying",
          damage: 30,
        },
        {
          name: "Air Cutter",
          type: "Flying",
          damage: 30,
        },
        {
          name: "Hurricane",
          type: "Flying",
          damage: 80,
        },
      ],
    },
  },
  {
    id: "019",
    name: "Rattata",
    classification: "Mouse Pokémon",
    types: ["Normal"],
    resistant: ["Ghost"],
    weaknesses: ["Fighting"],
    weight: {
      minimum: "3.06kg",
      maximum: "3.94kg",
    },
    height: {
      minimum: "0.26m",
      maximum: "0.34m",
    },
    fleeRate: 0.2,
    evolutionRequirements: {
      amount: 25,
      name: "Rattata candies",
    },
    evolutions: [
      {
        id: 20,
        name: "Raticate",
      },
    ],
    maxCP: 493,
    maxHP: 581,
    attacks: {
      fast: [
        {
          name: "Quick Attack",
          type: "Normal",
          damage: 10,
        },
        {
          name: "Tackle",
          type: "Normal",
          damage: 12,
        },
      ],
      special: [
        {
          name: "Body Slam",
          type: "Normal",
          damage: 40,
        },
        {
          name: "Dig",
          type: "Ground",
          damage: 70,
        },
        {
          name: "Hyper Fang",
          type: "Normal",
          damage: 35,
        },
      ],
    },
  },
  {
    id: "020",
    name: "Raticate",
    classification: "Mouse Pokémon",
    types: ["Normal"],
    resistant: ["Ghost"],
    weaknesses: ["Fighting"],
    weight: {
      minimum: "16.19kg",
      maximum: "20.81kg",
    },
    height: {
      minimum: "0.61m",
      maximum: "0.79m",
    },
    fleeRate: 0.07,
    "Previous evolution(s)": [
      {
        id: 19,
        name: "Rattata",
      },
    ],
    maxCP: 1304,
    maxHP: 1444,
    attacks: {
      fast: [
        {
          name: "Bite",
          type: "Dark",
          damage: 6,
        },
        {
          name: "Quick Attack",
          type: "Normal",
          damage: 10,
        },
      ],
      special: [
        {
          name: "Dig",
          type: "Ground",
          damage: 70,
        },
        {
          name: "Hyper Beam",
          type: "Normal",
          damage: 120,
        },
        {
          name: "Hyper Fang",
          type: "Normal",
          damage: 35,
        },
      ],
    },
  },
  {
    id: "021",
    name: "Spearow",
    classification: "Tiny Bird Pokémon",
    types: ["Normal", "Flying"],
    resistant: ["Grass", "Ground", "Bug", "Ghost"],
    weaknesses: ["Electric", "Ice", "Rock"],
    weight: {
      minimum: "1.75kg",
      maximum: "2.25kg",
    },
    height: {
      minimum: "0.26m",
      maximum: "0.34m",
    },
    fleeRate: 0.15,
    evolutionRequirements: {
      amount: 50,
      name: "Spearow candies",
    },
    evolutions: [
      {
        id: 22,
        name: "Fearow",
      },
    ],
    maxCP: 591,
    maxHP: 686,
    attacks: {
      fast: [
        {
          name: "Peck",
          type: "Flying",
          damage: 10,
        },
        {
          name: "Quick Attack",
          type: "Normal",
          damage: 10,
        },
      ],
      special: [
        {
          name: "Aerial Ace",
          type: "Flying",
          damage: 30,
        },
        {
          name: "Drill Peck",
          type: "Flying",
          damage: 40,
        },
        {
          name: "Twister",
          type: "Dragon",
          damage: 25,
        },
      ],
    },
  },
  {
    id: "022",
    name: "Fearow",
    classification: "Beak Pokémon",
    types: ["Normal", "Flying"],
    resistant: ["Grass", "Ground", "Bug", "Ghost"],
    weaknesses: ["Electric", "Ice", "Rock"],
    weight: {
      minimum: "33.25kg",
      maximum: "42.75kg",
    },
    height: {
      minimum: "1.05m",
      maximum: "1.35m",
    },
    fleeRate: 0.07,
    "Previous evolution(s)": [
      {
        id: 21,
        name: "Spearow",
      },
    ],
    maxCP: 1592,
    maxHP: 1746,
    attacks: {
      fast: [
        {
          name: "Peck",
          type: "Flying",
          damage: 10,
        },
        {
          name: "Steel Wing",
          type: "Steel",
          damage: 15,
        },
      ],
      special: [
        {
          name: "Aerial Ace",
          type: "Flying",
          damage: 30,
        },
        {
          name: "Drill Run",
          type: "Ground",
          damage: 50,
        },
        {
          name: "Twister",
          type: "Dragon",
          damage: 25,
        },
      ],
    },
  },
  {
    id: "023",
    name: "Ekans",
    classification: "Snake Pokémon",
    types: ["Poison"],
    resistant: ["Grass", "Fighting", "Poison", "Bug", "Fairy"],
    weaknesses: ["Ground", "Psychic"],
    weight: {
      minimum: "6.04kg",
      maximum: "7.76kg",
    },
    height: {
      minimum: "1.75m",
      maximum: "2.25m",
    },
    fleeRate: 0.15,
    evolutionRequirements: {
      amount: 50,
      name: "Ekans candies",
    },
    evolutions: [
      {
        id: 24,
        name: "Arbok",
      },
    ],
    maxCP: 718,
    maxHP: 824,
    attacks: {
      fast: [
        {
          name: "Acid",
          type: "Poison",
          damage: 10,
        },
        {
          name: "Poison Sting",
          type: "Poison",
          damage: 6,
        },
      ],
      special: [
        {
          name: "Gunk Shot",
          type: "Poison",
          damage: 65,
        },
        {
          name: "Sludge Bomb",
          type: "Poison",
          damage: 55,
        },
        {
          name: "Wrap",
          type: "Normal",
          damage: 25,
        },
      ],
    },
  },
  {
    id: "024",
    name: "Arbok",
    classification: "Cobra Pokémon",
    types: ["Poison"],
    resistant: ["Grass", "Fighting", "Poison", "Bug", "Fairy"],
    weaknesses: ["Ground", "Psychic"],
    weight: {
      minimum: "56.88kg",
      maximum: "73.13kg",
    },
    height: {
      minimum: "3.06m",
      maximum: "3.94m",
    },
    fleeRate: 0.07,
    "Previous evolution(s)": [
      {
        id: 23,
        name: "Ekans",
      },
    ],
    maxCP: 1611,
    maxHP: 1767,
    attacks: {
      fast: [
        {
          name: "Acid",
          type: "Poison",
          damage: 10,
        },
        {
          name: "Bite",
          type: "Dark",
          damage: 6,
        },
      ],
      special: [
        {
          name: "Dark Pulse",
          type: "Dark",
          damage: 45,
        },
        {
          name: "Gunk Shot",
          type: "Poison",
          damage: 65,
        },
        {
          name: "Sludge Wave",
          type: "Poison",
          damage: 70,
        },
      ],
    },
  },
  {
    id: "025",
    name: "Pikachu",
    classification: "Mouse Pokémon",
    types: ["Electric"],
    resistant: ["Electric", "Flying", "Steel"],
    weaknesses: ["Ground"],
    weight: {
      minimum: "5.25kg",
      maximum: "6.75kg",
    },
    height: {
      minimum: "0.35m",
      maximum: "0.45m",
    },
    fleeRate: 0.1,
    evolutionRequirements: {
      amount: 50,
      name: "Pikachu candies",
    },
    evolutions: [
      {
        id: 26,
        name: "Raichu",
      },
    ],
    maxCP: 777,
    maxHP: 887,
    attacks: {
      fast: [
        {
          name: "Quick Attack",
          type: "Normal",
          damage: 10,
        },
        {
          name: "Thunder Shock",
          type: "Electric",
          damage: 5,
        },
      ],
      special: [
        {
          name: "Discharge",
          type: "Electric",
          damage: 35,
        },
        {
          name: "Thunder",
          type: "Electric",
          damage: 100,
        },
        {
          name: "Thunderbolt",
          type: "Electric",
          damage: 55,
        },
      ],
    },
  },
  {
    id: "026",
    name: "Raichu",
    classification: "Mouse Pokémon",
    types: ["Electric"],
    resistant: ["Electric", "Flying", "Steel"],
    weaknesses: ["Ground"],
    weight: {
      minimum: "26.25kg",
      maximum: "33.75kg",
    },
    height: {
      minimum: "0.7m",
      maximum: "0.9m",
    },
    fleeRate: 0.06,
    "Previous evolution(s)": [
      {
        id: 25,
        name: "Pikachu",
      },
    ],
    maxCP: 1859,
    maxHP: 2028,
    attacks: {
      fast: [
        {
          name: "Spark",
          type: "Electric",
          damage: 7,
        },
        {
          name: "Thunder Shock",
          type: "Electric",
          damage: 5,
        },
      ],
      special: [
        {
          name: "Brick Break",
          type: "Fighting",
          damage: 30,
        },
        {
          name: "Thunder",
          type: "Electric",
          damage: 100,
        },
        {
          name: "Thunder Punch",
          type: "Electric",
          damage: 40,
        },
      ],
    },
  },
  {
    id: "027",
    name: "Sandshrew",
    classification: "Mouse Pokémon",
    types: ["Ground"],
    resistant: ["Electric", "Poison", "Rock"],
    weaknesses: ["Water", "Grass", "Ice"],
    weight: {
      minimum: "10.5kg",
      maximum: "13.5kg",
    },
    height: {
      minimum: "0.53m",
      maximum: "0.68m",
    },
    fleeRate: 0.1,
    evolutionRequirements: {
      amount: 50,
      name: "Sandshrew candies",
    },
    evolutions: [
      {
        id: 28,
        name: "Sandslash",
      },
    ],
    maxCP: 695,
    maxHP: 798,
    attacks: {
      fast: [
        {
          name: "Mud Shot",
          type: "Ground",
          damage: 6,
        },
        {
          name: "Scratch",
          type: "Normal",
          damage: 6,
        },
      ],
      special: [
        {
          name: "Dig",
          type: "Ground",
          damage: 70,
        },
        {
          name: "Rock Slide",
          type: "Rock",
          damage: 50,
        },
        {
          name: "Rock Tomb",
          type: "Rock",
          damage: 30,
        },
      ],
    },
  },
  {
    id: "028",
    name: "Sandslash",
    classification: "Mouse Pokémon",
    types: ["Ground"],
    resistant: ["Electric", "Poison", "Rock"],
    weaknesses: ["Water", "Grass", "Ice"],
    weight: {
      minimum: "25.81kg",
      maximum: "33.19kg",
    },
    height: {
      minimum: "0.88m",
      maximum: "1.13m",
    },
    fleeRate: 0.06,
    "Previous evolution(s)": [
      {
        id: 27,
        name: "Sandshrew",
      },
    ],
    maxCP: 1654,
    maxHP: 1810,
    attacks: {
      fast: [
        {
          name: "Metal Claw",
          type: "Steel",
          damage: 8,
        },
        {
          name: "Mud Shot",
          type: "Ground",
          damage: 6,
        },
      ],
      special: [
        {
          name: "Bulldoze",
          type: "Ground",
          damage: 35,
        },
        {
          name: "Earthquake",
          type: "Ground",
          damage: 100,
        },
        {
          name: "Rock Tomb",
          type: "Rock",
          damage: 30,
        },
      ],
    },
  },
  {
    id: "029",
    name: "Nidoran-F",
    classification: "Poison Pin Pokémon",
    types: ["Poison"],
    resistant: ["Grass", "Fighting", "Poison", "Bug", "Fairy"],
    weaknesses: ["Ground", "Psychic"],
    weight: {
      minimum: "6.13kg",
      maximum: "7.88kg",
    },
    height: {
      minimum: "0.35m",
      maximum: "0.45m",
    },
    fleeRate: 0.15,
    evolutionRequirements: {
      amount: 25,
      name: "Nidoran♀ candies",
    },
    evolutions: [
      {
        id: 30,
        name: "Nidorina",
      },
      {
        id: 31,
        name: "Nidoqueen",
      },
    ],
    maxCP: 768,
    maxHP: 876,
    attacks: {
      fast: [
        {
          name: "Bite",
          type: "Dark",
          damage: 6,
        },
        {
          name: "Poison Sting",
          type: "Poison",
          damage: 6,
        },
      ],
      special: [
        {
          name: "Body Slam",
          type: "Normal",
          damage: 40,
        },
        {
          name: "Poison Fang",
          type: "Poison",
          damage: 25,
        },
        {
          name: "Sludge Bomb",
          type: "Poison",
          damage: 55,
        },
      ],
    },
  },
  {
    id: "030",
    name: "Nidorina",
    classification: "Poison Pin Pokémon",
    types: ["Poison"],
    resistant: ["Grass", "Fighting", "Poison", "Bug", "Fairy"],
    weaknesses: ["Ground", "Psychic"],
    weight: {
      minimum: "17.5kg",
      maximum: "22.5kg",
    },
    height: {
      minimum: "0.7m",
      maximum: "0.9m",
    },
    fleeRate: 0.07,
    "Previous evolution(s)": [
      {
        id: 29,
        name: "Nidoran-F",
      },
    ],
    evolutionRequirements: {
      amount: 100,
      name: "Nidoran♀ candies",
    },
    evolutions: [
      {
        id: 31,
        name: "Nidoqueen",
      },
    ],
    maxCP: 1267,
    maxHP: 1404,
    attacks: {
      fast: [
        {
          name: "Bite",
          type: "Dark",
          damage: 6,
        },
        {
          name: "Poison Sting",
          type: "Poison",
          damage: 6,
        },
      ],
      special: [
        {
          name: "Dig",
          type: "Ground",
          damage: 70,
        },
        {
          name: "Poison Fang",
          type: "Poison",
          damage: 25,
        },
        {
          name: "Sludge Bomb",
          type: "Poison",
          damage: 55,
        },
      ],
    },
  },
  {
    id: "031",
    name: "Nidoqueen",
    classification: "Drill Pokémon",
    types: ["Poison", "Ground"],
    resistant: ["Electric", "Fighting", "Poison", "Bug", "Rock", "Fairy"],
    weaknesses: ["Water", "Ice", "Ground", "Psychic"],
    weight: {
      minimum: "52.5kg",
      maximum: "67.5kg",
    },
    height: {
      minimum: "1.14m",
      maximum: "1.46m",
    },
    fleeRate: 0.05,
    "Previous evolution(s)": [
      {
        id: 29,
        name: "Nidoran-F",
      },
      {
        id: 30,
        name: "Nidorina",
      },
    ],
    maxCP: 2301,
    maxHP: 2485,
    attacks: {
      fast: [
        {
          name: "Bite",
          type: "Dark",
          damage: 6,
        },
        {
          name: "Poison Jab",
          type: "Poison",
          damage: 12,
        },
      ],
      special: [
        {
          name: "Earthquake",
          type: "Ground",
          damage: 100,
        },
        {
          name: "Sludge Wave",
          type: "Poison",
          damage: 70,
        },
        {
          name: "Stone Edge",
          type: "Rock",
          damage: 80,
        },
      ],
    },
  },
  {
    id: "032",
    name: "Nidoran-M",
    classification: "Poison Pin Pokémon",
    types: ["Poison"],
    resistant: ["Grass", "Fighting", "Poison", "Bug", "Fairy"],
    weaknesses: ["Ground", "Psychic"],
    weight: {
      minimum: "7.88kg",
      maximum: "10.13kg",
    },
    height: {
      minimum: "0.44m",
      maximum: "0.56m",
    },
    fleeRate: 0.15,
    evolutionRequirements: {
      amount: 25,
      name: "Nidoran-M candies",
    },
    evolutions: [
      {
        id: 33,
        name: "Nidorino",
      },
      {
        id: 34,
        name: "Nidoking",
      },
    ],
    maxCP: 737,
    maxHP: 843,
    attacks: {
      fast: [
        {
          name: "Peck",
          type: "Flying",
          damage: 10,
        },
        {
          name: "Poison Sting",
          type: "Poison",
          damage: 6,
        },
      ],
      special: [
        {
          name: "Body Slam",
          type: "Normal",
          damage: 40,
        },
        {
          name: "Horn Attack",
          type: "Normal",
          damage: 25,
        },
        {
          name: "Sludge Bomb",
          type: "Poison",
          damage: 55,
        },
      ],
    },
  },
  {
    id: "033",
    name: "Nidorino",
    classification: "Poison Pin Pokémon",
    types: ["Poison"],
    resistant: ["Grass", "Fighting", "Poison", "Bug", "Fairy"],
    weaknesses: ["Ground", "Psychic"],
    weight: {
      minimum: "17.06kg",
      maximum: "21.94kg",
    },
    height: {
      minimum: "0.79m",
      maximum: "1.01m",
    },
    fleeRate: 0.07,
    "Previous evolution(s)": [
      {
        id: 32,
        name: "Nidoran-M",
      },
    ],
    evolutionRequirements: {
      amount: 100,
      name: "Nidoran-M candies",
    },
    evolutions: [
      {
        id: 34,
        name: "Nidoking",
      },
    ],
    maxCP: 1236,
    maxHP: 1372,
    attacks: {
      fast: [
        {
          name: "Bite",
          type: "Dark",
          damage: 6,
        },
        {
          name: "Poison Jab",
          type: "Poison",
          damage: 12,
        },
      ],
      special: [
        {
          name: "Dig",
          type: "Ground",
          damage: 70,
        },
        {
          name: "Horn Attack",
          type: "Normal",
          damage: 25,
        },
        {
          name: "Sludge Bomb",
          type: "Poison",
          damage: 55,
        },
      ],
    },
  },
  {
    id: "034",
    name: "Nidoking",
    classification: "Drill Pokémon",
    types: ["Poison", "Ground"],
    resistant: ["Electric", "Fighting", "Poison", "Bug", "Rock", "Fairy"],
    weaknesses: ["Water", "Ice", "Ground", "Psychic"],
    weight: {
      minimum: "54.25kg",
      maximum: "69.75kg",
    },
    height: {
      minimum: "1.22m",
      maximum: "1.57m",
    },
    fleeRate: 0.05,
    "Previous evolution(s)": [
      {
        id: 32,
        name: "Nidoran-M",
      },
      {
        id: 33,
        name: "Nidorino",
      },
    ],
    maxCP: 2291,
    maxHP: 2475,
    attacks: {
      fast: [
        {
          name: "Fury Cutter",
          type: "Bug",
          damage: 3,
        },
        {
          name: "Poison Jab",
          type: "Poison",
          damage: 12,
        },
      ],
      special: [
        {
          name: "Earthquake",
          type: "Ground",
          damage: 100,
        },
        {
          name: "Megahorn",
          type: "Bug",
          damage: 80,
        },
        {
          name: "Sludge Wave",
          type: "Poison",
          damage: 70,
        },
      ],
    },
  },
  {
    id: "035",
    name: "Clefairy",
    classification: "Fairy Pokémon",
    types: ["Fairy"],
    resistant: ["Fighting", "Bug", "Dragon", "Dark"],
    weaknesses: ["Poison", "Steel"],
    weight: {
      minimum: "6.56kg",
      maximum: "8.44kg",
    },
    height: {
      minimum: "0.53m",
      maximum: "0.68m",
    },
    fleeRate: 0.1,
    evolutionRequirements: {
      amount: 50,
      name: "Clefairy candies",
    },
    evolutions: [
      {
        id: 36,
        name: "Clefable",
      },
    ],
    maxCP: 1074,
    maxHP: 1200,
    attacks: {
      fast: [
        {
          name: "Pound",
          type: "Normal",
          damage: 7,
        },
        {
          name: "Zen Headbutt",
          type: "Psychic",
          damage: 12,
        },
      ],
      special: [
        {
          name: "Body Slam",
          type: "Normal",
          damage: 40,
        },
        {
          name: "Disarming Voice",
          type: "Fairy",
          damage: 25,
        },
        {
          name: "Moonblast",
          type: "Fairy",
          damage: 85,
        },
      ],
    },
  },
  {
    id: "036",
    name: "Clefable",
    classification: "Fairy Pokémon",
    types: ["Fairy"],
    resistant: ["Fighting", "Bug", "Dragon", "Dark"],
    weaknesses: ["Poison", "Steel"],
    weight: {
      minimum: "35kg",
      maximum: "45kg",
    },
    height: {
      minimum: "1.14m",
      maximum: "1.46m",
    },
    fleeRate: 0.06,
    "Previous evolution(s)": [
      {
        id: 35,
        name: "Clefairy",
      },
    ],
    maxCP: 2217,
    maxHP: 2397,
    attacks: {
      fast: [
        {
          name: "Pound",
          type: "Normal",
          damage: 7,
        },
        {
          name: "Zen Headbutt",
          type: "Psychic",
          damage: 12,
        },
      ],
      special: [
        {
          name: "Dazzling Gleam",
          type: "Fairy",
          damage: 55,
        },
        {
          name: "Moonblast",
          type: "Fairy",
          damage: 85,
        },
        {
          name: "Psychic",
          type: "Psychic",
          damage: 55,
        },
      ],
    },
  },
  {
    id: "037",
    name: "Vulpix",
    classification: "Fox Pokémon",
    types: ["Fire"],
    resistant: ["Fire", "Grass", "Ice", "Bug", "Steel", "Fairy"],
    weaknesses: ["Water", "Ground", "Rock"],
    weight: {
      minimum: "8.66kg",
      maximum: "11.14kg",
    },
    height: {
      minimum: "0.53m",
      maximum: "0.68m",
    },
    fleeRate: 0.1,
    evolutionRequirements: {
      amount: 50,
      name: "Vulpi",
    },
    evolutions: [
      {
        id: 38,
        name: "Ninetales",
      },
    ],
    maxCP: 725,
    maxHP: 831,
    attacks: {
      fast: [
        {
          name: "Ember",
          type: "Fire",
          damage: 10,
        },
        {
          name: "Quick Attack",
          type: "Normal",
          damage: 10,
        },
      ],
      special: [
        {
          name: "Body Slam",
          type: "Normal",
          damage: 40,
        },
        {
          name: "Flame Charge",
          type: "Fire",
          damage: 25,
        },
        {
          name: "Flamethrower",
          type: "Fire",
          damage: 55,
        },
      ],
    },
  },
  {
    id: "038",
    name: "Ninetales",
    classification: "Fox Pokémon",
    types: ["Fire"],
    resistant: ["Fire", "Grass", "Ice", "Bug", "Steel", "Fairy"],
    weaknesses: ["Water", "Ground", "Rock"],
    weight: {
      minimum: "17.41kg",
      maximum: "22.39kg",
    },
    height: {
      minimum: "0.96m",
      maximum: "1.24m",
    },
    fleeRate: 0.06,
    "Previous evolution(s)": [
      {
        id: 37,
        name: "Vulpix",
      },
    ],
    maxCP: 2015,
    maxHP: 2188,
    attacks: {
      fast: [
        {
          name: "Ember",
          type: "Fire",
          damage: 10,
        },
        {
          name: "Quick Attack",
          type: "Normal",
          damage: 10,
        },
      ],
      special: [
        {
          name: "Fire Blast",
          type: "Fire",
          damage: 100,
        },
        {
          name: "Flamethrower",
          type: "Fire",
          damage: 55,
        },
        {
          name: "Heat Wave",
          type: "Fire",
          damage: 80,
        },
      ],
    },
  },
  {
    id: "039",
    name: "Jigglypuff",
    classification: "Balloon Pokémon",
    types: ["Normal", "Fairy"],
    resistant: ["Bug", "Ghost", "Dragon", "Dark"],
    weaknesses: ["Poison", "Steel"],
    weight: {
      minimum: "4.81kg",
      maximum: "6.19kg",
    },
    height: {
      minimum: "0.44m",
      maximum: "0.56m",
    },
    fleeRate: 0.1,
    evolutionRequirements: {
      amount: 50,
      name: "Jigglypuff candies",
    },
    evolutions: [
      {
        id: 39,
        name: "Jigglypuff",
      },
    ],
    maxCP: 796,
    maxHP: 917,
    attacks: {
      fast: [
        {
          name: "Feint Attack",
          type: "Dark",
          damage: 12,
        },
        {
          name: "Pound",
          type: "Normal",
          damage: 7,
        },
      ],
      special: [
        {
          name: "Body Slam",
          type: "Normal",
          damage: 40,
        },
        {
          name: "Disarming Voice",
          type: "Fairy",
          damage: 25,
        },
        {
          name: "Play Rough",
          type: "Fairy",
          damage: 55,
        },
      ],
    },
  },
  {
    id: "040",
    name: "Wigglytuff",
    classification: "Balloon Pokémon",
    types: ["Normal", "Fairy"],
    resistant: ["Bug", "Ghost", "Dragon", "Dark"],
    weaknesses: ["Poison", "Steel"],
    weight: {
      minimum: "10.5kg",
      maximum: "13.5kg",
    },
    height: {
      minimum: "0.88m",
      maximum: "1.13m",
    },
    fleeRate: 0.06,
    "Previous evolution(s)": [
      {
        id: 40,
        name: "Wigglytuff",
      },
    ],
    maxCP: 1997,
    maxHP: 2177,
    attacks: {
      fast: [
        {
          name: "Feint Attack",
          type: "Dark",
          damage: 12,
        },
        {
          name: "Pound",
          type: "Normal",
          damage: 7,
        },
      ],
      special: [
        {
          name: "Dazzling Gleam",
          type: "Fairy",
          damage: 55,
        },
        {
          name: "Hyper Beam",
          type: "Normal",
          damage: 120,
        },
        {
          name: "Play Rough",
          type: "Fairy",
          damage: 55,
        },
      ],
    },
  },
  {
    id: "041",
    name: "Zubat",
    classification: "Bat Pokémon",
    types: ["Poison", "Flying"],
    resistant: ["Grass", "Fighting", "Poison", "Bug", "Fairy"],
    weaknesses: ["Electric", "Ice", "Psychic", "Rock"],
    weight: {
      minimum: "6.56kg",
      maximum: "8.44kg",
    },
    height: {
      minimum: "0.7m",
      maximum: "0.9m",
    },
    fleeRate: 0.2,
    evolutionRequirements: {
      amount: 50,
      name: "Zubat candies",
    },
    evolutions: [
      {
        id: 42,
        name: "Golbat",
      },
    ],
    maxCP: 550,
    maxHP: 642,
    attacks: {
      fast: [
        {
          name: "Bite",
          type: "Dark",
          damage: 6,
        },
        {
          name: "Quick Attack",
          type: "Normal",
          damage: 10,
        },
      ],
      special: [
        {
          name: "Air Cutter",
          type: "Flying",
          damage: 30,
        },
        {
          name: "Poison Fang",
          type: "Poison",
          damage: 25,
        },
        {
          name: "Sludge Bomb",
          type: "Poison",
          damage: 55,
        },
      ],
    },
  },
  {
    id: "042",
    name: "Golbat",
    classification: "Bat Pokémon",
    types: ["Poison", "Flying"],
    resistant: ["Grass", "Fighting", "Poison", "Bug", "Fairy"],
    weaknesses: ["Electric", "Ice", "Psychic", "Rock"],
    weight: {
      minimum: "48.13kg",
      maximum: "61.88kg",
    },
    height: {
      minimum: "1.4m",
      maximum: "1.8m",
    },
    fleeRate: 0.07,
    "Previous evolution(s)": [
      {
        id: 41,
        name: "Zubat",
      },
    ],
    maxCP: 1760,
    maxHP: 1921,
    attacks: {
      fast: [
        {
          name: "Bite",
          type: "Dark",
          damage: 6,
        },
        {
          name: "Wing Attack",
          type: "Flying",
          damage: 9,
        },
      ],
      special: [
        {
          name: "Air Cutter",
          type: "Flying",
          damage: 30,
        },
        {
          name: "Ominous Wind",
          type: "Ghost",
          damage: 30,
        },
        {
          name: "Poison Fang",
          type: "Poison",
          damage: 25,
        },
      ],
    },
  },
  {
    id: "043",
    name: "Oddish",
    classification: "Weed Pokémon",
    types: ["Grass", "Poison"],
    resistant: ["Water", "Electric", "Grass", "Fighting", "Fairy"],
    weaknesses: ["Fire", "Ice", "Flying", "Psychic"],
    weight: {
      minimum: "4.73kg",
      maximum: "6.08kg",
    },
    height: {
      minimum: "0.44m",
      maximum: "0.56m",
    },
    fleeRate: 0.15,
    evolutionRequirements: {
      amount: 25,
      name: "Oddish candies",
    },
    evolutions: [
      {
        id: 44,
        name: "Gloom",
      },
      {
        id: 45,
        name: "Vileplume",
      },
    ],
    maxCP: 1023,
    maxHP: 1148,
    attacks: {
      fast: [
        {
          name: "Acid",
          type: "Poison",
          damage: 10,
        },
        {
          name: "Razor Leaf",
          type: "Grass",
          damage: 15,
        },
      ],
      special: [
        {
          name: "Moonblast",
          type: "Fairy",
          damage: 85,
        },
        {
          name: "Seed Bomb",
          type: "Grass",
          damage: 40,
        },
        {
          name: "Sludge Bomb",
          type: "Poison",
          damage: 55,
        },
      ],
    },
  },
  {
    id: "044",
    name: "Gloom",
    classification: "Weed Pokémon",
    types: ["Grass", "Poison"],
    resistant: ["Water", "Electric", "Grass", "Fighting", "Fairy"],
    weaknesses: ["Fire", "Ice", "Flying", "Psychic"],
    weight: {
      minimum: "7.53kg",
      maximum: "9.68kg",
    },
    height: {
      minimum: "0.7m",
      maximum: "0.9m",
    },
    fleeRate: 0.07,
    "Previous evolution(s)": [
      {
        id: 43,
        name: "Oddish",
      },
    ],
    evolutionRequirements: {
      amount: 100,
      name: "Oddish candies",
    },
    evolutions: [
      {
        id: 45,
        name: "Vileplume",
      },
    ],
    maxCP: 1537,
    maxHP: 1689,
    attacks: {
      fast: [
        {
          name: "Acid",
          type: "Poison",
          damage: 10,
        },
        {
          name: "Razor Leaf",
          type: "Grass",
          damage: 15,
        },
      ],
      special: [
        {
          name: "Moonblast",
          type: "Fairy",
          damage: 85,
        },
        {
          name: "Petal Blizzard",
          type: "Grass",
          damage: 65,
        },
        {
          name: "Sludge Bomb",
          type: "Poison",
          damage: 55,
        },
      ],
    },
  },
  {
    id: "045",
    name: "Vileplume",
    classification: "Flower Pokémon",
    types: ["Grass", "Poison"],
    resistant: ["Water", "Electric", "Grass", "Fighting", "Fairy"],
    weaknesses: ["Fire", "Ice", "Flying", "Psychic"],
    weight: {
      minimum: "16.28kg",
      maximum: "20.93kg",
    },
    height: {
      minimum: "1.05m",
      maximum: "1.35m",
    },
    fleeRate: 0.05,
    "Previous evolution(s)": [
      {
        id: 43,
        name: "Oddish",
      },
      {
        id: 44,
        name: "Gloom",
      },
    ],
    maxCP: 2307,
    maxHP: 2492,
    attacks: {
      fast: [
        {
          name: "Acid",
          type: "Poison",
          damage: 10,
        },
        {
          name: "Razor Leaf",
          type: "Grass",
          damage: 15,
        },
      ],
      special: [
        {
          name: "Moonblast",
          type: "Fairy",
          damage: 85,
        },
        {
          name: "Petal Blizzard",
          type: "Grass",
          damage: 65,
        },
        {
          name: "Solar Beam",
          type: "Grass",
          damage: 120,
        },
      ],
    },
  },
  {
    id: "046",
    name: "Paras",
    classification: "Mushroom Pokémon",
    types: ["Bug", "Grass"],
    resistant: ["Water", "Electric", "Grass", "Fighting", "Ground"],
    weaknesses: ["Fire", "Ice", "Poison", "Flying", "Bug", "Rock"],
    weight: {
      minimum: "4.73kg",
      maximum: "6.08kg",
    },
    height: {
      minimum: "0.26m",
      maximum: "0.34m",
    },
    fleeRate: 0.15,
    evolutionRequirements: {
      amount: 50,
      name: "Paras candies",
    },
    evolutions: [
      {
        id: 47,
        name: "Parasect",
      },
    ],
    maxCP: 804,
    maxHP: 916,
    attacks: {
      fast: [
        {
          name: "Bug Bite",
          type: "Bug",
          damage: 5,
        },
        {
          name: "Scratch",
          type: "Normal",
          damage: 6,
        },
      ],
      special: [
        {
          name: "Cross Poison",
          type: "Poison",
          damage: 25,
        },
        {
          name: "Seed Bomb",
          type: "Grass",
          damage: 40,
        },
        {
          name: "X Scissor",
          type: "Bug",
          damage: 35,
        },
      ],
    },
  },
  {
    id: "047",
    name: "Parasect",
    classification: "Mushroom Pokémon",
    types: ["Bug", "Grass"],
    resistant: ["Water", "Electric", "Grass", "Fighting", "Ground"],
    weaknesses: ["Fire", "Ice", "Poison", "Flying", "Bug", "Rock"],
    weight: {
      minimum: "25.81kg",
      maximum: "33.19kg",
    },
    height: {
      minimum: "0.88m",
      maximum: "1.13m",
    },
    fleeRate: 0.07,
    "Previous evolution(s)": [
      {
        id: 46,
        name: "Paras",
      },
    ],
    maxCP: 1592,
    maxHP: 1747,
    attacks: {
      fast: [
        {
          name: "Bug Bite",
          type: "Bug",
          damage: 5,
        },
        {
          name: "Fury Cutter",
          type: "Bug",
          damage: 3,
        },
      ],
      special: [
        {
          name: "Cross Poison",
          type: "Poison",
          damage: 25,
        },
        {
          name: "Solar Beam",
          type: "Grass",
          damage: 120,
        },
        {
          name: "X Scissor",
          type: "Bug",
          damage: 35,
        },
      ],
    },
  },
  {
    id: "048",
    name: "Venonat",
    classification: "Insect Pokémon",
    types: ["Bug", "Poison"],
    resistant: ["Grass", "Fighting", "Poison", "Bug", "Fairy"],
    weaknesses: ["Fire", "Flying", "Psychic", "Rock"],
    weight: {
      minimum: "26.25kg",
      maximum: "33.75kg",
    },
    height: {
      minimum: "0.88m",
      maximum: "1.13m",
    },
    fleeRate: 0.15,
    evolutionRequirements: {
      amount: 50,
      name: "Venonat candies",
    },
    evolutions: [
      {
        id: 49,
        name: "Venomoth",
      },
    ],
    maxCP: 912,
    maxHP: 1029,
    attacks: {
      fast: [
        {
          name: "Bug Bite",
          type: "Bug",
          damage: 5,
        },
        {
          name: "Confusion",
          type: "Psychic",
          damage: 15,
        },
      ],
      special: [
        {
          name: "Poison Fang",
          type: "Poison",
          damage: 25,
        },
        {
          name: "Psybeam",
          type: "Psychic",
          damage: 40,
        },
        {
          name: "Signal Beam",
          type: "Bug",
          damage: 45,
        },
      ],
    },
  },
  {
    id: "049",
    name: "Venomoth",
    classification: "Poison Moth Pokémon",
    types: ["Bug", "Poison"],
    resistant: ["Grass", "Fighting", "Poison", "Bug", "Fairy"],
    weaknesses: ["Fire", "Flying", "Psychic", "Rock"],
    weight: {
      minimum: "10.94kg",
      maximum: "14.06kg",
    },
    height: {
      minimum: "1.31m",
      maximum: "1.69m",
    },
    fleeRate: 0.07,
    "Previous evolution(s)": [
      {
        id: 48,
        name: "Venonat",
      },
    ],
    maxCP: 1730,
    maxHP: 1890,
    attacks: {
      fast: [
        {
          name: "Bug Bite",
          type: "Bug",
          damage: 5,
        },
        {
          name: "Confusion",
          type: "Psychic",
          damage: 15,
        },
      ],
      special: [
        {
          name: "Bug Buzz",
          type: "Bug",
          damage: 75,
        },
        {
          name: "Poison Fang",
          type: "Poison",
          damage: 25,
        },
        {
          name: "Psychic",
          type: "Psychic",
          damage: 55,
        },
      ],
    },
  },
  {
    id: "050",
    name: "Diglett",
    classification: "Mole Pokémon",
    types: ["Ground"],
    resistant: ["Electric", "Poison", "Rock"],
    weaknesses: ["Water", "Grass", "Ice"],
    weight: {
      minimum: "0.7kg",
      maximum: "0.9kg",
    },
    height: {
      minimum: "0.18m",
      maximum: "0.23m",
    },
    fleeRate: 0.1,
    evolutionRequirements: {
      amount: 50,
      name: "Diglett candies",
    },
    evolutions: [
      {
        id: 51,
        name: "Dugtrio",
      },
    ],
    maxCP: 365,
    maxHP: 456,
    attacks: {
      fast: [
        {
          name: "Mud Shot",
          type: "Ground",
          damage: 6,
        },
        {
          name: "Scratch",
          type: "Normal",
          damage: 6,
        },
      ],
      special: [
        {
          name: "Dig",
          type: "Ground",
          damage: 70,
        },
        {
          name: "Mud Bomb",
          type: "Ground",
          damage: 30,
        },
        {
          name: "Rock Tomb",
          type: "Rock",
          damage: 30,
        },
      ],
    },
  },
  {
    id: "051",
    name: "Dugtrio",
    classification: "Mole Pokémon",
    types: ["Ground"],
    resistant: ["Electric", "Poison", "Rock"],
    weaknesses: ["Water", "Grass", "Ice"],
    weight: {
      minimum: "29.14kg",
      maximum: "37.46kg",
    },
    height: {
      minimum: "0.61m",
      maximum: "0.79m",
    },
    fleeRate: 0.06,
    "Previous evolution(s)": [
      {
        id: 50,
        name: "Diglett",
      },
    ],
    maxCP: 1038,
    maxHP: 1168,
    attacks: {
      fast: [
        {
          name: "Mud Shot",
          type: "Ground",
          damage: 6,
        },
        {
          name: "Sucker Punch",
          type: "Dark",
          damage: 7,
        },
      ],
      special: [
        {
          name: "Earthquake",
          type: "Ground",
          damage: 100,
        },
        {
          name: "Mud Bomb",
          type: "Ground",
          damage: 30,
        },
        {
          name: "Stone Edge",
          type: "Rock",
          damage: 80,
        },
      ],
    },
  },
  {
    id: "052",
    name: "Meowth",
    classification: "Scratch Cat Pokémon",
    types: ["Normal"],
    resistant: ["Ghost"],
    weaknesses: ["Fighting"],
    weight: {
      minimum: "3.67kg",
      maximum: "4.72kg",
    },
    height: {
      minimum: "0.35m",
      maximum: "0.45m",
    },
    fleeRate: 0.15,
    evolutionRequirements: {
      amount: 50,
      name: "Meowth candies",
    },
    evolutions: [
      {
        id: 53,
        name: "Persian",
      },
    ],
    maxCP: 656,
    maxHP: 756,
    attacks: {
      fast: [
        {
          name: "Bite",
          type: "Dark",
          damage: 6,
        },
        {
          name: "Scratch",
          type: "Normal",
          damage: 6,
        },
      ],
      special: [
        {
          name: "Body Slam",
          type: "Normal",
          damage: 40,
        },
        {
          name: "Dark Pulse",
          type: "Dark",
          damage: 45,
        },
        {
          name: "Night Slash",
          type: "Dark",
          damage: 30,
        },
      ],
    },
  },
  {
    id: "053",
    name: "Persian",
    classification: "Classy Cat Pokémon",
    types: ["Normal"],
    resistant: ["Ghost"],
    weaknesses: ["Fighting"],
    weight: {
      minimum: "28kg",
      maximum: "36kg",
    },
    height: {
      minimum: "0.88m",
      maximum: "1.13m",
    },
    fleeRate: 0.07,
    "Previous evolution(s)": [
      {
        id: 52,
        name: "Meowth",
      },
    ],
    maxCP: 1483,
    maxHP: 1631,
    attacks: {
      fast: [
        {
          name: "Feint Attack",
          type: "Dark",
          damage: 12,
        },
        {
          name: "Scratch",
          type: "Normal",
          damage: 6,
        },
      ],
      special: [
        {
          name: "Night Slash",
          type: "Dark",
          damage: 30,
        },
        {
          name: "Play Rough",
          type: "Fairy",
          damage: 55,
        },
        {
          name: "Power Gem",
          type: "Rock",
          damage: 40,
        },
      ],
    },
  },
  {
    id: "054",
    name: "Psyduck",
    classification: "Duck Pokémon",
    types: ["Water"],
    resistant: ["Fire", "Water", "Ice", "Steel"],
    weaknesses: ["Electric", "Grass"],
    weight: {
      minimum: "17.15kg",
      maximum: "22.05kg",
    },
    height: {
      minimum: "0.7m",
      maximum: "0.9m",
    },
    fleeRate: 0.1,
    evolutionRequirements: {
      amount: 50,
      name: "Psyduck candies",
    },
    evolutions: [
      {
        id: 55,
        name: "Golduck",
      },
    ],
    maxCP: 987,
    maxHP: 1109,
    attacks: {
      fast: [
        {
          name: "Water Gun",
          type: "Water",
          damage: 6,
        },
        {
          name: "Zen Headbutt",
          type: "Psychic",
          damage: 12,
        },
      ],
      special: [
        {
          name: "Aqua Tail",
          type: "Water",
          damage: 45,
        },
        {
          name: "Cross Chop",
          type: "Fighting",
          damage: 60,
        },
        {
          name: "Psybeam",
          type: "Psychic",
          damage: 40,
        },
      ],
    },
  },
  {
    id: "055",
    name: "Golduck",
    classification: "Duck Pokémon",
    types: ["Water"],
    resistant: ["Fire", "Water", "Ice", "Steel"],
    weaknesses: ["Electric", "Grass"],
    weight: {
      minimum: "67.02kg",
      maximum: "86.17kg",
    },
    height: {
      minimum: "1.49m",
      maximum: "1.91m",
    },
    fleeRate: 0.06,
    "Previous evolution(s)": [
      {
        id: 54,
        name: "Psyduck",
      },
    ],
    maxCP: 2206,
    maxHP: 2386,
    attacks: {
      fast: [
        {
          name: "Confusion",
          type: "Psychic",
          damage: 15,
        },
        {
          name: "Zen Headbutt",
          type: "Psychic",
          damage: 12,
        },
      ],
      special: [
        {
          name: "Gunk Shot",
          type: "Poison",
          damage: 65,
        },
        {
          name: "Hydro Pump",
          type: "Water",
          damage: 90,
        },
        {
          name: "Ice Beam",
          type: "Ice",
          damage: 65,
        },
        {
          name: "Psychic",
          type: "Psychic",
          damage: 55,
        },
      ],
    },
  },
  {
    id: "056",
    name: "Mankey",
    classification: "Pig Monkey Pokémon",
    types: ["Fighting"],
    resistant: ["Bug", "Rock", "Dark"],
    weaknesses: ["Flying", "Psychic", "Fairy"],
    weight: {
      minimum: "24.5kg",
      maximum: "31.5kg",
    },
    height: {
      minimum: "0.44m",
      maximum: "0.56m",
    },
    fleeRate: 0.1,
    evolutionRequirements: {
      amount: 50,
      name: "Mankey candies",
    },
    evolutions: [
      {
        id: 57,
        name: "Primeape",
      },
    ],
    maxCP: 769,
    maxHP: 878,
    attacks: {
      fast: [
        {
          name: "Karate Chop",
          type: "Fighting",
          damage: 6,
        },
        {
          name: "Scratch",
          type: "Normal",
          damage: 6,
        },
      ],
      special: [
        {
          name: "Brick Break",
          type: "Fighting",
          damage: 30,
        },
        {
          name: "Cross Chop",
          type: "Fighting",
          damage: 60,
        },
        {
          name: "Low Sweep",
          type: "Fighting",
          damage: 30,
        },
      ],
    },
  },
  {
    id: "057",
    name: "Primeape",
    classification: "Pig Monkey Pokémon",
    types: ["Fighting"],
    resistant: ["Bug", "Rock", "Dark"],
    weaknesses: ["Flying", "Psychic", "Fairy"],
    weight: {
      minimum: "28kg",
      maximum: "36kg",
    },
    height: {
      minimum: "0.88m",
      maximum: "1.13m",
    },
    fleeRate: 0.06,
    "Previous evolution(s)": [
      {
        id: 56,
        name: "Mankey",
      },
    ],
    maxCP: 1704,
    maxHP: 1864,
    attacks: {
      fast: [
        {
          name: "Karate Chop",
          type: "Fighting",
          damage: 6,
        },
        {
          name: "Low Kick",
          type: "Fighting",
          damage: 5,
        },
      ],
      special: [
        {
          name: "Cross Chop",
          type: "Fighting",
          damage: 60,
        },
        {
          name: "Low Sweep",
          type: "Fighting",
          damage: 30,
        },
        {
          name: "Night Slash",
          type: "Dark",
          damage: 30,
        },
      ],
    },
  },
  {
    id: "058",
    name: "Growlithe",
    classification: "Puppy Pokémon",
    types: ["Fire"],
    resistant: ["Fire", "Grass", "Ice", "Bug", "Steel", "Fairy"],
    weaknesses: ["Water", "Ground", "Rock"],
    weight: {
      minimum: "16.63kg",
      maximum: "21.38kg",
    },
    height: {
      minimum: "0.61m",
      maximum: "0.79m",
    },
    fleeRate: 0.1,
    evolutionRequirements: {
      amount: 50,
      name: "Growlithe candies",
    },
    evolutions: [
      {
        id: 59,
        name: "Arcanine",
      },
    ],
    maxCP: 1199,
    maxHP: 1335,
    attacks: {
      fast: [
        {
          name: "Bite",
          type: "Dark",
          damage: 6,
        },
        {
          name: "Ember",
          type: "Fire",
          damage: 10,
        },
      ],
      special: [
        {
          name: "Body Slam",
          type: "Normal",
          damage: 40,
        },
        {
          name: "Flame Wheel",
          type: "Fire",
          damage: 40,
        },
        {
          name: "Flamethrower",
          type: "Fire",
          damage: 55,
        },
      ],
    },
  },
  {
    id: "059",
    name: "Arcanine",
    classification: "Legendary Pokémon",
    types: ["Fire"],
    resistant: ["Fire", "Grass", "Ice", "Bug", "Steel", "Fairy"],
    weaknesses: ["Water", "Ground", "Rock"],
    weight: {
      minimum: "135.63kg",
      maximum: "174.38kg",
    },
    height: {
      minimum: "1.66m",
      maximum: "2.14m",
    },
    fleeRate: 0.06,
    "Previous evolution(s)": [
      {
        id: 58,
        name: "Growlithe",
      },
    ],
    maxCP: 2781,
    maxHP: 2983,
    attacks: {
      fast: [
        {
          name: "Bite",
          type: "Dark",
          damage: 6,
        },
        {
          name: "Fire Fang",
          type: "Fire",
          damage: 10,
        },
      ],
      special: [
        {
          name: "Bulldoze",
          type: "Ground",
          damage: 35,
        },
        {
          name: "Fire Blast",
          type: "Fire",
          damage: 100,
        },
        {
          name: "Flamethrower",
          type: "Fire",
          damage: 55,
        },
      ],
    },
  },
  {
    id: "060",
    name: "Poliwag",
    classification: "Tadpole Pokémon",
    types: ["Water"],
    resistant: ["Fire", "Water", "Ice", "Steel"],
    weaknesses: ["Electric", "Grass"],
    weight: {
      minimum: "10.85kg",
      maximum: "13.95kg",
    },
    height: {
      minimum: "0.53m",
      maximum: "0.68m",
    },
    fleeRate: 0.15,
    evolutionRequirements: {
      amount: 25,
      name: "Poliwag candies",
    },
    evolutions: [
      {
        id: 61,
        name: "Poliwhirl",
      },
      {
        id: 62,
        name: "Poliwrath",
      },
    ],
    maxCP: 693,
    maxHP: 795,
    attacks: {
      fast: [
        {
          name: "Bubble",
          type: "Water",
          damage: 25,
        },
        {
          name: "Mud Shot",
          type: "Ground",
          damage: 6,
        },
      ],
      special: [
        {
          name: "Body Slam",
          type: "Normal",
          damage: 40,
        },
        {
          name: "Bubble Beam",
          type: "Water",
          damage: 30,
        },
        {
          name: "Mud Bomb",
          type: "Ground",
          damage: 30,
        },
      ],
    },
  },
  {
    id: "061",
    name: "Poliwhirl",
    classification: "Tadpole Pokémon",
    types: ["Water"],
    resistant: ["Fire", "Water", "Ice", "Steel"],
    weaknesses: ["Electric", "Grass"],
    weight: {
      minimum: "17.5kg",
      maximum: "22.5kg",
    },
    height: {
      minimum: "0.88m",
      maximum: "1.13m",
    },
    fleeRate: 0.07,
    "Previous evolution(s)": [
      {
        id: 60,
        name: "Poliwag",
      },
    ],
    evolutionRequirements: {
      amount: 100,
      name: "Poliwag candies",
    },
    evolutions: [
      {
        id: 62,
        name: "Poliwrath",
      },
    ],
    maxCP: 1206,
    maxHP: 1340,
    attacks: {
      fast: [
        {
          name: "Bubble",
          type: "Water",
          damage: 25,
        },
        {
          name: "Mud Shot",
          type: "Ground",
          damage: 6,
        },
      ],
      special: [
        {
          name: "Bubble Beam",
          type: "Water",
          damage: 30,
        },
        {
          name: "Mud Bomb",
          type: "Ground",
          damage: 30,
        },
        {
          name: "Scald",
          type: "Water",
          damage: 55,
        },
      ],
    },
  },
  {
    id: "062",
    name: "Poliwrath",
    classification: "Tadpole Pokémon",
    types: ["Water", "Fighting"],
    resistant: ["Fire", "Water", "Ice", "Bug", "Rock", "Dark", "Steel"],
    weaknesses: ["Electric", "Grass", "Flying", "Psychic", "Fairy"],
    weight: {
      minimum: "47.25kg",
      maximum: "60.75kg",
    },
    height: {
      minimum: "1.14m",
      maximum: "1.46m",
    },
    fleeRate: 0.05,
    "Previous evolution(s)": [
      {
        id: 60,
        name: "Poliwag",
      },
      {
        id: 61,
        name: "Poliwhirl",
      },
    ],
    maxCP: 2321,
    maxHP: 2505,
    attacks: {
      fast: [
        {
          name: "Bubble",
          type: "Water",
          damage: 25,
        },
        {
          name: "Mud Shot",
          type: "Ground",
          damage: 6,
        },
      ],
      special: [
        {
          name: "Hydro Pump",
          type: "Water",
          damage: 90,
        },
        {
          name: "Ice Punch",
          type: "Ice",
          damage: 45,
        },
        {
          name: "Submission",
          type: "Fighting",
          damage: 30,
        },
      ],
    },
  },
  {
    id: "063",
    name: "Abra",
    classification: "Psi Pokémon",
    types: ["Psychic"],
    resistant: ["Fighting", "Psychic"],
    weaknesses: ["Bug", "Ghost", "Dark"],
    weight: {
      minimum: "17.06kg",
      maximum: "21.94kg",
    },
    height: {
      minimum: "0.79m",
      maximum: "1.01m",
    },
    fleeRate: 0.99,
    evolutionRequirements: {
      amount: 25,
      name: "Abra candies",
    },
    evolutions: [
      {
        id: 64,
        name: "Kadabra",
      },
      {
        id: 65,
        name: "Alakazam",
      },
    ],
    maxCP: 508,
    maxHP: 600,
    attacks: {
      fast: [
        {},
        {
          name: "Zen Headbutt",
          type: "Psychic",
          damage: 12,
        },
      ],
      special: [
        {
          name: "Psyshock",
          type: "Psychic",
          damage: 40,
        },
        {
          name: "Shadow Ball",
          type: "Ghost",
          damage: 45,
        },
        {
          name: "Signal Beam",
          type: "Bug",
          damage: 45,
        },
      ],
    },
  },
  {
    id: "064",
    name: "Kadabra",
    classification: "Psi Pokémon",
    types: ["Psychic"],
    resistant: ["Fighting", "Psychic"],
    weaknesses: ["Bug", "Ghost", "Dark"],
    weight: {
      minimum: "49.44kg",
      maximum: "63.56kg",
    },
    height: {
      minimum: "1.14m",
      maximum: "1.46m",
    },
    fleeRate: 0.07,
    "Previous evolution(s)": [
      {
        id: 63,
        name: "Abra",
      },
    ],
    evolutionRequirements: {
      amount: 100,
      name: "Abra candies",
    },
    evolutions: [
      {
        id: 65,
        name: "Alakazam",
      },
    ],
    maxCP: 1005,
    maxHP: 1131,
    attacks: {
      fast: [
        {
          name: "Confusion",
          type: "Psychic",
          damage: 15,
        },
        {
          name: "Psycho Cut",
          type: "Psychic",
          damage: 7,
        },
      ],
      special: [
        {
          name: "Dazzling Gleam",
          type: "Fairy",
          damage: 55,
        },
        {
          name: "Psybeam",
          type: "Psychic",
          damage: 40,
        },
        {
          name: "Shadow Ball",
          type: "Ghost",
          damage: 45,
        },
      ],
    },
  },
  {
    id: "065",
    name: "Alakazam",
    classification: "Psi Pokémon",
    types: ["Psychic"],
    resistant: ["Fighting", "Psychic"],
    weaknesses: ["Bug", "Ghost", "Dark"],
    weight: {
      minimum: "42kg",
      maximum: "54kg",
    },
    height: {
      minimum: "1.31m",
      maximum: "1.69m",
    },
    fleeRate: 0.05,
    "Previous evolution(s)": [
      {
        id: 63,
        name: "Abra",
      },
      {
        id: 64,
        name: "Kadabra",
      },
    ],
    maxCP: 1654,
    maxHP: 1813,
    attacks: {
      fast: [
        {
          name: "Confusion",
          type: "Psychic",
          damage: 15,
        },
        {
          name: "Psycho Cut",
          type: "Psychic",
          damage: 7,
        },
      ],
      special: [
        {
          name: "Dazzling Gleam",
          type: "Fairy",
          damage: 55,
        },
        {
          name: "Psychic",
          type: "Psychic",
          damage: 55,
        },
        {
          name: "Shadow Ball",
          type: "Ghost",
          damage: 45,
        },
      ],
    },
  },
  {
    id: "066",
    name: "Machop",
    classification: "Superpower Pokémon",
    types: ["Fighting"],
    resistant: ["Bug", "Rock", "Dark"],
    weaknesses: ["Flying", "Psychic", "Fairy"],
    weight: {
      minimum: "17.06kg",
      maximum: "21.94kg",
    },
    height: {
      minimum: "0.7m",
      maximum: "0.9m",
    },
    fleeRate: 0.1,
    evolutionRequirements: {
      amount: 25,
      name: "Machop candies",
    },
    evolutions: [
      {
        id: 67,
        name: "Machoke",
      },
      {
        id: 68,
        name: "Machamp",
      },
    ],
    maxCP: 968,
    maxHP: 1089,
    attacks: {
      fast: [
        {
          name: "Karate Chop",
          type: "Fighting",
          damage: 6,
        },
        {
          name: "Low Kick",
          type: "Fighting",
          damage: 5,
        },
      ],
      special: [
        {
          name: "Brick Break",
          type: "Fighting",
          damage: 30,
        },
        {
          name: "Cross Chop",
          type: "Fighting",
          damage: 60,
        },
        {
          name: "Low Sweep",
          type: "Fighting",
          damage: 30,
        },
      ],
    },
  },
  {
    id: "067",
    name: "Machoke",
    classification: "Superpower Pokémon",
    types: ["Fighting"],
    resistant: ["Bug", "Rock", "Dark"],
    weaknesses: ["Flying", "Psychic", "Fairy"],
    weight: {
      minimum: "61.69kg",
      maximum: "79.31kg",
    },
    height: {
      minimum: "1.31m",
      maximum: "1.69m",
    },
    fleeRate: 0.07,
    "Previous evolution(s)": [
      {
        id: 66,
        name: "Machop",
      },
    ],
    evolutionRequirements: {
      amount: 100,
      name: "Machop candies",
    },
    evolutions: [
      {
        id: 68,
        name: "Machamp",
      },
    ],
    maxCP: 1606,
    maxHP: 1760,
    attacks: {
      fast: [
        {
          name: "Karate Chop",
          type: "Fighting",
          damage: 6,
        },
        {
          name: "Low Kick",
          type: "Fighting",
          damage: 5,
        },
      ],
      special: [
        {
          name: "Brick Break",
          type: "Fighting",
          damage: 30,
        },
        {
          name: "Cross Chop",
          type: "Fighting",
          damage: 60,
        },
        {
          name: "Submission",
          type: "Fighting",
          damage: 30,
        },
      ],
    },
  },
  {
    id: "068",
    name: "Machamp",
    classification: "Superpower Pokémon",
    types: ["Fighting"],
    resistant: ["Bug", "Rock", "Dark"],
    weaknesses: ["Flying", "Psychic", "Fairy"],
    weight: {
      minimum: "113.75kg",
      maximum: "146.25kg",
    },
    height: {
      minimum: "1.4m",
      maximum: "1.8m",
    },
    fleeRate: 0.05,
    "Previous evolution(s)": [
      {
        id: 66,
        name: "Machop",
      },
      {
        id: 67,
        name: "Machoke",
      },
    ],
    maxCP: 2406,
    maxHP: 2594,
    attacks: {
      fast: [
        {
          name: "Bullet Punch",
          type: "Steel",
          damage: 10,
        },
        {
          name: "Karate Chop",
          type: "Fighting",
          damage: 6,
        },
      ],
      special: [
        {
          name: "Cross Chop",
          type: "Fighting",
          damage: 60,
        },
        {
          name: "Stone Edge",
          type: "Rock",
          damage: 80,
        },
        {
          name: "Submission",
          type: "Fighting",
          damage: 30,
        },
      ],
    },
  },
  {
    id: "069",
    name: "Bellsprout",
    classification: "Flower Pokémon",
    types: ["Grass", "Poison"],
    resistant: ["Water", "Electric", "Grass", "Fighting", "Fairy"],
    weaknesses: ["Fire", "Ice", "Flying", "Psychic"],
    weight: {
      minimum: "3.5kg",
      maximum: "4.5kg",
    },
    height: {
      minimum: "0.61m",
      maximum: "0.79m",
    },
    fleeRate: 0.15,
    evolutionRequirements: {
      amount: 25,
      name: "Bellsprout candies",
    },
    evolutions: [
      {
        id: 70,
        name: "Weepinbell",
      },
      {
        id: 71,
        name: "Victreebel",
      },
    ],
    maxCP: 990,
    maxHP: 1117,
    attacks: {
      fast: [
        {
          name: "Acid",
          type: "Poison",
          damage: 10,
        },
        {
          name: "Vine Whip",
          type: "Grass",
          damage: 7,
        },
      ],
      special: [
        {
          name: "Power Whip",
          type: "Grass",
          damage: 70,
        },
        {
          name: "Sludge Bomb",
          type: "Poison",
          damage: 55,
        },
        {
          name: "Wrap",
          type: "Normal",
          damage: 25,
        },
      ],
    },
  },
  {
    id: "070",
    name: "Weepinbell",
    classification: "Flycatcher Pokémon",
    types: ["Grass", "Poison"],
    resistant: ["Water", "Electric", "Grass", "Fighting", "Fairy"],
    weaknesses: ["Fire", "Ice", "Flying", "Psychic"],
    weight: {
      minimum: "5.6kg",
      maximum: "7.2kg",
    },
    height: {
      minimum: "0.88m",
      maximum: "1.13m",
    },
    fleeRate: 0.07,
    "Previous evolution(s)": [
      {
        id: 69,
        name: "Bellsprout",
      },
    ],
    evolutionRequirements: {
      amount: 100,
      name: "Bellsprout candies",
    },
    evolutions: [
      {
        id: 71,
        name: "Victreebel",
      },
    ],
    maxCP: 1567,
    maxHP: 1723,
    attacks: {
      fast: [
        {
          name: "Acid",
          type: "Poison",
          damage: 10,
        },
        {
          name: "Razor Leaf",
          type: "Grass",
          damage: 15,
        },
      ],
      special: [
        {
          name: "Power Whip",
          type: "Grass",
          damage: 70,
        },
        {
          name: "Seed Bomb",
          type: "Grass",
          damage: 40,
        },
        {
          name: "Sludge Bomb",
          type: "Poison",
          damage: 55,
        },
      ],
    },
  },
  {
    id: "071",
    name: "Victreebel",
    classification: "Flycatcher Pokémon",
    types: ["Grass", "Poison"],
    resistant: ["Water", "Electric", "Grass", "Fighting", "Fairy"],
    weaknesses: ["Fire", "Ice", "Flying", "Psychic"],
    weight: {
      minimum: "13.56kg",
      maximum: "17.44kg",
    },
    height: {
      minimum: "1.49m",
      maximum: "1.91m",
    },
    fleeRate: 0.05,
    "Previous evolution(s)": [
      {
        id: 69,
        name: "Bellsprout",
      },
      {
        id: 70,
        name: "Weepinbell",
      },
    ],
    maxCP: 2342,
    maxHP: 2530,
    attacks: {
      fast: [
        {
          name: "Acid",
          type: "Poison",
          damage: 10,
        },
        {
          name: "Razor Leaf",
          type: "Grass",
          damage: 15,
        },
      ],
      special: [
        {
          name: "Leaf Blade",
          type: "Grass",
          damage: 55,
        },
        {
          name: "Sludge Bomb",
          type: "Poison",
          damage: 55,
        },
        {
          name: "Solar Beam",
          type: "Grass",
          damage: 120,
        },
      ],
    },
  },
  {
    id: "072",
    name: "Tentacool",
    classification: "Jellyfish Pokémon",
    types: ["Water", "Poison"],
    resistant: [
      "Fire",
      "Water",
      "Ice",
      "Fighting",
      "Poison",
      "Bug",
      "Steel",
      "Fairy",
    ],
    weaknesses: ["Electric", "Ground", "Psychic"],
    weight: {
      minimum: "39.81kg",
      maximum: "51.19kg",
    },
    height: {
      minimum: "0.79m",
      maximum: "1.01m",
    },
    fleeRate: 0.15,
    evolutionRequirements: {
      amount: 50,
      name: "Tentacool candies",
    },
    evolutions: [
      {
        id: 73,
        name: "Tentacruel",
      },
    ],
    maxCP: 794,
    maxHP: 905,
    attacks: {
      fast: [
        {
          name: "Bubble",
          type: "Water",
          damage: 25,
        },
        {
          name: "Poison Sting",
          type: "Poison",
          damage: 6,
        },
      ],
      special: [
        {
          name: "Bubble Beam",
          type: "Water",
          damage: 30,
        },
        {
          name: "Water Pulse",
          type: "Water",
          damage: 35,
        },
        {
          name: "Wrap",
          type: "Normal",
          damage: 25,
        },
      ],
    },
  },
  {
    id: "073",
    name: "Tentacruel",
    classification: "Jellyfish Pokémon",
    types: ["Water", "Poison"],
    resistant: [
      "Fire",
      "Water",
      "Ice",
      "Fighting",
      "Poison",
      "Bug",
      "Steel",
      "Fairy",
    ],
    weaknesses: ["Electric", "Ground", "Psychic"],
    weight: {
      minimum: "48.13kg",
      maximum: "61.88kg",
    },
    height: {
      minimum: "1.4m",
      maximum: "1.8m",
    },
    fleeRate: 0.07,
    "Previous evolution(s)": [
      {
        id: 72,
        name: "Tentacool",
      },
    ],
    maxCP: 2046,
    maxHP: 2220,
    attacks: {
      fast: [
        {
          name: "Acid",
          type: "Poison",
          damage: 10,
        },
        {
          name: "Poison Jab",
          type: "Poison",
          damage: 12,
        },
      ],
      special: [
        {
          name: "Blizzard",
          type: "Ice",
          damage: 100,
        },
        {
          name: "Hydro Pump",
          type: "Water",
          damage: 90,
        },
        {
          name: "Sludge Wave",
          type: "Poison",
          damage: 70,
        },
      ],
    },
  },
  {
    id: "074",
    name: "Geodude",
    classification: "Rock Pokémon",
    types: ["Rock", "Ground"],
    resistant: ["Normal", "Fire", "Electric", "Poison", "Flying", "Rock"],
    weaknesses: ["Water", "Grass", "Ice", "Fighting", "Ground", "Steel"],
    weight: {
      minimum: "17.5kg",
      maximum: "22.5kg",
    },
    height: {
      minimum: "0.35m",
      maximum: "0.45m",
    },
    fleeRate: 0.1,
    evolutionRequirements: {
      amount: 25,
      name: "Geodude candies",
    },
    evolutions: [
      {
        id: 75,
        name: "Graveler",
      },
      {
        id: 76,
        name: "Golem",
      },
    ],
    maxCP: 742,
    maxHP: 849,
    attacks: {
      fast: [
        {
          name: "Rock Throw",
          type: "Rock",
          damage: 12,
        },
        {
          name: "Tackle",
          type: "Normal",
          damage: 12,
        },
      ],
      special: [
        {
          name: "Dig",
          type: "Ground",
          damage: 70,
        },
        {
          name: "Rock Slide",
          type: "Rock",
          damage: 50,
        },
        {
          name: "Rock Tomb",
          type: "Rock",
          damage: 30,
        },
      ],
    },
  },
  {
    id: "075",
    name: "Graveler",
    classification: "Rock Pokémon",
    types: ["Rock", "Ground"],
    resistant: ["Normal", "Fire", "Electric", "Poison", "Flying", "Rock"],
    weaknesses: ["Water", "Grass", "Ice", "Fighting", "Ground", "Steel"],
    weight: {
      minimum: "91.88kg",
      maximum: "118.13kg",
    },
    height: {
      minimum: "0.88m",
      maximum: "1.13m",
    },
    fleeRate: 0.07,
    "Previous evolution(s)": [
      {
        id: 74,
        name: "Geodude",
      },
    ],
    evolutionRequirements: {
      amount: 100,
      name: "Geodude candies",
    },
    evolutions: [
      {
        id: 76,
        name: "Golem",
      },
    ],
    maxCP: 1294,
    maxHP: 1433,
    attacks: {
      fast: [
        {
          name: "Mud Shot",
          type: "Ground",
          damage: 6,
        },
        {
          name: "Rock Throw",
          type: "Rock",
          damage: 12,
        },
      ],
      special: [
        {
          name: "Dig",
          type: "Ground",
          damage: 70,
        },
        {
          name: "Rock Slide",
          type: "Rock",
          damage: 50,
        },
        {
          name: "Stone Edge",
          type: "Rock",
          damage: 80,
        },
      ],
    },
  },
  {
    id: "076",
    name: "Golem",
    classification: "Megaton Pokémon",
    types: ["Rock", "Ground"],
    resistant: ["Normal", "Fire", "Electric", "Poison", "Flying", "Rock"],
    weaknesses: ["Water", "Grass", "Ice", "Fighting", "Ground", "Steel"],
    weight: {
      minimum: "262.5kg",
      maximum: "337.5kg",
    },
    height: {
      minimum: "1.22m",
      maximum: "1.57m",
    },
    fleeRate: 0.05,
    "Previous evolution(s)": [
      {
        id: 74,
        name: "Geodude",
      },
      {
        id: 75,
        name: "Graveler",
      },
    ],
    maxCP: 2126,
    maxHP: 2303,
    attacks: {
      fast: [
        {
          name: "Mud Shot",
          type: "Ground",
          damage: 6,
        },
        {
          name: "Rock Throw",
          type: "Rock",
          damage: 12,
        },
      ],
      special: [
        {
          name: "Ancient Power",
          type: "Rock",
          damage: 35,
        },
        {
          name: "Earthquake",
          type: "Ground",
          damage: 100,
        },
        {
          name: "Stone Edge",
          type: "Rock",
          damage: 80,
        },
      ],
    },
  },
  {
    id: "077",
    name: "Ponyta",
    classification: "Fire Horse Pokémon",
    types: ["Fire"],
    resistant: ["Fire", "Grass", "Ice", "Bug", "Steel", "Fairy"],
    weaknesses: ["Water", "Ground", "Rock"],
    weight: {
      minimum: "26.25kg",
      maximum: "33.75kg",
    },
    height: {
      minimum: "0.88m",
      maximum: "1.13m",
    },
    fleeRate: 0.1,
    evolutionRequirements: {
      amount: 50,
      name: "Ponyta candies",
    },
    evolutions: [
      {
        id: 78,
        name: "Rapidash",
      },
    ],
    maxCP: 1370,
    maxHP: 1516,
    attacks: {
      fast: [
        {
          name: "Ember",
          type: "Fire",
          damage: 10,
        },
        {
          name: "Tackle",
          type: "Normal",
          damage: 12,
        },
      ],
      special: [
        {
          name: "Fire Blast",
          type: "Fire",
          damage: 100,
        },
        {
          name: "Flame Charge",
          type: "Fire",
          damage: 25,
        },
        {
          name: "Flame Wheel",
          type: "Fire",
          damage: 40,
        },
      ],
    },
  },
  {
    id: "078",
    name: "Rapidash",
    classification: "Fire Horse Pokémon",
    types: ["Fire"],
    resistant: ["Fire", "Grass", "Ice", "Bug", "Steel", "Fairy"],
    weaknesses: ["Water", "Ground", "Rock"],
    weight: {
      minimum: "83.13kg",
      maximum: "106.88kg",
    },
    height: {
      minimum: "1.49m",
      maximum: "1.91m",
    },
    fleeRate: 0.06,
    "Previous evolution(s)": [
      {
        id: 77,
        name: "Ponyta",
      },
    ],
    maxCP: 2024,
    maxHP: 2199,
    attacks: {
      fast: [
        {
          name: "Ember",
          type: "Fire",
          damage: 10,
        },
        {
          name: "Low Kick",
          type: "Fighting",
          damage: 5,
        },
      ],
      special: [
        {
          name: "Drill Run",
          type: "Ground",
          damage: 50,
        },
        {
          name: "Fire Blast",
          type: "Fire",
          damage: 100,
        },
        {
          name: "Heat Wave",
          type: "Fire",
          damage: 80,
        },
      ],
    },
  },
  {
    id: "079",
    name: "Slowpoke",
    classification: "Dopey Pokémon",
    types: ["Water", "Psychic"],
    resistant: ["Fire", "Water", "Ice", "Fighting", "Psychic", "Steel"],
    weaknesses: ["Electric", "Grass", "Bug", "Ghost", "Dark"],
    weight: {
      minimum: "31.5kg",
      maximum: "40.5kg",
    },
    height: {
      minimum: "1.05m",
      maximum: "1.35m",
    },
    fleeRate: 0.1,
    evolutionRequirements: {
      amount: 50,
      name: "Slowpoke candies",
    },
    evolutions: [
      {
        id: 80,
        name: "Slowbro",
      },
    ],
    maxCP: 1089,
    maxHP: 1218,
    attacks: {
      fast: [
        {
          name: "Confusion",
          type: "Psychic",
          damage: 15,
        },
        {
          name: "Water Gun",
          type: "Water",
          damage: 6,
        },
      ],
      special: [
        {
          name: "Psychic",
          type: "Psychic",
          damage: 55,
        },
        {
          name: "Psyshock",
          type: "Psychic",
          damage: 40,
        },
        {
          name: "Water Pulse",
          type: "Water",
          damage: 35,
        },
      ],
    },
  },
  {
    id: "080",
    name: "Slowbro",
    classification: "Hermit Crab Pokémon",
    types: ["Water", "Psychic"],
    resistant: ["Fire", "Water", "Ice", "Fighting", "Psychic", "Steel"],
    weaknesses: ["Electric", "Grass", "Bug", "Ghost", "Dark"],
    weight: {
      minimum: "68.69kg",
      maximum: "88.31kg",
    },
    height: {
      minimum: "1.4m",
      maximum: "1.8m",
    },
    fleeRate: 0.06,
    "Previous evolution(s)": [
      {
        id: 79,
        name: "Slowpoke",
      },
    ],
    maxCP: 2409,
    maxHP: 2597,
    attacks: {
      fast: [
        {
          name: "Confusion",
          type: "Psychic",
          damage: 15,
        },
        {
          name: "Water Gun",
          type: "Water",
          damage: 6,
        },
      ],
      special: [
        {
          name: "Ice Beam",
          type: "Ice",
          damage: 65,
        },
        {
          name: "Psychic",
          type: "Psychic",
          damage: 55,
        },
        {
          name: "Water Pulse",
          type: "Water",
          damage: 35,
        },
      ],
    },
  },
  {
    id: "081",
    name: "Magnemite",
    classification: "Magnet Pokémon",
    types: ["Electric", "Steel"],
    resistant: [
      "Normal",
      "Electric",
      "Grass",
      "Ice",
      "Poison",
      "Flying",
      "Psychic",
      "Bug",
      "Rock",
      "Dragon",
      "Steel",
      "Fairy",
    ],
    weaknesses: ["Fire", "Fighting", "Ground"],
    weight: {
      minimum: "5.25kg",
      maximum: "6.75kg",
    },
    height: {
      minimum: "0.26m",
      maximum: "0.34m",
    },
    fleeRate: 0.1,
    evolutionRequirements: {
      amount: 50,
      name: "Magnemite candies",
    },
    evolutions: [
      {
        id: 82,
        name: "Magneton",
      },
    ],
    maxCP: 774,
    maxHP: 890,
    attacks: {
      fast: [
        {
          name: "Spark",
          type: "Electric",
          damage: 7,
        },
        {
          name: "Thunder Shock",
          type: "Electric",
          damage: 5,
        },
      ],
      special: [
        {
          name: "Discharge",
          type: "Electric",
          damage: 35,
        },
        {
          name: "Magnet Bomb",
          type: "Steel",
          damage: 30,
        },
        {
          name: "Thunderbolt",
          type: "Electric",
          damage: 55,
        },
      ],
    },
  },
  {
    id: "082",
    name: "Magneton",
    classification: "Magnet Pokémon",
    types: ["Electric", "Steel"],
    resistant: [
      "Normal",
      "Electric",
      "Grass",
      "Ice",
      "Poison",
      "Flying",
      "Psychic",
      "Bug",
      "Rock",
      "Dragon",
      "Steel",
      "Fairy",
    ],
    weaknesses: ["Fire", "Fighting", "Ground"],
    weight: {
      minimum: "52.5kg",
      maximum: "67.5kg",
    },
    height: {
      minimum: "0.88m",
      maximum: "1.13m",
    },
    fleeRate: 0.06,
    "Previous evolution(s)": [
      {
        id: 81,
        name: "Magnemite",
      },
    ],
    maxCP: 1715,
    maxHP: 1879,
    attacks: {
      fast: [
        {
          name: "Spark",
          type: "Electric",
          damage: 7,
        },
        {
          name: "Thunder Shock",
          type: "Electric",
          damage: 5,
        },
      ],
      special: [
        {
          name: "Discharge",
          type: "Electric",
          damage: 35,
        },
        {
          name: "Flash Cannon",
          type: "Steel",
          damage: 60,
        },
        {
          name: "Magnet Bomb",
          type: "Steel",
          damage: 30,
        },
      ],
    },
  },
  {
    id: "083",
    name: "Farfetch'd",
    classification: "Wild Duck Pokémon",
    types: ["Normal", "Flying"],
    resistant: ["Grass", "Ground", "Bug", "Ghost"],
    weaknesses: ["Electric", "Ice", "Rock"],
    weight: {
      minimum: "13.13kg",
      maximum: "16.88kg",
    },
    height: {
      minimum: "0.7m",
      maximum: "0.9m",
    },
    fleeRate: 0.09,
    "Common Capture Area":
      "Early reports that this Pokémon is likely to be found in: Asia",
    Asia: "Common Capture Area",
    maxCP: 1133,
    maxHP: 1263,
    attacks: {
      fast: [
        {},
        {
          name: "Fury Cutter",
          type: "Bug",
          damage: 3,
        },
      ],
      special: [
        {
          name: "Aerial Ace",
          type: "Flying",
          damage: 30,
        },
        {
          name: "Air Cutter",
          type: "Flying",
          damage: 30,
        },
        {
          name: "Leaf Blade",
          type: "Grass",
          damage: 55,
        },
      ],
    },
  },
  {
    id: "084",
    name: "Doduo",
    classification: "Twin Bird Pokémon",
    types: ["Normal", "Flying"],
    resistant: ["Grass", "Ground", "Bug", "Ghost"],
    weaknesses: ["Electric", "Ice", "Rock"],
    weight: {
      minimum: "34.3kg",
      maximum: "44.1kg",
    },
    height: {
      minimum: "1.22m",
      maximum: "1.57m",
    },
    fleeRate: 0.1,
    evolutionRequirements: {
      amount: 50,
      name: "Doduo candies",
    },
    evolutions: [
      {
        id: 85,
        name: "Dodrio",
      },
    ],
    maxCP: 746,
    maxHP: 855,
    attacks: {
      fast: [
        {
          name: "Peck",
          type: "Flying",
          damage: 10,
        },
        {
          name: "Quick Attack",
          type: "Normal",
          damage: 10,
        },
      ],
      special: [
        {
          name: "Aerial Ace",
          type: "Flying",
          damage: 30,
        },
        {
          name: "Drill Peck",
          type: "Flying",
          damage: 40,
        },
        {
          name: "Swift",
          type: "Normal",
          damage: 30,
        },
      ],
    },
  },
  {
    id: "085",
    name: "Dodrio",
    classification: "Triple Bird Pokémon",
    types: ["Normal", "Flying"],
    resistant: ["Grass", "Ground", "Bug", "Ghost"],
    weaknesses: ["Electric", "Ice", "Rock"],
    weight: {
      minimum: "74.55kg",
      maximum: "95.85kg",
    },
    height: {
      minimum: "1.57m",
      maximum: "2.02m",
    },
    fleeRate: 0.06,
    "Previous evolution(s)": [
      {
        id: 84,
        name: "Doduo",
      },
    ],
    maxCP: 1677,
    maxHP: 1836,
    attacks: {
      fast: [
        {
          name: "Feint Attack",
          type: "Dark",
          damage: 12,
        },
        {
          name: "Steel Wing",
          type: "Steel",
          damage: 15,
        },
      ],
      special: [
        {
          name: "Aerial Ace",
          type: "Flying",
          damage: 30,
        },
        {
          name: "Air Cutter",
          type: "Flying",
          damage: 30,
        },
        {
          name: "Drill Peck",
          type: "Flying",
          damage: 40,
        },
      ],
    },
  },
  {
    id: "086",
    name: "Seel",
    classification: "Sea Lion Pokémon",
    types: ["Water"],
    resistant: ["Fire", "Water", "Ice", "Steel"],
    weaknesses: ["Electric", "Grass"],
    weight: {
      minimum: "78.75kg",
      maximum: "101.25kg",
    },
    height: {
      minimum: "0.96m",
      maximum: "1.24m",
    },
    fleeRate: 0.09,
    evolutionRequirements: {
      amount: 50,
      name: "Seel candies",
    },
    evolutions: [
      {
        id: 87,
        name: "Dewgong",
      },
    ],
    maxCP: 985,
    maxHP: 1107,
    attacks: {
      fast: [
        {
          name: "Ice Shard",
          type: "Ice",
          damage: 15,
        },
        {
          name: "Water Gun",
          type: "Water",
          damage: 6,
        },
      ],
      special: [
        {
          name: "Aqua Jet",
          type: "Water",
          damage: 25,
        },
        {
          name: "Aqua Tail",
          type: "Water",
          damage: 45,
        },
        {
          name: "Icy Wind",
          type: "Ice",
          damage: 25,
        },
      ],
    },
  },
  {
    id: "087",
    name: "Dewgong",
    classification: "Sea Lion Pokémon",
    types: ["Water", "Ice"],
    resistant: ["Water", "Ice"],
    weaknesses: ["Electric", "Grass", "Fighting", "Rock"],
    weight: {
      minimum: "105kg",
      maximum: "135kg",
    },
    height: {
      minimum: "1.49m",
      maximum: "1.91m",
    },
    fleeRate: 0.06,
    "Previous evolution(s)": [
      {
        id: 86,
        name: "Seel",
      },
    ],
    maxCP: 1975,
    maxHP: 2145,
    attacks: {
      fast: [
        {
          name: "Frost Breath",
          type: "Ice",
          damage: 9,
        },
        {
          name: "Ice Shard",
          type: "Ice",
          damage: 15,
        },
      ],
      special: [
        {
          name: "Aqua Jet",
          type: "Water",
          damage: 25,
        },
        {
          name: "Blizzard",
          type: "Ice",
          damage: 100,
        },
        {
          name: "Icy Wind",
          type: "Ice",
          damage: 25,
        },
      ],
    },
  },
  {
    id: "088",
    name: "Grimer",
    classification: "Sludge Pokémon",
    types: ["Poison"],
    resistant: ["Grass", "Fighting", "Poison", "Bug", "Fairy"],
    weaknesses: ["Ground", "Psychic"],
    weight: {
      minimum: "26.25kg",
      maximum: "33.75kg",
    },
    height: {
      minimum: "0.79m",
      maximum: "1.01m",
    },
    fleeRate: 0.1,
    evolutionRequirements: {
      amount: 50,
      name: "Grimer candies",
    },
    evolutions: [
      {
        id: 89,
        name: "Muk",
      },
    ],
    maxCP: 1152,
    maxHP: 1284,
    attacks: {
      fast: [
        {
          name: "Acid",
          type: "Poison",
          damage: 10,
        },
        {
          name: "Mud Slap",
          type: "Ground",
          damage: 15,
        },
      ],
      special: [
        {
          name: "Mud Bomb",
          type: "Ground",
          damage: 30,
        },
        {
          name: "Sludge",
          type: "Poison",
          damage: 30,
        },
        {
          name: "Sludge Bomb",
          type: "Poison",
          damage: 55,
        },
      ],
    },
  },
  {
    id: "089",
    name: "Muk",
    classification: "Sludge Pokémon",
    types: ["Poison"],
    resistant: ["Grass", "Fighting", "Poison", "Bug", "Fairy"],
    weaknesses: ["Ground", "Psychic"],
    weight: {
      minimum: "26.25kg",
      maximum: "33.75kg",
    },
    height: {
      minimum: "1.05m",
      maximum: "1.35m",
    },
    fleeRate: 0.06,
    "Previous evolution(s)": [
      {
        id: 88,
        name: "Grimer",
      },
    ],
    maxCP: 2414,
    maxHP: 2602,
    attacks: {
      fast: [
        {
          name: "Acid",
          type: "Poison",
          damage: 10,
        },
        {
          name: "Poison Jab",
          type: "Poison",
          damage: 12,
        },
      ],
      special: [
        {
          name: "Dark Pulse",
          type: "Dark",
          damage: 45,
        },
        {
          name: "Gunk Shot",
          type: "Poison",
          damage: 65,
        },
        {
          name: "Sludge Wave",
          type: "Poison",
          damage: 70,
        },
      ],
    },
  },
  {
    id: "090",
    name: "Shellder",
    classification: "Bivalve Pokémon",
    types: ["Water"],
    resistant: ["Fire", "Water", "Ice", "Steel"],
    weaknesses: ["Electric", "Grass"],
    weight: {
      minimum: "3.5kg",
      maximum: "4.5kg",
    },
    height: {
      minimum: "0.26m",
      maximum: "0.34m",
    },
    fleeRate: 0.1,
    evolutionRequirements: {
      amount: 50,
      name: "Shellder candies",
    },
    evolutions: [
      {
        id: 91,
        name: "Cloyster",
      },
    ],
    maxCP: 715,
    maxHP: 822,
    attacks: {
      fast: [
        {
          name: "Ice Shard",
          type: "Ice",
          damage: 15,
        },
        {
          name: "Tackle",
          type: "Normal",
          damage: 12,
        },
      ],
      special: [
        {
          name: "Bubble Beam",
          type: "Water",
          damage: 30,
        },
        {
          name: "Icy Wind",
          type: "Ice",
          damage: 25,
        },
        {
          name: "Water Pulse",
          type: "Water",
          damage: 35,
        },
      ],
    },
  },
  {
    id: "091",
    name: "Cloyster",
    classification: "Bivalve Pokémon",
    types: ["Water", "Ice"],
    resistant: ["Water", "Ice"],
    weaknesses: ["Electric", "Grass", "Fighting", "Rock"],
    weight: {
      minimum: "115.94kg",
      maximum: "149.06kg",
    },
    height: {
      minimum: "1.31m",
      maximum: "1.69m",
    },
    fleeRate: 0.06,
    "Previous evolution(s)": [
      {
        id: 90,
        name: "Shellder",
      },
    ],
    maxCP: 1879,
    maxHP: 2052,
    attacks: {
      fast: [
        {
          name: "Frost Breath",
          type: "Ice",
          damage: 9,
        },
        {
          name: "Ice Shard",
          type: "Ice",
          damage: 15,
        },
      ],
      special: [
        {
          name: "Blizzard",
          type: "Ice",
          damage: 100,
        },
        {
          name: "Hydro Pump",
          type: "Water",
          damage: 90,
        },
        {
          name: "Icy Wind",
          type: "Ice",
          damage: 25,
        },
      ],
    },
  },
  {
    id: "092",
    name: "Gastly",
    classification: "Gas Pokémon",
    types: ["Ghost", "Poison"],
    resistant: ["Normal", "Grass", "Fighting", "Poison", "Bug", "Fairy"],
    weaknesses: ["Ground", "Psychic", "Ghost", "Dark"],
    weight: {
      minimum: "0.09kg",
      maximum: "0.11kg",
    },
    height: {
      minimum: "1.14m",
      maximum: "1.46m",
    },
    fleeRate: 0.1,
    evolutionRequirements: {
      amount: 25,
      name: "Gastly candies",
    },
    evolutions: [
      {
        id: 93,
        name: "Haunter",
      },
      {
        id: 94,
        name: "Gengar",
      },
    ],
    maxCP: 696,
    maxHP: 804,
    attacks: {
      fast: [
        {
          name: "Lick",
          type: "Ghost",
          damage: 5,
        },
        {
          name: "Sucker Punch",
          type: "Dark",
          damage: 7,
        },
      ],
      special: [
        {
          name: "Dark Pulse",
          type: "Dark",
          damage: 45,
        },
        {
          name: "Ominous Wind",
          type: "Ghost",
          damage: 30,
        },
        {
          name: "Sludge Bomb",
          type: "Poison",
          damage: 55,
        },
      ],
    },
  },
  {
    id: "093",
    name: "Haunter",
    classification: "Gas Pokémon",
    types: ["Ghost", "Poison"],
    resistant: ["Normal", "Grass", "Fighting", "Poison", "Bug", "Fairy"],
    weaknesses: ["Ground", "Psychic", "Ghost", "Dark"],
    weight: {
      minimum: "0.09kg",
      maximum: "0.11kg",
    },
    height: {
      minimum: "1.4m",
      maximum: "1.8m",
    },
    fleeRate: 0.07,
    "Previous evolution(s)": [
      {
        id: 92,
        name: "Gastly",
      },
    ],
    evolutionRequirements: {
      amount: 100,
      name: "Gastly candies",
    },
    evolutions: [
      {
        id: 94,
        name: "Gengar",
      },
    ],
    maxCP: 1240,
    maxHP: 1380,
    attacks: {
      fast: [
        {
          name: "Lick",
          type: "Ghost",
          damage: 5,
        },
        {
          name: "Shadow Claw",
          type: "Ghost",
          damage: 11,
        },
      ],
      special: [
        {
          name: "Dark Pulse",
          type: "Dark",
          damage: 45,
        },
        {
          name: "Shadow Ball",
          type: "Ghost",
          damage: 45,
        },
        {
          name: "Sludge Bomb",
          type: "Poison",
          damage: 55,
        },
      ],
    },
  },
  {
    id: "094",
    name: "Gengar",
    classification: "Shadow Pokémon",
    types: ["Ghost", "Poison"],
    resistant: ["Normal", "Grass", "Fighting", "Poison", "Bug", "Fairy"],
    weaknesses: ["Ground", "Psychic", "Ghost", "Dark"],
    weight: {
      minimum: "35.44kg",
      maximum: "45.56kg",
    },
    height: {
      minimum: "1.31m",
      maximum: "1.69m",
    },
    fleeRate: 0.05,
    "Previous evolution(s)": [
      {
        id: 92,
        name: "Gastly",
      },
      {
        id: 93,
        name: "Haunter",
      },
    ],
    maxCP: 1907,
    maxHP: 2078,
    attacks: {
      fast: [
        {
          name: "Shadow Claw",
          type: "Ghost",
          damage: 11,
        },
        {
          name: "Sucker Punch",
          type: "Dark",
          damage: 7,
        },
      ],
      special: [
        {
          name: "Dark Pulse",
          type: "Dark",
          damage: 45,
        },
        {
          name: "Shadow Ball",
          type: "Ghost",
          damage: 45,
        },
        {
          name: "Sludge Wave",
          type: "Poison",
          damage: 70,
        },
      ],
    },
  },
  {
    id: "095",
    name: "Onix",
    classification: "Rock Snake Pokémon",
    types: ["Rock", "Ground"],
    resistant: ["Normal", "Fire", "Electric", "Poison", "Flying", "Rock"],
    weaknesses: ["Water", "Grass", "Ice", "Fighting", "Ground", "Steel"],
    weight: {
      minimum: "183.75kg",
      maximum: "236.25kg",
    },
    height: {
      minimum: "7.7m",
      maximum: "9.9m",
    },
    fleeRate: 0.09,
    maxCP: 745,
    maxHP: 857,
    attacks: {
      fast: [
        {
          name: "Rock Throw",
          type: "Rock",
          damage: 12,
        },
        {
          name: "Tackle",
          type: "Normal",
          damage: 12,
        },
      ],
      special: [
        {
          name: "Iron Head",
          type: "Steel",
          damage: 30,
        },
        {
          name: "Rock Slide",
          type: "Rock",
          damage: 50,
        },
        {
          name: "Stone Edge",
          type: "Rock",
          damage: 80,
        },
      ],
    },
  },
  {
    id: "096",
    name: "Drowzee",
    classification: "Hypnosis Pokémon",
    types: ["Psychic"],
    resistant: ["Fighting", "Psychic"],
    weaknesses: ["Bug", "Ghost", "Dark"],
    weight: {
      minimum: "28.35kg",
      maximum: "36.45kg",
    },
    height: {
      minimum: "0.88m",
      maximum: "1.13m",
    },
    fleeRate: 0.1,
    evolutionRequirements: {
      amount: 50,
      name: "Drowzee candies",
    },
    evolutions: [
      {
        id: 97,
        name: "Hypno",
      },
    ],
    maxCP: 955,
    maxHP: 1075,
    attacks: {
      fast: [
        {
          name: "Confusion",
          type: "Psychic",
          damage: 15,
        },
        {
          name: "Pound",
          type: "Normal",
          damage: 7,
        },
      ],
      special: [
        {
          name: "Psybeam",
          type: "Psychic",
          damage: 40,
        },
        {
          name: "Psychic",
          type: "Psychic",
          damage: 55,
        },
        {
          name: "Psyshock",
          type: "Psychic",
          damage: 40,
        },
      ],
    },
  },
  {
    id: "097",
    name: "Hypno",
    classification: "Hypnosis Pokémon",
    types: ["Psychic"],
    resistant: ["Fighting", "Psychic"],
    weaknesses: ["Bug", "Ghost", "Dark"],
    weight: {
      minimum: "66.15kg",
      maximum: "85.05kg",
    },
    height: {
      minimum: "1.4m",
      maximum: "1.8m",
    },
    fleeRate: 0.06,
    "Previous evolution(s)": [
      {
        id: 96,
        name: "Drowzee",
      },
    ],
    maxCP: 2012,
    maxHP: 2184,
    attacks: {
      fast: [
        {
          name: "Confusion",
          type: "Psychic",
          damage: 15,
        },
        {
          name: "Zen Headbutt",
          type: "Psychic",
          damage: 12,
        },
      ],
      special: [
        {
          name: "Psychic",
          type: "Psychic",
          damage: 55,
        },
        {
          name: "Psyshock",
          type: "Psychic",
          damage: 40,
        },
        {
          name: "Shadow Ball",
          type: "Ghost",
          damage: 45,
        },
      ],
    },
  },
  {
    id: "098",
    name: "Krabby",
    classification: "River Crab Pokémon",
    types: ["Water"],
    resistant: ["Fire", "Water", "Ice", "Steel"],
    weaknesses: ["Electric", "Grass"],
    weight: {
      minimum: "5.69kg",
      maximum: "7.31kg",
    },
    height: {
      minimum: "0.35m",
      maximum: "0.45m",
    },
    fleeRate: 0.15,
    evolutionRequirements: {
      amount: 50,
      name: "Krabby candies",
    },
    evolutions: [
      {
        id: 99,
        name: "Kingler",
      },
    ],
    maxCP: 686,
    maxHP: 792,
    attacks: {
      fast: [
        {
          name: "Bubble",
          type: "Water",
          damage: 25,
        },
        {
          name: "Mud Shot",
          type: "Ground",
          damage: 6,
        },
      ],
      special: [
        {
          name: "Bubble Beam",
          type: "Water",
          damage: 30,
        },
        {
          name: "Vice Grip",
          type: "Normal",
          damage: 25,
        },
        {
          name: "Water Pulse",
          type: "Water",
          damage: 35,
        },
      ],
    },
  },
  {
    id: "099",
    name: "Kingler",
    classification: "Pincer Pokémon",
    types: ["Water"],
    resistant: ["Fire", "Water", "Ice", "Steel"],
    weaknesses: ["Electric", "Grass"],
    weight: {
      minimum: "52.5kg",
      maximum: "67.5kg",
    },
    height: {
      minimum: "1.14m",
      maximum: "1.46m",
    },
    fleeRate: 0.07,
    "Previous evolution(s)": [
      {
        id: 98,
        name: "Krabby",
      },
    ],
    maxCP: 1663,
    maxHP: 1823,
    attacks: {
      fast: [
        {
          name: "Metal Claw",
          type: "Steel",
          damage: 8,
        },
        {
          name: "Mud Shot",
          type: "Ground",
          damage: 6,
        },
      ],
      special: [
        {
          name: "Vice Grip",
          type: "Normal",
          damage: 25,
        },
        {
          name: "Water Pulse",
          type: "Water",
          damage: 35,
        },
        {
          name: "X Scissor",
          type: "Bug",
          damage: 35,
        },
      ],
    },
  },
  {
    id: "100",
    name: "Voltorb",
    classification: "Ball Pokémon",
    types: ["Electric"],
    resistant: ["Electric", "Flying", "Steel"],
    weaknesses: ["Ground"],
    weight: {
      minimum: "9.1kg",
      maximum: "11.7kg",
    },
    height: {
      minimum: "0.44m",
      maximum: "0.56m",
    },
    fleeRate: 0.1,
    evolutionRequirements: {
      amount: 50,
      name: "Voltorb candies",
    },
    evolutions: [
      {
        id: 101,
        name: "Electrode",
      },
    ],
    maxCP: 733,
    maxHP: 839,
    attacks: {
      fast: [
        {
          name: "Spark",
          type: "Electric",
          damage: 7,
        },
        {
          name: "Tackle",
          type: "Normal",
          damage: 12,
        },
      ],
      special: [
        {
          name: "Discharge",
          type: "Electric",
          damage: 35,
        },
        {
          name: "Signal Beam",
          type: "Bug",
          damage: 45,
        },
        {
          name: "Thunderbolt",
          type: "Electric",
          damage: 55,
        },
      ],
    },
  },
  {
    id: "101",
    name: "Electrode",
    classification: "Ball Pokémon",
    types: ["Electric"],
    resistant: ["Electric", "Flying", "Steel"],
    weaknesses: ["Ground"],
    weight: {
      minimum: "58.27kg",
      maximum: "74.92kg",
    },
    height: {
      minimum: "1.05m",
      maximum: "1.35m",
    },
    fleeRate: 0.06,
    "Previous evolution(s)": [
      {
        id: 100,
        name: "Voltorb",
      },
    ],
    maxCP: 1496,
    maxHP: 1646,
    attacks: {
      fast: [
        {
          name: "Spark",
          type: "Electric",
          damage: 7,
        },
        {
          name: "Tackle",
          type: "Normal",
          damage: 12,
        },
      ],
      special: [
        {
          name: "Discharge",
          type: "Electric",
          damage: 35,
        },
        {
          name: "Hyper Beam",
          type: "Normal",
          damage: 120,
        },
        {
          name: "Thunderbolt",
          type: "Electric",
          damage: 55,
        },
      ],
    },
  },
  {
    id: "102",
    name: "Exeggcute",
    classification: "Egg Pokémon",
    types: ["Grass", "Psychic"],
    resistant: ["Water", "Electric", "Grass", "Fighting", "Ground", "Psychic"],
    weaknesses: ["Fire", "Ice", "Poison", "Flying", "Bug", "Ghost", "Dark"],
    weight: {
      minimum: "2.19kg",
      maximum: "2.81kg",
    },
    height: {
      minimum: "0.35m",
      maximum: "0.45m",
    },
    fleeRate: 0.1,
    evolutionRequirements: {
      amount: 50,
      name: "E",
    },
    evolutions: [
      {
        id: 103,
        name: "Exeggutor",
      },
    ],
    maxCP: 978,
    maxHP: 1099,
    attacks: {
      fast: [
        {
          name: "Confusion",
          type: "Psychic",
          damage: 15,
        },
      ],
      special: [
        {
          name: "Ancient Power",
          type: "Rock",
          damage: 35,
        },
        {
          name: "Psychic",
          type: "Psychic",
          damage: 55,
        },
        {
          name: "Seed Bomb",
          type: "Grass",
          damage: 40,
        },
      ],
    },
  },
  {
    id: "103",
    name: "Exeggutor",
    classification: "Coconut Pokémon",
    types: ["Grass", "Psychic"],
    resistant: ["Water", "Electric", "Grass", "Fighting", "Ground", "Psychic"],
    weaknesses: ["Fire", "Ice", "Poison", "Flying", "Bug", "Ghost", "Dark"],
    weight: {
      minimum: "105kg",
      maximum: "135kg",
    },
    height: {
      minimum: "1.75m",
      maximum: "2.25m",
    },
    fleeRate: 0.06,
    "Previous evolution(s)": [
      {
        id: 102,
        name: "Exeggcute",
      },
    ],
    maxCP: 2752,
    maxHP: 2955,
    attacks: {
      fast: [
        {
          name: "Confusion",
          type: "Psychic",
          damage: 15,
        },
        {
          name: "Zen Headbutt",
          type: "Psychic",
          damage: 12,
        },
      ],
      special: [
        {
          name: "Psychic",
          type: "Psychic",
          damage: 55,
        },
        {
          name: "Seed Bomb",
          type: "Grass",
          damage: 40,
        },
        {
          name: "Solar Beam",
          type: "Grass",
          damage: 120,
        },
      ],
    },
  },
  {
    id: "104",
    name: "Cubone",
    classification: "Lonely Pokémon",
    types: ["Ground"],
    resistant: ["Electric", "Poison", "Rock"],
    weaknesses: ["Water", "Grass", "Ice"],
    weight: {
      minimum: "5.69kg",
      maximum: "7.31kg",
    },
    height: {
      minimum: "0.35m",
      maximum: "0.45m",
    },
    fleeRate: 0.1,
    evolutionRequirements: {
      amount: 50,
      name: "Cubone candies",
    },
    evolutions: [
      {
        id: 105,
        name: "Marowak",
      },
    ],
    maxCP: 889,
    maxHP: 1006,
    attacks: {
      fast: [
        {
          name: "Mud Slap",
          type: "Ground",
          damage: 15,
        },
        {
          name: "Rock Smash",
          type: "Fighting",
          damage: 15,
        },
      ],
      special: [
        {
          name: "Bulldoze",
          type: "Ground",
          damage: 35,
        },
        {
          name: "Dig",
          type: "Ground",
          damage: 70,
        },
        {
          name: "Earthquake",
          type: "Ground",
          damage: 100,
        },
      ],
    },
  },
  {
    id: "105",
    name: "Marowak",
    classification: "Bone Keeper Pokémon",
    types: ["Ground"],
    resistant: ["Electric", "Poison", "Rock"],
    weaknesses: ["Water", "Grass", "Ice"],
    weight: {
      minimum: "39.38kg",
      maximum: "50.63kg",
    },
    height: {
      minimum: "0.88m",
      maximum: "1.13m",
    },
    fleeRate: 0.06,
    "Previous evolution(s)": [
      {
        id: 104,
        name: "Cubone",
      },
    ],
    maxCP: 1505,
    maxHP: 1656,
    attacks: {
      fast: [
        {
          name: "Mud Slap",
          type: "Ground",
          damage: 15,
        },
        {
          name: "Rock Smash",
          type: "Fighting",
          damage: 15,
        },
      ],
      special: [
        {
          name: "Bone Club",
          type: "Ground",
          damage: 25,
        },
        {
          name: "Dig",
          type: "Ground",
          damage: 70,
        },
        {
          name: "Earthquake",
          type: "Ground",
          damage: 100,
        },
      ],
    },
  },
  {
    id: "106",
    name: "Hitmonlee",
    classification: "Kicking Pokémon",
    types: ["Fighting"],
    resistant: ["Bug", "Rock", "Dark"],
    weaknesses: ["Flying", "Psychic", "Fairy"],
    weight: {
      minimum: "43.57kg",
      maximum: "56.02kg",
    },
    height: {
      minimum: "1.31m",
      maximum: "1.69m",
    },
    fleeRate: 0.09,
    maxCP: 1349,
    maxHP: 1492,
    attacks: {
      fast: [
        {
          name: "Low Kick",
          type: "Fighting",
          damage: 5,
        },
        {
          name: "Rock Smash",
          type: "Fighting",
          damage: 15,
        },
      ],
      special: [
        {
          name: "Low Sweep",
          type: "Fighting",
          damage: 30,
        },
        {
          name: "Stomp",
          type: "Normal",
          damage: 30,
        },
        {
          name: "Stone Edge",
          type: "Rock",
          damage: 80,
        },
      ],
    },
  },
  {
    id: "107",
    name: "Hitmonchan",
    classification: "Punching Pokémon",
    types: ["Fighting"],
    resistant: ["Bug", "Rock", "Dark"],
    weaknesses: ["Flying", "Psychic", "Fairy"],
    weight: {
      minimum: "43.93kg",
      maximum: "56.48kg",
    },
    height: {
      minimum: "1.22m",
      maximum: "1.57m",
    },
    fleeRate: 0.09,
    maxCP: 1370,
    maxHP: 1516,
    attacks: {
      fast: [
        {
          name: "Bullet Punch",
          type: "Steel",
          damage: 10,
        },
        {
          name: "Rock Smash",
          type: "Fighting",
          damage: 15,
        },
      ],
      special: [
        {
          name: "Brick Break",
          type: "Fighting",
          damage: 30,
        },
        {
          name: "Fire Punch",
          type: "Fire",
          damage: 40,
        },
        {
          name: "Ice Punch",
          type: "Ice",
          damage: 45,
        },
        {
          name: "Thunder Punch",
          type: "Electric",
          damage: 40,
        },
      ],
    },
  },
  {
    id: "108",
    name: "Lickitung",
    classification: "Licking Pokémon",
    types: ["Normal"],
    resistant: ["Ghost"],
    weaknesses: ["Fighting"],
    weight: {
      minimum: "57.31kg",
      maximum: "73.69kg",
    },
    height: {
      minimum: "1.05m",
      maximum: "1.35m",
    },
    fleeRate: 0.09,
    maxCP: 1477,
    maxHP: 1626,
    attacks: {
      fast: [
        {
          name: "Lick",
          type: "Ghost",
          damage: 5,
        },
        {
          name: "Zen Headbutt",
          type: "Psychic",
          damage: 12,
        },
      ],
      special: [
        {
          name: "Hyper Beam",
          type: "Normal",
          damage: 120,
        },
        {
          name: "Power Whip",
          type: "Grass",
          damage: 70,
        },
        {
          name: "Stomp",
          type: "Normal",
          damage: 30,
        },
      ],
    },
  },
  {
    id: "109",
    name: "Koffing",
    classification: "Poison Gas Pokémon",
    types: ["Poison"],
    resistant: ["Grass", "Fighting", "Poison", "Bug", "Fairy"],
    weaknesses: ["Ground", "Psychic"],
    weight: {
      minimum: "0.88kg",
      maximum: "1.13kg",
    },
    height: {
      minimum: "0.53m",
      maximum: "0.68m",
    },
    fleeRate: 0.1,
    evolutionRequirements: {
      amount: 50,
      name: "Koffing candies",
    },
    evolutions: [
      {
        id: 110,
        name: "Weezing",
      },
    ],
    maxCP: 1025,
    maxHP: 1151,
    attacks: {
      fast: [
        {
          name: "Acid",
          type: "Poison",
          damage: 10,
        },
        {
          name: "Tackle",
          type: "Normal",
          damage: 12,
        },
      ],
      special: [
        {
          name: "Dark Pulse",
          type: "Dark",
          damage: 45,
        },
        {
          name: "Sludge",
          type: "Poison",
          damage: 30,
        },
        {
          name: "Sludge Bomb",
          type: "Poison",
          damage: 55,
        },
      ],
    },
  },
  {
    id: "110",
    name: "Weezing",
    classification: "Poison Gas Pokémon",
    types: ["Poison"],
    resistant: ["Grass", "Fighting", "Poison", "Bug", "Fairy"],
    weaknesses: ["Ground", "Psychic"],
    weight: {
      minimum: "8.31kg",
      maximum: "10.69kg",
    },
    height: {
      minimum: "1.05m",
      maximum: "1.35m",
    },
    fleeRate: 0.06,
    "Previous evolution(s)": [
      {
        id: 109,
        name: "Koffing",
      },
    ],
    maxCP: 2073,
    maxHP: 2250,
    attacks: {
      fast: [
        {
          name: "Acid",
          type: "Poison",
          damage: 10,
        },
        {
          name: "Tackle",
          type: "Normal",
          damage: 12,
        },
      ],
      special: [
        {
          name: "Dark Pulse",
          type: "Dark",
          damage: 45,
        },
        {
          name: "Shadow Ball",
          type: "Ghost",
          damage: 45,
        },
        {
          name: "Sludge Bomb",
          type: "Poison",
          damage: 55,
        },
      ],
    },
  },
  {
    id: "111",
    name: "Rhyhorn",
    classification: "Spikes Pokémon",
    types: ["Ground", "Rock"],
    resistant: ["Normal", "Fire", "Electric", "Poison", "Flying", "Rock"],
    weaknesses: ["Water", "Grass", "Ice", "Fighting", "Ground", "Steel"],
    weight: {
      minimum: "100.63kg",
      maximum: "129.38kg",
    },
    height: {
      minimum: "0.88m",
      maximum: "1.13m",
    },
    fleeRate: 0.1,
    evolutionRequirements: {
      amount: 50,
      name: "Rhyhorn candies",
    },
    evolutions: [
      {
        id: 112,
        name: "Rhydon",
      },
    ],
    maxCP: 1055,
    maxHP: 1182,
    attacks: {
      fast: [
        {
          name: "Mud Slap",
          type: "Ground",
          damage: 15,
        },
        {
          name: "Rock Smash",
          type: "Fighting",
          damage: 15,
        },
      ],
      special: [
        {
          name: "Bulldoze",
          type: "Ground",
          damage: 35,
        },
        {
          name: "Horn Attack",
          type: "Normal",
          damage: 25,
        },
        {
          name: "Stomp",
          type: "Normal",
          damage: 30,
        },
      ],
    },
  },
  {
    id: "112",
    name: "Rhydon",
    classification: "Drill Pokémon",
    types: ["Ground", "Rock"],
    resistant: ["Normal", "Fire", "Electric", "Poison", "Flying", "Rock"],
    weaknesses: ["Water", "Grass", "Ice", "Fighting", "Ground", "Steel"],
    weight: {
      minimum: "105kg",
      maximum: "135kg",
    },
    height: {
      minimum: "1.66m",
      maximum: "2.14m",
    },
    fleeRate: 0.06,
    "Previous evolution(s)": [
      {
        id: 111,
        name: "Rhyhorn",
      },
    ],
    maxCP: 2068,
    maxHP: 2243,
    attacks: {
      fast: [
        {
          name: "Mud Slap",
          type: "Ground",
          damage: 15,
        },
        {
          name: "Rock Smash",
          type: "Fighting",
          damage: 15,
        },
      ],
      special: [
        {
          name: "Earthquake",
          type: "Ground",
          damage: 100,
        },
        {
          name: "Megahorn",
          type: "Bug",
          damage: 80,
        },
        {
          name: "Stone Edge",
          type: "Rock",
          damage: 80,
        },
      ],
    },
  },
  {
    id: "113",
    name: "Chansey",
    classification: "Egg Pokémon",
    types: ["Normal"],
    resistant: ["Ghost"],
    weaknesses: ["Fighting"],
    weight: {
      minimum: "30.27kg",
      maximum: "38.92kg",
    },
    height: {
      minimum: "0.96m",
      maximum: "1.24m",
    },
    fleeRate: 0.09,
    maxCP: 549,
    maxHP: 675,
    attacks: {
      fast: [
        {
          name: "Pound",
          type: "Normal",
          damage: 7,
        },
        {
          name: "Zen Headbutt",
          type: "Psychic",
          damage: 12,
        },
      ],
      special: [
        {
          name: "Dazzling Gleam",
          type: "Fairy",
          damage: 55,
        },
        {
          name: "Psybeam",
          type: "Psychic",
          damage: 40,
        },
        {
          name: "Psychic",
          type: "Psychic",
          damage: 55,
        },
      ],
    },
  },
  {
    id: "114",
    name: "Tangela",
    classification: "Vine Pokémon",
    types: ["Grass"],
    resistant: ["Water", "Electric", "Grass", "Ground"],
    weaknesses: ["Fire", "Ice", "Poison", "Flying", "Bug"],
    weight: {
      minimum: "30.63kg",
      maximum: "39.38kg",
    },
    height: {
      minimum: "0.88m",
      maximum: "1.13m",
    },
    fleeRate: 0.09,
    maxCP: 1586,
    maxHP: 1739,
    attacks: {
      fast: [
        {
          name: "Vine Whip",
          type: "Grass",
          damage: 7,
        },
      ],
      special: [
        {
          name: "Power Whip",
          type: "Grass",
          damage: 70,
        },
        {
          name: "Sludge Bomb",
          type: "Poison",
          damage: 55,
        },
        {
          name: "Solar Beam",
          type: "Grass",
          damage: 120,
        },
      ],
    },
  },
  {
    id: "115",
    name: "Kangaskhan",
    classification: "Parent Pokémon",
    types: ["Normal"],
    resistant: ["Ghost"],
    weaknesses: ["Fighting"],
    weight: {
      minimum: "70kg",
      maximum: "90kg",
    },
    height: {
      minimum: "1.93m",
      maximum: "2.48m",
    },
    fleeRate: 0.09,
    "Common Capture Area":
      "Early reports that this Pokémon is likely to be found in: Australia, New Zealand",
    "Australia, New Zealand": "Common Capture Area",
    maxCP: 1875,
    maxHP: 2043,
    attacks: {
      fast: [
        {
          name: "Low Kick",
          type: "Fighting",
          damage: 5,
        },
        {
          name: "Mud Slap",
          type: "Ground",
          damage: 15,
        },
      ],
      special: [
        {
          name: "Brick Break",
          type: "Fighting",
          damage: 30,
        },
        {
          name: "Earthquake",
          type: "Ground",
          damage: 100,
        },
        {
          name: "Stomp",
          type: "Normal",
          damage: 30,
        },
      ],
    },
  },
  {
    id: "116",
    name: "Horsea",
    classification: "Dragon Pokémon",
    types: ["Water"],
    resistant: ["Fire", "Water", "Ice", "Steel"],
    weaknesses: ["Electric", "Grass"],
    weight: {
      minimum: "7kg",
      maximum: "9kg",
    },
    height: {
      minimum: "0.35m",
      maximum: "0.45m",
    },
    fleeRate: 0.1,
    evolutionRequirements: {
      amount: 50,
      name: "Horsea candies",
    },
    evolutions: [
      {
        id: 117,
        name: "Seadra",
      },
    ],
    maxCP: 688,
    maxHP: 794,
    attacks: {
      fast: [
        {
          name: "Bubble",
          type: "Water",
          damage: 25,
        },
        {
          name: "Water Gun",
          type: "Water",
          damage: 6,
        },
      ],
      special: [
        {
          name: "Bubble Beam",
          type: "Water",
          damage: 30,
        },
        {
          name: "Dragon Pulse",
          type: "Dragon",
          damage: 65,
        },
        {
          name: "Flash Cannon",
          type: "Steel",
          damage: 60,
        },
      ],
    },
  },
  {
    id: "117",
    name: "Seadra",
    classification: "Dragon Pokémon",
    types: ["Water"],
    resistant: ["Fire", "Water", "Ice", "Steel"],
    weaknesses: ["Electric", "Grass"],
    weight: {
      minimum: "21.88kg",
      maximum: "28.13kg",
    },
    height: {
      minimum: "1.05m",
      maximum: "1.35m",
    },
    fleeRate: 0.06,
    "Previous evolution(s)": [
      {
        id: 116,
        name: "Horsea",
      },
    ],
    maxCP: 1559,
    maxHP: 1713,
    attacks: {
      fast: [
        {
          name: "Dragon Breath",
          type: "Dragon",
          damage: 6,
        },
        {
          name: "Water Gun",
          type: "Water",
          damage: 6,
        },
      ],
      special: [
        {
          name: "Blizzard",
          type: "Ice",
          damage: 100,
        },
        {
          name: "Dragon Pulse",
          type: "Dragon",
          damage: 65,
        },
        {
          name: "Hydro Pump",
          type: "Water",
          damage: 90,
        },
      ],
    },
  },
  {
    id: "118",
    name: "Goldeen",
    classification: "Goldfish Pokémon",
    types: ["Water"],
    resistant: ["Fire", "Water", "Ice", "Steel"],
    weaknesses: ["Electric", "Grass"],
    weight: {
      minimum: "13.13kg",
      maximum: "16.88kg",
    },
    height: {
      minimum: "0.53m",
      maximum: "0.68m",
    },
    fleeRate: 0.15,
    evolutionRequirements: {
      amount: 50,
      name: "Goldeen candies",
    },
    evolutions: [
      {
        id: 119,
        name: "Seaking",
      },
    ],
    maxCP: 851,
    maxHP: 965,
    attacks: {
      fast: [
        {
          name: "Mud Shot",
          type: "Ground",
          damage: 6,
        },
        {
          name: "Peck",
          type: "Flying",
          damage: 10,
        },
      ],
      special: [
        {
          name: "Aqua Tail",
          type: "Water",
          damage: 45,
        },
        {
          name: "Horn Attack",
          type: "Normal",
          damage: 25,
        },
        {
          name: "Water Pulse",
          type: "Water",
          damage: 35,
        },
      ],
    },
  },
  {
    id: "119",
    name: "Seaking",
    classification: "Goldfish Pokémon",
    types: ["Water"],
    resistant: ["Fire", "Water", "Ice", "Steel"],
    weaknesses: ["Electric", "Grass"],
    weight: {
      minimum: "34.13kg",
      maximum: "43.88kg",
    },
    height: {
      minimum: "1.14m",
      maximum: "1.46m",
    },
    fleeRate: 0.07,
    "Previous evolution(s)": [
      {
        id: 118,
        name: "Goldeen",
      },
    ],
    maxCP: 1877,
    maxHP: 2043,
    attacks: {
      fast: [
        {
          name: "Peck",
          type: "Flying",
          damage: 10,
        },
        {
          name: "Poison Jab",
          type: "Poison",
          damage: 12,
        },
      ],
      special: [
        {
          name: "Drill Run",
          type: "Ground",
          damage: 50,
        },
        {
          name: "Icy Wind",
          type: "Ice",
          damage: 25,
        },
        {
          name: "Megahorn",
          type: "Bug",
          damage: 80,
        },
      ],
    },
  },
  {
    id: "120",
    name: "Staryu",
    classification: "Starshape Pokémon",
    types: ["Water"],
    resistant: ["Fire", "Water", "Ice", "Steel"],
    weaknesses: ["Electric", "Grass"],
    weight: {
      minimum: "30.19kg",
      maximum: "38.81kg",
    },
    height: {
      minimum: "0.7m",
      maximum: "0.9m",
    },
    fleeRate: 0.15,
    evolutionRequirements: {
      amount: 50,
      name: "Staryu candies",
    },
    evolutions: [
      {
        id: 121,
        name: "Starmie",
      },
    ],
    maxCP: 821,
    maxHP: 937,
    attacks: {
      fast: [
        {
          name: "Quick Attack",
          type: "Normal",
          damage: 10,
        },
        {
          name: "Water Gun",
          type: "Water",
          damage: 6,
        },
      ],
      special: [
        {
          name: "Bubble Beam",
          type: "Water",
          damage: 30,
        },
        {
          name: "Power Gem",
          type: "Rock",
          damage: 40,
        },
        {
          name: "Swift",
          type: "Normal",
          damage: 30,
        },
      ],
    },
  },
  {
    id: "121",
    name: "Starmie",
    classification: "Mysterious Pokémon",
    types: ["Water", "Psychic"],
    resistant: ["Fire", "Water", "Ice", "Fighting", "Psychic", "Steel"],
    weaknesses: ["Electric", "Grass", "Bug", "Ghost", "Dark"],
    weight: {
      minimum: "70kg",
      maximum: "90kg",
    },
    height: {
      minimum: "0.96m",
      maximum: "1.24m",
    },
    fleeRate: 0.06,
    "Previous evolution(s)": [
      {
        id: 120,
        name: "Staryu",
      },
    ],
    maxCP: 2007,
    maxHP: 2182,
    attacks: {
      fast: [
        {
          name: "Quick Attack",
          type: "Normal",
          damage: 10,
        },
        {
          name: "Water Gun",
          type: "Water",
          damage: 6,
        },
      ],
      special: [
        {
          name: "Hydro Pump",
          type: "Water",
          damage: 90,
        },
        {
          name: "Power Gem",
          type: "Rock",
          damage: 40,
        },
        {
          name: "Psybeam",
          type: "Psychic",
          damage: 40,
        },
      ],
    },
  },
  {
    id: "122",
    name: "Mr. Mime",
    classification: "Barrier Pokémon",
    types: ["Psychic", "Fairy"],
    resistant: ["Fighting", "Psychic", "Dragon"],
    weaknesses: ["Poison", "Ghost", "Steel"],
    weight: {
      minimum: "47.69kg",
      maximum: "61.31kg",
    },
    height: {
      minimum: "1.14m",
      maximum: "1.46m",
    },
    fleeRate: 0.09,
    "Common Capture Area":
      "Early reports that this Pokémon is likely to be found in: Western Europe",
    "Western Europe": "Common Capture Area",
    maxCP: 1345,
    maxHP: 1494,
    attacks: {
      fast: [
        {
          name: "Confusion",
          type: "Psychic",
          damage: 15,
        },
        {
          name: "Zen Headbutt",
          type: "Psychic",
          damage: 12,
        },
      ],
      special: [
        {
          name: "Psybeam",
          type: "Psychic",
          damage: 40,
        },
        {
          name: "Psychic",
          type: "Psychic",
          damage: 55,
        },
        {
          name: "Shadow Ball",
          type: "Ghost",
          damage: 45,
        },
      ],
    },
  },
  {
    id: "123",
    name: "Scyther",
    classification: "Mantis Pokémon",
    types: ["Bug", "Flying"],
    resistant: ["Grass", "Fighting", "Ground", "Bug"],
    weaknesses: ["Fire", "Electric", "Ice", "Flying", "Rock"],
    weight: {
      minimum: "49kg",
      maximum: "63kg",
    },
    height: {
      minimum: "1.31m",
      maximum: "1.69m",
    },
    fleeRate: 0.09,
    maxCP: 1905,
    maxHP: 2073,
    attacks: {
      fast: [
        {
          name: "Fury Cutter",
          type: "Bug",
          damage: 3,
        },
        {
          name: "Steel Wing",
          type: "Steel",
          damage: 15,
        },
      ],
      special: [
        {
          name: "Bug Buzz",
          type: "Bug",
          damage: 75,
        },
        {
          name: "Night Slash",
          type: "Dark",
          damage: 30,
        },
        {
          name: "X Scissor",
          type: "Bug",
          damage: 35,
        },
      ],
    },
  },
  {
    id: "124",
    name: "Jynx",
    classification: "Humanshape Pokémon",
    types: ["Ice", "Psychic"],
    resistant: ["Ice", "Psychic"],
    weaknesses: ["Fire", "Bug", "Rock", "Ghost", "Dark", "Steel"],
    weight: {
      minimum: "35.52kg",
      maximum: "45.67kg",
    },
    height: {
      minimum: "1.22m",
      maximum: "1.57m",
    },
    fleeRate: 0.09,
    maxCP: 1563,
    maxHP: 1716,
    attacks: {
      fast: [
        {
          name: "Frost Breath",
          type: "Ice",
          damage: 9,
        },
        {
          name: "Pound",
          type: "Normal",
          damage: 7,
        },
      ],
      special: [
        {
          name: "Draining Kiss",
          type: "Fairy",
          damage: 25,
        },
        {
          name: "Ice Punch",
          type: "Ice",
          damage: 45,
        },
        {
          name: "Psyshock",
          type: "Psychic",
          damage: 40,
        },
      ],
    },
  },
  {
    id: "125",
    name: "Electabuzz",
    classification: "Electric Pokémon",
    types: ["Electric"],
    resistant: ["Electric", "Flying", "Steel"],
    weaknesses: ["Ground"],
    weight: {
      minimum: "26.25kg",
      maximum: "33.75kg",
    },
    height: {
      minimum: "0.96m",
      maximum: "1.24m",
    },
    fleeRate: 0.09,
    maxCP: 1947,
    maxHP: 2119,
    attacks: {
      fast: [
        {
          name: "Low Kick",
          type: "Fighting",
          damage: 5,
        },
        {
          name: "Thunder Shock",
          type: "Electric",
          damage: 5,
        },
      ],
      special: [
        {
          name: "Thunder",
          type: "Electric",
          damage: 100,
        },
        {
          name: "Thunder Punch",
          type: "Electric",
          damage: 40,
        },
        {
          name: "Thunderbolt",
          type: "Electric",
          damage: 55,
        },
      ],
    },
  },
  {
    id: "126",
    name: "Magmar",
    classification: "Spitfire Pokémon",
    types: ["Fire"],
    resistant: ["Fire", "Grass", "Ice", "Bug", "Steel", "Fairy"],
    weaknesses: ["Water", "Ground", "Rock"],
    weight: {
      minimum: "38.94kg",
      maximum: "50.06kg",
    },
    height: {
      minimum: "1.14m",
      maximum: "1.46m",
    },
    fleeRate: 0.09,
    maxCP: 2086,
    maxHP: 2265,
    attacks: {
      fast: [
        {
          name: "Ember",
          type: "Fire",
          damage: 10,
        },
        {
          name: "Karate Chop",
          type: "Fighting",
          damage: 6,
        },
      ],
      special: [
        {
          name: "Fire Blast",
          type: "Fire",
          damage: 100,
        },
        {
          name: "Fire Punch",
          type: "Fire",
          damage: 40,
        },
        {
          name: "Flamethrower",
          type: "Fire",
          damage: 55,
        },
      ],
    },
  },
  {
    id: "127",
    name: "Pinsir",
    classification: "Stagbeetle Pokémon",
    types: ["Bug"],
    resistant: ["Grass", "Fighting", "Ground"],
    weaknesses: ["Fire", "Flying", "Rock"],
    weight: {
      minimum: "48.13kg",
      maximum: "61.88kg",
    },
    height: {
      minimum: "1.31m",
      maximum: "1.69m",
    },
    fleeRate: 0.09,
    maxCP: 1950,
    maxHP: 2121,
    attacks: {
      fast: [
        {
          name: "Fury Cutter",
          type: "Bug",
          damage: 3,
        },
        {
          name: "Rock Smash",
          type: "Fighting",
          damage: 15,
        },
      ],
      special: [
        {
          name: "Submission",
          type: "Fighting",
          damage: 30,
        },
        {
          name: "Vice Grip",
          type: "Normal",
          damage: 25,
        },
        {
          name: "X Scissor",
          type: "Bug",
          damage: 35,
        },
      ],
    },
  },
  {
    id: "128",
    name: "Tauros",
    classification: "Wild Bull Pokémon",
    types: ["Normal"],
    resistant: ["Ghost"],
    weaknesses: ["Fighting"],
    weight: {
      minimum: "77.35kg",
      maximum: "99.45kg",
    },
    height: {
      minimum: "1.22m",
      maximum: "1.57m",
    },
    fleeRate: 0.09,
    "Common Capture Area":
      "Early reports that this Pokémon is likely to be found in: North America",
    "North America": "Common Capture Area",
    maxCP: 1686,
    maxHP: 1844,
    attacks: {
      fast: [
        {
          name: "Tackle",
          type: "Normal",
          damage: 12,
        },
        {
          name: "Zen Headbutt",
          type: "Psychic",
          damage: 12,
        },
      ],
      special: [
        {
          name: "Earthquake",
          type: "Ground",
          damage: 100,
        },
        {
          name: "Horn Attack",
          type: "Normal",
          damage: 25,
        },
        {
          name: "Iron Head",
          type: "Steel",
          damage: 30,
        },
      ],
    },
  },
  {
    id: "129",
    name: "Magikarp",
    classification: "Fish Pokémon",
    types: ["Water"],
    resistant: ["Fire", "Water", "Ice", "Steel"],
    weaknesses: ["Electric", "Grass"],
    weight: {
      minimum: "8.75kg",
      maximum: "11.25kg",
    },
    height: {
      minimum: "0.79m",
      maximum: "1.01m",
    },
    fleeRate: 0.15,
    evolutionRequirements: {
      amount: 400,
      name: "Magikarp candies",
    },
    evolutions: [
      {
        id: 130,
        name: "Gyarados",
      },
    ],
    maxCP: 203,
    maxHP: 262,
    attacks: {
      fast: [
        {
          name: "Splash",
          type: "Water",
          damage: 0,
        },
      ],
      special: [
        {
          name: "Struggle",
          type: "Normal",
          damage: 15,
        },
      ],
    },
  },
  {
    id: "130",
    name: "Gyarados",
    classification: "Atrocious Pokémon",
    types: ["Water", "Flying"],
    resistant: ["Fire", "Water", "Fighting", "Ground", "Bug", "Steel"],
    weaknesses: ["Electric", "Rock"],
    weight: {
      minimum: "205.63kg",
      maximum: "264.38kg",
    },
    height: {
      minimum: "5.69m",
      maximum: "7.31m",
    },
    fleeRate: 0.07,
    "Previous evolution(s)": [
      {
        id: 129,
        name: "Magikarp",
      },
    ],
    maxCP: 2498,
    maxHP: 2688,
    attacks: {
      fast: [
        {
          name: "Bite",
          type: "Dark",
          damage: 6,
        },
        {
          name: "Dragon Breath",
          type: "Dragon",
          damage: 6,
        },
      ],
      special: [
        {
          name: "Dragon Pulse",
          type: "Dragon",
          damage: 65,
        },
        {
          name: "Hydro Pump",
          type: "Water",
          damage: 90,
        },
        {
          name: "Twister",
          type: "Dragon",
          damage: 25,
        },
      ],
    },
  },
  {
    id: "131",
    name: "Lapras",
    classification: "Transport Pokémon",
    types: ["Water", "Ice"],
    resistant: ["Water", "Ice"],
    weaknesses: ["Electric", "Grass", "Fighting", "Rock"],
    weight: {
      minimum: "192.5kg",
      maximum: "247.5kg",
    },
    height: {
      minimum: "2.19m",
      maximum: "2.81m",
    },
    fleeRate: 0.09,
    maxCP: 2777,
    maxHP: 2980,
    attacks: {
      fast: [
        {
          name: "Frost Breath",
          type: "Ice",
          damage: 9,
        },
        {
          name: "Ice Shard",
          type: "Ice",
          damage: 15,
        },
      ],
      special: [
        {
          name: "Blizzard",
          type: "Ice",
          damage: 100,
        },
        {
          name: "Dragon Pulse",
          type: "Dragon",
          damage: 65,
        },
        {
          name: "Ice Beam",
          type: "Ice",
          damage: 65,
        },
      ],
    },
  },
  {
    id: "132",
    name: "Ditto",
    classification: "Transform Pokémon",
    types: ["Normal"],
    resistant: ["Ghost"],
    weaknesses: ["Fighting"],
    weight: {
      minimum: "3.5kg",
      maximum: "4.5kg",
    },
    height: {
      minimum: "0.26m",
      maximum: "0.34m",
    },
    fleeRate: 0.1,
    maxCP: 809,
    maxHP: 919,
    attacks: {
      fast: [
        {
          name: "Pound",
          type: "Normal",
          damage: 7,
        },
      ],
      special: [
        {
          name: "Struggle",
          type: "Normal",
          damage: 15,
        },
      ],
    },
  },
  {
    id: "133",
    name: "Eevee",
    classification: "Evolution Pokémon",
    types: ["Normal"],
    resistant: ["Ghost"],
    weaknesses: ["Fighting"],
    weight: {
      minimum: "5.69kg",
      maximum: "7.31kg",
    },
    height: {
      minimum: "0.26m",
      maximum: "0.34m",
    },
    fleeRate: 0.1,
    evolutionRequirements: {
      amount: 25,
      name: "Eevee candies",
    },
    evolutions: [
      {
        id: 134,
        name: "Vaporeon",
      },
      {
        id: 135,
        name: "Jolteon",
      },
      {
        id: 136,
        name: "Flareon",
      },
    ],
    maxCP: 957,
    maxHP: 1077,
    attacks: {
      fast: [
        {
          name: "Quick Attack",
          type: "Normal",
          damage: 10,
        },
        {
          name: "Tackle",
          type: "Normal",
          damage: 12,
        },
      ],
      special: [
        {
          name: "Body Slam",
          type: "Normal",
          damage: 40,
        },
        {
          name: "Dig",
          type: "Ground",
          damage: 70,
        },
        {
          name: "Swift",
          type: "Normal",
          damage: 30,
        },
      ],
    },
  },
  {
    id: "134",
    name: "Vaporeon",
    classification: "Bubble Jet Pokémon",
    types: ["Water"],
    resistant: ["Fire", "Water", "Ice", "Steel"],
    weaknesses: ["Electric", "Grass"],
    weight: {
      minimum: "25.38kg",
      maximum: "32.63kg",
    },
    height: {
      minimum: "0.88m",
      maximum: "1.13m",
    },
    fleeRate: 0.06,
    "Previous evolution(s)": [
      {
        id: 133,
        name: "Eevee",
      },
    ],
    maxCP: 2618,
    maxHP: 2816,
    attacks: {
      fast: [
        {
          name: "Water Gun",
          type: "Water",
          damage: 6,
        },
      ],
      special: [
        {
          name: "Aqua Tail",
          type: "Water",
          damage: 45,
        },
        {
          name: "Hydro Pump",
          type: "Water",
          damage: 90,
        },
        {
          name: "Water Pulse",
          type: "Water",
          damage: 35,
        },
      ],
    },
  },
  {
    id: "135",
    name: "Jolteon",
    classification: "Lightning Pokémon",
    types: ["Electric"],
    resistant: ["Electric", "Flying", "Steel"],
    weaknesses: ["Ground"],
    weight: {
      minimum: "21.44kg",
      maximum: "27.56kg",
    },
    height: {
      minimum: "0.7m",
      maximum: "0.9m",
    },
    fleeRate: 0.06,
    "Previous evolution(s)": [
      {
        id: 133,
        name: "Eevee",
      },
    ],
    maxCP: 1968,
    maxHP: 2140,
    attacks: {
      fast: [
        {
          name: "Thunder Shock",
          type: "Electric",
          damage: 5,
        },
      ],
      special: [
        {
          name: "Discharge",
          type: "Electric",
          damage: 35,
        },
        {
          name: "Thunder",
          type: "Electric",
          damage: 100,
        },
        {
          name: "Thunderbolt",
          type: "Electric",
          damage: 55,
        },
      ],
    },
  },
  {
    id: "136",
    name: "Flareon",
    classification: "Flame Pokémon",
    types: ["Fire"],
    resistant: ["Fire", "Grass", "Ice", "Bug", "Steel", "Fairy"],
    weaknesses: ["Water", "Ground", "Rock"],
    weight: {
      minimum: "21.88kg",
      maximum: "28.13kg",
    },
    height: {
      minimum: "0.79m",
      maximum: "1.01m",
    },
    fleeRate: 0.06,
    "Previous evolution(s)": [
      {
        id: 133,
        name: "Eevee",
      },
    ],
    maxCP: 2448,
    maxHP: 2643,
    attacks: {
      fast: [
        {
          name: "Ember",
          type: "Fire",
          damage: 10,
        },
      ],
      special: [
        {
          name: "Fire Blast",
          type: "Fire",
          damage: 100,
        },
        {
          name: "Flamethrower",
          type: "Fire",
          damage: 55,
        },
        {
          name: "Heat Wave",
          type: "Fire",
          damage: 80,
        },
      ],
    },
  },
  {
    id: "137",
    name: "Porygon",
    classification: "Virtual Pokémon",
    types: ["Normal"],
    resistant: ["Ghost"],
    weaknesses: ["Fighting"],
    weight: {
      minimum: "31.94kg",
      maximum: "41.06kg",
    },
    height: {
      minimum: "0.7m",
      maximum: "0.9m",
    },
    fleeRate: 0.09,
    maxCP: 1540,
    maxHP: 1691,
    attacks: {
      fast: [
        {
          name: "Quick Attack",
          type: "Normal",
          damage: 10,
        },
        {
          name: "Tackle",
          type: "Normal",
          damage: 12,
        },
      ],
      special: [
        {
          name: "Discharge",
          type: "Electric",
          damage: 35,
        },
        {
          name: "Psybeam",
          type: "Psychic",
          damage: 40,
        },
        {
          name: "Signal Beam",
          type: "Bug",
          damage: 45,
        },
      ],
    },
  },
  {
    id: "138",
    name: "Omanyte",
    classification: "Spiral Pokémon",
    types: ["Rock", "Water"],
    resistant: ["Normal", "Fire", "Ice", "Poison", "Flying"],
    weaknesses: ["Electric", "Grass", "Fighting", "Ground"],
    weight: {
      minimum: "6.56kg",
      maximum: "8.44kg",
    },
    height: {
      minimum: "0.35m",
      maximum: "0.45m",
    },
    fleeRate: 0.09,
    evolutionRequirements: {
      amount: 50,
      name: "Omanyte candies",
    },
    evolutions: [
      {
        id: 139,
        name: "Omastar",
      },
    ],
    maxCP: 992,
    maxHP: 1119,
    attacks: {
      fast: [
        {
          name: "Mud Shot",
          type: "Ground",
          damage: 6,
        },
        {
          name: "Water Gun",
          type: "Water",
          damage: 6,
        },
      ],
      special: [
        {
          name: "Ancient Power",
          type: "Rock",
          damage: 35,
        },
        {
          name: "Brine",
          type: "Water",
          damage: 25,
        },
        {
          name: "Rock Tomb",
          type: "Rock",
          damage: 30,
        },
      ],
    },
  },
  {
    id: "139",
    name: "Omastar",
    classification: "Spiral Pokémon",
    types: ["Rock", "Water"],
    resistant: ["Normal", "Fire", "Ice", "Poison", "Flying"],
    weaknesses: ["Electric", "Grass", "Fighting", "Ground"],
    weight: {
      minimum: "30.63kg",
      maximum: "39.38kg",
    },
    height: {
      minimum: "0.88m",
      maximum: "1.13m",
    },
    fleeRate: 0.05,
    "Previous evolution(s)": [
      {
        id: 138,
        name: "Omanyte",
      },
    ],
    maxCP: 2058,
    maxHP: 2233,
    attacks: {
      fast: [
        {
          name: "Rock Throw",
          type: "Rock",
          damage: 12,
        },
        {
          name: "Water Gun",
          type: "Water",
          damage: 6,
        },
      ],
      special: [
        {
          name: "Ancient Power",
          type: "Rock",
          damage: 35,
        },
        {
          name: "Hydro Pump",
          type: "Water",
          damage: 90,
        },
        {
          name: "Rock Slide",
          type: "Rock",
          damage: 50,
        },
      ],
    },
  },
  {
    id: "140",
    name: "Kabuto",
    classification: "Shellfish Pokémon",
    types: ["Rock", "Water"],
    resistant: ["Normal", "Fire", "Ice", "Poison", "Flying"],
    weaknesses: ["Electric", "Grass", "Fighting", "Ground"],
    weight: {
      minimum: "10.06kg",
      maximum: "12.94kg",
    },
    height: {
      minimum: "0.44m",
      maximum: "0.56m",
    },
    fleeRate: 0.09,
    evolutionRequirements: {
      amount: 50,
      name: "Kabuto candies",
    },
    evolutions: [
      {
        id: 141,
        name: "Kabutops",
      },
    ],
    maxCP: 975,
    maxHP: 1104,
    attacks: {
      fast: [
        {
          name: "Mud Shot",
          type: "Ground",
          damage: 6,
        },
        {
          name: "Scratch",
          type: "Normal",
          damage: 6,
        },
      ],
      special: [
        {
          name: "Ancient Power",
          type: "Rock",
          damage: 35,
        },
        {
          name: "Aqua Jet",
          type: "Water",
          damage: 25,
        },
        {
          name: "Rock Tomb",
          type: "Rock",
          damage: 30,
        },
      ],
    },
  },
  {
    id: "141",
    name: "Kabutops",
    classification: "Shellfish Pokémon",
    types: ["Rock", "Water"],
    resistant: ["Normal", "Fire", "Ice", "Poison", "Flying"],
    weaknesses: ["Electric", "Grass", "Fighting", "Ground"],
    weight: {
      minimum: "35.44kg",
      maximum: "45.56kg",
    },
    height: {
      minimum: "1.14m",
      maximum: "1.46m",
    },
    fleeRate: 0.05,
    "Previous evolution(s)": [
      {
        id: 140,
        name: "Kabuto",
      },
    ],
    maxCP: 1957,
    maxHP: 2130,
    attacks: {
      fast: [
        {
          name: "Fury Cutter",
          type: "Bug",
          damage: 3,
        },
        {
          name: "Mud Shot",
          type: "Ground",
          damage: 6,
        },
      ],
      special: [
        {
          name: "Ancient Power",
          type: "Rock",
          damage: 35,
        },
        {
          name: "Stone Edge",
          type: "Rock",
          damage: 80,
        },
        {
          name: "Water Pulse",
          type: "Water",
          damage: 35,
        },
      ],
    },
  },
  {
    id: "142",
    name: "Aerodactyl",
    classification: "Fossil Pokémon",
    types: ["Rock", "Flying"],
    resistant: ["Normal", "Fire", "Poison", "Flying", "Bug"],
    weaknesses: ["Water", "Electric", "Ice", "Rock", "Steel"],
    weight: {
      minimum: "51.63kg",
      maximum: "66.38kg",
    },
    height: {
      minimum: "1.57m",
      maximum: "2.02m",
    },
    fleeRate: 0.09,
    maxCP: 1994,
    maxHP: 2165,
    attacks: {
      fast: [
        {
          name: "Bite",
          type: "Dark",
          damage: 6,
        },
        {
          name: "Steel Wing",
          type: "Steel",
          damage: 15,
        },
      ],
      special: [
        {
          name: "Ancient Power",
          type: "Rock",
          damage: 35,
        },
        {
          name: "Hyper Beam",
          type: "Normal",
          damage: 120,
        },
        {
          name: "Iron Head",
          type: "Steel",
          damage: 30,
        },
      ],
    },
  },
  {
    id: "143",
    name: "Snorlax",
    classification: "Sleeping Pokémon",
    types: ["Normal"],
    resistant: ["Ghost"],
    weaknesses: ["Fighting"],
    weight: {
      minimum: "402.5kg",
      maximum: "517.5kg",
    },
    height: {
      minimum: "1.84m",
      maximum: "2.36m",
    },
    fleeRate: 0.09,
    maxCP: 2901,
    maxHP: 3112,
    attacks: {
      fast: [
        {
          name: "Lick",
          type: "Ghost",
          damage: 5,
        },
        {
          name: "Zen Headbutt",
          type: "Psychic",
          damage: 12,
        },
      ],
      special: [
        {
          name: "Body Slam",
          type: "Normal",
          damage: 40,
        },
        {
          name: "Earthquake",
          type: "Ground",
          damage: 100,
        },
        {
          name: "Hyper Beam",
          type: "Normal",
          damage: 120,
        },
      ],
    },
  },
  {
    id: "144",
    name: "Articuno",
    classification: "Freeze Pokémon",
    types: ["Ice", "Flying"],
    resistant: ["Grass", "Ground", "Bug"],
    weaknesses: ["Fire", "Electric", "Rock", "Steel"],
    weight: {
      minimum: "48.48kg",
      maximum: "62.33kg",
    },
    height: {
      minimum: "1.49m",
      maximum: "1.91m",
    },
    fleeRate: 0.1,
    "Pokémon Class": "This is a LEGENDARY Pokémon.",
    LEGENDARY: "Pokémon Class",
    maxCP: 2776,
    maxHP: 2978,
    attacks: {
      fast: [
        {
          name: "Frost Breath",
          type: "Ice",
          damage: 9,
        },
      ],
      special: [
        {
          name: "Blizzard",
          type: "Ice",
          damage: 100,
        },
        {
          name: "Ice Beam",
          type: "Ice",
          damage: 65,
        },
        {
          name: "Icy Wind",
          type: "Ice",
          damage: 25,
        },
      ],
    },
  },
  {
    id: "145",
    name: "Zapdos",
    classification: "Electric Pokémon",
    types: ["Electric", "Flying"],
    resistant: ["Grass", "Fighting", "Flying", "Bug", "Steel"],
    weaknesses: ["Ice", "Rock"],
    weight: {
      minimum: "46.02kg",
      maximum: "59.17kg",
    },
    height: {
      minimum: "1.4m",
      maximum: "1.8m",
    },
    fleeRate: 0.1,
    "Pokémon Class": "This is a LEGENDARY Pokémon.",
    LEGENDARY: "Pokémon Class",
    maxCP: 2907,
    maxHP: 3114,
    attacks: {
      fast: [
        {
          name: "Thunder Shock",
          type: "Electric",
          damage: 5,
        },
      ],
      special: [
        {
          name: "Discharge",
          type: "Electric",
          damage: 35,
        },
        {
          name: "Thunder",
          type: "Electric",
          damage: 100,
        },
        {
          name: "Thunderbolt",
          type: "Electric",
          damage: 55,
        },
      ],
    },
  },
  {
    id: "146",
    name: "Moltres",
    classification: "Flame Pokémon",
    types: ["Fire", "Flying"],
    resistant: ["Fire", "Grass", "Fighting", "Bug", "Steel", "Fairy"],
    weaknesses: ["Water", "Electric", "Rock"],
    weight: {
      minimum: "52.5kg",
      maximum: "67.5kg",
    },
    height: {
      minimum: "1.75m",
      maximum: "2.25m",
    },
    fleeRate: 0.1,
    "Pokémon Class": "This is a LEGENDARY Pokémon.",
    LEGENDARY: "Pokémon Class",
    maxCP: 3028,
    maxHP: 3240,
    attacks: {
      fast: [
        {
          name: "Ember",
          type: "Fire",
          damage: 10,
        },
      ],
      special: [
        {
          name: "Fire Blast",
          type: "Fire",
          damage: 100,
        },
        {
          name: "Flamethrower",
          type: "Fire",
          damage: 55,
        },
        {
          name: "Heat Wave",
          type: "Fire",
          damage: 80,
        },
      ],
    },
  },
  {
    id: "147",
    name: "Dratini",
    classification: "Dragon Pokémon",
    types: ["Dragon"],
    resistant: ["Fire", "Water", "Electric", "Grass"],
    weaknesses: ["Ice", "Dragon", "Fairy"],
    weight: {
      minimum: "2.89kg",
      maximum: "3.71kg",
    },
    height: {
      minimum: "1.57m",
      maximum: "2.02m",
    },
    fleeRate: 0.09,
    evolutionRequirements: {
      amount: 25,
      name: "Dratini candies",
    },
    evolutions: [
      {
        id: 148,
        name: "Dragonair",
      },
    ],
    maxCP: 867,
    maxHP: 983,
    attacks: {
      fast: [
        {
          name: "Dragon Breath",
          type: "Dragon",
          damage: 6,
        },
      ],
      special: [
        {
          name: "Aqua Tail",
          type: "Water",
          damage: 45,
        },
        {
          name: "Twister",
          type: "Dragon",
          damage: 25,
        },
        {
          name: "Wrap",
          type: "Normal",
          damage: 25,
        },
      ],
    },
  },
  {
    id: "148",
    name: "Dragonair",
    classification: "Dragon Pokémon",
    types: ["Dragon"],
    resistant: ["Fire", "Water", "Electric", "Grass"],
    weaknesses: ["Ice", "Dragon", "Fairy"],
    weight: {
      minimum: "14.44kg",
      maximum: "18.56kg",
    },
    height: {
      minimum: "3.5m",
      maximum: "4.5m",
    },
    fleeRate: 0.06,
    "Previous evolution(s)": [
      {
        id: 147,
        name: "Dratini",
      },
    ],
    evolutionRequirements: {
      amount: 100,
      name: "Dratini candies",
    },
    evolutions: [
      {
        id: 149,
        name: "Dragonite",
      },
    ],
    maxCP: 1593,
    maxHP: 1747,
    attacks: {
      fast: [
        {
          name: "Dragon Breath",
          type: "Dragon",
          damage: 6,
        },
      ],
      special: [
        {
          name: "Aqua Tail",
          type: "Water",
          damage: 45,
        },
        {
          name: "Dragon Pulse",
          type: "Dragon",
          damage: 65,
        },
        {
          name: "Wrap",
          type: "Normal",
          damage: 25,
        },
      ],
    },
  },
  {
    id: "149",
    name: "Dragonite",
    classification: "Dragon Pokémon",
    types: ["Dragon", "Flying"],
    resistant: ["Fire", "Water", "Grass", "Fighting", "Ground", "Bug"],
    weaknesses: ["Ice", "Rock", "Dragon", "Fairy"],
    weight: {
      minimum: "183.75kg",
      maximum: "236.25kg",
    },
    height: {
      minimum: "1.93m",
      maximum: "2.48m",
    },
    fleeRate: 0.05,
    "Previous evolution(s)": [
      {
        id: 147,
        name: "Dratini",
      },
      {
        id: 148,
        name: "Dragonair",
      },
    ],
    maxCP: 3280,
    maxHP: 3500,
    attacks: {
      fast: [
        {
          name: "Dragon Breath",
          type: "Dragon",
          damage: 6,
        },
        {
          name: "Steel Wing",
          type: "Steel",
          damage: 15,
        },
      ],
      special: [
        {
          name: "Dragon Claw",
          type: "Dragon",
          damage: 35,
        },
        {
          name: "Dragon Pulse",
          type: "Dragon",
          damage: 65,
        },
        {
          name: "Hyper Beam",
          type: "Normal",
          damage: 120,
        },
      ],
    },
  },
  {
    id: "150",
    name: "Mewtwo",
    classification: "Genetic Pokémon",
    types: ["Psychic"],
    resistant: ["Fighting", "Psychic"],
    weaknesses: ["Bug", "Ghost", "Dark"],
    weight: {
      minimum: "106.75kg",
      maximum: "137.25kg",
    },
    height: {
      minimum: "1.75m",
      maximum: "2.25m",
    },
    fleeRate: 0.1,
    "Pokémon Class": "This is a LEGENDARY Pokémon.",
    LEGENDARY: "Pokémon Class",
    maxCP: 3904,
    maxHP: 4144,
    attacks: {
      fast: [
        {
          name: "Confusion",
          type: "Psychic",
          damage: 15,
        },
        {
          name: "Psycho Cut",
          type: "Psychic",
          damage: 7,
        },
      ],
      special: [
        {
          name: "Hyper Beam",
          type: "Normal",
          damage: 120,
        },
        {
          name: "Psychic",
          type: "Psychic",
          damage: 55,
        },
        {
          name: "Shadow Ball",
          type: "Ghost",
          damage: 45,
        },
      ],
    },
  },
  {
    id: "151",
    name: "Mew",
    classification: "New Species Pokémon",
    types: ["Psychic"],
    resistant: ["Fighting", "Psychic"],
    weaknesses: ["Bug", "Ghost", "Dark"],
    weight: {
      minimum: "3.5kg",
      maximum: "4.5kg",
    },
    height: {
      minimum: "0.35m",
      maximum: "0.45m",
    },
    fleeRate: 0.1,
    "Pokémon Class": "This is a MYTHIC Pokémon.",
    MYTHIC: "Pokémon Class",
    maxCP: 3087,
    maxHP: 3299,
    attacks: {
      fast: [
        {
          name: "Pound",
          type: "Normal",
          damage: 7,
        },
      ],
      special: [
        {
          name: "Dragon Pulse",
          type: "Dragon",
          damage: 65,
        },
        {
          name: "Earthquake",
          type: "Ground",
          damage: 100,
        },
        {
          name: "Fire Blast",
          type: "Fire",
          damage: 100,
        },
        {
          name: "Hurricane",
          type: "Flying",
          damage: 80,
        },
        {
          name: "Hyper Beam",
          type: "Normal",
          damage: 120,
        },
        {
          name: "Moonblast",
          type: "Fairy",
          damage: 85,
        },
        {
          name: "Psychic",
          type: "Psychic",
          damage: 55,
        },
        {
          name: "Solar Beam",
          type: "Grass",
          damage: 120,
        },
        {
          name: "Thunder",
          type: "Electric",
          damage: 100,
        },
      ],
    },
  },
];
