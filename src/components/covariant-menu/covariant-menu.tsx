import React from 'react'

import { MenuContainer } from '../menu-container'
import {
  DisplayModeOption,
  HarpKeyOption,
  RootPitchOption,
  PozitionOption,
} from '../../Menus/Options'

export const CovariantMenu = (): React.ReactElement => {
  return (
    <MenuContainer>
      <HarpKeyOption />
      <PozitionOption />
      <RootPitchOption />
      <DisplayModeOption />
    </MenuContainer>
  )
}
