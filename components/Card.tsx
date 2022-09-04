import Image from 'next/image'
import Link from 'next/link'
import { Drink } from 'types/cocktail'
import Badge from './Badge'

const Card = ({ drink, key }: { drink: Drink; key: string }) => {
  return (
    <li
      className="h-80 w-80 overflow-clip rounded-xl bg-white/30 p-4 shadow-md backdrop-blur-3xl"
      key={key}
    >
      <Link href={`/cocktail/${drink.idDrink}`}>
        <a>
          <h2 className="flex justify-center pb-4 font-bold">
            {drink.strDrink}
          </h2>
          <div className="flex flex-auto space-x-2">
            <div className="flex flex-none flex-col">
              <Image
                src={drink.strDrinkThumb}
                height={100}
                width={100}
                alt={'Image of a drink'}
                className="  rounded-3xl"
              />
              <Badge type="info" className="mt-4 bg-blue-200 italic">
                {drink.strAlcoholic}
              </Badge>
              <Badge type="info" className="mt-1 bg-blue-200 italic">
                {drink.strGlass}
              </Badge>
              <Badge type="info" className="mt-1 bg-blue-200 italic">
                {drink.strCategory}
              </Badge>
            </div>

            <p>{drink.strInstructions}</p>
          </div>
        </a>
      </Link>
    </li>
  )
}

export default Card
