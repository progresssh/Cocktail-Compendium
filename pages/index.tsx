import Navbar from 'components/Navbar'
import SearchForm from 'components/SearchForm'
import SearchResults from 'components/SearchResults'
import { useCurrentUserContext } from 'contexts/CurrentUserContext'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { Cocktail } from 'types/cocktail'

/*
  [x] - La home page doit être accessible seulement pour les personnes authentifiées (voir /api).
  [x] - La home page doit contenir un input.
  [x] - Cet input doit nous permettre de rechercher des cocktails, par nom (voir https://www.thecocktaildb.com/api.php).
  [x] - Afficher les cocktails trouvés sous forme de liste.
  Bonus:
  [x] - Recherche par ingrédient
  [x] - Page détails
*/

const Home: NextPage = () => {
  const [cocktails, setCocktails] = useState<Cocktail>({ drinks: [] })
  const [isLoading, setIsLoading] = useState(false)

  const router = useRouter()

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
    <div className="h-screen overflow-auto bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 p-4">
      {currentUser.username !== undefined &&
        currentUser.password !== undefined && (
          <div className="align-center flex w-full flex-col justify-center">
            <Navbar currentUser={currentUser} />
            <SearchForm
              setCocktails={setCocktails}
              setIsLoading={setIsLoading}
            />
            <SearchResults cocktails={cocktails} isLoading={isLoading} />
          </div>
        )}
    </div>
  )
}

export default Home
