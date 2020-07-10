import type { ViewStyle } from 'react-native'

import type { HarpRowProps } from '../../HarpRow'

export type HarpFaceFragmentProps = Omit<HarpRowProps, 'yCoord'>

export type FragmentFacts = {
  readonly columnCount: number
  readonly rowCount: number
}

export type HarpFaceFragmentStyles = {
  readonly fragment: ViewStyle
}
