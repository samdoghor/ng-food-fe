import { Box } from "@chakra-ui/react";
import Footer from "./components/Footer";
import Router from "./collections/Router";

const App = () => {
  return (
    <>
      <Router />
      <Box>
        <Footer />
      </Box>
    </>
  );
};

export default App;
