import type { ViewStyle } from 'react-native'
import { StyleSheet } from 'react-native'
import type { HarpStrata } from 'harpstrata'

import { getHarpFaceFacts } from '../../utils'
import type { SetActiveHarpStrata } from '../../types'
import { columnWidth, rowHeight } from '../../styles'

import { getFragmentFacts } from './utils'

type Props = {
  readonly xRange: ReadonlyArray<number>
  readonly activeHarpStrata: HarpStrata
  readonly setActiveHarpStrata: SetActiveHarpStrata
}

type HarpFaceFragmentStyles = {
  readonly fragment: ViewStyle
}

export const getStyles = (props: Props): HarpFaceFragmentStyles => {
  const { activeHarpStrata } = props
  const { columnCount } = getFragmentFacts(props)
  const { rowCount } = getHarpFaceFacts({
    ...props,
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
