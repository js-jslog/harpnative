import React from 'react'
import type { HarpStrata } from 'harpstrata'

import type { LayoutMenuProps } from '../types'
import { nudgeHarpStrataByApparatus } from '../nudgeHarpStrataByApparatus'
import { OptionContainer } from '../../OptionContainer'
import { MenuContainer} from '../../MenuContainer'

const getPartiallyAppliedNudgeFunction = (activeHarpStrata: HarpStrata): (direction: 'UP' | 'DOWN') => HarpStrata => {
  return (direction: 'UP' | 'DOWN'): HarpStrata => {
    return nudgeHarpStrataByApparatus(activeHarpStrata, direction)
  }
}

export const LayoutMenu = (props: LayoutMenuProps): React.ReactElement => {
  const { activeHarpStrata, setActiveHarpStrata } = props
  const { apparatus: { id: apparatusId } } = activeHarpStrata

  const layoutOptionContainerProps = {
    title: 'Layout',
    optionId: apparatusId,
    nudgeFunction: getPartiallyAppliedNudgeFunction(activeHarpStrata),
    setActiveHarpStrata,
  }

  return (
    <MenuContainer>
      <OptionContainer {...layoutOptionContainerProps}/>
    </MenuContainer>
  )
}
