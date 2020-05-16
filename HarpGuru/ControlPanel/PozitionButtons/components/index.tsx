import {Text} from 'react-native'
import React from 'react'
import type { ReactElement } from 'react'
import { PozitionIds } from 'harpstrata'

import type { PozitionButtonsProps } from '../types'
import { PozitionButton } from '../../PozitionButton'
import type { PozitionButtonProps } from '../../PozitionButton'

export function PozitionButtons(props: PozitionButtonsProps): ReactElement {
  const { First, Second, Third, Fourth, Fifth, Sixth, Seventh, Eighth, Ninth, Tenth, Eleventh, Twelfth } = PozitionIds
  const { setPozitionId } = props
  const firstPozitionButtonProps: PozitionButtonProps = { id: First, setPozitionId }
  const secondPozitionButtonProps: PozitionButtonProps = { id: Second, setPozitionId }
  const thirdPozitionButtonProps: PozitionButtonProps = { id: Third, setPozitionId }
  const fourthPozitionButtonProps: PozitionButtonProps = { id: Fourth, setPozitionId }
  const fifthPozitionButtonProps: PozitionButtonProps = { id: Fifth, setPozitionId }
  const sixthPozitionButtonProps: PozitionButtonProps = { id: Sixth, setPozitionId }
  const seventhPozitionButtonProps: PozitionButtonProps = { id: Seventh, setPozitionId }
  const eighthPozitionButtonProps: PozitionButtonProps = { id: Eighth, setPozitionId }
  const ninthPozitionButtonProps: PozitionButtonProps = { id: Ninth, setPozitionId }
  const tenthPozitionButtonProps: PozitionButtonProps = { id: Tenth, setPozitionId }
  const eleventhPozitionButtonProps: PozitionButtonProps = { id: Eleventh, setPozitionId }
  const twelfthPozitionButtonProps: PozitionButtonProps = { id: Twelfth, setPozitionId }

  return (
    <>
      <Text>Harp Position</Text>
      <PozitionButton {...firstPozitionButtonProps} />
      <PozitionButton {...secondPozitionButtonProps} />
      <PozitionButton {...thirdPozitionButtonProps} />
      <PozitionButton {...fourthPozitionButtonProps} />
      <PozitionButton {...fifthPozitionButtonProps} />
      <PozitionButton {...sixthPozitionButtonProps} />
      <PozitionButton {...seventhPozitionButtonProps} />
      <PozitionButton {...eighthPozitionButtonProps} />
      <PozitionButton {...ninthPozitionButtonProps} />
      <PozitionButton {...tenthPozitionButtonProps} />
      <PozitionButton {...eleventhPozitionButtonProps} />
      <PozitionButton {...twelfthPozitionButtonProps} />
    </>
  )
}
