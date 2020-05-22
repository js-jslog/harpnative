import styled from 'styled-components/native'
import React from 'react'

import type {HarpFaceProps} from '../types'
import { HoleNumberRow } from '../../HoleNumberRow'
import { getHarpRows } from '../../HarpRows'

const View = styled.View`
  background-color: transparent;
  flex: 5;
  flexDirection: column;
  justify-content: space-between;
  align-items: stretch;
`

export const HarpFace = (props: HarpFaceProps): React.ReactElement => {
  const harpRows = getHarpRows(props)
  return (
    <View>
      { harpRows.top }
      <HoleNumberRow {...props} />
      { harpRows.bottom }
    </View>
  )
}
