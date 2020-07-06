import {DisplayModes} from '../../../../HarpFace'

import { nudgeDisplayMode } from './index'

test('sets the opposite display mode when input DisplayMode is Pitch', () => {
  const setActiveDisplayMode = jest.fn()
  nudgeDisplayMode(DisplayModes.Pitch, setActiveDisplayMode)

  expect(setActiveDisplayMode.mock.calls[0][0]).toStrictEqual(DisplayModes.Degree)
})

test('sets the opposite display mode when input DisplayMode is Degree', () => {
  const setActiveDisplayMode = jest.fn()
  nudgeDisplayMode(DisplayModes.Degree, setActiveDisplayMode)

  expect(setActiveDisplayMode.mock.calls[0][0]).toStrictEqual(DisplayModes.Pitch)
})
