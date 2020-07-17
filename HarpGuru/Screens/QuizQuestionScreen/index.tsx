import { useGlobal } from 'reactn'
import React from 'react'
import type { ReactElement } from 'react'

import { AnimatedMenuContainer, QuizQuestionDisplay } from '../../Menus'

type QuizQuestionScreenProps = {
  readonly screenFree: boolean
}

export const QuizQuestionScreen = (
  props: QuizQuestionScreenProps
): ReactElement => {
  const [counter, setCounter] = useGlobal('counter')
  const { screenFree } = props
  setTimeout(() => {
    if (counter === 0) {
      setCounter(5)
    } else {
      setCounter(counter - 1)
    }
  }, 1000)
  return (
    <AnimatedMenuContainer onScreen={screenFree && counter < 1}>
      <QuizQuestionDisplay />
    </AnimatedMenuContainer>
  )
}
