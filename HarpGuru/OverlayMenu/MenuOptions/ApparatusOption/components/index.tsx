import React from 'react'
import {HarpStrata} from 'harpstrata'

import type { ApparatusOptionProps } from '../types'
import { nudgeHarpStrataByApparatus } from '../nudgeHarpStrataByApparatus'
import { OptionContainer } from '../../OptionContainer'


const getPartiallyAppliedLayoutNudgeFunction = (activeHarpStrata: HarpStrata): (direction: 'UP' | 'DOWN') => HarpStrata => {
  return (direction: 'UP' | 'DOWN'): HarpStrata => {
    return nudgeHarpStrataByApparatus(activeHarpStrata, direction)
  }
}

export const ApparatusOption = (props: ApparatusOptionProps): React.ReactElement => {
  const { activeHarpStrata, setActiveHarpStrata } = props
  const { apparatus: {id: apparatusId} } = activeHarpStrata

  const layoutOptionContainerProps = {
    title: 'Layout',
    optionId: apparatusId,
    nudgeFunction: getPartiallyAppliedLayoutNudgeFunction(activeHarpStrata),
    setActiveHarpStrata,
  }

  return <OptionContainer {...layoutOptionContainerProps}/>
}
