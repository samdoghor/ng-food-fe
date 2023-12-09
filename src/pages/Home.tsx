import { Box, Image, Text, chakra } from "@chakra-ui/react";
import { MdOutlineTipsAndUpdates, MdStorage } from "react-icons/md";
import FeaturesCard from "../components/FeaturesCard";
import GetAPI from "../components/GetAPI";
import { useEffect } from "react";
import { motion } from "framer-motion";
import APIExample from "../components/APIExample";

const imgVariant = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    rotate: 360,
    transition: {
      delay: 0.5,
      duration: 1.5,
    },
  },
};

const textVariant = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 2,
    },
  },
};

const textVariant2 = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.8,
      duration: 1,
    },
  },
};

const Home = () => {
  useEffect(() => {
    document.title = "The Nigeria Food API | Home";
  }, []);

  return (
    <>
      <Box>
        {/* Section One */}
        <Box maxW="100vw" minH="100vh" mx="auto" bg="gray.100">
          <Box p={{ base: "1rem", lg: "2.5rem" }} mt={"4rem"}>
            <Box
              py={"3rem"}
              px={{ base: "0.8rem", lg: "8rem" }}
              textAlign={"center"}
            >
              <Image
                viewport={{ once: true }}
                as={motion.img}
                src="src/assets/img/nigeria_flag.jpg"
                alt="Nigeria Flag & Coat of Arms"
                borderRadius="full"
                boxSize="100px"
                objectFit="cover"
                mx={"auto"}
                fallbackSrc="https://via.placeholder.com/150"
                variants={imgVariant}
                initial="initial"
                whileInView="animate"
              />
              <Text
                viewport={{ once: true }}
                as={motion.p}
                fontSize={{ base: "2.5rem", lg: "3.7rem" }}
                overflow={"hidden"}
                fontWeight={"900"}
                lineHeight={"1.5"}
                pt={"2.5rem"}
                px={{ md: "4rem" }}
                color={"ngDarkblue"}
                fontFamily={"archivoBlack"}
                variants={textVariant}
                initial="initial"
                whileInView="animate"
              >
                <chakra.span color={"gray.600"} fontSize={"2rem"} pr={"1rem"}>
                  <chakra.sub>#1</chakra.sub>
                </chakra.span>
                The
                <chakra.span className="" color={"green.800"} px={"1rem"}>
                  Nigeria
                </chakra.span>
                Food Database API (NIFDA)
              </Text>
              <Text
                viewport={{ once: true }}
                as={motion.p}
                fontSize={"1.25rem"}
                fontFamily={"albertSans"}
                lineHeight={"1.625"}
                color={"gray.700"}
                pt={"2.5rem"}
                px={{ lg: "6rem" }}
                fontWeight={"600"}
                variants={textVariant2}
                initial="initial"
                whileInView="animate"
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
        <Box w={"100%"} minH={"100vh"} bg="gray.100" id="example">
          <Box px={{ base: "1rem", lg: "8rem" }} py={"8rem"}>
            <Text
              viewport={{ once: true }}
              as={motion.p}
              fontSize={"2.4rem"}
              color={"ngDarkblue"}
              fontWeight={"900"}
              fontFamily={"overpass"}
              display={"flex"}
              variants={textVariant}
              initial="initial"
              whileInView="animate"
            >
              <chakra.span pr={"1rem"} fontSize={"3rem"}>
                <MdOutlineTipsAndUpdates />
              </chakra.span>
              Try it out
            </Text>
            <Text
              viewport={{ once: true }}
              as={motion.p}
              fontSize={"1.2rem"}
              fontFamily={"albertSans"}
              color={"ngDarkblue"}
              py={"1.1rem"}
              variants={textVariant}
              initial="initial"
              whileInView="animate"
            >
              With each API key, you will get x requests per day.
            </Text>
            <APIExample />
          </Box>
        </Box>

        {/* Section Four */}
        <Box
          w={"100%"}
          minH={"100vh"}
          bgGradient={"linear(to-r, green.900, green.800,  green.900)"}
          id="tryitout"
        >
          <Box px={{ base: "1rem", lg: "8rem" }} py={"8rem"}>
            <Text
              viewport={{ once: true }}
              as={motion.p}
              fontSize={"2.4rem"}
              color={"ngGreenlight"}
              fontWeight={"900"}
              fontFamily={"overpass"}
              display={"flex"}
              variants={textVariant}
              initial="initial"
              whileInView="animate"
            >
              <chakra.span pr={"1rem"} fontSize={"3rem"}>
                <MdStorage />
              </chakra.span>
              Database Statistics
            </Text>

            <Box
              viewport={{ once: true }}
              as={motion.div}
              color={"ngOffwhite"}
              textAlign={"left"}
              fontSize={"1.1rem"}
              pt={"1rem"}
              variants={textVariant}
              initial="initial"
              whileInView="animate"
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
