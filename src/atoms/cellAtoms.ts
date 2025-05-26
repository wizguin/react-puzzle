import { atom } from 'jotai'

interface SelectedCell {
    box: number,
    cell: number
}

export const selectedCellAtom = atom<SelectedCell | null>(null)
