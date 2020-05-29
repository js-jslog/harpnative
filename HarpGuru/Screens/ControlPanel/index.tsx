import {StyleSheet, View} from 'react-native'
import React from 'react'
import type { ReactElement } from 'react'

import type { ScreenProps } from '../types'
import { CovarianceButtonList, HeadsupDisplay } from '../../Controls'

export const ControlPanel = (props: ScreenProps): ReactElement => {
  const { activeHarpStrata, setActiveHarpStrata } = props
  const covarianceButtonList = { activeHarpStrata, setActiveHarpStrata }

  const styles = StyleSheet.create({
    headsupdiplay: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    controls: {
      flex: 5,
      flexDirection: 'column',
      justifyContent: 'space-between',
    },
  })


  return (
    <>
      <View style={styles.headsupdiplay}>
        <HeadsupDisplay {...activeHarpStrata} />
      </View>
      <View style={styles.controls}>
        <CovarianceButtonList {...covarianceButtonList} />
      </View>
    </>
  )
}
