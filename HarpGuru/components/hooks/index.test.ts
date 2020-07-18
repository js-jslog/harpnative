import { setup } from './testSetup'

import './index'

test('that the global state is defined', () => {
  const {0: global} = setup()
  expect(Object.keys(global).length).not.toBe(0)
})
