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
    const { id } = req.body
    if (id) {
      const response = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`,
        requestOptions,
      )
      try {
        const data = await response.json()
        return res.status(200).json(data)
      } catch (error) {
        return res
          .status(500)
          .json({ message: 'No avaliable cocktails for this ingredient' })
      }
    }
  } else {
    return res
      .status(400)
      .json({ message: 'Please provide a valid name and category' })
  }

  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST'])
    return res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}
