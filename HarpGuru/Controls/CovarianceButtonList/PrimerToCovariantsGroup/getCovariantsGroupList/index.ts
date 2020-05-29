import { getPitchIds, PitchIds, getCovariants, CovariantsGroup } from 'harpstrata'
import type { CovariantControlVars, RootPitchControlVars } from 'harpstrata'

import type { ControlVarsPrimer } from '../types'
import { getControlVars } from '../getControlVars'

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
  }

  throw new Error ('Function not set up to handle anything other than RootPitchControlVars at the moment')
}
