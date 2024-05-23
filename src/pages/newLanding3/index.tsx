import React, { useRef, useEffect, useState } from "react";
import { motion, useTransform, useScroll } from "framer-motion";

interface ParallaxImageProps {
  src: string;
  overlayColor: string;
}

const ParallaxImage: React.FC<ParallaxImageProps> = ({ src, overlayColor }) => {
  const { scrollY } = useScroll();
  const ref = useRef<HTMLDivElement>(null);
  const [elementTop, setElementTop] = useState(0);
  const [elementHeight, setElementHeight] = useState(0);

  useEffect(() => {
    scrollY.onChange((value) => {
      console.group("SCROLL");
      console.log("elementTop", elementTop);
      console.log("scrollY", value);
      console.log(
        "elementTop - window.innerHeight ",
        elementTop - window.innerHeight
      );
      console.log(
        "elementTop - window.innerHeight /2",
        elementTop - window.innerHeight / 2
      );
      console.log(
        "elementTop + elementHeight / 2",
        elementTop + elementHeight / 2
      );
      console.log("elementTop + elementHeight ", elementTop + elementHeight);
      console.groupEnd();
    });
  }, [elementTop, scrollY, elementHeight]);

  useEffect(() => {
    const element = ref.current;
    if (element) {
      const rect = element.getBoundingClientRect();
      setElementTop(rect.top + window.scrollY);
      setElementHeight(rect.height);
    }
  }, [ref]);

  const opacity = useTransform(
    scrollY,
    [
      elementTop - window.innerHeight + elementHeight,
      elementTop - window.innerHeight / 2,
      elementTop,
      elementTop + elementHeight / 1.5,
    ],
    [1, 0, 0, 1]
  );

  return (
    <motion.div ref={ref} className="parallax-image-container">
      <div className="container">
        <img
          src={src}
          alt=""
          width={150}
          height={150}
          className="parallax-image"
        />
        <motion.div
          className="overlay"
          style={{
            backgroundColor: overlayColor,
            opacity: opacity,
          }}
        ></motion.div>
      </div>
    </motion.div>
  );
};

const NewLandingPage3: React.FC = () => {
  return (
    <div>
      <ParallaxImage
        src="https://globalnews.ca/wp-content/uploads/2023/05/Screen-Shot-2023-04-21-at-9.22.06-AM.png?w=1200"
        overlayColor="rgba(255, 0, 0)"
      />

      <div style={{ height: "100vh" }}></div>
      <ParallaxImage
        src="https://globalnews.ca/wp-content/uploads/2023/05/Screen-Shot-2023-04-21-at-9.22.06-AM.png?w=1200"
        overlayColor="rgba(255, 0, 0)"
      />
      {/*           <ParallaxImage
            src="https://globalnews.ca/wp-content/uploads/2023/05/Screen-Shot-2023-04-21-at-9.22.06-AM.png?w=1200"
            overlayColor="rgba(0, 255, 0, 0.5)"
          />
          <ParallaxImage
            src="https://globalnews.ca/wp-content/uploads/2023/05/Screen-Shot-2023-04-21-at-9.22.06-AM.png?w=1200"
            overlayColor="rgba(0, 0, 255, 0.5)"
          />
          <ParallaxImage
            src="https://globalnews.ca/wp-content/uploads/2023/05/Screen-Shot-2023-04-21-at-9.22.06-AM.png?w=1200"
            overlayColor="rgba(255, 0, 0, 0.5)"
          /> */}

      <div style={{ height: "100vh" }}></div>
    </div>
  );
};

export default NewLandingPage3;
