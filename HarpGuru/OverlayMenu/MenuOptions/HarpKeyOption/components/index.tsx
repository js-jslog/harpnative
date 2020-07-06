import React from 'react'
import {HarpStrata} from 'harpstrata'

import type { HarpKeyOptionProps } from '../types'
import { nudgeHarpStrataByHarpKey } from '../nudgeHarpStrataByHarpKey'
import { OptionContainer } from '../../OptionContainer'
import type { DisplayModes } from '../../../../HarpFace'


type FullNudgeFunction = (arg0: HarpStrata, setActiveHarpStrata: (arg0: HarpStrata) => void, arg1: 'UP' | 'DOWN', arg2: DisplayModes) => void
type PartiallyAppliedNudgeFunction = (arg0: 'UP' | 'DOWN') => void

const partiallyApplyCovariantNudgeFunction = (nudgeFunction: FullNudgeFunction, activeHarpStrata: HarpStrata, setActiveHarpStrata: (arg0: HarpStrata) => void, activeDisplayMode: DisplayModes): PartiallyAppliedNudgeFunction => {
  return (direction: 'UP' | 'DOWN') => {
    nudgeFunction(activeHarpStrata, setActiveHarpStrata, direction, activeDisplayMode)
  }
}

export const HarpKeyOption = (props: HarpKeyOptionProps): React.ReactElement => {
  const { activeHarpStrata, setActiveHarpStrata, activeDisplayMode } = props
  const { harpKeyId } = activeHarpStrata

  const harpKeyOptionContainerProps = {
    title: 'Harp Key',
    optionId: harpKeyId,
    nudgeFunction: partiallyApplyCovariantNudgeFunction(nudgeHarpStrataByHarpKey, activeHarpStrata, setActiveHarpStrata, activeDisplayMode),
  }

  return <OptionContainer {...harpKeyOptionContainerProps}/>
}
