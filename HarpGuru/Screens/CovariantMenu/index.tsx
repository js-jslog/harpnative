import React from 'react'
import type { ReactElement } from 'react'

import type { ScreenProps } from '../types'
import { AnimatedMenuContainer, CovariantMenu } from '../../Menus'
import { MenuStates } from '../../HarpGuru'

type MenuScreenProps = ScreenProps & {
  readonly menuState: MenuStates
}

export const CovariantMenuScreen = (props: MenuScreenProps): ReactElement => {
  const { menuState } = props
  const { activeHarpStrata, setActiveHarpStrata, activeDisplayMode, setActiveDisplayMode } = props
  const covariantMenuProps = { activeHarpStrata, setActiveHarpStrata, activeDisplayMode, setActiveDisplayMode }
  return (
    <AnimatedMenuContainer
      onScreen={menuState === MenuStates.CovariantMenu}
    >
      <CovariantMenu {...covariantMenuProps} />
    </AnimatedMenuContainer>
  )
}
