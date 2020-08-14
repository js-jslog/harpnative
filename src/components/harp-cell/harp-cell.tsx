import Animated from 'react-native-reanimated'
import {
  TapGestureHandler,
  TapGestureHandlerStateChangeEvent,
  State,
  LongPressGestureHandler,
} from 'react-native-gesture-handler'
import { Text, View } from 'react-native'
import type { TextStyle, ViewStyle } from 'react-native'
import React from 'react'
import type { DegreeIds, PitchIds, IsActiveIds } from 'harpstrata'

import type { Coord, ExperienceModes } from '../../types'

import { getStyles } from './utils'

export type YXCoord = [Coord, Coord]

export type HarpCellStyles = {
  readonly cell: ViewStyle
  readonly contentsWrapper: ViewStyle
  readonly note: TextStyle
  readonly modifier: TextStyle
}

type DisplayValueTuple =
  | [string, string]
  | [string, undefined]
  | [undefined, undefined]

type HarpCellProps = {
  readonly yxCoord: YXCoord
  readonly thisDegreeId: DegreeIds | undefined
  readonly thisPitchId: PitchIds | undefined
  readonly thisIsActiveId: IsActiveIds | undefined
  readonly displayValue: DisplayValueTuple
  readonly activeExperienceMode: ExperienceModes
  readonly toggleHarpCell: (arg0: DegreeIds | undefined) => void
  readonly setPozitionRoot: (arg0: PitchIds | undefined) => void
}

export const HarpCell = ({ thisDegreeId, thisPitchId, thisIsActiveId, displayValue, activeExperienceMode, toggleHarpCell, setPozitionRoot }: HarpCellProps): React.ReactElement => {
  const [styles, animatedCellColor] = getStyles({thisDegreeId, thisIsActiveId, activeExperienceMode})

  const handleTapStateChange = ({
    nativeEvent,
  }: TapGestureHandlerStateChangeEvent) => {
    if (nativeEvent.state !== State.END) return

    toggleHarpCell(thisDegreeId)
  }

  const handleLongPressStateChange = ({
    nativeEvent,
  }: TapGestureHandlerStateChangeEvent) => {
    if (nativeEvent.state !== State.ACTIVE) return

    setPozitionRoot(thisPitchId)
  }

  const accessibleContent = (
    <LongPressGestureHandler onHandlerStateChange={handleLongPressStateChange}>
      <TapGestureHandler onHandlerStateChange={handleTapStateChange}>
        <Animated.View
          accessible={true}
          accessibilityRole="button"
          style={[
            styles.cell,
            {
              backgroundColor: animatedCellColor,
            },
          ]}
        >
          <View style={styles.contentsWrapper}>
            <Text style={styles.note}>{displayValue[0]}</Text>
          </View>
          <View style={styles.contentsWrapper}>
            <Text style={styles.modifier}>{displayValue[1]}</Text>
          </View>
        </Animated.View>
      </TapGestureHandler>
    </LongPressGestureHandler>
  )

  const inAccessibleContent = (
    <View accessible={false} style={styles.cell}>
      <View style={styles.cell} />
    </View>
  )

  const content =
    thisDegreeId === undefined ? inAccessibleContent : accessibleContent

  return content
}
