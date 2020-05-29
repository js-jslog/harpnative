import { getPitchIds, PitchIds, getCovariants, CovariantsGroup } from 'harpstrata'
import type { CovariantControlVars, RootPitchControlVars, PozitionControlVars } from 'harpstrata'

import type { ControlVarsPrimer } from '../types'
import { getControlVars } from '../getControlVars'

const isPozitionControlVars = (props: CovariantControlVars): props is PozitionControlVars => {
  const hasRootPitch = (props as PozitionControlVars).rootPitchId !== undefined
  const hasHarpKey = (props as PozitionControlVars).harpKeyId !== undefined

  return hasRootPitch && hasHarpKey
}
const isRootPitchControlVars = (props: CovariantControlVars): props is RootPitchControlVars => {
  const hasHarpKey = (props as RootPitchControlVars).harpKeyId !== undefined
  const hasPozition = (props as RootPitchControlVars).pozitionId !== undefined

  return hasHarpKey && hasPozition
}

export const getCovariantsGroupList = (props: ControlVarsPrimer): ReadonlyArray<CovariantsGroup> => {
  const controlVars = getControlVars(props)
  if (isRootPitchControlVars(controlVars)) {
    const { variedValue } = props
    if (Object.values(PitchIds).includes(variedValue as PitchIds)) {
      const variedArray = getPitchIds(variedValue as PitchIds)
      const covariantsGroupList = variedArray.map((harpKeyId) => {
        return getCovariants({ ...controlVars, harpKeyId })
      })
      return covariantsGroupList
    }
  } else if (isPozitionControlVars(controlVars)) {
    const { variedValue } = props
    if (Object.values(PitchIds).includes(variedValue as PitchIds)) {
      const variedArray = getPitchIds(variedValue as PitchIds)
      const covariantsGroupList = variedArray.map((harpKeyId) => {
        return getCovariants({ ...controlVars, harpKeyId })
      })
      return covariantsGroupList
    }
  }

  throw new Error ('Function not set up to handle HarpKeyControlVars at the moment')
}
