import Input from 'components/Input'
import { useCurrentUserContext } from 'contexts/CurrentUserContext'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

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
const Home: NextPage = () => {
  const router = useRouter()
  const title = 'The Grand Cocktail Compendium'
  const { currentUser } = useCurrentUserContext()

  useEffect(() => {
    if (
      currentUser.username === undefined &&
      currentUser.password === undefined
    ) {
      router.push('/welcome')
    }
  }, [currentUser, router])
  return (
    <>
      {currentUser.username !== undefined &&
        currentUser.password !== undefined && (
          <div>
            <p>{`Welcome to the ${title}, ${currentUser.username} !`}</p>
            <Input></Input>
          </div>
        )}
    </>
  )
}

export default Home
