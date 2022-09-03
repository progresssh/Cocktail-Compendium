import LoadingSpinner from 'components/LoadingSpinner'
import SearchForm from 'components/SearchForm'
import { useCurrentUserContext } from 'contexts/CurrentUserContext'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { Cocktail, Drink } from 'types/cocktail'

/*
  [x] - La home page doit être accessible seulement pour les personnes authentifiées (voir /api).
  [x] - La home page doit contenir un input.
  [x] - Cet input doit nous permettre de rechercher des cocktails, par nom (voir https://www.thecocktaildb.com/api.php).
  [x] - Afficher les cocktails trouvés sous forme de liste.
  Bonus:
  [x] - Recherche par ingrédient
  [ ] - Page détails
  [ ] - Find extra ideas w/ other API calls.
  https://www.thecocktaildb.com/api.php

  Si tu bloques sur une partie, ne t'attarte pas dessus et passe à la suivante !

  Have fun !
*/

const SearchResults = ({
  cocktails,
  isLoading,
}: {
  cocktails: Cocktail | null
  isLoading: boolean
}) => {
  return (
    <ul>
      {isLoading && (
        <div className="absolute">
          <LoadingSpinner size="sm" />
        </div>
      )}
      {cocktails?.drinks?.map((cocktail: Drink) => {
        return <li key={cocktail.idDrink}>{cocktail.strDrink}</li>
      })}
    </ul>
  )
}

const Home: NextPage = () => {
  const [cocktails, setCocktails] = useState<Cocktail>(undefined!)
  const [isLoading, setIsLoading] = useState(false)

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
            <SearchForm
              setCocktails={setCocktails}
              setIsLoading={setIsLoading}
            />
            <SearchResults cocktails={cocktails} isLoading={isLoading} />
          </div>
        )}
    </>
  )
}

export default Home
