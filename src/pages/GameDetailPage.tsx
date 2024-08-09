import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import BarLoarder from "../components/BarLoarder";
import { Box, Heading } from "@chakra-ui/react";
import ExpandableText from "../components/ExpandableText";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading)
    return (
      <Box paddingX={5}>
        <BarLoarder />
      </Box>
    );

  if (error || !game) throw error;

  return (
    <>
      <Heading>{game.name}</Heading>
      <ExpandableText>{game.description_raw}</ExpandableText>
    </>
  );
};

export default GameDetailPage;
