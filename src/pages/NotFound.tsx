import { Box } from "@chakra-ui/react";
import { useEffect } from "react";

const NotFound = () => {
  useEffect(() => {
    document.title = "Not Found | The Nigeria Food API";
  });

  return (
    <>
      <Box></Box>
    </>
  );
};

export default NotFound;
