import { StyleSheet } from 'react-native'
import type { HarpStrata } from 'harpstrata'

import type { HarpFaceFragmentProps, HarpFaceFragmentStyles } from '../types'
import { getFragmentFacts } from '../getFragmentFacts'
import { getHarpFaceFacts } from '../../../utils'
import type { SetActiveHarpStrata } from '../../../types'
import { columnWidth, rowHeight } from '../../../styles'

type Props = HarpFaceFragmentProps & {
  readonly activeHarpStrata: HarpStrata
  readonly setActiveHarpStrata: SetActiveHarpStrata
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
