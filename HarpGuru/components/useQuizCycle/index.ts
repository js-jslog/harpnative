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

  const { isActiveComplex: {activeDegreeIds} } = activeHarpStrata
  const answerGiven = (activeDegreeIds.length > 0)

  useEffect(() => {
    if (menuState === MenuStates.NoMenu && previousMenuState !== menuState) {
      requestNextQuestion()
    }
    if (answerGiven && activeExperienceMode === ExperienceModes.Quiz) {
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
    if (activeExperienceMode === ExperienceModes.Quiz) {
      const nextQuestionTimer = setTimeout(() => {
        requestNextQuestion()
      }, 5000)
      return () => clearTimeout(nextQuestionTimer)
    }
    return
  }, [quizQuestion, activeExperienceMode, menuState, answerGiven])
}
