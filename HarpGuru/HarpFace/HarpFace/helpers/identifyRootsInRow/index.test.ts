import { DegreeIds } from 'harpstrata'

import { identifyRootsInRow } from './index'

test('Map a simple degreeMatrix to identify its roots', () => {
  const degreeMatrix = [[{id: DegreeIds.Root}, {id: DegreeIds.Second}, {id: DegreeIds.Fourth}]]
  const expectedRootsMatrix = [[ true, false, false ]]

  const actualRootsMatrix = degreeMatrix.map(identifyRootsInRow)

  expect(actualRootsMatrix).toStrictEqual(expectedRootsMatrix)
})

test('Map a multidimensional simple degreeMatrix to identify its roots', () => {
  const degreeMatrix = [
    [{id: DegreeIds.Root}, {id: DegreeIds.Second}, {id: DegreeIds.Fourth}],
    [{id: DegreeIds.Root}, undefined, {id: DegreeIds.Root}],
  ]
  const expectedRootsMatrix = [
    [ true, false, false ],
    [ true, false, true ]
  ]

  const actualRootsMatrix = degreeMatrix.map(identifyRootsInRow)

  expect(actualRootsMatrix).toStrictEqual(expectedRootsMatrix)
})
