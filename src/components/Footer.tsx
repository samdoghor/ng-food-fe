import { Box, Text, Link, chakra, Image } from "@chakra-ui/react";
import { Footerlinks } from "../constants/footer";
import { ExternalLinkIcon } from "@chakra-ui/icons";

const Footer = () => {
  // const currentYear = new Date().getFullYear();

  return (
    <>
      <Box maxW="100vw" mx="auto" bg="white" pb={{ lg: "2rem" }}>
        {/* Section One */}
        <Box
          px={{ base: "1rem", lg: "8rem" }}
          pt={"4rem"}
          display={"flex"}
          alignItems="center"
          justifyContent="center"
        >
          <Box
            display={"grid"}
            gridGap={{ base: "10", lg: "40" }}
            gridTemplateColumns={{ md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }}
          >
            {Footerlinks.map((section) => (
              <Box key={section.id}>
                <Text
                  fontSize={"1.2rem"}
                  fontWeight={700}
                  pb={"1.2rem"}
                  color={"green.900"}
                >
                  {section.title}
                </Text>
                <Text fontSize={"1rem"} pb={".8rem"}>
                  {section.link.map((link, index) => (
                    <chakra.p
                      key={index}
                      pb={".6rem"}
                      fontFamily={"heebo"}
                      transition={".5s"}
                      _hover={{
                        transform: "scale(0.95)",
                        transition: ".ss",
                      }}
                    >
                      <Link href={link.url} isExternal={link.external === true}>
                        {link.label}
                      </Link>
                    </chakra.p>
                  ))}
                </Text>
              </Box>
            ))}
          </Box>
        </Box>

        {/* Section Two */}
        <Box
          px={{ base: "1rem", lg: "8rem" }}
          display={"flex"}
          alignItems="center"
          justifyContent="center"
          pb={"2rem"}
        >
          <Image
            src="src/assets/img/nigeria_flag.jpg"
            alt="Nigeria Flag & Coat of Arms"
            borderRadius="full"
            boxSize={{ base: "35px", lg: "40px" }}
            objectFit="cover"
            fallbackSrc="https://via.placeholder.com/150"
          />
          <Text color={"ngGreenvid"} pl={"1.5rem"} fontWeight={500}>
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

        {/* <Box
          px={{ base: "1rem", lg: "8rem" }}
          display={"flex"}
          pb={{ lg: "2rem" }}
          alignItems="center"
          justifyContent="center"
        >
          <Text>All right reserved © Samuel Doghor {currentYear}</Text>
        </Box> */}
      </Box>
    </>
  );
};

export default Footer;
