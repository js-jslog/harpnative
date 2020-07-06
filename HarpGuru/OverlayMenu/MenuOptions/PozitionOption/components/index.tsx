import React from 'react'
import {HarpStrata} from 'harpstrata'

import type { PozitionOptionProps } from '../types'
import { nudgeHarpStrataByPozition } from '../nudgeHarpStrataByPozition'
import { OptionContainer } from '../../OptionContainer'
import type { DisplayModes } from '../../../../HarpFace'


type FullNudgeFunction = (arg0: HarpStrata, setActiveHarpStrata: (arg0: HarpStrata) => void, arg1: 'UP' | 'DOWN', arg2: DisplayModes) => void
type PartiallyAppliedNudgeFunction = (arg0: 'UP' | 'DOWN') => void

const partiallyApplyCovariantNudgeFunction = (nudgeFunction: FullNudgeFunction, activeHarpStrata: HarpStrata, setActiveHarpStrata: (arg0: HarpStrata) => void, activeDisplayMode: DisplayModes): PartiallyAppliedNudgeFunction => {
  return (direction: 'UP' | 'DOWN') => {
    return nudgeFunction(activeHarpStrata, setActiveHarpStrata, direction, activeDisplayMode)
  }
}

export const PozitionOption = (props: PozitionOptionProps): React.ReactElement => {
  const { activeHarpStrata, setActiveHarpStrata, activeDisplayMode } = props
  const { pozitionId } = activeHarpStrata

  const pozitionOptionContainerProps = {
    title: 'Position',
    optionId: pozitionId,
    nudgeFunction: partiallyApplyCovariantNudgeFunction(nudgeHarpStrataByPozition, activeHarpStrata, setActiveHarpStrata, activeDisplayMode),
    setActiveHarpStrata,
  }

  return <OptionContainer {...pozitionOptionContainerProps}/>
}
