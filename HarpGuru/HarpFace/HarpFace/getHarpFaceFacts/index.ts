import type { HarpFaceFacts, HarpFaceFragmentProps } from '../../types'

export const getHarpFaceFacts = (props: HarpFaceFragmentProps): HarpFaceFacts => {
  const {
    activeHarpStrata: { degreeMatrix },
  } = props

  const { length: rowCount } = degreeMatrix
  const {
    [0]: { length: columnCount },
  } = degreeMatrix

  return { columnCount: (props.xRange && (props.xRange[1] - props.xRange[0]) || columnCount), rowCount }
}
