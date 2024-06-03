import { useScroll } from "framer-motion";
import MainLogo from "../../molecules/main-logo";
import data from "../../../../public/data/images.json";
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

const ImagesContainer: React.FC = () => {
  const { scrollY } = useScroll();

  return (
    <div className="images-section">
      {[...data.imgs, ...data.imgs].map(
        ({ backgroundColor, src, margin, width, zIndex, projectId }, index) => (
          <AnimatedImage
            key={index}
            margin={margin}
            width={width}
            backgroundColor={backgroundColor}
            src={src}
            scrollY={scrollY}
            zIndex={zIndex}
            projectId={projectId}
          />
        )
      )}
      <MainLogo />
    </div>
  );
};

export default ImagesContainer;
