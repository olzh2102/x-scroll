import * as React from "react";

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
  const style = {
    vertical: { overflowY: "scroll" },
    horizontal: { overflowX: "scroll" },
  };

  function scroll(scrollRate: number) {
    return (e: React.WheelEvent) => {
      if (direction === "vertical") return;

      const container = e.currentTarget;

      const isReachedRight = container.scrollLeft === 0;

      const isReachedLeft =
        container.scrollWidth - container.getBoundingClientRect().width ===
        container.scrollLeft;

      if (!isReachedRight && !isReachedLeft) {
        e.preventDefault();
        e.stopPropagation();
      }

      container.scrollLeft += e.deltaY * scrollRate;
      container.scrollLeft += e.deltaX * scrollRate;
    };
  }

  return (
    <div
      onWheel={scroll(scrollRate)}
      style={style[direction] as React.CSSProperties}
      className={className}
    >
      {children}
    </div>
  );
}

export default Scroller;
