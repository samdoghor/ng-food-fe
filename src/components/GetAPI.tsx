import { Box, Text, Button } from "@chakra-ui/react";

const GetAPI = () => {
  return (
    <>
      <Box maxW="100vw" mx="auto" bg="gray.50">
        <Box px={{ base: "1rem", lg: "8rem" }} py={"4rem"}>
          <Text
            textAlign={"center"}
            fontFamily={"overpass"}
            fontWeight={500}
            fontSize={"1.4rem"}
            pb={"3rem"}
          >
            Like what you see? Sign up for an API Key!
          </Text>
          <Box
            mx={"auto"}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Button
              bg="ngDarkgreen"
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
            >
              Get an API Key
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default GetAPI;
