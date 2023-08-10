import { Box } from "@chakra-ui/react";

const Home = () => {
  return (
    <>
      <Box>
        <Box maxW="100vw" minH="100vh" mx="auto" bg="gray.50">
          <Box p={{ base: "1rem", lg: "2.5rem" }}>
            <Box
              py={"5rem"}
              px={{ base: "1rem", lg: "10rem" }}
              textAlign={"center"}
            >
              <img
                className="object-contain h-28 mx-auto rounded-full"
                src="src/assets/img/nigeria_flag.jpg"
              />
              <p className="text-6xl font-archivoBlack leading-snug text-ngDarkblue font-black pt-10 lg:px-4">
                <span className="text-gray-600 text-4xl">#1</span> The
                <span className="text-green-800"> Nigeria </span> Food Database
                API
              </p>
              <p className="text-xl font-albertSans leading-relaxed text-gray-700 pt-10 lg:px-24 ">
                Explore a rich collection of Nigerian recipes, ingredients,
                <br />
                and culinary traditions with our comprehensive <br />
                Nigeria Food API database.
              </p>
            </Box>
          </Box>
        </Box>
        <Box className="max-w-full min-h-screen bg-gradient-to-r from-green-900 via-green-800 to-green-900">
          <Box className="p-4 lg:p-10"></Box>
        </Box>
      </Box>
    </>
  );
};

export default Home;
