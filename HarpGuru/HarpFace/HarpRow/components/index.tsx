import styled from 'styled-components/native'
import React from 'react'

import type {HarpRowProps} from '../types'
import { isBlowOrDrawRow, isBlowRow, isDrawRow } from '../isBlowOrDrawRow'
import { getHarpCells } from '../../HarpCells'

export const HarpRow = (props: HarpRowProps): React.ReactElement => {

  const backgroundColor = isBlowOrDrawRow(props) ? '#333' : 'transparent'
  const borderTopRadius = isBlowRow(props) ? '20px' : '0'
  const borderBottomRadius = isDrawRow(props) ? '20px' : '0'
  const View = styled.View`
    flex: 1;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    background-color: ${backgroundColor};
    border-top-right-radius: ${borderTopRadius};
    border-top-left-radius: ${borderTopRadius};
    border-bottom-right-radius: ${borderBottomRadius};
    border-bottom-left-radius: ${borderBottomRadius};
  `
  return (
    <View>
      { getHarpCells(props) } 
    </View>
  )
}
