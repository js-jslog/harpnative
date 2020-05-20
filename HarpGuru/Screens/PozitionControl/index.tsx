import {View} from 'react-native'
import React from 'react'
import type { ReactElement } from 'react'
import { PozitionIds } from 'harpstrata'

import type { ScreenProps } from '../types'
import { PozitionButton, HeadsupDisplay } from '../../Controls'

export const PozitionControlScreen = (props: ScreenProps): ReactElement => {
  const { activeHarpStrata, setActiveHarpStrata } = props

  const firstPozitionButtonProps = { id: PozitionIds.First, activeHarpStrata, setActiveHarpStrata }
  const secondPozitionButtonProps = { id: PozitionIds.Second, activeHarpStrata, setActiveHarpStrata }
  const thirdPozitionButtonProps = { id: PozitionIds.Third, activeHarpStrata, setActiveHarpStrata }
  const fourthPozitionButtonProps = { id: PozitionIds.Fourth, activeHarpStrata, setActiveHarpStrata }
  const fifthPozitionButtonProps = { id: PozitionIds.Fifth, activeHarpStrata, setActiveHarpStrata }
  const sixthPozitionButtonProps = { id: PozitionIds.Sixth, activeHarpStrata, setActiveHarpStrata }
  const seventhPozitionButtonProps = { id: PozitionIds.Seventh, activeHarpStrata, setActiveHarpStrata }

  return (
    <View>
      <HeadsupDisplay {...activeHarpStrata} />
      <PozitionButton {...firstPozitionButtonProps} />
      <PozitionButton {...secondPozitionButtonProps} />
      <PozitionButton {...thirdPozitionButtonProps} />
      <PozitionButton {...fourthPozitionButtonProps} />
      <PozitionButton {...fifthPozitionButtonProps} />
      <PozitionButton {...sixthPozitionButtonProps} />
      <PozitionButton {...seventhPozitionButtonProps} />
    </View>
  )
}
