import type { ViewStyle } from 'react-native'

import type { HarpRowProps } from '../../HarpRow'

export type HarpFaceFragmentProps = Omit<HarpRowProps, 'yCoord'>

export type HarpFaceFacts = {
  readonly columnCount: number
  readonly rowCount: number
}

export type HarpFaceFragmentStyles = {
  readonly fragment: ViewStyle
}
