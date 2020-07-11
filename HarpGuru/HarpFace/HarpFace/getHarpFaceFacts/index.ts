import type {DegreeMatrix} from 'harpstrata'

import type { HarpFaceProps } from '../types'
import { transposeMatrix, rowHasRoot, groupColumnIndexes } from '../helpers'
import type { ColumnRanges } from '../helpers'

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
    octaveColumnGroups
  }
}
