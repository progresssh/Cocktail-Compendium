import UserForm from 'components/UserForm'
import { useCurrentUserContext } from 'contexts/CurrentUserContext'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const Welcome: NextPage = () => {
  const { currentUser } = useCurrentUserContext()
  const router = useRouter()

  useEffect(() => {
    if (
      currentUser.password !== undefined &&
      currentUser.username !== undefined
    ) {
      router.push('/')
    }
  }, [currentUser, router])

  return (
    <>
      <h1>Welcome, please sign up or login to access the Compendium.</h1>
      <UserForm />
    </>
  )
}

export default Welcome
