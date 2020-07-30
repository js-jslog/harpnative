import React from 'react'

import { MenuContainer } from '../menu-container'
import {
  ApparatusOption,
  DisplayModeOption,
  ExperienceModeOption,
} from '../../Menus/Options'

export const LayoutMenu = (): React.ReactElement => {
  return (
    <MenuContainer>
      <ApparatusOption />
      <ExperienceModeOption />
      <DisplayModeOption />
    </MenuContainer>
  )
}
