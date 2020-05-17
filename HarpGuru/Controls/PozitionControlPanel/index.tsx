import {View} from 'react-native'
import React from 'react'
import type { ReactElement } from 'react'
import { PozitionIds } from 'harpstrata'

import { HarpStrataControlProps } from '../types'
import { PozitionButton } from '../PozitionButton'
import { HeadsupDisplay } from '../HeadsupDisplay'

export const PozitionControlPanel = (props: HarpStrataControlProps): ReactElement => {
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
