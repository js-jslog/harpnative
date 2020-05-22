import styled from 'styled-components/native'
import React from 'react'
import type { ReactElement } from 'react'

import type { HarpFaceProps } from '../HarpFace'

import { getHoleNumbers } from './getHoleNumbers'

const View = styled.View`
  background-color: #333;
  flex: 0;
  flex-direction: row;
  justify-content: space-around;
  z-index: 10;
`

export const HoleNumberRow = (props: HarpFaceProps): ReactElement => {
  const holeNumbers = getHoleNumbers(props)

  return (
    <View>
      {holeNumbers}
    </View>
  )
}
