export type Pokemon = {
  abilities: Ability[];
  base_experience: number;
  height: number;
  id: number;
  moves: Move[];
  name: string;
  sprites: Sprites;
  stats: Stat[];
  types: Type[];
  weight: number;
};

export type Ability = {
  ability: Details;
  is_hidden: boolean;
  slot: number;
};

export type Details = {
  name: string;
  url: string;
};

export type Move = {
  move: Details;
};

export type Sprites = {
  back_default?: string;
  back_female?: string;
  back_shiny?: string;
  back_shiny_female?: string;
  front_default?: string;
  front_female?: string;
  front_shiny?: string;
  front_shiny_female?: string;
  animated?: Sprites;
};

export type Stat = {
  base_stat: number;
  effort: number;
  stat: Details;
};

export type Type = {
  slot: number;
  type: Details;
};
