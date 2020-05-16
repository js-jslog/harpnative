import {Button} from 'react-native'
import React from 'react'
import type { ReactElement } from 'react'

import type { PozitionButtonProps } from '../types'

export function PozitionButton(props: PozitionButtonProps): ReactElement {
  return (
    <Button onPress={(): void => props.setPozitionId(props.id)} title={props.id} />
  )
}
