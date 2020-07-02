import {HarpStrataProps, ApparatusIds, PozitionIds, PitchIds, ActiveIds, getHarpStrata} from 'harpstrata'

import {DisplayModes} from '../../../../HarpFace'

import { nudgeHarpStrataByHarpKey } from './index'

const baseHarpStrataProps: HarpStrataProps = {
  apparatusId: ApparatusIds.MajorDiatonic,
  pozitionId: PozitionIds.First,
  harpKeyId: PitchIds.C,
  activeIds: [] as ActiveIds,
}
const cHarpFirstPozitionProps = baseHarpStrataProps
// Sixth position puts the root a semi tone lower than in First which is whats required to keep it the same while incrementing the harp key
const dbHarpFirstPozitionProps = { ...baseHarpStrataProps, harpKeyId: PitchIds.Db, pozitionId: PozitionIds.Sixth }

const cHarpFirstPozition = getHarpStrata(cHarpFirstPozitionProps)
const dbHarpFirstPozition = getHarpStrata(dbHarpFirstPozitionProps)

test('provides incremented HarpStrata by harp key along with pozition id', () => {
  const actualIncrementedHarpStrata = nudgeHarpStrataByHarpKey(cHarpFirstPozition, 'UP', DisplayModes.Degree)

  expect(actualIncrementedHarpStrata).toStrictEqual(dbHarpFirstPozition)
})

test('provides decremented HarpStrata by harp key along with pozition id', () => {
  const actualDecrementededHarpStrata = nudgeHarpStrataByHarpKey(dbHarpFirstPozition, 'DOWN', DisplayModes.Degree)

  expect(actualDecrementededHarpStrata).toStrictEqual(cHarpFirstPozition)
})
