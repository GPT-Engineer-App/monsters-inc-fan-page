import { Box, Heading, SimpleGrid, Image, Text } from "@chakra-ui/react";

const characters = [
  { name: "James P. Sullivan", image: "/images/sullivan.png" },
  { name: "Mike Wazowski", image: "/images/mike.png" },
  { name: "Boo", image: "/images/boo.png" },
  { name: "Randall Boggs", image: "/images/randall.png" },
];

const Catalogue = () => (
  <Box p={4}>
    <Heading as="h2" size="xl" mb={6} textAlign="center">Popular Characters</Heading>
    <SimpleGrid columns={[1, 2, 2, 4]} spacing={10}>
      {characters.map((character) => (
        <Box key={character.name} textAlign="center">
          <Image src={character.image} alt={character.name} boxSize="150px" mx="auto" />
          <Text mt={2} fontSize="lg">{character.name}</Text>
        </Box>
      ))}
    </SimpleGrid>
  </Box>
);

export default Catalogue;