import type { HarpRowProps } from '../../../../HarpFace/HarpRow'

// TODO: Should we redefine this type? Should it be totally
// independent of reference to other types? I'm concerned that
// a reference back to the harp-face-fragment.ts will constitute
// a circular ref.
type Props = Pick<HarpRowProps, 'xRange'>

type FragmentFacts = {
  readonly columnCount: number
}

export const getFragmentFacts = ({ xRange }: Props): FragmentFacts => {
  return { columnCount: xRange.length }
}
