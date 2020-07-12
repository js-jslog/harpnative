import React from 'react'
import type { ReactElement } from 'react'

import { AnimatedMenuContainer, CovariantMenu } from '../../Menus'
import type { CovariantMenuProps } from '../../Menus'
import { MenuStates } from '../../HarpGuru'

type CovariantMenuScreenProps = CovariantMenuProps & {
  readonly menuState: MenuStates
}

export const CovariantMenuScreen = (props: CovariantMenuScreenProps): ReactElement => {
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
