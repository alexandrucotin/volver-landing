import { useScroll } from "framer-motion";
import MainLogo from "../../molecules/main-logo";
import data from "../../../../public/data/images.json";
import AnimatedImage from "../animated-image";
import { useEffect, useState } from "react";
import useLoadingStore from "../../../core/store/loading.store";

const ImagesContainer: React.FC = () => {
  const { scrollY } = useScroll();
  const { setLoading } = useLoadingStore((store) => store);
  const [resourcesLoaded, setResourcesLoaded] = useState<boolean[]>([]);
  const [startTime] = useState(Date.now());

  const onMediaLoad = () => {
    setResourcesLoaded((oldState) => oldState.concat([true]));
  };

  useEffect(() => {
    if (data.imgs.length * 2 === resourcesLoaded.length) {
      const elapsedTime = Date.now() - startTime;
      const remainingTime = 2000 - elapsedTime;
      if (remainingTime > 0) {
        setTimeout(() => setLoading(false), remainingTime);
      } else {
        setLoading(false);
      }
    }
  }, [resourcesLoaded, setLoading, startTime]);

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
            onImgLoad={onMediaLoad}
          />
        )
      )}
      <MainLogo />
    </div>
  );
};

export default ImagesContainer;
