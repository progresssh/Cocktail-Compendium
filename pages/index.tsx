import Button from 'components/Button'
import Input from 'components/Input'
import Select from 'components/Select'
import { useCurrentUserContext } from 'contexts/CurrentUserContext'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { Cocktail } from 'types/cocktail'
import searchCocktailDB, { searchCocktailDBParams } from 'utils/search'

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

const SearchResults = () => {
  return <ul>{}</ul>
}

const SearchForm = (
  setData: Dispatch<SetStateAction<Record<string, unknown>>>,
) => {
  const [query, setQuery] = useState<searchCocktailDBParams>({
    text: '',
    type: 'cocktail',
  })

  const handleClick = async () => {
    const data = await searchCocktailDB(query)

    console.log(data)
    setData(data)
  }

  return (
    <form onClick={(e) => e.preventDefault()}>
      <Input
        name="Search"
        label="Search for a cocktail..."
        onChange={(e) => setQuery({ ...query, text: e.target.value })}
      ></Input>

      <Button type="submit" onClick={handleClick}>
        Search
      </Button>
    </form>
  )
}

const Home: NextPage = () => {
  const [data, setData] = useState({})
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
            <SearchForm setData={setData} />
            <SearchResults />
          </div>
        )}
    </>
  )
}

export default Home
