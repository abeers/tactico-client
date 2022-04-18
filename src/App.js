import { useState } from 'react'
import { Container, Col } from 'react-bootstrap'

import SignUpForm from './components/auth/SignUpForm.js'
import SignInForm from './components/auth/SignInForm.js'
import ChangePasswordForm from './components/auth/ChangePasswordForm.js'
import SignOutButton from './components/auth/SignOutButton.js'
import GameBoard from './components/game/GameBoard.js'
import './App.css'

const App = () => {
  const [user, setUser] = useState({
    token: null,
  })
  return (
    <Container>
      <h1>Tactico</h1>
      {!user.token && (
        <>
          <SignUpForm setUser={setUser} />
          <SignInForm setUser={setUser} />
        </>
      )}

      {user.token && (
        <>
          <ChangePasswordForm token={user.token} />
          <SignOutButton token={user.token} setUser={setUser} />
          <Col xs={{ span: 6, offset: 3 }}>
            <GameBoard />
          </Col>
        </>
      )}
    </Container>
  )
}

export default App
