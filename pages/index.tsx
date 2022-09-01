import Button from 'components/Button'
import Input from 'components/Input'
import { NextPage } from 'next'
import { useState } from 'react'

/*
  [ ] - La home page doit être accessible seulement pour les personnes authentifiées (voir /api).
  [ ] - La home page doit contenir un input.
  [ ] - Cet input doit nous permettre de rechercher des cocktails, par nom (voir https://www.thecocktaildb.com/api.php).
  [ ] - Afficher les cocktails trouvés sous forme de liste.
  Bonus:
  [ ] - Recherche par ingrédient
  [ ] - Page détails
  [ ] - Find extra ideas w/ other API calls.
  https://www.thecocktaildb.com/api.php

  Si tu bloques sur une partie, ne t'attarte pas dessus et passe à la suivante !

  Have fun !
*/
interface Request {
  method: 'POST' | 'GET'
  headers: { 'Content-Type': 'application/json' }
  body: string
}

const SignInForm = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleClick = async () => {
    const requestOptions: Request = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: username, password: password }),
    }
    const response = await fetch(
      'http://localhost:3000/api/signin',
      requestOptions,
    )

    const data = await response.json()

    if (!response.ok) {
      console.log(data)
    } else {
      console.log(data)
    }
  }

  return (
    <form>
      <Input label="Username" onChange={(e) => setUsername(e.target.value)} />
      <Input label="Password" onChange={(e) => setPassword(e.target.value)} />
      <Button onClick={handleClick}>Sign In</Button>
    </form>
  )
}

const SignUpForm = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleClick = async () => {
    const requestOptions: Request = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: username, password: password }),
    }
    const response = await fetch(
      'http://localhost:3000/api/signup',
      requestOptions,
    )

    const data = await response.json()

    if (!response.ok) {
      console.log(data)
    } else {
      console.log(data)
    }
  }

  return (
    <form>
      <Input label="Username" onChange={(e) => setUsername(e.target.value)} />
      <Input label="Password" onChange={(e) => setPassword(e.target.value)} />
      <Button onClick={handleClick}>Sign Up</Button>
    </form>
  )
}

const Home: NextPage = () => {
  const title = 'The Grand Cocktail Compendium'
  return (
    <>
      <h1>{title}</h1>
      <SignInForm />
      <SignUpForm />
    </>
  )
}

export default Home
