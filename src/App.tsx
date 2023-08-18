import { Box } from "@chakra-ui/react";
import Footer from "./components/Footer";
import Router from "./collections/Router";
import Navigation from "./components/Navigation";

const App = () => {
  return (
    <>
      <Box>
        <Navigation />
      </Box>
      <Router />
      <Box>
        <Footer />
      </Box>
    </>
  );
};

export default App;
