export interface searchCocktailDBParams {
  text: string
  type: 'cocktail' | 'ingredients' | 'random'
}

const searchCocktailDB = async (query: searchCocktailDBParams) => {
  const requestOptions = {
    method: 'GET', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json',
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
  }

  switch (query.type) {
    case 'cocktail': {
      const response = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query.text}`,
        requestOptions,
      )

      const data = await response.json()
      return data
    }

    case 'ingredients': {
      const response = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${query.text}`,
        requestOptions,
      )

      const data = await response.json()
      return data
    }
    case 'random': {
      const response = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/random.php`,
        requestOptions,
      )

      const data = await response.json()
      return data
    }
  }
}

export default searchCocktailDB
