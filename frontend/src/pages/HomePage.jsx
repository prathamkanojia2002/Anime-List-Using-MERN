import {
  Container,
  SimpleGrid,
  Text,
  VStack,
  useColorModeValue,
  Flex,
  Button,
  Fade,
  Box,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useProductStore } from "../store/product";
import ProductCard from "../components/ProductCard";

const HomePage = () => {
  const { fetchProducts, products } = useProductStore();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetchProducts();
    setTimeout(() => setIsLoaded(true), 100);  
  }, [fetchProducts]);

  return (
    <Box
      minH="100vh"
      bgImage="url('/1.jpg')"  
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
      position="relative"
      _before={{
        content: `""`,
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backdropFilter: "blur(8px)",
        bg: "rgba(0, 0, 0, 0.5)",
        zIndex: 0,
      }}
    >
      <Flex
        minH="100vh"
        align="center"
        justify="center"
        py={10}
        position="relative"
        zIndex={1}
      >
        <Container
          maxW="container.xl"
          p={6}
          rounded="lg"
          shadow="xl"
          bg={useColorModeValue("whiteAlpha.900", "blackAlpha.700")}
        >
          <VStack spacing={10}>
            <Fade in={isLoaded}>
              <Text
                fontSize={{ base: "3xl", md: "4xl" }}
                fontWeight="extrabold"
                bgGradient="linear(to-r, orange.400, red.400)"
                bgClip="text"
                textAlign="center"
              >
                Anime Watchlist 愛
              </Text>
            </Fade>

            <Fade in={isLoaded}>
              {products.length > 0 ? (
                <SimpleGrid
                  columns={{ base: 1, sm: 2, md: 3 }}
                  spacing={8}
                  w="full"
                  transition="all 0.3s ease-in-out"
                >
                  {products.map((product) => (
                    <ProductCard key={product._id} product={product} />
                  ))}
                </SimpleGrid>
              ) : (
                <VStack spacing={4}>
                  <Text
                    fontSize="xl"
                    fontWeight="medium"
                    color="gray.500"
                    textAlign="center"
                  >
                    No Anime in your list yet...
                  </Text>
                  <Link to="/create">
                    <Button
                      colorScheme="orange"
                      variant="solid"
                      shadow="md"
                      _hover={{ transform: "scale(1.05)", bg: "orange.400" }}
                      transition="all 0.2s"
                    >
                      Create Your List
                    </Button>
                  </Link>
                </VStack>
              )}
            </Fade>
          </VStack>
        </Container>
      </Flex>
    </Box>
  );
};

export default HomePage;
