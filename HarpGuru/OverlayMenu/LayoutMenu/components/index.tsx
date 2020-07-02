import React from 'react'

import type { LayoutMenuProps } from '../types'
import { ApparatusOption, DisplayModeOption } from '../../MenuOptions'
import { MenuContainer} from '../../MenuContainer'


export const LayoutMenu = (props: LayoutMenuProps): React.ReactElement => {
  return (
    <MenuContainer>
      <ApparatusOption {...props}/>
      <DisplayModeOption {...props}/>
    </MenuContainer>
  )
}
