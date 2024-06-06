import { Box, Heading, Text, Container, VStack } from "@chakra-ui/react";

const Credits = () => (
  <Container centerContent maxW="container.md" py={10}>
    <VStack spacing={4}>
      <Heading as="h1" size="2xl">Credits</Heading>
      <Box p={4} bg="gray.100" borderRadius="md" boxShadow="md">
        <Text fontSize="lg" textAlign="center">
          This project was directed by the incredibly talented [Director's Name]. Their vision and dedication have brought this project to life.
        </Text>
      </Box>
    </VStack>
  </Container>
);

export default Credits;