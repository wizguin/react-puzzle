import { atom } from 'jotai'

// Warning message, non-null values trigger warning component visibility
export const warningAtom = atom<string | null>(null)
