import {StyleSheet, View} from 'react-native'
import React from 'react'
import type { ReactElement } from 'react'
import { PitchIds } from 'harpstrata'

import type { ScreenProps } from '../types'
import { CovarianceParts } from '../../Controls/CovariantsGroupList'
import type { ControlVarsPrimer } from '../../Controls/CovariantsGroupList'
import { CovarianceButtonList, HeadsupDisplay } from '../../Controls'

export const ControlPanel = (props: ScreenProps): ReactElement => {
  const { activeHarpStrata, setActiveHarpStrata } = props
  const pozitionControlPrimerLockedRootPitch: ControlVarsPrimer = {
    lockedType: CovarianceParts.RootPitch,
    variedType: CovarianceParts.HarpKey,
    lockedValue: PitchIds.C,
    variedValue: PitchIds.C,
  }
  const covarianceButtonListProps = { activeHarpStrata, setActiveHarpStrata, ...pozitionControlPrimerLockedRootPitch }

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
        <CovarianceButtonList {...covarianceButtonListProps} />
      </View>
    </>
  )
}
