import { Box, chakra, Text } from "@chakra-ui/react";
import { Flowbite, Navbar } from "flowbite-react";
import { customTheme } from "../collections/flowbiteTheme";
import { Navlinks } from "../constants/navigation";

const Navigation = () => {
  return (
    <>
      <Box
        bg={"gray.100"}
        px={{ base: "1rem", lg: "5rem" }}
        textAlign={"center"}
      >
        <Flowbite theme={{ theme: customTheme }}>
          <Navbar fluid rounded>
            <Navbar.Brand href="/">
              <chakra.span
                className="self-center whitespace-nowrap"
                fontSize={"1.5rem"}
                fontWeight={"900"}
                color={"ngDarkblue"}
              >
                <chakra.span color={"green.800"} fontSize={"2rem"}>
                  9ja
                </chakra.span>
                Food API
              </chakra.span>
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
              {Navlinks.map((routes) => (
                <Navbar.Link key={routes.id} href={routes.path}>
                  <Text
                    fontSize={"1.1rem"}
                    overflow={"hidden"}
                    lineHeight={"1.5rem"}
                  >
                    {routes.element}
                  </Text>
                </Navbar.Link>
              ))}
            </Navbar.Collapse>
          </Navbar>
        </Flowbite>
      </Box>
    </>
  );
};

export default Navigation;
