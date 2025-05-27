import './App.css'

import { createStartGrid, generateSolution, resetTurnGrid } from './utils/gridUtils'
import { gridAtom, solutionAtom, turnGridAtom } from './atoms'
import Puzzle from './components/puzzle/Puzzle'
import Warning from './components/warning/Warning'

import { useAtom, useSetAtom } from 'jotai'
import { useEffect } from 'react'

export default function App() {

    const [solution, setSolution] = useAtom(solutionAtom)

    const setGrid = useSetAtom(gridAtom)
    const setTurnGrid = useSetAtom(turnGridAtom)

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

            <Puzzle />
        </div>
    )

}
