import type { NextApiRequest, NextApiResponse } from 'next'
import { promises as fs } from 'fs'
import { getUsersJSONPath, readUsers } from '../../utils/api/users'
import { User } from '../../types/user'

interface SignupResponse {
  user?: User
  message?: string
}

const writeUsers = async (users: User[]) => {
  const path = getUsersJSONPath()
  const data = JSON.stringify({ users })

  await fs.writeFile(path, data)
}

// Signup API endpoint
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<SignupResponse>,
) {
  if (req.method === 'POST') {
    const { username, password } = req.body

    if (username && password) {
      const users = await readUsers()
      const user = users.find((u) => u.username === username)

      if (user) {
        res.status(400).json({ message: 'Username already exists' })
      } else {
        const newUser = { username, password }
        users.push(newUser)
        await writeUsers(users)

        return res
          .status(201)
          .json({ message: 'User created successfully', user: newUser })
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
