import { Dispatch, SetStateAction, useState } from 'react'
import { Cocktail } from 'types/cocktail'
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
  { label: 'Cocktails', value: 'cocktail' },
  { label: 'Ingredients', value: 'ingredient' },
]

const SearchForm = ({ setCocktails, setIsLoading }: SearchFormProps) => {
  const [selectedItem, setSelectedItem] = useState<Item>(undefined!)
  const [query, setQuery] = useState({
    text: '',
    type: 'cocktail',
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
    } else {
      setCocktails(data)
    }

    setIsLoading(false)
  }

  return (
    <form onClick={(e) => e.preventDefault()}>
      <Input
        name="Search"
        label="Name"
        required={true}
        onChange={(e) => setQuery({ ...query, text: e.target.value })}
      ></Input>

      <Select
        items={types}
        label={'Category'}
        placeholder="Search drink by.."
        selectedItem={selectedItem}
        onChange={(e) => {
          setQuery({ ...query, type: e.value })
          setSelectedItem({ label: e.label, value: e.value })
        }}
      ></Select>

      <Button type="submit" onClick={handleClick}>
        Search
      </Button>
      <Button type="submit" onClick={handleRandomClick}>
        Try a random cocktail!
      </Button>
    </form>
  )
}

export default SearchForm
