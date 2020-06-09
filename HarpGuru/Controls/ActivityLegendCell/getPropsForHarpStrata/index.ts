import type { HarpStrata, HarpStrataProps } from 'harpstrata'

// TODO: this is a duplicate of a function elsewhere. These should be be placed somewhere communal
export const getPropsForHarpStrata = (harpStrata: HarpStrata): HarpStrataProps => {
  const { apparatus: { id: apparatusId }} = harpStrata
  const { pozitionId } = harpStrata
  const { harpKeyId } = harpStrata
  const { isActiveComplex: { activeDegreeIds: activeIds }} = harpStrata

  const harpStrataProps = {
    apparatusId, pozitionId, harpKeyId, activeIds
  }

  return harpStrataProps
}
