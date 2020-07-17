import { StyleSheet, View, Text } from 'react-native'
import React from 'react'

import { MenuContainer } from '../../MenuContainer'
import { themeSizes } from '../../../../Theme'

const styles = StyleSheet.create({
  view: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  question: {
    fontSize: themeSizes['8'],
  },
})

export const QuizQuestionDisplay = (): React.ReactElement => {
  return (
    <MenuContainer>
      <View style={styles.view}>
        <Text style={styles.question}>Quiz item</Text>
      </View>
    </MenuContainer>
  )
}
