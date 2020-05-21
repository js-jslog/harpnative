import {Button} from 'react-native'
import React from 'react'
import type { ReactElement } from 'react'

import type { GenericUpdateProps } from '../types'

export function GenericUpdateButton(props: GenericUpdateProps): ReactElement {
  return (
    <Button onPress={(): void => {1 + 2}} title={props.updateId} disabled={false} />
  )
}
