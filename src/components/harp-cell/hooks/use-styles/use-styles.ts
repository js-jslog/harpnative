import { useGlobal } from 'reactn'
import { useTimingTransition, interpolateColor } from 'react-native-redash'
import { Easing, Node } from 'react-native-reanimated'
import { StyleSheet } from 'react-native'
import { IsActiveIds } from 'harpstrata'

import { usePositionAnalysis } from '../use-position-analysis'
import { HarpCellStyles, YXCoord } from '../../harp-cell'
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

export const useStyles = (yxCoord: YXCoord): [HarpCellStyles, Node<number>] => {
  const [activeExperienceMode] = useGlobal('activeExperienceMode')
  const positionFacts = usePositionAnalysis(yxCoord)
  const { thisDegreeId, thisIsActiveId } = positionFacts
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
