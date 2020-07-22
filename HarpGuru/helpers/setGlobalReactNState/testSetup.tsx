import type { GlobalTuple } from 'reactn/types/use-global'
import type { State } from 'reactn/default'
import { useGlobal } from 'reactn'
import React from 'react'
import { render } from '@testing-library/react-native'

export const setup = (): Record<'globalTuple', GlobalTuple<State>> => {
  const blankState = {} as State
  const globalWrapper = {
    globalTuple: [
      blankState,
      (arg0: State) => {
        console.log(arg0)
      },
    ],
  } as Record<'globalTuple', GlobalTuple<State>>
  const TestComponent = (): null => {
    const globalTuple: GlobalTuple<State> = useGlobal()
    globalWrapper.globalTuple = globalTuple
    return null
  }
  render(<TestComponent />)
  return globalWrapper
}
