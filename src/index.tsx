import * as React from 'react'

type Props = {
  direction?: 'horizontal' | 'vertical'
  scrollRate?: number
} & Omit<React.HTMLProps<HTMLDivElement>, 'onWheel'>

export function Scroller({
  children,
  style: s,
  direction = 'horizontal',
  scrollRate = 0.5,
  ...rest
}: Props) {
  const style = {
    vertical: { overflowY: 'scroll' },
    horizontal: { overflowX: 'scroll', display: 'flex' },
  }

  function scroll(scrollRate: number) {
    return (e: React.WheelEvent) => {
      if (direction === 'vertical') return

      const container = e.currentTarget
      const containerWidth = container.getBoundingClientRect().width

      const isReachedLeftEdge = container.scrollLeft === 0

      const isReachedRightEdge = container.scrollLeft === container.scrollWidth - containerWidth

      if (!isReachedLeftEdge && !isReachedRightEdge) {
        e.preventDefault()
        e.stopPropagation()
      }

      container.scrollLeft += e.deltaY * scrollRate
      container.scrollLeft += e.deltaX * scrollRate
    }
  }

  return (
    <div
      onWheel={scroll(scrollRate)}
      style={{
        ...s,
        ...(style[direction] as React.CSSProperties),
      }}
      {...rest}
    >
      {children}
    </div>
  )
}

export default Scroller
