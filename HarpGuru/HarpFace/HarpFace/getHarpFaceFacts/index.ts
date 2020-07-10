import type { HarpFaceProps } from '../../types'

// TODO: make this function available to the fragment
// component so that when it needs global face info
// it is clear that that is what it is doing, and when
// it needs specialised fragment info it's clear again.
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
