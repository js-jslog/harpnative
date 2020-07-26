import type { DegreeMatrix, HarpStrata } from 'harpstrata'

import { transposeMatrix } from '../../packages/transpose-matrix'

import { getOctaveColumnGroups } from './get-octave-column-groups'
import type { ColumnRanges } from './get-octave-column-groups'
import { arrayHasRoot } from './array-has-root'

type HarpFaceFacts = {
  readonly rowCount: number
  readonly columnCount: number
  readonly octaveColumnGroups: ColumnRanges
}

type Props = {
  readonly activeHarpStrata: HarpStrata
}

// TODO: the props here don't need to be an object
export const getHarpFaceFacts = (props: Props): HarpFaceFacts => {
  const {
    activeHarpStrata: { degreeMatrix },
  } = props

  const { length: rowCount } = degreeMatrix
  const {
    [0]: { length: columnCount },
  } = degreeMatrix

  const columnsFirstDegreeMatrix = transposeMatrix(degreeMatrix) as DegreeMatrix
  const rootColumnsMask = columnsFirstDegreeMatrix.map(arrayHasRoot)
  const octaveColumnGroups = getOctaveColumnGroups(rootColumnsMask)

  return {
    rowCount,
    columnCount,
    octaveColumnGroups,
  }
}
