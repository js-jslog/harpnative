import React from 'react'
import type { ReactElement } from 'react'

import type { ScreenProps } from '../types'
import { AnimatedMenuContainer, LayoutMenu } from '../../Menus'
import { MenuStates } from '../../HarpGuru'

type MenuScreenProps = ScreenProps & {
  readonly menuState: MenuStates
}

export const LayoutMenuScreen = (props: MenuScreenProps): ReactElement => {
  const { menuState } = props
  const { activeHarpStrata, setActiveHarpStrata, activeDisplayMode, setActiveDisplayMode } = props
  const covariantMenuProps = { activeHarpStrata, setActiveHarpStrata, activeDisplayMode, setActiveDisplayMode }
  return (
    <AnimatedMenuContainer
      onScreen={menuState === MenuStates.LayoutMenu}
    >
      <LayoutMenu {...covariantMenuProps} />
    </AnimatedMenuContainer>
  )
}
