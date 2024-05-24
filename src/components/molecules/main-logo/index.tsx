import React, { useCallback, useEffect, useRef, useState } from "react";
import { MotionValue, motion, useTransform } from "framer-motion";
import volverLogo from "../../../assets/logo.png";

interface MainLogoProps {
  targetRef: React.RefObject<HTMLDivElement>;
  scrollY: MotionValue<number>;
}

const MainLogo: React.FC<MainLogoProps> = ({ targetRef, scrollY }) => {
  const stickyRef = useRef<HTMLDivElement>(null);
  const [elementTop, setElementTop] = useState(0);

  const updateElementPositions = useCallback(() => {
    const element = targetRef.current;
    if (element) {
      const rect = element.getBoundingClientRect();
      setElementTop(rect.top + window.scrollY);
    }
  }, [targetRef]);

  useEffect(() => {
    updateElementPositions();
    window.addEventListener("resize", updateElementPositions);
    return () => {
      window.removeEventListener("resize", updateElementPositions);
    };
  }, [updateElementPositions]);

  useEffect(() => {
    const element = stickyRef.current;
    if (element) {
      const img = element.querySelector("img");
      if (img) {
        img.onload = () => {
          updateElementPositions();
        };
      }
    }
  }, [updateElementPositions]);

  const yTransition = useTransform(
    scrollY,
    [elementTop - window.innerHeight, elementTop - window.innerHeight / 11.5],
    [window.innerHeight - 100, 0]
  );

  const yScale = useTransform(
    scrollY,
    [elementTop - window.innerHeight, elementTop - window.innerHeight / 4],
    [200, 100]
  );

  const backgroundColor = useTransform(
    scrollY,
    [
      elementTop - window.innerHeight + 200,
      elementTop - window.innerHeight / 4,
    ],
    ["rgba(255,255,255,0)", "rgba(255,255,255,1)"]
  );

  return (
    <motion.div
      ref={stickyRef}
      className="main-logo"
      style={{
        top: yTransition,
        background: backgroundColor,
      }}
    >
      <motion.div
        style={{
          width: yScale,
        }}
      >
        <img src={volverLogo} alt="Volver studio logo" />
      </motion.div>
    </motion.div>
  );
};

export default MainLogo;
