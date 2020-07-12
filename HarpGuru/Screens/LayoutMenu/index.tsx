import React from 'react'
import type { ReactElement } from 'react'

import { AnimatedMenuContainer, LayoutMenu } from '../../Menus'
import type { LayoutMenuProps } from '../../Menus'
import { MenuStates } from '../../HarpGuru'

type LayoutMenuScreenProps = LayoutMenuProps & {
  readonly menuState: MenuStates
}

export const LayoutMenuScreen = (props: LayoutMenuScreenProps): ReactElement => {
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
