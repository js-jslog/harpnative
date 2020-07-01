import {HarpStrataProps, ApparatusIds, PozitionIds, PitchIds, ActiveIds, getHarpStrata} from 'harpstrata'

import {DisplayModes} from '../../../HarpFace'

import { nudgeDisplayMode } from './index'

const harpStrataProps: HarpStrataProps = {
  apparatusId: ApparatusIds.MajorDiatonic,
  pozitionId: PozitionIds.First,
  harpKeyId: PitchIds.C,
  activeIds: [] as ActiveIds,
}

const inputHarpStrata = getHarpStrata(harpStrataProps)

test('sets the opposite display mode and returns the input harpstrata', () => {
  const setActiveDisplayMode = jest.fn()
  const returnedHarpStrata = nudgeDisplayMode(inputHarpStrata, DisplayModes.Pitch, setActiveDisplayMode, 'UP')

  expect(setActiveDisplayMode.mock.calls[0][0]).toStrictEqual(DisplayModes.Degree)
  expect(returnedHarpStrata).toStrictEqual(inputHarpStrata)
})
