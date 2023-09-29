import { Box, chakra, Text } from "@chakra-ui/react";
import { Flowbite, Navbar } from "flowbite-react";
import { customTheme } from "../collections/flowbiteTheme";
import { Navlinks } from "../constants/navigation";
import { motion } from "framer-motion";

const navVariant = {
  initial: {
    y: -30,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 1,
    },
  },
};

const Navigation = () => {
  return (
    <>
      <Box
        viewport={{ once: true }}
        as={motion.div}
        bg={"gray.100"}
        opacity={".95"}
        px={{ base: "1rem", lg: "5rem" }}
        textAlign={"center"}
        position={"fixed"}
        width={"100vw"}
        zIndex={1000}
        variants={navVariant}
        initial="initial"
        whileInView="animate"
        exit="initial"
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
                    paddingX={"1rem"}
                    paddingY={".6rem"}
                    backgroundColor={routes.backgroundColor}
                    textColor={routes.textColor}
                    rounded={routes.rounded}
                    _hover={{
                      backgroundColor: routes.hoverbackgroundColor,
                      textColor: routes.hovertextColor,
                    }}
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
