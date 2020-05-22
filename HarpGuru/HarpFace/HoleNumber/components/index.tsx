import styled from 'styled-components/native'
import React from 'react'
import type { ReactElement } from 'react'

import type { HoleNumberIds, HoleNumberProps } from '../types'

export function HoleNumber(props: HoleNumberProps): ReactElement {
  const { xCoord } = props
  const holeNumber: HoleNumberIds = `${xCoord + 1}` as HoleNumberIds

  const Text = styled.Text``
  const View = styled.View`
    background-color: transparent;
    justify-content: center;
    align-items: center;
    width: 30px;
  `

  return (
    <View>
      <Text>{holeNumber}</Text>
    </View>
  )
}
