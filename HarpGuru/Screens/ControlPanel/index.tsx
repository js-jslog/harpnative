import {StyleSheet, View} from 'react-native'
import React from 'react'
import type { ReactElement } from 'react'
import { PozitionIds, PitchIds } from 'harpstrata'

import type { ScreenProps } from '../types'
import { PozitionButton, HarpKeyUpdateButton, HeadsupDisplay } from '../../Controls'

export const ControlPanel = (props: ScreenProps): ReactElement => {
  const { activeHarpStrata, setActiveHarpStrata } = props

  const firstPozitionButtonProps = { id: PozitionIds.First, activeHarpStrata, setActiveHarpStrata }
  const secondPozitionButtonProps = { id: PozitionIds.Second, activeHarpStrata, setActiveHarpStrata }
  const thirdPozitionButtonProps = { id: PozitionIds.Third, activeHarpStrata, setActiveHarpStrata }
  const fourthPozitionButtonProps = { id: PozitionIds.Fourth, activeHarpStrata, setActiveHarpStrata }
  const fifthPozitionButtonProps = { id: PozitionIds.Fifth, activeHarpStrata, setActiveHarpStrata }
  const sixthPozitionButtonProps = { id: PozitionIds.Sixth, activeHarpStrata, setActiveHarpStrata }
  const seventhPozitionButtonProps = { id: PozitionIds.Seventh, activeHarpStrata, setActiveHarpStrata }

  const cHarpKeyUpdateButtonProps = { id: PitchIds.C, activeHarpStrata, setActiveHarpStrata }
  const dHarpKeyUpdateButtonProps = { id: PitchIds.D, activeHarpStrata, setActiveHarpStrata }
  const eHarpKeyUpdateButtonProps = { id: PitchIds.E, activeHarpStrata, setActiveHarpStrata }
  const fHarpKeyUpdateButtonProps = { id: PitchIds.F, activeHarpStrata, setActiveHarpStrata }
  const gHarpKeyUpdateButtonProps = { id: PitchIds.G, activeHarpStrata, setActiveHarpStrata }
  const aHarpKeyUpdateButtonProps = { id: PitchIds.A, activeHarpStrata, setActiveHarpStrata }
  const bHarpKeyUpdateButtonProps = { id: PitchIds.B, activeHarpStrata, setActiveHarpStrata }


  const styles = StyleSheet.create({
    headsupdiplay: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    controls: {
      flex: 5,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    column: {
      flex: 1,
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
        <View style={styles.column}>
          <PozitionButton {...firstPozitionButtonProps} />
          <PozitionButton {...secondPozitionButtonProps} />
          <PozitionButton {...thirdPozitionButtonProps} />
          <PozitionButton {...fourthPozitionButtonProps} />
          <PozitionButton {...fifthPozitionButtonProps} />
          <PozitionButton {...sixthPozitionButtonProps} />
          <PozitionButton {...seventhPozitionButtonProps} />
        </View>
        <View style={styles.column}>
          <HarpKeyUpdateButton {...cHarpKeyUpdateButtonProps} />
          <HarpKeyUpdateButton {...dHarpKeyUpdateButtonProps} />
          <HarpKeyUpdateButton {...eHarpKeyUpdateButtonProps} />
          <HarpKeyUpdateButton {...fHarpKeyUpdateButtonProps} />
          <HarpKeyUpdateButton {...gHarpKeyUpdateButtonProps} />
          <HarpKeyUpdateButton {...aHarpKeyUpdateButtonProps} />
          <HarpKeyUpdateButton {...bHarpKeyUpdateButtonProps} />
        </View>
      </View>
    </>
  )
}
