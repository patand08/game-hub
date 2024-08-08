import { HStack, Switch, useColorMode } from "@chakra-ui/react";
import { BsFillSunFill, BsMoonStarsFill } from "react-icons/bs";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <HStack
      paddingLeft={2}
      title={colorMode === "dark" ? "Dark mode: On" : "Dark mode: Off"}
    >
      <Switch
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
        colorScheme="green"
      />
      {colorMode === "dark" ? (
        <BsMoonStarsFill size={16} />
      ) : (
        <BsFillSunFill size={18} />
      )}
    </HStack>
  );
};

export default ColorModeSwitch;
