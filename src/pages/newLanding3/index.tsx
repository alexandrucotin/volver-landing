/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useRef, useEffect, useState } from "react";
import {
  motion,
  useTransform,
  useScroll,
  MotionValue,
  AnimatePresence,
} from "framer-motion";
import data from "../../../public/data/images.json";
import { useResponsiveValues } from "../../core/custom-hooks/useResponsiveValues";
import MainLogo from "../../components/molecules/main-logo";
import { Link } from "react-router-dom";

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
  zIndex: number;
  scrollY: MotionValue<number>;
  projectId: string;
}
const ParallaxImage: React.FC<AnimationObject> = ({
  src,
  backgroundColor,
  margin,
  width,
  scrollY,
  zIndex,
  projectId,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [elementTop, setElementTop] = useState(0);
  const [elementHeight, setElementHeight] = useState(0);
  const { responsiveWidth, responsiveMargin } = useResponsiveValues(
    width,
    margin
  );
  const [isHovered, setIsHovered] = useState(false);

  const updateElementPositions = () => {
    const element = ref.current;
    if (element) {
      const rect = element.getBoundingClientRect();
      setElementTop(rect.top + window.scrollY);
      setElementHeight(rect.height);
    }
  };

  useEffect(() => {
    updateElementPositions();
    window.addEventListener("resize", updateElementPositions);
    window.addEventListener("scroll", updateElementPositions);

    return () => {
      window.removeEventListener("resize", updateElementPositions);
      window.removeEventListener("scroll", updateElementPositions);
    };
  }, [ref, scrollY]);

  const opacity = useTransform(
    scrollY,
    [
      elementTop - window.innerHeight,
      elementTop - window.innerHeight * 0.7,
      elementTop + elementHeight / 3,
      elementTop + elementHeight,
    ],
    [1, 0, 0, 1]
  );

  const scrollPercentage = useTransform(
    scrollY,
    [elementTop - window.innerHeight, elementTop - window.innerHeight / 1.5],
    [0.25, 1]
  );

  return (
    <motion.div ref={ref} className="parallax-image-container">
      <motion.div
        style={{
          originX: 0,
          scale: scrollPercentage,
          margin: responsiveMargin,
          width: responsiveWidth,
          zIndex: zIndex,
        }}
        transition={{ type: "spring", stiffness: 300 }}
        className="container"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Link to={`/portfolio/${projectId}`} key={projectId}>
          <img src={src} alt="" className="parallax-image" />

          <motion.div
            className="overlay"
            style={{
              backgroundColor,
              opacity,
            }}
          ></motion.div>
          <AnimatePresence>
            {isHovered && (
              <motion.div
                className="rounded-circle"
                style={{
                  backgroundColor,
                }}
                initial={{
                  opacity: 0,
                  scale: 0,
                  translateX: "-50%",
                  translateY: "-50%",
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  translateX: "-50%",
                  translateY: "-50%",
                }}
                exit={{
                  opacity: 0,
                  scale: 0,
                  translateX: "-50%",
                  translateY: "-50%",
                }}
              ></motion.div>
            )}
          </AnimatePresence>
        </Link>
      </motion.div>
    </motion.div>
  );
};

const NewLanding: React.FC = () => {
  const { scrollY } = useScroll();
  const [displayedItems, setDisplayedItems] = useState(data.imgs);
  const loader = useRef(null);

  const handleObserver = (entities: any) => {
    const target = entities[0];
    if (target.isIntersecting) {
      const newItems = displayedItems.concat(data.imgs);
      setDisplayedItems(newItems);
    }
  };
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "20px",
      threshold: 1.0,
    };

    const observer = new IntersectionObserver(handleObserver, options);
    if (loader.current) {
      observer.observe(loader.current);
    }
  }, [displayedItems]);

  return (
    <>
      <div className="new-landing">
        <div className="">
          {displayedItems.map(
            (
              { backgroundColor, src, margin, width, zIndex, projectId },
              index
            ) => (
              <ParallaxImage
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
        </div>
        <div ref={loader} className="loading"></div>
        <MainLogo />
      </div>
    </>
  );
};

export default NewLanding;
