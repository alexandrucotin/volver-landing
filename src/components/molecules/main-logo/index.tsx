import React, { useCallback, useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import volverLogo from "../../../assets/logo.png";

interface MainLogoProps {
  targetRef: React.RefObject<HTMLDivElement>;
}
const MainLogo: React.FC<MainLogoProps> = ({ targetRef }) => {
  const stickyRef = useRef<HTMLDivElement>(null);
  const [elementTop, setElementTop] = useState(0);
  const { scrollY } = useScroll();

  const updateElementPositions = useCallback(() => {
    const element = targetRef.current;
    if (element) {
      const rect = element.getBoundingClientRect();
      setElementTop(rect.top + window.scrollY);
    }
  }, [targetRef]);

  const yTransition = useTransform(
    scrollY,
    [elementTop - window.innerHeight, elementTop - window.innerHeight / 12],
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

  useEffect(() => {
    window.addEventListener("resize", updateElementPositions);
    return () => {
      window.removeEventListener("resize", updateElementPositions);
    };
  }, [updateElementPositions]);
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
