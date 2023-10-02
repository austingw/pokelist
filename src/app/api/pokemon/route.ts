import { Pokemon } from "@/app/types/Pokemon";
import fetchPokemonDetails from "@/app/utils/fetPokemonDetails";
import axios from "axios";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const searchTerm = request.nextUrl.searchParams.get("searchTerm");
  const page = request.nextUrl.searchParams.get("page");

  if (Number(searchTerm) !== Number.NaN && Number(searchTerm) > 0) {
    //if the search term is a number, get the pokemon by id
    const response = await axios
      .get(`https://pokeapi.co/api/v2/pokemon/${searchTerm}`)
      .catch((err) => {
        console.error("Err", err);
      })
      .then((res) => {
        return res;
      });

    return Response.json({
      data: [
        {
          abilities: response?.data?.abilities,
          base_experience: response?.data?.base_experience,
          height: response?.data?.height,
          id: response?.data?.id,
          moves: response?.data?.moves,
          name: response?.data?.name,
          sprites: response?.data?.sprites,
          stats: response?.data?.stats,
          types: response?.data?.types,
          weight: response?.data?.weight,
        },
      ],
    });
  } else if (searchTerm && searchTerm.length > 2) {
    //if the search term is a string, get all pokemon and filter by name
    //pokeApi doesn't have a search endpoint, so we have to get all pokemon in order to filter
    const response = await axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=1300")
      .catch((err) => {
        console.error("Err", err);
      })
      .then((res) => {
        return res;
      });

    //filter ALL pokemon names by the search term
    const searchResults = await response?.data?.results?.filter((item: any) => {
      return searchTerm && item?.name?.includes(searchTerm.toLowerCase());
    });

    //fetch pokemon details for each search result
    const data: Pokemon[] = await Promise.all(
      searchResults.map((pokemon: any) => fetchPokemonDetails(pokemon.url))
    );

    //return the search results
    return Response.json({ data });
  } else {
    //default behavior is to get all pokemon 151 at a time
    const response = await axios
      .get(
        `https://pokeapi.co/api/v2/pokemon?limit=151&offset=${
          (Number(page) - 1) * 151
        }`
      )
      .catch((err) => {
        console.error("Err", err);
      })
      .then((res) => {
        return res;
      });

    //GET pokemon details for each search result
    const data: Pokemon[] = await Promise.all(
      response?.data.results.map((pokemon: any) =>
        fetchPokemonDetails(pokemon.url)
      )
    );

    return Response.json({ data });
  }
}
