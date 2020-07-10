import type { ViewStyle } from 'react-native'

import type { HarpFaceProps } from '../../types'

export type Coord = number

export type HarpRowProps = HarpFaceProps & {
  readonly yCoord: Coord
}

export type HarpRowStyles = {
  readonly row: ViewStyle
  readonly chunkWrapper3: ViewStyle
  readonly chunkWrapper4: ViewStyle
  readonly cellChunk3: ViewStyle
  readonly cellChunk4: ViewStyle
  readonly spacer: ViewStyle
}
