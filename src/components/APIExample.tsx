import { Box, Text } from "@chakra-ui/react";

const APIExample = () => {
  return (
    <>
      <Box w={"100%"} minH={"100vh"}>
        <Box py={"1.2rem"}>
          <Box>
            <Box
              display={"grid"}
              gridGap={"5rem"}
              overflow={"hidden"}
              gridTemplateColumns={{
                md: "repeat(2, 1fr)",
              }}
            >
              <Box>
                <Text> Box 1 </Text>
              </Box>
              <Box>
                <Text> Box 2 </Text>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default APIExample;
