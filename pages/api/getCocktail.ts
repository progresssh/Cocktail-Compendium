import type { NextApiRequest, NextApiResponse } from 'next'

interface searchCocktailDBParams {
  text: string
  type: string
}
const requestOptions = {
  method: 'GET', // *GET, POST, PUT, DELETE, etc.
}

// Signin API endpoint
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === 'POST') {
    const { query, type } = req.body

    switch (type) {
      case 'cocktail': {
        const response = await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`,
          requestOptions,
        )

        const data = await response.json()
        return res.status(200).json(data)
      }

      case 'ingredient': {
        const response = await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${query}`,
          requestOptions,
        )

        const data = await response.json()
        return res.status(200).json(data)
      }
      case 'random': {
        const response = await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/random.php`,
          requestOptions,
        )

        const data = await response.json()
        return res.status(200).json(data)
      }
    }
  }

  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST'])
    return res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}
