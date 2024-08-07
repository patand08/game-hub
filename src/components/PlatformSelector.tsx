import {
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";
import { Platform } from "../hooks/useGames";
import { AiFillCloseCircle } from "react-icons/ai";

interface Props {
  onSelectPlatform: (platform: Platform | null) => void;
  selectedPlatform: Platform | null;
}

const PlatformSelector = ({ onSelectPlatform, selectedPlatform }: Props) => {
  const { data, error } = usePlatforms();

  if (error) return null;
  return (
    <Flex marginRight={selectedPlatform ? 1 : 5} alignContent="center">
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          {selectedPlatform?.name || "Platforms"}
        </MenuButton>
        <MenuList>
          {data?.results.map((plat) => (
            <MenuItem key={plat.id} onClick={() => onSelectPlatform(plat)}>
              {plat.name}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
      {selectedPlatform && (
        <Button
          variant="link"
          marginLeft={1}
          onClick={() => {
            onSelectPlatform(null);
          }}
        >
          <AiFillCloseCircle size="20px" />
        </Button>
      )}
    </Flex>
  );
};

export default PlatformSelector;
