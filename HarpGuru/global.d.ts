import 'reactn'
import type { HarpStrata } from 'harpstrata'

declare module 'reactn/default' {
  export interface Reducers {
    quizAnswerGiven: () => Pick<State, 'counter'>
    requestNextQuestion: (
      global: State,
    ) => State
  }

  export interface State {
    counter: number
    activeHarpStrata: HarpStrata
  }
}
