import './App.css'
import { Container, Row, Col } from 'react-bootstrap'
import GameBoard from './components/GameBoard.js'

function App() {
  return (
		<Container>
			<h1>Tactico</h1>
			<Col xs={{ span: 6, offset: 3 }}>
				<GameBoard />
			</Col>
		</Container>
	)
}

export default App
