import { Button } from 'react-bootstrap'

import { signOut } from '../../api/auth'

const SignOutButton = ({ token }) => {
  const handleClick = () => {
    signOut(token).then(console.log)
  }

  return (
    <Button variant='primary' onClick={handleClick}>
      Sign Out
    </Button>
  )
}

export default SignOutButton
