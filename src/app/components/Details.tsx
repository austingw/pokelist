import { Pokemon } from "../types/Pokemon";
import { Text } from "@mantine/core";

interface DetailsProps {
  pokemon: Pokemon | null;
}

const Details = ({ pokemon }: DetailsProps) => {
  return (
    <>
      <Text>{pokemon?.name}</Text>
    </>
  );
};

export default Details;
