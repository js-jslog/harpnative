import 'reactn'

declare module 'reactn/default' {
  export interface Reducers {
    quizAnswerGiven: (
    ) => Pick<State, 'counter'>
    requestNextQuestion: (
    ) => Pick<State, 'counter'>
  }

  export interface State {
    counter: number
  }
}
