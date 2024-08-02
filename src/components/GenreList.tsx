import { Box, Button, HStack, Image, List, ListItem } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import { BarLoader } from "react-spinners";

interface Props {
  onSelection: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelection, selectedGenre }: Props) => {
  const { data, loading, error } = useGenres();

  if (error) return null;

  if (loading)
    return (
      <Box paddingTop={4} justifyContent="center">
        <BarLoader color="#2d3748" height="6" width="100%" />
      </Box>
    );

  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Button
              isTruncated
              fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
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
  );
};

export default GenreList;
