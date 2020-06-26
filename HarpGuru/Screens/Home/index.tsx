import { StyleSheet, View } from 'react-native'
import React from 'react'

import type { ScreenProps } from '../types'
import { themeColors } from '../../Styles'
import { SweepingBanner, HUDContent } from '../../HeadsupDisplay'
import { HarpFace } from '../../HarpFace'
import { SwipeControlWrapper } from '../../Controls'


const { pageColor } = themeColors

const styles = StyleSheet.create({
  guruhome: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: pageColor,
    justifyContent: 'space-between',
    alignItems: 'stretch',
  }
})

export const HomeScreen = (props: ScreenProps): React.ReactElement => {
  const { activeHarpStrata, activeDisplayMode, setActiveHarpStrata, setActiveDisplayMode } = props
  const { harpKeyId, pozitionId, rootPitchId } = activeHarpStrata

  const swipeControlProps = { activeDisplayMode, setActiveDisplayMode }
  const harpFaceProps = { activeHarpStrata, setActiveHarpStrata, activeDisplayMode }
  const hudContentProps = { harpKeyId, pozitionId, rootPitchId }

  return (
    <>
      <SwipeControlWrapper {...swipeControlProps}>
        <View style={styles.guruhome}>
          <HarpFace {...harpFaceProps} />
        </View>
      </SwipeControlWrapper>
      <SweepingBanner><HUDContent {...hudContentProps} /></SweepingBanner>
    </>
  )
}
