import {
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms, { Platform } from "../hooks/usePlatforms";
import { AiFillCloseCircle } from "react-icons/ai";
import usePlatform from "../hooks/usePlatform";

interface Props {
  onSelectPlatform: (platform: Platform | null) => void;
  selectedPlatformId?: number;
}

const PlatformSelector = ({ onSelectPlatform, selectedPlatformId }: Props) => {
  const { data, error } = usePlatforms();
  const platform = usePlatform(selectedPlatformId);

  if (error) return null;
  return (
    <Flex marginRight={selectedPlatformId ? 1 : 5} alignContent="center">
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          {platform?.name || "Platforms"}
        </MenuButton>
        <MenuList>
          {data?.results.map((plat) => (
            <MenuItem key={plat.id} onClick={() => onSelectPlatform(plat)}>
              {plat.name}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
      {selectedPlatformId && (
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
