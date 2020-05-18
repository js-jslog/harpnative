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

  return (
    <View>
      <HeadsupDisplay {...activeHarpStrata} />
      <PozitionButton {...firstPozitionButtonProps} />
      <PozitionButton {...secondPozitionButtonProps} />
    </View>
  )
}
