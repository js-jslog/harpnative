import {HarpStrataProps, ApparatusIds, PozitionIds, PitchIds, ActiveIds, getHarpStrata} from 'harpstrata'

import { incrementHarpStrataByPozition } from './index'

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

test('provides incremented HarpStrata along Pozition with harp key kept the same', () => {
  const actualIncrementedHarpStrata = incrementHarpStrataByPozition(cHarpFirstPozition)

  expect(actualIncrementedHarpStrata).toStrictEqual(cHarpSecondPozition)
})
