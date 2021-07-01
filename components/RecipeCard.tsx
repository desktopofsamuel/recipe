import React from "react";
import {
  Box,
  Flex,
  HStack,
  Spacer,
  Heading,
  Text,
  Image,
  useColorMode,
  Button,
} from "@chakra-ui/react";
import { TimeIcon, StarIcon } from "@chakra-ui/icons";

const RecipeCard = ({ data }) => {
  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Image src={data.imageUrl} alt={data.imageAlt} />
      <Box p="6">
        <Box
          color="gray.500"
          letterSpacing="wide"
          fontSize="xs"
          textTransform="uppercase"
        >
          <TimeIcon mr="2" />
          {data.time}
        </Box>
        <Box
          mt="1"
          fontSize="2xl"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
        >
          {data.title}
        </Box>
        <Box d="flex" mt="2" alignItems="center">
          {Array(5)
            .fill("")
            .map((_, i) => (
              <StarIcon
                key={i}
                color={i < data.rating ? "brand.700" : "gray.300"}
              />
            ))}
        </Box>
      </Box>
    </Box>
  );
};

export default RecipeCard;
