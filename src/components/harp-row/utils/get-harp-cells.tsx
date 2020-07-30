import React from 'react'

import { HarpCell } from '../../harp-cell'
import type { Coord, YXCoord } from '../../harp-cell'

type Props = {
  readonly yCoord: Coord
  readonly xRange: ReadonlyArray<number>
}

export const getHarpCells = (props: Props): React.ReactElement[] => {
  const { yCoord, ...harpCellPropsPart } = props
  const { xRange } = harpCellPropsPart

  const harpCells = xRange.map((xCoord) => {
    const yxCoord: YXCoord = [yCoord, xCoord]
    return <HarpCell key={xCoord} {...harpCellPropsPart} yxCoord={yxCoord} />
  })

  return harpCells
}
