import React, { useGlobal, useEffect } from 'reactn'
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
  useEffect(() => {
    const timer = setTimeout(() => {
      if (counter === 0) {
        setCounter(5)
      } else {
        setCounter(counter - 1)
      }
    }, 1000)
    return () => clearTimeout(timer)
  })
  return (
    <AnimatedMenuContainer onScreen={screenFree && counter < 1}>
      <QuizQuestionDisplay />
    </AnimatedMenuContainer>
  )
}
