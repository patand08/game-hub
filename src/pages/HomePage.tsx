import {
  Grid,
  Show,
  GridItem,
  Box,
  Flex,
  useDisclosure,
  Button,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  DrawerBody,
  Hide,
  DrawerCloseButton,
} from "@chakra-ui/react";
import GameGrid from "../components/GameGrid";
import GameHeader from "../components/GameHeader";
import GenreList from "../components/GenreList";
import PlatformSelector from "../components/PlatformSelector";
import SortSelector from "../components/SortSelector";

const HomePage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Grid
        templateAreas={{
          base: `"main"`,
          lg: `"aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr",
        }}
      >
        <Show above="lg">
          <GridItem area="aside" paddingX={5}>
            <GenreList />
          </GridItem>
        </Show>

        <GridItem area="main">
          <Box paddingLeft={2}>
            <Show below="lg">
              <Button
                fontSize="md"
                colorScheme="gray"
                onClick={() => {
                  onOpen();
                }}
                title="Clear genre"
                marginBottom={1}
              >
                Genres
              </Button>
            </Show>
            <GameHeader />
            <Flex marginBottom={3}>
              <PlatformSelector />
              <Box>
                <SortSelector />
              </Box>
            </Flex>
          </Box>
          <GameGrid />
        </GridItem>
      </Grid>

      <Hide above="lg">
        <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerBody>
              <GenreList />
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Hide>
    </>
  );
};

export default HomePage;
