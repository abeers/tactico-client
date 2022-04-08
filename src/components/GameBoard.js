import { useState } from 'react'
import { Container, Row, Button } from 'react-bootstrap'
import axios from 'axios'

import Cell from './Cell.js'

const GameBoard = () => {
    const [gameBoard, setGameBoard] = useState({
        cells: []
    })
    
    const onNewGameClick = () => {
        axios({
            url: `http://localhost:4741/games`,
            method: 'POST'
        })
            .then(response => setGameBoard(response.data.game))
            .catch(console.error)
    }

    const onCellClick = (cell) => {
        console.log(cell)

        if (cell.value === '') {
            cell.value = 'x'
        }
    }

    return (
        <>
            <p>Testing GameBoard</p>
            <Container>
                {gameBoard.cells.map((row, rowIndex) => (
                    <Row key={rowIndex}>
                        {row.map(cell => (
                            <Cell 
                                key={cell.position}
                                cell={cell}
                                onCellClick={() => onCellClick(cell)}
                            />
                        ))}
                    </Row>
                ))}
            </Container>
            <Button onClick={onNewGameClick}>New Game</Button>
        </>
    )
}

export default GameBoard