import { useGlobal } from 'reactn'
import { StyleSheet, View, Text } from 'react-native'
import React from 'react'

import { MenuContainer } from '../menu-container'
import { sizes } from '../../styles'

const styles = StyleSheet.create({
  view: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  question: {
    fontSize: sizes['8'],
  },
})

export const QuizQuestionDisplay = (): React.ReactElement => {
  const [quizQuestion] = useGlobal('quizQuestion')
  return (
    <MenuContainer>
      <View style={styles.view}>
        <Text style={styles.question}>{quizQuestion}</Text>
      </View>
    </MenuContainer>
  )
}
