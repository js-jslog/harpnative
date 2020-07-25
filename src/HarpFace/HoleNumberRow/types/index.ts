import type { ViewStyle } from 'react-native'

import type { HarpRowProps } from '../../HarpRow'

export type HoleNumberRowProps = Pick<HarpRowProps, 'xRange'>

export type HoleNumberRowStyles = {
  readonly row: ViewStyle
}
