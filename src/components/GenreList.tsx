import {
  Button,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import useGameQueryStore from "../store.ts/store";
import BarLoarder from "./BarLoarder";

const GenreList = () => {
  const { data, isLoading, error } = useGenres();
  const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const setGenreId = useGameQueryStore((s) => s.setGenreId);

  if (error) return null;

  if (isLoading) return <BarLoarder />;

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
              _hover={{ cursor: "pointer" }}
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
