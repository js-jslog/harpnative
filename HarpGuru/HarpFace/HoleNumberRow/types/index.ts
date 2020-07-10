import type { ViewStyle } from 'react-native'

import type { HarpFaceFragmentProps } from '../../types'

export type HoleNumberRowProps = Pick<HarpFaceFragmentProps, 'xRange'>

export type HoleNumberRowStyles = {
  readonly row: ViewStyle
}
