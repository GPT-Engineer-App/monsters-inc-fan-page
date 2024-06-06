import { Container, Text, VStack, Heading, Image } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl">Welcome to the Monsters Inc Fan Page</Heading>
        <Image src="/images/monsters-inc-logo.png" alt="Monsters Inc Logo" boxSize="200px" />
        <Text fontSize="xl">Explore the world of Monsters Inc and meet your favorite characters!</Text>
      </VStack>
    </Container>
  );
};

export default Index;