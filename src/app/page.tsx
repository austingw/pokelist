import PokeList from "./components/PokeList";
import styles from "./page.module.css";
import { Pokemon } from "./types/Pokemon";
import getList from "./utils/getList";
import { Flex, Group, Image, ScrollArea, Stack, Text } from "@mantine/core";

export default async function Home() {
  const initialData: Pokemon[] = await getList();

  console.log("initialData", initialData);

  return (
    <>
      <Flex
        h={"100%"}
        w={"100%"}
        direction={"column"}
        align={"center"}
        justify={"center"}
      >
        <Stack bg={"black"} h={"100%"} w={"100%"}>
          <Text
            fz={80}
            variant="gradient"
            gradient={{ from: "red", to: "white" }}
          >
            Pokelist
          </Text>
          <Text>A list of Pokemon {initialData.length}</Text>
        </Stack>
        <PokeList initialData={initialData} />
      </Flex>
    </>
  );
}
