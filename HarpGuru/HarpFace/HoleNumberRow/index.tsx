import styled from 'styled-components/native'
import React from 'react'
import type { ReactElement } from 'react'

import type { HarpFaceProps } from '../HarpFace'

import { getHoleNumbers } from './getHoleNumbers'

const View = styled.View`
  background-color: #333;
  flex: 0.4;
  flex-direction: row;
  justify-content: space-between;
`

export const HoleNumberRow = (props: HarpFaceProps): ReactElement => {
  const holeNumbers = getHoleNumbers(props)

  return (
    <View>
      {holeNumbers}
    </View>
  )
}
