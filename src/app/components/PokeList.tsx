import { Image, Group, ScrollArea, Text } from "@mantine/core";
import { Pokemon } from "../types/Pokemon";

interface PokeListProps {
  initialData: Pokemon[];
}

const PokeList = ({ initialData }: PokeListProps) => {
  return (
    <ScrollArea>
      {initialData.map((pokemon: any) => {
        return (
          <Group align="center" key={pokemon.name}>
            <Image
              src={pokemon.sprites.front_default}
              alt={pokemon.name}
              w={100}
              h={100}
            />

            <Text>{pokemon.name}</Text>
          </Group>
        );
      })}
    </ScrollArea>
  );
};

export default PokeList;
