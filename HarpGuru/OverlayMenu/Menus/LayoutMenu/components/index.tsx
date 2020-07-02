import React from 'react'

import type { LayoutMenuProps } from '../types'
import { MenuContainer} from '../../MenuContainer'
import { ApparatusOption, DisplayModeOption } from '../../../MenuOptions'


export const LayoutMenu = (props: LayoutMenuProps): React.ReactElement => {
  return (
    <MenuContainer>
      <ApparatusOption {...props}/>
      <DisplayModeOption {...props}/>
    </MenuContainer>
  )
}
