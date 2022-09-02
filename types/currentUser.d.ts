import { Dispatch, ReactNode, SetStateAction } from 'react'

export interface CurrentUserContext {
  currentUser: CurrentUser
  setCurrentUser: Dispatch<SetStateAction<CurrentUser>>
  signUp: (username: string, password: string) => Promise<Response>
  signIn: (username: string, password: string) => Promise<Response>
}
export interface CurrentUser {
  username: string | undefined
  password: string | undefined
}
export interface CurrentUserProviderProps {
  children?: ReactNode
}
