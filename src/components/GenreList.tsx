import { Box, HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import { BarLoader } from "react-spinners";

const GenreList = () => {
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
            <Text fontSize="lg">{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
