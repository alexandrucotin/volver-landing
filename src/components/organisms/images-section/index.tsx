import { useScroll } from "framer-motion";
import AnimatedImage from "../animated-image";

export interface AnimationObject {
  src: string;
  margin: {
    desktop: string;
    tablet: string;
    mobile: string;
  };
  backgroundColor: string;
  width: {
    desktop: string;
    tablet: string;
    mobile: string;
  };
}

interface ScrollAnimationProps {
  images: AnimationObject[];
}

const ImagesContainer: React.FC<ScrollAnimationProps> = ({ images }) => {
  const { scrollY } = useScroll();

  return (
    <div>
      {images.map(({ backgroundColor, src, margin, width }, index) => (
        <AnimatedImage
          key={index}
          backgroundColor={backgroundColor}
          src={src}
          margin={margin}
          width={width}
          scrollY={scrollY}
        />
      ))}
    </div>
  );
};

export default ImagesContainer;
