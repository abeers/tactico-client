import { useState } from 'react'
import { Container, Row, Button } from 'react-bootstrap'
import axios from 'axios'

import Cell from './Cell.js'

const GameBoard = () => {
    const [gameBoard, setGameBoard] = useState({
        cells: []
    })

    const [currentPlayer, setCurrentPlayer] = useState('x')

    const changePlayer = () => currentPlayer === 'x' ? setCurrentPlayer('o') : setCurrentPlayer('x')
    
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
        const newCellData = {
            id: cell._id,
            row: cell.row,
            value: currentPlayer
        }

        axios({
            url: `http://localhost:4741/games/${gameBoard._id}`,
            method: 'PATCH',
            data: newCellData
        })
            .then((response) => setGameBoard(response.data.game))
            .then(changePlayer)
            .catch(console.error)
    }

    return (
        <>
            <p>Testing GameBoard</p>
            <Container>
                {gameBoard.cells.map((row, rowIndex) => (
                    <Row key={rowIndex}>
                        {row.map(cell => (
                            <Cell 
                                key={cell._id}
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