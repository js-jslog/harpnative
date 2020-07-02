import React from 'react'

import type {CovariantMenuProps} from '../types'
import { DisplayModeOption, HarpKeyOption, RootPitchOption, PozitionOption } from '../../MenuOptions'
import {MenuContainer} from '../../MenuContainer'


export const CovariantMenu = (props: CovariantMenuProps): React.ReactElement => {
  return (
    <MenuContainer>
      <HarpKeyOption {...props} />
      <PozitionOption {...props} />
      <RootPitchOption {...props} />
      <DisplayModeOption {...props}/>
    </MenuContainer>
  )
}
