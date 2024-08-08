import {
  Box,
  Button,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
} from "@chakra-ui/react";
import { BarLoader } from "react-spinners";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import useGameQueryStore from "../store.ts/store";

const GenreList = () => {
  const hoverDivStyle = {
    cursor: "pointer",
  };

  const { data, isLoading, error } = useGenres();
  const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const setGenreId = useGameQueryStore((s) => s.setGenreId);

  if (error) return null;

  if (isLoading)
    return (
      <Box paddingTop={4} justifyContent="center">
        <BarLoader color="#2d3748" height="6px" width="100%" />
      </Box>
    );

  return (
    <>
      <HStack justifyContent={"space-between"}>
        <Heading fontSize="2xl" marginBottom={2}>
          Genres
        </Heading>
        {selectedGenreId && (
          <Button
            fontWeight="bold"
            fontSize="md"
            colorScheme="gray"
            size="sm"
            onClick={() => {
              setGenreId(undefined);
            }}
            title="Clear genre"
          >
            Clear
          </Button>
        )}
      </HStack>
      <List>
        {data?.results.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack
              onClick={() => {
                setGenreId(genre.id);
              }}
              style={hoverDivStyle}
            >
              <Image
                boxSize="32px"
                borderRadius={8}
                objectFit="cover"
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Button
                fontWeight={genre.id === selectedGenreId ? "bold" : "normal"}
                whiteSpace="normal"
                textAlign="left"
                fontSize="lg"
                variant="link"
                onClick={() => {
                  setGenreId(genre.id);
                }}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
