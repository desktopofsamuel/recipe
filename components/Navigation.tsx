import React from "react";
import {
  Box,
  Flex,
  HStack,
  Spacer,
  Heading,
  Text,
  useColorMode,
  Button,
} from "@chakra-ui/react";

const Navigation = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex
      pos="absolute"
      top="0"
      bg="gray.100"
      width="100%"
      h="80px"
      align="center"
    >
      <Box p="2">
        <Heading size="md" color="black">
          Home
        </Heading>
      </Box>
      <Spacer />
      <Box>
        <Button colorScheme="teal" mr="4" onClick={() => toggleColorMode()}>
          {colorMode}
        </Button>
        <Button colorScheme="teal" mr="4">
          Log in
        </Button>
      </Box>
    </Flex>
  );
};

export default Navigation;
