import { getHarpStrata } from 'harpstrata'

import { keyCHarpStrata } from '../../testResources'
import {DisplayModes} from '../../../HarpFace'

import { getPropsForHarpStrata } from './index'

test('given a HarpStrata, getPropsForHarpStrata supplies the props to generate the exact same HarpStrata again', () => {
  const sourceHarpStrata = keyCHarpStrata

  const derivedHarpStrataProps = getPropsForHarpStrata({ ...sourceHarpStrata, displayMode: DisplayModes.Pitch })

  expect(getHarpStrata(derivedHarpStrataProps)).toStrictEqual(sourceHarpStrata)
})
