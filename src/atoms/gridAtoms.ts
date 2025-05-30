import { atom } from 'jotai'

export type GridData = (number | null)[][]
export type SolvedGridData = number[][]

export const gridAtom = atom<GridData>([])
export const solutionAtom = atom<SolvedGridData>([])

// Moves made during current turn
export const turnGridAtom = atom<GridData>([])

export const turnAtom = atom<number>(1)
