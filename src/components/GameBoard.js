import { useState, useEffect } from 'react'
import { Container, Row, Button } from 'react-bootstrap'

import { newGame, updateGame } from '../api/games.js'
import {
  initiateSocketConnection,
  disconnectSocket,
  listenForUpdatedGame,
} from '../socketService.js'
import Cell from './Cell.js'

const GameBoard = () => {
  const [gameBoard, setGameBoard] = useState({
    cells: [],
    winner: '',
    isOver: false,
  })

  const [currentPlayer, setCurrentPlayer] = useState('x')

  const [isAttacking, setIsAttacking] = useState(false)

  useEffect(() => {
    console.log('In useEffect')
    initiateSocketConnection()
    listenForUpdatedGame(setGameBoard)

    return () => disconnectSocket()
  }, [])

  const changePlayer = () =>
    currentPlayer === 'x' ? setCurrentPlayer('o') : setCurrentPlayer('x')

  const changeAttacking = () => {
    console.log('here')
    setIsAttacking(!isAttacking)
  }

  const onNewGameClick = () => {
    newGame()
      .then((response) => setGameBoard(response.data.game))
      .catch(console.error)
  }

  const onCellClick = (cell) => {
    if (!gameBoard.isOver && cell.value === '') {
      const newCellData = {
        id: cell._id,
        row: cell.row,
        value: currentPlayer,
        isAttacking,
      }

      updateGame(newCellData, gameBoard._id)
        // .then((response) => setGameBoard(response.data.game))
        .then(() => {
          if (!isAttacking) {
            changePlayer()
          }
          changeAttacking()
        })
        .catch(console.error)
    }
  }

  return (
    <>
      {gameBoard.isOver ? (
        <p>{gameBoard.winner}, you've won!</p>
      ) : (
        <p>
          {currentPlayer}, it's your turn to {isAttacking ? 'attack' : 'defend'}{' '}
          a square!
        </p>
      )}

      <Container>
        {gameBoard.cells.map((row, rowIndex) => (
          <Row key={rowIndex}>
            {row.map((cell) => (
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
