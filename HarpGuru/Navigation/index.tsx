import {Button} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export const NavToPozitionControl = (): React.ReactElement => {

  const navigation = useNavigation()

  return (
    <Button
      title='Change pozition'
      onPress={(): void =>
        navigation.navigate('PozitionControlPanel')
      }
    />
  )
}
