import { Box, Text } from "@chakra-ui/react";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    document.title = "About | The Nigeria Food API";
  }, []);

  return (
    <>
      <Box>
        <Box w={"100%"} minH={"100vh"} bg="gray.100" id="tryit">
          <Box px={{ base: "1rem", lg: "8rem" }} py={{ lg: "4rem" }}>
            <Text
              fontSize={"2.4rem"}
              color={"ngDarkblue"}
              fontWeight={"900"}
              fontFamily={"overpass"}
              display={"flex"}
            >
              About
            </Text>
            <Text pt={"2rem"}> </Text>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default About;
