import type { FragmentFacts, HarpFaceFragmentProps } from '../types'

export const getFragmentFacts = ({activeHarpStrata, xRange}: HarpFaceFragmentProps): FragmentFacts => {
  const { degreeMatrix } = activeHarpStrata

  const { length: rowCount } = degreeMatrix

  return { columnCount: xRange.length, rowCount }
}
