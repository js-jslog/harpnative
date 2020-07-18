//import { useGlobal } from 'reactn'
import { StyleSheet } from 'react-native'
import type { HarpStrata } from 'harpstrata'

import type { HarpFaceFragmentProps, HarpFaceFragmentStyles } from '../types'
import { getFragmentFacts } from '../getFragmentFacts'
import { columnWidth, rowHeight } from '../../styles'
import { getHarpFaceFacts } from '../../helpers'
import type { SetActiveHarpStrata } from '../../../types'

type Props = HarpFaceFragmentProps & {
  readonly activeHarpStrata: HarpStrata
  readonly setActiveHarpStrata: SetActiveHarpStrata
}
export const getStyles = (props: Props): HarpFaceFragmentStyles => {
  // TODO: understand why the linter seems to think that this is
  // acceptable and the tests aren't failing. This is not a component
  // body so I didn't expect this to be a legitimate use of this hook.
  // Perhaps it's not a hook afterall and I can use it in even more
  // places than I thought.
  //const [activeHarpStrata, setActiveHarpStrata] = useGlobal('activeHarpStrata')
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
