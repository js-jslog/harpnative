import type { HarpFaceProps } from '../../types'

type HarpFaceFacts = {
  readonly rowCount: number
  readonly columnCount: number
  readonly boundaryIndexes: ReadonlyArray<number>
}

export const getHarpFaceFacts = (props: HarpFaceProps): HarpFaceFacts => {
  const {
    activeHarpStrata: { degreeMatrix },
  } = props

  const { length: rowCount } = degreeMatrix
  const {
    [0]: { length: columnCount },
  } = degreeMatrix

  return {
    rowCount,
    columnCount,
    boundaryIndexes: [2, 5, 8]
  }
}
