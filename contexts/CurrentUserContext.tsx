import { createContext, useContext, useState } from 'react'
import { Request } from 'types/request'
import {
  CurrentUser,
  CurrentUserContext,
  CurrentUserProviderProps,
} from 'types/currentUser'

const CurrentUserContext = createContext<CurrentUserContext | undefined>(
  undefined,
)

export const useCurrentUserContext = () => {
  const context = useContext(CurrentUserContext)

  if (context === undefined) {
    throw Error(
      'CurrentUserContext must be used inside of a CurrentUserContext provider.',
    )
  }

  return context
}

const CurrentUserProvider = ({ children }: CurrentUserProviderProps) => {
  const [currentUser, setCurrentUser] = useState<CurrentUser>({
    username: undefined,
    password: undefined,
  })

  const signIn = async (username: string, password: string) => {
    const requestOptions: Request = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: username, password: password }),
    }
    const response = await fetch(
      'https://cocktail-compendium.vercel.app/api/signin',
      requestOptions,
    )

    return response
  }

  const signUp = async (username: string, password: string) => {
    const requestOptions: Request = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: username, password: password }),
    }
    const response = await fetch(
      'https://cocktail-compendium.vercel.app/api/signup',
      requestOptions,
    )

    return response
  }

  return (
    <CurrentUserContext.Provider
      value={{ currentUser, setCurrentUser, signIn, signUp }}
    >
      {children}
    </CurrentUserContext.Provider>
  )
}

export default CurrentUserProvider
