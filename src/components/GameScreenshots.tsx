import {
  Box,
  Image,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  SimpleGrid,
  useDisclosure,
} from "@chakra-ui/react";
import useScreenshots from "../hooks/useScreenshots";
import Screenshot from "../entities/Screenshot";
import { useState } from "react";

interface Props {
  gameId: number;
}

export const GameScreenshots = ({ gameId }: Props) => {
  const { data, isLoading, error } = useScreenshots(gameId);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [image, setImage] = useState({} as Screenshot);

  if (isLoading) return null;

  if (error) throw error;

  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        allowPinchZoom
        closeOnEsc
        size="5xl"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <Image key={image.id} src={image.image} onClick={onOpen} />
        </ModalContent>
      </Modal>

      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2}>
        {data?.results.map((file) => (
          <Image
            key={file.id}
            src={file.image}
            _hover={{
              transform: "scale(1.02)",
              transition: "transform .15s ease-in",
            }}
            borderRadius={5}
            onClick={() => {
              setImage(file);
              onOpen();
              console.log(image);
            }}
          />
        ))}
      </SimpleGrid>
    </>
  );
};
