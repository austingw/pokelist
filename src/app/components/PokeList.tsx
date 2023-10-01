"use client";

import { Image, Group, ScrollArea, Text, Stack, Modal } from "@mantine/core";
import { Pokemon } from "../types/Pokemon";
import classes from "./PokeList.module.css";
import Details from "./Details";
import { useDisclosure } from "@mantine/hooks";
import { useState } from "react";

interface PokeListProps {
  initialData: Pokemon[];
}

const PokeList = ({ initialData }: PokeListProps) => {
  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon | null>(null);
  const [opened, { open, close }] = useDisclosure(false);

  const handleClick = (pokemon: Pokemon) => {
    setSelectedPokemon(pokemon);
  };

  const handleClose = () => {
    setSelectedPokemon(null);
  };

  return (
    <>
      <ScrollArea>
        <Stack w={"100%"} h={"100%"}>
          {initialData.map((pokemon: any) => {
            return (
              <Group
                align="center"
                justify="center"
                w={"100%"}
                key={pokemon.name}
                className={classes.row}
                onClick={() => {
                  handleClick(pokemon);
                  open();
                }}
              >
                <Text>{pokemon.id}</Text>
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
        </Stack>
      </ScrollArea>
      <Modal
        opened={opened}
        onClose={close}
        size="calc(100vw - 3rem)"
        withCloseButton={false}
        padding={0}
      >
        <Details pokemon={selectedPokemon} />
      </Modal>
    </>
  );
};

export default PokeList;
