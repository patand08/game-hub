import {
  Box,
  Card,
  CardBody,
  Heading,
  HStack,
  Image,
  Text,
} from "@chakra-ui/react";
import Game from "../entities/Game";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";
import GameCardContainer from "./GameCardContainer";
import Emoji from "./Emoji";
import { Link } from "react-router-dom";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <GameCardContainer>
      <Link to={"/games/" + game.slug}>
        <Card
          height="100%"
          _hover={{
            textColor: "gray",
          }}
        >
          <Image src={getCroppedImageUrl(game.background_image)} />
          <CardBody>
            <HStack justifyContent={"space-between"}>
              <PlatformIconList
                platforms={game.parent_platforms.map((p) => p.platform)}
              />
              <CriticScore score={game.metacritic} />
            </HStack>
            <Heading fontSize="2xl">
              <Box>{game.name}</Box>
              {/* <Emoji rating={game.rating_top} /> I dont want the emojis*/}
            </Heading>
          </CardBody>
        </Card>
      </Link>
    </GameCardContainer>
  );
};

export default GameCard;
