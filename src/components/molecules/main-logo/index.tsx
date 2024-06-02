import React from "react";
import logo from "../../../assets/logo.png";

interface MainLogoProps {}

const MainLogo: React.FC<MainLogoProps> = () => {
  /*   const stickyRef = useRef<HTMLDivElement>(null);
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
    [window.innerHeight - window.innerHeight * 0.2, 0]
  );

  const yScale = useTransform(
    scrollY,
    [elementTop - window.innerHeight, elementTop - window.innerHeight / 4],
    ["20vh", "10vh"]
  ); 

  const backgroundColor = useTransform(
    scrollY,
    [
      elementTop - window.innerHeight + window.innerHeight * 0.2,
      elementTop - window.innerHeight / 4,
    ],
    ["rgba(255,255,255,0)", "rgba(255,255,255,1)"]
  );
*/
  return (
    <div className="main-logo">
      <div className="main-logo-container">
        <div className="main-logo-container-img">
          <img src={logo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default MainLogo;
