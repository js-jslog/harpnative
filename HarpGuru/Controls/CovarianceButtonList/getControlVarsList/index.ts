import { PitchIds, PozitionIds, getPitchIds, getPozitionIds } from 'harpstrata'
import type { CovariantControlVars } from 'harpstrata'

import { getControlVars } from '../PrimerToCovariantsGroup'
import type { ControlVarsPrimer } from '../PrimerToCovariantsGroup'

export const getControlVarsList = (props: ControlVarsPrimer): ReadonlyArray<CovariantControlVars> => {
  const { variedValue } = props

  if ( Object.keys(PitchIds).includes(variedValue) ) {
    const variedArray = getPitchIds(variedValue as PitchIds)

    const covariantControlVarsList = variedArray.map((variedValue) => {
      const variedPrimer = { ...props, variedValue } as ControlVarsPrimer
      return getControlVars(variedPrimer)
    }) as ReadonlyArray<CovariantControlVars>

    return covariantControlVarsList
  }

  if ( Object.values(PozitionIds).includes(variedValue as PozitionIds) ) {
    const variedArray = getPozitionIds(variedValue as PozitionIds)

    const covariantControlVarsList = variedArray.map((variedValue) => {
      const variedPrimer = { ...props, variedValue } as ControlVarsPrimer
      return getControlVars(variedPrimer)
    }) as ReadonlyArray<CovariantControlVars>

    return covariantControlVarsList
  }

  const errorMessage = `
    Expected variedValue to either be a PitchIds or PozitionIds value on input.

    Input: ${JSON.stringify(props)}

    PitchIds: ${Object.values(PitchIds)}
    PozitionIds: ${Object.values(PozitionIds)}
  `
  throw new Error(errorMessage)
}
