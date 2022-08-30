import path from 'path'
import { promises as fs } from 'fs'
import { UsersJSON } from '../../types/user'

export const getUsersJSONPath = () => {
  const jsonDirectory = path.join(process.cwd(), 'json')
  const usersJSONPath = path.join(jsonDirectory, 'users.json')

  return usersJSONPath
}

export const readUsers = async () => {
  const path = getUsersJSONPath()
  const data = await fs.readFile(path, 'utf8')
  const { users } = JSON.parse(data) as UsersJSON

  return users
}
