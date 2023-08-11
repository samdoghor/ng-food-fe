import { Box, Image, Text, chakra } from "@chakra-ui/react";
import { MdFingerprint } from "react-icons/md";

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
                fontSize={{ base: "2.5rem", lg: "3.7rem" }}
                overflow={"hidden"}
                fontWeight={"900"}
                lineHeight={"1.5"}
                pt={"2.5rem"}
                px={{ md: "4rem" }}
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
                fontWeight={"600"}
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
          <Box px={{ base: "1rem", lg: "8rem" }} py={{ lg: "12rem" }}>
            <Text
              fontSize={"3.4rem"}
              color={"white"}
              fontWeight={"900"}
              fontFamily={"overpass"}
              display={"flex"}
            >
              <chakra.span pr={"0.5rem"}>
                <MdFingerprint />
              </chakra.span>
              Features
            </Text>
            <Box color={"white"} textAlign={"left"} fontSize={"1.25rem"}>
              <Text
                lineHeight={"2.2rem"}
                letterSpacing={".1rem"}
                fontFamily={"rambla"}
              >
                Fuel Your Culinary Creativity! Tailored for developers, chefs,
                bakers, and more, the Nigeria Food Database API is your portal
                to authentic flavors and vital nutritional insights. Elevate
                your creations while celebrating Nigeria's diverse culinary
                heritage.
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Home;
