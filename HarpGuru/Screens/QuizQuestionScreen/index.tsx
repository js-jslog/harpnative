import React from 'react'
import type { ReactElement } from 'react'

import { AnimatedMenuContainer, QuizQuestionDisplay } from '../../Menus'

type QuizQuestionScreenProps = {
  readonly screenFree: boolean
}

export const QuizQuestionScreen = (
  props:  QuizQuestionScreenProps
): ReactElement => {
  const { screenFree } = props
  return (
    <AnimatedMenuContainer onScreen={screenFree}>
      <QuizQuestionDisplay />
    </AnimatedMenuContainer>
  )
}
