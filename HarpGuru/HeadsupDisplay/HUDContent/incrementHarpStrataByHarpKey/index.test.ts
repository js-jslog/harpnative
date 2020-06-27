import {HarpStrataProps, ApparatusIds, PozitionIds, PitchIds, ActiveIds, getHarpStrata} from 'harpstrata'

import { incrementHarpStrataByHarpKey } from './index'

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
  const actualIncrementedHarpStrata = incrementHarpStrataByHarpKey(cHarpFirstPozition)

  expect(actualIncrementedHarpStrata).toStrictEqual(dbHarpFirstPozition)
})
