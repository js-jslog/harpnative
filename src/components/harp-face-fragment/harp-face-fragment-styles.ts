import type { ViewStyle } from 'react-native'
import { StyleSheet } from 'react-native'
import type { HarpStrata } from 'harpstrata'

import { getHarpFaceFacts } from '../../utils'
import { columnWidth, rowHeight } from '../../styles'

import { getFragmentFacts } from './utils'

type Props = {
  readonly xRange: ReadonlyArray<number>
  readonly activeHarpStrata: HarpStrata
}

type HarpFaceFragmentStyles = {
  readonly fragment: ViewStyle
}

export const getStyles = ({
  activeHarpStrata,
  xRange,
}: Props): HarpFaceFragmentStyles => {
  const { columnCount } = getFragmentFacts(xRange)
  const { rowCount } = getHarpFaceFacts({
    activeHarpStrata,
  })

  const styles = StyleSheet.create<HarpFaceFragmentStyles>({
    fragment: {
      width: columnWidth * columnCount,
      height: rowHeight * rowCount,
    },
  })

  return styles
}