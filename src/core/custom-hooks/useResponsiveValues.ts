import { Grid } from "antd";
import { useEffect, useState } from "react";

const { useBreakpoint } = Grid;

export const useResponsiveValues = (
  width: { desktop: string; tablet: string; mobile: string },
  margin: { desktop: string; tablet: string; mobile: string }
) => {
  const breakpoint = useBreakpoint();
  const [responsiveWidth, setResponsiveWidth] = useState(width.mobile);
  const [responsiveMargin, setResponsiveMargin] = useState(margin.mobile);

  useEffect(() => {
    if (breakpoint.xs) {
      setResponsiveWidth(width.mobile);
      setResponsiveMargin(margin.mobile);
    } else if (breakpoint.sm || breakpoint.md) {
      setResponsiveWidth(width.tablet);
      setResponsiveMargin(margin.tablet);
    } else {
      setResponsiveWidth(width.desktop);
      setResponsiveMargin(margin.desktop);
    }
  }, [breakpoint, width, margin]);

  return { responsiveWidth, responsiveMargin };
};
