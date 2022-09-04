import Image from 'next/image'
import { Cocktail, Drink } from 'types/cocktail'
import LoadingSpinner from './LoadingSpinner'

const Card = ({ drink, key }: { drink: Drink; key: string }) => {
  return (
    <li className="w-32" key={key}>
      <h2>{drink.strDrink}</h2>
      <div>
        <Image src={drink.strDrinkThumb} height={100} width={100} />
        <p>{drink.strInstructions}</p>
      </div>
    </li>
  )
}

const SearchResults = ({
  cocktails,
  isLoading,
}: {
  cocktails: Cocktail | null
  isLoading: boolean
}) => {
  return (
    <ul className="flex flex-wrap">
      {isLoading && (
        <div className="absolute">
          <LoadingSpinner size="sm" />
        </div>
      )}

      {cocktails?.drinks?.map((drink: Drink) => {
        return <Card key={drink.idDrink} drink={drink} />
      })}
    </ul>
  )
}

export default SearchResults
