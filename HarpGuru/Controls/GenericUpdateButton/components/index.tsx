import {Button} from 'react-native'
import React from 'react'
import type { ReactElement } from 'react'
import { getHarpStrata } from 'harpstrata'

import type { GenericUpdateProps } from '../types'
import { getUpdateHarpStrataProps } from '../getUpdateHarpStrataProps'
import { getActiveIdForUpdateCategory } from '../getActiveIdForUpdateCategory'

const setNewHarpStrata = (props: GenericUpdateProps): void => {
  const { setActiveHarpStrata } = props
  const newHarpStrata = getHarpStrata(getUpdateHarpStrataProps(props))
  setActiveHarpStrata(newHarpStrata)
}

const isDisabled = (props: GenericUpdateProps): boolean => {
  const activeId = getActiveIdForUpdateCategory(props)
  const { updateId } = props

  return (updateId === activeId)
}

export function GenericUpdateButton(props: GenericUpdateProps): ReactElement {
  return (
    <Button onPress={(): void => {setNewHarpStrata(props)}} title={props.updateId} disabled={isDisabled(props)} />
  )
}
