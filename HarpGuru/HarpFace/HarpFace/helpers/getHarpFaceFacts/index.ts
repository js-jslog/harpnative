import type { DegreeMatrix } from 'harpstrata'

import { transposeMatrix } from '../transposeMatrix'
import { rowHasRoot } from '../rowHasRoot'
import { groupColumnIndexes } from '../groupColumnIndexes'
import type { ColumnRanges } from '../groupColumnIndexes'
import type { HarpFaceProps } from '../../types'

type HarpFaceFacts = {
  readonly rowCount: number
  readonly columnCount: number
  readonly octaveColumnGroups: ColumnRanges
}

export const getHarpFaceFacts = (props: HarpFaceProps): HarpFaceFacts => {
  const {
    activeHarpStrata: { degreeMatrix },
  } = props

  const { length: rowCount } = degreeMatrix
  const {
    [0]: { length: columnCount },
  } = degreeMatrix

  const columnsFirstDegreeMatrix = transposeMatrix(degreeMatrix) as DegreeMatrix
  const rootColumnsMask = columnsFirstDegreeMatrix.map(rowHasRoot)
  const octaveColumnGroups = groupColumnIndexes(rootColumnsMask)

  return {
    rowCount,
    columnCount,
    octaveColumnGroups,
  }
}
