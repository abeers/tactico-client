import { Container, Row } from 'react-bootstrap'

import Cell from './Cell.js'

const gameBoard = [['x', 'o', ''], ['', 'x', 'o'], ['x', '', '']]

const GameBoard = () => (
	<>
		<p>Testing GameBoard</p>
		<Container>
			{gameBoard.map((row, rowIndex) => (
				<Row key={rowIndex}>
					{row.map((cell, cellIndex) => (
						<Cell key={cellIndex} value={cell} />
					))}
				</Row>
			))}
		</Container>
	</>
)

export default GameBoard