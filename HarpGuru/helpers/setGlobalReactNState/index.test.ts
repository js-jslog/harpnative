import { setup } from './testSetup'

import { setGlobalReactNState } from './index'

test('that the global state is defined', () => {
  setGlobalReactNState()
  const { globalTuple } = setup()
  const [global] = globalTuple
  expect(global.activeHarpStrata).toBeTruthy()
})
