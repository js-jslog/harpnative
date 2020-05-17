import {Button} from 'react-native'
import React from 'react'
import type { ReactElement } from 'react'
import type { HarpStrataProps } from 'harpstrata'
import { getHarpStrata } from 'harpstrata'

import type { PitchButtonProps } from '../types'

const getNewHarpStrata = (props: PitchButtonProps): void => {
  const { activeHarpStrata, setActiveHarpStrata, id: newHarpKeyId } = props

  const { apparatus: { id: apparatusId }} = activeHarpStrata
  const { pozitionId } = activeHarpStrata
  const harpKeyId = newHarpKeyId
  const { isActiveComplex: { activeDegreeIds: activeIds }} = activeHarpStrata

  const harpStrataProps: HarpStrataProps = { apparatusId, pozitionId, harpKeyId, activeIds }

  setActiveHarpStrata(getHarpStrata(harpStrataProps))
}

export function PitchButton(props: PitchButtonProps): ReactElement {
  return (
    <Button onPress={(): void => getNewHarpStrata(props)} title={props.id} />
  )
}
