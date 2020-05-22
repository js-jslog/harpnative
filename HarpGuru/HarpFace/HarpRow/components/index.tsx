import styled from 'styled-components/native'
import React from 'react'

import type {HarpRowProps} from '../types'
import { isBlowOrDrawRow } from '../isBlowOrDrawRow'
import { getHarpCells } from '../../HarpCells'

export const HarpRow = (props: HarpRowProps): React.ReactElement => {

  const backgroundColor = isBlowOrDrawRow(props) ? '#333' : 'transparent'
  const View = styled.View`
    flex: 1;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: ${backgroundColor};
  `
  return (
    <View>
      { getHarpCells(props) } 
    </View>
  )
}
