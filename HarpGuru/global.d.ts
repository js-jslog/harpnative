import 'reactn'

declare module 'reactn/default' {
  export interface Reducers {
    resetCounter: (
    ) => Pick<State, 'counter'>
  }

  export interface State {
    counter: number
  }
}
