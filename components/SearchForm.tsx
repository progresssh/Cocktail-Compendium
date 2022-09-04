import { Dispatch, SetStateAction, useState } from 'react'
import { Cocktail, Drink } from 'types/cocktail'
import { Request } from 'types/request'
import Button from './Button'
import Input from './Input'
import Select, { Item } from './Select'
import { showToast } from './Toast'

interface SearchFormProps {
  setCocktails: Dispatch<SetStateAction<Cocktail>>
  setIsLoading: Dispatch<SetStateAction<boolean>>
}

const types = [
  { label: 'Cocktails 🍸', value: 'cocktail' },
  { label: 'Ingredients 🍋', value: 'ingredient' },
]

const SearchForm = ({ setCocktails, setIsLoading }: SearchFormProps) => {
  const [selectedItem, setSelectedItem] = useState<Item>({
    label: '',
    value: '',
  })
  const [query, setQuery] = useState({
    text: '',
    type: '',
    random: 'false',
  })

  const handleRandomClick = async () => {
    setIsLoading(true)
    const requestOptions: Request = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: query.text,
        type: query.type,
        random: 'true',
      }),
    }

    const response = await fetch(
      'http://localhost:3000/api/getCocktail',
      requestOptions,
    )

    const data = await response.json()

    if (!response.ok) {
      showToast({
        type: 'error',
        title: 'Error searching',
        message: data.message,
      })
    } else {
      setCocktails(data)
    }

    setIsLoading(false)
  }

  const handleClick = async () => {
    setIsLoading(true)

    const requestOptions: Request = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: query.text,
        type: query.type,
        random: 'false',
      }),
    }

    const response = await fetch(
      'http://localhost:3000/api/getCocktail',
      requestOptions,
    )

    const data = await response.json()

    if (!response.ok) {
      showToast({
        type: 'error',
        title: 'Error searching',
        message: data.message,
      })
    } else if (query.type === 'ingredient') {
      const dataWithMetadata: Drink[] = []
      data.drinks.map(async (drink: Drink) => {
        const requestOptions: Request = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ id: drink.idDrink }),
        }

        const response = await fetch(
          'http://localhost:3000/api/getCocktailById',
          requestOptions,
        )

        const data = await response.json()
        dataWithMetadata.push(data.drinks[0])
        setCocktails({ drinks: dataWithMetadata })
      })
    } else if (query.type !== 'ingredient') {
      setCocktails(data)
    }

    setIsLoading(false)
  }

  return (
    <form
      onClick={(e) => e.preventDefault()}
      className={'mt-2 flex justify-center  p-4 pb-16'}
    >
      <div className="space-y-4">
        <Input
          name="Search"
          label="Name"
          required={true}
          onChange={(e) => setQuery({ ...query, text: e.target.value })}
        />

        <div className="md:max-w-sm">
          <Select
            items={types}
            label={'Category'}
            placeholder="Search drink by.."
            selectedItem={selectedItem}
            onChange={(e) => {
              setQuery({ ...query, type: e.value })
              setSelectedItem({ label: e.label, value: e.value })
            }}
          />
        </div>

        <div className="flex space-x-2">
          <Button type="submit" onClick={handleClick}>
            Search
          </Button>
          <Button type="submit" onClick={handleRandomClick}>
            Try a random cocktail !
          </Button>
        </div>
      </div>
    </form>
  )
}

export default SearchForm
