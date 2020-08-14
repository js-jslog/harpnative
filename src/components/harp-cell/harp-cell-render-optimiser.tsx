import React from 'react'

import type { Coord } from '../../types'

import { usePositionAnalysis } from './hooks'
import { HarpCell } from './harp-cell'

export type YXCoord = [Coord, Coord]

type HarpCellProps = {
  readonly yxCoord: YXCoord
}

export const HarpCellRenderOptimiser = ({
  yxCoord,
}: HarpCellProps): React.ReactElement => {
  const { thisDegreeId, thisPitchId, thisIsActiveId } = usePositionAnalysis(
    yxCoord
  )

  return React.useMemo(() => <HarpCell yxCoord={yxCoord} />, [
    thisDegreeId,
    thisPitchId,
    thisIsActiveId,
  ])
}
