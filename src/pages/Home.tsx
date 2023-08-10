import { Box, Image, Text, chakra } from "@chakra-ui/react";

const Home = () => {
  return (
    <>
      <Box>
        <Box maxW="100vw" minH="100vh" mx="auto" bg="gray.50">
          <Box p={{ base: "1rem", lg: "2.5rem" }}>
            <Box
              py={"5rem"}
              px={{ base: "0.8rem", lg: "10rem" }}
              textAlign={"center"}
            >
              <Image
                src="src/assets/img/nigeria_flag.jpg"
                alt="Nigeria Flag & Coat of Arms"
                borderRadius="full"
                boxSize="100px"
                objectFit="cover"
                mx={"auto"}
                fallbackSrc="https://via.placeholder.com/150"
              />
              <Text
                // className="font-archivoBlack"
                fontSize={{ base: "2.5rem", lg: "4rem" }}
                overflow={"hidden"}
                fontWeight={"900"}
                lineHeight={"1.5"}
                pt={"2.5rem"}
                px={{ md: "1rem" }}
                color={"ngDarkblue"}
                fontFamily={"archivoBlack"}
              >
                <chakra.span color={"gray.600"} fontSize={"2rem"} pr={"1rem"}>
                  #1
                </chakra.span>
                The
                <chakra.span className="" color={"green.800"} px={"1rem"}>
                  Nigeria
                </chakra.span>
                Food Database API
              </Text>
              <Text
                fontSize={"1.25rem"}
                fontFamily={"albertSans"}
                lineHeight={"1.625"}
                color={"gray.700"}
                pt={"2.5rem"}
                px={{ lg: "6rem" }}
              >
                Explore a rich collection of Nigerian recipes, ingredients,
                <br />
                and culinary traditions with our comprehensive <br />
                Nigeria Food API database.
              </Text>
            </Box>
          </Box>
        </Box>
        <Box
          w={"100%"}
          minH={"100vh"}
          bgGradient={"linear(to-r, green.900, green.800,  green.900)"}
        >
          <Box p={{ base: "1rem", lg: "2.5rem" }}></Box>
        </Box>
      </Box>
    </>
  );
};

export default Home;
