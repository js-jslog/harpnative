import { ApparatusIds, PozitionIds, PitchIds, DegreeIds, getHarpStrata } from 'harpstrata'
import type { HarpStrata, HarpStrataProps, ActiveIds } from 'harpstrata'

import type { HarpFaceProps } from '../index'
import { DisplayModes } from '../index'

const allActiveDegrees = [
  DegreeIds.Root, DegreeIds.Flat2, DegreeIds.Second, DegreeIds.Flat3, DegreeIds.Third, DegreeIds.Fourth,
  DegreeIds.Flat5, DegreeIds.Fifth, DegreeIds.Flat6, DegreeIds.Sixth, DegreeIds.Flat7, DegreeIds.Seventh,
]

const harpStrataProps: HarpStrataProps = {
  apparatusId: ApparatusIds.MajorDiatonic,
  pozitionId: PozitionIds.First,
  harpKeyId: PitchIds.C,
  activeIds: [] as ActiveIds,
}
const harpStrataPropsActiveCells: HarpStrataProps = {
  apparatusId: ApparatusIds.MajorDiatonic,
  pozitionId: PozitionIds.First,
  harpKeyId: PitchIds.C,
  activeIds: allActiveDegrees,
}
const activeHarpStrata = getHarpStrata(harpStrataProps)
const activeHarpStrataActiveCells = getHarpStrata(harpStrataPropsActiveCells)
const { Degree: activeDisplayMode } = DisplayModes
// TODO: If I add a jest.fn() here rather than this nonesense function
// the gradle build fails. I need to figure out to make the testResources
// folders ignored in the build
const setActiveHarpStrata = (activeHarpStrata: HarpStrata): void => {console.log(activeHarpStrata)}

export const exampleHarpFaceProps: HarpFaceProps = {
  activeHarpStrata,
  activeDisplayMode,
  setActiveHarpStrata,
}
export const exampleHarpFacePropsActiveCells: HarpFaceProps = {
  activeHarpStrata: activeHarpStrataActiveCells,
  activeDisplayMode,
  setActiveHarpStrata,
}
