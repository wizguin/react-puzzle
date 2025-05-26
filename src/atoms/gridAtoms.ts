import { atom } from 'jotai'

export type GridData = number[][]

export const gridAtom = atom<GridData>([])
export const solutionAtom = atom<GridData>([])
