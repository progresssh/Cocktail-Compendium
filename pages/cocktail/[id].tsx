import Badge from 'components/Badge'
import LoadingSpinner from 'components/LoadingSpinner'
import { GetStaticPaths, GetStaticProps } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Cocktail, Drink, Ingredients_Mesures } from 'types/cocktail'

function Post({ post }: { post: Cocktail }) {
  const router = useRouter()
  if (router.isFallback) return <LoadingSpinner />

  const drink: Drink = post?.drinks[0]

  const getIngredients = () => {
    const items = []
    for (let i = 1; i < 15; i++) {
      items.push({
        id: i,
        ingredient: drink[('strIngredient' + i) as keyof Ingredients_Mesures],
        measure: drink[('strMeasure' + i) as keyof Ingredients_Mesures],
      })
    }
    return items
  }

  const ingredients = getIngredients()

  return (
    <div className="h-screen  w-screen overflow-auto bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200">
      <div className="space-y-4 p-4 md:w-1/2 md:p-16">
        <div className="p-2">
          <button onClick={() => router.push('/')}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
              />
            </svg>
          </button>
        </div>
        <div className="flex justify-center md:justify-start ">
          <div className="flex flex-col-reverse items-center justify-center md:flex-row-reverse md:items-start ">
            <div className="flex-col p-4 md:p-0 md:pl-4">
              <h1 className="text-2xl font-bold">{drink.strDrink}</h1>
              <div className="md:space-x-2">
                <Badge type="info" className=" bg-blue-200 italic">
                  {drink.strAlcoholic}
                </Badge>
                <Badge type="info" className=" bg-blue-200 italic">
                  {drink.strGlass}
                </Badge>
                <Badge type="info" className=" bg-blue-200 italic">
                  {drink.strCategory}
                </Badge>
              </div>
              <p>{drink.strInstructions}</p>
            </div>
            <Image
              src={drink.strDrinkThumb}
              height={200}
              width={200}
              alt={`Image of a ${drink.strDrink}`}
              className={'rounded-3xl drop-shadow-md '}
            />
          </div>
        </div>
        {drink.strVideo !== null && (
          <div className="pl-4 pr-4 md:p-0">
            <Link href={drink.strVideo}>
              <a className="text-blue-600 underline" target={'_blank'}>
                Video demonstration
              </a>
            </Link>
          </div>
        )}
        <div className="p-4 md:p-0">
          <h2 className="text-1xl font-bold">Ingredients</h2>
          <ul>
            {ingredients?.map((item) => {
              return (
                <li key={item.id}>
                  <span>{item.ingredient}</span>
                  <span className="pl-4 font-bold">{item.measure}</span>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { id: '' } }],
    fallback: true, // can also be true or 'blocking'
  }
}

// `getStaticPaths` requires using `getStaticProps`
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${params?.id}`
  const res = await fetch(url)
  const post = await res.json()

  return {
    // Passed to the page component as props
    props: { post },
  }
}

export default Post
