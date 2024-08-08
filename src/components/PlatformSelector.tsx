import {
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatform from "../hooks/usePlatform";
import usePlatforms, { Platform } from "../hooks/usePlatforms";

interface Props {
  onSelectPlatform: (platform: Platform | null) => void;
  selectedPlatformId?: number;
}

const PlatformSelector = ({ onSelectPlatform, selectedPlatformId }: Props) => {
  const { data, error } = usePlatforms();
  const platform = usePlatform(selectedPlatformId);

  if (error) return null;
  return (
    <Flex marginRight={5} alignContent="center">
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
          fontWeight="bold"
          fontSize="md"
          colorScheme="gray"
          marginLeft={5}
          onClick={() => {
            onSelectPlatform(null);
          }}
          title="Clear platform"
        >
          Clear
        </Button>
      )}
    </Flex>
  );
};

export default PlatformSelector;
