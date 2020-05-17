import {Text} from 'react-native'
import React from 'react'
import type { ReactElement } from 'react'
import { PozitionIds } from 'harpstrata'

import type { PozitionButtonParentProps } from '../../PozitionButton'
import { PozitionButton } from '../../PozitionButton'
import type { PozitionButtonProps } from '../../PozitionButton'

export function PozitionButtons(props: PozitionButtonParentProps): ReactElement {
  const { First, Second, Third } = PozitionIds
  const { setPozitionId } = props
  const firstPozitionButtonProps: PozitionButtonProps = { id: First, setPozitionId }
  const secondPozitionButtonProps: PozitionButtonProps = { id: Second, setPozitionId }
  const thirdPozitionButtonProps: PozitionButtonProps = { id: Third, setPozitionId }

  return (
    <>
      <Text>Harp Position</Text>
      <PozitionButton {...firstPozitionButtonProps} />
      <PozitionButton {...secondPozitionButtonProps} />
      <PozitionButton {...thirdPozitionButtonProps} />
    </>
  )
}
