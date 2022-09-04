import { useState } from 'react'
import { Data } from 'types/response'
import Button from './Button'
import Input from './Input'
import { showToast } from './Toast'
import { useCurrentUserContext } from 'contexts/CurrentUserContext'

const UserForm = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [signingUp, setSigningUp] = useState(false)

  const { setCurrentUser, signIn, signUp } = useCurrentUserContext()

  const handleClick = async () => {
    if (!signingUp) {
      const response = await signIn(username, password)

      const data: Data = await response.json()

      if (!response.ok) {
        showToast({
          type: 'error',
          title: 'Error logging in',
          message: data.message,
        })
      } else {
        setCurrentUser({
          username: data.user?.username,
          password: data.user?.password,
        })
      }
    }

    if (signingUp) {
      const response = await signUp(username, password)

      const data: Data = await response.json()

      if (!response.ok) {
        showToast({
          type: 'error',
          title: 'Error signing up',
          message: data.message,
        })
      } else {
        setCurrentUser({
          username: data.user?.username,
          password: data.user?.password,
        })
      }
    }
  }

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="flex flex-col items-center justify-center space-y-2"
    >
      <Input
        name="Username"
        label="Username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <Input
        name="Password"
        label="Password"
        type={'password'}
        onChange={(e) => setPassword(e.target.value)}
      />
      <div className="flex flex-col items-center justify-center space-y-2">
        <Button type="submit" onClick={handleClick}>
          {signingUp ? 'Sign Up' : 'Sign In'}
        </Button>
        <span
          onClick={() => setSigningUp(!signingUp)}
          className="cursor-pointer self-center text-sm text-blue-900"
        >
          {signingUp ? 'Already have an account?' : "Don't have an account?"}
        </span>
      </div>
    </form>
  )
}

export default UserForm
