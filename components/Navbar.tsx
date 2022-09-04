import { CurrentUser } from 'types/currentUser'

const Title = ({ currentUser }: { currentUser: CurrentUser }) => {
  const title = 'The Grand Cocktail Compendium'

  return (
    <div className="flex w-auto justify-center p-4 font-bold">
      <h1>{`Welcome to the ${title} ${currentUser.username} !`}</h1>
    </div>
  )
}

export default Title
