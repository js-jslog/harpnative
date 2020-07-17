import { setGlobal } from 'reactn'
import { getHarpStrata, getApparatusIds, getPozitionIds, getPitchIds } from 'harpstrata'
import type { ActiveIds, HarpStrataProps, HarpStrata } from 'harpstrata'

const [initialApparatusId] = getApparatusIds()
const [initialPozitionId] = getPozitionIds()
const [initialPitchId] = getPitchIds()
const initialActiveIds: ActiveIds = []

const initialHarpStrataProps: HarpStrataProps = {
  apparatusId: initialApparatusId,
  pozitionId: initialPozitionId,
  harpKeyId: initialPitchId,
  activeIds: initialActiveIds,
}
const initialHarpStrata: HarpStrata = getHarpStrata(initialHarpStrataProps)

setGlobal({ activeHarpStrata: initialHarpStrata })
