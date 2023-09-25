import * as React from 'react'

type Props = {
  direction?: 'horizontal' | 'vertical'
  scrollRate?: number
} & Omit<React.HTMLProps<HTMLDivElement>, 'onWheel'>

declare function Scrollbun(props: Props): React.ReactElement

export default Scrollbun
