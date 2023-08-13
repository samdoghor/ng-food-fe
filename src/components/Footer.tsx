import { Box, Text, Link, chakra, Image } from "@chakra-ui/react";
import { Footerlinks } from "../constants/footer";
import { ExternalLinkIcon } from "@chakra-ui/icons";

const Footer = () => {
  return (
    <>
      <Box maxW="100vw" mx="auto" bg="white">
        {/* Section One */}
        <Box
          px={{ base: "1rem", lg: "8rem" }}
          py={{ lg: "4rem" }}
          display={"flex"}
          alignItems="center"
          justifyContent="center"
        >
          <Box
            display={"grid"}
            gridGap={"40"}
            gridTemplateColumns="repeat(3, 1fr)"
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
                      transition={"5s"}
                      _hover={{
                        transform: "scale(0.95)",
                        transition: "5s",
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
          pb={{ lg: "2rem" }}
          alignItems="center"
          justifyContent="center"
        >
          <Image
            src="src/assets/img/nigeria_flag.jpg"
            alt="Nigeria Flag & Coat of Arms"
            borderRadius="full"
            boxSize="60px"
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
      </Box>
    </>
  );
};

export default Footer;
