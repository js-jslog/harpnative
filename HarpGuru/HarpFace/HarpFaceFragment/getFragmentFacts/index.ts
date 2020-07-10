import type { HarpFaceFacts, HarpFaceFragmentProps } from '../types'

export const getFragmentFacts = ({activeHarpStrata, xRange}: HarpFaceFragmentProps): HarpFaceFacts => {
  const { degreeMatrix } = activeHarpStrata

  const { length: rowCount } = degreeMatrix

  return { columnCount: xRange.length, rowCount }
}
