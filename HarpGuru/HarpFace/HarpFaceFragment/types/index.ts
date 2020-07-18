import type { ViewStyle } from 'react-native'
import type { HarpStrata } from 'harpstrata'

import type { HarpRowProps } from '../../HarpRow'
import type { SetActiveHarpStrata } from '../../../types'

export type HarpFaceFragmentProps = Pick<
  HarpRowProps,
  'activeDisplayMode' | 'activeDisplayMode' | 'xRange'
> & {
  readonly activeHarpStrata: HarpStrata
  readonly setActiveHarpStrata: SetActiveHarpStrata
}

export type FragmentFacts = {
  readonly columnCount: number
}

export type HarpFaceFragmentStyles = {
  readonly fragment: ViewStyle
}
