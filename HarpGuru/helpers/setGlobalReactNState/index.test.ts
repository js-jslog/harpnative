import { setup } from './testSetup'

import { setGlobalReactNState } from './index'

test('that the global state is defined', () => {
  setGlobalReactNState()
  const { 0: global } = setup()
  expect(Object.keys(global).length).not.toBe(0)
})
