import {Button} from 'react-native'
import React from 'react'
import type { ReactElement } from 'react'
import type { HarpStrataProps } from 'harpstrata'
import { getHarpStrata } from 'harpstrata'

import type { PozitionButtonProps } from '../types'

const getNewHarpStrata = (props: PozitionButtonProps): void => {
  const { activeHarpStrata, setActiveHarpStrata, id: newPozitionId } = props

  const { apparatus: { id: apparatusId }} = activeHarpStrata
  const pozitionId = newPozitionId
  const { harpKeyId } = activeHarpStrata
  const { isActiveComplex: { activeDegreeIds: activeIds }} = activeHarpStrata

  const harpStrataProps: HarpStrataProps = { apparatusId, pozitionId, harpKeyId, activeIds }

  setActiveHarpStrata(getHarpStrata(harpStrataProps))
}

const isDisabled = (props: PozitionButtonProps): boolean => {
  const { activeHarpStrata: { pozitionId }, id: buttonId } = props

  return (pozitionId === buttonId)
}

export function PozitionButton(props: PozitionButtonProps): ReactElement {
  return (
    <Button onPress={(): void => getNewHarpStrata(props)} title={props.id} disabled={isDisabled(props)} />
  )
}
