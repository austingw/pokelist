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

  let data = [];
  for await (const item of reponse?.data?.results) {
    const pokemon = await axios
      .get(item.url)
      .catch((err) => {
        console.error("Err", err);
      })
      .then((res) => {
        return res;
      });
    data.push(pokemon?.data);
  }

  return Response.json({ data });
}
