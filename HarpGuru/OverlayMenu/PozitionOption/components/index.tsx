import React from 'react'
import {HarpStrata} from 'harpstrata'

import { nudgeHarpStrataByPozition } from '../nudgeHarpStrataByPozition'
import type { OptionControlProps } from '../../types'
import { OptionContainer } from '../../OptionContainer'
import type { DisplayModes } from '../../../HarpFace'


type FullNudgeFunction = (arg0: HarpStrata, arg1: 'UP' | 'DOWN', arg2: DisplayModes) => HarpStrata
type PartiallyAppliedNudgeFunction = (arg0: 'UP' | 'DOWN') => HarpStrata

const partiallyApplyCovariantNudgeFunction = (nudgeFunction: FullNudgeFunction, activeHarpStrata: HarpStrata, activeDisplayMode: DisplayModes): PartiallyAppliedNudgeFunction => {
  return (direction: 'UP' | 'DOWN') => {
    return nudgeFunction(activeHarpStrata, direction, activeDisplayMode)
  }
}

export const PozitionOption = (props: OptionControlProps): React.ReactElement => {
  const { activeHarpStrata, setActiveHarpStrata, activeDisplayMode } = props
  const { pozitionId } = activeHarpStrata

  const pozitionOptionContainerProps = {
    title: 'Position',
    optionId: pozitionId,
    nudgeFunction: partiallyApplyCovariantNudgeFunction(nudgeHarpStrataByPozition, activeHarpStrata, activeDisplayMode),
    setActiveHarpStrata,
  }

  return <OptionContainer {...pozitionOptionContainerProps}/>
}
