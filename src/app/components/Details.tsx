import { Pokemon } from "../types/Pokemon";
import {
  Accordion,
  Badge,
  Flex,
  Group,
  Image,
  Stack,
  Table,
  Text,
} from "@mantine/core";

import { Carousel } from "@mantine/carousel";
interface DetailsProps {
  pokemon: Pokemon | null;
}

const Details = ({ pokemon }: DetailsProps) => {
  return (
    <>
      <Flex
        direction={"column"}
        align={"center"}
        justify={"center"}
        px={40}
        py={20}
        style={{
          flexWrap: "nowrap",
        }}
      >
        <Group
          align="flex-start"
          justify="space-between"
          w={"100%"}
          style={{
            flexWrap: "nowrap",
          }}
        >
          <Carousel height={300} w={300} withIndicators>
            <Carousel.Slide>
              <Image src={pokemon?.sprites.front_default} alt={pokemon?.name} />
            </Carousel.Slide>
            <Carousel.Slide>
              <Image src={pokemon?.sprites.back_default} alt={pokemon?.name} />
            </Carousel.Slide>
          </Carousel>
          <Stack justify="flex-start" align="flex-start" h={"100%"} gap={"xs"}>
            <Text
              fz={40}
              style={{
                textTransform: "capitalize",
              }}
            >
              #{pokemon?.id} - {pokemon?.name}
            </Text>

            <Badge
              variant="gradient"
              size="xl"
              mb={10}
              gradient={{ from: "grey", to: "black" }}
            >
              Type: {pokemon?.types.map((type) => type.type.name).join("/")}
            </Badge>
            <Text>
              <b>Height:</b> {pokemon?.height} cm
            </Text>
            <Text>
              <b>Weight:</b> {pokemon ? pokemon?.weight / 10 : "???"} kg
            </Text>
            <Text>
              <b>Base experience:</b> {pokemon?.base_experience}
            </Text>
            <Text
              style={{
                textTransform: "capitalize",
              }}
            >
              <b>Abilities:</b>{" "}
              {pokemon?.abilities
                .map((ability) => ability.ability.name)
                .join(", ")}
            </Text>
          </Stack>

          <Stack align="flex-start" justify="flex-start" gap={0} w={300}>
            <Text>
              <b>Base Stats:</b>
            </Text>
            <Table w={"100%"}>
              <Table.Tbody>
                <Table.Tr>
                  <Table.Td>HP:</Table.Td>
                  <Table.Td>{pokemon?.stats[0].base_stat}</Table.Td>
                </Table.Tr>
                <Table.Tr>
                  <Table.Td>ATK:</Table.Td>
                  <Table.Td>{pokemon?.stats[1].base_stat}</Table.Td>
                </Table.Tr>
                <Table.Tr>
                  <Table.Td>DEF:</Table.Td>
                  <Table.Td>{pokemon?.stats[2].base_stat}</Table.Td>
                </Table.Tr>
                <Table.Tr>
                  <Table.Td>SP. ATK:</Table.Td>
                  <Table.Td>{pokemon?.stats[3].base_stat}</Table.Td>
                </Table.Tr>
                <Table.Tr>
                  <Table.Td>SP. DEF:</Table.Td>
                  <Table.Td>{pokemon?.stats[4].base_stat}</Table.Td>
                </Table.Tr>
                <Table.Tr>
                  <Table.Td>SPD:</Table.Td>
                  <Table.Td>{pokemon?.stats[5].base_stat}</Table.Td>
                </Table.Tr>
                <Table.Tr>
                  <Table.Td>TOTAL:</Table.Td>
                  <Table.Td>
                    {pokemon?.stats.reduce(
                      (acc, stat) => acc + stat.base_stat,
                      0
                    )}
                  </Table.Td>
                </Table.Tr>
              </Table.Tbody>
            </Table>
          </Stack>
        </Group>

        <Accordion w={"100%"}>
          <Accordion.Item value="customization">
            <Accordion.Control>Possible Moves</Accordion.Control>
            <Accordion.Panel>
              <Text
                style={{
                  textTransform: "capitalize",
                }}
              >
                <b>Move List:</b>{" "}
                {pokemon?.moves
                  .map((move) => move.move.name.split("-").join(" "))
                  .join(", ")}
              </Text>
            </Accordion.Panel>
          </Accordion.Item>
        </Accordion>
      </Flex>
    </>
  );
};

export default Details;
