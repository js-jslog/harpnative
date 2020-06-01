import type { CovariantControlVars } from 'harpstrata'
import { getPitchIds, getPozitionIds, isPitchId, isPozitionId } from 'harpstrata'

import type { ControlVarsPrimer  } from '../types'
import { getControlVars } from '../getControlVars'

export const getControlVarsArray = (props: ControlVarsPrimer): ReadonlyArray<CovariantControlVars> => {
  const { variedValue } = props
  if ( isPitchId(variedValue) ) {
    const variedValues = getPitchIds(variedValue)
    return variedValues.map((nextVariedValue) => {
      return getControlVars({ ...props, variedValue: nextVariedValue } as ControlVarsPrimer)
    })
  } else if ( isPozitionId(variedValue) ) {
    const variedValues = getPozitionIds(variedValue)
    return variedValues.map((nextVariedValue) => {
      return getControlVars({ ...props, variedValue: nextVariedValue } as ControlVarsPrimer)
    })
  }

  const errorMessage = `
    Varied value expected to either be PitchIds or PozitionIds.

    Input: ${JSON.stringify(props)}

    The Covariants only consist of Pitches (harp key and root pitch) and Pozitions,
    so anything else entered here must be a mistake.
  `
  throw new Error(errorMessage)
}
