import { useEffect, useRef, useState } from "react";
import { AnimationObject } from "../images-section";
import { motion } from "framer-motion";
import { useResponsiveValues } from "../../../core/custom-hooks/useResponsiveValues";

interface ScrollAnimationElementProps extends AnimationObject {
  scrollY: {
    onChange: (handler: () => void) => void;
    clearListeners: () => void;
  };
}

const AnimatedImage: React.FC<ScrollAnimationElementProps> = ({
  backgroundColor,
  scrollY,
  width,
  margin,
  src,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [overlayOpacityPercentage, setOverlayOpacityPercentage] = useState(1);
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const { responsiveWidth, responsiveMargin } = useResponsiveValues(
    width,
    margin
  );

  useEffect(() => {
    const updateScrollPercentage = () => {
      const element = ref.current;
      if (!element) return;

      const rect = element.getBoundingClientRect(); // Ottiene le dimensioni e la posizione dell'elemento rispetto alla viewport
      const windowHeight = window.innerHeight; // Ottiene l'altezza della finestra del browser
      const { top, bottom } = rect; // Ottiene le proprietà 'top' e 'bottom' del rettangolo dell'elemento

      let overlayOpacity = 1;
      let percentage = 0;

      // Controlla se la metà dell'altezza dell'elemento è visibile nella metà della finestra
      if (top <= windowHeight / 2 && bottom >= windowHeight / 2) {
        overlayOpacity = 0;
        percentage = 1;
      } else if (top > windowHeight / 2) {
        // Controlla se la parte superiore dell'elemento è sopra la metà della finestra
        overlayOpacity = (top - windowHeight / 2) / (windowHeight / 2); // Calcola l'opacità in base alla distanza dalla metà della finestra
        percentage = 1 - (top - windowHeight / 2) / (windowHeight / 2); // Calcola la percentuale di scorrimento inversa rispetto alla distanza dalla metà della finestra
      } else if (bottom < windowHeight / 2) {
        // Controlla se la parte inferiore dell'elemento è sotto la metà della finestra
        overlayOpacity = (windowHeight / 2 - bottom) / (windowHeight / 2); // Calcola l'opacità in base alla distanza dalla metà della finestra
        percentage = 1; // Imposta la percentuale di scorrimento a 1
      }

      // Se l'elemento è completamente fuori dalla finestra, resetta la percentuale di scorrimento
      if (bottom < 0 || top > windowHeight) {
        percentage = 0; // Imposta la percentuale di scorrimento a 0
      }

      // Aggiorna lo stato dell'opacità del sovrapposizione e la percentuale di scorrimento
      setOverlayOpacityPercentage(overlayOpacity);
      setScrollPercentage(percentage);
    };

    // Aggiunge un listener per l'evento di cambio dello scrollY
    scrollY.onChange(updateScrollPercentage);

    // Rimuove il listener quando il componente si smonta
    return () => scrollY.clearListeners();
  }, [scrollY]); // Il useEffect dipende da scrollY

  return (
    <motion.div
      ref={ref}
      style={{ scale: scrollPercentage }}
      className="animated-image"
    >
      <div
        className="animated-image-container"
        style={{ width: responsiveWidth, margin: responsiveMargin }}
      >
        <img src={src} alt="" />
        <motion.div
          className="animated-image-container-image-overlay"
          style={{
            backgroundColor: backgroundColor,
            opacity: overlayOpacityPercentage,
          }}
        ></motion.div>
      </div>
    </motion.div>
  );
};

export default AnimatedImage;
