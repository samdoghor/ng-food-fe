import { Box } from "@chakra-ui/react";
import { Home } from "./collections/Index";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Box>
        <Home />
        <Footer />
      </Box>
    </>
  );
};

export default App;
