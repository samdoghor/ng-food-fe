import { Box, Text, Link } from "@chakra-ui/react";
import { useEffect } from "react";
import { AboutContent } from "../constants/about";
import GetAPI from "../components/GetAPI";
import { ExternalLinkIcon } from "@chakra-ui/icons";

const About = () => {
  useEffect(() => {
    document.title = "The Nigeria Food API | About";
  }, []);

  return (
    <>
      <Box>
        <Box w={"100%"} minH={"100vh"} bg="gray.100" id="tryit">
          <Box px={{ base: "1rem", lg: "8rem" }} py={{ lg: "4rem" }}>
            <Box>
              <Text
                fontSize={"2.4rem"}
                color={"ngDarkblue"}
                fontWeight={"900"}
                fontFamily={"overpass"}
                display={"flex"}
              >
                About
              </Text>
              {AboutContent.map((about, index) => (
                <>
                  <Text
                    key={index}
                    fontFamily={"albertSans"}
                    letterSpacing={".1rem"}
                    fontSize={"1.2rem"}
                    fontWeight={"500"}
                    lineHeight={"2rem"}
                  >
                    <Text py={"1rem"} pe={{ lg: "20rem" }}>
                      {about.p1}
                    </Text>
                    <Text py={"1rem"} pe={{ lg: "20rem" }}>
                      {about.p2}
                    </Text>
                    <Text py={"1rem"} pe={{ lg: "20rem" }}>
                      {about.p3}
                    </Text>
                  </Text>
                </>
              ))}
            </Box>

            <Box>
              <Text
                color={"ngGreenvid"}
                fontWeight={500}
                pt={"2rem"}
                fontSize={"1.4rem"}
              >
                Proudly developed by
                <Link
                  href="https://www.samdoghor.com"
                  pl={".4rem"}
                  fontWeight={900}
                  color={"green.900"}
                  isExternal
                >
                  Samuel, Doghor Destiny <ExternalLinkIcon mx="2px" />
                </Link>
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

export default About;
