import React, { useRef, useEffect, useState } from "react";
import { motion, useTransform, useScroll, MotionValue } from "framer-motion";
import data from "../../assets/data/images.json";
import { useResponsiveValues } from "../../core/custom-hooks/useResponsiveValues";
import MainLogo from "../../components/molecules/main-logo";
import ContactSection from "../../components/organisms/contact-section";
import FooterV2 from "../../components/molecules/footerV2";
import Services2 from "../../components/organisms/services-section-2";

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

  scrollY: MotionValue<number>;
}
const ParallaxImage: React.FC<AnimationObject> = ({
  src,
  backgroundColor,
  margin,
  width,
  scrollY,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [elementTop, setElementTop] = useState(0);
  const [elementHeight, setElementHeight] = useState(0);
  const { responsiveWidth, responsiveMargin } = useResponsiveValues(
    width,
    margin
  );

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
        }}
        transition={{ type: "spring", stiffness: 300 }}
        className="container"
      >
        <img src={src} alt="" className="parallax-image" />
        <motion.div
          className="overlay"
          style={{
            backgroundColor,
            opacity,
          }}
        ></motion.div>
      </motion.div>
    </motion.div>
  );
};

const NewLanding: React.FC = () => {
  const { scrollY } = useScroll();
  const targetRef = useRef<HTMLDivElement>(null);

  return (
    <div className="new-landing">
      <div className="" style={{ marginBottom: "5vh" }}>
        {data.imgs.map(({ backgroundColor, src, margin, width }, index) => (
          <ParallaxImage
            key={index}
            margin={margin}
            width={width}
            backgroundColor={backgroundColor}
            src={src}
            scrollY={scrollY}
          />
        ))}
      </div>
      <div className="" ref={targetRef}>
        <Services2 />
      </div>
      <MainLogo scrollY={scrollY} targetRef={targetRef} />
      <ContactSection />
      <FooterV2 />
    </div>
  );
};

export default NewLanding;
