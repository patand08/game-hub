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
import usePlatforms from "../hooks/usePlatforms";
import useGameQueryStore from "../store.ts/store";

const PlatformSelector = () => {
  const { data, error } = usePlatforms();
  const selectedPlatformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const setPlatformId = useGameQueryStore((s) => s.setPlatformId);

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
            <MenuItem key={plat.id} onClick={() => setPlatformId(plat.id)}>
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
            setPlatformId(undefined);
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
