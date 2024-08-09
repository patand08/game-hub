import { Box } from "@chakra-ui/react";
import { BarLoader } from "react-spinners";

const BarLoarder = () => {
  return (
    <Box paddingTop={4} justifyContent="center">
      <BarLoader color="#2d3748" height="6px" width="100%" />
    </Box>
  );
};

export default BarLoarder;
