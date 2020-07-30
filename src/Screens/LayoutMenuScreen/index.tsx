import React from 'react'
import type { ReactElement } from 'react'

import { LayoutMenu } from '../../components/layout-menu'
import { AnimatedMenuContainer } from '../../components/animated-menu-container'

type LayoutMenuScreenProps = {
  readonly onScreen: boolean
}

export const LayoutMenuScreen = (
  props: LayoutMenuScreenProps
): ReactElement => {
  const { onScreen } = props
  return (
    <AnimatedMenuContainer onScreen={onScreen}>
      <LayoutMenu />
    </AnimatedMenuContainer>
  )
}
