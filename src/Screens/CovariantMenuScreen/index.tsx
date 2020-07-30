import React from 'react'
import type { ReactElement } from 'react'

import { CovariantMenu } from '../../components/covariant-menu'
import { AnimatedMenuContainer } from '../../components/animated-menu-container'

type CovariantMenuScreenProps = {
  readonly onScreen: boolean
}

export const CovariantMenuScreen = (
  props: CovariantMenuScreenProps
): ReactElement => {
  const { onScreen } = props
  return (
    <AnimatedMenuContainer onScreen={onScreen}>
      <CovariantMenu />
    </AnimatedMenuContainer>
  )
}
