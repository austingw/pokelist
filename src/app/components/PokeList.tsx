"use client";

import {
  Image,
  Group,
  ScrollArea,
  Text,
  Stack,
  Modal,
  TextInput,
  LoadingOverlay,
  Pagination,
} from "@mantine/core";
import { Pokemon } from "../types/Pokemon";
import classes from "./PokeList.module.css";
import Details from "./Details";
import { useDebouncedValue, useDisclosure } from "@mantine/hooks";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import getList from "../utils/getList";

interface PokeListProps {
  initialData: Pokemon[];
}

const PokeList = ({ initialData }: PokeListProps) => {
  const [value, setValue] = useState("");
  const [activePage, setPage] = useState(1);
  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon | null>(null);
  const [opened, { open, close }] = useDisclosure(false);
  const [debounced] = useDebouncedValue(value, 100);

  //Using Tanstack Query to fetch search results/pages
  const { data, isFetching } = useQuery({
    queryKey: ["list", debounced, activePage],
    queryFn: () =>
      getList({
        searchTerm: debounced,
        page: activePage,
      }),
    initialData,
    refetchOnWindowFocus: false,
    keepPreviousData: true,
  });

  const handleClick = (pokemon: Pokemon) => {
    setSelectedPokemon(pokemon);
  };

  const handleClose = () => {
    setSelectedPokemon(null);
    close();
  };

  return (
    <>
      <ScrollArea>
        <Stack w={"100vw"} h={"100%"} py={10} align="center">
          <LoadingOverlay visible={isFetching} />
          <TextInput
            value={value}
            onChange={(event) => setValue(event.currentTarget.value)}
            size="xl"
            w={"80%"}
            placeholder="Search by name or Pokédex #"
          />
          {data?.map((pokemon: Pokemon) => {
            return (
              <Group
                align="center"
                justify="space-between"
                w={"80vw"}
                key={pokemon.name}
                className={classes.row}
                onClick={() => {
                  handleClick(pokemon);
                  open();
                }}
                px={20}
              >
                <Text
                  fz={30}
                  style={{
                    textTransform: "capitalize",
                  }}
                >
                  #{pokemon.id} - {pokemon.name}
                </Text>

                <Image
                  src={pokemon.sprites.front_default}
                  alt={pokemon.name}
                  w={100}
                  h={100}
                />
              </Group>
            );
          })}
          {
            //conditionally render pagination to only show up if there's no search term
          }
          {debounced === "" && (
            <Pagination
              value={activePage}
              onChange={setPage}
              total={8}
              radius="xl"
              withEdges
              color="black"
            />
          )}
        </Stack>
      </ScrollArea>
      <Modal
        opened={opened}
        onClose={handleClose}
        size="75vw"
        centered
        withCloseButton={false}
        padding={0}
      >
        <Details pokemon={selectedPokemon} />
      </Modal>
    </>
  );
};

export default PokeList;
