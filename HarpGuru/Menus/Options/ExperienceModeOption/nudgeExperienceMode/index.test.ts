import { useGlobal } from 'reactn'

import { ExperienceModes } from '../../../../helpers/setGlobalReactNState'

import { nudgeExperienceMode } from './index'

jest.mock('reactn')
const mockUseGlobal = useGlobal as jest.Mock

test('sets the opposite explore mode when active explore mode is Quiz', () => {
  const setActiveExperienceMode = jest.fn()
  mockUseGlobal.mockReturnValue([ExperienceModes.Quiz, setActiveExperienceMode])
  nudgeExperienceMode()

  expect(setActiveExperienceMode.mock.calls[0][0]).toStrictEqual(
    ExperienceModes.Explore
  )
})

test('sets the opposite explore mode when active explore mode is Explore', () => {
  const setActiveExperienceMode = jest.fn()
  mockUseGlobal.mockReturnValue([ExperienceModes.Explore, setActiveExperienceMode])
  nudgeExperienceMode()

  expect(setActiveExperienceMode.mock.calls[0][0]).toStrictEqual(
    ExperienceModes.Quiz
  )
})
