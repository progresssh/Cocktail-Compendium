import { Cocktail, Drink } from 'types/cocktail'
import Card from './Card'
import LoadingSpinner from './LoadingSpinner'

const SearchResults = ({
  cocktails,
  isLoading,
}: {
  cocktails: Cocktail | null
  isLoading: boolean
}) => {
  return (
    <ul className="flex flex-wrap justify-evenly gap-4 ">
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
