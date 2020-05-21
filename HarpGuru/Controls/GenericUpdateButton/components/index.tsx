import {Button} from 'react-native'
import React from 'react'
import type { ReactElement } from 'react'
import { getHarpStrata } from 'harpstrata'

import type { GenericUpdateProps } from '../types'
import { getUpdateHarpStrataProps } from '../getUpdateHarpStrataProps'

const setNewHarpStrata = (props: GenericUpdateProps): void => {
  const { setActiveHarpStrata } = props
  const newHarpStrata = getHarpStrata(getUpdateHarpStrataProps(props))
  setActiveHarpStrata(newHarpStrata)
}

export function GenericUpdateButton(props: GenericUpdateProps): ReactElement {
  return (
    <Button onPress={(): void => {setNewHarpStrata(props)}} title={props.updateId} disabled={false} />
  )
}
