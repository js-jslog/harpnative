import React, { useState } from 'react'
import type { ReactElement } from 'react'

import { AnimatedMenuContainer, QuizQuestionDisplay } from '../../Menus'

type QuizQuestionScreenProps = {
  readonly screenFree: boolean
}

export const QuizQuestionScreen = (
  props: QuizQuestionScreenProps
): ReactElement => {
  const { screenFree } = props
  const [flashOn, setFlashOn] = useState<boolean>(true)
  setTimeout(() => setFlashOn(!flashOn), 3000)
  return (
    <AnimatedMenuContainer onScreen={screenFree && flashOn}>
      <QuizQuestionDisplay />
    </AnimatedMenuContainer>
  )
}
