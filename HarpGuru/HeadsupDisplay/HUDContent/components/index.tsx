import { Text } from 'react-native'
import React from 'react'

import {HUDContentProps} from '../types'

export const HUDContent = (props: HUDContentProps): React.ReactElement => {
  const { harpKeyId, pozitionId, rootPitchId } = props

  return (
    <>
      <Text>{harpKeyId}</Text>
      <Text>{pozitionId}</Text>
      <Text>{rootPitchId}</Text>
    </>
  )
}
