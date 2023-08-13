import { Box } from "@chakra-ui/react";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    document.title = "About | The Nigeria Food API";
  });

  return (
    <>
      <Box> About </Box>
    </>
  );
};

export default About;
