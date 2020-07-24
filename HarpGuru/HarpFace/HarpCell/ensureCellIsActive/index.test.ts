import { DegreeIds, ApparatusIds, PozitionIds, PitchIds, getHarpStrata } from 'harpstrata'
import type { HarpStrataProps, ActiveIds } from 'harpstrata'

import { ensureCellIsActive } from './index'


const allActiveDegrees = [
  DegreeIds.Root,
  DegreeIds.Flat2,
  DegreeIds.Second,
  DegreeIds.Flat3,
  DegreeIds.Third,
  DegreeIds.Fourth,
  DegreeIds.Flat5,
  DegreeIds.Fifth,
  DegreeIds.Flat6,
  DegreeIds.Sixth,
  DegreeIds.Flat7,
  DegreeIds.Seventh,
]
const baseHarpStrataProps: HarpStrataProps = {
  apparatusId: ApparatusIds.MajorDiatonic,
  pozitionId: PozitionIds.First,
  harpKeyId: PitchIds.C,
  activeIds: [] as ActiveIds,
}
const inactiveCellsHarpStrataProps = baseHarpStrataProps
const activeCellsHarpStrataProps = {
  ...baseHarpStrataProps,
  activeIds: allActiveDegrees,
}

const inactiveCellsHarpStrata = getHarpStrata(inactiveCellsHarpStrataProps)
const activeCellsHarpStrata = getHarpStrata(activeCellsHarpStrataProps)

test('that a harpstrata with a deactivated cell will have that cell activated when given its degree', () => {
  const expectedHarpStrata = getHarpStrata({...inactiveCellsHarpStrataProps, activeIds: [DegreeIds.Root]})
  const props = {
    harpStrata: inactiveCellsHarpStrata,
    cellId: DegreeIds.Root,
  }
  const actualHarpStrata = ensureCellIsActive(props)

  expect(actualHarpStrata).toStrictEqual(expectedHarpStrata)
})

test('that a harpstrata with an active cell will remain the same when given its degree', () => {
  const props = {
    harpStrata: activeCellsHarpStrata,
    cellId: DegreeIds.Third,
  }
  const actualHarpStrata = ensureCellIsActive(props)

  expect(actualHarpStrata).toStrictEqual(activeCellsHarpStrata)
})
