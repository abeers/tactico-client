import { Button, Col } from 'react-bootstrap'
import './Cell.css'

const Cell = ({ cell, onCellClick }) => (
	<Col className='gameCellWrapper' xs={4}>
		<Button
			className='gameCell'
			variant='outline-primary'
			onClick={onCellClick}>
			{cell.value}
		</Button>
	</Col>
)

export default Cell
