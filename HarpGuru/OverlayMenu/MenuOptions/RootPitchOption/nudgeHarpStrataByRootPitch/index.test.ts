import {HarpStrataProps, ApparatusIds, PozitionIds, PitchIds, ActiveIds, getHarpStrata} from 'harpstrata'

import {DisplayModes} from '../../../../HarpFace'

import { nudgeHarpStrataByRootPitch } from './index'

const baseHarpStrataProps: HarpStrataProps = {
  apparatusId: ApparatusIds.MajorDiatonic,
  pozitionId: PozitionIds.First,
  harpKeyId: PitchIds.C,
  activeIds: [] as ActiveIds,
}
const cHarpFirstPozitionProps = baseHarpStrataProps
// Eigth position puts the root a semi tone higher than in First
const cHarpEighthPozitionProps = { ...baseHarpStrataProps, pozitionId: PozitionIds.Eighth }

const cHarpFirstPozition = getHarpStrata(cHarpFirstPozitionProps)
const cHarpEighthPozition = getHarpStrata(cHarpEighthPozitionProps)

test('provides incremented HarpStrata by root pitch along with pozition id id', () => {
  const setActiveHarpStrata = jest.fn()
  nudgeHarpStrataByRootPitch(cHarpFirstPozition, setActiveHarpStrata, 'UP', DisplayModes.Degree)

  expect(setActiveHarpStrata.mock.calls[0][0]).toStrictEqual(cHarpEighthPozition)
})

test('provides decremented HarpStrata by root pitch along with pozition id id', () => {
  const setActiveHarpStrata = jest.fn()
  nudgeHarpStrataByRootPitch(cHarpEighthPozition, setActiveHarpStrata, 'DOWN', DisplayModes.Degree)

  expect(setActiveHarpStrata.mock.calls[0][0]).toStrictEqual(cHarpFirstPozition)
})
