import React from 'react'

import type { HarpRowProps } from '../HarpRow'
import { HarpCell } from '../HarpCell'
import type { YXCoord } from '../HarpCell'

export const getHarpCells = (props: HarpRowProps): React.ReactElement[] => {
  const {
    activeHarpStrata: { degreeMatrix },
  } = props
  const { yCoord } = props

  let [matrixRow] = degreeMatrix
  if (props.xRange) matrixRow = [ ...matrixRow.slice(props.xRange[0], props.xRange[1])]

  const harpCells = matrixRow.map((_, index) => {
    const yxCoord: YXCoord = [yCoord, (index + (props.xRange && props.xRange[0] || 0))]
    // TODO: this has one extra props than required (the yCoords is included which is messy)
    return <HarpCell key={index} {...props} yxCoord={yxCoord} />
  })

  return harpCells
}
