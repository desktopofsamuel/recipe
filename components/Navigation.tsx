import React from "react";
import Link from "next/link";
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
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

const Navigation = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex
      pos="absolute"
      top="0"
      bg="blackAlpha.200"
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
      <HStack>
        <Heading size="md" color="black">
          <Link href="/about">
            <a>About</a>
          </Link>
        </Heading>
        <Button
          colorScheme="teal"
          mr="4"
          fontWeight="regular"
          onClick={toggleColorMode}
        >
          {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
        </Button>
        <Button colorScheme="teal" mr="4" fontWeight="regular">
          Log in
        </Button>
      </HStack>
    </Flex>
  );
};

export default Navigation;
