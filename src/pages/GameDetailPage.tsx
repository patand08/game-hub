import { Box, GridItem, Heading, HStack, SimpleGrid } from "@chakra-ui/react";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { Link, useParams } from "react-router-dom";
import BarLoarder from "../components/BarLoarder";
import ExpandableText from "../components/ExpandableText";
import GameAttributes from "../components/GameAttributes";
import { GameScreenshots } from "../components/GameScreenshots";
import GameTrailer from "../components/GameTrailer";
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
    <Box>
      <HStack _hover={{ color: "gray" }}>
        <Link to="/">
          <MdOutlineKeyboardArrowLeft size={48} title="Return" />
        </Link>
      </HStack>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} paddingX={5}>
        <GridItem>
          <Heading marginBottom={1}>{game.name}</Heading>
          <ExpandableText>{game.description_raw}</ExpandableText>
          <GameAttributes game={game} />
        </GridItem>
        <GridItem>
          <GameTrailer gameId={game.id} />
          <GameScreenshots gameId={game.id} />
        </GridItem>
      </SimpleGrid>
    </Box>
  );
};

export default GameDetailPage;
