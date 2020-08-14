import { useTimingTransition, interpolateColor } from 'react-native-redash'
import { Easing, Node } from 'react-native-reanimated'
import { StyleSheet } from 'react-native'
import type { DegreeIds } from 'harpstrata'
import { IsActiveIds } from 'harpstrata'

import { HarpCellStyles } from '../../harp-cell'
import { ExperienceModes } from '../../../../types'
import { sizes, colors } from '../../../../styles'

const {
  1: borderWidth,
  6: borderRadius,
  2: elevation,
  7: noteFontSize,
  5: modifierTopMargin,
  6: modifierFontSize,
} = sizes
const width = sizes['8'] + sizes['4']
const height = sizes['8'] + sizes['4']
const { pageColor, degreeColors, inertOutline: borderColor } = colors

type GetStylesProps = {
  readonly thisDegreeId: DegreeIds | undefined
  readonly thisIsActiveId: IsActiveIds | undefined
  readonly activeExperienceMode: ExperienceModes
}

export const getStyles = ({thisDegreeId, thisIsActiveId, activeExperienceMode}: GetStylesProps): [HarpCellStyles, Node<number>] => {
  const isActive = thisIsActiveId === IsActiveIds.Active
  const isQuizMode = activeExperienceMode === ExperienceModes.Quiz
  const activeCellColor = thisDegreeId ? degreeColors[thisDegreeId] : pageColor
  const inactiveCellColor = pageColor

  const activityTransAnimationVal = useTimingTransition(isActive, {
    duration: 400,
    easing: Easing.inOut(Easing.ease),
  })
  const animatedCellColor = interpolateColor(activityTransAnimationVal, {
    inputRange: [0, 1],
    outputRange: [inactiveCellColor, activeCellColor],
  })

  const styles = StyleSheet.create<HarpCellStyles>({
    cell: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      elevation: isActive ? elevation : 0,
      borderRadius,
      borderWidth: thisDegreeId ? borderWidth : 0,
      borderColor: isActive ? 'transparent' : borderColor,
      width,
      height,
    },
    contentsWrapper: {
      ...StyleSheet.absoluteFillObject,
      justifyContent: 'center',
      alignItems: 'center',
    },
    note: {
      display: isQuizMode && !isActive ? 'none' : 'flex',
      color: isActive ? pageColor : borderColor,
      fontSize: noteFontSize,
    },
    modifier: {
      bottom: modifierTopMargin,
      left: modifierTopMargin,
      display: isQuizMode && !isActive ? 'none' : 'flex',
      color: isActive ? pageColor : borderColor,
      fontSize: modifierFontSize,
    },
  })

  return [styles, animatedCellColor]
}
