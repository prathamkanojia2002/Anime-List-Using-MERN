import {
  Button,
  Container,
  Flex,
  HStack,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { PlusSquareIcon } from "@chakra-ui/icons";

const Navbar = () => {
  return (
    <Container maxW={"1140px"} px={4}>
      <Flex
        h={16}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexDir={{
          base: "column",
          sm: "row",
        }}
      >
        <Text
                fontSize={{ base: "3xl", md: "4xl" }}
                fontWeight="extrabold"
                bgGradient="linear(to-r, orange.400, red.400)"
                bgClip="text"
                textAlign="center"
              >
  <Link to={"/"}>⚔️ My LIST ⚔️</Link>
</Text>


        <HStack spacing={2} alignItems={"center"}>
          <Link to={"/create"}>
            <Button
              leftIcon={<PlusSquareIcon fontSize={20} />}
              bgGradient="linear(to-r, orange.400, red.400)"
              color="white"
              _hover={{
                transform: "scale(1.05)",
                bgGradient: "linear(to-r, orange.500, red.500)",
                boxShadow: "0 0 10px orange",
              }}
              transition="all 0.2s"
              rounded="full"
            >
              Add
            </Button>
          </Link>
        </HStack>
      </Flex>
    </Container>
  );
};

export default Navbar;
