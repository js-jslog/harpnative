import { useGlobal } from 'reactn'
import React from 'react'

import type { Coord } from '../../types'

import { usePositionAnalysis, useDisplayValue, useToggleHarpCell, useSetPozitionRoot } from './hooks'
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
  const displayValue = useDisplayValue(yxCoord)

  const toggleHarpCell = useToggleHarpCell()
  const setPozitionRoot = useSetPozitionRoot()

  const [activeExperienceMode] = useGlobal('activeExperienceMode')

  const harpCellProps = {
    yxCoord,
    thisDegreeId,
    thisPitchId,
    thisIsActiveId,
    displayValue,
    toggleHarpCell,
    setPozitionRoot,
    activeExperienceMode
  }


  return React.useMemo(() => <HarpCell {...harpCellProps} />, [
    thisDegreeId,
    thisPitchId,
    thisIsActiveId,
    displayValue[0],
    displayValue[1]
  ])
}
