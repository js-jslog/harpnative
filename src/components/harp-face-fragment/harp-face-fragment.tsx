import { useGlobal } from 'reactn'
import { View } from 'react-native'
import React from 'react'

import { HoleNumberRow } from '../hole-number-row'
import { getHarpRows } from '../../HarpFace/HarpRows'
import type { HarpRowProps } from '../../HarpFace/HarpRow'

import { getStyles } from './harp-face-fragment-styles'

type Props = Pick<HarpRowProps, 'xRange'>

export const HarpFaceFragment = (props: Props): React.ReactElement => {
  const [activeHarpStrata, setActiveHarpStrata] = useGlobal('activeHarpStrata')
  const harpRows = getHarpRows({ ...props, activeHarpStrata })
  const styles = getStyles({ ...props, activeHarpStrata, setActiveHarpStrata })
  const holeNumberRowProps = {
    xRange: props.xRange,
  }

  return (
    <View style={styles.fragment}>
      {harpRows.top}
      <HoleNumberRow {...holeNumberRowProps} />
      {harpRows.bottom}
    </View>
  )
}
