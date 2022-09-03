import type { NextApiRequest, NextApiResponse } from 'next'

const requestOptions = {
  method: 'GET', // *GET, POST, PUT, DELETE, etc.
}

// Signin API endpoint
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === 'POST') {
    const { query, type, random } = req.body

    if (query && type) {
      switch (type) {
        case 'cocktail': {
          const response = await fetch(
            `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`,
            requestOptions,
          )
          const data = await response.json()

          if (data.drinks !== null) {
            return res.status(200).json(data)
          } else {
            return res
              .status(500)
              .json({ message: 'No cocktails for this name' })
          }
        }

        case 'ingredient': {
          const response = await fetch(
            `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${query}`,
            requestOptions,
          )
          if (response.ok) {
            const data = await response.json()
            return res.status(200).json(data)
          } else {
            return res
              .status(500)
              .json({ message: 'No avaliable cocktails for this ingredient' })
          }
        }
        case 'true': {
          const response = await fetch(
            `https://www.thecocktaildb.com/api/json/v1/1/random.php`,
            requestOptions,
          )

          const data = await response.json()
          return res.status(200).json(data)
        }
      }
    } else {
      return res
        .status(400)
        .json({ message: 'Please provide a valid name and category' })
    }
  }

  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST'])
    return res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}
