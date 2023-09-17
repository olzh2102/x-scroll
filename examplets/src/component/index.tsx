import * as React from "react";

import styles from "./index.module.css";

type Props = {
  children: React.ReactNode;
  direction?: "horizontal" | "vertical";
  scrollRate?: number;
  className?: string;
};

export function Scroller({
  children,
  direction = "horizontal",
  scrollRate = 0.5,
  className = "",
}: Props) {
  const ref = React.useRef<any>(null);

  React.useEffect(() => {
    const target = ref.current;
    if (!target || direction === "vertical") return;

    function onWheel(e: WheelEvent) {
      e.preventDefault();

      const isReachedRight = target.scrollLeft === 0;

      const isReachedLeft =
        target.scrollWidth - target.getBoundingClientRect().width ===
        target.scrollLeft;

      if (!isReachedRight && !isReachedLeft) e.stopPropagation();

      target.scrollLeft += e.deltaY * scrollRate;
      target.scrollLeft += e.deltaX * scrollRate;
    }

    target.addEventListener("wheel", onWheel);

    return () => {
      target.removeEventListener("wheel", onWheel);
    };
  }, [direction, scrollRate]);

  return (
    <div
      ref={ref}
      className={`
        hidden-scrollbar 
        ${styles.base} 
        ${direction === "horizontal" ? styles.horizontal : styles.vertical} 
        ${className}
      `}
    >
      {children}
    </div>
  );
}

export default Scroller;
