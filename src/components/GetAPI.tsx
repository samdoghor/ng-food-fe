import { Box, Text, Button, Link } from "@chakra-ui/react";
import { motion } from "framer-motion";

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
      duration: 0.8,
    },
  },
};

const GetAPI = () => {
  return (
    <>
      <Box maxW="100vw" mx="auto" bg="gray.50">
        <Box px={{ base: "1rem", lg: "8rem" }} py={"4rem"} overflow={"hidden"}>
          <Text
            viewport={{ once: true }}
            as={motion.p}
            textAlign={"center"}
            fontFamily={"overpass"}
            fontWeight={500}
            fontSize={"1.4rem"}
            pb={"3rem"}
            overflow={"hidden"}
            variants={textVariant2}
            initial="initial"
            whileInView="animate"
          >
            Like what you see? Sign up for an API Key!
          </Text>
          <Box
            mx={"auto"}
            display="flex"
            alignItems="center"
            justifyContent="center"
            overflow={"hidden"}
          >
            <Link href="/signup" overflow={"hidden"}>
              <Button
                viewport={{ once: true }}
                as={motion.button}
                bg="ngDarkblue"
                color={"white"}
                p={"1.5rem"}
                transition={".7s"}
                _hover={{
                  bg: "ngGreenvid",
                  color: "ngOffwhite",
                  transform: "scale(0.9)",
                  transition: ".7s",
                }}
                fontWeight="semibold"
                overflow={"hidden"}
                variants={textVariant2}
                initial="initial"
                whileInView="animate"
              >
                Get an API Key
              </Button>
            </Link>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default GetAPI;
