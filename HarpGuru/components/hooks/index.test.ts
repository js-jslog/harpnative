import { setup } from './testSetup'

test('that the global state is defined', () => {
  const {0: global} = setup()
  expect(Object.keys(global).length).toBe(0)
})
