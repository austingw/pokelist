import axios from "axios";
import { Pokemon } from "../types/Pokemon";

const fetchPokemonDetails = async (url: string): Promise<Pokemon | null> => {
  try {
    const response = await axios.get(url);
    const data = response.data;
    return {
      abilities: data.abilities,
      base_experience: data.base_experience,
      height: data.height,
      id: data.id,
      moves: data.moves,
      name: data.name,
      sprites: data.sprites,
      stats: data.stats,
      types: data.types,
      weight: data.weight,
    };
  } catch (error) {
    console.error("Error fetching Pokemon details:", error);
    return null;
  }
};

export default fetchPokemonDetails;
