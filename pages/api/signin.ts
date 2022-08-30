import type { NextApiRequest, NextApiResponse } from 'next'
import { User } from '../../types/user'
import { readUsers } from '../../utils/api/users'

interface SigninResponse {
  user?: User
  message?: string
}

// Signin API endpoint
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<SigninResponse>,
) {
  if (req.method === 'POST') {
    const { username, password } = req.body

    if (username && password) {
      const users = await readUsers()
      const user = users.find((u) => u.username === username)

      if (user && user.password === password) {
        return res.status(200).json({ user })
      }

      return res.status(401).json({ message: 'Invalid username or password' })
    } else {
      return res
        .status(400)
        .json({ message: 'Please provide username and password' })
    }
  } else {
    res.setHeader('Allow', ['POST'])
    return res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}
