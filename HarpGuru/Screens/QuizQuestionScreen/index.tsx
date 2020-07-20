import React, { useGlobal, useEffect, useDispatch } from 'reactn'
import { ReactElement, useState } from 'react'

import { AnimatedMenuContainer, QuizQuestionDisplay } from '../../Menus'

type QuizQuestionScreenProps = {
  readonly screenFree: boolean
}

export const QuizQuestionScreen = (
  props: QuizQuestionScreenProps
): ReactElement => {
  const [displayPeriod, setDisplayPeriod] = useState<boolean>(true)
  const [quizQuestion] = useGlobal('quizQuestion')
  const { screenFree } = props
  const requestNextQuestion = useDispatch('requestNextQuestion')
  useEffect(() => {
    setDisplayPeriod(true)
    const nextQuestionTimer = setTimeout(() => {
      requestNextQuestion()
    }, 5000)
    const hideQuestionTimer = setTimeout(() => {
      setDisplayPeriod(false)
    }, 2000)
    return () => {
      clearTimeout(nextQuestionTimer)
      clearTimeout(hideQuestionTimer)
    }
  }, [quizQuestion])
  return (
    <AnimatedMenuContainer onScreen={screenFree && displayPeriod}>
      <QuizQuestionDisplay />
    </AnimatedMenuContainer>
  )
}
