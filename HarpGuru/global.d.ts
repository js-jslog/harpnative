import 'reactn'
import type { HarpStrata } from 'harpstrata'

declare module 'reactn/default' {
  export interface Reducers {
    quizAnswerGiven: () => Pick<State, 'counter'>
    requestNextQuestion: () => Pick<State, 'counter'>
  }

  export interface State {
    counter: number
    activeHarpStrata: HarpStrata
  }
}
