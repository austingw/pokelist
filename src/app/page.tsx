import PokeList from "./components/PokeList";
import { Pokemon } from "./types/Pokemon";
import getList from "./utils/getList";
import { Flex, Group, Text } from "@mantine/core";

export default async function Home() {
  //get intial data for SSR
  const initialData: Pokemon[] = await getList({
    searchTerm: "me",
    page: 1,
  });

  return (
    <Flex
      h={"100%"}
      w={"100%"}
      direction={"column"}
      align={"center"}
      justify={"flex-start"}
    >
      <Group
        h={200}
        w={"100%"}
        align="center"
        justify="center"
        px={30}
        bg={"black"}
        style={{
          boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)",
        }}
      >
        <Text
          fz={80}
          variant="gradient"
          gradient={{ from: "#ef3b36", to: "white" }}
        >
          Pokélist
        </Text>
      </Group>
      <PokeList initialData={initialData} />
    </Flex>
  );
}
