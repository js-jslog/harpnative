import React from 'react'

import { MenuContainer } from '../../MenuContainer'
import type { DisplayModeOptionProps } from '../../../Options/DisplayModeOption/types'
import type { ApparatusOptionProps } from '../../../Options/ApparatusOption/types'
import { ApparatusOption, DisplayModeOption } from '../../../Options'

export type LayoutMenuProps = ApparatusOptionProps & DisplayModeOptionProps

export const LayoutMenu = (props: LayoutMenuProps): React.ReactElement => {
  return (
    <MenuContainer>
      <ApparatusOption {...props} />
      <DisplayModeOption {...props} />
    </MenuContainer>
  )
}
