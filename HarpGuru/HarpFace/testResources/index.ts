import {
  ApparatusIds,
  PozitionIds,
  PitchIds,
  DegreeIds,
  getHarpStrata,
} from 'harpstrata'
import type { HarpStrata, HarpStrataProps, ActiveIds } from 'harpstrata'

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
// TODO: If I add a jest.fn() here rather than this nonesense function
// the gradle build fails. I need to figure out to make the testResources
// folders ignored in the build
const setActiveHarpStrata = (activeHarpStrata: HarpStrata): void => {
  console.log(activeHarpStrata)
}

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

// TODO: I think these can probably be remove too
export const inactiveCellsHarpFaceProps = {
  activeHarpStrata: inactiveCellsHarpStrata,
  setActiveHarpStrata,
}
export const activeCellsHarpFaceProps = {
  activeHarpStrata: activeCellsHarpStrata,
  setActiveHarpStrata,
}
export const harpFaceProps = inactiveCellsHarpFaceProps
