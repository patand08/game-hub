import {
  Box,
  Button,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
  Text,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import { BarLoader } from "react-spinners";
import { AiFillCloseCircle } from "react-icons/ai";

interface Props {
  onSelection: (genre: Genre | null) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelection, selectedGenre }: Props) => {
  const hoverDivStyle = {
    cursor: "pointer",
  };

  const { data, isLoading, error } = useGenres();

  if (error) return null;

  if (isLoading)
    return (
      <Box paddingTop={4} justifyContent="center">
        <BarLoader color="#2d3748" height="6px" width="100%" />
      </Box>
    );

  return (
    <>
      <Heading fontSize="2xl" marginBottom={2}>
        Genres
      </Heading>
      <List>
        {data?.results.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack
              onClick={() => {
                onSelection(genre);
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
                fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
                whiteSpace="normal"
                textAlign="left"
                fontSize="lg"
                variant="link"
                onClick={() => {
                  onSelection(genre);
                }}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
      {selectedGenre && (
        <Button
          fontWeight="normal"
          fontSize="lg"
          variant="link"
          leftIcon={<AiFillCloseCircle size="20px" />}
          padding="6px"
          onClick={() => {
            onSelection(null);
          }}
        >
          Clear
        </Button>
      )}
    </>
  );
};

export default GenreList;
