import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";
import useGameQueryStore from "../store.ts/store";

export const NavBar = () => {
  const setSearchText = useGameQueryStore((s) => s.setSearchText);

  return (
    <HStack justifyContent="space-between" padding="10px">
      <Link to="/" onClick={() => setSearchText("")}>
        <Image src={logo} boxSize="60px" objectFit="cover" />
      </Link>
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};
