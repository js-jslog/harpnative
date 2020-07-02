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
  const actualIncrementedHarpStrata = nudgeHarpStrataByPozition(cHarpFirstPozition, 'UP', DisplayModes.Degree)

  expect(actualIncrementedHarpStrata).toStrictEqual(cHarpSecondPozition)
})

test('provides decremented HarpStrata by pozition along with root pitch id', () => {
  const actualDecrementededHarpStrata = nudgeHarpStrataByPozition(cHarpSecondPozition, 'DOWN', DisplayModes.Degree)

  expect(actualDecrementededHarpStrata).toStrictEqual(cHarpFirstPozition)
})
