import { DisplayModes } from '../../../../types'

import { nudgeDisplayMode } from './nudge-display-mode'

test('sets the opposite display mode when input DisplayMode is Pitch', () => {
  const setActiveDisplayMode = jest.fn()
  const partialParams = {
    activeDisplayMode: DisplayModes.Pitch,
    setActiveDisplayMode,
  }
  nudgeDisplayMode(partialParams)

  expect(setActiveDisplayMode.mock.calls[0][0]).toStrictEqual(
    DisplayModes.Degree
  )
})

test('sets the opposite display mode when input DisplayMode is Degree', () => {
  const setActiveDisplayMode = jest.fn()
  const partialParams = {
    activeDisplayMode: DisplayModes.Degree,
    setActiveDisplayMode,
  }
  nudgeDisplayMode(partialParams)

  expect(setActiveDisplayMode.mock.calls[0][0]).toStrictEqual(
    DisplayModes.Pitch
  )
})
