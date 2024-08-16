import {
  Box,
  GridItem,
  HStack,
  SimpleGrid,
  Skeleton,
  SkeletonText,
} from "@chakra-ui/react";
import React from "react";

const GameDetailSkeleton = () => {
  return (
    <Box marginTop={14}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} paddingX={5}>
        <GridItem>
          <Skeleton height="32px" width="50%" />
          <SkeletonText
            marginTop={3}
            noOfLines={3}
            skeletonHeight={3}
            spacing={3}
          />
          <SimpleGrid columns={2} as="dl" marginTop={8}>
            <Box height={36}>
              <SkeletonText
                noOfLines={1}
                skeletonHeight={6}
                spacing={3}
                width="50%"
              />
            </Box>
            <Box height={36}>
              <SkeletonText
                noOfLines={1}
                skeletonHeight={6}
                spacing={3}
                width="50%"
              />
            </Box>
            <Box height={36}>
              <SkeletonText
                noOfLines={1}
                skeletonHeight={6}
                spacing={3}
                width="50%"
              />
            </Box>
            <Box height={36}>
              <SkeletonText
                noOfLines={1}
                skeletonHeight={6}
                spacing={3}
                width="50%"
              />
            </Box>
          </SimpleGrid>
        </GridItem>
        <GridItem>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2}>
            <Skeleton height="250px" borderRadius={5} />
            <Skeleton height="250px" borderRadius={5} />
            <Skeleton height="250px" borderRadius={5} />
            <Skeleton height="250px" borderRadius={5} />
          </SimpleGrid>
        </GridItem>
      </SimpleGrid>
    </Box>
  );
};

export default GameDetailSkeleton;
