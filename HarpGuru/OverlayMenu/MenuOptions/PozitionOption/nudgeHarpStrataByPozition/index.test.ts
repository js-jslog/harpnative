import {HarpStrataProps, ApparatusIds, PozitionIds, PitchIds, ActiveIds, getHarpStrata} from 'harpstrata'

import {DisplayModes} from '../../../../HarpFace'

import { nudgeHarpStrataByPozition } from './index'

const baseHarpStrataProps: HarpStrataProps = {
  apparatusId: ApparatusIds.MajorDiatonic,
  pozitionId: PozitionIds.First,
  harpKeyId: PitchIds.C,
  activeIds: [] as ActiveIds,
}
const cHarpFirstPozitionProps = baseHarpStrataProps
const cHarpSecondPozitionProps = { ...baseHarpStrataProps, pozitionId: PozitionIds.Second }

const cHarpFirstPozition = getHarpStrata(cHarpFirstPozitionProps)
const cHarpSecondPozition = getHarpStrata(cHarpSecondPozitionProps)

test('provides incremented HarpStrata by pozition along with root pitch id', () => {
  const setActiveHarpStrata = jest.fn()
  nudgeHarpStrataByPozition(cHarpFirstPozition, setActiveHarpStrata, 'UP', DisplayModes.Degree)

  expect(setActiveHarpStrata.mock.calls[0][0]).toStrictEqual(cHarpSecondPozition)
})

test('provides decremented HarpStrata by pozition along with root pitch id', () => {
  const setActiveHarpStrata = jest.fn()
  nudgeHarpStrataByPozition(cHarpSecondPozition, setActiveHarpStrata, 'DOWN', DisplayModes.Degree)

  expect(setActiveHarpStrata.mock.calls[0][0]).toStrictEqual(cHarpFirstPozition)
})
