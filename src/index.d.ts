import * as React from "react";

type Props = {
  children: React.ReactNode;
  direction?: "horizontal" | "vertical";
  scrollRate?: number;
  className?: string;
};

declare function HorizontalScroll(props: Props): React.ReactElement;

export default HorizontalScroll;
