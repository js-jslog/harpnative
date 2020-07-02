import React from 'react'

import { MenuContainer} from '../../MenuContainer'
import type { MenuProps } from '../../../types'
import { ApparatusOption, DisplayModeOption } from '../../../MenuOptions'


export const LayoutMenu = (props: MenuProps): React.ReactElement => {
  return (
    <MenuContainer>
      <ApparatusOption {...props}/>
      <DisplayModeOption {...props}/>
    </MenuContainer>
  )
}
