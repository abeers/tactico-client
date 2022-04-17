import { Container, Col } from 'react-bootstrap'

import SignUpForm from './components/auth/SignUpForm.js'
import SignInForm from './components/auth/SignInForm.js'
import GameBoard from './components/game/GameBoard.js'
import './App.css'

function App() {
  return (
    <Container>
      <h1>Tactico</h1>
      <SignUpForm />
      <SignInForm />
      <Col xs={{ span: 6, offset: 3 }}>
        <GameBoard />
      </Col>
    </Container>
  )
}

export default App
