import { CurrentUser } from 'types/currentUser'

const Navbar = ({ currentUser }: { currentUser: CurrentUser }) => {
  const title = 'The Grand Cocktail Compendium'

  return (
    <div>
      <h1>{`Welcome to the ${title} !`}</h1>
      <span>{currentUser.username}</span>
    </div>
  )
}

export default Navbar
