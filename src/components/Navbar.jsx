import { Box, Flex, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => (
  <Box bg="green.500" px={4} py={2}>
    <Flex justify="space-between" align="center">
      <Link as={RouterLink} to="/" color="white" fontSize="xl" fontWeight="bold">Monsters Inc Fan Page</Link>
      <Flex>
        <Link as={RouterLink} to="/" color="white" mx={2}>Home</Link>
        <Link as={RouterLink} to="/catalogue" color="white" mx={2}>Catalogue</Link>
        <Link as={RouterLink} to="/credits" color="white" mx={2}>Credits</Link>
      </Flex>
    </Flex>
  </Box>
);

export default Navbar;