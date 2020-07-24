import { useGlobal, useDispatch } from 'reactn'
import {
  TapGestureHandler,
  TapGestureHandlerStateChangeEvent,
  State,
  LongPressGestureHandler,
} from 'react-native-gesture-handler'
import { Text, View } from 'react-native'
import React from 'react'

import { useStyles } from '../useStyles'
import { usePositionAnalysis } from '../usePositionAnalysis'
import { useDisplayValue } from '../useDisplayValue'
import { YXCoord } from '../types'
import { toggleDegreeIdInHarpStrata } from '../toggleDegreeIdInHarpStrata'
import { setPozitionRootAtCell } from '../setPozitionRootAtCell'
import { ensureCellIsActive } from '../ensureCellIsActive'
import { ExperienceModes } from '../../../helpers/setGlobalReactNState'

type Props = {
  readonly yxCoord: YXCoord
}

export const HarpCell = ({ yxCoord }: Props): React.ReactElement => {
  const [activeHarpStrata, setActiveHarpStrata] = useGlobal('activeHarpStrata')
  const [activeExperienceMode] = useGlobal('activeExperienceMode')
  const [quizQuestion] = useGlobal('quizQuestion')
  const { thisDegreeId, thisPitchId } = usePositionAnalysis(yxCoord)
  const displayValue = useDisplayValue(yxCoord)
  const styles = useStyles(yxCoord)

  const quizAnswerGiven = useDispatch('quizAnswerGiven')

  const handleTapStateChange = ({
    nativeEvent,
  }: TapGestureHandlerStateChangeEvent) => {
    if (nativeEvent.state !== State.END) return
    if (thisDegreeId === undefined) return

    const withUserSelectionUpdated = toggleDegreeIdInHarpStrata(
      activeHarpStrata,
      thisDegreeId
    )
    setActiveHarpStrata(withUserSelectionUpdated)
    if (activeExperienceMode === ExperienceModes.Quiz) {
      setActiveHarpStrata(
        ensureCellIsActive({
          harpStrata: withUserSelectionUpdated,
          cellId: quizQuestion,
        })
      )
      quizAnswerGiven()
    }
  }

  const handleLongPressStateChange = ({
    nativeEvent,
  }: TapGestureHandlerStateChangeEvent) => {
    if (nativeEvent.state !== State.ACTIVE) return
    if (thisPitchId === undefined) return

    setActiveHarpStrata(setPozitionRootAtCell(activeHarpStrata, thisPitchId))
  }

  const accessibleContent = (
    <LongPressGestureHandler onHandlerStateChange={handleLongPressStateChange}>
      <TapGestureHandler onHandlerStateChange={handleTapStateChange}>
        <View accessible={true} accessibilityRole="button" style={styles.cell}>
          <Text style={styles.note}>{displayValue[0]}</Text>
          <Text style={styles.modifier}>{displayValue[1]}</Text>
        </View>
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
