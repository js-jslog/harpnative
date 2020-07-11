import { DegreeRow, DegreeIds, Degree } from 'harpstrata'

type IsRootRow = ReadonlyArray<boolean>

export const identifyRootsInRow = (degreeRow: DegreeRow): IsRootRow => {
  return degreeRow.map((degree: Degree | undefined): boolean => !!(degree && degree.id === DegreeIds.Root))
}
