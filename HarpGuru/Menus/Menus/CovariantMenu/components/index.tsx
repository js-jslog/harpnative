import React from 'react'

import { MenuContainer } from '../../MenuContainer'
import type { MenuProps } from '../../../types'
import type { RootPitchOptionProps } from '../../../Options/RootPitchOption/types'
import type { PozitionOptionProps } from '../../../Options/PozitionOption/types'
import type { HarpKeyOptionProps } from '../../../Options/HarpKeyOption/types'
import type { DisplayModeOptionProps } from '../../../Options/DisplayModeOption/types'
import {
  DisplayModeOption,
  HarpKeyOption,
  RootPitchOption,
  PozitionOption,
} from '../../../Options'

export type CovariantMenuProps = HarpKeyOptionProps & PozitionOptionProps & RootPitchOptionProps & DisplayModeOptionProps

export const CovariantMenu = (props: MenuProps): React.ReactElement => {
  return (
    <MenuContainer>
      <HarpKeyOption {...props} />
      <PozitionOption {...props} />
      <RootPitchOption {...props} />
      <DisplayModeOption {...props} />
    </MenuContainer>
  )
}
