import { Box } from "@chakra-ui/react";
import Footer from "./components/Footer";
import Router from "./collections/Router";
import Navigation from "./components/Navigation";

const App = () => {
  return (
    <>
      <Router />
      <Box>
        <Navigation />
        <Footer />
      </Box>
    </>
  );
};

export default App;
