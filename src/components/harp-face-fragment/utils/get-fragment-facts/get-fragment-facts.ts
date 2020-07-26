type FragmentFacts = {
  readonly columnCount: number
}

export const getFragmentFacts = (
  xRange: ReadonlyArray<number>
): FragmentFacts => {
  return { columnCount: xRange.length }
}
