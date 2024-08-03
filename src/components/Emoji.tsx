import bullseye from "../assets/emojis/bulls-eye.webp";
import thumbsUp from "../assets/emojis/thumbs-up.webp";
import meh from "../assets/emojis/meh.webp";
import { Image, ImageProps } from "@chakra-ui/react";

interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;

  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "Meh", title: "Meh", boxSize: "25px" },
    4: {
      src: thumbsUp,
      alt: "Recommended",
      title: "Recommended",
      boxSize: "25px",
    },
    5: {
      src: bullseye,
      alt: "Exceptional",
      title: "Exceptional",
      boxSize: "35px",
    },
  };

  return <Image {...emojiMap[rating]} marginTop={2} />;
};

export default Emoji;
