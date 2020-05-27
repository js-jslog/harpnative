import { PitchIds, PozitionIds, getCovariants } from 'harpstrata'
import type { CovariantsGroup, CovariantControlVars } from 'harpstrata'

type VariableValues = ReadonlyArray<PitchIds> | ReadonlyArray<PozitionIds>;

type CovariantMapPrimer = {
  readonly lockedValue: PitchIds | PozitionIds;
  readonly variableValues: VariableValues;
}

type CovariantMap = ReadonlyArray<CovariantsGroup>

export const getCovariantMap = (props: CovariantMapPrimer): CovariantMap => {
  const { lockedValue } = props
  const { variableValues } = props

  const covariantMap = (variableValues as ReadonlyArray<PitchIds>).map((variableValue) => {
    const controlVars = {
      harpKeyId: variableValue,
      rootPitchId: lockedValue,
    } as CovariantControlVars

    return getCovariants(controlVars)
  })

  return covariantMap
}
