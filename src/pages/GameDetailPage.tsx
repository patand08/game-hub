import { Box, Heading } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import BarLoarder from "../components/BarLoarder";
import ExpandableText from "../components/ExpandableText";
import GameAttributes from "../components/GameAttributes";
import useGame from "../hooks/useGame";

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

      <GameAttributes game={game} />
    </>
  );
};

export default GameDetailPage;