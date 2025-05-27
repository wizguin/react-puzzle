import './App.css'

import { createStartGrid, generateSolution, resetTurnGrid } from './utils/gridUtils'
import { gridAtom, instructionsVisibleAtom, solutionAtom, turnGridAtom } from './atoms'

import Instructions from './components/modal/Instructions'
import Puzzle from './components/puzzle/Puzzle'
import Warning from './components/warning/Warning'

import { useAtom, useAtomValue, useSetAtom } from 'jotai'
import { useEffect } from 'react'

export default function App() {

    const [solution, setSolution] = useAtom(solutionAtom)

    const setGrid = useSetAtom(gridAtom)
    const setTurnGrid = useSetAtom(turnGridAtom)

    const instructionsVisible = useAtomValue(instructionsVisibleAtom)

    // Generates a new solution
    useEffect(() => {
        setSolution(generateSolution())
    }, [])

    // Initialize grids for new game
    useEffect(() => {
        setGrid(createStartGrid(solution))
        setTurnGrid(resetTurnGrid())
    }, [solution])

    return (
        <div id='container'>
            <Warning />

            <h1>react-puzzle</h1>

            {instructionsVisible && <Instructions />}
            <Puzzle />
        </div>
    )

}
