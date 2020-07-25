import { useGlobal, useDispatch } from 'reactn'
import { useEffect } from 'react'

import { MenuStates } from '../useSwipeMenus'
import { ExperienceModes } from '../../helpers/setGlobalReactNState'
import { usePrevious } from '../../helpers'

export const useQuizCycle = (menuState: MenuStates): void => {
  const previousMenuState = usePrevious(menuState, menuState)
  const [quizQuestion] = useGlobal('quizQuestion')
  const [activeExperienceMode] = useGlobal('activeExperienceMode')
  const [activeHarpStrata] = useGlobal('activeHarpStrata')
  const requestNextQuestion = useDispatch('requestNextQuestion')
  const revealAnswer = useDispatch('revealAnswer')

  const {
    isActiveComplex: { activeDegreeIds },
  } = activeHarpStrata
  const answerGiven = activeDegreeIds.length > 0

  const screenBecomesFree = (): boolean => {
    return menuState === MenuStates.NoMenu && previousMenuState !== menuState
  }

  const quizAnswerHasBeenGiven = (): boolean => {
    return answerGiven && activeExperienceMode === ExperienceModes.Quiz
  }

  const deadlineReached = (): boolean => {
    return activeExperienceMode === ExperienceModes.Quiz
  }

  type CancelEffect = () => void

  const requestQuestionBeforeDeadline = (): CancelEffect => {
    const revealTimer = setTimeout(() => {
      revealAnswer()
    }, 200)
    const nextQuestionTimer = setTimeout(() => {
      requestNextQuestion()
    }, 1500)
    return () => {
      clearTimeout(revealTimer)
      clearTimeout(nextQuestionTimer)
    }
  }

  const setNextQuestionDeadline = (): CancelEffect => {
    const nextQuestionTimer = setTimeout(() => {
      requestNextQuestion()
    }, 5000)
    return () => clearTimeout(nextQuestionTimer)
  }

  useEffect(() => {
    if (screenBecomesFree()) {
      requestNextQuestion()
    }
    if (quizAnswerHasBeenGiven()) {
      return requestQuestionBeforeDeadline()
    }
    if (deadlineReached()) {
      return setNextQuestionDeadline()
    }
    return
  }, [quizQuestion, activeExperienceMode, menuState, answerGiven])
}
