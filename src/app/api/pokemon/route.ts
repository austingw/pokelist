import { Pokemon } from "@/app/types/Pokemon";
import axios from "axios";

export async function GET() {
  const reponse = await axios
    .get("https://pokeapi.co/api/v2/pokemon?limit=151")
    .catch((err) => {
      console.error("Err", err);
    })
    .then((res) => {
      return res;
    });

  let data: Pokemon[] = [];
  for await (const item of reponse?.data?.results) {
    const pokemon = await axios
      .get(item.url)
      .catch((err) => {
        console.error("Err", err);
      })
      .then((res) => {
        return res;
      });
    data.push({
      abilities: pokemon?.data?.abilities,
      base_experience: pokemon?.data?.base_experience,
      height: pokemon?.data?.height,
      id: pokemon?.data?.id,
      moves: pokemon?.data?.moves,
      name: pokemon?.data?.name,
      sprites: pokemon?.data?.sprites,
      stats: pokemon?.data?.stats,
      types: pokemon?.data?.types,
      weight: pokemon?.data?.weight,
    });
  }

  return Response.json({ data });
}
