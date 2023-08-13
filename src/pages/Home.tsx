import { Box, Image, Text, chakra } from "@chakra-ui/react";
import { MdOutlineTipsAndUpdates, MdStorage } from "react-icons/md";
import FeaturesCard from "../components/FeaturesCard";
import GetAPI from "../components/GetAPI";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    document.title = "Home | The Nigeria Food API";
  }, []);

  return (
    <>
      <Box>
        {/* Section One */}
        <Box maxW="100vw" minH="100vh" mx="auto" bg="gray.100">
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

        {/* Section Two */}
        <FeaturesCard />

        {/* Section Three */}
        <Box w={"100%"} minH={"100vh"} bg="gray.100" id="tryitout">
          <Box px={{ base: "1rem", lg: "8rem" }} py={{ lg: "8rem" }}>
            <Text
              fontSize={"2.4rem"}
              color={"ngDarkblue"}
              fontWeight={"900"}
              fontFamily={"overpass"}
              display={"flex"}
            >
              <chakra.span pr={"1rem"} fontSize={"3rem"}>
                <MdOutlineTipsAndUpdates />
              </chakra.span>
              Try it out
            </Text>
          </Box>
        </Box>

        {/* Section Four */}
        <Box
          w={"100%"}
          minH={"100vh"}
          bgGradient={"linear(to-r, green.900, green.800,  green.900)"}
          id="tryitout"
        >
          <Box px={{ base: "1rem", lg: "8rem" }} py={{ lg: "8rem" }}>
            <Text
              fontSize={"2.4rem"}
              color={"ngGreenlight"}
              fontWeight={"900"}
              fontFamily={"overpass"}
              display={"flex"}
            >
              <chakra.span pr={"1rem"} fontSize={"3rem"}>
                <MdStorage />
              </chakra.span>
              Database Statistics
            </Text>

            <Box
              color={"ngOffwhite"}
              textAlign={"left"}
              fontSize={"1.1rem"}
              pt={"1rem"}
            >
              <Text
                lineHeight={"1.8rem"}
                letterSpacing={".08rem"}
                fontFamily={"albertSans"}
              >
                Your Ultimate Nigerian Food Database! Access extensive Nigerian
                dish info, easy integration and powerful search. The API is
                maintained by our wonderful volunteer community.
              </Text>
            </Box>
          </Box>
        </Box>

        {/* Get API Key */}
        <GetAPI />
      </Box>
    </>
  );
};

export default Home;
